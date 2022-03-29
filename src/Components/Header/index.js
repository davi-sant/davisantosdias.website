import React from "react";

// component of styles
import { motion } from "framer-motion";
import { Abbr, Text, Nav, Menu, List, Links, Header } from "Design";
import { ToggleTheme } from "Components/ToggleTheme";
// icons

const MyHeader = () => {
  const getLinks = [
    {
      name: "_Sobre",
      Links: "#",
    },

    {
      name: "_Projetos",
      Links: "#",
    },
  ];
  return (
    <Header>
      <Nav variant="navHeader">
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 2 }}>
          <Text variant="textHeader">
            <Abbr title="Logo">⚡</Abbr>
          </Text>
        </motion.div>

        <Menu variant="menuHeader">
          {getLinks.map((getLink, index) => {
            return (
              <List variant="listMenu" key={index}>
                <Links
                  variant="linksMenu"
                  href={getLink.Links}
                  target={getLink.target}
                >
                  {getLink.name}
                </Links>
              </List>
            );
          })}
        </Menu>
        <ToggleTheme />
      </Nav>
    </Header>
  );
};
export default MyHeader;
