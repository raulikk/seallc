
import { Flex } from '@chakra-ui/react'
import React from 'react'
import Logo from './Logo'
import NavBar from './NavBar'

const Header = () => {
  return (
    <Flex   
    position='fixed' 
    w="100vw" 
    justifyContent="center" 
   // border="1px solid red" 

  
    >
        <Logo/> 
        <NavBar /> 

    </Flex>
  )
}

export default Header