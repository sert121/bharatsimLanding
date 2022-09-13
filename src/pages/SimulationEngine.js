import React from 'react'
import theme from '../theme.js';
import Header from '../components/sections/Header.js';
 
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AiOutlineArrowLeft,AiOutlineArrowRight } from "react-icons/ai";
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
  Stack,
  Button,
} from '@chakra-ui/react';
import {Link as InnerLink} from 'react-router-dom'

function SimulationEngine() {
  return (
    <>
    <ChakraProvider theme={theme}>
    <Header bg="#392F74" ></Header>
    </ChakraProvider>

    <Center>
    <Container maxW='container.xl' flexDirection="column" ml={3} mr={3}>
      <Center>
      <Text p={2} m={2} align='justify'>

      <Center>
      <Heading size="lg" p={2}>The Simulation Engine</Heading>
      </Center><br/>
      Mathematical and computational approaches to the dynamics of an infectious disease have a long history. Models first described by Kermack and McKendrick  describe the how fractions of susceptible (S), infectious (I) and recovered (R) individuals of a population change over time. The dynamics of S, I and R are prescribed through coupled non-linear ordinary differential equations. Compartmental models ignore all variation at the individual level, and also assume that the population is well-mixed. Such models neglect complications associated with spatial variations in incidence and elide the interplay of social factors, such as family sizes, community networks and socio-economic status on disease dynamics. <br/><br/>

      Beyond compartmental models, network and agent-based (equivalently individual-based) approaches implement individual-level granularity. Realistic networks describing the interactions between people can contain a few highly connected nodes. Targeting such nodes, ``super-spreaders'' in the context of infectious disease dynamics, can have an overwhelmingly large effect compared to interventions that treat all nodes equivalently. Both network and agent-based models require many more assumptions, especially regarding the nature of contacts that lead to infection. However, they provide a more detailed way of understanding disease dynamics than is possible through compartmental models. They can thus also be used to assess the effects of targeted interventions, such as lock-downs and restrictions on public transport, in a more precise way.<br/><br/>

      A number of agent-based models have been used to study disease dynamics. There are relatively few such models for India. One, the IISc-TIFR city-based simulator, has been used to model COVID-19 spread in the major Indian cities of Bengaluru and Mumbai.  Results from these models include the evaluation of strategies for reopening public transport in the background of an epidemic at different stages of its trajectory as well as studies of the impact of lock-downs and related interventions.<br/><br/>

      The agent-based simulation framework described here, BharatSim, defines and uses a more detailed description of the population than those in earlier work. Additionally, BharatSim is a framework, i.e. it provides a mechanism for users to address specific requirements easily instead of being forced to modify a large, existing base of code. While applications are designed to respond to a specific question, a simulation framework is more general. The simulation framework thus insulates the user from unnecessary implementation details, while providing them with sufficient flexibility.<br/><br/>


        BharatSim defines and uses a synthetic population that is a detailed and granular description of the population that is also statistically faithful. The simulation engine accepts this population as a CSV file. Additionally, the engine was designed so that it would be able to scale up to large population sizes without significant overhead or degradation in speed, given that one use of BharatSim would be to simulate populations of the size of an average Indian state, which also required the framework to implement efficient data structures and algorithms. Finally, we intended that BharatSim be usable on a range of conventionally available hardware ranging from personal laptops to High Performance Computing (HPC) clusters. Flexibility was another design imperative: we wanted modellers from a range of backgrounds, perhaps even lacking significant programming experience, to be able to easily define a new model and add further levels of abstraction, thus extending the framework in new ways.
       </Text>
       </Center>
       <br></br>
       <Heading size="md" m={2} p={2}>Structure of the simulation engine</Heading>
       <Center>
          <Text p={2} m={2} align='justify'>

            <Box p={2} m={2} backgroundColor='white'>
            <Center>
              <Image width="70%" ml="7%"mr="7%" pt="4%" pb="4%" src={require("../assets/graph.png")}></Image>
            </Center>
            </Box>


          All data in the simulation engine is stored in a <b>Graph</b>. This graph is a network of nodes which can represent both individual agents as well as locations such as households or offices. The framework defines a <tt>Node</tt> class which allows for relations to be established between other such nodes.
          The <tt>Node</tt> class is further extended to define the <tt>Agent</tt> and <tt>Network</tt> classes. The <tt>Network</tt> classes can then be further extended to define specific locations like a <tt>Home</tt> or a <tt>Workplace</tt> class. Thus a typical graph might be one that's shown in the figure below: individual agents (extensions of the <tt>Person</tt> class) are connected to Homes and Workplaces (both extensions of the <tt>Network</tt> class).


            <Box p={2} m={2} backgroundColor='white'>
            <Center>
              <Image width="70%" ml="7%"mr="7%" pt="4%" pb="4%" src={require("../assets/nodes.png")}></Image>
            </Center>
            </Box>


          One could then establish relations between these nodes. For example, every Agent could be a resident of a specific house (specified by a <tt>HouseholdID</tt>) and be employed by a specific workplace (specified by the <tt>WorkplaceID</tt>). The relations are bidirectional, and require one to additionally specify that the home houses -- and the workplace employs -- that particular Agent (specified by the <tt>AgentID</tt>).


            <Box p={2} m={2} backgroundColor='white'>
            <Center>
              <Image width="70%" ml="7%"mr="7%" pt="4%" pb="4%" src={require("../assets/relations.png")}></Image>
            </Center>
            </Box>

          </Text>
       </Center>


       <Text p={2} m={2} align='justify'>

       Using an abstraction like a graph makes the framework domain independent and flexible. This graph can be implemented in one of two ways, either by using <Link style={{color:"blue"}} variant="outline" href="https://neo4j.com/" target={"_blank"}>Neo4j</Link>, a graph database, or using the Scala programming language's scalable map implementation <Link style={{color:"blue"}} target={"_blank"} href="https://www.scala-lang.org/api/2.12.8/scala/collection/concurrent/TrieMap.html">TrieMap</Link>. The modeller can choose either of these implementations. Both these structures were chosen since they optimized data operations, allowing the simulation to scale efficiently to larger populations. The simulation engine framework allows modellers to directly specify their models using its own language. This domain-specific language is itself based on <i>Scala</i>, the language that the simulation framework has been written in. This allows modellers to extend their knowledge of <i>Scala</i> when creating their models.
        </Text>

        <Heading size="md" m={2} p={2}>The <tt>Agent</tt> and <tt>StatefulAgent</tt> classes</Heading>
        <Text p={2} m={2} align='justify'>
          The <tt>Agent</tt> class can be extended to specify a custom agent in a model with specific attributes. These could be general attributes like <tt>householdID</tt> or a <tt>workplaceID</tt>, or model-specific attributes like <tt>relativeSusceptibility</tt> which defines the relative susceptibility the individual has to being infected. A pre-defined extension of the <tt>Agent</tt> class is the <tt>StatefulAgent</tt> class, which endows the <tt>Agent</tt> with a <a href="https://en.wikipedia.org/wiki/Finite-state_machine">Finite-State Machine</a>, allowing them to be in one -- and only one -- disease state at any given time.

          <Box p={2} m={2} backgroundColor='white'>
          <Center>
            <Image width="60%" ml="7%"mr="7%" pt="5%" pb="5%" src={require("../assets/person.png")}></Image>
          </Center>
          </Box>


          In addition, certain abstract and highly-used concepts have been highlighted and defined using the framework's language, like schedules that govern the movement of individuals, and behaviours which are actions that are performed by every agent at every time-step.
          </Text>

          <Heading size="sm" m={2} p={2}>Schedules</Heading>

          <Text p={2} m={2} align='justify'>
          Every individual agent follows a schedule that is defined by the modeller. Such schedules specify agent locations across time. These schedules can be dynamic, can depend on the current state of the agent, and can be affected by interventions that are imposed. For example, one could define a different schedules for individuals, depending on whether they are above the age of 20 or below it. In the former case, these individuals could be considered as "employees", who go from home to work, while in the latter case, they could be "students" who go from home to school. These conditions can be made as general or specific as necessary: for example, one could define a schedule for all agents who happen to be symptomatic, which involves them spending more time at home rather than at work or school, thereby exploring the effect of "quarantining" symptomatic individuals. Thus, complicated network structures can be modelled by incorporating granularity into the schedules of different individuals. <br/><br/>


            <Box p={2} m={2} backgroundColor='white'>
            <Center>
              <Image width="70%" ml="7%"mr="7%" pt="5%" pb="5%" src={require("../assets/schedules.png")}>
              </Image>
              </Center>
            </Box>

        </Text>

        <Heading size="sm" m={2} p={2}>Behaviours</Heading>

        <Text p={2} m={2} align='justify'>
          A behaviour is an action that is performed by each agent at every time-step, and can be defined within the user-defined extension of the <tt>Agent</tt> class using the framework-defined <tt>addBehaviour</tt> function. These behaviours can be used to model (for example) whether or not an individual will go to a vaccination centre to get vaccinated, or alternatively to count the number of days that an individual has spent in the infected compartment. Such behaviours thus give the modeller the flexibility to perform a repetitive task per agent per time-step.
        </Text>
        <Flex  p={4} mb={2}>
        <InnerLink to='/synthetic_population'>
        <Button leftIcon={<AiOutlineArrowLeft/>}>
            Synthetic Population    
            </Button>
          </InnerLink>
          
          <Spacer></Spacer>

          <InnerLink to='/viz_engine'>
          <Button rightIcon={<AiOutlineArrowRight/>}>
              Visualization Engine
            </Button>
          </InnerLink>
        </Flex>
    </Container>
    </Center>
    </>
  )
}

export default SimulationEngine