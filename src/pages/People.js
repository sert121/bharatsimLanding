import React from 'react';
// import sections
// <Cta split/> after testimonial
import './People.css';
import { MdSettings,MdHeadset,MdLocationOn,MdEmail } from 'react-icons/md';
import {BsFillBriefcaseFill} from 'react-icons/bs';

import { HStack,Icon,Container,Text,Flex, Spacer,Box,useColorModeValue,Link,Image } from '@chakra-ui/react';




function ProfileCard(){
  return (
    <Flex
    //   bg={useColorModeValue("#F9FAFB", "gray.600")}
      p={5}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        w="auto"
        mx="auto"
        bg={useColorModeValue("white", "blue.900")}
        shadow="lg"
        rounded="lg"
        overflow="hidden"
      >
        <Image
          w="full"
          h={56}
          fit="cover"
          objectPosition="center"
          src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
          alt="avatar"
        />

        <Box py={4} px={6}>
          <Text
            fontSize="xl"
            fontWeight="bold"
            color={useColorModeValue("gray.800", "white")}
          >
            Patterson johnson
          </Text>

          <Text py={2} color={useColorModeValue("gray.700", "gray.400")}>
Professor of Astrophysics
          </Text>
{/*
          <Flex
            alignItems="center"
            mt={4}
            color={useColorModeValue("gray.700", "gray.200")}
          >
            <Icon
              as={BsFillBriefcaseFill}
              as={BsFillBriefcaseFill}
              h={6}
              w={6}
              mr={2}
            />

            <Text px={2} fontSize="sm">
              Choc UI
            </Text>
          </Flex>

          <Flex
            alignItems="center"
            mt={4}
            color={useColorModeValue("gray.700", "gray.200")}
          >
              
          <Icon as={MdLocationOn} h={6} w={6} mr={2} />

            <Text px={2} fontSize="sm">
              California
            </Text>
             
          </Flex>*/}
          <Flex
            alignItems="center"
            mt={4}
            color={useColorModeValue("gray.700", "gray.200")}
          >
            <Icon as={MdEmail} h={6} w={6} mr={2} />
              
            <Text px={2} fontSize="sm">
              patterson@example.com
            </Text>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};
const People = () => {

  return (
    <>
    <div className="topContainer-people">
    <Flex direction="row">
      <ProfileCard/>
      <ProfileCard/>
      <ProfileCard/>

    </Flex>
    </div> 
    
 
      
    </>
  );
}

export default People;