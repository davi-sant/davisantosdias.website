import { styled } from "../../stitches.config";

export const Nav = styled("nav", {
  variants: {
    variant: {
      navHeader: {
        width: "100%",
        maxWidth: "$4xl",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 20px",
      },
    },
  },
});
