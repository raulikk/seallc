import { Button, Box, Image } from '@chakra-ui/react'
import React from 'react'
import menuIcon from "../assets/icons/menuIcon.svg"
import menuCloseIcon from "../assets/icons/menuCloseIcon.svg"



interface Props{ 
  onButtonClick: () => void; 
  visibility : boolean; 

}


const MenuButton = ({onButtonClick, visibility=false}:Props) => {

 //const menuIcon = "X" 
 
  return (
    
    <Box 
    position='fixed' 
    w="65px"  
    right="0" 
    margin='45px' 
    zIndex={300}
    onClick={() => onButtonClick()}
    >
    <Image src={visibility ?   menuCloseIcon : menuIcon}  /> : 
    </Box>

  //  <Button position='fixed' right="0" margin='45px' zIndex={300} onClick={() => onButtonClick()}>{menuIcon}</Button>
  
  )
}

export default MenuButton