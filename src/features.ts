export type MohoFeatureStatus = 'core' | 'adapter' | 'planned';

export interface MohoFeature {
  id: string;
  title: string;
  category: string;
  description: string;
  status: MohoFeatureStatus;
  requires?: string[];
}

type FeatureSeed = [id: string, title: string, description: string, status: MohoFeatureStatus, requires?: string[]];

const groups: Array<[category: string, features: FeatureSeed[]]> = [
  ['theme', [
    ['theme-tokens', 'سمات تصميم قابلة للتسلسل', 'تعريف الألوان والمسافات والأشكال والطباعة داخل ملف MO.', 'core'],
    ['theme-references', 'مراجع سمات آمنة', 'حل مراجع JSON Pointer ومسارات النقاط دون تنفيذ محتوى.', 'core'],
    ['theme-light-dark', 'وضعا الضوء والظلام', 'تجميع السمات حسب الوضع وإنتاج متغيرات CSS مستقرة.', 'core'],
    ['theme-high-contrast', 'تباين عالٍ', 'مجموعة سمات بديلة للقراءة والتباين العالي.', 'core'],
    ['theme-rtl', 'اتجاه RTL أصلي', 'ضبط اتجاه الوثيقة والهوامش والمنطق البصري للغة العربية.', 'core'],
    ['theme-ltr', 'اتجاه LTR', 'تشغيل نفس التصميم في اللغات ذات الاتجاه اليساري.', 'core'],
    ['theme-density', 'كثافة الواجهة', 'مستويات compact وcomfortable وspacious للمسافات.', 'core'],
    ['theme-motion', 'حركة قابلة للإيقاف', 'تعريف منحنيات الحركة ودعم prefers-reduced-motion.', 'core'],
    ['theme-responsive', 'مقاييس متجاوبة', 'تحويل السمات إلى clamp وmedia tokens.', 'adapter'],
    ['theme-branding', 'هوية العلامة', 'تخصيص اسم العلامة والشعار والألوان دون كسر النواة.', 'core']
  ]],
  ['components', [
    ['component-button', 'زر موهو', 'حالات الزر الأساسية مع focus-visible وdisabled.', 'core'],
    ['component-card', 'بطاقة موهو', 'حاوية محتوى بسطح وعمق وقابلية تمدد.', 'core'],
    ['component-field', 'حقل إدخال موهو', 'حقل مع label وhint وerror وaria attributes.', 'core'],
    ['component-dialog', 'حوار موهو', 'نموذج حوار قابل للربط مع focus trap.', 'adapter'],
    ['component-menu', 'قائمة موهو', 'قائمة منسدلة مع حالات keyboard وpointer.', 'adapter'],
    ['component-tabs', 'تبويبات موهو', 'نظام تبويبات متاح مع orientation.', 'adapter'],
    ['component-tooltip', 'تلميح موهو', 'نص توضيحي قابل للربط بالهدف.', 'adapter'],
    ['component-toast', 'إشعار موهو', 'رسائل نجاح وتحذير وخطأ قابلة للتكديس.', 'adapter'],
    ['component-table', 'جدول موهو', 'بنية جدول مع sorting وpagination hooks.', 'adapter'],
    ['component-navigation', 'تنقل موهو', 'رأس وتدرج مسار وقائمة تنقل.', 'adapter']
  ]],
  ['accessibility', [
    ['a11y-roles', 'أدوار ARIA', 'توليد أدوار أولية للمكونات مع إمكانية التخصيص.', 'core'],
    ['a11y-labels', 'تسميات الوصول', 'تحقق من label وaria-label للحقول التفاعلية.', 'core'],
    ['a11y-focus', 'حلقة التركيز', 'سمات focus-visible واضحة ومتسقة.', 'core'],
    ['a11y-keyboard', 'تنقل لوحة المفاتيح', 'تعريف مفاتيح Enter وSpace وEscape وArrow.', 'core'],
    ['a11y-reduced-motion', 'تقليل الحركة', 'تبديل الحركة عند طلب المستخدم.', 'core'],
    ['a11y-color-contrast', 'قياس التباين', 'حساب نسبة تباين WCAG للألوان الأساسية.', 'core'],
    ['a11y-live-region', 'منطقة حية', 'قوالب aria-live للإشعارات الديناميكية.', 'core'],
    ['a11y-screen-reader', 'قارئ الشاشة', 'أدوات sr-only وvisually-hidden.', 'core'],
    ['a11y-touch-target', 'هدف لمس مناسب', 'حجم أدنى للأهداف التفاعلية على اللمس.', 'core'],
    ['a11y-axe-adapter', 'تكامل axe-core', 'محول اختياري للفحص الآلي في التطوير.', 'adapter', ['axe-core']]
  ]],
  ['layout', [
    ['layout-stack', 'تخطيط Stack', 'توزيع عمودي بمسافة موحدة.', 'core'],
    ['layout-inline', 'تخطيط Inline', 'توزيع أفقي يتبع اتجاه النص.', 'core'],
    ['layout-grid', 'شبكة موهو', 'شبكة CSS متجاوبة بسمات موحّدة.', 'core'],
    ['layout-cluster', 'عنقود عناصر', 'التفاف عناصر الأفعال والوسوم.', 'core'],
    ['layout-sidebar', 'شريط جانبي', 'تخطيط محتوى مع منطقة جانبية.', 'core'],
    ['layout-split', 'تقسيم الشاشة', 'تقسيم مرن بين لوحتين.', 'adapter'],
    ['layout-container', 'حاوية عرض', 'حد أقصى للعرض وهوامش آمنة.', 'core'],
    ['layout-aspect-ratio', 'نسبة أبعاد', 'حاويات صور وفيديو متسقة.', 'core'],
    ['layout-safe-area', 'منطقة آمنة', 'دعم safe-area للهواتف والشاشات المقصوصة.', 'core'],
    ['layout-foldable', 'شاشات قابلة للطي', 'نقاط تكامل للشاشات ذات المقاطع.', 'adapter']
  ]],
  ['typography', [
    ['type-scale', 'سلم الطباعة', 'توليد مستويات عنوان ونص متوازنة.', 'core'],
    ['type-arabic', 'طباعة عربية', 'عائلات افتراضية عربية مع fallback واضح.', 'core'],
    ['type-fluid', 'طباعة سائلة', 'أحجام نص clamp بين الشاشات.', 'core'],
    ['type-truncate', 'اقتطاع النص', 'قواعد سطر واحد ومتعدد الأسطر.', 'core'],
    ['type-balance', 'موازنة العناوين', 'تكامل اختياري مع أدوات موازنة النص.', 'adapter'],
    ['type-code', 'طباعة الأكواد', 'سمات mono ومسافات وكتل كود.', 'core'],
    ['type-math', 'طباعة الرياضيات', 'نقاط تكامل KaTeX وMathJax.', 'adapter'],
    ['type-editable', 'محرر نصي', 'واجهة تكامل لمحررات TipTap وProseMirror.', 'adapter'],
    ['type-font-loading', 'تحميل الخطوط', 'وصف FontFace وfont-display.', 'core'],
    ['type-capsize', 'مقاييس الخط', 'نقاط تكامل مع أدوات قياس baseline.', 'adapter']
  ]],
  ['motion', [
    ['motion-fade', 'تلاشي', 'انتقال دخول وخروج لطيف.', 'core'],
    ['motion-slide', 'انزلاق', 'حركة اتجاهية تحترم RTL.', 'core'],
    ['motion-scale', 'تكبير وتصغير', 'تأكيد بصري للعناصر المنبثقة.', 'core'],
    ['motion-spring', 'نابض', 'وصف فيزياء حركة قابل للتوصيل.', 'adapter'],
    ['motion-scroll', 'حركة التمرير', 'نقاط تكامل ScrollTrigger وScrollReveal.', 'adapter'],
    ['motion-parallax', 'منظور التمرير', 'حركة parallax اختيارية ومحدودة.', 'adapter'],
    ['motion-shared-layout', 'تخطيط مشترك', 'معرفات انتقال بين الصفحات.', 'adapter'],
    ['motion-progress', 'تقدم الحركة', 'قيم تقدم موحدة للمؤشرات.', 'core'],
    ['motion-preset', 'قوالب حركة', 'مجموعة presets قابلة لإعادة الاستخدام.', 'core'],
    ['motion-gesture', 'إيماءات', 'واجهة adapter للسحب واللمس.', 'adapter']
  ]],
  ['data', [
    ['data-chart', 'مخططات', 'وصف مشترك لتكامل Chart.js وD3 وECharts.', 'adapter'],
    ['data-graph', 'شبكات بيانية', 'نموذج تكامل لرسوم العلاقات.', 'adapter'],
    ['data-table', 'جداول بيانات', 'خيارات أعمدة وفرز وتصفية.', 'adapter'],
    ['data-pagination', 'ترقيم الصفحات', 'حالة pagination مستقلة عن الإطار.', 'core'],
    ['data-filtering', 'تصفية البيانات', 'قواعد تصفية قابلة للحفظ.', 'core'],
    ['data-sorting', 'فرز البيانات', 'وصف فرز آمن وقابل للعكس.', 'core'],
    ['data-empty-state', 'حالة الفراغ', 'مكوّن رسومي عندما لا توجد نتائج.', 'core'],
    ['data-loading-state', 'حالة التحميل', 'Skeleton وprogress موحدان.', 'core'],
    ['data-error-state', 'حالة الخطأ', 'رسالة خطأ وإجراء إعادة المحاولة.', 'core'],
    ['data-export', 'تصدير البيانات', 'نقاط تكامل JSON وCSV وXLSX.', 'adapter']
  ]],
  ['media', [
    ['media-image', 'صور متجاوبة', 'وصف sizes وobject-fit للصور.', 'core'],
    ['media-video', 'فيديو', 'حاوية فيديو مع poster وcaptions.', 'core'],
    ['media-audio', 'صوت', 'نموذج تكامل Howler وTone وWeb Audio.', 'adapter'],
    ['media-canvas', 'لوحة رسم', 'واجهة canvas قابلة للربط بالأدوات.', 'adapter'],
    ['media-svg', 'SVG', 'سمات SVG وviewBox واتجاه الرسم.', 'core'],
    ['media-avatar', 'صورة شخصية', 'أحجام وحالات avatar والبديل النصي.', 'core'],
    ['media-gallery', 'معرض', 'تخطيط صور مع lightbox adapter.', 'adapter'],
    ['media-3d', 'نماذج ثلاثية الأبعاد', 'نقطة تكامل Three.js وmodel-viewer.', 'adapter'],
    ['media-qr', 'QR والباركود', 'محولات اختيارية لقراءة وتوليد QR.', 'adapter'],
    ['media-capture', 'التقاط الشاشة', 'نقاط تكامل MediaRecorder وcanvas capture.', 'adapter']
  ]],
  ['content', [
    ['content-markdown', 'Markdown', 'سمات عرض Markdown موحدة.', 'adapter'],
    ['content-documents', 'مستندات', 'نموذج تكامل PDF وDOCX وEPUB.', 'adapter'],
    ['content-slides', 'عروض ويب', 'قوالب Reveal وSlidev وSpectacle.', 'adapter'],
    ['content-diagrams', 'مخططات', 'تعريف ألوان Mermaid وPlantUML.', 'adapter'],
    ['content-mindmaps', 'خرائط ذهنية', 'نقاط تكامل Markmap وMindElixir.', 'adapter'],
    ['content-timeline', 'خط زمني', 'مخطط زمني قابل للتنسيق.', 'adapter'],
    ['content-annotation', 'تعليقات', 'نموذج markup وتعليقات على المحتوى.', 'adapter'],
    ['content-code', 'كود', 'ألوان syntax ونسخ الكود.', 'adapter'],
    ['content-math-input', 'إدخال رياضي', 'نقطة تكامل MathLive وMathQuill.', 'adapter'],
    ['content-email', 'بريد HTML', 'قوالب ألوان للبريد المتجاوب.', 'adapter']
  ]],
  ['interaction', [
    ['interaction-dialog', 'حوار تفاعلي', 'قواعد فتح وإغلاق الحوار.', 'adapter'],
    ['interaction-popover', 'Popover', 'موضع محتوى عائم.', 'adapter'],
    ['interaction-tooltip', 'Tooltip', 'نص مساعد قصير.', 'core'],
    ['interaction-menu', 'قائمة', 'خيارات مع keyboard navigation.', 'adapter'],
    ['interaction-drag', 'سحب', 'نموذج drag-and-drop.', 'adapter'],
    ['interaction-resize', 'تغيير الحجم', 'مقابض تغيير حجم اللوحات.', 'adapter'],
    ['interaction-panzoom', 'تحريك وتكبير', 'وصف viewport للصور والمخططات.', 'adapter'],
    ['interaction-carousel', 'شريط شرائح', 'نموذج carousel قابل للتوصيل.', 'adapter'],
    ['interaction-tour', 'جولة تعريفية', 'خطوات onboarding مع نقاط تكامل.', 'adapter'],
    ['interaction-shortcuts', 'اختصارات', 'خريطة مفاتيح قابلة للتهيئة.', 'core']
  ]],
  ['platform', [
    ['platform-react', 'React adapter', 'مبادئ ربط السمات بمكوّنات React.', 'adapter'],
    ['platform-vue', 'Vue adapter', 'مبادئ ربط السمات بمكوّنات Vue.', 'adapter'],
    ['platform-svelte', 'Svelte adapter', 'مبادئ ربط السمات بمكوّنات Svelte.', 'adapter'],
    ['platform-web-components', 'Web Components', 'سمات عناصر مخصصة دون إطار.', 'core'],
    ['platform-preact', 'Preact adapter', 'حزمة توافق خفيفة لـ Preact.', 'adapter'],
    ['platform-solid', 'Solid adapter', 'ربط سمات Solid.', 'adapter'],
    ['platform-astro', 'Astro adapter', 'إخراج CSS وHTML ثابت.', 'adapter'],
    ['platform-next', 'Next.js adapter', 'دعم SSR وApp Router كنقاط تكامل.', 'adapter'],
    ['platform-nuxt', 'Nuxt adapter', 'دعم SSR وVue كنقاط تكامل.', 'adapter'],
    ['platform-cli', 'CLI generators', 'توليد ملفات ومشاريع من MO.', 'core']
  ]],
  ['quality', [
    ['quality-schema', 'JSON Schema', 'تحقق المحررات من صيغة MO.', 'core'],
    ['quality-validation', 'تحقق صارم', 'رفض البنى الخطرة أو غير المدعومة.', 'core'],
    ['quality-licenses', 'فحص التراخيص', 'سياسة catalog للرخص المفتوحة.', 'core'],
    ['quality-bundle-size', 'حجم الحزمة', 'فحص عدم شحن الاعتماديات الاختيارية.', 'core'],
    ['quality-tree-shaking', 'Tree shaking', 'تصديرات صغيرة ومسارات اختيارية.', 'core'],
    ['quality-types', 'أنواع TypeScript', 'تعريفات typed للواجهة العامة.', 'core'],
    ['quality-cjs-esm', 'ESM وCommonJS', 'بناء مزدوج لمستهلكين مختلفين.', 'core'],
    ['quality-snapshots', 'Snapshots', 'تثبيت مخرجات CSS وJSON.', 'core'],
    ['quality-visual-regression', 'اختبار بصري', 'نقاط تكامل Storybook وPlaywright.', 'adapter'],
    ['quality-security', 'مراجعة أمنية', 'عدم تنفيذ محتوى MO أو القوالب.', 'core']
  ]],
  ['integration', [
    ['integration-material', 'Material Design 3', 'مرجع ألوان وحالات متوافق مع MD3.', 'adapter'],
    ['integration-tailwind', 'Tailwind CSS', 'محوّل رموز إلى إعداد Tailwind.', 'adapter'],
    ['integration-radix', 'Radix UI', 'ربط primitives المتاحة مع سمات MOHO.', 'adapter'],
    ['integration-lucide', 'Lucide icons', 'اختيار أيقونات مفتوحة عبر الاسم.', 'adapter'],
    ['integration-fonts', 'moho-font', 'تسجيل الخطوط العربية الاختيارية.', 'adapter'],
    ['integration-icons', 'Material Symbols', 'ربط رموز Material الاختيارية.', 'adapter'],
    ['integration-css', 'CSS variables', 'إخراج CSS مستقل بلا runtime.', 'core'],
    ['integration-json', 'JSON export', 'إخراج canonical JSON للأنظمة الأخرى.', 'core'],
    ['integration-catalog', 'Free catalog', 'فهرس 300+ مشروع قابل للبحث.', 'core'],
    ['integration-license-report', 'License report', 'تقرير مصدر ورخصة لكل إدخال.', 'core']
  ]]
];

export const MOHO_FEATURES: MohoFeature[] = groups.flatMap(([category, features]) =>
  features.map(([id, title, description, status, requires]) => ({ id, title, category, description, status, requires }))
);

export const listMohoFeatures = (filter?: { category?: string; status?: MohoFeatureStatus }) =>
  MOHO_FEATURES.filter((feature) => (!filter?.category || feature.category === filter.category) && (!filter?.status || feature.status === filter.status));

export const getMohoFeature = (id: string) => MOHO_FEATURES.find((feature) => feature.id === id);

export const getMohoFeatureCount = () => MOHO_FEATURES.length;
