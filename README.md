# تصميم موهو | Moho Design

**تصميم موهو (Moho Design)** هو تنسيق مفتوح لملفات `.mo` وأنظمة التصميم، مع محلل ومحوّل TypeScript/JavaScript لإنشاء design tokens وCSS variables وJSON من مصدر واحد. يجمع النظام الألوان والطباعة والمسافات والاتجاه RTL/LTR والحالات والمكوّنات وإرشادات الوصول في ملف تصميم قابل للتحقق، ثم يتيح استعماله مباشرة في تطبيقات الويب دون تثبيت مئات المكتبات.

للوصول السريع: [المستودع على GitHub](https://github.com/MOHOAI/moho-design) · [الحزمة على npm](https://www.npmjs.com/package/moho-design) · [مثال ملف `.mo`](https://github.com/MOHOAI/moho-design/blob/master/examples/moho-default.mo) · [سجل التغييرات](https://github.com/MOHOAI/moho-design/blob/master/CHANGELOG.md)

> English summary: **Moho Design is an open-source `.mo` design token format and TypeScript compiler for portable, accessible, RTL-ready design systems.** It compiles a unified design source to CSS and JSON and provides optional adapters for the wider JavaScript ecosystem.

> ملف `.mo` هو مصدر تصميم قابل للتحويل، وليس ملفًا تنفيذيًا. لا ينفّذ النظام كودًا أو قوالب أو تعليمات موجودة داخل الملف؛ بل يقرأ بنية JSON آمنة ويتحقق منها قبل التحويل.

## ما الجديد في الإصدار الموسع

يضيف الإصدار الموسع هوية MOHO أصلية فوق مواصفة MO الأساسية. الهوية لا تنسخ كودًا أو أصولًا من مكتبة خارجية، بل توحّد مبادئ السمات، RTL/LTR، الكثافة، الحركة، الوصول، التخطيطات، حالات البيانات، والتكاملات الاختيارية في نموذج واحد.

| المجال | ما هو متاح الآن |
| --- | --- |
| صيغة MO | الإصدار `1.0`، تحليل آمن، تحقق من المخطط، وتسلسل canonical JSON. |
| الإخراج | ESM وCommonJS وملفات TypeScript، إضافة إلى CSS وJSON وCLI. |
| الدمج | `composeMoDocuments` لدمج مصادر متعددة بسياسة `error` أو `first-wins` أو `last-wins`. |
| ميزات MOHO | أكثر من 100 تعريف قدرة منظّم في فئات السمات والمكونات والوصول والتخطيط والطباعة والحركة والبيانات والمنصات والجودة والتكامل. |
| الكتالوج | 389 إدخالًا مجانيًا موثقًا من بيانات npm المتاحة وقت البناء؛ الكتالوج metadata فقط ولا يشحن هذه المشاريع داخل النواة. |
| الاعتماديات | النواة بلا اعتماديات تشغيلية خارجية، لتقليل الحجم وتعارضات الإصدارات ومخاطر الرخص. |
| الأمان | لا يوجد تنفيذ ديناميكي لمحتوى `.mo`، ولا تحميل تلقائي لخدمات أو خطوط أو أيقونات خارجية. |

## التثبيت

```bash
npm install moho-design
```

تتطلب الحزمة Node.js 18 أو أحدث، وتدعم ESM وCommonJS.

```ts
import {
  parseMo,
  compileMoToCss,
  listMohoFeatures,
  listMohoCatalog,
  createMohoSystem
} from 'moho-design';

const source = await fetch('/design/moho-default.mo').then((response) => response.text());
const design = parseMo(source);
const css = compileMoToCss(design);
document.head.append(Object.assign(document.createElement('style'), { textContent: css }));

const accessibilityFeatures = listMohoFeatures({ category: 'accessibility' });
const chartIntegrations = listMohoCatalog('chart');
```

وفي CommonJS:

```js
const { parseMo, compileMoToCss } = require('moho-design');
```

## صيغة ملف `.mo`

يتطلب الإصدار `1.0` الحقول `moho` و`version` و`name` و`tokens`. يمكن إضافة `typography` و`components` و`integrations` و`metadata` حسب الحاجة.

```json
{
  "moho": "mo",
  "version": "1.0",
  "name": "تصميم موهو",
  "direction": "rtl",
  "locale": "ar",
  "tokens": {
    "color": {
      "primary": "#6750A4",
      "onPrimary": "#FFFFFF"
    },
    "space": {
      "md": "1rem"
    }
  },
  "components": {
    "button": {
      "tokens": {
        "background": { "$ref": "#/tokens/color/primary" },
        "foreground": { "$ref": "#/tokens/color/onPrimary" }
      }
    }
  }
}
```

تدعم المراجع مسار JSON Pointer مثل `#/tokens/color/primary`، كما يقبل المحوّل الشكل المختصر `$color.primary`. وعند تحويل السمات إلى CSS تصبح المراجع متغيرات CSS مثل `var(--mo-color-primary)`.

## بناء نظام واحد من عدة مصادر

يمكن فصل السمات الأساسية عن سمات العلامة أو المنتج ثم دمجها في وثيقة موحّدة. الوضع الافتراضي يرفض التعارض حتى لا يتغير التصميم بصمت؛ ويمكن اختيار `first-wins` أو `last-wins` عند الحاجة.

```ts
import { composeMoDocuments, createMohoSystem } from 'moho-design';

const unified = composeMoDocuments([baseDesign, brandDesign, productDesign], {
  name: 'تصميم موهو — المنتج',
  conflictStrategy: 'error'
});

const convenientSystem = createMohoSystem(baseDesign, darkMode, highContrast);
```

## واجهة API

| الواجهة | الغرض |
| --- | --- |
| `parseMo(source, options?)` | تحليل نص `.mo` والتحقق منه وإرجاع `MoDocument`. |
| `stringifyMo(document, space?)` | التحقق من وثيقة MO وتسلسلها إلى نص منسق. |
| `validateMo(input)` | إرجاع `{ valid, issues }` دون رمي استثناء. |
| `compileMoToCss(document, options?)` | تحويل السمات والمكونات والحالات إلى متغيرات CSS. |
| `compileMoToJson(document, options?)` | إخراج JSON canonical من الوثيقة. |
| `composeMoDocuments(documents, options?)` | دمج مصادر MO مع كشف التعارضات. |
| `createMohoSystem(base, ...overlays)` | إنشاء نظام MOHO من مصدر أساسي وطبقات إضافية. |
| `MOHO_FEATURES` | سجل الميزات المعلنة وحالتها `core` أو `adapter` أو `planned`. |
| `listMohoFeatures(filter?)` | البحث في سجل قدرات MOHO. |
| `MOHO_FREE_CATALOG` | كتالوج التكاملات الاختيارية المجانية. |
| `listMohoCatalog(query?)` | البحث بالاسم أو npm أو الوصف أو الرخصة. |
| `defineMohoAdapter(manifest, create)` | تعريف adapter اختياري دون تثبيت حزمة خارجية. |
| `createMohoAdapterRegistry(initial?)` | تسجيل واسترجاع adapters في تطبيق المستهلك. |
| `catalogEntryToAdapterManifest(entry)` | تحويل إدخال كتالوج إلى manifest adapter مخطط. |
| `getCssVariableName(...path)` | توليد اسم CSS ثابت مثل `--mo-color-primary`. |

## طبقة adapters الاختيارية

توفر النواة `defineMohoAdapter` و`createMohoAdapterRegistry` لتعريف تكاملات الإطار أو المكتبة في مشروع المستهلك. لا تستورد MOHO أي حزمة خارجية تلقائيًا، ولا تنفذ `import()` ديناميكيًا من الكتالوج؛ يثبت المطور adapter المناسب ويقرر بنفسه مصدره ورخصته وإصداره.

```ts
import { createMohoAdapterRegistry, defineMohoAdapter } from 'moho-design';

const registry = createMohoAdapterRegistry();
registry.register(defineMohoAdapter({
  id: 'my-ui', packageName: 'my-ui', displayName: 'My UI',
  source: 'https://example.com', license: 'MIT',
  capabilities: ['components'], status: 'optional'
}, (options) => ({ options })));
```

## الكتالوج المجاني والتكاملات

يحتوي `catalog/verified-free-catalog.json` على 389 إدخالًا وصلت إليها مطابقة آلية لبيانات npm، مع اسم الحزمة والإصدار والرخصة والمصدر وحالة الاستخدام. هذه الإدخالات **ليست اعتماديات للنواة**، ولا تعني أن كل أصل أو خط أو خدمة تابعة للمشروع قابل لإعادة التوزيع.

تُعامل الإدخالات على النحو التالي:

| الحالة | المعنى |
| --- | --- |
| `catalog-only` | رابط وبيانات وصفية لا تشحن كودًا داخل `moho-design`. |
| `adapter` | نقطة ربط مستقبلية أو اختيارية؛ لا تُثبت تلقائيًا. |
| `bundled: false` | ضمان أن الحزمة الأساسية لا تجمع كود الطرف الثالث. |
| رخصة مسموحة | تطابق آلي مع قائمة رخص مفتوحة شائعة، ويظل التحقق اليدوي مطلوبًا قبل إعادة التوزيع. |

من أمثلة التكاملات المرجعية: `moho-font`، Material Design 3، Material Symbols، Tailwind CSS، Radix UI، Lucide، و`axe-core`. الاستفادة من مرجع أو رابط لا تعني نسخ أصوله. ويجب مراجعة رخصة كل خط أو أيقونة أو نموذج بيانات بصورة منفصلة.

## أداة سطر الأوامر

```bash
moho validate examples/moho-default.mo
moho css examples/moho-default.mo -o dist/moho.css
moho json examples/moho-default.mo -o dist/moho.json
```

إذا لم تحدد `-o`، تُنشأ النتيجة بجانب الملف المصدر وبالامتداد المناسب.

## التطوير والتحقق

```bash
npm install
npm test
npm run build
npm run pack:check
npm run publish:check
```

يُنفذ `npm test` عشرة اختبارات تشمل ESM وCommonJS والتحليل والتحقق والتحويل والدمج وحجم الكتالوج. أما `pack:check` و`publish:check` ففحصان جافان ولا ينفذان نشرًا عامًا.

## حدود الإصدار

لا يثبت هذا الإصدار 389 مكتبة طرف ثالث داخل حزمة واحدة؛ فهذا قرار مقصود وليس نقصًا في الكتالوج. شحن مئات المكتبات سيزيد حجم الحزمة، وقد يسبب نسخًا متعددة من نفس runtime وتعارضات peer dependencies ومشكلات في تراخيص الأصول. لذلك يقدم MOHO **طبقة وصف وبحث ودمج**، بينما تبقى adapters والاعتماديات الفعلية اختيارية ومجزأة.

كما أن سجل الميزات يصف ما هو متاح في النواة وما هو adapter أو planned. لا يجوز اعتبار كل عنصر `adapter` مكوّنًا جاهزًا للإنتاج قبل تنفيذ حزمة adapter مستقلة واختبارها على إطارها المستهدف.

## الترخيص

كود `moho-design` مرخّص بموجب MIT. أما المكتبات والخطوط والأيقونات والتكاملات الخارجية فتظل خاضعة لرخصها الخاصة كما يحددها كل مصدر. لا يعني إدراج رابط في الكتالوج أن أصوله أُعيد توزيعها داخل الحزمة.

## المراجع

1. [مستودع MOHOAI](https://github.com/MOHOAI)
2. [moho-font](https://github.com/MOHOAI/moho-font)
3. [npm Registry](https://registry.npmjs.org/)
4. [npms Search API](https://api.npms.io/v2/search)
5. [npm package.json documentation](https://docs.npmjs.com/cli/v12/configuring-npm/package-json/)
6. [Material Design 3](https://m3.material.io/)
7. [Material Symbols](https://developers.google.com/fonts/docs/material_symbols)
8. [Radix UI](https://www.radix-ui.com/)
9. [Tailwind CSS](https://github.com/tailwindlabs/tailwindcss)
10. [Lucide](https://github.com/lucide-icons/lucide)
