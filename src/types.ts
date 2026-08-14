export type MoPrimitive = string | number | boolean | null;

export interface MoTokenReference {
  $ref: string;
}

export type MoTokenObject = { [key: string]: MoTokenValue };
export type MoTokenValue = MoPrimitive | MoTokenReference | MoTokenValue[] | MoTokenObject;
export type MoTokenMap = Record<string, MoTokenValue>;

export type MoDirection = 'ltr' | 'rtl' | 'auto';

export interface MoStateStyle {
  tokens?: MoTokenMap;
  attributes?: Record<string, string | number | boolean>;
}

export interface MoComponent {
  description?: string;
  parts?: string[];
  tokens?: MoTokenMap;
  states?: Record<string, MoStateStyle>;
  accessibility?: {
    role?: string;
    label?: string;
    keyboard?: string[];
    notes?: string[];
  };
}

export interface MoIntegration {
  name: string;
  purpose: string;
  license: string;
  source: string;
  optional?: boolean;
  redistribution?: 'allowed' | 'link-only' | 'unknown';
}

export interface MoTypography {
  families?: string[];
  weights?: number[];
  fallback?: string[];
  fontSource?: string;
}

export interface MoDocument {
  moho: 'mo';
  version: '1.0';
  name: string;
  description?: string;
  license?: string;
  direction?: MoDirection;
  locale?: string;
  tokens: MoTokenMap;
  typography?: MoTypography;
  components?: Record<string, MoComponent>;
  integrations?: MoIntegration[];
  metadata?: Record<string, MoPrimitive | MoPrimitive[]>;
}

export interface MoValidationIssue {
  path: string;
  message: string;
}

export interface MoValidationResult {
  valid: boolean;
  issues: MoValidationIssue[];
}

export interface ParseMoOptions {
  validate?: boolean;
}

export interface CompileCssOptions {
  selector?: string;
  includeComments?: boolean;
  resolveReferences?: boolean;
}

export interface CompileJsonOptions {
  pretty?: boolean;
}
