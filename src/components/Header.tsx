
import { Flex, Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import Logo from './Logo'
import NavBar from './NavBar'



interface Props {
  visibility: boolean; 
  onLinkClick: () => void; 
}


const Header = ({visibility, onLinkClick}: Props) => {



  return (
    <Flex   

    position='fixed' 
    w="100%" 
    h= {{
       xl: "inherit", 
       lg: "inherit", 
       md: "inherit", 
      sm:"100vh", 
      base:'100vh'
    }}
    justifyContent="center" 
    alignItems='center'
    zIndex={100}
    overflow="hidden"



    transform= {{
      md: "inherit",
      lg:"inherit",
      xl: "inherit",
      sm: visibility ? "translateY(0%)" :  "translateY(-100%)",
      base: visibility ? "translateY(0%)" :  "translateY(-100%)" , 
  
     
    }}


    transition=  "transform 350ms ease-out"

    bg= { {
      xl: "inherit", 
      lg: "inherit",
      md: "inherit", 
      sm: "rgba(71, 184, 177, 1.0)", 
      base: "rgba(71, 184, 177, 1.0)", 
    }}

  

    >
        
        <NavBar  onLinkClick={() => onLinkClick()} /> 
     
    </Flex>
  )
}

export default Header