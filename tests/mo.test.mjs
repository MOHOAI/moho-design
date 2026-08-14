import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import {
  MoParseError,
  compileMoToCss,
  getCssVariableName,
  parseMo,
  stringifyMo,
  validateMo
} from '../dist/index.js';

const source = await readFile(new URL('../examples/moho-default.mo', import.meta.url), 'utf8');
const document = parseMo(source);

test('parses a valid .mo document', () => {
  assert.equal(document.moho, 'mo');
  assert.equal(document.version, '1.0');
  assert.equal(document.direction, 'rtl');
  assert.equal(document.components.button.accessibility.role, 'button');
});

test('compiles tokens and component tokens to CSS variables', () => {
  const css = compileMoToCss(document);
  assert.match(css, /--mo-color-primary: #6750A4;/);
  assert.match(css, /--mo-component-button-background: var\(--mo-color-primary\);/);
  assert.match(css, /--mo-component-button-focus-visible-outline-color: var\(--mo-color-outline\);/);
});

test('supports custom CSS selectors and stable names', () => {
  const css = compileMoToCss(document, { selector: '[data-mo-theme="dark"]', includeComments: false });
  assert.match(css, /^\[data-mo-theme="dark"\] \{/);
  assert.equal(getCssVariableName('Color', 'onPrimary'), '--mo-color-on-primary');
});

test('rejects invalid documents with structured issues', () => {
  const result = validateMo({ moho: 'wrong', version: '0.1', name: '', tokens: [] });
  assert.equal(result.valid, false);
  assert.ok(result.issues.some((issue) => issue.path === '$.moho'));
  assert.ok(result.issues.some((issue) => issue.path === '$.tokens'));
  assert.throws(() => parseMo('{"moho":"wrong"}'), MoParseError);
});

test('round-trips valid documents', () => {
  const serialized = stringifyMo(document);
  const roundTrip = parseMo(serialized);
  assert.deepEqual(roundTrip, document);
});
