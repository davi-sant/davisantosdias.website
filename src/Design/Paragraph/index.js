import { styled } from '../../stitches.config';

export const Text = styled("p", {
  fontFamily: "$DM",


  variants: {
    variant: {
      textHeader: {
        fontFamily: "$IBM",
        fontSize: "$sm",
        color: "$color"
      }
    }
  }
})
