import { styled } from "../../stitches.config";

export const Header = styled("header", {
  display: "flex",

  variants: {
    variant: {
      header: {
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100px",
        color: "$color02",
        position: "sticky",
        top: "0",
        background: "$bgHeader",

        backdropFilter: "blur( 11px)",
        webkitBackdropFilter: "blur( 11px)",
      },
      headerMobile: { alignItems: "center" },
    },
  },
});
