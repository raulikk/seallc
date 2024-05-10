import {  Box, Image, Icon } from '@chakra-ui/react'

import { IoMenu ,IoCloseCircleOutline } from "react-icons/io5";


interface Props{ 
  onButtonClick: () => void; 
  visibility :  boolean; 
}


const MenuButton = ({onButtonClick, visibility}:Props) => {

 //const menuIcon = "X" 
 
  return (
    

    <Icon 
    position='fixed'

    right="30px"
    top="30px"
    color={visibility ? "white" : "#364e6d"}
    display={{
      base:"inherit",
      sm:"inherit",
      md:"none",
      lg:"none"
    }}

    boxSize={12}  
    as={visibility ? IoCloseCircleOutline : IoMenu} 
    onClick={onButtonClick} 
    zIndex="400" />
    
  )
}

export default MenuButton