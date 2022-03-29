import { styled } from "../../stitches.config";

export const Links = styled("a", {
  fontFamily: "$IBM",

  variants: {
    variant: {
      linksMenu: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        height: "30px",
        textDecoration: "none",
        color: "$color03",
        fontSize: "$sm",

        padding: "0 10px",
        borderRadius: "$sm",
        "&:hover": {
          // borderBottom: "1px solid $color03"
          backgroundColor: "$color04",
        },
      },
    },
  },
});
