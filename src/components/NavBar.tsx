import { Flex, Link as ChakraLink, List, ListItem ,Text} from '@chakra-ui/react'
import { Link as ReactRouterLink, useLocation } from "react-router-dom";


const NavBar = () => {

    //let location = useLocation();


    const menuLinks = [    
        { id:'1',  name: "Home" , path: "/" }, 
        { id: '2', name : "About" , path: "/about"  } , 
        { id:'3', name: "Forms", path: "/forms" } , 
        {  id:'4', name: "Contact", path:"/contact"} , 
      
      ]
   


  return (
    <Flex  
    bg={{
      xl: 'rgba(71, 184, 177, 0.4)',
      lg: 'rgba(71, 184, 177, 0.4)', 
      md: 'rgba(71, 184, 177, 0.4)', 
      sm: "red", 
      base: 'red'

    }}
    justifyContent="center"
  
    alignItems="center"
    direction={ {
      xl: 'row',
      lg: 'row', 
      md: 'row',
      sm:'column',
      base: 'column'
    }}
    
    marginTop= {{
      xl: "25px",
      lg: "25px",
      md:"25px",
      sm:'inherit', 
      base:"inherit"
    }}
    gap={{
      xl: "10",
      lg: "10", 
      md: "10", 
      sm: "5", 
      base: "5"
    }}
    padding={{
      xl: "40px",
      lg: "40px", 
      md: "40px", 
      sm:"inherit", 
      base:"inherit"
    }}
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