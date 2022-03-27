import { styled } from "@stitches";

export const Nav = styled("nav", {
  width: "100%",
  maxWidth: "$1",

  variants: {
    variant: {
      navHeader: {
        width: "100%",
        maxWidth: "$4xl",
        height: "100%",
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }
    }
  }

})
