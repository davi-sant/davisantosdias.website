import { styled } from "../../stitches.config";

export const Menu = styled("ul", {
  variants: {
    variant: {
      menuHeader: {
        width: "400px",
        display: "flex",
        alignItem: "center",
        justifyContent: "center",
        gap: "15px",
      }
    }
  }
})
