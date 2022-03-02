import React from 'react';
// import sections
// <Cta split/> after testimonial
import './Publications.css'
import { Stack,HStack ,VStack, Header, theme,Container,Text,Flex, Spacer,Box,useColorModeValue,Link,Image } from '@chakra-ui/react'

function Cards(){
  return (
    <Flex
    //   bg={useColorModeValue("#F9FAFB", "gray.400")}              
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        mx="auto"
        px={8}
        py={4}
        rounded="lg"
        shadow="lg"
        bg={useColorModeValue("white", "gray.700")}
        maxW="2xl"
      >
        <Flex justifyContent="space-between" alignItems="center">
          <span>
            <Text
            fontSize="sm"
            color={useColorModeValue("gray.600", "gray.400")}
            >
            Mar 10, 2019
          </Text>
                              </span>
          <Link
            px={3}
            py={1}
            bg="gray.600"
            color="gray.100"
            fontSize="sm"
            fontWeight="700"
            rounded="md"
            _hover={{ bg: "gray.500" }}
          >
            Open
          </Link>
        </Flex>

        <Box mt={2}>
          <Link
            
            fontSize="2xl"
            color={useColorModeValue("gray.700", "white")}
            fontWeight="600"
            _hover={{
              color: useColorModeValue("gray.600", "gray.200"),
              textDecor: "underline",
            }}
          >
            Deep learning on chaos game representation for proteins
          </Link>
          <p>
                <Text mt={2} color={useColorModeValue("gray.600", "gray.300")}>
                Hannah F. Lochel, Dominic Eger, Theeodor Sperlea
              </Text>
        </p>
        </Box>

        <Flex justifyContent="space-between" alignItems="center" mt={4}>
          <Link
            color={useColorModeValue("brand.600", "brand.400")}
            _hover={{ textDecor: "underline" }}
          >
            bioArXiv
          </Link>

          <Flex alignItems="center">
              {/* <Image
              mx={4}
              w={10}
              h={10}
              rounded="full"
              fit="cover"
              display={{ base: "none", sm: "block" }}
              src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=40&q=80"
              alt="avatar"
            />
            <Link
              color={useColorModeValue("gray.700", "gray.200")}
              fontWeight="700"
              cursor="pointer"
            >
              Khatab wedaa
            </Link>*/}
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};


const Publications = () => {

  return (
    <>

<VStack spacing={8} m={2} mb={3} > 


<Cards/>
<Cards/>
<Cards/>


</VStack>
 

 

 
      
    </>
  );
}

export default Publications;