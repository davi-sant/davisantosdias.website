import React, { useState } from "react";

// components of design
import Container from "../../Design/Containers/Container";
import { darkTheme } from "../../stitches.config";
import MyHeader from '../../Components/Header/index.js'

const Home = () => {
  const [activeTheme, setActiveTheme] = useState(false);
  const toggleTheme = () => {
    setActiveTheme(!activeTheme);
  }
  return (
    <Container className={activeTheme ? darkTheme : ""}>
      <MyHeader />
      <button onClick={toggleTheme}>alterar thema</button>
    </Container>
  );
}
export default Home;
