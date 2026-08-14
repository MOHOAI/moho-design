from __future__ import annotations

import json
from pathlib import Path

root = Path('/home/ubuntu/moho-design')
catalog = json.loads((root / 'catalog/verified-free-catalog.json').read_text(encoding='utf-8'))
entries = catalog['entries']
for entry in entries:
    for key in ('version', 'homepage', 'description', 'adapter'):
        if entry.get(key) is None:
            entry.pop(key, None)
out = root / 'src/catalog.ts'
header = '''export interface MohoCatalogEntry {\n  id: string;\n  name: string;\n  npmName: string;\n  version?: string;\n  license: string;\n  source: string;\n  homepage?: string;\n  description?: string;\n  categories: string[];\n  status: 'catalog-only';\n  bundled: false;\n  adapter?: string | null;\n  licenseVerifiedBy: string;\n  licenseVerifiedAt: string;\n}\n\n'''
body = 'export const MOHO_FREE_CATALOG: MohoCatalogEntry[] = ' + json.dumps(entries, ensure_ascii=False, indent=2) + ';\n\n'
body += '''export const listMohoCatalog = (query?: string) => {\n  if (!query?.trim()) return [...MOHO_FREE_CATALOG];\n  const normalized = query.trim().toLowerCase();\n  return MOHO_FREE_CATALOG.filter((entry) =>\n    [entry.name, entry.npmName, entry.description ?? '', entry.license, ...entry.categories]\n      .join(' ')\n      .toLowerCase()\n      .includes(normalized)\n  );\n};\n\nexport const getMohoCatalogEntry = (npmName: string) =>\n  MOHO_FREE_CATALOG.find((entry) => entry.npmName === npmName);\n\nexport const getMohoCatalogCount = () => MOHO_FREE_CATALOG.length;\n'''
out.write_text(header + body, encoding='utf-8')
print({'count': len(entries), 'output': str(out)})
