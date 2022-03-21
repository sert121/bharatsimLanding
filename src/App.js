import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  ChakraProvider,
  Center,
  Box,
  HStack,
  Vstack,
  Text,
  Link,
  VStack,
  Flex,
  Code,
  Grid,
  Container,
} from '@chakra-ui/react';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from '@chakra-ui/react'
import theme from './theme.js';
import Landing from "./pages/Landing";
import Publications from "./pages/Publications";
import People from "./pages/People";
import Projects from "./pages/Projects";

import LandingLayout from "./components/layouts/LandingLayout";
import Header from "./components/sections/Header";
import Footer from "./components/sections/Footer";

export default function App() {
  return (
    <Router>
      <Switch>

      <Route path="/people">
          <ChakraProvider theme={theme}>
          <LandingLayout >  <People /></LandingLayout>
    
          </ChakraProvider>
        </Route>
        <Route path="/components">
            <ChakraProvider theme={theme}>
            <LandingLayout > <Projects /> </LandingLayout>
                <Footer />    
            </ChakraProvider>
        </Route>

        <Route path="/faq">
          <Landing />
        </Route>

        <Route path="/about">
        <ChakraProvider theme={theme}>
        <div>
          Hello!
        </div>
    </ChakraProvider>
        </Route>

        <Route path="/media">
        <ChakraProvider theme={theme}>
        <LandingLayout>
          Work in Progress...
          </LandingLayout>
    </ChakraProvider>
        </Route>


      <Route path="/collaborations">
        <ChakraProvider theme={theme}>
        <Header bg="#392F74" ></Header>
        <div style={{margin:"auto",width:"50%",paddingLeft:"23vw"}}>
            Work in Progress..
            </div>
                  
        </ChakraProvider>
      </Route>

      <Route path="/simulation_engine">
        <ChakraProvider theme={theme}>
        <Header bg="#392F74" ></Header>
        </ChakraProvider>
        <Container maxW='container.xl'>
        <Center>
          <Text>
          The simulation engine accepts a synthetic population as a CSV file. 
          The BharatSim simulation engine was designed so that it would be able to scale up to large population sizes without significant overhead or degradation in speed, given that one use of BharatSim would be to simulate populations of the size of an average Indian state.
           Agent-based models are computationally heavy and must typically be run multiple times to obtain statistically significant results. As a consequence, the framework needed to implement efficient data structures and algorithms. Finally, we intended that BharatSim be usable on a range of conventionally available hardware ranging from personal laptops to High Performance Computing (HPC) clusters. Flexibility was another design imperative: we wanted modellers from a range of backgrounds, perhaps even lacking significant programming experience, to be able to easily define a new model and add further levels of abstraction, 
           thus extending the framework in new ways.
          </Text>
          
        </Center>
        </Container>
      </Route>
      
      <Route path="/synthetic_population">
        <ChakraProvider theme={theme}>
        <Header bg="#392F74" ></Header>
        <Container maxW='container.xl'>
        
          <Text>
          A synthetic population is a simplified individual-level representation of the actual population. This means that while every person is represented individually in it, not all of their attributes are included (for example, hair colour or shoe-size are deemed to be irrelevant for modelling epidemic spread, and are thus ignored, while the presence of commodities like diabetes would be included). As such, a synthetic population does not aim to be identical to the actual population, but instead attempts to match its various statistical distributions and correlations,
           thereby being sufficiently close to the true population to be used in modelling.
          </Text>
          <br></br>
          <Table size='sm'>
            <Thead>
              <Tr>
                <Th isNumeric>Agent ID</Th>
                <Th isNumeric>Age</Th>
                <Th isNumeric>height</Th>
                <Th isNumeric>weight</Th>

              </Tr>
            </Thead>
            <Tbody>
              <Tr>
              <Td isNumeric>25.4</Td>
              <Td isNumeric>21.4</Td>
              <Td isNumeric>0.4</Td>
              <Td isNumeric>89.5</Td>
              </Tr>
              <Tr>
              <Td isNumeric>50</Td>
              <Td isNumeric>58</Td>
              <Td isNumeric>0.55</Td>
              <Td isNumeric>81</Td>
              </Tr>
              <Tr>
                <Td isNumeric>23</Td>
                <Td isNumeric>58</Td>
                <Td isNumeric>0.71444</Td>
                <Td isNumeric>82</Td>
              </Tr>
            </Tbody>
          </Table>
          
        
        
        </Container>
        </ChakraProvider>
      </Route>
      
      <Route path="/viz_engine">
        <ChakraProvider theme={theme}>
        <Header bg="#392F74" ></Header>
        </ChakraProvider>
        <Container maxW='container.xl'>
          <Center>
            <Text>
            Using the simulation engine, the modeller may define an output file containing, for example, the number of individuals in different disease states for every time step. The visualization engine can then read this output and create multiple dashboards with different types of graphs that can help in analyzing the results and in visualizing them.
            The visualisation engine is self-contained, and can accept and visualize any CSV data file. Each dashboard can possess a combination of different graphs and charts, from line-graphs, histograms, and pie-charts. Additionally, the visualization engine can also represent GIS data in the geoJSON format to plot heat maps and choropleths, 
            which can either be static, or which can change with time based on the data provided in the input CSV file.
            </Text>
          </Center>
        </Container>
      </Route>
      
        <Route path="/publications">
          <ChakraProvider theme={theme}>
          <Header bg="#392F74" ></Header>
            {/*<Publications />*/}

            <div style={{margin:"auto",width:"50%",paddingLeft:"23vw"}}>
            Work in Progress...
            </div>
            
          {/* <Footer /> */}
          </ChakraProvider>
        </Route>

        <Route path="/">
          <Landing />
        
          
        </Route>
      </Switch>
    </Router>
  );
}
