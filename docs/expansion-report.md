# تقرير توسعة تصميم موهو 0.2.0

## الملخص التنفيذي

تم توسيع النواة المحلية من محلل MO ومحوّلات CSS/JSON إلى منصة وصف ودمج آمنة. يحتوي سجل MOHO على 130 قدرة مصنفة، ويحتوي الكتالوج الموثق آليًا على 389 إدخالًا مرشحًا من بيانات npm. لم تُضمّن هذه المشاريع كاعتماديات runtime؛ الحزمة الأساسية تظل مستقلة وتعرض metadata وطبقة adapters اختيارية فقط.

## أرقام التدقيق

| المؤشر | النتيجة |
| --- | ---: |
| المرشحون بعد تطبيع الملفات المرفقة | 604 |
| حزم npm المكتشفة بالمطابقة | 450 |
| حزم npm الفريدة | 450 |
| إدخالات ذات رخصة ضمن القائمة المسموحة | 389 |
| الإدخالات في catalog الموزع | 389 |
| القدرات المعلنة في MOHO | 130 |
| الاعتماديات التشغيلية الخارجية | 0 |
| ملفات الحزمة في فحص npm pack | 20 |
| حجم tarball التقريبي | 294.3 kB |
| الحجم غير المضغوط التقريبي | 2.0 MB |

## توزيع الرخص في الكتالوج

| الرخصة | العدد |
| --- | ---: |
| `Apache-2.0` | 30 |
| `BSD-2-Clause` | 4 |
| `BSD-3-Clause` | 8 |
| `CC0-1.0` | 1 |
| `ISC` | 26 |
| `MIT` | 313 |
| `MPL-2.0` | 4 |
| `Unlicense` | 1 |
| `WTFPL` | 1 |
| `Zlib` | 1 |

## أكثر الفئات ظهورًا في بيانات المصادر

| الفئة | العدد |
| --- | ---: |
| 1. أنظمة وتصميم واجهات المستخدم (UI Design Systems & Component Libraries) | 28 |
| 3. محريرات وتنسيق النصوص والمستندات (Text Editors & Document Formatting) | 18 |
| 2. أطر التنسيق والتخطيط CSS (CSS Frameworks & Methodologies) | 16 |
| 6. الأشكال الهندسية والمخططات التوضيحية (Diagrams, Flowcharts & Geometry) | 15 |
| 10. التحريك والتأثيرات البصرية (Animations & Visual Effects) | 13 |
| 5. الرسوم والمخططات البيانية (Charts & Data Visualization) | 12 |
| 9. الأيقونات والرموز (Icons & Vector Symbols) | 12 |
| 8. الخطوط والطباعة والتنسيق الطباعي (Fonts & Typography Libraries) | 11 |
| 5. لوحات الرسم والتوقيع والتفاعل باللمس (Canvas, Signature & Gesture) | 11 |
| 4. كتابة الرياضيات والرموز العلمية (Math & Science Rendering) | 10 |
| 7. تحسين وتجميع استمارة الإدخال (Form Beautifiers & Smart Control UI) | 9 |
| 2. إدارة وتنسيق النماذج المدخلة وتأكيدها بصرياً (Form Styling & UX Enhancements) | 9 |
| 10. واجهات التنبيه، الإشعارات، والبطاقات العائمة (Toaster, Modal & Popover FX) | 8 |
| 2. مؤثرات التمرير وقصص الويب التفاعلية (Scroll & Scrollytelling) | 8 |
| 4. معالجة الصور والتصفية البصرية (Image Processing & Filters) | 8 |
| 9. التعيين والتوجيه وتصميم الخرائط الجغرافية (Mapping & Geospatial Viz) | 8 |
| 6. تصميم الجداول المتقدمة وإدارة البيانات (Data Grids & Smart Tables) | 7 |
| 8. مكتبات البناء ثنائي وثلاثي الأبعاد (WebGL, Canvas & Shader Wrappers) | 7 |
| 11. مكتبات إتاحة الاستخدام والتمويه التكيفي (Accessibility & Skeleton Loaders) | 7 |
| 3. المعاينة المباشرة وتجربة المكونات بصرياً (UI Component Playground & Documentation) | 6 |


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
