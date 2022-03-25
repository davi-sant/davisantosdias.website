import { styled } from '../../stitches.config';

const Text = styled("p", {
  fontFamily: "$DM",


  variants: {
    variant: {
      textHeader: {
        fontFamily: "$IBM",
        fontSize: "$1",
      }
    }
  }
})
export default Text
