import {createStitches, createTheme } from "@stitches/react"

export const {styled, css} = createStitches({
  theme: {
    colors: {
      color: '#FAEEE7',
      color01: '#24A19C',
      color02: '#D96098',
      color03: '#142D4C',
    },
    media: {
      bp1: '(min-width: 640px)',
      bp2: '(min-width: 768px)',
      bp3: '(min-width: 1024px)',
    },
    space: {
      1: '5px',
      2: '10px',
      3: '15px',
    },
    fontSizes: {
      "0": 0,
      "1": "12px",
      "2": "15px",
      "3": "18px",
      "4": "21px",
      "5": "25px",
      "6": "30px",
      "7": "36px",
      "8": "43px",
      "9": "52px",
      "10": "62px"
    },
    fontFamily: {
    DM: `DM Sans, sans-serif`,
    IBM: `IBM Plex Mono, monospace`, 
  },
  fontWeights: {
    "1": "100",
    "2": "200",
    "3": "300",
    "4": "400",
    "5": "500",
    "6": "600",
    "7": "700",
    "8": "800",
    "9": "900"
  },
  lineHeighsts: {
    "0": 0,
    "1": "12px",
    "2": "15px",
    "3": "18px",
    "4": "21px",
    "5": "25px",
    "6": "30px",
    "7": "36px",
    "8": "43px",
    "9": "52px",
    "10": "62px"
  },
  letterSpacings: {},
  sizes: {
    "0": 0,
    "1": "480px",
    "2": "768px",
    "3": "1024px",
    "4": " 1200px",
    "5": "1600px"
  },
  borderWidths: {
    "0": 0,
    "1": "1px",
    "2": "2px",
    "3": "3px",
    "4": "4px"
  },
  borderStyles: {},
  radii: {
    "0": 0,
    "1": "2px",
    "2": "4px",
    "3": "8px",
    "4": "2em",
    "round": "50%",
    "pill": "9999px"
  },
  shadows: {
    "1": "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;",
    "2": "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;",
    "3": "rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;",
    "4": "rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;"
  },
  zIndices: {
    "0": 0,
    "1": "100",
    "2": "200",
    "3": "300",
    "4": "400",
    "max": "999"
  },
  transitions: {},
}, 
})

export const darkTheme = createTheme({
  colors: {
    color: '#18181b',
    color01: "#FAEEE7",
    color02: '#24A19C',
    color03: '#D96098',
  },
})



