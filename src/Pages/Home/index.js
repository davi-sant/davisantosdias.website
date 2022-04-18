import React from "react";

// components of design
import { Container } from "../../Design";
import MyHeader from "../../Components/Header";
import { MyWrapper } from "../../Components/Wrapper";

const Home = () => {
  return (
    <Container>
      <MyHeader />
      <MyWrapper />
    </Container>
  );
};
export default Home;
