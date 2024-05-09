import { Box, Heading, Text, VStack,Flex, Center } from '@chakra-ui/react'
import React from 'react'

const HomePage = () => {
  return (
    <VStack > 
    <Center > 
    <Text marginBottom="100px" fontSize="3rem" color="#243E5B" zIndex={10}>Sea of Dream, Waves of Progress </Text>
    <Box  h="100vh"  > 
      <video  
      src='https://videos.pexels.com/video-files/856204/856204-uhd_3840_2160_25fps.mp4'  
      style={{ position: 'fixed', inset: 0, zIndex: -1, objectFit:'cover' }}  autoPlay loop muted/>
    </Box>
    </Center>
    <Flex h="80vh" w="100vw" bg="red.100"> 
    Compassionate and effective support for individuals on the autism spectrum.
    </Flex>

    <Flex> 
      Home Page  Base Contact Section
    </Flex>




    </VStack>
  )
}

export default HomePage