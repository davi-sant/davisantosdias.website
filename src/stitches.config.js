import {createStitches, createTheme } from "@stitches/react"

export const {styled, css} = createStitches({
  theme: {
    colors: {
      color: '#FAEEE7',
      color01: '#24A19C',
      color02: '#D96098',
      color03: '#142D4C',
    },
    space: {
      1: '5px',
      2: '10px',
      3: '15px',
    },
    fontSizes: {
      1: '12px',
      2: '13px',
      3: '15px',
    },
    fonts: {
      untitled: 'Untitled Sans, apple-system, sans-serif',
      mono: 'Söhne Mono, menlo, monospace',
    },
    fontWeights: {},
    lineHeights: {},
    letterSpacings: {},
    sizes: {},
    borderWidths: {},
    borderStyles: {},
    radii: {},
    shadows: {},
    zIndices: {},
    transitions: {},
  }, 
})

export const darkTheme = createTheme({
  colors: {
    color: '#142D4C',
    color01: "#FAEEE7",
    color02: '#24A19C',
    color03: '#D96098',
  },
})
