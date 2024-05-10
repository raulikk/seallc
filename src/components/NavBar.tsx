import { Flex, Link as ChakraLink, List, ListItem ,Text, textDecoration} from '@chakra-ui/react'
import { Link as ReactRouterLink, useLocation } from "react-router-dom";



interface Props{ 
  onLinkClick: () => void;

}




const NavBar = ({onLinkClick}: Props) => {


    const menuLinks = [    
        { id:'1',  name: "Home" , path: "/" }, 
        { id: '2', name : "About" , path: "/about"  } , 
        { id:'3', name: "Forms", path: "/forms" } , 
        {  id:'4', name: "Contact", path:"/contact"} , 
      ]

      const location = useLocation();
    
      function activePageSelector(pagePath:string){
     
        if(location.pathname===pagePath) return "#00FBE7"
        return "rgba(36, 62, 91, 1.0)"
      }



     function PageBoldnessSelector(pagePath:string){ 
      if(location.pathname===pagePath) return "bold"; 
      return "regular";
     } 
    
      



   
  return (
    <Flex  
    bg={{
      xl: 'rgba(36, 62, 91, 0.2)',
      lg: 'rgba(36, 62, 91, 0.2)', 
      md: 'rgba(36, 62, 91, 0.2)', 
      sm: "inherit", 
      base: 'inherit'

    }}
    justifyContent="center"
    borderRadius={{
      xl: "7px",
      lg: "7px",
      md: "7px", 
      sm: "inherit", 
      base: "inherit" 

    }}
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
    position='relative'
    bottom={{
      xl:"inherit",
      lg:"inherit",
      md:"inherit",
      sm: "50px",
      base:"50px"
    }}
    gap={{
      xl:12,
      lg:12,
      md:12, 
      sm:10,
      base:10
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
    _hover={{textDecoration:'none'}}

    > 
      
    <Text key={page.id} 
    fontSize={{
      xl: "1.2rem", 
      lg: "1.2rem",
      md: "1.2rem", 
      sm : "1.5rem",
      base:"1.7rem"
    }}
    color={{
      md: activePageSelector(page.path) , 
      sm:"white", 
      base: "white"
    }}
    fontWeight={PageBoldnessSelector(page.path)}

    

    onClick={() => onLinkClick()}
    > {page.name}</Text>


    </ChakraLink>
        ) )
        }
  



    </Flex> 
  )



}

export default NavBar