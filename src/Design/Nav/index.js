import { styled } from "../../stitches.config";

const Nav = styled("nav", {

  variants: {
    variant: {
      navHeader: {
        width: "100%",
        maxWidth: "$2",
        height: "100%",
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }
    }
  } 

})
export default Nav
