from __future__ import annotations

import json
import re
import time
from pathlib import Path
from urllib.parse import quote

import requests

ROOT = Path('/home/ubuntu/moho-design')
INPUT = ROOT / 'docs/normalized-library-list.json'
OUTPUT = ROOT / 'docs/npm-license-audit.json'

allowed = {
    'MIT', 'ISC', 'Apache-2.0', 'BSD-2-Clause', 'BSD-3-Clause',
    '0BSD', 'CC0-1.0', 'Unlicense', 'MPL-2.0', 'Zlib', 'WTFPL'
}

def slug_variants(name: str) -> list[str]:
    raw = re.sub(r'\([^)]*\)', '', name).strip()
    variants = [raw, raw.replace('/', ' '), raw.replace('.', ' '), raw.replace('-', ' ')]
    result = []
    for value in variants:
        value = re.sub(r'[^A-Za-z0-9@/_ -]+', '', value).strip()
        if value and value not in result:
            result.append(value)
    return result

def get_package(name: str):
    for query in slug_variants(name):
        try:
            response = requests.get(f'https://registry.npmjs.org/{quote(query, safe="@/")}', timeout=10)
            if response.status_code == 200:
                data = response.json()
                if isinstance(data, dict) and data.get('name'):
                    return data
        except requests.RequestException:
            pass
    return None

data = json.loads(INPUT.read_text(encoding='utf-8'))
results = []
for index, candidate in enumerate(data['candidates'], start=1):
    package = get_package(candidate['name'])
    if package:
        latest = package.get('dist-tags', {}).get('latest')
        metadata = package.get('versions', {}).get(latest, {}) if latest else {}
        license_value = metadata.get('license', package.get('license'))
        if isinstance(license_value, dict):
            license_value = license_value.get('type')
        repository = metadata.get('repository', package.get('repository'))
        if isinstance(repository, dict):
            repository = repository.get('url') or repository.get('directory')
        results.append({
            **candidate,
            'npmName': package.get('name'),
            'latestVersion': latest,
            'license': license_value or 'UNKNOWN',
            'licenseAllowed': license_value in allowed,
            'repository': repository,
            'homepage': metadata.get('homepage', package.get('homepage')),
            'description': metadata.get('description', package.get('description')),
            'reviewStatus': 'npm-metadata-found',
            'bundling': 'adapter-or-catalog-only' if license_value in allowed else 'excluded-until-license-review'
        })
    else:
        results.append({**candidate, 'reviewStatus': 'not-found-in-npm', 'bundling': 'excluded-until-source-review'})
    if index % 25 == 0:
        print(f'checked {index}/{len(data["candidates"])}')
    time.sleep(0.03)

summary = {
    'source': 'https://registry.npmjs.org/',
    'candidateCount': len(results),
    'npmMetadataFound': sum(item['reviewStatus'] == 'npm-metadata-found' for item in results),
    'allowedLicenseCount': sum(bool(item.get('licenseAllowed')) for item in results),
    'uniqueNpmPackages': len({item.get('npmName') for item in results if item.get('npmName')}),
    'policy': 'Only packages with a discovered, allowed open-source license can enter the verified catalog. No package is bundled into the core automatically.',
    'results': results
}
OUTPUT.write_text(json.dumps(summary, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
print(json.dumps({key: summary[key] for key in ('candidateCount', 'npmMetadataFound', 'allowedLicenseCount', 'uniqueNpmPackages')}, ensure_ascii=False))
