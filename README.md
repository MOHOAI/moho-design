# تصميم موهو — Moho Design

**تصميم موهو** هو تنسيق مصدر مفتوح لوصف أنظمة التصميم في ملف واحد بامتداد `.mo`. يجمع الملف السمات التصميمية، والطباعة، والاتجاه، وحالات المكوّنات، وإرشادات إمكانية الوصول، وروابط التكاملات المجانية في وثيقة قابلة للقراءة والتحويل. لا يفرض التنسيق إطار واجهة معينًا، ولذلك يمكن استعماله مع CSS أو JavaScript أو TypeScript أو أي إطار ويب آخر.

> ملف `.mo` هو مصدر تصميم قابل للتحويل، وليس بديلًا عن ملفات التطبيق التنفيذية. يحافظ النظام على فصل واضح بين مواصفة MO، وكود المحلل، ورخصة أي مكتبة أو خط خارجي.

## الحالة الحالية

الإصدار المحلي الأول هو `0.1.0`، ويقدم مواصفة MO `1.0`، ومحللًا آمنًا يعتمد JSON داخل غلاف MO، ومدقق بنية، ومحوّلات إلى CSS وJSON، وأداة سطر أوامر. لا يحتوي الإصدار الأساسي على اعتماديات تشغيلية خارجية أو أصول مدفوعة.

## التثبيت

```bash
npm install moho-design
```

تتطلب الحزمة Node.js 18 أو أحدث وتدعم ESM وCommonJS.

```ts
import {
  compileMoToCss,
  parseMo
} from 'moho-design';

const source = await fetch('/design/moho-default.mo').then((response) => response.text());
const design = parseMo(source);
const css = compileMoToCss(design);

const style = document.createElement('style');
style.textContent = css;
document.head.append(style);
```

وفي CommonJS:

```js
const { parseMo, compileMoToCss } = require('moho-design');
```

## بنية ملف MO

يتطلب الإصدار `1.0` الحقول `moho` و`version` و`name` و`tokens`. يستخدم `moho: "mo"` للتعرف على النوع، ويحدد `version: "1.0"` إصدار المواصفة. يمكن إضافة `typography` و`components` و`integrations` و`metadata` حسب الحاجة.

```json
{
  "moho": "mo",
  "version": "1.0",
  "name": "تصميم موهو",
  "direction": "rtl",
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

تدعم المراجع مسار JSON Pointer مثل `#/tokens/color/primary`، كما يقبل المحوّل شكلًا مختصرًا مثل `$color.primary`. عند تحويل السمات إلى CSS تصبح المراجع متغيرات CSS، مثل `var(--mo-color-primary)`.

## واجهة API

| الدالة | الغرض |
| --- | --- |
| `parseMo(source, options?)` | تحليل نص `.mo` والتحقق منه وإرجاع `MoDocument`. |
| `stringifyMo(document, space?)` | التحقق من وثيقة MO وتسلسلها إلى نص منسق. |
| `validateMo(input)` | إرجاع `{ valid, issues }` دون رمي استثناء. |
| `compileMoToCss(document, options?)` | تحويل السمات ومكوّنات السمات إلى متغيرات CSS. |
| `compileMoToJson(document, options?)` | إخراج JSON منسق من الوثيقة. |
| `getCssVariableName(...path)` | توليد اسم CSS متسق مثل `--mo-color-primary`. |
| `MoParseError` | خطأ منظم يتضمن قائمة `issues` بمسارات الحقول. |

## أداة سطر الأوامر

بعد البناء أو عند تثبيت الحزمة يمكن استخدام:

```bash
moho validate examples/moho-default.mo
moho css examples/moho-default.mo -o dist/moho.css
moho json examples/moho-default.mo -o dist/moho.json
```

إذا لم تحدد `-o`، تُنشأ النتيجة بجانب الملف المصدر وبالامتداد المناسب.

## التكاملات المجانية

لا ينسخ الإصدار الأساسي كودًا من المكتبات الخارجية ولا يضمّن خطوطًا أو أيقونات خارجية تلقائيًا. يصف ملف MO التكاملات الاختيارية مع مصدرها ورخصتها. يتضمن المثال `moho-font` ككتالوج خطوط عربية مفتوحة، مع إبقاء رخصة كل عائلة خط منفصلة، وMaterial Symbols كتكامل أيقونات مرخّص بـ Apache 2.0. يمكن إضافة adapters مستقبلية لمكوّنات أو أطر أخرى بشرط التحقق من رخصة كل مشروع وعدم اعتبار الخطة المجانية ترخيصًا لإعادة التوزيع.

ومن أمثلة المصادر المفتوحة التي تصلح كتكاملات اختيارية، لا كاعتماديات أساسية: Material Design 3 كمرجع لنظام التصميم، وRadix UI كمصدر إلهام لممارسات الوصول، و`axe-core` للاختبار التطويري. لا تُجمع الخدمات المدفوعة أو الأصول التي لا تسمح بإعادة التوزيع في حزمة تصميم موهو.

## التطوير المحلي

```bash
npm install
npm test
npm run build
npm run pack:check
npm run publish:check
```

تُحفظ ملفات التطوير في `src/`، والاختبارات في `tests/`، والمثال في `examples/`، ومخطط الصيغة في `schemas/mo.schema.json`. لا تنفّذ هذه الأوامر نشرًا عامًا؛ `pack:check` و`publish:check` فحصان جافان فقط.

## الترخيص

كود `moho-design` مرخّص بموجب MIT. أما المكتبات والخطوط والتكاملات الخارجية، فتظل خاضعة لرخصها الخاصة كما يحددها كل مصدر. لا يعني إدراج رابط تكامل في ملف MO أن أصوله قد أُعيد توزيعها داخل الحزمة.

## الروابط المرجعية

1. [مستودع MOHOAI](https://github.com/MOHOAI)
2. [moho-font](https://github.com/MOHOAI/moho-font)
3. [Material Design 3](https://m3.material.io/)
4. [Material Symbols](https://developers.google.com/fonts/docs/material_symbols)
5. [Radix UI](https://www.radix-ui.com/)
