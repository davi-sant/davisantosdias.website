import React from 'react';

// component of styles
import {motion} from 'framer-motion'
import {Abbr, Text, Nav, Menu, List, Links, Header} from 'Design'
import { ToggleTheme } from 'Components/ToggleTheme/index';
// icons

const MyHeader = () => {
  return (
    <Header>
      <Nav variant="navHeader">
        <motion.div
          animate={{rotate: 360}}
          transition={{duration: 2}}>
          <Text variant="textHeader">
            <Abbr title="Logo">
              ⚡
            </Abbr>
          </Text>
        </motion.div>

        <Menu variant="menuHeader">
          <List>
            <Links variant="linksMenu">Home</Links>
          </List>

          <List>
            <Links variant="linksMenu">Projects</Links>
          </List>

          <List>
            <Links variant="linksMenu">Contact</Links>
          </List>
        </Menu>
        <ToggleTheme />
      </Nav>
    </Header>
  )
}
export default MyHeader;
