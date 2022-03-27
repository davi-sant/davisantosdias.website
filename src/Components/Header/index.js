import React from 'react';

// component of styles
import Header from 'Design/Containers/Header'
import {motion} from 'framer-motion'

import {Abbr, Text, Nav, Menu, List, Links} from 'Design'

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

        <Menu>
          <List>
            <Links variant="linksMenu">test</Links>
          </List>
        </Menu>
      </Nav>
    </Header>
  )
}
export default MyHeader;
