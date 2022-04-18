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
        backdropFilter: "blur(10px)",
      },
      headerMobile: { alignItems: "center" },
    },
  },
});
