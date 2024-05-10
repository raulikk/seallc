import { Box, Heading, Text, VStack,Flex, Center } from '@chakra-ui/react'
import React from 'react'

const HomePage = () => {
  return (
    <VStack > 
   
   
    <Center position="relative" h="100vh" w="100%"  margin="0" overflow='hidden'> 
        <video  
        style={{ position:'absolute',zIndex:-1, height:'auto', width:'auto', minWidth:'100%', minHeight:'100%',objectFit:'cover' }}
        // style={{  zIndex: '-1' , position:'absolute', width:'auto', height:'auto', minHeight:'100%'  }} 
        autoPlay loop muted>
        <source src="https://videos.pexels.com/video-files/856204/856204-uhd_3840_2160_25fps.mp4" type="video/mp4"/>
        </video>
        
    </Center>

  
    <Flex h="80vh" w="100vw" bg="red.100"> 
    Compassionate and effective support for individuals on the autism spectrum.
    </Flex>

    <Flex> 
      Home Page Base Contact Section here
    </Flex>




    </VStack>
  )
}

export default HomePage