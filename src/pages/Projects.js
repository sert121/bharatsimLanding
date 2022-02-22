import React from 'react';
import { Stack,HStack ,VStack, theme,Container,Text,Flex, Spacer,Box,useColorModeValue,Link,Image } from '@chakra-ui/react'
// import SectionImgA from '../assets/tsne.png'
function Cards(props){
    return (
      <Flex
        // bg={useColorModeValue("#F9FAFB", "gray.600")}
        p={50}
        w="full"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          bg={useColorModeValue("gray.100", "gray.700")}
          mx={{ lg: 8 }}
          display={{ lg: "flex" }}
          maxW={{ lg: "5xl" }}
          shadow={{ lg: "lg" }}
          rounded={{ lg: "lg" }}
        >
          <Box w={{ lg: "50%" }}>
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
  

  const Projects = (props) => {

 return(
     <>
<Cards imageUrl="https://i.ibb.co/qrRnDCw/tsne.png" title="Simulation engine" body="Simulation engine acts as a kernel that modelers can use to specify the model and synthetic population that will act as as an approximation for real world data.
 This data is used as the input for the simulation engine. The engine framework exposes certain abstractions to the modelers to simplify the model specification while hiding implementation details from them. 
As the name suggests, the engine is supposed to support India-wide simulations with multi-million agents and their behaviours."/>
        <Cards imageUrl="https://i.ibb.co/jkbW30f/india-viz.png" title="Visualization Engine" body="The simulation engine output is difficult to be analyzed programmatically, and modelers need an ability to chart it visually. 
        The visualization engine provides the support to read the simulation output and allows modelers to create different dashboards.
         Dashboard would have multiple charts and it helps modelers to analyze and draw insights."/>
        <Cards imageUrl="https://i.ibb.co/ThtKFNK/undraw-hologram-fjwp.png" title="Synthetic Data Generation" body="Synthetic population represents a set of synthetic agents that share a common geographic, social or biological characteristic. 
        For example, we can have a synthetic population for a district and they would share Census measurements of that district.
         Data and attributes of the synthetic agents are synthesised by integrating a diverse set of data sources(e.g., Census, IHDS, NSS etc.) and using models for interpolation and extrapolation of data"/>
        
    </>    
 );
  }

    export default Projects;