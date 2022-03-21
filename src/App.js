import React from "react";
import { darkTheme, styled } from "./stitches.config.js"
 const Container = styled("div",{
    width: "100%",
    height: "100vh",

  variants: {
    variant: {
      bg: {
        backgroundColor: "$gray500",
        color: "#fff"
      }
    }
  }
  })
const App = () => {
 
  return (
    <Container variant = {"bg"}>Hallo Word!!</Container>
  );
}
export default App;
