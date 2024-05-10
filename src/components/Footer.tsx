import { Flex, Box, Text, VStack, Center} from '@chakra-ui/react'


const Footer = () => {
  return (
    <VStack bg="#47B8B1"   alignContent="space-between" alignItems="space-between" padding="40px" > 
      
      <Flex justifyContent="space-between">
         <Box boxSize="40px" bg="white">Logo </Box>
      <Box>Address </Box>
      </Flex>
      <Center>
         <Text> 
         © 2024 SEA LLC. All Rights Reserved.
         </Text>
      </Center>
    </VStack>
  )
}

export default Footer