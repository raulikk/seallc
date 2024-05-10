
import { Flex, Button } from '@chakra-ui/react'
import React from 'react'
import Logo from './Logo'
import NavBar from './NavBar'

const Header = () => {
  return (
    <Flex   

    position='absolute' 
    w="100%" 
    h= {{
       xl: "inherit", 
       lg: "inherit", 
       md: "inherit", 
      sm:"100vh", 
      base:'100vh'
    }}
    justifyContent="center" 
    zIndex={999}
    overflow="hidden"
   
    bg= { {
      xl: "inherit", 
      lg: "inherit",
      md: "inherit", 
      sm: "rgba(71, 184, 177, 1.0)", 
      base: "rgba(71, 184, 177, 1.0)", 
    }}

    border="1px solid red" 

    >
        <Logo/> 
        <NavBar /> 
        <Button  position="fixed" right="20px" top="20px">X</Button>
    </Flex>
  )
}

export default Header