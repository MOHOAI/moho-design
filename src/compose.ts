import type { MoComponent, MoDocument, MoIntegration, MoTokenMap, MoTokenValue } from './types.js';

export type MohoConflictStrategy = 'error' | 'first-wins' | 'last-wins';

export interface ComposeMoOptions {
  conflictStrategy?: MohoConflictStrategy;
  name?: string;
  description?: string;
  license?: string;
  direction?: MoDocument['direction'];
  locale?: string;
}

export class MohoCompositionError extends Error {
  readonly path: string;
  constructor(message: string, path: string) {
    super(`${message} (${path})`);
    this.name = 'MohoCompositionError';
    this.path = path;
  }
}

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null && !Array.isArray(value);

const clone = <T>(value: T): T => JSON.parse(JSON.stringify(value)) as T;

const mergeValue = (current: MoTokenValue | undefined, incoming: MoTokenValue, path: string, strategy: MohoConflictStrategy): MoTokenValue => {
  if (current === undefined) return clone(incoming);
  if (isRecord(current) && isRecord(incoming) && !('$ref' in current) && !('$ref' in incoming)) {
    const output: Record<string, MoTokenValue> = clone(current) as Record<string, MoTokenValue>;
    for (const [key, value] of Object.entries(incoming)) output[key] = mergeValue(output[key], value as MoTokenValue, `${path}.${key}`, strategy);
    return output;
  }
  if (JSON.stringify(current) === JSON.stringify(incoming)) return clone(current);
  if (strategy === 'first-wins') return clone(current);
  if (strategy === 'last-wins') return clone(incoming);
  throw new MohoCompositionError('يوجد تعارض بين قيمتين في نظام التصميم.', path);
};

const mergeRecord = <T extends Record<string, unknown>>(current: T, incoming: T, path: string, strategy: MohoConflictStrategy): T => {
  const output: Record<string, unknown> = clone(current);
  for (const [key, value] of Object.entries(incoming)) {
    const existing = output[key];
    if (existing === undefined) output[key] = clone(value);
    else if (isRecord(existing) && isRecord(value)) output[key] = mergeRecord(existing, value, `${path}.${key}`, strategy);
    else if (JSON.stringify(existing) !== JSON.stringify(value)) {
      if (strategy === 'first-wins') continue;
      if (strategy === 'last-wins') output[key] = clone(value);
      else throw new MohoCompositionError('يوجد تعارض بين تعريفين في نظام التصميم.', `${path}.${key}`);
    }
  }
  return output as T;
};

const mergeIntegrations = (documents: MoDocument[]): MoIntegration[] => {
  const output = new Map<string, MoIntegration>();
  for (const document of documents) for (const integration of document.integrations ?? []) {
    const key = integration.name.toLowerCase();
    if (!output.has(key)) output.set(key, clone(integration));
  }
  return [...output.values()];
};

export const composeMoDocuments = (documents: MoDocument[], options: ComposeMoOptions = {}): MoDocument => {
  if (!documents.length) throw new MohoCompositionError('يلزم تمرير ملف MO واحد على الأقل.', '$');
  const strategy = options.conflictStrategy ?? 'error';
  const first = documents[0];
  const tokens = documents.slice(1).reduce((result, document) => mergeRecord(result, document.tokens, '$.tokens', strategy), clone(first.tokens));
  const components = documents.slice(1).reduce((result, document) => mergeRecord(result, document.components ?? {}, '$.components', strategy), clone(first.components ?? {}));
  const typography = documents.slice(1).reduce((result, document) => mergeRecord(result as Record<string, unknown>, (document.typography ?? {}) as unknown as Record<string, unknown>, '$.typography', strategy), clone(first.typography ?? {}) as unknown as Record<string, unknown>);
  const metadata = documents.slice(1).reduce((result, document) => mergeRecord(result, document.metadata ?? {}, '$.metadata', strategy), clone(first.metadata ?? {}));
  return {
    moho: 'mo',
    version: '1.0',
    name: options.name ?? first.name,
    description: options.description ?? first.description,
    license: options.license ?? first.license,
    direction: options.direction ?? first.direction,
    locale: options.locale ?? first.locale,
    tokens,
    typography,
    components: components as Record<string, MoComponent>,
    integrations: mergeIntegrations(documents),
    metadata
  };
};

export const createMohoSystem = (base: MoDocument, ...overlays: MoDocument[]) =>
  composeMoDocuments([base, ...overlays], { conflictStrategy: 'last-wins', name: 'تصميم موهو' });
