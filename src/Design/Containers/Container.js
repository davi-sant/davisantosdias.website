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
    containerImageWrapper: {
      defaultStyles: {
        borderColor: "$color02",
        padding: "5px",
        borderRadius: "$full",
        width: "$full",
        maxWidth: "$17",
        height: "$17",
        // backgroundColor: "$color02",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid #c3c3c3",
      },
      mobileStyles: {},
    }
  },
});
