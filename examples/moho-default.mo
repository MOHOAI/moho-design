{
  "moho": "mo",
  "version": "1.0",
  "name": "تصميم موهو",
  "description": "نظام تصميم عربي موحد وقابل لإعادة الاستخدام.",
  "license": "MIT",
  "direction": "rtl",
  "locale": "ar",
  "tokens": {
    "color": {
      "primary": "#6750A4",
      "onPrimary": "#FFFFFF",
      "surface": "#FFFBFE",
      "onSurface": "#1D1B20",
      "outline": "#79747E",
      "success": "#2E7D32",
      "danger": "#BA1A1A"
    },
    "space": {
      "xs": "0.25rem",
      "sm": "0.5rem",
      "md": "1rem",
      "lg": "1.5rem",
      "xl": "2rem"
    },
    "radius": {
      "sm": "0.5rem",
      "md": "0.75rem",
      "lg": "1.75rem",
      "pill": "999px"
    },
    "motion": {
      "durationFast": "120ms",
      "durationStandard": "240ms",
      "easeStandard": "cubic-bezier(0.2, 0, 0, 1)"
    }
  },
  "typography": {
    "families": ["Cairo", "Noto Sans Arabic"],
    "weights": [400, 500, 600, 700],
    "fallback": ["Arial", "sans-serif"],
    "fontSource": "https://fonts.google.com/"
  },
  "components": {
    "button": {
      "description": "زر أساسي قابل للوصول.",
      "parts": ["label", "icon"],
      "tokens": {
        "background": { "$ref": "#/tokens/color/primary" },
        "foreground": { "$ref": "#/tokens/color/onPrimary" },
        "radius": { "$ref": "#/tokens/radius/pill" },
        "paddingInline": { "$ref": "#/tokens/space/md" }
      },
      "states": {
        "focus-visible": {
          "tokens": {
            "outlineColor": { "$ref": "#/tokens/color/outline" },
            "outlineWidth": "2px"
          }
        },
        "disabled": {
          "attributes": { "aria-disabled": true }
        }
      },
      "accessibility": {
        "role": "button",
        "keyboard": ["Enter", "Space"],
        "notes": ["يجب أن يظهر focus-visible بوضوح."]
      }
    },
    "card": {
      "description": "حاوية محتوى مرنة.",
      "tokens": {
        "background": { "$ref": "#/tokens/color/surface" },
        "foreground": { "$ref": "#/tokens/color/onSurface" },
        "radius": { "$ref": "#/tokens/radius/lg" },
        "padding": { "$ref": "#/tokens/space/lg" }
      }
    }
  },
  "integrations": [
    {
      "name": "moho-font",
      "purpose": "كتالوج خطوط عربية مفتوحة وروابط تحميل CSS.",
      "license": "MIT for library code; each font retains its own license.",
      "source": "https://github.com/MOHOAI/moho-font",
      "optional": true,
      "redistribution": "link-only"
    },
    {
      "name": "Material Symbols",
      "purpose": "أيقونات متغيرة اختيارية.",
      "license": "Apache-2.0",
      "source": "https://developers.google.com/fonts/docs/material_symbols",
      "optional": true,
      "redistribution": "allowed"
    }
  ],
  "metadata": {
    "maintainer": "MOHOAI",
    "format": "Moho Design Source"
  }
}
