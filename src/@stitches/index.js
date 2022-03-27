import { createStitches } from "@stitches/react"
import stitchesConfig  from "./stitches.config.js"
import darkTheme from "./darkTheme.js"


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
  ...stitchesConfig,
})

export const darkColor = createTheme({
  ...darkTheme
});
