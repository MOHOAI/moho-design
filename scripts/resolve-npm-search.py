from __future__ import annotations

import json
import re
import time
from pathlib import Path
from urllib.parse import quote

import requests

ROOT = Path('/home/ubuntu/moho-design')
INPUT = ROOT / 'docs/normalized-library-list.json'
OUTPUT = ROOT / 'docs/npm-search-audit.json'
ALLOWED = {'MIT', 'ISC', 'Apache-2.0', 'BSD-2-Clause', 'BSD-3-Clause', '0BSD', 'CC0-1.0', 'Unlicense', 'MPL-2.0', 'Zlib', 'WTFPL'}
STOP = {'js', 'javascript', 'web', 'ui', 'core', 'library', 'react', 'vue', 'google', 'css', 'api', 'for', 'the', 'and', 'with'}

def tokens(value: str) -> set[str]:
    return {token for token in re.findall(r'[a-z0-9]+', value.lower()) if token not in STOP and len(token) > 1}

def score(query: str, package_name: str, description: str = '') -> float:
    q = tokens(query)
    p = tokens(package_name) | tokens(description)
    if not q or not p:
        return 0.0
    exact = 1.0 if re.sub(r'[^a-z0-9]+', '', query.lower()) == re.sub(r'[^a-z0-9]+', '', package_name.lower()) else 0.0
    overlap = len(q & p) / len(q)
    return max(exact, overlap)

def fetch_metadata(name: str):
    try:
        response = requests.get(f'https://registry.npmjs.org/{quote(name, safe="@/")}', timeout=10)
        if response.status_code != 200:
            return None
        data = response.json()
        latest = data.get('dist-tags', {}).get('latest')
        version = data.get('versions', {}).get(latest, {}) if latest else {}
        license_value = version.get('license', data.get('license'))
        if isinstance(license_value, dict):
            license_value = license_value.get('type')
        repository = version.get('repository', data.get('repository'))
        if isinstance(repository, dict):
            repository = repository.get('url')
        return {
            'npmName': data.get('name'),
            'latestVersion': latest,
            'license': license_value or 'UNKNOWN',
            'licenseAllowed': license_value in ALLOWED,
            'repository': repository,
            'homepage': version.get('homepage', data.get('homepage')),
            'description': version.get('description', data.get('description'))
        }
    except requests.RequestException:
        return None

def search(query: str):
    try:
        response = requests.get('https://api.npms.io/v2/search', params={'q': query, 'size': 5}, timeout=15)
        if response.status_code != 200:
            return []
        return response.json().get('results', [])
    except requests.RequestException:
        return []

data = json.loads(INPUT.read_text(encoding='utf-8'))
results = []
seen = set()
for index, candidate in enumerate(data['candidates'], start=1):
    query = candidate['name']
    options = search(query)
    ranked = []
    for item in options:
        package = item.get('package', {})
        name = package.get('name')
        if not name:
            continue
        ranked.append((score(query, name, package.get('description', '')), package))
    ranked.sort(key=lambda pair: pair[0], reverse=True)
    selected = None
    for match_score, package in ranked:
        if match_score >= 0.55 and package.get('name') not in seen:
            selected = (match_score, package)
            break
    if selected:
        match_score, package = selected
        metadata = fetch_metadata(package['name'])
        if metadata:
            seen.add(metadata['npmName'])
            results.append({
                **candidate,
                **metadata,
                'matchScore': round(match_score, 3),
                'reviewStatus': 'npm-search-match',
                'bundling': 'adapter-or-catalog-only' if metadata['licenseAllowed'] else 'excluded-until-license-review'
            })
    if index % 25 == 0:
        print(f'searched {index}/{len(data["candidates"])}; matches={len(results)}')
    time.sleep(0.04)

summary = {
    'source': 'https://api.npms.io/v2/search and https://registry.npmjs.org/',
    'candidateCount': len(data['candidates']),
    'matchedCount': len(results),
    'allowedLicenseCount': sum(bool(item.get('licenseAllowed')) for item in results),
    'uniqueNpmPackages': len({item.get('npmName') for item in results}),
    'policy': 'Search matches are discovery evidence, not a substitute for manual project review. Only allowed licenses enter the free catalog; core bundling remains disabled.',
    'results': results
}
OUTPUT.write_text(json.dumps(summary, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
print(json.dumps({key: summary[key] for key in ('candidateCount', 'matchedCount', 'allowedLicenseCount', 'uniqueNpmPackages')}, ensure_ascii=False))
