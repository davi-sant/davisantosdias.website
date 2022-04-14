import { styled } from "../../stitches.config";

export const List = styled("li", {
  listStyle: "none",
  variants: {
    variant: {
      listMenu: {
        height: "$full",
        mx: "20px"
      }
    }
  }
})
