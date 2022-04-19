import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  ChakraProvider,
  Center,
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
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
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
        <Container maxW='container.xm' flexDirection="column" ml={3} mr={3}>
          <Center>
          <Text p={2} m={1}>
          The simulation engine accepts a synthetic population as a CSV file. 
          The BharatSim simulation engine was designed so that it would be able to scale up to large population sizes without significant overhead or degradation in speed, given that one use of BharatSim would be to simulate populations of the size of an average Indian state.
           Agent-based models are computationally heavy and must typically be run multiple times to obtain statistically significant results. As a consequence, the framework needed to implement efficient data structures and algorithms. Finally, we intended that BharatSim be usable on a range of conventionally available hardware ranging from personal laptops to High Performance Computing (HPC) clusters. Flexibility was another design imperative: we wanted modellers from a range of backgrounds, perhaps even lacking significant programming experience, to be able to easily define a new model and add further levels of abstraction, 
           thus extending the framework in new ways.
           </Text>
           </Center>
           <br></br>
           <br></br>
           <br></br>
            <Center>
           <Heading size="lg">Structure of the simulation engine</Heading>
           </Center>
           <br></br>
           <Center>
              <Text p={2} m={1}>
              All data in the simulation engine is stored in a <b>Graph</b>. This graph is a network of nodes which can represent both individual agents as well as locations such as households or offices. The framework defines a Node class which allows for relations to be established between other such nodes. 
              The <i>Node</i> class is further extended to define the <b>Agent</b> and
              <b>Network</b> classes.
              </Text>
           </Center>
          <Center>
            <Box p={2} m={2} backgroundColor='white'>
              <Image src={require("./assets/graphNodesAndRelations.png")}>
              </Image>
            </Box>
           </Center>

           <b></b>
           <b></b>
           <b></b>
           <Text p={2} m={1}>
           Using an abstraction like a graph makes the framework domain independent and flexible. This graph can be implemented in one of two ways, either by using Neo4j, a graph database, or using the Scala programming language's scalable map implementation TrieMap. The modeller can choose either of these implementations. Both these structures were chosen since they optimized data operations, allowing the simulation to scale efficiently to larger populations.
           The simulation engine framework allows modellers to directly specify their models using its own language. This domain-specific language is itself based on <i>Scala</i>, the language that the simulation framework has been written in. This allows modellers to extend their knowledge of <i>Scala</i> when creating their models. In addition, certain abstract and highly-used concepts have been highlighted and defined using the framework's language.
            Three such concepts, essential to agent-based models, are schedules, behaviours, and a Finite State Machine.
            </Text>
            <Text p={2} m={2}>
                <OrderedList>
              <ListItem>Schedules: Every individual agent follows a schedule that is defined by the modeller. Such schedules specify agent locations across time. These schedules can be dynamic, can depend on the current state of the agent and can be affected by interventions that are imposed.
              </ListItem>
              <ListItem>
              Behaviours: A behaviour is an action that is performed by each agent at every time-step. Behaviours can be defined within the user-defined extension of the <i>Agent</i> class using the framework-defined <i>addBehaviour</i> function.
              </ListItem>
              </OrderedList>  
            </Text>
            <Box p={2} m={2} backgroundColor='white'>
              <Image src={require("./assets/schedulesAndBehaviours.png")}>
              </Image>
            </Box>


        </Container>
      </Route>
      
      <Route path="/synthetic_population">
        <ChakraProvider theme={theme}>
        <Header bg="#392F74" ></Header>
        <Container maxW='container.xm' m={3}>
        
          <Text m={2} p={2}>
          A synthetic population is a simplified individual-level representation of the actual population. This means that while every person is represented individually in it, not all of their attributes are included (for example, hair colour or shoe-size are deemed to be irrelevant for modelling epidemic spread, and are thus ignored, while the presence of commodities like diabetes would be included). As such, a synthetic population does not aim to be identical to the actual population, but instead attempts to match its various statistical distributions and correlations,
           thereby being sufficiently close to the true population to be used in modelling.
           <br></br>
           In the table below, you can see an example of a section of a synthetic population. Each row represents an individual with a unique ID, as well as certain attributes. These attributes could be related to the individual themselves (like their gender, age, and height and so on), or their network (details pertaining to their homes, workplaces, and possibly schools).
           Additionally, the population could also contain information regarding the individual’s comorbidities (for example, whether they have diabetes or other preexisting conditions), 
           if this is deemed relevant to the modelling exercise.
          </Text>

          <br></br>
                <Table size='sm'>
      <Thead>  <Tr>
          <Th>Agent_ID</Th>
          <Th>SexLabel</Th>
          <Th>Age</Th>
          <Th>Height</Th>
          <Th>Weight</Th>
          <Th>JobLabel</Th>
          <Th>StateLabel</Th>
          <Th>District</Th>
          <Th>AdminUnitName</Th>
          <Th>AdminUnitLatitude</Th>
          <Th>AdminUnitLongitude</Th>
          <Th>HHID</Th>
          <Th>H_Lat</Th>
          <Th>H_Lon</Th>
          <Th>WorkPlaceID</Th>
          <Th>W_Lat</Th>
          <Th>W_Lon</Th>
          <Th>school_id</Th>
          <Th>school_lat</Th>
          <Th>school_long</Th>
          <Th>public_place_id</Th>
          <Th>public_place_lat</Th>
          <Th>public_place_long</Th>
          <Th>essential_worker</Th>
          <Th>Adherence_to_Intervention</Th>
          <Th>M_High_BP</Th>
          <Th>M_Diabetes</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>99802077568</Td>
          <Td>Female</Td>
          <Td>76</Td>
          <Td>147.37</Td>
          <Td>49.05</Td>
          <Td>Construction</Td>
          <Td>Maharashtra</Td>
          <Td>Pune</Td>
          <Td>Mohammadwadi-Kausar Baug</Td>
          <Td>18.47477</Td>
          <Td>73.89257</Td>
          <Td>99801684702</Td>
          <Td>18.46709</Td>
          <Td>73.90603</Td>
          <Td>2001000003467</Td>
          <Td>18.4679</Td>
          <Td>73.89859</Td>
          <Td>0</Td>
          <Td></Td>
          <Td></Td>
          <Td>3001000000062</Td>
          <Td>18.45035</Td>
          <Td>73.87068</Td>
          <Td>0</Td>
          <Td>1</Td>
          <Td>0</Td>
          <Td>0</Td>
        </Tr>
        <Tr>
          <Td>99801380107</Td>
          <Td>Male</Td>
          <Td>37</Td>
          <Td>162.03</Td>
          <Td>57.94</Td>
          <Td>Ag labour</Td>
          <Td>Maharashtra</Td>
          <Td>Pune</Td>
          <Td>Nagpur Chawl-Phule Nagar</Td>
          <Td>18.55893</Td>
          <Td>73.87609</Td>
          <Td>99801248473</Td>
          <Td>18.55952</Td>
          <Td>73.87877</Td>
          <Td>2001000006630</Td>
          <Td>18.58283</Td>
          <Td>73.91661</Td>
          <Td>0</Td>
          <Td></Td>
          <Td></Td>
          <Td>3001000001044</Td>
          <Td>18.52699</Td>
          <Td>73.83451</Td>
          <Td>1</Td>
          <Td>0</Td>
          <Td>0</Td>
          <Td>0</Td>
        </Tr>
        <Tr>
          <Td>99802408169</Td>
          <Td>Male</Td>
          <Td>6</Td>
          <Td>111.21</Td>
          <Td>23.13</Td>
          <Td>Student</Td>
          <Td>Maharashtra</Td>
          <Td>Pune</Td>
          <Td>Kharadi-Chandan Nagar</Td>
          <Td>18.56355</Td>
          <Td>73.93256</Td>
          <Td>99800525921</Td>
          <Td>18.54846</Td>
          <Td>73.94971</Td>
          <Td>0</Td>
          <Td></Td>
          <Td></Td>
          <Td>2001000002070</Td>
          <Td>18.55683</Td>
          <Td>73.94757</Td>
          <Td>3001000000274</Td>
          <Td>18.54904</Td>
          <Td>73.9491</Td>
          <Td>0</Td>
          <Td>1</Td>
          <Td>0</Td>
          <Td>0</Td>
        </Tr>
        <Tr>
          <Td>99800402683</Td>
          <Td>Female</Td>
          <Td>37</Td>
          <Td>152.65</Td>
          <Td>52.61</Td>
          <Td>Ag labour</Td>
          <Td>Maharashtra</Td>
          <Td>Pune</Td>
          <Td>Karve Nagar</Td>
          <Td>18.49149</Td>
          <Td>73.82173</Td>
          <Td>99800473441</Td>
          <Td>18.48539</Td>
          <Td>73.82129</Td>
          <Td>2001000006876</Td>
          <Td>18.53875</Td>
          <Td>73.92594</Td>
          <Td>0</Td>
          <Td></Td>
          <Td></Td>
          <Td>3001000000650</Td>
          <Td>18.48382</Td>
          <Td>73.79731</Td>
          <Td>1</Td>
          <Td>0</Td>
          <Td>0</Td>
          <Td>0</Td>
        </Tr>
        <Tr>
          <Td>99800824202</Td>
          <Td>Female</Td>
          <Td>35</Td>
          <Td>150.92</Td>
          <Td>52.42</Td>
          <Td>Homebound</Td>
          <Td>Maharashtra</Td>
          <Td>Pune</Td>
          <Td>Deccan Gymkhana-Model Colony</Td>
          <Td>18.51845</Td>
          <Td>73.83391</Td>
          <Td>99800895513</Td>
          <Td>18.52335</Td>
          <Td>73.85339</Td>
          <Td>0</Td>
          <Td></Td>
          <Td></Td>
          <Td>0</Td>
          <Td></Td>
          <Td></Td>
          <Td>3001000000236</Td>
          <Td>18.54026</Td>
          <Td>73.91186</Td>
          <Td>0</Td>
          <Td>0</Td>
          <Td>0</Td>
          <Td>0</Td>
        </Tr>
        <Tr>
          <Td>99801178045</Td>
          <Td>Female</Td>
          <Td>50</Td>
          <Td>151.51</Td>
          <Td>50.1</Td>
          <Td>Ag labour</Td>
          <Td>Maharashtra</Td>
          <Td>Pune</Td>
          <Td>Shanivar Peth-Sadashiv Peth</Td>
          <Td>18.51944</Td>
          <Td>73.85194</Td>
          <Td>99801142021</Td>
          <Td>18.51388</Td>
          <Td>73.84935</Td>
          <Td>2001000000636</Td>
          <Td>18.50785</Td>
          <Td>73.84921</Td>
          <Td>0</Td>
          <Td></Td>
          <Td></Td>
          <Td>3001000001403</Td>
          <Td>18.51024</Td>
          <Td>73.84731</Td>
          <Td>0</Td>
          <Td>0.9</Td>
          <Td>0</Td>
          <Td>0</Td>
        </Tr>
        <Tr>
          <Td>99802883562</Td>
          <Td>Female</Td>
          <Td>14</Td>
          <Td>139.25</Td>
          <Td>37.81</Td>
          <Td>Student</Td>
          <Td>Maharashtra</Td>
          <Td>Pune</Td>
          <Td>Viman Nagar-Somnath Nagar</Td>
          <Td>18.55818</Td>
          <Td>73.92165</Td>
          <Td>99801268501</Td>
          <Td>18.57398</Td>
          <Td>73.9285</Td>
          <Td>0</Td>
          <Td></Td>
          <Td></Td>
          <Td>2001000000159</Td>
          <Td>18.52152</Td>
          <Td>73.92834</Td>
          <Td>3001000000633</Td>
          <Td>18.56121</Td>
          <Td>73.93799</Td>
          <Td>0</Td>
          <Td>0.8</Td>
          <Td>0</Td>
          <Td>0</Td>
        </Tr>
        <Tr>
          <Td>99800390824</Td>
          <Td>Male</Td>
          <Td>19</Td>
          <Td>157.71</Td>
          <Td>50.84</Td>
          <Td>Plantation lab</Td>
          <Td>Maharashtra</Td>
          <Td>Pune</Td>
          <Td>Salisbury Park-Maharshi Nagar</Td>
          <Td>18.49162</Td>
          <Td>73.8661</Td>
          <Td>99800461238</Td>
          <Td>18.49814</Td>
          <Td>73.87331</Td>
          <Td>2001000011846</Td>
          <Td>18.49934</Td>
          <Td>73.8511</Td>
          <Td>0</Td>
          <Td></Td>
          <Td></Td>
          <Td>3001000000528</Td>
          <Td>18.46247</Td>
          <Td>73.85122</Td>
          <Td>0</Td>
          <Td>0.4</Td>
          <Td>0</Td>
          <Td>0</Td>
        </Tr>
        <Tr>
          <Td>99800144374</Td>
          <Td>Female</Td>
          <Td>50</Td>
          <Td>152.6</Td>
          <Td>50.58</Td>
          <Td>Homebound</Td>
          <Td>Maharashtra</Td>
          <Td>Pune</Td>
          <Td>Dhanakvadi-Ambegaon Pathar</Td>
          <Td>18.45878</Td>
          <Td>73.84264</Td>
          <Td>99800193269</Td>
          <Td>18.46661</Td>
          <Td>73.8561</Td>
          <Td>0</Td>
          <Td></Td>
          <Td></Td>
          <Td>0</Td>
          <Td></Td>
          <Td></Td>
          <Td>3001000001414</Td>
          <Td>18.46532</Td>
          <Td>73.89147</Td>
          <Td>0</Td>
          <Td>0.9</Td>
          <Td>0</Td>
          <Td>0</Td>
        </Tr>
        <Tr>
          <Td>99800944765</Td>
          <Td>Female</Td>
          <Td>45</Td>
          <Td>151.99</Td>
          <Td>50.99</Td>
          <Td>Homebound</Td>
          <Td>Maharashtra</Td>
          <Td>Pune</Td>
          <Td>Kharadi-Chandan Nagar</Td>
          <Td>18.56355</Td>
          <Td>73.93256</Td>
          <Td>99800978186</Td>
          <Td>18.54808</Td>
          <Td>73.94093</Td>
          <Td>0</Td>
          <Td></Td>
          <Td></Td>
          <Td>0</Td>
          <Td></Td>
          <Td></Td>
          <Td>3001000001402</Td>
          <Td>18.5684</Td>
          <Td>73.82062</Td>
          <Td>0</Td>
          <Td>0.9</Td>
          <Td>0</Td>
          <Td>0</Td>
        </Tr>
      </Tbody>
                </Table>
          <br>
          </br> 
          
          <Text m={2} p={2}>      
              All of these attributes are strongly correlated with each other and a good synthetic population will ideally be able reproduce the correlations that occur in the real world. However, this is a monumental task; real world data is complex, 
              and often contains many artifacts that need to be addressed.
          </Text>

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
            <br>
            </br>
            The visualisation engine is self-contained, and can accept and visualize any CSV data file. Each dashboard can possess a combination of different graphs and charts, from line-graphs, histograms, and pie-charts. Additionally, the visualization engine can also represent GIS data in the geoJSON format to plot heat maps and choropleths,
             which can either be static, or which can change with time based on the data provided in the input CSV file.
             The visualization engine provides a variety of different features:
             <br></br>
             <br></br>
              <OrderedList>
                  <ListItem> <Heading size="xs">Data Import: </Heading> The visualization engine can import data in ZIP, CSV, and GeoJSON formats. The user can add, delete, and link files from different dashboards and can also add columns with custom formulae.
                  </ListItem>
                  <ListItem> <Heading size="xs"> Charts: </Heading>The user can represent time-series data as a line-graph. Additionally, bar charts, histograms, and pie charts can be used to study aggregated data. Geographical information and data can also be visualized. Spatial variations in data can be visualized using either heatmaps or choropleths. Heatmaps visualize data in the form of ``hot'' or ``cold'' spots, with a warm-to-cool color scheme. Choropleth maps can also be used to visualize how quantities vary across a fixed geographic area like a district or state, while simultaneously showing the extent of variation within a region.
                  </ListItem>
                  <ListItem><Heading size='xs'> Project & Dashboard management: </Heading> Users can create a Project which can have multiple individual dashboards for better analysis. 
                  Users can add, edit, and delete projects and dashboards for better management. Dashboards are auto-saved to avoid data loss.
                  Users can easily add, edit, duplicate, and delete widgets and charts in each dashboard. Dashboards can be duplicated to allow users to duplicate certain design choices and widget configurations. Each widget also allows the users to export the output either as raster or vector data using the PNG and SVG file formats respectively.
                  </ListItem>
              </OrderedList>
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
