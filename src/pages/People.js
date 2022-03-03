import React from 'react';
// import sections
// <Cta split/> after testimonial
import './People.css';
import { MdSettings,MdHeadset,MdLocationOn,MdEmail, MdWeb } from 'react-icons/md';
import {BsFillBriefcaseFill} from 'react-icons/bs';

import { HStack,Icon,Container,Text,Flex,Spacer,Box,useColorModeValue,Link,Image } from '@chakra-ui/react';

import { Center, Square, Circle } from '@chakra-ui/react'


function ProfileCard({name,title,email,img_url}){
  return (
    <Flex
    //   bg={useColorModeValue("#F9FAFB", "gray.600")}
      p={5}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        w="full"
        h="auto"
        mx="auto"
        bg={useColorModeValue("white", "#351B59")}
        shadow="lg"
        rounded="lg"
        overflow="hidden"
      >
        <Image
          w="full"
          h={56}
          fit="contain"
          objectPosition="center"
          src={img_url}
          alt="avatar"
        />

        <Box py={4} px={6}>
          <Text
            fontSize="xl"
            fontWeight="bold"
            color={useColorModeValue("gray.800", "white")}
          >
            {name}
          </Text>

          <Text py={2} color={useColorModeValue("gray.700", "gray.400")}>
            {title}
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
              {email}
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
    <Flex direction="column">
     
        <Center>
          <Text fontSize='xl' fontWeight={700}> Thoughtworks Team</Text>
        </Center>

      <Flex direction="row">
      
        <ProfileCard name="Jayanta Kshirsagar" title="Engineering for Research" img_url={require('../assets/people/jayanta1.jpg')} email="jayantak@thoughtworks.com"/>
        <ProfileCard name="Praveen Ninawe" title="Engineering for Research" img_url={require('../assets/people/praveen.jpg')} email="praveen.ninawe@thoughtworks.com"/>
        <ProfileCard name="Harshal Hayatnagarkar" title="Engineering for Research" img_url={require('../assets/people/harshal.png')} email="harshalh@thoughtworks.com"/>
        <ProfileCard name="Chhaya Yadav" title="Engineering for Research" img_url={require('../assets/people/chhaya.jpeg')} email="chhayay@thoughtworks.com"/>
        

      </Flex> 

      <br></br>
      <br></br>

      <Center>
      <Text fontSize='xl' fontWeight={700}> Ashoka University Team</Text>
      </Center>

      <Flex direction="row">
      
      <ProfileCard name="Gautam Menon" title="Professor of Physics and Biology" img_url="https://www.ashoka.edu.in/wp-content/uploads/2021/04/Untitled-design-55.png" email="gautam.menon@ashoka.edu.in"/>
      <ProfileCard name="Debayan Gupta" title="Assistant Professor of Computer Science" img_url="https://www.ashoka.edu.in/wp-content/uploads/2021/04/Untitled-design-70.png" email="debayan.gupta@ashoka.edu.in"/>
      <ProfileCard name="Bhavesh Neekhra" title="Graduate Student, Computer Science" img_url="https://pbs.twimg.com/profile_images/1353270474671702018/2zjRiWsa_400x400.jpg" email="bhavesh.neekhra_phd18@ashoka.edu.in"/>
      <ProfileCard name="Philip Cherian" title="Graduate Student, Physics" img_url="https://avatars.githubusercontent.com/u/19914486?v=4" email="philip.cherian@ashoka.edu.in"/>

      </Flex> 
    


    </Flex>

    </div> 
    
 
      
    </>
  );
}

export default People;