import { styled } from "../../stitches.config";

export const Button = styled("button", {
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  variants: {
    variant: {
      toggleButton: {
        width: "30px",
        height: "30px",
        borderRadius: "5px",
        border: "none",
        background: "$color05",
        color: "$color1",
        fontSize: "$2xl",
      },
    },
  },
});
