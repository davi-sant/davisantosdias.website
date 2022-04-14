import { styled } from "../../stitches.config";

export const Header = styled("header", {
  display: "flex",

  variants: {
    variant: {
      header: {
        width: "100%",
        height: "100px",
        color: "$color02",
        position: "sticky",
        top: "0",
        backdropFilter: "blur(10px)"
      },
      headerMobile: {
        padding: "0 20px",
      },
    },
  },
});
