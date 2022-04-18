import { styled } from "../../stitches.config";

export const Container = styled("div", {
  background: "$bg",

  variants: {
    variant: {
      containerWrapper: {
        display: "flex",
        width: "$full",
        minHeight: "$screenHeight",
        maxWidth: "$4xl",
        margin: "0 auto",
        paddingTop: "20px",
      },
      containerWrapperMobile: {
        height: "$screenHeight",
        color: "$color",
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column",
        padding: "20px 20px",
      },
    },
  },
});
