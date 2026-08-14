from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path('/home/ubuntu/upload')
OUT = Path('/home/ubuntu/moho-design/docs/normalized-library-list.json')
FILES = sorted(ROOT.glob('pasted_content*.txt'))

heading = re.compile(r'^(?:#{1,6}\s+|\d+\.\s+|[A-Z]-\s*)(.+?)\s*$')
item = re.compile(r'^\s*(?:\*|-|•)\s+(.+?)\s*$')
plain_item = re.compile(r'^\s*([A-Z][A-Za-z0-9][^:*]{1,100})(?:\s*\([^)]*\))?\s*$')

records: dict[str, dict] = {}
current_category = 'Uncategorized'

for path in FILES:
    text = path.read_text(encoding='utf-8')
    for raw in text.splitlines():
        line = raw.strip()
        if not line or line in {'---'}:
            continue
        if line.startswith('##') or re.match(r'^\d+\.\s+', line) or re.match(r'^[A-Z]-\s+', line):
            match = heading.match(line)
            if match:
                current_category = re.sub(r'\s+', ' ', match.group(1)).strip()
            continue
        match = item.match(raw) or plain_item.match(raw)
        if not match:
            continue
        value = re.sub(r'\s+', ' ', match.group(1)).strip()
        value = value.rstrip(' .')
        if len(value) < 2 or value.lower() in {'and', 'or'}:
            continue
        key = re.sub(r'[^a-z0-9]+', '', value.lower())
        if not key:
            continue
        record = records.setdefault(key, {'name': value, 'categories': set(), 'sources': set()})
        record['categories'].add(current_category)
        record['sources'].add(path.name)

normalized = []
for key, record in sorted(records.items(), key=lambda pair: pair[1]['name'].lower()):
    normalized.append({
        'id': key,
        'name': record['name'],
        'categories': sorted(record['categories']),
        'sourceFiles': sorted(record['sources']),
        'reviewStatus': 'needs-web-verification',
        'licenseStatus': 'unverified',
        'bundling': 'not-in-core'
    })

result = {
    'sourceFiles': [path.name for path in FILES],
    'uniqueCandidateCount': len(normalized),
    'policy': 'This is a candidate inventory only. No project is approved for bundling until its official source, license, maintenance, and browser compatibility are verified.',
    'candidates': normalized
}
OUT.parent.mkdir(parents=True, exist_ok=True)
OUT.write_text(json.dumps(result, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
print(json.dumps({'files': len(FILES), 'uniqueCandidateCount': len(normalized), 'output': str(OUT)}, ensure_ascii=False))
