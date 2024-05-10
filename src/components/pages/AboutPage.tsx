
import { Flex, Box, VStack,Image, Text, Center } from '@chakra-ui/react'
import aboutImage from '../../assets/images/aboutImage.jpg'
import React from 'react'

const AboutPage = () => {
  return (
    <VStack h="100vh"  paddingTop="150px">
      <Flex gap="20"> 
        <Box maxW="500px"> 
           <Image  src={aboutImage}/>
        </Box>
        <Center> 

        <Text minWidth="50ch" w="60ch" lineHeight="2.5rem">Through a combination of evidence-based therapies, specialized education, and personalized support, we empower children with autism to develop essential skills and reach their full potential. Whether it's improving communication, building social connections, or enhancing daily living skills, we're here to support each child every step of the way.  At [Business Name], we prioritize collaboration and partnership with families, educators, and therapists to ensure that each child receives comprehensive and coordinated care. Together, we work towards common goals and celebrate every achievement, no matter how big or small.  If you're looking for a caring and supportive environment where your child can thrive, look no further than [Business Name]. Contact us today to learn more about our programs and how we can support your child's journey.</Text>
        </Center>
      </Flex>
    </VStack>
 
  )
}

export default AboutPage