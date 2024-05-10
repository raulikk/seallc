import { Box, Text, VStack,Flex, Center, Image, Heading, Button } from '@chakra-ui/react'; 
import autismImage from '../../assets/images/autisticGirl.jpg'
import React from 'react'

const HomePage = () => {
  return (
    <VStack gap="0" > 
   
   
    <Center  position="relative" h="100vh" w="100%"  overflow='hidden'> 
        <video  
        style={{ position:'absolute',zIndex:-1, height:'auto', width:'auto', minWidth:'100%', minHeight:'100%',objectFit:'cover' }}
        // style={{  zIndex: '-1' , position:'absolute', width:'auto', height:'auto', minHeight:'100%'  }} 
        autoPlay loop muted>
        <source src="https://videos.pexels.com/video-files/856204/856204-uhd_3840_2160_25fps.mp4" type="video/mp4"/>
        </video>
        
    </Center>

  
    <Flex   h="50vh"   w="100%"> 
      <Box w="70vw" position='relative' bg="blue" overflow='hidden'> 
      <Image src={autismImage} position='absolute' w="100%"  />  
      </Box>  
       <Center   w="30vw"> 
        <VStack  alignItems="start" >
        <Text w="25ch" lineHeight='2.2' fontSize='1.5rem' >Compassionate and effective support for individuals on the autism spectrum.</Text>
        <Button borderRadius="45px" bg="#47B8B1">Learn more...</Button>
        </VStack>
      </Center>
     

    </Flex>

    <Center h="20vh"> 
      <Button borderRadius="50px" padding="25px" bg="#47B8B1"> 
        Contact
      </Button>
    </Center>




    </VStack>
  )
}

export default HomePage