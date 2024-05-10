
import { Flex, Box, VStack,Image, Text, Center } from '@chakra-ui/react'
import aboutImage from '../../assets/images/aboutImage.jpg'


const AboutPage = () => {
  return (
    <VStack h="100vh"  paddingTop="150px">
      <Flex gap={{
        xl:"20",
      lg:"15",
      sm:"2",
    base:"2"}}
      direction={{
        xl: "row",
         lg:"row", 
         md:"row", 
         sm: "column", 
         base:"column"
      }}

      justifyContent={{
        sm:"center", 
        base:"center"

      }}

      alignItems={{
        xl: "inherit",
        lg:"row", 
        sm:"center", 
        base:"center"
      }}
      > 
        <Box maxW="500px" position='relative' 
        
        boxSize={{
          xl:"25rem",
        lg:"20rem",
      md:"20rem", 
    sm:"22rem",
  base:"20rem"}}
        
        overflow={{
          xl:"inherit", 
          lg:" inherit",
          md: "inherit", 
          sm:"hidden",
          base:"hidden"
          }}> 
           <Image position="absolute"  src={aboutImage}/>
        </Box>
        <Center> 

        <Text  fontSize="1rem" w="45ch" 
        lineHeight={{
          xl:"2rem",
          lg:"2rem", 
          md:"1.5rem", 
          sm:"1.3rem", 
          base:"1.6rem"}} >Through a combination of evidence-based therapies, specialized education, and personalized support, we empower children with autism to develop essential skills and reach their full potential. Whether it's improving communication, building social connections, or enhancing daily living skills, we're here to support each child every step of the way.  At [Business Name], we prioritize collaboration and partnership with families, educators, and therapists to ensure that each child receives comprehensive and coordinated care. Together, we work towards common goals and celebrate every achievement, no matter how big or small.  If you're looking for a caring and supportive environment where your child can thrive, look no further than [Business Name]. Contact us today to learn more about our programs and how we can support your child's journey.</Text>
        </Center>
      </Flex>
    </VStack>
 
  )
}

export default AboutPage