import React from 'react'
import theme from '../theme.js';
import Header from '../components/sections/Header.js';
import {Link as InnerLink} from 'react-router-dom'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
    ChakraProvider,
    Center,
    Button,
    Image,
    Box,
    HStack,
    Vstack,
    Text,
    Link,
    VStack,
    Flex,
    Code,
    Heading,
    Grid,
    Container,
    Spacer,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    } from '@chakra-ui/react'
import { AiOutlineArrowLeft,AiOutlineArrowRight } from "react-icons/ai";

function VizEngine() {
  return (
   <>
           <ChakraProvider theme={theme}>
        <Header bg="#392F74" ></Header>
        </ChakraProvider>
        <Center>
        <Container maxW='container.xl'>
        <Center><Heading size="lg" m={2} p={2}>The Visualization Engine</Heading></Center>

            <Text m={2} p={2} align='justify'>
            Using the simulation engine, the modeller may define an output file containing, for example, the number of individuals in different disease states for every time step. The visualization engine can then read this output and create multiple dashboards with different types of graphs that can help in analyzing the results and in visualizing them.<br/><br/>
            The visualisation engine is self-contained, and can accept and visualize any CSV data file. Each dashboard can possess a combination of different graphs and charts, from line-graphs, histograms, and pie-charts. Additionally, the visualization engine can also represent GIS data in the geoJSON format to plot heat maps and choropleths, which can either be static, or which can change with time based on the data provided in the input CSV file.<br/><br/>

            The visualisation engine is self-contained, and can accept and visualize any CSV data file. Each dashboard can possess a combination of different graphs and charts, from line-graphs, histograms, and pie-charts. Additionally, the visualization engine can also represent GIS data in the geoJSON format to plot heat maps and choropleths, which can either be static, or which can change with time based on the data provided in the input CSV file, shown below.

            <Box p={2} m={2} backgroundColor='white'>
            <Center>
              <Image width="30%" ml="7%"mr="7%" pt="5%" pb="5%" src={require("../assets/mumbai.gif")}></Image>
              </Center>
            </Box>
            </Text>

            <Heading size="md" m={2} p={2}>Features of the Visualization Engine</Heading>

            <Text m={2} p={2} align='justify'>

             The visualization engine provides a variety of different features:<br/><br/>


            <Heading size="s">Data Import: </Heading> The visualization engine can import data in ZIP, CSV, and GeoJSON formats. The user can add, delete, and link files from different dashboards and can also add columns with custom formulae.<br/><br/>

            <Heading size="s"> Charts: </Heading>The user can represent time-series data as a line-graph. Additionally, bar charts, histograms, and pie charts can be used to study aggregated data. Geographical information and data can also be visualized. Spatial variations in data can be visualized using either heatmaps or choropleths. Heatmaps visualize data in the form of ``hot'' or ``cold'' spots, with a warm-to-cool color scheme. Choropleth maps can also be used to visualize how quantities vary across a fixed geographic area like a district or state, while simultaneously showing the extent of variation within a region.<br/><br/>

            <Heading size='s'> Project & Dashboard management: </Heading> Users can create a Project which can have multiple individual dashboards for better analysis.<br/><br/>

            Users can add, edit, and delete projects and dashboards for better management. Dashboards are auto-saved to avoid data loss.
            Users can easily add, edit, duplicate, and delete widgets and charts in each dashboard. Dashboards can be duplicated to allow users to duplicate certain design choices and widget configurations. Each widget also allows the users to export the output either as raster or vector data using the PNG and SVG file formats respectively.

            </Text>
            <Flex  p={4} mb={2}>

        <InnerLink to='/simulation_engine'>
            <Button leftIcon={<AiOutlineArrowLeft/>}>
              Simulation Engine
            </Button>
          </InnerLink>
          
          <Spacer></Spacer>

          <InnerLink to='/synthetic_population'>
            <Button rightIcon={<AiOutlineArrowRight/>}>
              Synthetic Population
            </Button>
          </InnerLink>
        </Flex>

        </Container>
        </Center>
 
   </>
  )
}

export default VizEngine