from __future__ import annotations

import json
from pathlib import Path

ROOT = Path('/home/ubuntu/moho-design')
source = json.loads((ROOT / 'docs/npm-search-audit.json').read_text(encoding='utf-8'))
entries = []
for item in source['results']:
    if not item.get('licenseAllowed'):
        continue
    entries.append({
        'id': item['npmName'].replace('@', '').replace('/', '-').replace('_', '-'),
        'name': item['name'],
        'npmName': item['npmName'],
        'version': item.get('latestVersion'),
        'license': item['license'],
        'source': item.get('repository') or item.get('homepage') or f"https://www.npmjs.com/package/{item['npmName']}",
        'homepage': item.get('homepage'),
        'description': item.get('description'),
        'categories': item.get('categories', []),
        'status': 'catalog-only',
        'bundled': False,
        'adapter': None,
        'licenseVerifiedBy': 'npm-registry-metadata',
        'licenseVerifiedAt': '2026-08-14'
    })
entries.sort(key=lambda item: item['npmName'].lower())
result = {
    'name': 'Moho Design Free Integration Catalog',
    'version': '1.0.0',
    'generatedFrom': source['source'],
    'generatedAt': '2026-08-14',
    'count': len(entries),
    'policy': 'The core package ships zero third-party runtime dependencies. Catalog entries are optional, link-only metadata and may be used to select a compatible adapter. Verify upstream terms before redistribution of assets or code.',
    'allowedLicenses': ['MIT', 'ISC', 'Apache-2.0', 'BSD-2-Clause', 'BSD-3-Clause', '0BSD', 'CC0-1.0', 'Unlicense', 'MPL-2.0', 'Zlib', 'WTFPL'],
    'entries': entries
}
if result['count'] < 300:
    raise SystemExit(f"catalog has only {result['count']} entries")
out = ROOT / 'catalog/verified-free-catalog.json'
out.parent.mkdir(parents=True, exist_ok=True)
out.write_text(json.dumps(result, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
print(json.dumps({'count': result['count'], 'output': str(out)}, ensure_ascii=False))
