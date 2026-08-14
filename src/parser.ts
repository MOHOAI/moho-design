import type { MoDocument, ParseMoOptions } from './types.js';
import { validateMo } from './validation.js';

export class MoParseError extends Error {
  readonly issues;

  constructor(message: string, issues: ReturnType<typeof validateMo>['issues']) {
    super(message);
    this.name = 'MoParseError';
    this.issues = issues;
  }
}

export const parseMo = (source: string, options: ParseMoOptions = {}): MoDocument => {
  if (typeof source !== 'string' || !source.trim()) {
    throw new MoParseError('تعذر تحليل ملف MO فارغ أو غير نصي.', [{ path: '$', message: 'المصدر فارغ.' }]);
  }
  let parsed: unknown;
  try {
    parsed = JSON.parse(source) as unknown;
  } catch (error) {
    const detail = error instanceof Error ? error.message : 'خطأ JSON غير معروف.';
    throw new MoParseError(`صيغة MO الحالية تعتمد JSON صالحًا: ${detail}`, [{ path: '$', message: detail }]);
  }
  if (options.validate !== false) {
    const result = validateMo(parsed);
    if (!result.valid) throw new MoParseError('ملف MO غير صالح.', result.issues);
  }
  return parsed as MoDocument;
};

export const stringifyMo = (document: MoDocument, space = 2): string => {
  const result = validateMo(document);
  if (!result.valid) throw new MoParseError('لا يمكن تسلسل ملف MO غير صالح.', result.issues);
  return `${JSON.stringify(document, null, space)}\n`;
};
