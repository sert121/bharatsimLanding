import React from 'react';
import { Stack,HStack ,VStack, theme,Container,Text,Flex, Spacer,Box,useColorModeValue,LinkImage,Image,Link} from '@chakra-ui/react'
// import SectionImgA from '../assets/tsne.png'

function Cards(props){
    return (
<Flex
bg={useColorModeValue("#F9FAFB", "gray.600")}
p={50}
w="auto"
alignItems="center"
justifyContent="center"
flexDirection="column"
>
<Box
  bg={useColorModeValue("gray.100", "gray.700")}
  mx={{ lg: 8 }}
  display={{ lg: "flex" }}
  maxW={{ lg: "xl" }}
  shadow={{ lg: "lg" }}
  rounded={{ lg: "lg" }}
>
      <Box w={{ lg: "30%" }}>
        <Box
          h={{ base: 64, lg: "full" }}
          rounded={{ lg: "lg" }}
          bgSize="cover"
          bgRepeat="none"
          backgroundImage={"url('" + props.imageUrl + "')"}
        ></Box>
      </Box>

  <Box py={12} px={6} maxW={{ base: "xl", lg: "5xl" }} w={{ lg: "50%" }}>
    <Text
      fontSize={{ base: "2xl", md: "3xl" }}
      color={useColorModeValue("gray.800", "white")}
      fontWeight="bold"
    >
      {props.title}
    </Text>
    <Text mt={4} color={useColorModeValue("gray.600", "gray.400")}>
      {props.body}
    </Text>

    <Box mt={8}>
      <Link
        
        bg="gray.900"
        color="gray.100"
        px={5}
        py={3}
        fontWeight="semibold"
        rounded="lg"
        _hover={{ bg: "gray.800" }}
      >
       Read More
      </Link>
    </Box>
    
  </Box>
</Box>

</Flex>
    );
  };
  
  
  function Ma (props) {
    return (
      <Flex
      px={2}
      py={2}
      bg={"transparent"}
      direction="column"
      w="full"
      justify='space-between'

      >
        <Box
        
          maxW="5xl"
          mx="auto"
          minH="xl"
          bg={useColorModeValue("white", "gray.800")}
          shadow="lg"
          rounded="lg"
        >
          <Box px={4} py={2}>
            <Text
              color={useColorModeValue("gray.800", "white")}
              fontWeight="bold"
              fontSize="2xl"

            >
              {props.title}
            </Text>
            <Text
              mt={1}
              fontSize="sm"
              color={useColorModeValue("gray.600", "gray.400")}
            >
              {props.body}
            </Text>
          </Box>
    
          <Image
            h={48}
            w="full"
            mt="20%"
            fit="cover"
            src={props.imageUrl}
            alt="img1"
          />

        </Box>
      </Flex>
    );
  };

  const Projects = (props) => {

 return(
   <Container w="full" maxW={"6xl"} >
      <HStack spacing={2}>
        <Ma imageUrl="https://i.ibb.co/qrRnDCw/tsne.png" title="Simulation engine" body="An open-source, large-scale, agent-based simulation framework, built to help the scientific community to study complex adaptive systems, such as the behaviour of human populations. The engine takes as input the synthetic population for a given region and allows a modeller the flexibility to create a custom model that represents individual-level interactions and scenarios between agents, without being lost in unnecessary implementation details."/>
        <Ma imageUrl="https://i.ibb.co/jkbW30f/india-viz.png" title="Visualization Engine" body=" A self-contained web app that can read the output of the simulation engine and create multiple dashboards with different types of graphs which can in turn help in analyzing the results and extracting information from them "/>
        <Ma imageUrl="https://i.ibb.co/ThtKFNK/undraw-hologram-fjwp.png" title="Synthetic Data Generation" body="Synthetic population represents a set of synthetic agents that share a common geographic, social or biological characteristic. 
        For example, we can have a synthetic population for a district and they would share Census measurements of that district.
         Data and attributes of the synthetic agents are synthesised by integrating a diverse set of data sources(e.g., Census, IHDS, NSS etc.) and using models for interpolation and extrapolation of data"/>

      </HStack>
    </Container>
 );
  }

    export default Projects;