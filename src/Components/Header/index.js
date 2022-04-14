import React from "react";

// component of styles
import { motion } from "framer-motion";
import { Abbr, Text, Nav, Menu, List, Links, Header } from "../../Design";
import { ToggleTheme } from "../ToggleTheme";
// icons
import { SiFoodpanda } from "react-icons/si";
const MyHeader = () => {
  const getLinks = [
    {
      name: "_about",
      Links: "#",
    },

    {
      name: "_Projetos",
      Links: "#",
    },
  ];
  return (
    <Header
      variant={{
        "@initial": "header",
        "@sm": "headerMobile",
      }}
    >
      <Nav variant="navHeader">
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 2 }}>
          <Abbr title="Logo panda">
            <Text variant="textHeader">
              <SiFoodpanda fontSize={22} />
            </Text>
          </Abbr>
        </motion.div>

        <Menu variant="menuHeader">
          {getLinks.map((getLink, index) => {
            return (
              <List variant="listMenu" key={index}>
                <Links variant="linksMenu" href={getLink.Links}>
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
