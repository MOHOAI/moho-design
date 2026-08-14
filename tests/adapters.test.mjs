import test from 'node:test';
import assert from 'node:assert/strict';
import { createMohoAdapterRegistry, defineMohoAdapter } from '../dist/index.js';

test('adapter registry keeps optional integrations explicit', () => {
  const adapter = defineMohoAdapter({
    id: 'demo', packageName: 'demo-ui', displayName: 'Demo UI', source: 'https://example.com', license: 'MIT',
    capabilities: ['components'], status: 'optional'
  }, (options = {}) => ({ options }));
  const registry = createMohoAdapterRegistry([adapter]);
  assert.equal(registry.get('demo-ui').manifest.status, 'optional');
  assert.deepEqual(registry.get('demo-ui').create({ direction: 'rtl' }), { options: { direction: 'rtl' } });
  const manifests = registry.list();
  manifests[0].capabilities.push('mutated');
  assert.deepEqual(registry.list()[0].capabilities, ['components']);
});
