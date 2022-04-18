import { styled } from "../../stitches.config";

export const Figure = styled("figure", {
  variants: {
    figureWrapper: {
      defaultStyles: {
        width: "$full",
        maxWidth: "$sm",
        height: "$sm",
        border: "1px solid red",
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
      },
      responsiveStyles: {
        maxWidth: "$full",
        alignItems: "start",
        justifyContent: "start",
        padding: "0 20px",
        height: "auto",
      },
    },
  },
});
