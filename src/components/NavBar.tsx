import { Flex, Link as ChakraLink, List, ListItem ,Text} from '@chakra-ui/react'
import { Link as ReactRouterLink, useLocation } from "react-router-dom";


const NavBar = () => {

    let location = useLocation();


    const menuLinks = [    
        { id:'1',  name: "Home" , path: "/" }, 
        { id: '2', name : "About" , path: "/about"  } , 
        { id:'3', name: "Forms", path: "/forms" } , 
        {  id:'4', name: "Contact", path:"/contact"} , 
      
      ]
   


  return (
    <Flex  
    bg='rgba(71, 184, 177, 0.4)'
    justifyContent="center"
    alignItems="center"
    marginTop="25px"
    gap={10}
    padding="40px"
    >
    
    {  menuLinks.map( page => (
    <ChakraLink
    key={page.id}
    as={ReactRouterLink}
    to={page.path}
    > 
      
    <Text key={page.id} > {page.name}</Text>


      
    </ChakraLink>
        ) )
        }
  



    </Flex> 
  )
}

export default NavBar