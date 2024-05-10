import { Flex, Box, Text, VStack, Center, Image} from '@chakra-ui/react'
import footerLogo from "../assets/seaLlcLogoFull.svg" 

const Footer = () => {
  return (
    <VStack bg="#47B8B1"   alignContent="space-between" alignItems="space-between" padding="40px 40px 10px 40px" > 
      
      <Flex justifyContent="space-between">
         <Box w="200px" >
          <Image src={footerLogo} />
         </Box>
      <Box>
        <Text color="white" w="15ch"> 3310 Kent Rd , Suite 26,  Stow, OH-44224</Text>
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