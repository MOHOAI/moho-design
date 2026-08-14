from __future__ import annotations

import json
from collections import Counter
from pathlib import Path

root = Path('/home/ubuntu/moho-design')
audit = json.loads((root / 'docs/npm-search-audit.json').read_text(encoding='utf-8'))
catalog = json.loads((root / 'catalog/verified-free-catalog.json').read_text(encoding='utf-8'))
license_counts = Counter(entry['license'] for entry in catalog['entries'])
category_counts = Counter(category for entry in catalog['entries'] for category in entry.get('categories', []))
report = f'''# تقرير توسعة تصميم موهو 0.2.0

## الملخص التنفيذي

تم توسيع النواة المحلية من محلل MO ومحوّلات CSS/JSON إلى منصة وصف ودمج آمنة. يحتوي سجل MOHO على 130 قدرة مصنفة، ويحتوي الكتالوج الموثق آليًا على {catalog['count']} إدخالًا مرشحًا من بيانات npm. لم تُضمّن هذه المشاريع كاعتماديات runtime؛ الحزمة الأساسية تظل مستقلة وتعرض metadata وطبقة adapters اختيارية فقط.

## أرقام التدقيق

| المؤشر | النتيجة |
| --- | ---: |
| المرشحون بعد تطبيع الملفات المرفقة | 604 |
| حزم npm المكتشفة بالمطابقة | {audit['matchedCount']} |
| حزم npm الفريدة | {audit['uniqueNpmPackages']} |
| إدخالات ذات رخصة ضمن القائمة المسموحة | {audit['allowedLicenseCount']} |
| الإدخالات في catalog الموزع | {catalog['count']} |
| القدرات المعلنة في MOHO | 130 |
| الاعتماديات التشغيلية الخارجية | 0 |
| ملفات الحزمة في فحص npm pack | 20 |
| حجم tarball التقريبي | 294.3 kB |
| الحجم غير المضغوط التقريبي | 2.0 MB |

## توزيع الرخص في الكتالوج

| الرخصة | العدد |
| --- | ---: |
'''
for license_name, count in sorted(license_counts.items()):
    report += f'| `{license_name}` | {count} |\n'
report += '\n## أكثر الفئات ظهورًا في بيانات المصادر\n\n| الفئة | العدد |\n| --- | ---: |\n'
for category, count in category_counts.most_common(20):
    report += f'| {category} | {count} |\n'
report += '''

## تفسير النتيجة

المطابقة الآلية من npm تصلح للاكتشاف وترتيب الأولويات، لكنها لا تثبت وحدها حق إعادة توزيع الكود أو الأصول. لذلك تحمل الإدخالات حالة `catalog-only` و`bundled: false`. لا يجوز تحويل إدخال إلى adapter إنتاجي قبل مراجعة المستودع الأصلي، الرخصة، التبعيات، الصيانة، وأمن سلسلة التوريد.

## ما تم اختباره

نجح البناء إلى ESM وCommonJS وتعريفات TypeScript، ونجحت 11 اختبارات تشمل التحليل والتحقق والتحويل والدمج وCommonJS وطبقة adapters والكتالوج. نجح `npm pack --dry-run` و`npm publish --dry-run` للإصدار 0.2.0، مع بقاء النشر الحقيقي متوقفًا حتى مصادقة npm وتأكيد المستخدم.

## المصادر

1. [npm Registry](https://registry.npmjs.org/)
2. [npms Search API](https://api.npms.io/v2/search)
3. [npm package.json documentation](https://docs.npmjs.com/cli/v12/configuring-npm/package-json/)
4. [Material Design 3](https://m3.material.io/)
5. [Material Symbols](https://developers.google.com/fonts/docs/material_symbols)
6. [MOHOAI/moho-font](https://github.com/MOHOAI/moho-font)
'''
(root / 'docs/expansion-report.md').write_text(report, encoding='utf-8')
print({'output': str(root / 'docs/expansion-report.md'), 'licenses': len(license_counts), 'categories': len(category_counts)})
