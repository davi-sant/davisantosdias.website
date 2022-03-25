import React from 'react';

// component of styles
import Header from '../../Design/Containers/Header'
import {motion} from 'framer-motion'
import Abbr from '../../Design/Abbr'
import Text from '../../Design/Paragraph'
import I from '../../Design/Icons'
import Nav from "../../Design/Nav"
// icons
import { BiCoffee } from "react-icons/bi"

const MyHeader = () => {
  return (
    <Header>
      <Nav variant="navHeader">
        <motion.div 
          animate={{rotate: 360}} 
          transition={{duration: 2}}>
          <Text variant="textHeader">
            Front-End Jr 
            <Abbr title="React">
              <I variant="iconCaffe">
                <BiCoffee fontSize={12}/>
              </I>
            </Abbr> 
            Davi
          </Text>
        </motion.div>

      </Nav>
    </Header>
  )
}
export default MyHeader; 
