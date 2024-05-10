import { Flex, Box, Text, VStack, Center, Image} from '@chakra-ui/react'
import footerLogo from "../assets/seaLlcLogoFull.svg" 

const Footer = () => {
  return (
    <VStack bg="rgba(36, 62, 91, 1.10)"   alignContent="space-between" alignItems="space-between" 
    padding={{
      xl:"40px 40px 10px 40px",
      lg:"40px 40px 10px 40px",
      md:"40px 40px 10px 40px",
      sm: "20px 20px 10px 20px",
      base: "20px 20px 10px 20px" }} > 
      
      <Flex justifyContent="space-between">
         <Box w={{xl: "200px",
          lg:"200px", 
          md:"150px", 
          sm:"120px", 
          base:"150px"
         }} >
          <Image src={footerLogo} />
         </Box>
      <Box>
        <Text 
        fontSize={{
          xl: "1.2rem",
          lg: "1.2rem", 
          md: "1.2rem",
          sm: "1rem",
          base:"0.9rem"
        }}
        color="white" 
         w="15ch"> 3310 Kent Rd , Suite 26,  Stow, OH-44224</Text>
      </Box>
      </Flex>
      <Center>
         <Text color="white"> 
         © 2024 SEA LLC. All Rights Reserved.
         </Text>
      </Center>
    </VStack>
  )
}

export default Footer