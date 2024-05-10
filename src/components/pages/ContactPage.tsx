import { Box, Flex,Text, VStack } from '@chakra-ui/react'

const ContactPage = () => {
  return (
  <VStack paddingTop="130px"  > 
  
    <Flex h="80vh"  
    gap="4"
    direction="column"
    paddingLeft={{
      xl:"100px",
      lg:"60px",
      md:"50px",
      sm:"30px",
      base:"10px"}} w="100%"  > 
    <Box> 
      <Text fontSize="0.9rem" w="40ch" lineHeight='1.7'>Have a question, comment, or just want to say hello? We'd love to hear from you! Feel free to reach out to us using any of the methods below: </Text>
    </Box>
    <Box>
    <Text> email:  info@supportenrichadvocate.com</Text>
       </Box> 

    

    </Flex>
   
   
    </VStack>
  )
}

export default ContactPage; 