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
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "5px",
        border: "none",
        background: "$color03",
      },
    },
  },
});
