# نتائج التحليل الأولي لنظام تصميم موهو

## هوية المشروع الحالية

- المؤسسة المحددة من المستخدم: `MOHOAI`.
- المستودع القائم: `https://github.com/MOHOAI/moho-font`.
- المستودع القائم عام ويحتوي على حزمة TypeScript ونسخة Python.
- `moho-font` في الإصدار `0.2.0`، يستهدف Node.js 18+، ويدعم ESM وCommonJS، ورخصة كوده MIT.
- المستودع القائم يفصل بوضوح بين رخصة كود المكتبة ورخصة كل خط خارجي؛ يجب الحفاظ على هذا الفصل في تصميم موهو.

## تفسير امتداد `.mo`

تعريف MO المقترح في هذا المشروع هو **ملف مصدر تصميم موحّد**، وليس حزمة npm. الملف يصف:

1. بيانات الوثيقة وإصدار مواصفة MO.
2. السمات التصميمية Design Tokens مثل الألوان، الخطوط، المقاييس، نصف قطر الحواف، الظلال، الحركة، ونقاط التوقف.
3. قواعد الاتجاه واللغة وإمكانية الوصول.
4. مكوّنات واجهة قابلة لإعادة الاستخدام، مع حالات مثل hover وfocus وdisabled.
5. مكتبات أو مزوّدات اختيارية، مع اسمها ورابطها ورخصتها؛ لا تُضمّن مكتبة خارجية في الحزمة إلا إذا كانت رخصتها مجانية/مفتوحة ومسموحًا بإعادة توزيعها.
6. مخرجات قابلة للتحويل إلى CSS وJSON وJavaScript/TypeScript.

لأن الصيغة جديدة، ستكون قابلة للقراءة البشرية باستخدام بنية JSON ذات غلاف MO واضح، مع امتداد `.mo`. سيُوفّر المحلل `parseMo`، والتحقق `validateMo`، والتحويل `compileMoToCss` و`compileMoToJson`، وتصدير قالب موحّد.

## سياسة الأدوات والمصادر المجانية

سيبدأ الإصدار الأول بطبقة أصلية بلا اعتماديات تشغيلية خارجية، لتجنب خلط تراخيص أو تحميل أدوات مدفوعة. ستُذكر الأدوات الخارجية كتكاملات اختيارية فقط عند الحاجة، وتُخزّن بيانات رخصتها ومصدرها في الكتالوج.

### عناصر يمكن اعتمادها كمراجع أو تكاملات مجانية

| العنصر | الاستخدام | الترخيص/الحالة | قرار الإصدار الأول |
| --- | --- | --- | --- |
| Material Design 3 | مرجع نظام الألوان والمكوّنات والتخطيط | نظام تصميم مفتوح المصدر وفق الموقع الرسمي | استلهام المفاهيم، لا نسخ أصول غير لازمة |
| `moho-font` | كتالوج خطوط عربية مفتوحة وروابط CSS | كود MIT؛ الخطوط الخارجية لها رخص منفصلة | تكامل اختياري عبر adapter، دون إعادة توزيع الخطوط تلقائيًا |
| Material Symbols | أيقونات اختيارية | Apache License 2.0 | تضمين adapter أو CSS اختياري، لا تنزيل كامل مجموعة الأيقونات |
| Radix UI | مرجع لمكوّنات الوصول في React | مشروع مفتوح المصدر حسب الموقع الرسمي | تكامل لاحق اختياري، ليس اعتمادًا أساسيًا |
| Google Fonts | مصدر روابط خطوط مفتوحة | كل عائلة لها رخصتها الخاصة | السماح فقط بالعائلات ذات الترخيص الموثق |
| `axe-core` | اختبار إمكانية الوصول للمستهلك | Apache 2.0 | devDependency اختيارية مستقبلية، ليست runtime dependency |

### عناصر يجب استبعادها من التجميع الأساسي

تُستبعد الخدمات المدفوعة أو ذات الخطط المدفوعة أو التي لا تسمح رخصتها بإعادة التوزيع المباشر، مثل Tailwind UI وAdobe Fonts وKendo UI وDevExpress Web Controls وHighcharts التجاري وMapbox API المدفوع حسب الاستخدام و8th Wall وأي عنصر غير موثق الترخيص. وجود نسخة مجانية أو تجربة مجانية لا يكفي لإدراج الأداة في حزمة «مجانية بالكامل».

## قرارات افتراضية قابلة للتعديل

- اللغة: TypeScript مع مخرجات ESM وCommonJS.
- Node.js: الإصدار 18 أو أحدث.
- اسم المشروع المحلي: `moho-design`.
- اسم الحزمة المقترح: `@mohoai/moho-design` إن كان النطاق متاحًا، وإلا `moho-design` بعد إبلاغ المستخدم.
- رخصة الكود: MIT.
- النشر العام: غير منفّذ قبل تأكيد صريح منفصل لـ GitHub وnpm.
- لا تُضمّن أسرارًا، مفاتيح API، ملفات `.env`، أو أصول خطوط خارجية دون مراجعة رخصتها.

## المصادر

1. [مستودع MOHOAI](https://github.com/MOHOAI)
2. [مستودع moho-font](https://github.com/MOHOAI/moho-font)
3. [بيانات package.json في moho-font](https://raw.githubusercontent.com/MOHOAI/moho-font/main/package.json)
4. [README في moho-font](https://raw.githubusercontent.com/MOHOAI/moho-font/main/README.md)
5. [Material Design 3](https://m3.material.io/)
6. [Material Symbols licensing and usage](https://developers.google.com/fonts/docs/material_symbols)
7. [Radix UI](https://www.radix-ui.com/)


## بحث التوسعة في 2026-08-14

استُخدمت القوائم المرفقة كجرد أولي، ثم فُحصت npm Registry وواجهة بحث npms لاكتشاف أسماء الحزم الفعلية بدل افتراض أن اسم المشروع يساوي اسم حزمة npm. نتج عن التطبيع 604 أسماء مرشحة، وعن مطابقة البحث 450 حزمة فريدة، منها 389 حزمة ذات رخصة ضمن قائمة MOHO المسموح بها: MIT وISC وApache-2.0 وBSD-2-Clause وBSD-3-Clause و0BSD وCC0-1.0 وUnlicense وMPL-2.0 وZlib وWTFPL. هذه النتيجة دليل اكتشاف آلي وليست اعتمادًا قانونيًا نهائيًا؛ لذلك يوسم كل إدخال `catalog-only` ولا تُضمّن أي حزمة طرف ثالث داخل النواة.

المصادر الخارجية المستخدمة:

1. [npm Registry metadata API](https://registry.npmjs.org/)
2. [npms package search API](https://api.npms.io/v2/search)
3. [npm package.json documentation](https://docs.npmjs.com/cli/v12/configuring-npm/package-json/)
4. [npm publishing documentation](https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry)
5. [GitHub CLI repository creation](https://cli.github.com/manual/gh_repo_create)
6. [Material Design 3](https://m3.material.io/)
7. [Material Symbols documentation](https://developers.google.com/fonts/docs/material_symbols)
8. [MOHO font source repository](https://github.com/MOHOAI/moho-font)
9. [Tailwind CSS source repository](https://github.com/tailwindlabs/tailwindcss)
10. [Radix UI primitives](https://github.com/radix-ui/primitives)
11. [Lucide source repository](https://github.com/lucide-icons/lucide)

سياسة المشروع: لا تُعد عبارة «مجاني» كافية لإعادة توزيع كود أو أصول؛ يجب الاحتفاظ بالرخصة والمصدر والتحقق اليدوي من شروط كل مشروع قبل أي bundling أو adapter فعلي.
