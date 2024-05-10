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
        <Text 
        fontSize={{
          xl:"2.5rem", 
          lg: "2.3rem",
          md: "2.2rem",
          sm: "1.7rem", 
          base: "1.3rem"
        }} 
        w={{
          xl: "30ch",
          lg: "30ch", 
          md: "30ch",
          sm:"30ch",
          base: "30ch"
        }}
      
        marginBottom="130px"
        marginLeft="25px"
      position='absolute'>Sea of Dreams,Waves of Progress </Text>
    </Center>

  
    <Flex   
     w="100%"
     direction={{
      xl:"row", 
      lg:"row", 
      md:"row", 
      sm:"column",
      base:"column"
     }}
     > 
      <Box w={{
        xl:"70vw",
        lg:"70vw", 
        md: "70vw",
        sm: "100%", 
        base: "100%"
       }}
      aspectRatio="2/0.8" 
      position='relative' 
       overflow='hidden'> 
      <Image src={autismImage} position='absolute' w="100%"  />  
      </Box>  
     
       <Center   
       
      w={{xl: "30vw", 
      lg : "30vw", 
      md: "30vw",
      sm: "100%",
      base:"100%"
      }}
      
      
> 
      <VStack alignItems='start'   >
      <Text w="25ch" 
      lineHeight='2.2'
      fontSize={{
        xl:'1.5rem',
        lg: "1.3rem",
        md: "1rem", 
        base: "1.3rem"
      }} >Compassionate and effective support for individuals on the autism spectrum.</Text>
        <Button borderRadius="45px" bg="rgba(36, 62, 91, 1.0)" color="white">Learn more...</Button>
        </VStack>
      </Center>
     
    </Flex>


    <Center h="25vh" marginTop={{
      xl:"inherit", 
      lg:"inherid", 
      md: "inherit", 
      sm: "25px" , 
      base: "25px"
    }} bg="#47B8B1" w="100%"> 
      <Button borderRadius="50px" padding="25px" color="white" bg="rgba(36, 62, 91, 1.0)"> 
        Lets Chat!  
      </Button>
    </Center>


    </VStack>
  )
}

export default HomePage