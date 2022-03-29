import { createStitches } from "@stitches/react"
import darkTheme from "./@stitches/darkTheme.js"
import lightTheme from "./@stitches/lightTheme.js"


export const {
  styled,
  theme,
  css,
  globalCss,
  keyframes,
  getCssText,
  createTheme,
  config
} = createStitches({
   theme: {
    ...lightTheme,
    sizes: {
      none: "none",
      "01": "10px",
      "02": "20px",
      "03": "30px",
      "04": "40px",
      "05": "50px",
      "06": "60px",
      xs: "20rem", //320px
      sm: "24rem", //384px
      md: "28rem", //448px
      lg: "32rem", //512px
      xl: "36rem", //576px
      "2xl": "42rem", //672px
      "3xl": "48rem", //768px
      "4xl": "56rem", //896px
      "5xl": "64rem", //1024px
      "6xl": "72rem", //1152px
      full: "100%",
      screenHeight: "100vh",
    },
    fontFamily: {
      DM: `DM Sans, sans-serif`,
      IBM: `IBM Plex Mono, monospace`,
    },
    fontSizes: {
      xs: "0.75rem", //12px
      sm: "0.875rem", //14px
      base: "1rem", //16px
      lg: "1.125rem", //18px
      xl: "1.25rem", //20px
      "2xl": "1.5rem", //24px
      "3xl": "1.875rem", //30px
      "4xl": "2.25rem", //36px
      "5xl": "3rem", //48px
      "6xl": "4rem", //64px
    },
    fontWeights: {
      thin: 100,
      extralight: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    lineHeights: {
      none: 1,
      tight: 1.25,
      snug: 1.375,
      normal: 1.5,
      relaxed: 1.625,
      loose: 2,
    },
    letterSpacings: {
      tighter: "-0.05em",
      tight: "-0.025em",
      normal: "0em",
      wide: "0.025em",
      wider: "0.05em",
      widest: "0.1em",
    },
    radii: {
      none: "0",
      sm: "0.125rem",
      default: "0.25rem",
      md: "0.375rem",
      lg: "0.5rem",
      xl: "0.75rem",
      "2xl": "1rem",
      "3xl": "1.5rem",
      full: "9999px",
    },
    zIndices: {
      auto: "auto",
      0: "0",
      10: "10",
      20: "20",
      30: "30",
      40: "40",
      50: "50",
    },
    borderWidths: {
      default: "1px",
      0: "0",
      2: "2px",
      4: "4px",
      8: "8px",
    },
    media: {
      sm: "(max-width: 640px)",
      md: "(max-width: 768px)",
      lg: "(max-width: 1024px)",
      xl: "(max-width: 1280px)",
      "2xl": "(max-width: 1536px)",
      motionOK: "(prefers-reduced-motion: no-preference)",
    },
    utils: {
      mt: (value) => ({ marginTop: value }),
      mr: (value) => ({ marginRight: value }),
      mb: (value) => ({ marginBottom: value }),
      ml: (value) => ({ marginLeft: value }),

      mx: (value) => ({
        marginLeft: value,
        marginRight: value,
      }),
      my: (value) => ({
        marginTop: value,
        marginBottom: value,
      }),

      // Abbreviated padding properties
      pt: (value) => ({ paddingTop: value }),
      pr: (value) => ({ paddingRight: value }),
      pb: (value) => ({ paddingBottom: value }),
      pl: (value) => ({ paddingLeft: value }),

      px: (value) => ({
        paddingLeft: value,
        paddingRight: value,
      }),
      py: (value) => ({
        paddingTop: value,
        paddingBottom: value,
      }),
    },
  },
})

export const darkColor = createTheme({
  ...darkTheme
});
