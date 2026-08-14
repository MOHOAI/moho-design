import test from 'node:test';
import assert from 'node:assert/strict';
import {
  MOHO_FEATURES,
  MOHO_FREE_CATALOG,
  listMohoCatalog,
  composeMoDocuments,
  compileMoToCss
} from '../dist/index.js';

test('MOHO exposes more than 100 declared capabilities', () => {
  assert.ok(MOHO_FEATURES.length > 100);
  assert.ok(MOHO_FEATURES.some((feature) => feature.id === 'theme-rtl'));
  assert.ok(MOHO_FEATURES.some((feature) => feature.status === 'adapter'));
});

test('free catalog contains at least 300 catalog-only entries', () => {
  assert.ok(MOHO_FREE_CATALOG.length >= 300);
  assert.equal(MOHO_FREE_CATALOG.every((entry) => entry.bundled === false), true);
  assert.ok(listMohoCatalog('MIT').length > 0);
});

test('composition merges independent MO documents and produces CSS', () => {
  const base = {
    moho: 'mo', version: '1.0', name: 'Base', tokens: { color: { primary: '#111111' } }
  };
  const overlay = {
    moho: 'mo', version: '1.0', name: 'Overlay', tokens: { space: { md: '1rem' } }
  };
  const merged = composeMoDocuments([base, overlay]);
  assert.equal(merged.tokens.color.primary, '#111111');
  assert.equal(merged.tokens.space.md, '1rem');
  assert.match(compileMoToCss(merged), /--mo-color-primary/);
  assert.match(compileMoToCss(merged), /--mo-space-md/);
});

test('composition rejects conflicting tokens by default', () => {
  const a = { moho: 'mo', version: '1.0', name: 'A', tokens: { color: { primary: '#111111' } } };
  const b = { moho: 'mo', version: '1.0', name: 'B', tokens: { color: { primary: '#222222' } } };
  assert.throws(() => composeMoDocuments([a, b]), /تعارض/);
  assert.equal(composeMoDocuments([a, b], { conflictStrategy: 'last-wins' }).tokens.color.primary, '#222222');
});
