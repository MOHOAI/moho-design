const test = require('node:test');
const assert = require('node:assert/strict');
const { compileMoToJson, validateMo } = require('../dist/index.cjs');

test('supports CommonJS consumers', () => {
  const document = {
    moho: 'mo',
    version: '1.0',
    name: 'CJS test',
    tokens: { color: { primary: '#000000' } }
  };
  assert.equal(validateMo(document).valid, true);
  assert.match(compileMoToJson(document), /CJS test/);
});
