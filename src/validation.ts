import type {
  MoComponent,
  MoDocument,
  MoTokenMap,
  MoTokenValue,
  MoValidationIssue,
  MoValidationResult
} from './types.js';

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null && !Array.isArray(value);

const isTokenValue = (value: unknown): value is MoTokenValue => {
  if (value === null || typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
    return true;
  }
  if (Array.isArray(value)) return value.every(isTokenValue);
  if (!isRecord(value)) return false;
  if ('$ref' in value) return typeof value.$ref === 'string' && Object.keys(value).every((key) => key === '$ref');
  return Object.values(value).every(isTokenValue);
};

const validateTokenMap = (tokens: unknown, path: string, issues: MoValidationIssue[]): tokens is MoTokenMap => {
  if (!isRecord(tokens)) {
    issues.push({ path, message: 'يجب أن تكون قيمة tokens كائنًا.' });
    return false;
  }
  for (const [key, value] of Object.entries(tokens)) {
    if (!key.trim()) issues.push({ path: `${path}.${key}`, message: 'اسم السمة لا يمكن أن يكون فارغًا.' });
    if (!isTokenValue(value)) issues.push({ path: `${path}.${key}`, message: 'قيمة السمة غير مدعومة.' });
  }
  return true;
};

const validateComponent = (component: unknown, path: string, issues: MoValidationIssue[]) => {
  if (!isRecord(component)) {
    issues.push({ path, message: 'يجب أن يكون تعريف المكوّن كائنًا.' });
    return;
  }
  const typedComponent = component as Partial<MoComponent>;
  if (typedComponent.tokens !== undefined) validateTokenMap(typedComponent.tokens, `${path}.tokens`, issues);
  if (typedComponent.states !== undefined) {
    if (!isRecord(typedComponent.states)) {
      issues.push({ path: `${path}.states`, message: 'يجب أن تكون states كائنًا.' });
    } else {
      for (const [state, style] of Object.entries(typedComponent.states)) {
        if (!isRecord(style)) {
          issues.push({ path: `${path}.states.${state}`, message: 'يجب أن تكون حالة المكوّن كائنًا.' });
        } else if (style.tokens !== undefined) {
          validateTokenMap(style.tokens, `${path}.states.${state}.tokens`, issues);
        }
      }
    }
  }
};

export const validateMo = (input: unknown): MoValidationResult => {
  const issues: MoValidationIssue[] = [];
  if (!isRecord(input)) {
    return { valid: false, issues: [{ path: '$', message: 'ملف MO يجب أن يكون كائن JSON.' }] };
  }
  if (input.moho !== 'mo') issues.push({ path: '$.moho', message: 'القيمة المطلوبة هي "mo".' });
  if (input.version !== '1.0') issues.push({ path: '$.version', message: 'الإصدار المدعوم حاليًا هو "1.0".' });
  if (typeof input.name !== 'string' || !input.name.trim()) issues.push({ path: '$.name', message: 'name مطلوب ويجب أن يكون نصًا غير فارغ.' });
  if (input.description !== undefined && typeof input.description !== 'string') issues.push({ path: '$.description', message: 'description يجب أن يكون نصًا.' });
  if (input.direction !== undefined && !['ltr', 'rtl', 'auto'].includes(String(input.direction))) issues.push({ path: '$.direction', message: 'direction يجب أن يكون ltr أو rtl أو auto.' });
  validateTokenMap(input.tokens, '$.tokens', issues);
  if (input.components !== undefined) {
    if (!isRecord(input.components)) {
      issues.push({ path: '$.components', message: 'components يجب أن يكون كائنًا.' });
    } else {
      for (const [name, component] of Object.entries(input.components)) validateComponent(component, `$.components.${name}`, issues);
    }
  }
  if (input.integrations !== undefined && !Array.isArray(input.integrations)) {
    issues.push({ path: '$.integrations', message: 'integrations يجب أن تكون مصفوفة.' });
  }
  return { valid: issues.length === 0, issues };
};
