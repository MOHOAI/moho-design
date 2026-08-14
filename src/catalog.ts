export interface MohoCatalogEntry {
  id: string;
  name: string;
  npmName: string;
  version?: string;
  license: string;
  source: string;
  homepage?: string;
  description?: string;
  categories: string[];
  status: 'catalog-only';
  bundled: false;
  adapter?: string | null;
  licenseVerifiedBy: string;
  licenseVerifiedAt: string;
}

export const MOHO_FREE_CATALOG: MohoCatalogEntry[] = [
  {
    "id": "adobe-react-spectrum",
    "name": "Spectrum (Adobe)",
    "npmName": "@adobe/react-spectrum",
    "version": "3.47.3",
    "license": "Apache-2.0",
    "source": "git+https://github.com/adobe/react-spectrum.git",
    "homepage": "https://github.com/adobe/react-spectrum#readme",
    "description": "Spectrum UI components in React",
    "categories": [
      "1. أنظمة وتصميم واجهات المستخدم (UI Design Systems & Component Libraries)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "antv-g-plugin-matterjs",
    "name": "Matter.js",
    "npmName": "@antv/g-plugin-matterjs",
    "version": "2.1.1",
    "license": "MIT",
    "source": "git+https://github.com/antvis/g.git",
    "homepage": "https://github.com/antvis/g#readme",
    "description": "A G plugin for matter.js physics engine",
    "categories": [
      "3. محاكاة الفيزياء في واجهات المستخدم (Web Physics Engines)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "ascua-quill.js",
    "name": "Quill.js",
    "npmName": "@ascua/quill.js",
    "version": "0.21.0",
    "license": "MIT",
    "source": "git+https://github.com/abcum/ascua.git",
    "homepage": "https://abcum.github.io/ascua",
    "description": "Small description for @ascua/quill.js goes here",
    "categories": [
      "3. محريرات وتنسيق النصوص والمستندات (Text Editors & Document Formatting)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "babylonjs-gui",
    "name": "Babylon.js",
    "npmName": "@babylonjs/gui",
    "version": "9.21.2",
    "license": "Apache-2.0",
    "source": "git+https://github.com/BabylonJS/Babylon.js.git",
    "homepage": "https://www.babylonjs.com",
    "description": "For usage documentation please visit the [GUI documentation](https://doc.babylonjs.com/features/featuresDeepDive/gui/).",
    "categories": [
      "6. الأشكال الهندسية والمخططات التوضيحية (Diagrams, Flowcharts & Geometry)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "bitionaire-cleave.js",
    "name": "Cleave.js (Input formatting)",
    "npmName": "@bitionaire/cleave.js",
    "version": "1.0.2",
    "license": "Apache-2.0",
    "source": "git+https://github.com/nosir/cleave.js.git",
    "homepage": "https://github.com/nosir/cleave.js",
    "description": "JavaScript library for formatting input text content when you are typing",
    "categories": [
      "7. تحسين وتجميع استمارة الإدخال (Form Beautifiers & Smart Control UI)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "capsizecss-unpack",
    "name": "Capsize (Font metrics & baseline)",
    "npmName": "@capsizecss/unpack",
    "version": "4.0.1",
    "license": "MIT",
    "source": "git+https://github.com/seek-oss/capsize.git",
    "homepage": "https://github.com/seek-oss/capsize#readme",
    "description": "Unpack capsize font metrics from fonts",
    "categories": [
      "8. الخطوط والطباعة والتنسيق الطباعي (Fonts & Typography Libraries)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "chakra-ui-transition",
    "name": "Chakra UI",
    "npmName": "@chakra-ui/transition",
    "version": "2.1.0",
    "license": "MIT",
    "source": "git+https://github.com/chakra-ui/chakra-ui.git",
    "homepage": "https://github.com/chakra-ui/chakra-ui#readme",
    "description": "Common transition components for Chakra UI",
    "categories": [
      "1. أنظمة وتصميم واجهات المستخدم (UI Design Systems & Component Libraries)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "cognite-reveal",
    "name": "Clouds-webgl",
    "npmName": "@cognite/reveal",
    "version": "4.35.3",
    "license": "Apache-2.0",
    "source": "git+https://github.com/cognitedata/reveal.git",
    "homepage": "https://github.com/cognitedata/reveal/tree/master/viewer",
    "description": "WebGL based 3D viewer for CAD and point clouds processed in Cognite Data Fusion.",
    "categories": [
      "محاكاة الطقس، السوائل، والظواهر الطبيعية (Nature, Weather & Physics Simulation)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "duetds-date-picker",
    "name": "Duet Date Picker",
    "npmName": "@duetds/date-picker",
    "version": "1.4.0",
    "license": "MIT",
    "source": "git+https://github.com/duetds/date-picker.git",
    "homepage": "https://github.com/duetds/date-picker#readme",
    "description": "Duet Date Picker is an open source version of Duet Design System’s accessible date picker.",
    "categories": [
      "7. تحسين وتجميع استمارة الإدخال (Form Beautifiers & Smart Control UI)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "enso-ui-datepicker",
    "name": "Flatpickr (Datepicker UI)",
    "npmName": "@enso-ui/datepicker",
    "version": "3.1.4",
    "license": "MIT",
    "source": "git+https://github.com/enso-ui/datepicker.git",
    "homepage": "https://github.com/enso-ui/datepicker#readme",
    "description": "Vue Datepicker component based on Flatpickr",
    "categories": [
      "7. تحسين وتجميع استمارة الإدخال (Form Beautifiers & Smart Control UI)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "google-model-viewer",
    "name": "Model-Viewer (Google)",
    "npmName": "@google/model-viewer",
    "version": "4.3.1",
    "license": "Apache-2.0",
    "source": "git+https://github.com/google/model-viewer.git",
    "homepage": "https://github.com/google/model-viewer#readme",
    "description": "Easily display interactive 3D models on the web and in AR!",
    "categories": [
      "1. تصميم ثلاثي الأبعاد وعرض النماذج التفاعلية (3D Model Viewers & Product Design)",
      "أنظمة ومؤثرات الواقع الممتد والافتراضي (WebXR, AR & VR)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "headlessui-float-react",
    "name": "Floating UI (Popper.js)",
    "npmName": "@headlessui-float/react",
    "version": "0.15.1",
    "license": "MIT",
    "source": "git+https://github.com/ycs77/headlessui-float.git",
    "homepage": "https://headlessui-float.vercel.app",
    "description": "Easily use Headless UI for React with Floating UI (Popper.js)",
    "categories": [
      "10. واجهات التنبيه، الإشعارات، والبطاقات العائمة (Toaster, Modal & Popover FX)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "himpat29-complete-excalidraw-package",
    "name": "Excalidraw (React/Package)",
    "npmName": "@himpat29/complete-excalidraw-package",
    "version": "0.0.1",
    "license": "MIT",
    "source": "git+https://github.com/excalidraw/excalidraw.git",
    "homepage": "https://github.com/excalidraw/excalidraw/tree/master/src/packages/excalidraw",
    "description": "Excalidraw as a React component",
    "categories": [
      "6. الأشكال الهندسية والمخططات التوضيحية (Diagrams, Flowcharts & Geometry)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "histoire-plugin-vue",
    "name": "Histoire (Vue)",
    "npmName": "@histoire/plugin-vue",
    "version": "1.0.0-beta.1",
    "license": "MIT",
    "source": "git+https://github.com/Akryum/histoire.git",
    "homepage": "https://github.com/Akryum/histoire#readme",
    "description": "Histoire plugin for Vue.js support",
    "categories": [
      "3. المعاينة المباشرة وتجربة المكونات بصرياً (UI Component Playground & Documentation)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "horojs-core",
    "name": "Micro-UI Core",
    "npmName": "@horojs/core",
    "version": "1.0.7",
    "license": "ISC",
    "source": "git+https://github.com/lroskoshin/horo.git",
    "homepage": "https://github.com/lroskoshin/horo#readme",
    "description": "A micro library for a reactive UI application.",
    "categories": [
      "أطر تصميم الواجهات الدقيقة والمصغرة (Micro-UI & Embedded Interfaces)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "ionic-cli",
    "name": "Ionic Framework",
    "npmName": "@ionic/cli",
    "version": "7.2.1",
    "license": "MIT",
    "source": "git+https://github.com/ionic-team/ionic-cli.git",
    "homepage": "https://ionicframework.com",
    "description": "A tool for creating and developing Ionic Framework mobile apps.",
    "categories": [
      "1. أنظمة وتصميم واجهات المستخدم (UI Design Systems & Component Libraries)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "jworkshop-canvas3d",
    "name": "Canvas3D",
    "npmName": "@jworkshop/canvas3d",
    "version": "0.0.5",
    "license": "MIT",
    "source": "git://github.com/JWorkshop/canvas3d.git",
    "homepage": "https://github.com/JWorkshop/canvas3d#readme",
    "description": "A canvas react UI component integrated with 3d rendering features.",
    "categories": [
      "1. تصميم ثلاثي الأبعاد وعرض النماذج التفاعلية (3D Model Viewers & Product Design)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "lfaler-retro-react-native",
    "name": "Retro-CSS",
    "npmName": "@lfaler/retro-react-native",
    "version": "1.3.12",
    "license": "MIT",
    "source": "git+https://github.com/laynef/Retro-CLI.git",
    "homepage": "https://github.com/laynef/Retro-CLI#readme",
    "description": "Convert your web styles in CSS into React Native styles in JSON",
    "categories": [
      "خطوط وتأثيرات اللمسات الرجعية والتراثية (Retro, Glitch & Cyberpunk FX)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "lion-core",
    "name": "Lion Web Components",
    "npmName": "@lion/core",
    "version": "0.24.0",
    "license": "MIT",
    "source": "git+https://github.com/ing-bank/lion.git",
    "homepage": "https://github.com/ing-bank/lion/",
    "description": "Core functionality that is shared across all Lion Web Components",
    "categories": [
      "أطر تصميم الواجهات الدقيقة والمصغرة (Micro-UI & Embedded Interfaces)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "livelybone-scroll-get",
    "name": "As Scrollbar",
    "npmName": "@livelybone/scroll-get",
    "version": "6.2.1",
    "license": "MIT",
    "source": "git+https://github.com/livelybone/scroll-get.git",
    "homepage": "https://github.com/livelybone/scroll-get#readme",
    "description": "Some useful tool of browser scroll, such as tool for calculating position relative to page/client, tool for getting the native scrollbar width...",
    "categories": [
      "2. مؤثرات التمرير وقصص الويب التفاعلية (Scroll & Scrollytelling)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "looker-visualizations-visx",
    "name": "Visx (Airbnb)",
    "npmName": "@looker/visualizations-visx",
    "version": "1.0.3",
    "license": "MIT",
    "source": "git+https://github.com/looker-open-source/components.git",
    "homepage": "https://github.com/looker-open-source/components#readme",
    "description": "This package contains the Looker visualizations that are built on top of [Airbnb's visx](https://airbnb.io/visx/) charting primitives. As Looker Visualization Components are designed to be library agnostic, in the long term we will support multiple variat",
    "categories": [
      "5. الرسوم والمخططات البيانية (Charts & Data Visualization)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "luncheon-simplify-svg-path",
    "name": "Paper.js",
    "npmName": "@luncheon/simplify-svg-path",
    "version": "0.2.0",
    "license": "MIT",
    "source": "git+https://github.com/luncheon/simplify-svg-path.git",
    "homepage": "https://github.com/luncheon/simplify-svg-path#readme",
    "description": "Extracts Path#simplify() from Paper.js.",
    "categories": [
      "6. الأشكال الهندسية والمخططات التوضيحية (Diagrams, Flowcharts & Geometry)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "mantine-hooks",
    "name": "Mantine",
    "npmName": "@mantine/hooks",
    "version": "9.5.1",
    "license": "MIT",
    "source": "git+https://github.com/mantinedev/mantine.git",
    "homepage": "https://mantine.dev",
    "description": "A collection of 50+ hooks for state and UI management",
    "categories": [
      "1. أنظمة وتصميم واجهات المستخدم (UI Design Systems & Component Libraries)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "material-design-icons-scripts",
    "name": "Material Symbols / Material Icons",
    "npmName": "@material-design-icons/scripts",
    "version": "0.5.2",
    "license": "Apache-2.0",
    "source": "git+https://github.com/marella/material-design-icons.git",
    "homepage": "https://github.com/marella/material-design-icons/tree/main/scripts",
    "description": "Scripts to download latest Material Symbols and Material Icons.",
    "categories": [
      "9. الأيقونات والرموز (Icons & Vector Symbols)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "mehrandvm-timelinejs",
    "name": "TimelineJS (Knight Lab)",
    "npmName": "@mehrandvm/timelinejs",
    "version": "1.1.1",
    "license": "MPL-2.0",
    "source": "git+https://github.com/mehrandvm/TimelineJS3.git",
    "homepage": "https://timeline.knightlab.com",
    "description": "TimelineJS v3: A Storytelling Timeline built in JavaScript, made by Northwestern University Knight Lab.",
    "categories": [
      "6. الجداول الزمنية وعرض السلاسل التاريخية (Timelines & Chronological Viz)",
      "الجداول الزمنيّة والسلاسل التاريخية التفاعلية (Timelines & Chronology)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "microsoft-fast-tooling-react",
    "name": "Fast UI (Microsoft Web Components)",
    "npmName": "@microsoft/fast-tooling-react",
    "version": "2.13.13",
    "license": "MIT",
    "source": "git+https://github.com/microsoft/fast-tooling.git",
    "homepage": "https://github.com/microsoft/fast-tooling#readme",
    "description": "A React-specific set of components and utilities to assist in creating web UI",
    "categories": [
      "أطر تصميم الواجهات الدقيقة والمصغرة (Micro-UI & Embedded Interfaces)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "nathanfaucett-vec2",
    "name": "Vec2.js",
    "npmName": "@nathanfaucett/vec2",
    "version": "0.0.3",
    "license": "MIT",
    "source": "git+https://github.com/nathanfaucett/vec2.git",
    "homepage": "https://github.com/nathanfaucett/vec2#readme",
    "description": "vec2 for the browser and node.js",
    "categories": [
      "4. المحاكاة الهندسية والحركية للأبعاد الثنائية (2D Kinematics & Vector Motion)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "nextui-org-react",
    "name": "NextUI",
    "npmName": "@nextui-org/react",
    "version": "2.6.11",
    "license": "MIT",
    "source": "git+https://github.com/nextui-org/nextui.git",
    "homepage": "https://nextui.org",
    "description": "🚀 Beautiful and modern React UI library.",
    "categories": [
      "1. أنظمة وتصميم واجهات المستخدم (UI Design Systems & Component Libraries)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "nrwl-angular",
    "name": "Tailwind CSS",
    "npmName": "@nrwl/angular",
    "version": "19.8.4",
    "license": "MIT",
    "source": "git+https://github.com/nrwl/nx.git",
    "homepage": "https://nx.dev",
    "description": "The Nx Plugin for Angular contains executors, generators, and utilities for managing Angular applications and libraries within an Nx workspace. It provides: \n\n- Integration with libraries such as Storybook, Jest, ESLint, Tailwind CSS, and Cypress. \n\n- Gen",
    "categories": [
      "2. أطر التنسيق والتخطيط CSS (CSS Frameworks & Methodologies)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "picocss-pico",
    "name": "PICOCSS",
    "npmName": "@picocss/pico",
    "version": "2.1.1",
    "license": "MIT",
    "source": "git+https://github.com/picocss/pico.git",
    "homepage": "https://picocss.com",
    "description": "Minimal CSS Framework for semantic HTML",
    "categories": [
      "2. أطر التنسيق والتخطيط CSS (CSS Frameworks & Methodologies)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "posva-vitepress",
    "name": "VuePress / VitePress",
    "npmName": "@posva/vitepress",
    "version": "0.6.0",
    "license": "MIT",
    "source": "git+https://github.com/vuejs/vitepress.git",
    "homepage": "https://github.com/vuejs/vitepress/tree/master/#readme",
    "description": "> [VuePress](http://vuepress.vuejs.org/)' little brother, built on top of [vite](https://github.com/vuejs/vite)",
    "categories": [
      "3. المعاينة المباشرة وتجربة المكونات بصرياً (UI Component Playground & Documentation)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "primer-octicons",
    "name": "Octicons (GitHub)",
    "npmName": "@primer/octicons",
    "version": "19.33.0",
    "license": "MIT",
    "source": "git+https://github.com/primer/octicons.git",
    "homepage": "https://primer.style/octicons",
    "description": "A scalable set of icons handcrafted with <3 by GitHub.",
    "categories": [
      "9. الأيقونات والرموز (Icons & Vector Symbols)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "progress-kendo-theme-default",
    "name": "Kendo UI",
    "npmName": "@progress/kendo-theme-default",
    "version": "14.5.0",
    "license": "Apache-2.0",
    "source": "git+https://github.com/telerik/kendo-themes.git",
    "homepage": "https://github.com/telerik/kendo-themes/tree/master/packages/default",
    "description": "SASS resources for the default Kendo UI theme",
    "categories": [
      "1. أنظمة وتصميم واجهات المستخدم (UI Design Systems & Component Libraries)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "quasar-extras",
    "name": "Quasar Framework",
    "npmName": "@quasar/extras",
    "version": "2.0.3",
    "license": "MIT",
    "source": "git+https://github.com/quasarframework/quasar.git",
    "homepage": "https://quasar.dev",
    "description": "Quasar Framework fonts, icons and animations",
    "categories": [
      "1. أنظمة وتصميم واجهات المستخدم (UI Design Systems & Component Libraries)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "radix-ui-react-primitive",
    "name": "Radix UI",
    "npmName": "@radix-ui/react-primitive",
    "version": "2.1.10",
    "license": "MIT",
    "source": "git+https://github.com/radix-ui/primitives.git",
    "homepage": "https://radix-ui.com/primitives",
    "categories": [
      "1. أنظمة وتصميم واجهات المستخدم (UI Design Systems & Component Libraries)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "react-spring-three",
    "name": "Three-fiber (React Three Fiber)",
    "npmName": "@react-spring/three",
    "version": "10.1.2",
    "license": "MIT",
    "source": "git+https://github.com/pmndrs/react-spring.git",
    "homepage": "https://github.com/pmndrs/react-spring#readme",
    "description": "[`react-three-fiber`](https://github.com/drcmda/react-three-fiber) support. This package is for version 6 of react-three-fiber",
    "categories": [
      "1. تصميم ثلاثي الأبعاد وعرض النماذج التفاعلية (3D Model Viewers & Product Design)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "recogito-recogito-client-core",
    "name": "RecogitoJS",
    "npmName": "@recogito/recogito-client-core",
    "version": "1.7.9",
    "license": "BSD-3-Clause",
    "source": "git+https://github.com/recogito/recogito-client-core.git",
    "homepage": "https://github.com/recogito/recogito-client-core/wiki",
    "description": "Core functions, classes and components for RecogitoJS",
    "categories": [
      "أدوات الملاحظة والتأشير على المستندات والواجهات (Annotation, Canvas Markup & Feedback)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "revolist-revogrid",
    "name": "RevoGrid",
    "npmName": "@revolist/revogrid",
    "version": "4.25.2",
    "license": "MIT",
    "source": "git+https://github.com/revolist/revogrid.git",
    "homepage": "https://rv-grid.com",
    "description": "Virtual reactive data grid spreadsheet component - RevoGrid.",
    "categories": [
      "6. تصميم الجداول المتقدمة وإدارة البيانات (Data Grids & Smart Tables)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "roux-services-ngx-barcode-scanner",
    "name": "QuaggaJS (Barcode reader)",
    "npmName": "@roux-services/ngx-barcode-scanner",
    "version": "0.3.4",
    "license": "MIT",
    "source": "git+https://github.com/Moventeam/ngx-barcode-scanner.git",
    "homepage": "https://github.com/Moventeam/ngx-barcode-scanner#readme",
    "description": "Angular components for [QuaggaJS](https://serratus.github.io/quaggaJS/) barcode reader. It uses the new [Quagga2](https://github.com/ericblade/quagga2) supported version. Supporting Angular 10+",
    "categories": [
      "مكتبات الباركود ورؤية الكمبيوتر في الويب (Barcode, QR & Web Vision)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "ryancavanaugh-devexpress-web",
    "name": "DevExpress Web Controls",
    "npmName": "@ryancavanaugh/devexpress-web",
    "version": "0.0.15-alpha",
    "license": "MIT",
    "source": "https://www.npmjs.com/package/@ryancavanaugh/devexpress-web",
    "description": "Type definitions for DevExpress ASP.NET web controls (Classic and MVC) from https://www.github.com/DefinitelyTyped/DefinitelyTyped",
    "categories": [
      "1. أنظمة وتصميم واجهات المستخدم (UI Design Systems & Component Libraries)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "salesforce-ux-design-system",
    "name": "Salesforce Lightning Design System",
    "npmName": "@salesforce-ux/design-system",
    "version": "2.264.0",
    "license": "BSD-3-Clause",
    "source": "https://www.npmjs.com/package/@salesforce-ux/design-system",
    "description": "Salesforce Lightning Design System",
    "categories": [
      "1. أنظمة وتصميم واجهات المستخدم (UI Design Systems & Component Libraries)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "shoelace-style-shoelace",
    "name": "Shoelace (Web Components)",
    "npmName": "@shoelace-style/shoelace",
    "version": "2.20.1",
    "license": "MIT",
    "source": "git+https://github.com/shoelace-style/shoelace.git",
    "homepage": "https://github.com/shoelace-style/shoelace",
    "description": "A forward-thinking library of web components.",
    "categories": [
      "أطر تصميم الواجهات الدقيقة والمصغرة (Micro-UI & Embedded Interfaces)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "slidev-parser",
    "name": "Slidev",
    "npmName": "@slidev/parser",
    "version": "52.19.0",
    "license": "MIT",
    "source": "https://github.com/slidevjs/slidev",
    "homepage": "https://sli.dev",
    "description": "Markdown parser for Slidev",
    "categories": [
      "13. تنسيق العروض التقديمية التفاعلية على الويب (Web Slides & Interactive Presentations)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "speed-highlight-core",
    "name": "Speed-highlight",
    "npmName": "@speed-highlight/core",
    "version": "2.0.0",
    "license": "CC0-1.0",
    "source": "git+https://github.com/speed-highlight/core.git",
    "homepage": "https://github.com/speed-highlight/core#readme",
    "description": "A tiny, fast, simple syntax highlighter for the web and the terminal in JavaScript",
    "categories": [
      "12. تزيين وتنسيق أكواد البرمجة (Code Highlighting & Syntax Beautifiers)",
      "أدوات معالجة النصوص البرمجية وإبرازها (Code Syntax Highlighting & Formatting)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "tabler-icons",
    "name": "Tabler Icons",
    "npmName": "@tabler/icons",
    "version": "3.46.0",
    "license": "MIT",
    "source": "git+https://github.com/tabler/tabler-icons.git",
    "homepage": "https://tabler.io/icons",
    "description": "A set of free MIT-licensed high-quality SVG icons for you to use in your web projects.",
    "categories": [
      "9. الأيقونات والرموز (Icons & Vector Symbols)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "tanstack-react-table",
    "name": "TanStack Table (React Table)",
    "npmName": "@tanstack/react-table",
    "version": "9.1.2",
    "license": "MIT",
    "source": "https://github.com/TanStack/table.git",
    "homepage": "https://tanstack.com/table",
    "description": "Headless UI for building powerful tables & datagrids for React.",
    "categories": [
      "6. تصميم الجداول المتقدمة وإدارة البيانات (Data Grids & Smart Tables)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "theme-ui-typography",
    "name": "Typography.js",
    "npmName": "@theme-ui/typography",
    "version": "0.17.4",
    "license": "MIT",
    "source": "git+https://github.com/system-ui/theme-ui.git",
    "homepage": "https://github.com/system-ui/theme-ui#readme",
    "description": "Utilities for integrating Typography.js themes with Theme UI",
    "categories": [
      "8. الخطوط والطباعة والتنسيق الطباعي (Fonts & Typography Libraries)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "triangular-fluid-simulation",
    "name": "WebGL Fluid Simulation",
    "npmName": "@triangular/fluid-simulation",
    "version": "22.0.0",
    "license": "MIT",
    "source": "git+https://github.com/akehir/fluid-simulation.git",
    "homepage": "https://fluid-simulation.akehir.com",
    "description": "If you want to use a fancy WebGL fluid simulation in your Angular App, this small demo can get you started.",
    "categories": [
      "8. مكتبات البناء ثنائي وثلاثي الأبعاد (WebGL, Canvas & Shader Wrappers)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "u2i-slim-select",
    "name": "Slim Select",
    "npmName": "@u2i/slim-select",
    "version": "1.27.2",
    "license": "MIT",
    "source": "git+https://github.com/dzidas/slim-select.git",
    "homepage": "https://slimselectjs.com",
    "description": "Slim advanced select dropdown",
    "categories": [
      "7. تحسين وتجميع استمارة الإدخال (Form Beautifiers & Smart Control UI)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "vanilla-extract-sprinkles",
    "name": "Vanilla Extract",
    "npmName": "@vanilla-extract/sprinkles",
    "version": "1.7.1",
    "license": "MIT",
    "source": "https://github.com/vanilla-extract-css/vanilla-extract.git",
    "description": "Zero-runtime atomic CSS framework for vanilla-extract",
    "categories": [
      "2. أطر التنسيق والتخطيط CSS (CSS Frameworks & Methodologies)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "vtmn-css-skeleton",
    "name": "Skeleton CSS",
    "npmName": "@vtmn/css-skeleton",
    "version": "1.1.4",
    "license": "Apache-2.0",
    "source": "git+https://github.com/Decathlon/vitamin-web.git",
    "homepage": "https://github.com/Decathlon/vitamin-web#readme",
    "description": "Decathlon Design System - Vitamin specific CSS styles for skeleton component",
    "categories": [
      "2. أطر التنسيق والتخطيط CSS (CSS Frameworks & Methodologies)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "wooorm-starry-night",
    "name": "Starry-night",
    "npmName": "@wooorm/starry-night",
    "version": "3.10.0",
    "license": "MIT",
    "source": "git+https://github.com/wooorm/starry-night.git",
    "homepage": "https://github.com/wooorm/starry-night#readme",
    "description": "Syntax highlighting, like GitHub",
    "categories": [
      "12. تزيين وتنسيق أكواد البرمجة (Code Highlighting & Syntax Beautifiers)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "aframe-fractal-component",
    "name": "Responsive-frame",
    "npmName": "aframe-fractal-component",
    "version": "1.0.6",
    "license": "MIT",
    "source": "git+https://github.com/Tino-F/aframe-fractal-component.git",
    "homepage": "https://github.com/Tino-F/aframe-fractal-component#readme",
    "description": "An A-Frame component for graphing audio responsive points.",
    "categories": [
      "11. مكتبات التصميم التكيّفي مع الشاشات اللوحية والطيّية (Foldable & Dual-Screen Layouts)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "ag-grid-community",
    "name": "AG Grid",
    "npmName": "ag-grid-community",
    "version": "36.1.0",
    "license": "MIT",
    "source": "git+https://github.com/ag-grid/ag-grid.git",
    "homepage": "https://www.ag-grid.com/",
    "description": "Advanced Data Grid / Data Table supporting Javascript / Typescript / React / Angular / Vue",
    "categories": [
      "6. تصميم الجداول المتقدمة وإدارة البيانات (Data Grids & Smart Tables)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "allotment",
    "name": "Allotment",
    "npmName": "allotment",
    "version": "1.20.5",
    "license": "MIT",
    "source": "git+https://github.com/johnwalley/allotment.git",
    "homepage": "https://allotment.mulberryhousesoftware.com/",
    "description": "React split-pane component",
    "categories": [
      "11. تقسيم الشاشات وتصاميم النوافذ القابلة للتكبير (Split Panes, Docking & Windows UI)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "alloyfinger",
    "name": "AlloyFinger",
    "npmName": "alloyfinger",
    "version": "0.1.16",
    "license": "MIT",
    "source": "git+https://github.com/AlloyTeam/AlloyFinger.git",
    "homepage": "https://github.com/AlloyTeam/AlloyFinger#readme",
    "description": "super tiny size multi-touch gestures library for the web. ",
    "categories": [
      "5. لوحات الرسم والتوقيع والتفاعل باللمس (Canvas, Signature & Gesture)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "angular-chartist.js",
    "name": "Chartist.js",
    "npmName": "angular-chartist.js",
    "version": "5.0.0-beta.2",
    "license": "MIT",
    "source": "git+https://github.com/willsoto/angular-chartist.js.git",
    "homepage": "https://github.com/willsoto/angular-chartist.js",
    "description": "Angular directive for Chartist.js",
    "categories": [
      "5. الرسوم والمخططات البيانية (Charts & Data Visualization)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "angular-im-progress",
    "name": "NProgress.js",
    "npmName": "angular-im-progress",
    "version": "0.2.0",
    "license": "MIT",
    "source": "git+https://github.com/ianmurrays/imProgress.git",
    "homepage": "https://github.com/ianmurrays/imProgress#readme",
    "description": "An Angular wrapper of NProgress.js",
    "categories": [
      "13. تخصيص شريط التقدم وعرض حالات التحميل (NProgress & Micro Loaders)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "animated-cursor",
    "name": "Custom-cursor-js",
    "npmName": "animated-cursor",
    "version": "1.2.0",
    "license": "MIT",
    "source": "git+https://github.com/stephenscaff/animated-cursor.git",
    "homepage": "https://github.com/stephenscaff/animated-cursor.git#readme",
    "description": "Create a custom, animated cursor in pure JS.",
    "categories": [
      "2. تخصيص مؤشرات الماوس والتأثيرات اللمسية (Custom Cursors & Cursor FX)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "annyang",
    "name": "Annyang (Voice commands)",
    "npmName": "annyang",
    "version": "3.0.0",
    "license": "MIT",
    "source": "git+https://github.com/TalAter/annyang.git",
    "homepage": "https://www.talater.com/annyang/",
    "description": "A JavaScript library for adding voice commands to your site, using speech recognition",
    "categories": [
      "التفاعل الصوتي والتنقل الصوتي في الواجهات (Voice UI & Speech Visualization)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "ant-design-vue",
    "name": "Ant Design",
    "npmName": "ant-design-vue",
    "version": "4.2.6",
    "license": "MIT",
    "source": "git+https://github.com/vueComponent/ant-design-vue.git",
    "homepage": "https://www.antdv.com/",
    "description": "An enterprise-class UI design language and Vue-based implementation",
    "categories": [
      "1. أنظمة وتصميم واجهات المستخدم (UI Design Systems & Component Libraries)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "aos",
    "name": "AOS (Animate On Scroll)",
    "npmName": "aos",
    "version": "2.3.4",
    "license": "MIT",
    "source": "git+https://github.com/michalsnik/aos.git",
    "homepage": "https://michalsnik.github.io/aos/",
    "description": "Animate on scroll library",
    "categories": [
      "10. التحريك والتأثيرات البصرية (Animations & Visual Effects)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "ar.js",
    "name": "AR.js",
    "npmName": "ar.js",
    "version": "2.2.2",
    "license": "MIT",
    "source": "git+https://github.com/jeromeetienne/AR.js.git",
    "homepage": "https://github.com/jeromeetienne/AR.js#readme",
    "description": "Efficient Augmented Reality for the Web",
    "categories": [
      "أنظمة ومؤثرات الواقع الممتد والافتراضي (WebXR, AR & VR)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "artyom.js",
    "name": "Artyom.js",
    "npmName": "artyom.js",
    "version": "1.0.6",
    "license": "MIT",
    "source": "git+https://github.com/sdkcarlos/artyom.js.git",
    "homepage": "https://sdkcarlos.github.io/sites/artyom.html",
    "description": "Artyom is a Robust Wrapper of the Google Chrome SpeechSynthesis and SpeechRecognition that allows you to create a virtual assistent",
    "categories": [
      "التفاعل الصوتي والتنقل الصوتي في الواجهات (Voice UI & Speech Visualization)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "asciimath",
    "name": "AsciiMath",
    "npmName": "asciimath",
    "version": "0.0.1",
    "license": "MIT",
    "source": "git+https://github.com/asciimath/asciimathml.git",
    "homepage": "https://asciimath.org/",
    "description": "Convert ASCII math notation (and some LaTeX) to Presentation MathML in the browser.",
    "categories": [
      "4. كتابة الرياضيات والرموز العلمية (Math & Science Rendering)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "audio-recorder-polyfill",
    "name": "MediaRecorder-Polyfill",
    "npmName": "audio-recorder-polyfill",
    "version": "0.4.1",
    "license": "MIT",
    "source": "git+https://github.com/ai/audio-recorder-polyfill.git",
    "homepage": "https://github.com/ai/audio-recorder-polyfill#readme",
    "description": "MediaRecorder polyfill to record audio in Edge and Safari",
    "categories": [
      "مكتبات معالجة وتسجيل الوسائط المباشرة (Webcam, Screen Capture & Canvas Stream)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "autonumeric",
    "name": "AutoNumeric",
    "npmName": "autonumeric",
    "version": "4.10.10",
    "license": "MIT",
    "source": "git+https://github.com/autoNumeric/autoNumeric.git",
    "homepage": "https://docs.autonumeric.org",
    "description": "autoNumeric is a standalone Javascript library that provides live *as-you-type* formatting for international numbers and currencies. It supports most international numeric formats and currencies including those used in Europe, Asia, and North and South Am",
    "categories": [
      "2. إدارة وتنسيق النماذج المدخلة وتأكيدها بصرياً (Form Styling & UX Enhancements)",
      "7. تحسين وتجميع استمارة الإدخال (Form Beautifiers & Smart Control UI)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "axe-core",
    "name": "Axe-core",
    "npmName": "axe-core",
    "version": "4.13.0",
    "license": "MPL-2.0",
    "source": "https://github.com/dequelabs/axe-core.git",
    "homepage": "https://www.deque.com/axe/",
    "description": "Accessibility engine for automated Web UI testing",
    "categories": [
      "11. مكتبات إتاحة الاستخدام والتمويه التكيفي (Accessibility & Skeleton Loaders)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "barcode-detector-polyfill",
    "name": "Barcode-detector-polyfill",
    "npmName": "barcode-detector-polyfill",
    "version": "0.1.2",
    "license": "MIT",
    "source": "git+https://github.com/giladaya/barcode-detector-polyfill.git",
    "homepage": "https://github.com/giladaya/barcode-detector-polyfill",
    "description": "Polyfill for BarcodeDetector API",
    "categories": [
      "مكتبات الباركود ورؤية الكمبيوتر في الويب (Barcode, QR & Web Vision)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "basicscroll",
    "name": "BasicScroll",
    "npmName": "basicscroll",
    "version": "3.0.4",
    "license": "MIT",
    "source": "git+https://github.com/electerious/basicScroll.git",
    "homepage": "https://github.com/electerious/basicScroll",
    "description": "Standalone parallax scrolling for mobile and desktop with CSS variables",
    "categories": [
      "2. مؤثرات التمرير وقصص الويب التفاعلية (Scroll & Scrollytelling)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "beerslider",
    "name": "BeerSlider",
    "npmName": "beerslider",
    "version": "1.0.3",
    "license": "MIT",
    "source": "git+https://github.com/pehaa/beerslider.git",
    "homepage": "https://github.com/pehaa/beerslider#readme",
    "description": "A small,accessible, vanilla JS before-after slider.",
    "categories": [
      "مكتبات المقارنة البصرية وتأثيرات الإزاحة (Image Comparison & Slider FX)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "bem.js",
    "name": "BEM (Block Element Modifier)",
    "npmName": "bem.js",
    "version": "1.0.10",
    "license": "MIT",
    "source": "git+https://github.com/maykinmedia/bem.js.git",
    "homepage": "https://github.com/maykinmedia/bem.js#readme",
    "description": "DOM selection and manipulation using BEM (Block, Element, Modifier).",
    "categories": [
      "2. أطر التنسيق والتخطيط CSS (CSS Frameworks & Methodologies)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "billboard.js",
    "name": "Billboard.js",
    "npmName": "billboard.js",
    "version": "4.0.3",
    "license": "MIT",
    "source": "git+https://github.com/naver/billboard.js.git",
    "homepage": "https://naver.github.io/billboard.js/",
    "description": "Re-usable easy interface JavaScript chart library, based on D3 v4+",
    "categories": [
      "5. الرسوم والمخططات البيانية (Charts & Data Visualization)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "blotter.js",
    "name": "Blotter.js (Text effects)",
    "npmName": "blotter.js",
    "version": "0.1.0",
    "license": "MIT",
    "source": "git+https://github.com/bradley/blotter.git",
    "homepage": "http://bradley.github.io/Blotter",
    "description": "A JavaScript API for drawing unconventional text effects on the web.",
    "categories": [
      "14. المؤثرات الحجمية والتشويه البصري (Web Displacement & Canvas Filters)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "bootstrap-vue",
    "name": "Bootstrap Icons",
    "npmName": "bootstrap-vue",
    "version": "2.23.1",
    "license": "MIT",
    "source": "git+https://github.com/bootstrap-vue/bootstrap-vue.git",
    "homepage": "https://bootstrap-vue.org",
    "description": "With more than 85 components, over 45 available plugins, several directives, and 1000+ icons, BootstrapVue provides one of the most comprehensive implementations of the Bootstrap v4 component and grid system available for Vue.js v2.6, complete with extens",
    "categories": [
      "9. الأيقونات والرموز (Icons & Vector Symbols)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "brennan-node-vibrant",
    "name": "Vibrant.js",
    "npmName": "brennan-node-vibrant",
    "version": "2.1.6",
    "license": "MIT",
    "source": "git+https://github.com/brennanerbz/node-vibrant.git",
    "homepage": "https://github.com/brennanerbz/node-vibrant#readme",
    "description": "Node.js port of vibrant.js. Get color variations from an image. Basically a JS port of Android's Palette",
    "categories": [
      "4. معالجة الصور والتصفية البصرية (Image Processing & Filters)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "bulma",
    "name": "Bulma",
    "npmName": "bulma",
    "version": "1.0.4",
    "license": "MIT",
    "source": "git+https://github.com/jgthms/bulma.git",
    "homepage": "https://bulma.io",
    "description": "Modern CSS framework based on Flexbox",
    "categories": [
      "1. أنظمة وتصميم واجهات المستخدم (UI Design Systems & Component Libraries)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "c3.js",
    "name": "C3.js",
    "npmName": "c3.js",
    "version": "1.0.0",
    "license": "MIT",
    "source": "git+https://github.com/vace/c3.git",
    "homepage": "https://github.com/vace/c3#readme",
    "description": "a lightweight and fast 3d css library.md,just 20KB, gzip:6.4 KB!!!",
    "categories": [
      "5. الرسوم والمخططات البيانية (Charts & Data Visualization)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "cannon-es",
    "name": "Cannon.js",
    "npmName": "cannon-es",
    "version": "0.20.0",
    "license": "MIT",
    "source": "https://github.com/pmndrs/cannon-es.git",
    "homepage": "https://github.com/schteppe/cannon.js",
    "description": "A lightweight 3D physics engine written in JavaScript.",
    "categories": [
      "3. محاكاة الفيزياء في واجهات المستخدم (Web Physics Engines)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "canvas-confetti",
    "name": "Canvas-confetti",
    "npmName": "canvas-confetti",
    "version": "1.9.4",
    "license": "ISC",
    "source": "git+https://github.com/catdad/canvas-confetti.git",
    "homepage": "https://github.com/catdad/canvas-confetti#readme",
    "description": "performant confetti animation in the browser",
    "categories": [
      "10. التحريك والتأثيرات البصرية (Animations & Visual Effects)",
      "3. التحريك البرمجي المتقدم بـ Canvas و SVG (Canvas Mechanics & Vector Animators)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "canvas-draw",
    "name": "Canvas-draw",
    "npmName": "canvas-draw",
    "version": "1.0.0",
    "license": "ISC",
    "source": "https://www.npmjs.com/package/canvas-draw",
    "description": "Add position and line events for drawing onto canvas.",
    "categories": [
      "12. تحريك البكسلات والغرافيتي البصري (Pixel Art Engines & Canvas Drawing)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "canvas-gauges",
    "name": "Canvas-gauges",
    "npmName": "canvas-gauges",
    "version": "2.1.7",
    "license": "MIT",
    "source": "git://github.com/Mikhus/canvas-gauges.git",
    "homepage": "https://github.com/Mikhus/canvas-gauges#readme",
    "description": "Minimalist HTML5 Canvas Gauges",
    "categories": [
      "3. التحريك البرمجي المتقدم بـ Canvas و SVG (Canvas Mechanics & Vector Animators)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "canvas-nest.js",
    "name": "Canvas-nest.js",
    "npmName": "canvas-nest.js",
    "version": "2.0.4",
    "license": "MIT",
    "source": "git+https://github.com/hustcc/canvas-nest.js.git",
    "homepage": "https://atool.vip",
    "description": "A nest backgroud of website draw on canvas use javascript, do not depends on jQuery.",
    "categories": [
      "1. مكتبات أنظمة الجسيمات والخلفيات التفاعلية (Particle & Background FX)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "canvas-select",
    "name": "Canvas-Select",
    "npmName": "canvas-select",
    "version": "2.36.0",
    "license": "MIT",
    "source": "git+https://github.com/heylight/canvas-select.git",
    "homepage": "https://github.com/heylight/canvas-select",
    "description": "一个用于图片标注的javascript库，基于canvas，简单轻量，支持矩形、多边形、点、折线、圆形、网格、画笔、橡皮擦",
    "categories": [
      "أدوات الملاحظة والتأشير على المستندات والواجهات (Annotation, Canvas Markup & Feedback)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "canvas-sketch",
    "name": "Canvas-sketch",
    "npmName": "canvas-sketch",
    "version": "0.7.8",
    "license": "MIT",
    "source": "git://github.com/mattdesl/canvas-sketch.git",
    "homepage": "https://github.com/mattdesl/canvas-sketch",
    "description": "A utility for quickly prototyping 2D and WebGL sketches",
    "categories": [
      "6. مكتبات الأشكال الغريبة والتوليدية (Generative Art & Geometry Generation)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "canvas2video",
    "name": "Canvas2Video",
    "npmName": "canvas2video",
    "version": "1.1.4",
    "license": "MIT",
    "source": "git+https://github.com/welefen/canvas2video.git",
    "homepage": "https://github.com/welefen/canvas2video#readme",
    "description": "Convert dynamic canvas to video, support merge audio",
    "categories": [
      "مكتبات معالجة وتسجيل الوسائط المباشرة (Webcam, Screen Capture & Canvas Stream)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "carbon-components",
    "name": "Carbon Design System (IBM)",
    "npmName": "carbon-components",
    "version": "10.58.15",
    "license": "Apache-2.0",
    "source": "git+https://github.com/carbon-design-system/carbon.git",
    "homepage": "https://www.carbondesignsystem.com/",
    "description": "The Carbon Design System is IBM’s open-source design system for products and experiences.",
    "categories": [
      "1. أنظمة وتصميم واجهات المستخدم (UI Design Systems & Component Libraries)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "cesium",
    "name": "CesiumJS (3D Globe)",
    "npmName": "cesium",
    "version": "1.144.0",
    "license": "Apache-2.0",
    "source": "git+https://github.com/CesiumGS/cesium.git",
    "homepage": "http://cesium.com/cesiumjs/",
    "description": "CesiumJS is a JavaScript library for creating 3D globes and 2D maps in a web browser without a plugin.",
    "categories": [
      "9. التعيين والتوجيه وتصميم الخرائط الجغرافية (Mapping & Geospatial Viz)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "chaperone",
    "name": "Chaperone",
    "npmName": "chaperone",
    "version": "1.0.0-beta4",
    "license": "Apache-2.0",
    "source": "https://www.npmjs.com/package/chaperone",
    "description": "A responsive web tour guide",
    "categories": [
      "5. تصميم أدلة الاستخدام والجولات التعريفية (Onboarding, Tours & Product Walkthroughs)",
      "التوجيه وإرشادات المستخدم التفاعلية (Onboarding, Tours & Tooltips)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "chart.js",
    "name": "Chart.js",
    "npmName": "chart.js",
    "version": "4.5.1",
    "license": "MIT",
    "source": "git+https://github.com/chartjs/Chart.js.git",
    "homepage": "https://www.chartjs.org",
    "description": "Simple HTML5 charts using the canvas element.",
    "categories": [
      "5. الرسوم والمخططات البيانية (Charts & Data Visualization)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "choices.js",
    "name": "Choices.js",
    "npmName": "choices.js",
    "version": "11.2.3",
    "license": "MIT",
    "source": "git+https://github.com/Choices-js/Choices.git",
    "homepage": "https://github.com/Choices-js/Choices#readme",
    "description": "A vanilla JS customisable text input/select box plugin",
    "categories": [
      "2. إدارة وتنسيق النماذج المدخلة وتأكيدها بصرياً (Form Styling & UX Enhancements)",
      "7. تحسين وتجميع استمارة الإدخال (Form Beautifiers & Smart Control UI)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "chota",
    "name": "Chota",
    "npmName": "chota",
    "version": "0.9.2",
    "license": "MIT",
    "source": "git+https://github.com/jenil/chota.git",
    "homepage": "https://jenil.github.io/chota",
    "description": "A really small CSS framework",
    "categories": [
      "2. أطر التنسيق والتخطيط CSS (CSS Frameworks & Methodologies)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "circletype.js",
    "name": "Circletype.js",
    "npmName": "circletype.js",
    "version": "1.1.2",
    "license": "MIT",
    "source": "git+https://github.com/mike3run/CircleType.git",
    "homepage": "https://github.com/mike3run/CircleType#readme",
    "description": "circle type but with npm",
    "categories": [
      "12. تحسين النصوص والمسافات والحواف (Typography & Layout Enhancers)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "cleave.js",
    "name": "Cleave.js",
    "npmName": "cleave.js",
    "version": "1.6.0",
    "license": "Apache-2.0",
    "source": "git+https://github.com/nosir/cleave.js.git",
    "homepage": "https://github.com/nosir/cleave.js",
    "description": "JavaScript library for formatting input text content when you are typing",
    "categories": [
      "2. إدارة وتنسيق النماذج المدخلة وتأكيدها بصرياً (Form Styling & UX Enhancements)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "clusterize.js",
    "name": "Clusterize.js",
    "npmName": "clusterize.js",
    "version": "1.0.0",
    "license": "MIT",
    "source": "git+ssh://git@github.com/NeXTs/Clusterize.js.git",
    "homepage": "https://github.com/NeXTs/Clusterize.js",
    "description": "Tiny vanilla JS plugin to display large data sets easily",
    "categories": [
      "6. تصميم الجداول المتقدمة وإدارة البيانات (Data Grids & Smart Tables)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "codeflask",
    "name": "CodeFlask",
    "npmName": "codeflask",
    "version": "1.4.1",
    "license": "MIT",
    "source": "git+https://github.com/kazzkiq/CodeFlask.git",
    "homepage": "https://kazzkiq.github.io/CodeFlask/",
    "description": "A micro code-editor for awesome web pages",
    "categories": [
      "12. تزيين وتنسيق أكواد البرمجة (Code Highlighting & Syntax Beautifiers)",
      "أدوات معالجة النصوص البرمجية وإبرازها (Code Syntax Highlighting & Formatting)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "codemirror",
    "name": "CodeMirror",
    "npmName": "codemirror",
    "version": "6.0.2",
    "license": "MIT",
    "source": "git+https://github.com/codemirror/basic-setup.git",
    "homepage": "https://github.com/codemirror/basic-setup#readme",
    "description": "Basic configuration for the CodeMirror code editor",
    "categories": [
      "3. محريرات وتنسيق النصوص والمستندات (Text Editors & Document Formatting)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "colcade",
    "name": "Colcade",
    "npmName": "colcade",
    "version": "0.2.0",
    "license": "MIT",
    "source": "git+https://github.com/desandro/colcade.git",
    "homepage": "https://github.com/desandro/colcade#readme",
    "description": "Lightweight masonry layout",
    "categories": [
      "13. بناء الهياكل وتخطيط الشبكات المجهزة (Grid Layout Systems)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "color-namer",
    "name": "Color-namer",
    "npmName": "color-namer",
    "version": "1.4.0",
    "license": "MIT",
    "source": "git+https://github.com/colorjs/color-namer.git",
    "homepage": "https://github.com/colorjs/color-namer#readme",
    "description": "Give me a color and I'll name it.",
    "categories": [
      "7. ألوان وسلاسل التدرجات والتصميم البصري (Color Systems & Palette Generators)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "color-thief",
    "name": "Color Thief",
    "npmName": "color-thief",
    "version": "2.2.5",
    "license": "BSD-2-Clause",
    "source": "git://github.com/null2/color-thief.git",
    "homepage": "https://github.com/null2/color-thief#readme",
    "description": "A script for grabbing the color palette from an image. Uses Javascript and the canvas tag to make it happen.",
    "categories": [
      "4. معالجة الصور والتصفية البصرية (Image Processing & Filters)",
      "7. ألوان وسلاسل التدرجات والتصميم البصري (Color Systems & Palette Generators)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "colord",
    "name": "Colord",
    "npmName": "colord",
    "version": "2.9.3",
    "license": "MIT",
    "source": "git+https://github.com/omgovich/colord.git",
    "homepage": "https://github.com/omgovich/colord#readme",
    "description": "👑 A tiny yet powerful tool for high-performance color manipulations and conversions",
    "categories": [
      "7. ألوان وسلاسل التدرجات والتصميم البصري (Color Systems & Palette Generators)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "com.zibra.liquids-free",
    "name": "GPU-Fluid-Simulation",
    "npmName": "com.zibra.liquids-free",
    "version": "1.4.5",
    "license": "MIT",
    "source": "git+ssh://git@github.com/ZibraAI/com.zibra.liquids-free.git",
    "homepage": "https://zibra.ai/",
    "description": "Real-time liquid simulation plugin (GPU), powered by AI. New game mechanics & gameplay, graphics refining, game performance improvement. Ease of use.",
    "categories": [
      "محاكاة الطقس، السوائل، والظواهر الطبيعية (Nature, Weather & Physics Simulation)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "compressorjs",
    "name": "Compressor.js",
    "npmName": "compressorjs",
    "version": "1.3.0",
    "license": "MIT",
    "source": "git+https://github.com/fengyuanchen/compressorjs.git",
    "homepage": "https://fengyuanchen.github.io/compressorjs",
    "description": "JavaScript image compressor.",
    "categories": [
      "4. معالجة الصور والتصفية البصرية (Image Processing & Filters)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "cov-arcgis-esm",
    "name": "Esri ArcGIS API for JS",
    "npmName": "cov-arcgis-esm",
    "version": "0.0.17",
    "license": "MIT",
    "source": "git+https://github.com/CityOfVernonia/cov-arcgis-esm.git",
    "homepage": "https://github.com/CityOfVernonia/cov-arcgis-esm#readme",
    "description": "City of Vernonia widgets and friends for Esri JavaScript API in ESM.",
    "categories": [
      "9. التعيين والتوجيه وتصميم الخرائط الجغرافية (Mapping & Geospatial Viz)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "cropperjs",
    "name": "Cropper.js",
    "npmName": "cropperjs",
    "version": "2.1.1",
    "license": "MIT",
    "source": "git+https://github.com/fengyuanchen/cropperjs.git",
    "homepage": "https://github.com/fengyuanchen/cropperjs/tree/main/packages/cropperjs/#readme",
    "description": "JavaScript image cropper.",
    "categories": [
      "4. معالجة الصور والتصفية البصرية (Image Processing & Filters)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "ctx-blur",
    "name": "Canvas-blur",
    "npmName": "ctx-blur",
    "version": "1.0.2",
    "license": "ISC",
    "source": "git+https://github.com/vigour-io/ctx-blur.git",
    "homepage": "https://github.com/vigour-io/ctx-blur#readme",
    "description": "Applies a blur filter to a canvas",
    "categories": [
      "14. المؤثرات الحجمية والتشويه البصري (Web Displacement & Canvas Filters)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "culori",
    "name": "Culori",
    "npmName": "culori",
    "version": "4.0.2",
    "license": "MIT",
    "source": "git+ssh://git@github.com/Evercoder/culori.git",
    "homepage": "https://github.com/Evercoder/culori#readme",
    "description": "A general-purpose color library for JavaScript",
    "categories": [
      "7. ألوان وسلاسل التدرجات والتصميم البصري (Color Systems & Palette Generators)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "cursor-follower",
    "name": "Cursor-follower",
    "npmName": "cursor-follower",
    "version": "0.0.2",
    "license": "ISC",
    "source": "https://www.npmjs.com/package/cursor-follower",
    "description": "Package that allows a very nice \"Follow Animation\" to the cursor.",
    "categories": [
      "محاكاة أجهزة الإدخال والتأثيرات اللمسية (Haptics, Cursor FX & Gamepad)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "cypress-layout-inspector",
    "name": "Layout-inspector",
    "npmName": "cypress-layout-inspector",
    "version": "1.7.0",
    "license": "MIT",
    "source": "git+https://github.com/msmps/cypress-layout-inspector.git",
    "homepage": "https://github.com/msmps/cypress-layout-inspector#readme",
    "description": "Simple utility to provide layout testing functionality to Cypress",
    "categories": [
      "10. أدوات الملاحظة الحية والقياسات على الواجهة (UI Measuring, Rulers & Grid Guides)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "cytoscape-dagre",
    "name": "Cytoscape.js",
    "npmName": "cytoscape-dagre",
    "version": "4.0.0",
    "license": "MIT",
    "source": "git+https://github.com/cytoscape/cytoscape.js-dagre.git",
    "homepage": "https://github.com/cytoscape/cytoscape.js-dagre",
    "description": "The Dagre layout for DAGs and trees for Cytoscape.js",
    "categories": [
      "6. الأشكال الهندسية والمخططات التوضيحية (Diagrams, Flowcharts & Geometry)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "cytoscape-grid-guide",
    "name": "Grid-guide",
    "npmName": "cytoscape-grid-guide",
    "version": "2.3.3",
    "license": "MIT",
    "source": "git+https://github.com/iVis-at-Bilkent/cytoscape.js-grid-guide.git",
    "homepage": "https://github.com/iVis-at-Bilkent/cytoscape.js-grid-guide",
    "description": "A sophisticated and highly customizable Cytoscape.js extension for grid and guideline interactions.",
    "categories": [
      "10. أدوات الملاحظة الحية والقياسات على الواجهة (UI Measuring, Rulers & Grid Guides)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "d3-geo",
    "name": "D3-Geo",
    "npmName": "d3-geo",
    "version": "3.1.1",
    "license": "ISC",
    "source": "git+https://github.com/d3/d3-geo.git",
    "homepage": "https://d3js.org/d3-geo/",
    "description": "Shapes and calculators for spherical coordinates.",
    "categories": [
      "9. التعيين والتوجيه وتصميم الخرائط الجغرافية (Mapping & Geospatial Viz)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "d3-hierarchy",
    "name": "D3-hierarchy",
    "npmName": "d3-hierarchy",
    "version": "3.1.2",
    "license": "ISC",
    "source": "git+https://github.com/d3/d3-hierarchy.git",
    "homepage": "https://d3js.org/d3-hierarchy/",
    "description": "Layout algorithms for visualizing hierarchical data.",
    "categories": [
      "10. أدوات بناء المخططات الهيكلية والأشجار (Tree Views & Organizational Charts)",
      "8. تنسيق الرسوم الشجرية والتنظيم الهيكلي (Tree Diagrams & Hierarchy Viz)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "daisyui",
    "name": "DaisyUI",
    "npmName": "daisyui",
    "version": "5.7.17",
    "license": "MIT",
    "source": "git+https://github.com/saadeghi/daisyui.git",
    "homepage": "https://daisyui.com",
    "description": "daisyUI 5 - The Tailwind CSS Component Library",
    "categories": [
      "1. أنظمة وتصميم واجهات المستخدم (UI Design Systems & Component Libraries)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "datamaps",
    "name": "Datamaps",
    "npmName": "datamaps",
    "version": "0.5.10",
    "license": "MIT",
    "source": "git+https://github.com/markmarkoh/datamaps.git",
    "homepage": "https://github.com/markmarkoh/datamaps#readme",
    "description": "datamaps with d3.js",
    "categories": [
      "9. التعيين الجغرافي والخرائط المتخصصة (Advanced Geo, Heatmaps & Choropleth)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "datatables",
    "name": "DataTables",
    "npmName": "datatables",
    "version": "1.10.18",
    "license": "MIT",
    "source": "git+https://github.com/DataTables/DataTables.git",
    "homepage": "http://datatables.net",
    "description": "DataTables enhances HTML tables with the ability to sort, filter and page the data in the table very easily. It provides a comprehensive API and set of configuration options, allowing you to consume data from virtually any data source.",
    "categories": [
      "6. تصميم الجداول المتقدمة وإدارة البيانات (Data Grids & Smart Tables)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "deku-pure-grid",
    "name": "Pure.CSS",
    "npmName": "deku-pure-grid",
    "version": "1.2.1",
    "license": "MIT",
    "source": "git+https://github.com/micnews/deku-pure-grid.git",
    "homepage": "https://github.com/micnews/deku-pure-grid#readme",
    "description": "Grid component for [deku](https://github.com/dekujs/deku), using [pure.css](https://github.com/yahoo/pure) grid system.",
    "categories": [
      "2. أطر التنسيق والتخطيط CSS (CSS Frameworks & Methodologies)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "delaunator",
    "name": "Delaunator (Delaunay Triangulation)",
    "npmName": "delaunator",
    "version": "5.1.0",
    "license": "ISC",
    "source": "git+https://github.com/mapbox/delaunator.git",
    "homepage": "https://github.com/mapbox/delaunator#readme",
    "description": "An incredibly fast JavaScript library for Delaunay triangulation of 2D points",
    "categories": [
      "6. مكتبات الأشكال الغريبة والتوليدية (Generative Art & Geometry Generation)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "desmosapi",
    "name": "Desmos API",
    "npmName": "desmosapi",
    "version": "1.7.0",
    "license": "ISC",
    "source": "https://www.npmjs.com/package/desmosapi",
    "description": "node module to use Desmos API",
    "categories": [
      "4. كتابة الرياضيات والرموز العلمية (Math & Science Rendering)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "dockview",
    "name": "Dockview",
    "npmName": "dockview",
    "version": "8.1.0",
    "license": "MIT",
    "source": "git+https://github.com/dockview/dockview.git",
    "homepage": "https://github.com/dockview/dockview",
    "description": "Docking layout manager — tabs, groups, grids, splitviews, drag and drop, floating panels",
    "categories": [
      "11. تقسيم الشاشات وتصاميم النوافذ القابلة للتكبير (Split Panes, Docking & Windows UI)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "docusaurus",
    "name": "Docusaurus",
    "npmName": "docusaurus",
    "version": "1.14.7",
    "license": "MIT",
    "source": "https://github.com/facebook/docusaurus.git",
    "description": "Easy to Maintain Open Source Documentation Websites",
    "categories": [
      "3. المعاينة المباشرة وتجربة المكونات بصرياً (UI Component Playground & Documentation)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "docz",
    "name": "Docz",
    "npmName": "docz",
    "version": "2.4.0",
    "license": "MIT",
    "source": "git+https://github.com/doczjs/docz.git",
    "homepage": "https://github.com/doczjs/docz#readme",
    "description": "It's has never been so easy to documents your things!",
    "categories": [
      "3. المعاينة المباشرة وتجربة المكونات بصرياً (UI Component Playground & Documentation)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "dom-to-image",
    "name": "Dom-to-image",
    "npmName": "dom-to-image",
    "version": "2.6.0",
    "license": "MIT",
    "source": "git+https://github.com/tsayen/dom-to-image.git",
    "homepage": "https://github.com/tsayen/dom-to-image#readme",
    "description": "Generates an image from a DOM node using HTML5 canvas and SVG",
    "categories": [
      "مكتبات معالجة وتسجيل الوسائط المباشرة (Webcam, Screen Capture & Canvas Stream)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "draft.js",
    "name": "Draft.js",
    "npmName": "draft.js",
    "version": "0.2.0",
    "license": "MIT",
    "source": "git+https://github.com/D1SC0tech/draft.js.git",
    "homepage": "http://draft.D1SC0te.ch",
    "description": "A lightweight library for parametric design",
    "categories": [
      "3. محريرات وتنسيق النصوص والمستندات (Text Editors & Document Formatting)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "draggabilly",
    "name": "Draggabilly",
    "npmName": "draggabilly",
    "version": "3.0.0",
    "license": "MIT",
    "source": "git://github.com/desandro/draggabilly.git",
    "homepage": "https://draggabilly.desandro.com/",
    "description": "make that shiz draggable",
    "categories": [
      "5. لوحات الرسم والتوقيع والتفاعل باللمس (Canvas, Signature & Gesture)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "draggable-modifier",
    "name": "Hammer.js",
    "npmName": "draggable-modifier",
    "version": "1.0.6",
    "license": "MIT",
    "source": "git+https://github.com/ollar/draggable-modifier.git",
    "homepage": "https://github.com/ollar/draggable-modifier#readme",
    "description": "Modifier wrapper over Hammer.js library to drag elements",
    "categories": [
      "5. لوحات الرسم والتوقيع والتفاعل باللمس (Canvas, Signature & Gesture)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "drei",
    "name": "Drei",
    "npmName": "drei",
    "version": "2.2.21",
    "license": "MIT",
    "source": "git+https://github.com/pmndrs/drei.git",
    "homepage": "https://github.com/pmndrs/drei",
    "description": "useful add-ons for react-three-fiber",
    "categories": [
      "1. تصميم ثلاثي الأبعاد وعرض النماذج التفاعلية (3D Model Viewers & Product Design)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "driver.js",
    "name": "Driver.js",
    "npmName": "driver.js",
    "version": "1.8.0",
    "license": "MIT",
    "source": "git+https://github.com/nilbuild/driver.js.git",
    "homepage": "https://driverjs.com",
    "categories": [
      "5. تصميم أدلة الاستخدام والجولات التعريفية (Onboarding, Tours & Product Walkthroughs)",
      "التوجيه وإرشادات المستخدم التفاعلية (Onboarding, Tours & Tooltips)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "easyqrcodejs",
    "name": "EasyQRCodeJS",
    "npmName": "easyqrcodejs",
    "version": "4.6.2",
    "license": "MIT",
    "source": "git+https://github.com/ushelp/EasyQRCodeJS.git",
    "homepage": "https://github.com/ushelp/EasyQRCodeJS#readme",
    "description": "Cross-browser QRCode generator for pure javascript. Support Canvas, SVG and Table drawing methods. Support Dot style, Logo, Background image, Colorful, Title etc. settings. Support Angular, Vue.js, React, Next.js, Svelte framework. Support binary(hex) dat",
    "categories": [
      "مكتبات الباركود ورؤية الكمبيوتر في الويب (Barcode, QR & Web Vision)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "echarts",
    "name": "Apache ECharts",
    "npmName": "echarts",
    "version": "6.1.0",
    "license": "Apache-2.0",
    "source": "git+https://github.com/apache/echarts.git",
    "homepage": "https://echarts.apache.org",
    "description": "Apache ECharts is a powerful, interactive charting and data visualization library for browser",
    "categories": [
      "5. الرسوم والمخططات البيانية (Charts & Data Visualization)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "editor.js",
    "name": "Editor.js",
    "npmName": "editor.js",
    "version": "0.1.0",
    "license": "MIT",
    "source": "git+https://github.com/ktkaushik/editor.git",
    "homepage": "https://github.com/ktkaushik/editor",
    "description": "A simple minimalistic html5 WYSIWYG editor",
    "categories": [
      "3. محريرات وتنسيق النصوص والمستندات (Text Editors & Document Formatting)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "element-plus",
    "name": "Element Plus",
    "npmName": "element-plus",
    "version": "2.14.4",
    "license": "MIT",
    "source": "git+https://github.com/element-plus/element-plus.git",
    "homepage": "https://element-plus.org/",
    "description": "A Component Library for Vue 3",
    "categories": [
      "1. أنظمة وتصميم واجهات المستخدم (UI Design Systems & Component Libraries)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "ember-cli-pace-alyne",
    "name": "Pace.js",
    "npmName": "ember-cli-pace-alyne",
    "version": "1.1.9",
    "license": "MIT",
    "source": "git+https://github.com/alyne/ember-cli-pace-gs.git",
    "homepage": "https://github.com/alyne/ember-cli-pace-gs#readme",
    "description": "Pace.js load progress bar for Ember apps (built by praya)",
    "categories": [
      "13. تخصيص شريط التقدم وعرض حالات التحميل (NProgress & Micro Loaders)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "ember-gsap",
    "name": "GSAP (GreenSock)",
    "npmName": "ember-gsap",
    "version": "1.0.1",
    "license": "MIT",
    "source": "git+https://github.com/willviles/ember-gsap.git",
    "homepage": "https://github.com/willviles/ember-gsap#readme",
    "description": "GSAP - Greensock Animation Platform as ES6 Modules for Ember.js applications.",
    "categories": [
      "10. التحريك والتأثيرات البصرية (Animations & Visual Effects)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "ember-leaflet-pm",
    "name": "Geoman (Leaflet drawing)",
    "npmName": "ember-leaflet-pm",
    "version": "2.0.3",
    "license": "MIT",
    "source": "git+https://github.com/evocount/ember-leaflet-pm.git",
    "homepage": "https://github.com/evocount/ember-leaflet-pm#readme",
    "description": "Use leaflet-geoman in Ember with ember-leaflet.",
    "categories": [
      "9. التعيين الجغرافي والخرائط المتخصصة (Advanced Geo, Heatmaps & Choropleth)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "embla-carousel",
    "name": "Embla Carousel",
    "npmName": "embla-carousel",
    "version": "8.6.0",
    "license": "MIT",
    "source": "git+https://github.com/davidjerleke/embla-carousel",
    "homepage": "https://www.embla-carousel.com",
    "description": "A lightweight carousel library with fluid motion and great swipe precision",
    "categories": [
      "5. لوحات الرسم والتوقيع والتفاعل باللمس (Canvas, Signature & Gesture)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "emoji-mart",
    "name": "Emoji Mart",
    "npmName": "emoji-mart",
    "version": "5.6.0",
    "license": "MIT",
    "source": "git+https://github.com/missive/emoji-mart.git",
    "homepage": "https://missiveapp.com/open/emoji-mart",
    "description": "Emoji picker for the web",
    "categories": [
      "7. تحسين وعرض الوجوه الضاحكة والرموز التعبيرية (Emoji Rendering & Picker UI)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "emoji-picker-element",
    "name": "Emoji-picker-element",
    "npmName": "emoji-picker-element",
    "version": "1.29.1",
    "license": "Apache-2.0",
    "source": "git+https://github.com/nolanlawson/emoji-picker-element.git",
    "homepage": "https://github.com/nolanlawson/emoji-picker-element#readme",
    "description": "Lightweight emoji picker distributed as a web component",
    "categories": [
      "7. تحسين وعرض الوجوه الضاحكة والرموز التعبيرية (Emoji Rendering & Picker UI)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "emotion",
    "name": "Emotion",
    "npmName": "emotion",
    "version": "11.0.0",
    "license": "MIT",
    "source": "https://github.com/emotion-js/emotion/tree/master/packages/emotion",
    "homepage": "https://emotion.sh",
    "description": "The Next Generation of CSS-in-JS.",
    "categories": [
      "2. أطر التنسيق والتخطيط CSS (CSS Frameworks & Methodologies)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "eng-semantic-ui",
    "name": "Semantic UI / Fomantic UI",
    "npmName": "eng-semantic-ui",
    "version": "2.7.4-4",
    "license": "MIT",
    "source": "git://github.com/ArturoRis/Semantic-UI.git",
    "homepage": "http://fomantic-ui.com",
    "description": "Fomantic empowers designers and developers by creating a shared vocabulary for UI.",
    "categories": [
      "1. أنظمة وتصميم واجهات المستخدم (UI Design Systems & Component Libraries)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "enjoyhint",
    "name": "EnjoyHint",
    "npmName": "enjoyhint",
    "version": "1.0.1",
    "license": "ISC",
    "source": "https://www.npmjs.com/package/enjoyhint",
    "description": "",
    "categories": [
      "5. تصميم أدلة الاستخدام والجولات التعريفية (Onboarding, Tours & Product Walkthroughs)",
      "التوجيه وإرشادات المستخدم التفاعلية (Onboarding, Tours & Tooltips)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "enquire.js",
    "name": "Enquire.js",
    "npmName": "enquire.js",
    "version": "2.1.6",
    "license": "MIT",
    "source": "git://github.com/WickyNilliams/enquire.js.git",
    "homepage": "http://wicky.nillia.ms/enquire.js",
    "description": "Awesome Media Queries in JavaScript",
    "categories": [
      "2. مؤثرات التمرير وقصص الويب التفاعلية (Scroll & Scrollytelling)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "epic-spinners",
    "name": "Epic-spinners",
    "npmName": "epic-spinners",
    "version": "2.0.0",
    "license": "MIT",
    "source": "git+https://github.com/epicmaxco/epic-spinners.git",
    "homepage": "https://epic-spinners.epicmax.co",
    "description": "Easy to use css spinners collection with vue.js integration.",
    "categories": [
      "13. تخصيص شريط التقدم وعرض حالات التحميل (NProgress & Micro Loaders)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "evergreen-ui",
    "name": "Evergreen UI",
    "npmName": "evergreen-ui",
    "version": "7.1.9",
    "license": "MIT",
    "source": "https://github.com/segmentio/evergreen.git",
    "description": "🌲 React UI Kit by Segment 🌲",
    "categories": [
      "1. أنظمة وتصميم واجهات المستخدم (UI Design Systems & Component Libraries)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "exceljs",
    "name": "ExcelJS",
    "npmName": "exceljs",
    "version": "4.4.0",
    "license": "MIT",
    "source": "git+https://github.com/exceljs/exceljs.git",
    "homepage": "https://github.com/exceljs/exceljs#readme",
    "description": "Excel Workbook Manager - Read and Write xlsx and csv Files.",
    "categories": [
      "8. نماذج تحويل الصيغ والمستندات للويب (Web Doc Renderers & Converters)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "fabric.js",
    "name": "Fabric.js",
    "npmName": "fabric.js",
    "version": "0.0.2",
    "license": "ISC",
    "source": "git+https://github.com/bringhub/fabric.js.git",
    "homepage": "https://github.com/bringhub/fabric.js#readme",
    "description": "",
    "categories": [
      "6. الأشكال الهندسية والمخططات التوضيحية (Diagrams, Flowcharts & Geometry)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "face-api.js",
    "name": "Face-api.js",
    "npmName": "face-api.js",
    "version": "0.22.2",
    "license": "MIT",
    "source": "https://www.npmjs.com/package/face-api.js",
    "description": "JavaScript API for face detection and face recognition in the browser with tensorflow.js",
    "categories": [
      "14. التفاعل مع الإيماءات ثلاثية الأبعاد بدون لمس (Webcam Gestures & Pose Tracking)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "family-chart",
    "name": "Family-chart",
    "npmName": "family-chart",
    "version": "0.9.0",
    "license": "ISC",
    "source": "git+https://github.com/donatso/family-chart.git",
    "homepage": "https://donatso.github.io/family-chart/",
    "description": "family tree creator and viewer",
    "categories": [
      "10. أدوات بناء المخططات الهيكلية والأشجار (Tree Views & Organizational Charts)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "fancytree",
    "name": "FancyTree",
    "npmName": "fancytree",
    "version": "0.0.0",
    "license": "MIT",
    "source": "http://example.com/fancytree-npm-dummy.git",
    "description": "A dummy project to be used as alias for the real 'jquery.fancytree' package",
    "categories": [
      "10. أدوات بناء المخططات الهيكلية والأشجار (Tree Views & Organizational Charts)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "feather-icons",
    "name": "Feather Icons",
    "npmName": "feather-icons",
    "version": "4.29.2",
    "license": "MIT",
    "source": "git+https://github.com/feathericons/feather.git",
    "homepage": "https://github.com/feathericons/feather#readme",
    "description": "Simply beautiful open source icons",
    "categories": [
      "9. الأيقونات والرموز (Icons & Vector Symbols)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "filterous",
    "name": "Filterous",
    "npmName": "filterous",
    "version": "2.0.2-beta",
    "license": "MIT",
    "source": "git+https://github.com/girliemac/filterous-2.git",
    "homepage": "https://github.com/girliemac/filterous-2#readme",
    "description": "Instagram-like photo manipulation library for Node.js and Javascript on browser",
    "categories": [
      "4. معالجة الصور والتصفية البصرية (Image Processing & Filters)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "fittext.js",
    "name": "FitText.js",
    "npmName": "fittext.js",
    "version": "1.2.0",
    "license": "WTFPL",
    "source": "git+https://github.com/magora-suchkov/FitText.js.git",
    "homepage": "https://github.com/magora-suchkov/FitText.js#readme",
    "description": "FitText makes font-sizes flexible. Use this plugin on your responsive design for ratio-based resizing of your headlines.",
    "categories": [
      "8. الخطوط والطباعة والتنسيق الطباعي (Fonts & Typography Libraries)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "flexlayout-react",
    "name": "Flexlayout-react",
    "npmName": "flexlayout-react",
    "version": "0.10.5",
    "license": "MIT",
    "source": "git+https://github.com/caplin/FlexLayout.git",
    "homepage": "https://github.com/caplin/FlexLayout#readme",
    "description": "A multi-tab docking layout manager",
    "categories": [
      "11. تقسيم الشاشات وتصاميم النوافذ القابلة للتكبير (Split Panes, Docking & Windows UI)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "flowbite",
    "name": "Flowbite",
    "npmName": "flowbite",
    "version": "4.0.2",
    "license": "MIT",
    "source": "git+https://github.com/themesberg/flowbite.git",
    "homepage": "https://flowbite.com",
    "description": "The most popular library of interactive components built with Tailwind CSS",
    "categories": [
      "1. أنظمة وتصميم واجهات المستخدم (UI Design Systems & Component Libraries)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "fluent-svelte",
    "name": "Fluent UI (Microsoft)",
    "npmName": "fluent-svelte",
    "version": "1.6.0",
    "license": "MIT",
    "source": "git+https://github.com/tropix126/fluent-svelte.git",
    "homepage": "https://github.com/tropix126/fluent-svelte",
    "description": "A faithful implementation of Microsoft's Fluent Design System in Svelte.",
    "categories": [
      "1. أنظمة وتصميم واجهات المستخدم (UI Design Systems & Component Libraries)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "focus-trap",
    "name": "Focus-trap",
    "npmName": "focus-trap",
    "version": "8.2.2",
    "license": "MIT",
    "source": "git+https://github.com/focus-trap/focus-trap.git",
    "homepage": "https://github.com/focus-trap/focus-trap#readme",
    "description": "Trap focus within a DOM node.",
    "categories": [
      "11. مكتبات إتاحة الاستخدام والتمويه التكيفي (Accessibility & Skeleton Loaders)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "fontawesome",
    "name": "FontAwesome",
    "npmName": "fontawesome",
    "version": "5.6.3",
    "license": "MIT",
    "source": "git+https://github.com/moqmar/node-fontawesome.git",
    "homepage": "https://github.com/moqmar/node-fontawesome#readme",
    "description": "Get the Font Awesome unicode character by the icon name.",
    "categories": [
      "8. الخطوط والطباعة والتنسيق الطباعي (Fonts & Typography Libraries)",
      "9. الأيقونات والرموز (Icons & Vector Symbols)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "fontkit",
    "name": "Fontkit",
    "npmName": "fontkit",
    "version": "2.0.4",
    "license": "MIT",
    "source": "git://github.com/foliojs/fontkit.git",
    "homepage": "https://github.com/foliojs/fontkit#readme",
    "description": "An advanced font engine for Node and the browser",
    "categories": [
      "8. الخطوط والطباعة والتنسيق الطباعي (Fonts & Typography Libraries)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "formik",
    "name": "Formik",
    "npmName": "formik",
    "version": "2.4.9",
    "license": "Apache-2.0",
    "source": "git+https://github.com/jaredpalmer/formik.git",
    "homepage": "https://formik.org",
    "description": "Build forms in React, without the tears",
    "categories": [
      "2. إدارة وتنسيق النماذج المدخلة وتأكيدها بصرياً (Form Styling & UX Enhancements)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "foundation-emails",
    "name": "Foundation for Emails",
    "npmName": "foundation-emails",
    "version": "2.5.1",
    "license": "MIT",
    "source": "git+https://github.com/foundation/foundation-emails.git",
    "homepage": "https://github.com/foundation/foundation-emails#readme",
    "description": "A framework for responsive emails",
    "categories": [
      "أطر تصميم الرسائل والبريد الإلكتروني (HTML Email Frameworks & Formatting)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "framer-motion",
    "name": "Framer Motion",
    "npmName": "framer-motion",
    "version": "13.1.0",
    "license": "MIT",
    "source": "git+https://github.com/motiondivision/motion.git",
    "homepage": "https://github.com/motiondivision/motion#readme",
    "description": "A simple and powerful JavaScript animation library",
    "categories": [
      "10. التحريك والتأثيرات البصرية (Animations & Visual Effects)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "function-plot",
    "name": "Function Plot",
    "npmName": "function-plot",
    "version": "1.25.4",
    "license": "MIT",
    "source": "git+https://github.com/mauriciopoppe/function-plot.git",
    "homepage": "http://mauriciopoppe.github.io/function-plot/",
    "description": "A simple 2d function plotter powered by d3",
    "categories": [
      "4. كتابة الرياضيات والرموز العلمية (Math & Science Rendering)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "gamepad.js",
    "name": "Gamepad.js",
    "npmName": "gamepad.js",
    "version": "3.0.1",
    "license": "MIT",
    "source": "https://github.com/Tom32i/gamepad.js",
    "homepage": "https://github.com/Tom32i/gamepad.js",
    "description": "A simple HTML5 Gamepad handler that provides keyboard-like events for Gamepad axes and button",
    "categories": [
      "محاكاة أجهزة الإدخال والتأثيرات اللمسية (Haptics, Cursor FX & Gamepad)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "gatsby-plugin-enhanced-emoji-cursor",
    "name": "Trail-cursor",
    "npmName": "gatsby-plugin-enhanced-emoji-cursor",
    "version": "1.0.5",
    "license": "MIT",
    "source": "git+https://github.com/carlfairclough/gatsby-plugin-enhanced-emoji-cursor.git",
    "homepage": "https://github.com/carlfairclough/gatsby-plugin-enhanced-emoji-cursor#readme",
    "description": "Gatsby plugin to add a fancy emoji trail behind the cursor with extra customization.",
    "categories": [
      "2. تخصيص مؤشرات الماوس والتأثيرات اللمسية (Custom Cursors & Cursor FX)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "gatsby-plugin-web-font-loader",
    "name": "Web Font Loader (Typekit/Google)",
    "npmName": "gatsby-plugin-web-font-loader",
    "version": "1.0.4",
    "license": "MIT",
    "source": "git+https://github.com/escaladesports/gatsby-plugin-web-font-loader.git",
    "homepage": "https://github.com/escaladesports/gatsby-plugin-web-font-loader#readme",
    "description": "A Gatsby plugin to asynchronously load webfonts using [Web Font Loader](https://github.com/typekit/webfontloader). Can load fonts from [Google Fonts](http://www.google.com/fonts/), [Typekit](http://www.typekit.com/),  [Fonts.com](http://www.fonts.com/), a",
    "categories": [
      "8. الخطوط والطباعة والتنسيق الطباعي (Fonts & Typography Libraries)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "gde",
    "name": "G2 / G2Plot (AntV)",
    "npmName": "gde",
    "version": "1.0.0-alpha.1",
    "license": "ISC",
    "source": "git+https://github.com/geocompass/geoc-chart.git",
    "homepage": "https://github.com/geocompass/geoc-chart",
    "description": "自定义封装G2、G2Plot、L7、Mapbox等自定义图表配置",
    "categories": [
      "5. الرسوم والمخططات البيانية (Charts & Data Visualization)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "geolib",
    "name": "Geolib",
    "npmName": "geolib",
    "version": "3.3.14",
    "license": "MIT",
    "source": "git+https://github.com/manuelbieh/geolib.git",
    "homepage": "https://github.com/manuelbieh/geolib#readme",
    "description": "Library to provide basic geospatial operations like distance calculation, decoding of sexagesimal coordinates etc.",
    "categories": [
      "6. مكتبات الأشكال الغريبة والتوليدية (Generative Art & Geometry Generation)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "glitch-canvas",
    "name": "Glitch-canvas",
    "npmName": "glitch-canvas",
    "version": "1.1.12",
    "license": "MIT",
    "source": "git+https://github.com/snorpey/glitch-canvas.git",
    "homepage": "https://github.com/snorpey/glitch-canvas#readme",
    "description": "JavaScript library for applying a glitch effect to a canvas element",
    "categories": [
      "4. معالجة الصور والتصفية البصرية (Image Processing & Filters)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "glitch.js",
    "name": "Glitch.js",
    "npmName": "glitch.js",
    "version": "1.0.0",
    "license": "ISC",
    "source": "https://github.com/rebelminds/Glitch.js.git",
    "homepage": "https://github.com/rebelminds/Glitch.js",
    "description": "Glitch effect your html",
    "categories": [
      "14. المؤثرات الحجمية والتشويه البصري (Web Displacement & Canvas Filters)",
      "خطوط وتأثيرات اللمسات الرجعية والتراثية (Retro, Glitch & Cyberpunk FX)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "golden-layout",
    "name": "Golden-layout",
    "npmName": "golden-layout",
    "version": "2.6.0",
    "license": "MIT",
    "source": "git+https://github.com/golden-layout/golden-layout.git",
    "homepage": "https://github.com/golden-layout/golden-layout",
    "description": "A multi-screen javascript Layout manager",
    "categories": [
      "11. تقسيم الشاشات وتصاميم النوافذ القابلة للتكبير (Split Panes, Docking & Windows UI)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "gridstack",
    "name": "Gridstack.js",
    "npmName": "gridstack",
    "version": "13.0.2",
    "license": "MIT",
    "source": "git+https://github.com/gridstack/gridstack.js.git",
    "homepage": "http://gridstackjs.com/",
    "description": "TypeScript/JS lib for dashboard layout and creation, responsive, mobile support, no external dependencies, with many wrappers (React, Angular, Vue, Ember, knockout...)",
    "categories": [
      "13. بناء الهياكل وتخطيط الشبكات المجهزة (Grid Layout Systems)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "grommet",
    "name": "Grommet",
    "npmName": "grommet",
    "version": "2.56.0",
    "license": "Apache-2.0",
    "source": "git+https://github.com/grommet/grommet.git",
    "homepage": "http://grommet.io",
    "description": "focus on the essential experience",
    "categories": [
      "1. أنظمة وتصميم واجهات المستخدم (UI Design Systems & Component Libraries)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "grunt-typeset",
    "name": "Typeset.js",
    "npmName": "grunt-typeset",
    "version": "0.1.3",
    "license": "MIT",
    "source": "git://github.com/mobinni/grunt-typeset.git",
    "homepage": "https://github.com/mobinni/grunt-typeset",
    "description": "A Grunt wrapper for Typeset.js",
    "categories": [
      "12. تحسين النصوص والمسافات والحواف (Typography & Layout Enhancers)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "guider.js",
    "name": "Guider.js",
    "npmName": "guider.js",
    "version": "0.0.1",
    "license": "MIT",
    "source": "https://www.npmjs.com/package/guider.js",
    "description": "tool for running tutorial",
    "categories": [
      "5. تصميم أدلة الاستخدام والجولات التعريفية (Onboarding, Tours & Product Walkthroughs)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "h4mammoth",
    "name": "Mammoth.js (Docx to HTML)",
    "npmName": "h4mammoth",
    "version": "3.0.0",
    "license": "BSD-2-Clause",
    "source": "https://github.com/hfour/mammoth.js.git",
    "description": "Incompatible fork from mammoth.js. Convert Word documents from docx to simple HTML and Markdown",
    "categories": [
      "8. نماذج تحويل الصيغ والمستندات للويب (Web Doc Renderers & Converters)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "has-css-accessibility-selector",
    "name": "Accessibility-js",
    "npmName": "has-css-accessibility-selector",
    "version": "1.0.1",
    "license": "MIT",
    "source": "git+https://github.com/bartveneman/has-css-accessibility-selector.git",
    "homepage": "https://www.projectwallace.com/oss",
    "description": "A test to determine wether a selector contains an accessibility-related selector",
    "categories": [
      "11. مكتبات إتاحة الاستخدام والتمويه التكيفي (Accessibility & Skeleton Loaders)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "heml",
    "name": "Heml",
    "npmName": "heml",
    "version": "1.1.3",
    "license": "MIT",
    "source": "git+https://github.com/SparkPost/heml.git",
    "homepage": "https://heml.io",
    "description": "HEML is an open source markup language for building responsive email",
    "categories": [
      "أطر تصميم الرسائل والبريد الإلكتروني (HTML Email Frameworks & Formatting)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "heroicons",
    "name": "Heroicons",
    "npmName": "heroicons",
    "version": "2.2.0",
    "license": "MIT",
    "source": "git+https://github.com/tailwindlabs/heroicons.git",
    "homepage": "https://github.com/tailwindlabs/heroicons#readme",
    "description": "<p align=\"center\">   <a href=\"https://heroicons.com\" target=\"_blank\">     <picture>       <source media=\"(prefers-color-scheme: dark)\" srcset=\"https://raw.githubusercontent.com/tailwindlabs/heroicons/HEAD/.github/logo-dark.svg\">       <source media=\"(pref",
    "categories": [
      "9. الأيقونات والرموز (Icons & Vector Symbols)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "highlight.js",
    "name": "Highlight.js",
    "npmName": "highlight.js",
    "version": "11.12.0",
    "license": "BSD-3-Clause",
    "source": "git://github.com/highlightjs/highlight.js.git",
    "homepage": "https://highlightjs.org/",
    "description": "Syntax highlighting with language autodetection.",
    "categories": [
      "12. تزيين وتنسيق أكواد البرمجة (Code Highlighting & Syntax Beautifiers)",
      "أدوات معالجة النصوص البرمجية وإبرازها (Code Syntax Highlighting & Formatting)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "hopscotch",
    "name": "Hopscotch",
    "npmName": "hopscotch",
    "version": "0.3.1",
    "license": "Apache-2.0",
    "source": "git://github.com/linkedin/hopscotch.git",
    "homepage": "https://github.com/linkedin/hopscotch#readme",
    "description": "A framework to make it easy for developers to add product tours to their pages.",
    "categories": [
      "5. تصميم أدلة الاستخدام والجولات التعريفية (Onboarding, Tours & Product Walkthroughs)",
      "التوجيه وإرشادات المستخدم التفاعلية (Onboarding, Tours & Tooltips)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "howler",
    "name": "Howler.js",
    "npmName": "howler",
    "version": "2.2.4",
    "license": "MIT",
    "source": "git://github.com/goldfire/howler.js.git",
    "homepage": "https://howlerjs.com",
    "description": "Javascript audio library for the modern web.",
    "categories": [
      "15. أدوات الصوت والبصريات التفاعلية (Web Audio Visualization)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "html2canvas",
    "name": "HTML2Canvas",
    "npmName": "html2canvas",
    "version": "1.4.1",
    "license": "MIT",
    "source": "git+ssh://git@github.com/niklasvh/html2canvas.git",
    "homepage": "https://html2canvas.hertzen.com",
    "description": "Screenshots with JavaScript",
    "categories": [
      "مكتبات معالجة وتسجيل الوسائط المباشرة (Webcam, Screen Capture & Canvas Stream)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "html2pdf.js",
    "name": "Html2pdf.js",
    "npmName": "html2pdf.js",
    "version": "0.14.0",
    "license": "MIT",
    "source": "git+ssh://git@github.com/eKoopmans/html2pdf.js.git",
    "homepage": "https://ekoopmans.github.io/html2pdf.js/",
    "description": "Client-side HTML-to-PDF rendering using pure JS",
    "categories": [
      "تحسين وتنسيق طباعة الصفحات وتحويلها لـ PDF (Print Style & Paged Media)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "html5-qrcode",
    "name": "Html5-qrcode",
    "npmName": "html5-qrcode",
    "version": "2.3.8",
    "license": "Apache-2.0",
    "source": "git+https://github.com/mebjas/html5-qrcode.git",
    "homepage": "https://github.com/mebjas/html5-qrcode#readme",
    "description": "A cross platform HTML5 QR Code & bar code scanner",
    "categories": [
      "مكتبات الباركود ورؤية الكمبيوتر في الويب (Barcode, QR & Web Vision)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "hyphenator.js",
    "name": "Hyphenator.js",
    "npmName": "hyphenator.js",
    "version": "5.1.0",
    "license": "MIT",
    "source": "git+https://github.com/mnater/Hyphenator.git",
    "homepage": "https://github.com/mnater/Hyphenator#readme",
    "description": "Client-side hyphenation of HTML-Documents",
    "categories": [
      "12. تحسين النصوص والمسافات والحواف (Typography & Layout Enhancers)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "iconify",
    "name": "Iconify",
    "npmName": "iconify",
    "version": "1.4.0",
    "license": "ISC",
    "source": "git+https://github.com/emarschner/iconify.git",
    "homepage": "https://github.com/emarschner/iconify#readme",
    "description": "Utility for using SVG images as icons on the web with pure CSS and/or DOM injection",
    "categories": [
      "9. الأيقونات والرموز (Icons & Vector Symbols)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "image-compare-viewer",
    "name": "Image-compare-viewer",
    "npmName": "image-compare-viewer",
    "version": "1.6.2",
    "license": "MIT",
    "source": "git+https://github.com/kylewetton/image-compare-viewer.git",
    "homepage": "https://github.com/kylewetton/image-compare-viewer#readme",
    "description": "A fully responsive slider to compare before and after images for grading, retouching and all else. Mobile and fluid container friendly!",
    "categories": [
      "مكتبات المقارنة البصرية وتأثيرات الإزاحة (Image Comparison & Slider FX)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "image-comparison-slider",
    "name": "Image-comparison-slider",
    "npmName": "image-comparison-slider",
    "version": "1.0.4",
    "license": "MIT",
    "source": "git+https://github.com/guillaumedeplanque/image-comparison-slider.git",
    "homepage": "https://github.com/guillaumedeplanque/image-comparison-slider#readme",
    "description": "Compare two images in a slider with mouse move effect",
    "categories": [
      "مكتبات المقارنة البصرية وتأثيرات الإزاحة (Image Comparison & Slider FX)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "impress.js",
    "name": "Impress.js",
    "npmName": "impress.js",
    "version": "1.1.0",
    "license": "MIT",
    "source": "git+https://github.com/impress/impress.js.git",
    "homepage": "https://github.com/impress/impress.js#readme",
    "description": "It's a presentation framework based on the power of CSS3 transforms and transitions in modern browsers and inspired by the idea behind prezi.com.",
    "categories": [
      "13. تنسيق العروض التقديمية التفاعلية على الويب (Web Slides & Interactive Presentations)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "inferno-test-utils",
    "name": "React Suite",
    "npmName": "inferno-test-utils",
    "version": "9.1.0",
    "license": "MIT",
    "source": "git+https://github.com/infernojs/inferno.git",
    "homepage": "https://github.com/infernojs/inferno#readme",
    "description": "Suite of utilities for testing Inferno applications",
    "categories": [
      "1. أنظمة وتصميم واجهات المستخدم (UI Design Systems & Component Libraries)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "inject-webfontloader",
    "name": "Adobe Fonts (Typekit)",
    "npmName": "inject-webfontloader",
    "version": "1.1.4",
    "license": "MIT",
    "source": "git+https://github.com/AriesDatuin/inject-webfontloader.git",
    "homepage": "https://github.com/AriesDatuin/inject-webfontloader#readme",
    "description": "Injects WebFontLoader with support for Adobe Edge Web Fonts/Typekit, Fontdeck, Fonts.com (Monotype), Google Fonts, and custom fonts.",
    "categories": [
      "8. الخطوط والطباعة والتنسيق الطباعي (Fonts & Typography Libraries)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "interact.js",
    "name": "Interact.js",
    "npmName": "interact.js",
    "version": "1.2.8",
    "license": "MIT",
    "source": "git+https://github.com/taye/interact.js.git",
    "homepage": "http://interactjs.io",
    "description": "Drag and drop, resizing and multi-touch gestures with inertia and snapping for modern browsers (and also IE8+)",
    "categories": [
      "5. لوحات الرسم والتوقيع والتفاعل باللمس (Canvas, Signature & Gesture)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "intl-tel-input",
    "name": "International Telephone Input (intl-tel-input)",
    "npmName": "intl-tel-input",
    "version": "29.2.3",
    "license": "MIT",
    "source": "git+https://github.com/jackocnr/intl-tel-input.git",
    "homepage": "https://intl-tel-input.com",
    "description": "A JavaScript library for entering, formatting, and validating international telephone numbers",
    "categories": [
      "7. تحسين وتجميع استمارة الإدخال (Form Beautifiers & Smart Control UI)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "isotope",
    "name": "Isotope",
    "npmName": "isotope",
    "version": "1.0.0-alpha.3",
    "license": "MIT",
    "source": "git+https://github.com/webstronauts/isotope.git",
    "homepage": "https://github.com/webstronauts/isotope#readme",
    "description": "The toolkit to build your own Atomic CSS framework upon.",
    "categories": [
      "13. بناء الهياكل وتخطيط الشبكات المجهزة (Grid Layout Systems)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "izitoast",
    "name": "Izitoast",
    "npmName": "izitoast",
    "version": "1.4.0",
    "license": "Apache-2.0",
    "source": "git+https://github.com/dolce/iziToast.git",
    "homepage": "https://github.com/dolce/iziToast#readme",
    "description": "Elegant, responsive, flexible and lightweight notification plugin with no dependencies.",
    "categories": [
      "10. واجهات التنبيه، الإشعارات، والبطاقات العائمة (Toaster, Modal & Popover FX)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "jointjs",
    "name": "JointJS",
    "npmName": "jointjs",
    "version": "3.7.7",
    "license": "MPL-2.0",
    "source": "git+https://github.com/clientIO/joint.git",
    "homepage": "http://jointjs.com",
    "description": "JavaScript diagramming library",
    "categories": [
      "6. الأشكال الهندسية والمخططات التوضيحية (Diagrams, Flowcharts & Geometry)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "jsmind",
    "name": "jsMind",
    "npmName": "jsmind",
    "version": "0.9.1",
    "license": "BSD-3-Clause",
    "source": "git+https://github.com/hizzgdev/jsmind.git",
    "homepage": "https://github.com/hizzgdev/jsmind#readme",
    "description": "jsMind is a pure javascript library for mindmap, it base on html5 canvas. jsMind was released under BSD license, you can embed it in any project, if only you observe the license.",
    "categories": [
      "7. الخرائط الذهنية والشبكات المفاهيمية (Mind Maps & Knowledge Graphs)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "jspdf",
    "name": "JSPDF",
    "npmName": "jspdf",
    "version": "4.2.1",
    "license": "MIT",
    "source": "git+https://github.com/parallax/jsPDF.git",
    "homepage": "https://github.com/parallax/jsPDF",
    "description": "PDF Document creation from JavaScript",
    "categories": [
      "3. محريرات وتنسيق النصوص والمستندات (Text Editors & Document Formatting)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "jsqr",
    "name": "JsQR",
    "npmName": "jsqr",
    "version": "1.4.0",
    "license": "Apache-2.0",
    "source": "git+https://github.com/cozmo/jsQR.git",
    "homepage": "https://github.com/cozmo/jsQR#readme",
    "description": "A pure javascript QR code reading library that takes in raw images and will locate, extract and parse any QR code found within.",
    "categories": [
      "مكتبات الباركود ورؤية الكمبيوتر في الويب (Barcode, QR & Web Vision)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "jstree",
    "name": "jsTree",
    "npmName": "jstree",
    "version": "3.3.17",
    "license": "MIT",
    "source": "git://github.com/vakata/jstree.git",
    "homepage": "http://jstree.com",
    "description": "jQuery tree plugin",
    "categories": [
      "10. أدوات بناء المخططات الهيكلية والأشجار (Tree Views & Organizational Charts)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "katex",
    "name": "KaTeX",
    "npmName": "katex",
    "version": "0.18.4",
    "license": "MIT",
    "source": "git+https://github.com/KaTeX/KaTeX.git",
    "homepage": "https://katex.org",
    "description": "Fast math typesetting for the web.",
    "categories": [
      "4. كتابة الرياضيات والرموز العلمية (Math & Science Rendering)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "kemet-ui",
    "name": "Blueprint UI",
    "npmName": "kemet-ui",
    "version": "4.1.0",
    "license": "MIT",
    "source": "git+https://github.com/hasanirogers/kemet-ui.git",
    "homepage": "https://kemet.dev",
    "description": "A flexible blueprint system for UIs.",
    "categories": [
      "1. أنظمة وتصميم واجهات المستخدم (UI Design Systems & Component Libraries)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "kityminder",
    "name": "KityMinder",
    "npmName": "kityminder",
    "version": "1.0.1",
    "license": "MIT",
    "source": "https://github.com/fex-team/kityminder.git",
    "homepage": "https://github.com/fex-team/kityminder",
    "description": "Kity Minder",
    "categories": [
      "7. الخرائط الذهنية والشبكات المفاهيمية (Mind Maps & Knowledge Graphs)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "lazy-line-painter",
    "name": "Lazy Line Painter",
    "npmName": "lazy-line-painter",
    "version": "2.0.3",
    "license": "MIT",
    "source": "git+https://github.com/merri-ment/lazy-line-painter.git",
    "homepage": "https://lazylinepainter.com",
    "description": "A Modern JS library for SVG path animation",
    "categories": [
      "14. مكتبات التحكم بالأشكال المتجهة والـ SVG (SVG Manipulation)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "leaflet-arc",
    "name": "Leaflet.js",
    "npmName": "leaflet-arc",
    "version": "1.0.2",
    "license": "ISC",
    "source": "git+https://github.com/mad-gooze/Leaflet.Arc.git",
    "homepage": "https://github.com/mad-gooze/Leaflet.Arc#readme",
    "description": "Leaflet.js plugin for drawing Great Circle arcs using arc.js",
    "categories": [
      "9. التعيين والتوجيه وتصميم الخرائط الجغرافية (Mapping & Geospatial Viz)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "lettering.js",
    "name": "Lettering.js",
    "npmName": "lettering.js",
    "version": "0.8.2",
    "license": "MIT",
    "source": "git+https://github.com/mike3run/Lettering.js.git",
    "homepage": "https://github.com/mike3run/Lettering.js#readme",
    "description": "a npm version of lettering js",
    "categories": [
      "8. الخطوط والطباعة والتنسيق الطباعي (Fonts & Typography Libraries)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "lightview",
    "name": "Svelte-UI Micro",
    "npmName": "lightview",
    "version": "2.5.0",
    "license": "MIT",
    "source": "https://www.npmjs.com/package/lightview",
    "description": "A reactive UI library with features of Bau, Juris, and HTMX plus safe LLM UI generation",
    "categories": [
      "أطر تصميم الواجهات الدقيقة والمصغرة (Micro-UI & Embedded Interfaces)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "list.js",
    "name": "List.js",
    "npmName": "list.js",
    "version": "2.3.1",
    "license": "MIT",
    "source": "git://github.com/javve/list.js.git",
    "homepage": "https://listjs.com",
    "description": "The perfect library for lists. Supports search, sort, filters and flexibility. Built to be invisible and work on existing HTML",
    "categories": [
      "6. تصميم الجداول المتقدمة وإدارة البيانات (Data Grids & Smart Tables)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "locomotive-scroll",
    "name": "Locomotive Scroll",
    "npmName": "locomotive-scroll",
    "version": "5.0.1",
    "license": "MIT",
    "source": "git+https://github.com/locomotivemtl/locomotive-scroll.git",
    "homepage": "https://github.com/locomotivemtl/locomotive-scroll",
    "description": "Detection of elements in viewport & smooth scrolling with parallax effects.",
    "categories": [
      "10. التحريك والتأثيرات البصرية (Animations & Visual Effects)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "lottie-react",
    "name": "Lottie / Lottie-Web",
    "npmName": "lottie-react",
    "version": "2.4.1",
    "license": "MIT",
    "source": "git+https://github.com/Gamote/lottie-react.git",
    "homepage": "https://lottiereact.com",
    "description": "Lottie for React",
    "categories": [
      "10. التحريك والتأثيرات البصرية (Animations & Visual Effects)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "lucide-static",
    "name": "Lucide Icons",
    "npmName": "lucide-static",
    "version": "1.31.0",
    "license": "ISC",
    "source": "https://github.com/lucide-icons/lucide.git",
    "homepage": "https://lucide.dev",
    "description": "Lucide is a community-run fork of Feather Icons, open for anyone to contribute icons.",
    "categories": [
      "9. الأيقونات والرموز (Icons & Vector Symbols)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "luxy.js",
    "name": "Luxy.js",
    "npmName": "luxy.js",
    "version": "0.1.0",
    "license": "MIT",
    "source": "git+ssh://git@github.com/min30327/luxy.js.git",
    "homepage": "https://github.com/min30327/luxy.js#readme",
    "description": "Inertia scroll and parallax effect plugin in Vanilla.j",
    "categories": [
      "2. مؤثرات التمرير وقصص الويب التفاعلية (Scroll & Scrollytelling)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "maplibre-gl",
    "name": "MapLibre GL",
    "npmName": "maplibre-gl",
    "version": "6.3.0",
    "license": "BSD-3-Clause",
    "source": "git+https://github.com/maplibre/maplibre-gl-js.git",
    "homepage": "https://maplibre.org/",
    "description": "BSD licensed community fork of mapbox-gl, a WebGL interactive maps library",
    "categories": [
      "9. التعيين والتوجيه وتصميم الخرائط الجغرافية (Mapping & Geospatial Viz)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "mathbox",
    "name": "MathBox",
    "npmName": "mathbox",
    "version": "2.3.2-rc1",
    "license": "MIT",
    "source": "git+https://github.com/unconed/mathbox.git",
    "homepage": "https://github.com/unconed/mathbox#readme",
    "description": "Presentation-quality WebGL math graphing",
    "categories": [
      "4. كتابة الرياضيات والرموز العلمية (Math & Science Rendering)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "mathjax",
    "name": "MathJax",
    "npmName": "mathjax",
    "version": "4.1.3",
    "license": "Apache-2.0",
    "source": "git+https://github.com/mathjax/MathJax.git",
    "homepage": "https://github.com/mathjax/MathJax#readme",
    "description": "Beautiful and accessible math in all browsers. MathJax is an open-source JavaScript display engine for LaTeX, MathML, and AsciiMath notation that works in all browsers. This package includes the packaged components (install mathjax-full to get the source ",
    "categories": [
      "4. كتابة الرياضيات والرموز العلمية (Math & Science Rendering)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "mathjs",
    "name": "MathJS",
    "npmName": "mathjs",
    "version": "15.2.0",
    "license": "Apache-2.0",
    "source": "git+https://github.com/josdejong/mathjs.git",
    "homepage": "https://mathjs.org",
    "description": "Math.js is an extensive math library for JavaScript and Node.js. It features a flexible expression parser with support for symbolic computation, comes with a large set of built-in functions and constants, and offers an integrated solution to work with dif",
    "categories": [
      "4. كتابة الرياضيات والرموز العلمية (Math & Science Rendering)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "mathlive",
    "name": "MathLive",
    "npmName": "mathlive",
    "version": "0.110.0",
    "license": "MIT",
    "source": "git+https://github.com/arnog/mathlive.git",
    "homepage": "https://github.com/arnog/mathlive#readme",
    "description": "A web component for math input",
    "categories": [
      "4. كتابة الرياضيات والرموز العلمية (Math & Science Rendering)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "mathquill",
    "name": "MathQuill",
    "npmName": "mathquill",
    "version": "0.10.1-a",
    "license": "MPL-2.0",
    "source": "git+https://github.com/mathquill/mathquill.git",
    "homepage": "https://github.com/mathquill/mathquill#readme",
    "description": "Easily type math in your webapp",
    "categories": [
      "4. كتابة الرياضيات والرموز العلمية (Math & Science Rendering)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "mdx",
    "name": "MDX",
    "npmName": "mdx",
    "version": "0.3.1",
    "license": "MIT",
    "source": "git+https://github.com/rstacruz/mdx.git",
    "homepage": "https://github.com/rstacruz/mdx#readme",
    "description": "Generic documentation extractor. Extensible enough to work with any language that supports comments.",
    "categories": [
      "3. محريرات وتنسيق النصوص والمستندات (Text Editors & Document Formatting)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "medium-editor",
    "name": "Medium Editor",
    "npmName": "medium-editor",
    "version": "5.23.3",
    "license": "MIT",
    "source": "git+https://github.com/yabwe/medium-editor.git",
    "homepage": "http://yabwe.github.io/medium-editor/",
    "description": "Medium.com WYSIWYG editor clone.",
    "categories": [
      "3. محريرات وتنسيق النصوص والمستندات (Text Editors & Document Formatting)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "meshline",
    "name": "Meshline",
    "npmName": "meshline",
    "version": "3.3.1",
    "license": "MIT",
    "source": "https://github.com/pmndrs/meshline#readme",
    "homepage": "https://github.com/pmndrs/meshline#readme",
    "description": "A mesh replacement for `THREE.Line`. Instead of using GL_LINE, it uses a strip of billboarded triangles. This is a fork of [spite/THREE.MeshLine](https://github.com/spite/THREE.MeshLine), previously maintained by studio [Utsuboco](https://github.com/utsub",
    "categories": [
      "8. مكتبات البناء ثنائي وثلاثي الأبعاد (WebGL, Canvas & Shader Wrappers)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "meyda",
    "name": "Meyda (Audio Feature Extraction)",
    "npmName": "meyda",
    "version": "5.6.3",
    "license": "MIT",
    "source": "git+https://github.com/meyda/meyda.git",
    "homepage": "https://github.com/meyda/meyda",
    "description": "Real-time feature extraction for the web audio api",
    "categories": [
      "15. أدوات الصوت والبصريات التفاعلية (Web Audio Visualization)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "micromodal",
    "name": "MicroModal",
    "npmName": "micromodal",
    "version": "0.7.0",
    "license": "ISC",
    "source": "https://github.com/ghosh/micromodal",
    "description": "Tiny javascript library for creating accessible modal dialogs",
    "categories": [
      "10. واجهات التنبيه، الإشعارات، والبطاقات العائمة (Toaster, Modal & Popover FX)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "midiconvert",
    "name": "Tone.js",
    "npmName": "midiconvert",
    "version": "0.4.7",
    "license": "MIT",
    "source": "git+https://github.com/Tonejs/MidiConvert.git",
    "homepage": "https://tonejs.github.com/MidiConvert/",
    "description": "Convert binary midi into Tone.js-friendly JSON",
    "categories": [
      "15. أدوات الصوت والبصريات التفاعلية (Web Audio Visualization)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "milligram",
    "name": "Milligram",
    "npmName": "milligram",
    "version": "1.4.1",
    "license": "MIT",
    "source": "git+https://github.com/milligram/milligram.git",
    "homepage": "https://milligram.io",
    "description": "A minimalist CSS framework.",
    "categories": [
      "2. أطر التنسيق والتخطيط CSS (CSS Frameworks & Methodologies)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "mind-elixir-jenysun",
    "name": "MindElixir",
    "npmName": "mind-elixir-jenysun",
    "version": "0.3.5",
    "license": "MIT",
    "source": "https://www.npmjs.com/package/mind-elixir-jenysun",
    "description": "![mindelixir logo](https://raw.githubusercontent.com/ssshooter/mind-elixir-core/master/logo.png)",
    "categories": [
      "7. الخرائط الذهنية والشبكات المفاهيمية (Mind Maps & Knowledge Graphs)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "mjml",
    "name": "MJML",
    "npmName": "mjml",
    "version": "5.4.0",
    "license": "MIT",
    "source": "git+https://github.com/mjmlio/mjml.git",
    "homepage": "https://mjml.io",
    "description": "MJML: the only framework that makes responsive-email easy",
    "categories": [
      "أطر تصميم الرسائل والبريد الإلكتروني (HTML Email Frameworks & Formatting)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "monaco-diff",
    "name": "Monaco Editor (VS Code core)",
    "npmName": "monaco-diff",
    "version": "1.2.1",
    "license": "MIT",
    "source": "git+https://github.com/inokawa/monaco-diff.git",
    "homepage": "https://github.com/inokawa/monaco-diff#readme",
    "description": "Text diff library exported from monaco-editor-core, which is core of VS Code.",
    "categories": [
      "3. محريرات وتنسيق النصوص والمستندات (Text Editors & Document Formatting)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "mouse-follower",
    "name": "Mouse-follower",
    "npmName": "mouse-follower",
    "version": "1.1.2",
    "license": "MIT",
    "source": "git+https://github.com/Cuberto/mouse-follower.git",
    "homepage": "https://github.com/Cuberto/mouse-follower",
    "description": "A powerful javascript library to create amazing and smooth effects for the mouse cursor on your website.",
    "categories": [
      "2. تخصيص مؤشرات الماوس والتأثيرات اللمسية (Custom Cursors & Cursor FX)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "muuri",
    "name": "Muuri",
    "npmName": "muuri",
    "version": "0.9.5",
    "license": "MIT",
    "source": "git+ssh://git@github.com/haltu/muuri.git",
    "homepage": "https://muuri.dev/",
    "description": "Responsive, sortable, filterable and draggable layouts",
    "categories": [
      "13. بناء الهياكل وتخطيط الشبكات المجهزة (Grid Layout Systems)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "nanobar",
    "name": "Nanobar",
    "npmName": "nanobar",
    "version": "0.4.2",
    "license": "MIT",
    "source": "git+ssh://git@github.com/jacoborus/nanobar.git",
    "homepage": "http://nanobar.jacoborus.codes",
    "description": "Very lightweight js progress bars (for browsers)",
    "categories": [
      "13. تخصيص شريط التقدم وعرض حالات التحميل (NProgress & Micro Loaders)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "ng2-markdown-to-html",
    "name": "Prism.js",
    "npmName": "ng2-markdown-to-html",
    "version": "1.3.2",
    "license": "MIT",
    "source": "git+https://github.com/jfcere/ng2-markdown-to-html.git",
    "homepage": "https://github.com/jfcere/ng2-markdown-to-html",
    "description": "Angular 2+ library that uses marked to parse markdown to html combined with Prism.js for synthax highlights",
    "categories": [
      "12. تزيين وتنسيق أكواد البرمجة (Code Highlighting & Syntax Beautifiers)",
      "أدوات معالجة النصوص البرمجية وإبرازها (Code Syntax Highlighting & Formatting)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "ngx-joypixels",
    "name": "JoyPixels",
    "npmName": "ngx-joypixels",
    "version": "1.1.0",
    "license": "MIT",
    "source": "git+https://github.com/johnbwoodruff/ngx-joypixels.git",
    "homepage": "https://github.com/johnbwoodruff/ngx-joypixels",
    "description": "An Angular library for easily using JoyPixels' Emoji library in your app",
    "categories": [
      "7. تحسين وعرض الوجوه الضاحكة والرموز التعبيرية (Emoji Rendering & Picker UI)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "ngx-markdown",
    "name": "Marked.js (Markdown)",
    "npmName": "ngx-markdown",
    "version": "22.0.0",
    "license": "MIT",
    "source": "git+https://github.com/jfcere/ngx-markdown.git",
    "homepage": "https://github.com/jfcere/ngx-markdown",
    "description": "Angular library that uses marked to parse markdown to html combined with Prism.js for synthax highlights",
    "categories": [
      "3. محريرات وتنسيق النصوص والمستندات (Text Editors & Document Formatting)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "ngx-splide",
    "name": "Splide.js",
    "npmName": "ngx-splide",
    "version": "7.0.1",
    "license": "MIT",
    "source": "git+https://github.com/JustCommunication-ru/ngx-splide.git",
    "homepage": "https://github.com/JustCommunication-ru/ngx-splide#readme",
    "description": "Splide.js integration with angular",
    "categories": [
      "5. لوحات الرسم والتوقيع والتفاعل باللمس (Canvas, Signature & Gesture)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "noty",
    "name": "Noty",
    "npmName": "noty",
    "version": "3.2.0-beta-deprecated",
    "license": "MIT",
    "source": "git://github.com/needim/noty.git",
    "homepage": "https://ned.im/noty",
    "description": "Noty is a dependency-free notification library that makes it easy to create alert - success - error - warning - information - confirmation messages as an alternative the standard alert dialog. Each notification is added to a queue. (Optional)",
    "categories": [
      "10. واجهات التنبيه، الإشعارات، والبطاقات العائمة (Toaster, Modal & Popover FX)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "notyf",
    "name": "Notyf",
    "npmName": "notyf",
    "version": "3.10.0",
    "license": "MIT",
    "source": "git+https://github.com/caroso1222/notyf.git",
    "homepage": "https://github.com/caroso1222/notyf#readme",
    "description": "A dead simple, responsive, a11y, dependency-free, vanilla JavaScript toast library.",
    "categories": [
      "10. واجهات التنبيه، الإشعارات، والبطاقات العائمة (Toaster, Modal & Popover FX)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "oimo",
    "name": "Oimo.js",
    "npmName": "oimo",
    "version": "1.0.9",
    "license": "MIT",
    "source": "git+https://github.com/lo-th/oimo.git",
    "homepage": "http://lo-th.github.io/Oimo.js/",
    "description": "JavaScript 3D physics engine.",
    "categories": [
      "3. محاكاة الفيزياء في واجهات المستخدم (Web Physics Engines)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "onsenui",
    "name": "Onsen UI",
    "npmName": "onsenui",
    "version": "2.12.9",
    "license": "Apache-2.0",
    "source": "git+https://github.com/OnsenUI/OnsenUI.git",
    "homepage": "https://onsen.io/",
    "description": "HTML5 Mobile Framework & UI Components",
    "categories": [
      "1. أنظمة وتصميم واجهات المستخدم (UI Design Systems & Component Libraries)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "open-props",
    "name": "Open Props",
    "npmName": "open-props",
    "version": "1.7.23",
    "license": "MIT",
    "source": "git+https://github.com/argyleink/open-props.git",
    "homepage": "https://github.com/argyleink/open-props#readme",
    "description": "<div align=\"center\">",
    "categories": [
      "2. أطر التنسيق والتخطيط CSS (CSS Frameworks & Methodologies)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "openframe-tangram",
    "name": "Tangram-es",
    "npmName": "openframe-tangram",
    "version": "0.2.16",
    "license": "MIT",
    "source": "git+https://github.com/tangrams/Openframe-tangram.git",
    "homepage": "https://github.com/tangrams/Openframe-tangram#readme",
    "description": "Openframe extension which adds support for maps via tangram-es",
    "categories": [
      "9. التعيين الجغرافي والخرائط المتخصصة (Advanced Geo, Heatmaps & Choropleth)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "openlayers",
    "name": "OpenLayers",
    "npmName": "openlayers",
    "version": "4.6.5",
    "license": "BSD-2-Clause",
    "source": "git://github.com/openlayers/openlayers.git",
    "homepage": "https://openlayers.org/",
    "description": "Build tools and sources for developing OpenLayers based mapping applications",
    "categories": [
      "9. التعيين والتوجيه وتصميم الخرائط الجغرافية (Mapping & Geospatial Viz)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "opentype.js",
    "name": "OpenType.js",
    "npmName": "opentype.js",
    "version": "2.0.0",
    "license": "MIT",
    "source": "git://github.com/opentypejs/opentype.js.git",
    "homepage": "https://github.com/opentypejs/opentype.js#readme",
    "description": "OpenType font parser",
    "categories": [
      "8. الخطوط والطباعة والتنسيق الطباعي (Fonts & Typography Libraries)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "orgchart.js",
    "name": "OrgChart.js",
    "npmName": "orgchart.js",
    "version": "0.0.4",
    "license": "MIT",
    "source": "git+https://github.com/overbid/orgchart.js.git",
    "homepage": "https://github.com/dabeng/OrgChart.js",
    "description": "organization chart plugin based on ES6",
    "categories": [
      "10. أدوات بناء المخططات الهيكلية والأشجار (Tree Views & Organizational Charts)",
      "8. تنسيق الرسوم الشجرية والتنظيم الهيكلي (Tree Diagrams & Hierarchy Viz)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "p2-es",
    "name": "p2.js",
    "npmName": "p2-es",
    "version": "1.2.3",
    "license": "MIT",
    "source": "git+https://github.com/pmndrs/p2-es.git",
    "homepage": "https://github.com/pmndrs/p2-es",
    "description": "A JavaScript 2D physics engine.",
    "categories": [
      "3. محاكاة الفيزياء في واجهات المستخدم (Web Physics Engines)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "packery",
    "name": "Packery",
    "npmName": "packery",
    "version": "3.0.0",
    "license": "MIT",
    "source": "git://github.com/metafizzy/packery.git",
    "homepage": "https://packery.metafizzy.co",
    "description": "Gapless, draggable grid layouts",
    "categories": [
      "13. بناء الهياكل وتخطيط الشبكات المجهزة (Grid Layout Systems)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "panzoom",
    "name": "Panzoom",
    "npmName": "panzoom",
    "version": "9.4.4",
    "license": "MIT",
    "source": "git+https://github.com/anvaka/panzoom.git",
    "homepage": "https://github.com/anvaka/panzoom#readme",
    "description": "Extensible, mobile friendly pan and zoom framework (supports DOM and SVG).",
    "categories": [
      "5. لوحات الرسم والتوقيع والتفاعل باللمس (Canvas, Signature & Gesture)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "parallax.js",
    "name": "Parallax.js",
    "npmName": "parallax.js",
    "version": "0.1.0",
    "license": "MIT",
    "source": "git+https://github.com/MobiusHorizons/parallax.js.git",
    "homepage": "https://github.com/MobiusHorizons/parallax.js#readme",
    "description": "Library for working with Parallax views.",
    "categories": [
      "2. مؤثرات التمرير وقصص الويب التفاعلية (Scroll & Scrollytelling)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "particles-bg",
    "name": "Particles-bg",
    "npmName": "particles-bg",
    "version": "2.5.5",
    "license": "MIT",
    "source": "git+https://github.com/lindelof/particles-bg.git",
    "homepage": "https://github.com/lindelof/particles-bg",
    "description": "a particles background for react",
    "categories": [
      "1. مكتبات أنظمة الجسيمات والخلفيات التفاعلية (Particle & Background FX)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "particles.js",
    "name": "Particles.js",
    "npmName": "particles.js",
    "version": "2.0.0",
    "license": "MIT",
    "source": "https://github.com/VincentGarreau/particles.js.git",
    "homepage": "https://github.com/VincentGarreau/particles.js",
    "description": "A lightweight JavaScript library for creating particles",
    "categories": [
      "1. مكتبات أنظمة الجسيمات والخلفيات التفاعلية (Particle & Background FX)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "pdfjs-dist",
    "name": "PDF.js (Mozilla)",
    "npmName": "pdfjs-dist",
    "version": "6.2.108",
    "license": "Apache-2.0",
    "source": "git+https://github.com/mozilla/pdf.js.git",
    "homepage": "https://mozilla.github.io/pdf.js/",
    "description": "Generic build of Mozilla's PDF.js library.",
    "categories": [
      "3. محريرات وتنسيق النصوص والمستندات (Text Editors & Document Formatting)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "pdfmake",
    "name": "pdfmake",
    "npmName": "pdfmake",
    "version": "0.3.11",
    "license": "MIT",
    "source": "git://github.com/bpampuch/pdfmake.git",
    "homepage": "http://pdfmake.org",
    "description": "Client/server side PDF printing in pure JavaScript",
    "categories": [
      "3. محريرات وتنسيق النصوص والمستندات (Text Editors & Document Formatting)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "phosphor-icons",
    "name": "Phosphor Icons",
    "npmName": "phosphor-icons",
    "version": "1.4.2",
    "license": "MIT",
    "source": "git+https://github.com/phosphor-icons/phosphor-icons.git",
    "homepage": "https://phosphoricons.com/",
    "description": "A clean and friendly icon family for web",
    "categories": [
      "9. الأيقونات والرموز (Icons & Vector Symbols)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "physicsjs",
    "name": "PhysicsJS",
    "npmName": "physicsjs",
    "version": "0.7.0",
    "license": "MIT",
    "source": "git+ssh://git@github.com/wellcaffeinated/PhysicsJS.git",
    "homepage": "https://github.com/wellcaffeinated/PhysicsJS#readme",
    "description": "A modular, extendable, and easy-to-use physics engine for javascript",
    "categories": [
      "3. محاكاة الفيزياء في واجهات المستخدم (Web Physics Engines)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "picmo",
    "name": "Picmo",
    "npmName": "picmo",
    "version": "5.8.5",
    "license": "MIT",
    "source": "git+https://github.com/joeattardi/picmo.git",
    "homepage": "https://picmojs.com",
    "description": "JavaScript emoji picker. Any app, any framework.",
    "categories": [
      "7. تحسين وعرض الوجوه الضاحكة والرموز التعبيرية (Emoji Rendering & Picker UI)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "pinch-zoom",
    "name": "Pinch-zoom",
    "npmName": "pinch-zoom",
    "version": "0.3.9",
    "license": "MIT",
    "source": "git+ssh://git@github.com/chemzqm/pinch-zoom.git",
    "homepage": "https://github.com/chemzqm/pinch-zoom#readme",
    "description": "pinch zoom element",
    "categories": [
      "5. محاكاة أدوات التكبير والتعديل الجغرافي والمجاري البصرية (Pan, Zoom & Viewport Tools)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "pixel-canvas",
    "name": "Pixel-canvas",
    "npmName": "pixel-canvas",
    "version": "0.4.14",
    "license": "MIT",
    "source": "https://www.npmjs.com/package/pixel-canvas",
    "description": "",
    "categories": [
      "12. تحريك البكسلات والغرافيتي البصري (Pixel Art Engines & Canvas Drawing)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "pixel-perfect",
    "name": "Pixel-perfect",
    "npmName": "pixel-perfect",
    "version": "2.0.26",
    "license": "MIT",
    "source": "git+https://github.com/andreasbm/pixel-perfect.git",
    "homepage": "https://github.com/andreasbm/pixel-perfect#readme",
    "description": "A pixel perfect SCSS stylesheet. Spiced with themeable mixins, custom CSS variables and other cool stuff you can handpick from.",
    "categories": [
      "10. أدوات الملاحظة الحية والقياسات على الواجهة (UI Measuring, Rulers & Grid Guides)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "pixelshapern",
    "name": "Pixel-art-react",
    "npmName": "pixelshapern",
    "version": "2.0.19",
    "license": "MIT",
    "source": "git+https://github.com/flyskywhy/PixelShapeRN.git",
    "homepage": "https://github.com/flyskywhy/PixelShapeRN#readme",
    "description": "Android iOS Web pixel drawing editor APP and sub-app that comes in handy when creating pixel art images and gif animations",
    "categories": [
      "12. تحريك البكسلات والغرافيتي البصري (Pixel Art Engines & Canvas Drawing)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "pixi-filters",
    "name": "Pixi-filters",
    "npmName": "pixi-filters",
    "version": "6.1.5",
    "license": "MIT",
    "source": "git+https://github.com/pixijs/filters.git",
    "homepage": "http://pixijs.com/",
    "description": "[![Node.js CI](https://github.com/pixijs/filters/workflows/Node.js%20CI/badge.svg)](https://github.com/pixijs/filters/actions/workflows/nodejs.yml?query=branch%3Amain) [![npm version](https://badge.fury.io/js/pixi-filters.svg)](https://www.npmjs.com/packa",
    "categories": [
      "14. المؤثرات الحجمية والتشويه البصري (Web Displacement & Canvas Filters)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "pixi-tilemap",
    "name": "Pixi-tilemap",
    "npmName": "pixi-tilemap",
    "version": "2.1.4",
    "license": "MIT",
    "source": "https://github.com/pixijs/pixi-tilemap.git",
    "homepage": "http://www.rpgmakerweb.com/",
    "description": "Pixi-tilemap provides tilemap shaders and tilemap renderer for pixi.js (v3 and v4). Used in rpgmaker MV.",
    "categories": [
      "12. تحريك البكسلات والغرافيتي البصري (Pixel Art Engines & Canvas Drawing)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "pixi.js",
    "name": "PixiJS",
    "npmName": "pixi.js",
    "version": "8.19.0",
    "license": "MIT",
    "source": "git+https://github.com/pixijs/pixijs.git",
    "homepage": "http://pixijs.com/",
    "description": "<p align=\"center\">   <a href=\"https://pixijs.com\" target=\"_blank\" rel=\"noopener noreferrer\">     <img height=\"150\" src=\"https://files.pixijs.download/branding/pixijs-logo-transparent-dark.svg?v=1\" alt=\"PixiJS logo\">   </a> </p> <br/> <p align=\"center\">   ",
    "categories": [
      "6. الأشكال الهندسية والمخططات التوضيحية (Diagrams, Flowcharts & Geometry)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "plantuml",
    "name": "PlantUML",
    "npmName": "plantuml",
    "version": "0.0.2",
    "license": "MIT",
    "source": "git://github.com/agirorn/plantuml.git",
    "description": "Convert PlantUML diagram text to SVG",
    "categories": [
      "6. الأشكال الهندسية والمخططات التوضيحية (Diagrams, Flowcharts & Geometry)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "playcanvas",
    "name": "PlayCanvas Engine",
    "npmName": "playcanvas",
    "version": "2.21.4",
    "license": "MIT",
    "source": "git+https://github.com/playcanvas/engine.git",
    "homepage": "https://playcanvas.com",
    "description": "Open-source WebGL/WebGPU 3D engine for the web",
    "categories": [
      "أنظمة ومؤثرات الواقع الممتد والافتراضي (WebXR, AR & VR)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "plotly.js",
    "name": "Plotly.js",
    "npmName": "plotly.js",
    "version": "3.7.0",
    "license": "MIT",
    "source": "git+https://github.com/plotly/plotly.js.git",
    "homepage": "https://github.com/plotly/plotly.js#readme",
    "description": "The open source javascript graphing library that powers plotly",
    "categories": [
      "5. الرسوم والمخططات البيانية (Charts & Data Visualization)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "polished",
    "name": "Polished",
    "npmName": "polished",
    "version": "4.3.1",
    "license": "MIT",
    "source": "git+https://github.com/styled-components/polished.git",
    "homepage": "https://polished.js.org",
    "description": "A lightweight toolset for writing styles in Javascript.",
    "categories": [
      "7. ألوان وسلاسل التدرجات والتصميم البصري (Color Systems & Palette Generators)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "polygon-clipping",
    "name": "Polygon-clipping",
    "npmName": "polygon-clipping",
    "version": "0.15.7",
    "license": "MIT",
    "source": "git+https://github.com/mfogel/polygon-clipping.git",
    "homepage": "https://github.com/mfogel/polygon-clipping#readme",
    "description": "Apply boolean Polygon clipping operations (intersection, union, difference, xor) to your Polygons & MultiPolygons.",
    "categories": [
      "9. التعيين الجغرافي والخرائط المتخصصة (Advanced Geo, Heatmaps & Choropleth)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "popmotion",
    "name": "Popmotion",
    "npmName": "popmotion",
    "version": "11.0.5",
    "license": "MIT",
    "source": "https://github.com/Popmotion/popmotion/tree/master/packages/popmotion",
    "homepage": "https://popmotion.io/",
    "description": "The animator's toolbox",
    "categories": [
      "10. التحريك والتأثيرات البصرية (Animations & Visual Effects)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "postcss-modules-scope",
    "name": "CSS Modules",
    "npmName": "postcss-modules-scope",
    "version": "3.2.1",
    "license": "ISC",
    "source": "git+https://github.com/css-modules/postcss-modules-scope.git",
    "homepage": "https://github.com/css-modules/postcss-modules-scope",
    "description": "A CSS Modules transform to extract export statements from local-scope classes",
    "categories": [
      "2. أطر التنسيق والتخطيط CSS (CSS Frameworks & Methodologies)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "postprocessing",
    "name": "Postprocessing (Three.js)",
    "npmName": "postprocessing",
    "version": "6.39.4",
    "license": "Zlib",
    "source": "git+https://github.com/pmndrs/postprocessing.git",
    "homepage": "https://github.com/pmndrs/postprocessing",
    "description": "A post processing library for three.js.",
    "categories": [
      "8. مكتبات البناء ثنائي وثلاثي الأبعاد (WebGL, Canvas & Shader Wrappers)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "pptxgenjs",
    "name": "PptxGenJS",
    "npmName": "pptxgenjs",
    "version": "4.0.1",
    "license": "MIT",
    "source": "git+https://github.com/gitbrent/PptxGenJS.git",
    "homepage": "https://gitbrent.github.io/PptxGenJS/",
    "description": "Create JavaScript PowerPoint Presentations",
    "categories": [
      "8. نماذج تحويل الصيغ والمستندات للويب (Web Doc Renderers & Converters)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "preact-material-components",
    "name": "Preact-Material-Components",
    "npmName": "preact-material-components",
    "version": "1.6.1",
    "license": "MIT",
    "source": "git+https://github.com/prateekbh/preact-material-components.git",
    "homepage": "https://github.com/prateekbh/preact-material-components#readme",
    "description": "preact wrapper for \"Material Components for the web\"",
    "categories": [
      "أطر تصميم الواجهات الدقيقة والمصغرة (Micro-UI & Embedded Interfaces)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "print.js",
    "name": "Print.js",
    "npmName": "print.js",
    "version": "1.0.18",
    "license": "MIT",
    "source": "git+https://github.com/crabbly/Print.js.git",
    "homepage": "http://printjs.crabbly.com",
    "description": "A tiny javascript library to help printing from the web.",
    "categories": [
      "تحسين وتنسيق طباعة الصفحات وتحويلها لـ PDF (Print Style & Paged Media)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "prosemirror",
    "name": "ProseMirror",
    "npmName": "prosemirror",
    "version": "0.11.1",
    "license": "MIT",
    "source": "https://www.npmjs.com/package/prosemirror",
    "description": "The old, deprecated, monolithic prosemirror package",
    "categories": [
      "3. محريرات وتنسيق النصوص والمستندات (Text Editors & Document Formatting)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "r3f-config",
    "name": "React Three Fiber (R3F)",
    "npmName": "r3f-config",
    "version": "1.0.0",
    "license": "MIT",
    "source": "https://github.com/kegi/r3f-config.git",
    "description": "A sandbox config ui tool like dat.GUI for React Three Fiber",
    "categories": [
      "أنظمة ومؤثرات الواقع الممتد والافتراضي (WebXR, AR & VR)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "rainbow.js",
    "name": "Rainbow.js",
    "npmName": "rainbow.js",
    "version": "0.2.1",
    "license": "MIT",
    "source": "https://github.com/jiin/Rainbow.git",
    "description": "library for converting in most famous colors schema",
    "categories": [
      "12. تزيين وتنسيق أكواد البرمجة (Code Highlighting & Syntax Beautifiers)",
      "أدوات معالجة النصوص البرمجية وإبرازها (Code Syntax Highlighting & Formatting)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "react-ace",
    "name": "Ace Editor",
    "npmName": "react-ace",
    "version": "15.0.0",
    "license": "MIT",
    "source": "git+ssh://git@github.com/securingsincity/react-ace.git",
    "homepage": "https://github.com/securingsincity/react-ace#readme",
    "description": "A react component for Ace Editor",
    "categories": [
      "3. محريرات وتنسيق النصوص والمستندات (Text Editors & Document Formatting)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "react-analytics-charts",
    "name": "Google Charts API",
    "npmName": "react-analytics-charts",
    "version": "1.2.14",
    "license": "MIT",
    "source": "git+https://github.com/justinmahar/react-analytics-charts.git",
    "homepage": "https://justinmahar.github.io/react-analytics-charts/",
    "description": "[⛔️ DEPRECATED] React components to easily embed Google Analytics charts on your React site. Uses the Google Analytics Embed API.",
    "categories": [
      "5. الرسوم والمخططات البيانية (Charts & Data Visualization)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "react-animejs-wrapper",
    "name": "Anime.js",
    "npmName": "react-animejs-wrapper",
    "version": "1.0.35",
    "license": "MIT",
    "source": "git+https://github.com/DanielJDupont/react-animejs-wrapper.git",
    "homepage": "https://reactanimejswrapper.com",
    "description": "A React wrapper for the Anime.js animation library. Allows for the quick and easy creation of powerful animations using React's JSX tags.",
    "categories": [
      "10. التحريك والتأثيرات البصرية (Animations & Visual Effects)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "react-bootstrap",
    "name": "Bootstrap / React Bootstrap",
    "npmName": "react-bootstrap",
    "version": "2.10.10",
    "license": "MIT",
    "source": "git+https://github.com/react-bootstrap/react-bootstrap.git",
    "homepage": "https://react-bootstrap.github.io/",
    "description": "Bootstrap 5 components built with React",
    "categories": [
      "1. أنظمة وتصميم واجهات المستخدم (UI Design Systems & Component Libraries)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "react-colorscales",
    "name": "Chroma.js",
    "npmName": "react-colorscales",
    "version": "0.7.3",
    "license": "MIT",
    "source": "git+https://github.com/plotly/react-colorscales.git",
    "homepage": "https://github.com/plotly/react-colorscales#readme",
    "description": "A React component for picking colorscales based on Chroma.js",
    "categories": [
      "7. ألوان وسلاسل التدرجات والتصميم البصري (Color Systems & Palette Generators)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "react-complex-tree",
    "name": "React-complex-tree",
    "npmName": "react-complex-tree",
    "version": "2.6.3",
    "license": "MIT",
    "source": "git+ssh://git@github.com/lukasbach/react-complex-tree.git",
    "homepage": "https://rct.lukasbach.com/",
    "description": "Unopinionated Accessible Tree Component with Multi-Select and Drag-And-Drop",
    "categories": [
      "10. أدوات بناء المخططات الهيكلية والأشجار (Tree Views & Organizational Charts)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "react-content-loader",
    "name": "Content Loader (SVG Skeleton)",
    "npmName": "react-content-loader",
    "version": "7.1.2",
    "license": "MIT",
    "source": "git+https://github.com/danilowoz/react-content-loader.git",
    "homepage": "https://github.com/danilowoz/react-content-loader",
    "description": "SVG-Powered component to easily create placeholder loadings (like Facebook cards loading)",
    "categories": [
      "11. مكتبات إتاحة الاستخدام والتمويه التكيفي (Accessibility & Skeleton Loaders)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "react-curtains",
    "name": "Curtains.js",
    "npmName": "react-curtains",
    "version": "1.0.10",
    "license": "MIT",
    "source": "git+https://github.com/martinlaxenaire/react-curtains.git",
    "homepage": "https://github.com/martinlaxenaire/react-curtains",
    "description": "react-curtains is an attempt at converting curtains.js WebGL classes into reusable React components.",
    "categories": [
      "8. مكتبات البناء ثنائي وثلاثي الأبعاد (WebGL, Canvas & Shader Wrappers)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "react-d3-tree",
    "name": "React-d3-tree",
    "npmName": "react-d3-tree",
    "version": "3.6.6",
    "license": "MIT",
    "source": "git+https://github.com/bkrem/react-d3-tree.git",
    "homepage": "https://github.com/bkrem/react-d3-tree",
    "description": "React component to create interactive D3 tree hierarchies",
    "categories": [
      "8. تنسيق الرسوم الشجرية والتنظيم الهيكلي (Tree Diagrams & Hierarchy Viz)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "react-flow-renderer",
    "name": "React Flow",
    "npmName": "react-flow-renderer",
    "version": "10.3.17",
    "license": "MIT",
    "source": "git+https://github.com/wbkd/react-flow.git",
    "homepage": "https://github.com/wbkd/react-flow#readme",
    "description": "![readme-header-dark](https://user-images.githubusercontent.com/3797215/156384064-08a889d6-73c0-4cbf-8ff3-28dc601d1f5f.svg#gh-dark-mode-only) ![readme-header](https://user-images.githubusercontent.com/3797215/156259138-fb9f59f8-52f2-474a-b78c-6570867e4ead",
    "categories": [
      "6. الأشكال الهندسية والمخططات التوضيحية (Diagrams, Flowcharts & Geometry)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "react-granim-canvas",
    "name": "Granim.js",
    "npmName": "react-granim-canvas",
    "version": "1.0.2",
    "license": "ISC",
    "source": "git+https://github.com/tmporter/react-granim-canvas.git",
    "homepage": "https://github.com/tmporter/react-granim-canvas#readme",
    "description": "A react component wrapped around the Granim.js library",
    "categories": [
      "1. مكتبات أنظمة الجسيمات والخلفيات التفاعلية (Particle & Background FX)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "react-hook-form",
    "name": "React Hook Form",
    "npmName": "react-hook-form",
    "version": "7.85.0",
    "license": "MIT",
    "source": "git+https://github.com/react-hook-form/react-hook-form.git",
    "homepage": "https://react-hook-form.com",
    "description": "Performant, flexible and extensible forms library for React Hooks",
    "categories": [
      "2. إدارة وتنسيق النماذج المدخلة وتأكيدها بصرياً (Form Styling & UX Enhancements)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "react-joyride",
    "name": "React Joyride",
    "npmName": "react-joyride",
    "version": "3.2.0",
    "license": "MIT",
    "source": "git+https://github.com/gilbarbara/react-joyride.git",
    "homepage": "https://react-joyride.com/",
    "description": "Create guided tours for your apps",
    "categories": [
      "5. تصميم أدلة الاستخدام والجولات التعريفية (Onboarding, Tours & Product Walkthroughs)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "react-konva-image-editor",
    "name": "Konva.js / React-Konva",
    "npmName": "react-konva-image-editor",
    "version": "0.0.8",
    "license": "MIT",
    "source": "git+https://github.com/wormwlrm/react-konva-image-editor.git",
    "homepage": "https://github.com/wormwlrm/react-konva-image-editor#readme",
    "description": "🖼 HTML5 Canvas API Image Editor based on React.js & Konva.js",
    "categories": [
      "6. الأشكال الهندسية والمخططات التوضيحية (Diagrams, Flowcharts & Geometry)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "react-lineicons",
    "name": "Lineicons",
    "npmName": "react-lineicons",
    "version": "3.0.0",
    "license": "MIT",
    "source": "git+https://github.com/anubhavsrivastava/react-lineicons.git",
    "homepage": "https://github.com/anubhavsrivastava/react-lineicons#readme",
    "description": "React component for lineicons",
    "categories": [
      "9. الأيقونات والرموز (Icons & Vector Symbols)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "react-loading-skeleton",
    "name": "React-Loading-Skeleton",
    "npmName": "react-loading-skeleton",
    "version": "3.5.0",
    "license": "MIT",
    "source": "git+https://github.com/dvtng/react-loading-skeleton.git",
    "homepage": "https://github.com/dvtng/react-loading-skeleton#readme",
    "description": "Make beautiful, animated loading skeletons that automatically adapt to your app.",
    "categories": [
      "11. مكتبات إتاحة الاستخدام والتمويه التكيفي (Accessibility & Skeleton Loaders)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "react-map-gl",
    "name": "Mapbox GL JS",
    "npmName": "react-map-gl",
    "version": "8.1.2",
    "license": "MIT",
    "source": "https://github.com/visgl/react-map-gl.git",
    "description": "React components for MapLibre GL JS and Mapbox GL JS",
    "categories": [
      "9. التعيين والتوجيه وتصميم الخرائط الجغرافية (Mapping & Geospatial Viz)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "react-mindmap",
    "name": "React-Mindmap",
    "npmName": "react-mindmap",
    "version": "2.1.6",
    "license": "MIT",
    "source": "git+https://github.com/learn-anything/react-mindmap.git",
    "homepage": "https://github.com/learn-anything/react-mindmap#readme",
    "description": "React component for rendering mind maps",
    "categories": [
      "7. الخرائط الذهنية والشبكات المفاهيمية (Mind Maps & Knowledge Graphs)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "react-native-choices",
    "name": "Choices-native",
    "npmName": "react-native-choices",
    "version": "1.0.0",
    "license": "MIT",
    "source": "git+https://github.com/shahen94/react-native-choices.git",
    "homepage": "https://github.com/shahen94/react-native-choices#readme",
    "description": "Simple <Choices /> component for react-native",
    "categories": [
      "2. إدارة وتنسيق النماذج المدخلة وتأكيدها بصرياً (Form Styling & UX Enhancements)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "react-native-twopaneview",
    "name": "Dual-screen-layout",
    "npmName": "react-native-twopaneview",
    "version": "0.1.0",
    "license": "MIT",
    "source": "git+https://github.com/microsoft/react-native-dualscreen.git",
    "homepage": "https://github.com/microsoft/react-native-dualscreen#readme",
    "description": "react-native layout control for dual screen devices (Duo)",
    "categories": [
      "11. مكتبات التصميم التكيّفي مع الشاشات اللوحية والطيّية (Foldable & Dual-Screen Layouts)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "react-pdf",
    "name": "React-PDF",
    "npmName": "react-pdf",
    "version": "10.4.1",
    "license": "MIT",
    "source": "git+https://github.com/wojtekmaj/react-pdf.git",
    "description": "Display PDFs in your React app as easily as if they were images.",
    "categories": [
      "3. محريرات وتنسيق النصوص والمستندات (Text Editors & Document Formatting)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "react-quick-pinch-zoom",
    "name": "Quick-pinch-zoom",
    "npmName": "react-quick-pinch-zoom",
    "version": "5.1.1",
    "license": "MIT",
    "source": "git+https://github.com/retyui/react-quick-pinch-zoom.git",
    "homepage": "https://github.com/retyui/react-quick-pinch-zoom#readme",
    "description": "A react component that providing multi-touch gestures for zooming and dragging on any DOM element.",
    "categories": [
      "5. محاكاة أدوات التكبير والتعديل الجغرافي والمجاري البصرية (Pan, Zoom & Viewport Tools)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "react-signature-canvas",
    "name": "Signature Pad",
    "npmName": "react-signature-canvas",
    "version": "1.1.0-alpha.2",
    "license": "Apache-2.0",
    "source": "git+https://github.com/agilgur5/react-signature-canvas.git",
    "homepage": "https://github.com/agilgur5/react-signature-canvas",
    "description": "A React wrapper component around signature_pad. 100% test coverage, types, examples, & more. Unopinionated and heavily updated fork of react-signature-pad",
    "categories": [
      "5. لوحات الرسم والتوقيع والتفاعل باللمس (Canvas, Signature & Gesture)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "react-skeleton-css",
    "name": "Skeleton Framework",
    "npmName": "react-skeleton-css",
    "version": "1.1.0",
    "license": "MIT",
    "source": "git+https://github.com/crobinson42/react-skeleton-css.git",
    "homepage": "http://react-skeleton-css.github.io",
    "description": "Skeleton CSS Framework built in React",
    "categories": [
      "11. مكتبات إتاحة الاستخدام والتمويه التكيفي (Accessibility & Skeleton Loaders)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "react-slick",
    "name": "Slick Carousel",
    "npmName": "react-slick",
    "version": "0.31.0",
    "license": "MIT",
    "source": "git+https://github.com/akiran/react-slick.git",
    "homepage": "https://react-slick.neostack.com",
    "description": " React port of slick carousel",
    "categories": [
      "5. لوحات الرسم والتوقيع والتفاعل باللمس (Canvas, Signature & Gesture)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "react-styleguidist",
    "name": "Styleguidist",
    "npmName": "react-styleguidist",
    "version": "13.1.4",
    "license": "MIT",
    "source": "git+https://github.com/styleguidist/react-styleguidist.git",
    "homepage": "https://github.com/styleguidist/react-styleguidist",
    "description": "React components style guide generator",
    "categories": [
      "3. المعاينة المباشرة وتجربة المكونات بصرياً (UI Component Playground & Documentation)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "react-toastify",
    "name": "React-Toastify",
    "npmName": "react-toastify",
    "version": "11.1.0",
    "license": "MIT",
    "source": "git+https://github.com/fkhadra/react-toastify.git",
    "homepage": "https://github.com/fkhadra/react-toastify#readme",
    "description": "React notification made easy",
    "categories": [
      "10. واجهات التنبيه، الإشعارات، والبطاقات العائمة (Toaster, Modal & Popover FX)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "react-vertical-timeline",
    "name": "React-vertical-timeline",
    "npmName": "react-vertical-timeline",
    "version": "0.2.0",
    "license": "MIT",
    "source": "git+https://github.com/yeyus/react-vertical-timeline.git",
    "homepage": "https://yeyus.github.io/react-vertical-timeline/",
    "description": "vertical timeline bar with bookmarks support",
    "categories": [
      "6. الجداول الزمنية وعرض السلاسل التاريخية (Timelines & Chronological Viz)",
      "الجداول الزمنيّة والسلاسل التاريخية التفاعلية (Timelines & Chronology)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "rebass",
    "name": "Rebass",
    "npmName": "rebass",
    "version": "4.0.7",
    "license": "MIT",
    "source": "git+https://github.com/rebassjs/rebass.git",
    "homepage": "https://github.com/rebassjs/rebass#readme",
    "description": "React primitive UI components built with Styled System",
    "categories": [
      "1. أنظمة وتصميم واجهات المستخدم (UI Design Systems & Component Libraries)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "recharts",
    "name": "Recharts",
    "npmName": "recharts",
    "version": "3.10.1",
    "license": "MIT",
    "source": "git+https://github.com/recharts/recharts.git",
    "homepage": "https://github.com/recharts/recharts",
    "description": "React charts",
    "categories": [
      "5. الرسوم والمخططات البيانية (Charts & Data Visualization)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "recordrtc",
    "name": "RecordRTC",
    "npmName": "recordrtc",
    "version": "5.6.2",
    "license": "MIT",
    "source": "git+https://github.com/muaz-khan/RecordRTC.git",
    "homepage": "http://RecordRTC.org/",
    "description": "RecordRTC is a server-less (entire client-side) JavaScript library that can be used to record WebRTC audio/video media streams. It supports cross-browser audio/video recording.",
    "categories": [
      "مكتبات معالجة وتسجيل الوسائط المباشرة (Webcam, Screen Capture & Canvas Stream)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "regl",
    "name": "Regl",
    "npmName": "regl",
    "version": "2.1.1",
    "license": "MIT",
    "source": "git+https://github.com/regl-project/regl.git",
    "homepage": "https://regl-project.github.io/regl",
    "description": "regl is a fast functional WebGL framework.",
    "categories": [
      "8. مكتبات البناء ثنائي وثلاثي الأبعاد (WebGL, Canvas & Shader Wrappers)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "remark-rehype",
    "name": "Remark / Rehype",
    "npmName": "remark-rehype",
    "version": "11.1.2",
    "license": "MIT",
    "source": "git+https://github.com/remarkjs/remark-rehype.git",
    "homepage": "https://github.com/remarkjs/remark-rehype#readme",
    "description": "remark plugin that turns markdown into HTML to support rehype",
    "categories": [
      "3. محريرات وتنسيق النصوص والمستندات (Text Editors & Document Formatting)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "responsivevoice",
    "name": "ResponsiveVoice.js",
    "npmName": "responsivevoice",
    "version": "0.4.1",
    "license": "MIT",
    "source": "git+https://github.com/demartsc/responsivevoice.git",
    "homepage": "https://github.com/demartsc/responsivevoice#readme",
    "description": "npm wrapper for responsivevoice.js obtained from dataplusscience.com",
    "categories": [
      "التفاعل الصوتي والتنقل الصوتي في الواجهات (Voice UI & Speech Visualization)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "retro-ui",
    "name": "Retro-UI",
    "npmName": "retro-ui",
    "version": "0.0.17",
    "license": "MIT",
    "source": "git+https://github.com/sombreroEnPuntas/retro-ui.git",
    "homepage": "https://sombreroenpuntas.github.io/retro-ui/",
    "description": "NES-style (8bit-like) react & styled-components UI",
    "categories": [
      "15. تصميم الواجهات الشبيهة بأنظمة التشغيل (OS GUI & Retro Shells)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "reveal.js",
    "name": "Reveal.js",
    "npmName": "reveal.js",
    "version": "6.0.1",
    "license": "MIT",
    "source": "git://github.com/hakimel/reveal.js.git",
    "homepage": "https://revealjs.com",
    "description": "The HTML Presentation Framework",
    "categories": [
      "13. تنسيق العروض التقديمية التفاعلية على الويب (Web Slides & Interactive Presentations)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "scribe-cli",
    "name": "Paged.js",
    "npmName": "scribe-cli",
    "version": "2.0.5",
    "license": "MIT",
    "source": "git+https://github.com/ink-elements/scribe-cli.git",
    "homepage": "https://github.com/ink-elements/scribe-cli#readme",
    "description": "Command line tool to manage Paged.js projects",
    "categories": [
      "تحسين وتنسيق طباعة الصفحات وتحويلها لـ PDF (Print Style & Paged Media)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "scrollbooster",
    "name": "ScrollBooster",
    "npmName": "scrollbooster",
    "version": "3.0.2",
    "license": "MIT",
    "source": "git+https://github.com/ilyashubin/scrollbooster.git",
    "homepage": "https://ilyashubin.github.io/scrollbooster",
    "description": "Enjoyable content drag-to-scroll library",
    "categories": [
      "2. مؤثرات التمرير وقصص الويب التفاعلية (Scroll & Scrollytelling)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "select2",
    "name": "Select2",
    "npmName": "select2",
    "version": "4.1.0",
    "license": "MIT",
    "source": "git://github.com/select2/select2.git",
    "homepage": "https://select2.org",
    "description": "Select2 is a jQuery based replacement for select boxes. It supports searching, remote data sets, and infinite scrolling of results.",
    "categories": [
      "2. إدارة وتنسيق النماذج المدخلة وتأكيدها بصرياً (Form Styling & UX Enhancements)",
      "7. تحسين وتجميع استمارة الإدخال (Form Beautifiers & Smart Control UI)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "semo-plugin-markmap",
    "name": "Markmap (Markdown to Mindmap)",
    "npmName": "semo-plugin-markmap",
    "version": "2.0.2",
    "license": "MIT",
    "source": "git+https://github.com/semojs/semo-plugin-markmap.git",
    "homepage": "https://github.com/semojs/semo-plugin-markmap#readme",
    "description": "A Semo plugin to convert markdown to mindmap, based on markmap.",
    "categories": [
      "7. الخرائط الذهنية والشبكات المفاهيمية (Mind Maps & Knowledge Graphs)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "simple.css",
    "name": "Simple.css",
    "npmName": "simple.css",
    "version": "0.1.3",
    "license": "MIT",
    "source": "git+https://github.com/lofreer/simple-css.git",
    "homepage": "https://github.com/lofreer/simple-css#readme",
    "description": "Simple.css: a lightweight, responsive and modern CSS framework.",
    "categories": [
      "2. أطر التنسيق والتخطيط CSS (CSS Frameworks & Methodologies)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "simpro",
    "name": "CamanJS",
    "npmName": "simpro",
    "version": "1.1.0",
    "license": "ISC",
    "source": "git+https://github.com/azeez1776/SimpleImageProcessing.git",
    "homepage": "https://github.com/azeez1776/SimpleImageProcessing#readme",
    "description": "Simple Image Processing Library, built on top of CamanJS, made it simpler",
    "categories": [
      "4. معالجة الصور والتصفية البصرية (Image Processing & Filters)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "slate-md-decorations",
    "name": "Slate.js",
    "npmName": "slate-md-decorations",
    "version": "1.0.1",
    "license": "MIT",
    "source": "git+https://github.com/thetutlage/slate-md-decorations.git",
    "homepage": "https://github.com/thetutlage/slate-md-decorations#readme",
    "description": "Parses strings as markdown and returns decorations for inline styles",
    "categories": [
      "3. محريرات وتنسيق النصوص والمستندات (Text Editors & Document Formatting)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "smartypants",
    "name": "SmartyPants",
    "npmName": "smartypants",
    "version": "0.2.2",
    "license": "BSD-3-Clause",
    "source": "git+ssh://git@github.com/othree/smartypants.js.git",
    "homepage": "https://github.com/othree/smartypants.js#readme",
    "description": "Easily translates plain ASCII punctuation characters into \"smart\" typographic punctuation HTML entities.",
    "categories": [
      "12. تحسين النصوص والمسافات والحواف (Typography & Layout Enhancers)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "smooth-shadows",
    "name": "Smooth-shadows",
    "npmName": "smooth-shadows",
    "version": "0.1.0",
    "license": "MIT",
    "source": "git+https://github.com/p-chan/smooth-shadows.git",
    "homepage": "https://github.com/p-chan/smooth-shadows#readme",
    "description": "A library to generate smooth shadows with multiple layers",
    "categories": [
      "9. تأثيرات زجاجية، نيومورفيزم، وظلال متقدمة (Glassmorphism, Neumorphism & Shadow FX)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "solid-auto-animate",
    "name": "AutoAnimate (FormKit)",
    "npmName": "solid-auto-animate",
    "version": "0.3.0",
    "license": "MIT",
    "source": "git+https://github.com/lxsmnsyc/solid-auto-animate.git",
    "homepage": "https://github.com/lxsmnsyc/solid-auto-animate/tree/main/packages/solid-auto-animate",
    "description": "SolidJS bindings for FormKit's AutoAnimate",
    "categories": [
      "10. التحريك والتأثيرات البصرية (Animations & Visual Effects)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "sonifier",
    "name": "Sonifier",
    "npmName": "sonifier",
    "version": "2.0.0",
    "license": "MIT",
    "source": "git+https://github.com/athersharif/sonifier.git",
    "homepage": "https://github.com/athersharif/sonifier#readme",
    "description": "JavaScript library to create sonified response from data",
    "categories": [
      "4. مؤثرات الصوت التفاعلية للواجهات (UI Audio FX & Sound Design)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "sound-box",
    "name": "Sound-effects-library (JS)",
    "npmName": "sound-box",
    "version": "1.0.0",
    "license": "MIT",
    "source": "git+https://github.com/sbrl/soundbox.git",
    "homepage": "https://github.com/sbrl/soundbox#readme",
    "description": "A super simple JS library for playing sound effects and other audio. Now with button mashing support!",
    "categories": [
      "4. مؤثرات الصوت التفاعلية للواجهات (UI Audio FX & Sound Design)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "spectacle-react-scripts",
    "name": "Spectacle (React)",
    "npmName": "spectacle-react-scripts",
    "version": "0.9.0-srs.2",
    "license": "BSD-3-Clause",
    "source": "git+https://github.com/igetgames/spectacle-react-scripts.git",
    "homepage": "https://github.com/igetgames/spectacle-react-scripts#readme",
    "description": "Configuration and scripts for a Create React App template using Spectacle.",
    "categories": [
      "13. تنسيق العروض التقديمية التفاعلية على الويب (Web Slides & Interactive Presentations)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "speech-recognition-aws-polyfill",
    "name": "SpeechRecognition API Polyfill",
    "npmName": "speech-recognition-aws-polyfill",
    "version": "0.3.0",
    "license": "MIT",
    "source": "git+https://github.com/ceuk/speech-recognition-aws-polyfill.git",
    "homepage": "https://github.com/ceuk/speech-recognition-aws-polyfill#readme",
    "description": "Polyfill for the SpeechRecognition browser API using AWS Transcribe",
    "categories": [
      "التفاعل الصوتي والتنقل الصوتي في الواجهات (Voice UI & Speech Visualization)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "split.js",
    "name": "Split.js",
    "npmName": "split.js",
    "version": "1.6.5",
    "license": "MIT",
    "source": "git+https://github.com/nathancahill/split.git",
    "homepage": "https://split.js.org/",
    "description": "2kb unopinionated utility for resizeable split views",
    "categories": [
      "11. تقسيم الشاشات وتصاميم النوافذ القابلة للتكبير (Split Panes, Docking & Windows UI)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "spring-easing",
    "name": "Motion One",
    "npmName": "spring-easing",
    "version": "2.3.3",
    "license": "MIT",
    "source": "git+https://github.com/okikio/spring-easing.git",
    "homepage": "https://spring-easing.okikio.dev",
    "description": "Quick and easy spring animations. Works with other animation libraries (animejs, framer motion, motion one, @okikio/animate, etc...) or the Web Animation API (WAAPI).",
    "categories": [
      "10. التحريك والتأثيرات البصرية (Animations & Visual Effects)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "storybook",
    "name": "Storybook",
    "npmName": "storybook",
    "version": "10.5.8",
    "license": "MIT",
    "source": "https://github.com/storybookjs/storybook.git",
    "homepage": "https://storybook.js.org",
    "description": "Storybook: Develop, document, and test UI components in isolation",
    "categories": [
      "3. المعاينة المباشرة وتجربة المكونات بصرياً (UI Component Playground & Documentation)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "styled-components",
    "name": "Styled Components",
    "npmName": "styled-components",
    "version": "6.5.2",
    "license": "MIT",
    "source": "git+https://github.com/styled-components/styled-components.git",
    "homepage": "https://styled-components.com",
    "description": "Fast, expressive styling for React.",
    "categories": [
      "2. أطر التنسيق والتخطيط CSS (CSS Frameworks & Methodologies)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "styled-wind",
    "name": "Wind-js",
    "npmName": "styled-wind",
    "version": "0.0.0-beta.14",
    "license": "MIT",
    "source": "git+https://github.com/product-ride/styled-tailwind.git",
    "homepage": "https://github.com/product-ride/styled-tailwind#readme",
    "description": "Use tailwind like classess in styled components",
    "categories": [
      "محاكاة الطقس، السوائل، والظواهر الطبيعية (Nature, Weather & Physics Simulation)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "summernote",
    "name": "Summernote",
    "npmName": "summernote",
    "version": "0.9.1",
    "license": "MIT",
    "source": "https://github.com/summernote/summernote.git",
    "description": "Super simple WYSIWYG editor",
    "categories": [
      "3. محريرات وتنسيق النصوص والمستندات (Text Editors & Document Formatting)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "svelte-frappe-charts",
    "name": "Frappe Charts",
    "npmName": "svelte-frappe-charts",
    "version": "2.0.0",
    "license": "MIT",
    "source": "git+https://github.com/himynameisdave/svelte-frappe-charts.git",
    "homepage": "https://github.com/himynameisdave/svelte-frappe-charts#readme",
    "description": "📈 Svelte bindings for frappe-charts",
    "categories": [
      "5. الرسوم والمخططات البيانية (Charts & Data Visualization)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "svg-morph",
    "name": "SVG-morph",
    "npmName": "svg-morph",
    "version": "0.0.0",
    "license": "MIT",
    "source": "git://github.com/substack/svg-morph.git",
    "homepage": "https://github.com/substack/svg-morph",
    "description": "morph animation between two svg path arrays",
    "categories": [
      "3. التحريك البرمجي المتقدم بـ Canvas و SVG (Canvas Mechanics & Vector Animators)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "svg-pan-zoom",
    "name": "Svg-pan-zoom",
    "npmName": "svg-pan-zoom",
    "version": "3.6.2",
    "license": "BSD-2-Clause",
    "source": "git+https://github.com/bumbu/svg-pan-zoom.git",
    "homepage": "https://github.com/bumbu/svg-pan-zoom#readme",
    "description": "JavaScript library for panning and zooming an SVG image from the mouse, touches and programmatically.",
    "categories": [
      "14. مكتبات التحكم بالأشكال المتجهة والـ SVG (SVG Manipulation)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "svg.js",
    "name": "SVG.js",
    "npmName": "svg.js",
    "version": "2.7.1",
    "license": "MIT",
    "source": "git+https://github.com/svgdotjs/svg.js.git",
    "homepage": "https://svgdotjs.github.io/",
    "description": "A lightweight library for manipulating and animating SVG.",
    "categories": [
      "14. مكتبات التحكم بالأشكال المتجهة والـ SVG (SVG Manipulation)",
      "6. الأشكال الهندسية والمخططات التوضيحية (Diagrams, Flowcharts & Geometry)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "swagger-ui-headless",
    "name": "Headless UI",
    "npmName": "swagger-ui-headless",
    "version": "2.1.4",
    "license": "Apache-2.0",
    "source": "git+https://github.com/swagger-api/swagger-ui.git",
    "homepage": "http://swagger.io",
    "description": "Swagger UI (without navigation header) is a dependency-free collection of HTML, JavaScript, and CSS assets that dynamically generate beautiful documentation from a Swagger-compliant API",
    "categories": [
      "1. أنظمة وتصميم واجهات المستخدم (UI Design Systems & Component Libraries)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "sweetalert2",
    "name": "SweetAlert2",
    "npmName": "sweetalert2",
    "version": "11.26.25",
    "license": "MIT",
    "source": "git+https://github.com/sweetalert2/sweetalert2.git",
    "homepage": "https://sweetalert2.github.io/",
    "description": "A beautiful, responsive, customizable and accessible (WAI-ARIA) replacement for JavaScript's popup boxes, supported fork of sweetalert",
    "categories": [
      "10. واجهات التنبيه، الإشعارات، والبطاقات العائمة (Toaster, Modal & Popover FX)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "swiper.js",
    "name": "Swiper.js",
    "npmName": "swiper.js",
    "version": "1.0.0",
    "license": "MIT",
    "source": "git+https://github.com/plasmashadow/swiper.git",
    "homepage": "https://github.com/plasmashadow/swiper#readme",
    "description": "make a swipable list",
    "categories": [
      "5. لوحات الرسم والتوقيع والتفاعل باللمس (Canvas, Signature & Gesture)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "tabulator",
    "name": "Tabulator",
    "npmName": "tabulator",
    "version": "0.2.40",
    "license": "MIT",
    "source": "git+https://github.com/codenautas/tabulator.git",
    "homepage": "https://github.com/codenautas/tabulator#readme",
    "description": "Put data into tables",
    "categories": [
      "6. تصميم الجداول المتقدمة وإدارة البيانات (Data Grids & Smart Tables)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "tachyons",
    "name": "Tachyons",
    "npmName": "tachyons",
    "version": "4.12.0",
    "license": "MIT",
    "source": "git+https://github.com/tachyons-css/tachyons.git",
    "homepage": "https://github.com/tachyons-css/tachyons#readme",
    "description": "Functional CSS for humans",
    "categories": [
      "2. أطر التنسيق والتخطيط CSS (CSS Frameworks & Methodologies)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "tailwind-vector-effect",
    "name": "Vector-effect",
    "npmName": "tailwind-vector-effect",
    "version": "1.0.2",
    "license": "MIT",
    "source": "git+https://gitlab.com/xevinaly/tailwind-vector-effects.git",
    "homepage": "https://gitlab.com/xevinaly/tailwind-vector-effects#readme",
    "description": "Adds Vector Effects to tailwind for the svg path tag",
    "categories": [
      "14. مكتبات التحكم بالأشكال المتجهة والـ SVG (SVG Manipulation)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "tailwindcss-email-variants",
    "name": "Maizzle (Tailwind for Email)",
    "npmName": "tailwindcss-email-variants",
    "version": "3.0.5",
    "license": "MIT",
    "source": "git+https://github.com/maizzle/tailwindcss-email-variants.git",
    "homepage": "https://github.com/maizzle/tailwindcss-email-variants#readme",
    "description": "Tailwind CSS variants for email client CSS targeting hacks",
    "categories": [
      "أطر تصميم الرسائل والبريد الإلكتروني (HTML Email Frameworks & Formatting)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "tangram",
    "name": "Tangram",
    "npmName": "tangram",
    "version": "0.22.0",
    "license": "MIT",
    "source": "git://github.com/tangrams/tangram.git",
    "homepage": "https://github.com/tangrams/tangram",
    "description": "WebGL Maps for Vector Tiles",
    "categories": [
      "9. التعيين والتوجيه وتصميم الخرائط الجغرافية (Mapping & Geospatial Viz)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "terminal.js",
    "name": "Terminal.js",
    "npmName": "terminal.js",
    "version": "1.0.11",
    "license": "MIT",
    "source": "git+https://github.com/Gottox/terminal.js.git",
    "homepage": "http://github.com/Gottox/terminal.js",
    "description": "terminal emulation library for javascript.",
    "categories": [
      "خطوط وتأثيرات اللمسات الرجعية والتراثية (Retro, Glitch & Cyberpunk FX)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "texme",
    "name": "Texme",
    "npmName": "texme",
    "version": "1.2.2",
    "license": "MIT",
    "source": "git+https://github.com/susam/texme.git",
    "homepage": "https://github.com/susam/texme",
    "description": "Self-rendering Markdown + LaTeX documents",
    "categories": [
      "4. كتابة الرياضيات والرموز العلمية (Math & Science Rendering)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "three-custom-shader-material",
    "name": "Three.js Shader Material",
    "npmName": "three-custom-shader-material",
    "version": "6.4.0",
    "license": "MIT",
    "source": "https://github.com/FarazzShaikh/THREE-CustomShaderMaterial",
    "homepage": "https://github.com/FarazzShaikh/THREE-CustomShaderMaterial",
    "description": "Extend Three.js standard materials with your own shaders!",
    "categories": [
      "10. التحريك والتأثيرات البصرية (Animations & Visual Effects)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "three-rounded-box",
    "name": "Three.js (3D Geometry)",
    "npmName": "three-rounded-box",
    "version": "0.1.1",
    "license": "MIT",
    "source": "git+https://github.com/pailhead/three-rounded-box.git",
    "homepage": "https://github.com/pailhead/three-rounded-box#readme",
    "description": "Box geometry for three.js with filleted edges",
    "categories": [
      "6. الأشكال الهندسية والمخططات التوضيحية (Diagrams, Flowcharts & Geometry)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "tippy.js",
    "name": "Tippy.js",
    "npmName": "tippy.js",
    "version": "6.3.7",
    "license": "MIT",
    "source": "git+https://github.com/atomiks/tippyjs.git",
    "homepage": "https://atomiks.github.io/tippyjs/",
    "description": "The complete tooltip, popover, dropdown, and menu solution for the web",
    "categories": [
      "10. واجهات التنبيه، الإشعارات، والبطاقات العائمة (Toaster, Modal & Popover FX)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "tiptap",
    "name": "TipTap",
    "npmName": "tiptap",
    "version": "1.32.2",
    "license": "MIT",
    "source": "git+https://github.com/ueberdosis/tiptap.git",
    "homepage": "https://tiptap.dev",
    "description": "A rich-text editor for Vue.js",
    "categories": [
      "3. محريرات وتنسيق النصوص والمستندات (Text Editors & Document Formatting)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "tom-select",
    "name": "Tom Select",
    "npmName": "tom-select",
    "version": "2.6.2",
    "license": "Apache-2.0",
    "source": "git+https://github.com/orchidjs/tom-select.git",
    "homepage": "https://tom-select.js.org",
    "description": "Tom Select is a versatile and dynamic <select> UI control. Forked from Selectize.js to provide a framework agnostic autocomplete widget with native-feeling keyboard navigation, it's useful for tagging, contact lists, country selectors, etc.",
    "categories": [
      "2. إدارة وتنسيق النماذج المدخلة وتأكيدها بصرياً (Form Styling & UX Enhancements)",
      "7. تحسين وتجميع استمارة الإدخال (Form Beautifiers & Smart Control UI)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "topbar",
    "name": "Topbar",
    "npmName": "topbar",
    "version": "3.0.1",
    "license": "MIT",
    "source": "git+ssh://git@github.com/buunguyen/topbar.git",
    "homepage": "http://buunguyen.github.io/topbar",
    "description": "Tiny & beautiful site-wide progress indicator",
    "categories": [
      "13. تخصيص شريط التقدم وعرض حالات التحميل (NProgress & Micro Loaders)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "tracking.js",
    "name": "Tracking.js",
    "npmName": "tracking.js",
    "version": "0.1.1",
    "license": "Apache-2.0",
    "source": "https://www.npmjs.com/package/tracking.js",
    "description": "An event tracking javascript library that is built on top of AWS Kinesis Firehouse, AWS API Gateway, AWS ElasticSearch, and S3.",
    "categories": [
      "14. التفاعل مع الإيماءات ثلاثية الأبعاد بدون لمس (Webcam Gestures & Pose Tracking)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "tsparticles",
    "name": "TsParticles",
    "npmName": "tsparticles",
    "version": "4.3.2",
    "license": "MIT",
    "source": "git+https://github.com/tsparticles/tsparticles.git",
    "homepage": "https://particles.js.org",
    "description": "Full-featured tsParticles bundle — create stunning particle, confetti and fireworks animations with all official plugins and presets included. Ready to use components available for React, Vue.js (2.x and 3.x), Angular, Svelte, jQuery, Preact, Riot.js, Inf",
    "categories": [
      "1. مكتبات أنظمة الجسيمات والخلفيات التفاعلية (Particle & Background FX)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "turf-extent",
    "name": "Turf-extent",
    "npmName": "turf-extent",
    "version": "1.0.4",
    "license": "MIT",
    "source": "https://github.com/Turfjs/turf-extent.git",
    "homepage": "https://github.com/Turfjs/turf-extent",
    "description": "turf extent module",
    "categories": [
      "9. التعيين الجغرافي والخرائط المتخصصة (Advanced Geo, Heatmaps & Choropleth)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "two.js",
    "name": "Two.js",
    "npmName": "two.js",
    "version": "0.8.23",
    "license": "MIT",
    "source": "git+https://github.com/jonobr1/two.js.git",
    "homepage": "https://two.js.org/",
    "description": "A renderer agnostic two-dimensional drawing api for the web.",
    "categories": [
      "6. الأشكال الهندسية والمخططات التوضيحية (Diagrams, Flowcharts & Geometry)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "twojs-ts",
    "name": "Two.js Canvas",
    "npmName": "twojs-ts",
    "version": "0.7.0-13",
    "license": "ISC",
    "source": "git+ssh://git@github.com/jonobr1/two.js.git",
    "homepage": "https://github.com/jonobr1/two.js#readme",
    "description": "Two.js is a two-dimensional drawing api geared towards modern web browsers. It is renderer agnostic enabling the same api to draw in multiple contexts: svg, canvas, and webgl.",
    "categories": [
      "8. مكتبات البناء ثنائي وثلاثي الأبعاد (WebGL, Canvas & Shader Wrappers)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "typedoc-plugin-mermaid",
    "name": "Mermaid.js",
    "npmName": "typedoc-plugin-mermaid",
    "version": "1.12.0",
    "license": "MIT",
    "source": "git+https://github.com/kamiazya/typedoc-plugin-mermaid.git",
    "homepage": "https://kamiazya.github.io/typedoc-plugin-mermaid/",
    "description": "A plugin for TypeDoc that generates graphs for mermaid.js diagrams by using @mermaid annotation.",
    "categories": [
      "6. الأشكال الهندسية والمخططات التوضيحية (Diagrams, Flowcharts & Geometry)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "typing-effect-reactjs",
    "name": "Typed.js (Typing effect)",
    "npmName": "typing-effect-reactjs",
    "version": "1.4.1",
    "license": "MIT",
    "source": "git+https://github.com/Sid200026/typing-effect.git",
    "homepage": "https://github.com/Sid200026/typing-effect#readme",
    "description": "React UI component to render aesthetic yet elegant typing effect",
    "categories": [
      "10. التحريك والتأثيرات البصرية (Animations & Visual Effects)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "unicons",
    "name": "Unicons",
    "npmName": "unicons",
    "version": "0.0.3",
    "license": "Unlicense",
    "source": "git+https://github.com/peerigon/unicons.git",
    "homepage": "https://github.com/peerigon/unicons#readme",
    "description": "Cross-platform unicode icon toolkit",
    "categories": [
      "9. الأيقونات والرموز (Icons & Vector Symbols)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "unocss",
    "name": "UnoCSS",
    "npmName": "unocss",
    "version": "66.7.5",
    "license": "MIT",
    "source": "git+https://github.com/unocss/unocss.git",
    "homepage": "https://unocss.dev",
    "description": "The instant on-demand Atomic CSS engine.",
    "categories": [
      "2. أطر التنسيق والتخطيط CSS (CSS Frameworks & Methodologies)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "use-smartcrop",
    "name": "Smartcrop.js",
    "npmName": "use-smartcrop",
    "version": "1.0.3",
    "license": "MIT",
    "source": "git+https://github.com/useflyyer/use-smartcrop.git",
    "homepage": "https://github.com/useflyyer/use-smartcrop#readme",
    "description": "React hook for smartcrop.js to content aware image cropping with points of interest and facial recognition.",
    "categories": [
      "4. معالجة الصور والتصفية البصرية (Image Processing & Filters)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "use-sound",
    "name": "Use-sound",
    "npmName": "use-sound",
    "version": "5.0.0",
    "license": "MIT",
    "source": "git+https://github.com/joshwcomeau/use-sound.git",
    "homepage": "https://github.com/joshwcomeau/use-sound#readme",
    "description": "### A React Hook for Sound Effects",
    "categories": [
      "4. مؤثرات الصوت التفاعلية للواجهات (UI Audio FX & Sound Design)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "vanilla-masker",
    "name": "Vanilla-Masker",
    "npmName": "vanilla-masker",
    "version": "1.2.0",
    "license": "MIT",
    "source": "git://github.com/fernandofleury/vanilla-masker.git",
    "homepage": "https://fleury.io/vanilla-masker/",
    "description": "VanillaMasker is a pure javascript input mask.",
    "categories": [
      "2. إدارة وتنسيق النماذج المدخلة وتأكيدها بصرياً (Form Styling & UX Enhancements)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "vanilla-slab",
    "name": "SlabText",
    "npmName": "vanilla-slab",
    "version": "0.2.3",
    "license": "ISC",
    "source": "https://www.npmjs.com/package/vanilla-slab",
    "description": "A heavily modified port of the excellent jQuery Slabtext plugin, without jQuery.",
    "categories": [
      "8. الخطوط والطباعة والتنسيق الطباعي (Fonts & Typography Libraries)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "verge-blocks",
    "name": "Verge3D",
    "npmName": "verge-blocks",
    "version": "1.2.8",
    "license": "ISC",
    "source": "git+https://github.com/zjbcool/verge-blocks.git",
    "homepage": "https://github.com/zjbcool/verge-blocks#readme",
    "description": "blocks for verge3d",
    "categories": [
      "1. تصميم ثلاثي الأبعاد وعرض النماذج التفاعلية (3D Model Viewers & Product Design)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "victory-docs",
    "name": "Victory (Formidable)",
    "npmName": "victory-docs",
    "version": "9.3.1",
    "license": "MIT",
    "source": "git+https://github.com/FormidableLabs/victory-docs.git",
    "homepage": "https://github.com/FormidableLabs/victory-docs#readme",
    "description": "Documentation site for Victory by Formidable",
    "categories": [
      "5. الرسوم والمخططات البيانية (Charts & Data Visualization)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "vue-emoji-party",
    "name": "Party.js",
    "npmName": "vue-emoji-party",
    "version": "0.1.2",
    "license": "MIT",
    "source": "https://www.npmjs.com/package/vue-emoji-party",
    "description": "Vue emoji directive with party.js",
    "categories": [
      "10. التحريك والتأثيرات البصرية (Animations & Visual Effects)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "vue-gsap-scrolltrigger-detector",
    "name": "ScrollTrigger (GSAP)",
    "npmName": "vue-gsap-scrolltrigger-detector",
    "version": "1.0.0",
    "license": "MIT",
    "source": "https://www.npmjs.com/package/vue-gsap-scrolltrigger-detector",
    "description": "detect gsap scrolltrigger",
    "categories": [
      "2. مؤثرات التمرير وقصص الويب التفاعلية (Scroll & Scrollytelling)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "vue-matrix-digit-rain",
    "name": "Matrix-rain-canvas",
    "npmName": "vue-matrix-digit-rain",
    "version": "1.0.1",
    "license": "ISC",
    "source": "git+https://github.com/houzisbw/vue-matrix-raindrop.git",
    "homepage": "https://github.com/houzisbw/vue-matrix-raindrop#readme",
    "description": "A Vue component of Matrix's digit raindrop effect",
    "categories": [
      "خطوط وتأثيرات اللمسات الرجعية والتراثية (Retro, Glitch & Cyberpunk FX)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "vue-rellax",
    "name": "Rellax.js",
    "npmName": "vue-rellax",
    "version": "0.2.0",
    "license": "MIT",
    "source": "https://github.com/yutahaga/vue-rellax.git",
    "homepage": "https://github.com/croutonn/vue-rellax",
    "description": "A plugin of Vue that adds a directive for parallax effect by rellax.js.",
    "categories": [
      "2. مؤثرات التمرير وقصص الويب التفاعلية (Scroll & Scrollytelling)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "vue3-leaderline",
    "name": "LeaderLine",
    "npmName": "vue3-leaderline",
    "version": "1.2.11",
    "license": "MIT",
    "source": "git+https://github.com/sango-tech/vue3-leaderline.git",
    "homepage": "https://github.com/sango-tech/vue3-leaderline#readme",
    "description": "Draw a leader line in your web page. Export lib",
    "categories": [
      "6. الأشكال الهندسية والمخططات التوضيحية (Diagrams, Flowcharts & Geometry)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "vuepress-plugin-cursor-effects",
    "name": "Cursor-effects",
    "npmName": "vuepress-plugin-cursor-effects",
    "version": "1.1.6",
    "license": "MIT",
    "source": "git+ssh://git@github.com/moefyit/vuepress-plugin-cursor-effects.git",
    "homepage": "https://github.com/moefyit/vuepress-plugin-cursor-effects#readme",
    "description": "Add a cute click effect to your mouse in your vuepress!",
    "categories": [
      "2. تخصيص مؤشرات الماوس والتأثيرات اللمسية (Custom Cursors & Cursor FX)",
      "محاكاة أجهزة الإدخال والتأثيرات اللمسية (Haptics, Cursor FX & Gamepad)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "vuesax",
    "name": "Vuesax",
    "npmName": "vuesax",
    "version": "3.12.2",
    "license": "MIT",
    "source": "git+https://github.com/lusaxweb/vuesax.git",
    "homepage": "https://lusaxweb.github.io/vuesax/#/",
    "description": "Framework Components for Vue js",
    "categories": [
      "1. أنظمة وتصميم واجهات المستخدم (UI Design Systems & Component Libraries)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "vuetify",
    "name": "Vuetify",
    "npmName": "vuetify",
    "version": "4.1.9",
    "license": "MIT",
    "source": "git+https://github.com/vuetifyjs/vuetify.git",
    "homepage": "https://vuetifyjs.com",
    "description": "Vue Material Component Framework",
    "categories": [
      "1. أنظمة وتصميم واجهات المستخدم (UI Design Systems & Component Libraries)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "water-animation-2d",
    "name": "Water-canvas",
    "npmName": "water-animation-2d",
    "version": "0.3.3",
    "license": "Apache-2.0",
    "source": "git+https://github.com/vladisnotlove/water-animation-2d.git",
    "homepage": "https://github.com/vladisnotlove/water-animation-2d#readme",
    "description": "2D animation of water with canvas",
    "categories": [
      "محاكاة الطقس، السوائل، والظواهر الطبيعية (Nature, Weather & Physics Simulation)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "water.css",
    "name": "Water.css",
    "npmName": "water.css",
    "version": "2.1.1",
    "license": "MIT",
    "source": "git+https://github.com/kognise/water.css.git",
    "homepage": "https://github.com/kognise/water.css",
    "description": "A drop-in collection of CSS styles to make simple websites just a little nicer",
    "categories": [
      "2. أطر التنسيق والتخطيط CSS (CSS Frameworks & Methodologies)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "wavesurfer.js",
    "name": "Wavesurfer.js",
    "npmName": "wavesurfer.js",
    "version": "7.12.11",
    "license": "BSD-3-Clause",
    "source": "git+ssh://git@github.com/katspaugh/wavesurfer.js.git",
    "homepage": "https://wavesurfer.xyz",
    "description": "Audio waveform player",
    "categories": [
      "15. أدوات الصوت والبصريات التفاعلية (Web Audio Visualization)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "web-audio-ui",
    "name": "Web-Audio-UI",
    "npmName": "web-audio-ui",
    "version": "2.0.1",
    "license": "MIT",
    "source": "git+https://github.com/coleww/web-audio-ui.git",
    "homepage": "https://github.com/coleww/web-audio-ui",
    "description": "Web Audio UI Components",
    "categories": [
      "4. مؤثرات الصوت التفاعلية للواجهات (UI Audio FX & Sound Design)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "webcamjs",
    "name": "WebcamJS",
    "npmName": "webcamjs",
    "version": "1.0.26",
    "license": "MIT",
    "source": "git+https://github.com/jhuckaby/webcamjs.git",
    "homepage": "https://github.com/jhuckaby/webcamjs",
    "description": "HTML5 Webcam Image Capture Library with Flash Fallback",
    "categories": [
      "مكتبات معالجة وتسجيل الوسائط المباشرة (Webcam, Screen Capture & Canvas Stream)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "weft",
    "name": "Google Fonts API",
    "npmName": "weft",
    "version": "1.3.1",
    "license": "MIT",
    "source": "git+https://github.com/oknoorap/weft.git",
    "homepage": "https://github.com/oknoorap/weft#readme",
    "description": "NodeJS API Wrapper for Google Web Fonts",
    "categories": [
      "8. الخطوط والطباعة والتنسيق الطباعي (Fonts & Typography Libraries)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "what-input",
    "name": "What-Input",
    "npmName": "what-input",
    "version": "5.2.12",
    "license": "MIT",
    "source": "git+https://github.com/ten1seven/what-input.git",
    "homepage": "https://github.com/ten1seven/what-input",
    "description": "A global utility for tracking the current input method (mouse, keyboard or touch).",
    "categories": [
      "11. مكتبات إتاحة الاستخدام والتمويه التكيفي (Accessibility & Skeleton Loaders)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "wheelnav",
    "name": "Raphaël.js",
    "npmName": "wheelnav",
    "version": "1.7.1",
    "license": "MIT",
    "source": "https://github.com/softwaretailoring/wheelnav.git",
    "homepage": "http://wheelnavjs.softwaretailoring.net",
    "description": "Animated wheel navigation JavaScript library based on Raphaël.js (SVG/VML). It can be a pie menu (radial menu, circular menu) and many more.",
    "categories": [
      "14. مكتبات التحكم بالأشكال المتجهة والـ SVG (SVG Manipulation)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "widont",
    "name": "Widont",
    "npmName": "widont",
    "version": "0.4.0",
    "license": "MIT",
    "source": "git+https://github.com/mogelbrod/widont.git",
    "homepage": "https://github.com/mogelbrod/widont#readme",
    "description": "Avoids typographical widows in strings by converting the last space/hyphens to be non-breaking",
    "categories": [
      "12. تحسين النصوص والمسافات والحواف (Typography & Layout Enhancers)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "xlsx",
    "name": "SheetJS (xlsx)",
    "npmName": "xlsx",
    "version": "0.18.5",
    "license": "Apache-2.0",
    "source": "git://github.com/SheetJS/sheetjs.git",
    "homepage": "https://sheetjs.com/",
    "description": "SheetJS Spreadsheet data parser and writer",
    "categories": [
      "8. نماذج تحويل الصيغ والمستندات للويب (Web Doc Renderers & Converters)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "zdog",
    "name": "ZDog (Pseudo-3D)",
    "npmName": "zdog",
    "version": "1.1.3",
    "license": "MIT",
    "source": "git+https://github.com/metafizzy/zdog.git",
    "homepage": "https://zzz.dog",
    "description": "Round, flat, designer-friendly pseudo-3D engine",
    "categories": [
      "8. مكتبات البناء ثنائي وثلاثي الأبعاد (WebGL, Canvas & Shader Wrappers)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "zingtouch",
    "name": "ZingTouch",
    "npmName": "zingtouch",
    "version": "1.0.6",
    "license": "MIT",
    "source": "https://www.npmjs.com/package/zingtouch",
    "description": "A modern JavaScript touch gesture library",
    "categories": [
      "5. لوحات الرسم والتوقيع والتفاعل باللمس (Canvas, Signature & Gesture)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "zoom.ts",
    "name": "Zoom.js",
    "npmName": "zoom.ts",
    "version": "8.0.0",
    "license": "ISC",
    "source": "git+https://github.com/michaelbull/zoom.ts.git",
    "homepage": "https://github.com/michaelbull/zoom.ts",
    "description": "A lightweight TypeScript library for image zooming, as seen on Medium.",
    "categories": [
      "5. محاكاة أدوات التكبير والتعديل الجغرافي والمجاري البصرية (Pan, Zoom & Viewport Tools)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  },
  {
    "id": "zxing-js-es6",
    "name": "ZXing JS",
    "npmName": "zxing-js-es6",
    "version": "0.15.3",
    "license": "MIT",
    "source": "git+https://github.com/zxing-js/library.git",
    "homepage": "https://zxing-js.github.io/library/",
    "description": "TypeScript port of ZXing multi-format 1D/2D barcode image processing library.",
    "categories": [
      "مكتبات الباركود ورؤية الكمبيوتر في الويب (Barcode, QR & Web Vision)"
    ],
    "status": "catalog-only",
    "bundled": false,
    "licenseVerifiedBy": "npm-registry-metadata",
    "licenseVerifiedAt": "2026-08-14"
  }
];

export const listMohoCatalog = (query?: string) => {
  if (!query?.trim()) return [...MOHO_FREE_CATALOG];
  const normalized = query.trim().toLowerCase();
  return MOHO_FREE_CATALOG.filter((entry) =>
    [entry.name, entry.npmName, entry.description ?? '', entry.license, ...entry.categories]
      .join(' ')
      .toLowerCase()
      .includes(normalized)
  );
};

export const getMohoCatalogEntry = (npmName: string) =>
  MOHO_FREE_CATALOG.find((entry) => entry.npmName === npmName);

export const getMohoCatalogCount = () => MOHO_FREE_CATALOG.length;
