import { Box, Heading,Flex,Text, Center,  VStack } from '@chakra-ui/react'
import React from 'react'

const ContactPage = () => {
  return (
  <VStack paddingTop="130px"  > 
  
    <Flex h="80vh" gap="20"  paddingLeft="100px" w="100%"  > 
    <Box> 
      <Text w="50ch" lineHeight='2.3'>Through a combination of evidence-based therapies, specialized education, and personalized support, we empower children with autism to develop essential skills and reach their full potential. Whether it's improving communication, building social connections, or enhancing daily living skills, we're here to support each child every step of the way.  At [Business Name], we prioritize collaboration and partnership with families, educators, and therapists to ensure that each child receives comprehensive and coordinated care </Text>
    </Box>

    <Box boxSize="400px" bg="pink"> 
    
    </Box>

    </Flex>
   
   
    </VStack>
  )
}

export default ContactPage; 