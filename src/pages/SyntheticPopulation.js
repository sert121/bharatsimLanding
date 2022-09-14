import React from 'react';
import theme from '../theme.js';
import Header from '../components/sections/Header.js';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {Link as InnerLink} from 'react-router-dom'

import {
  ChakraProvider,
  Center,
  Image,
  Box,
  HStack,
  Vstack,
  Button,
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

import { AiOutlineArrowLeft,AiOutlineArrowRight } from "react-icons/ai";

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
function SyntheticPopulation() {
  return (
    <>
        <ChakraProvider theme={theme}>
        <Header bg="#392F74" ></Header>
        <Center>
        <Container maxW='container.xl' m={3}>
          <Text m={2} p={2} align='justify'>
          <Center><Heading size="lg" p={2}>The Synthetic Population</Heading></Center><br/>
            At the core of BharatSim is a simulated synthetic population, generated using multiple data sources. The resulting population of individuals and households with demographic attributes resembles “reality”: in that if an identical survey were carried out with the synthetic population, it would bear results that statistically similar to the true population.
          </Text>
          <Text m={2} p={2} align='justify'>
           A synthetic population is a simplified individual-level representation of the actual population. This means that while every person is represented individually in it, not all of their attributes are included (for example, hair colour or shoe-size are deemed to be irrelevant for modelling epidemic spread, and are thus ignored, while the presence of commodities like diabetes would be included). As such, a synthetic population does not aim to be identical to the actual population, but instead attempts to match its various statistical distributions and correlations, thereby being sufficiently close to the true population to be used in modelling.<br></br>
           </Text>

           <Heading size="md" m={2} p={2}>An example</Heading>
           <Text m={2} p={2} align='justify'>

           In the table below, you can see an example of a section of a synthetic population. Each row represents an individual with a unique ID, as well as certain attributes. These attributes could be related to the individual themselves (like their gender, age, and height and so on), or their network (details pertaining to their homes, workplaces, and possibly schools). Additionally, the population could also contain information regarding the individual’s comorbidities (for example, whether they have diabetes or other preexisting conditions), if this is deemed relevant to the modelling exercise.
          </Text>

          <br></br>
                  <Box overflowX="auto" maxWidth="100%">
                <Table size='sm' maxW='500px'>
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
      </Box>
          <br>
          </br>

          <Text m={2} p={2} align='justify'>
              All of these attributes are strongly correlated with each other and a good synthetic population will ideally be able reproduce the correlations that occur in the real world. However, this is a monumental task; real world data is complex, and often contains many artifacts that need to be addressed.
          </Text>

          <Heading size="md" m={2} p={2}>Generating the population</Heading>
          <Text m={2} p={2} align='justify'>
            We use a variety of data sources to generate a population of individuals and households with demographic attributes that are statistically identical to real data. This population is generated using statistical methods and machine learning algorithms that are flexible enough to generate data at various administrative levels, ranging from small communities to states. The primary sources of data for these algorithms include the Census of India, the India Human Development Survey (IHDS), the National Sample Survey (NSS), the National Family Health Welfare Survey (NFHS), and the Gridded Population of the World (GPW).

            While the synthetic population should faithfully reproduce demographic statistics, it must also incorporate other realistic network structures, such as those appropriate to households and workplaces. (Otherwise, we could end up, for example, with ``families'' composed entirely of toddlers, or workplaces with strange mixes of professions.) Because different kinds of data respond well to different techniques, a hybrid process is used to scale up these datasets. First, the data is cleaned to remove obvious inconsistencies. Next, a customized hybrid of Iterative Proportional Fitting (IPF), Iterative Proportional Updating (IPU), and a specialized variant of a neural network, called Conditional-Tabular Generative Adversarial Network (CTGAN), is used to generate new data.

            Briefly, <Link style={{color:"blue"}} variant="outline" href="https://en.wikipedia.org/wiki/Iterative_proportional_fitting" target={"_blank"}>Iterative Proportional Fitting</Link> finds a joint distribution that matches the marginals, while trying to stay as close to the sample distribution as possible. <Link style={{color:"blue"}} variant="outline" href="" target={"_blank"}>Iterative Proportional Updating</Link> is a heuristic iterative approach which can simultaneously match or fit to multiple distributions (constraints). Finally, <Link style={{color:"blue"}} variant="outline" href="https://arxiv.org/abs/1907.00503" target={"_blank"}>Conditional-Tabular Generative Adversarial Networks</Link> is a method to model the tabular data distribution and sample rows from the distribution. A <Link style={{color:"blue"}} variant="outline" href="https://en.wikipedia.org/wiki/Generative_adversarial_network" target={"_blank"}>Generative Adversarial Network</Link> (GAN) uses two ``competing'' neural networks, the generator and the discriminator. The generator creates realistic samples with the goal that the discriminator should be unable to differentiate between a real sample and a generated sample. In this zero-sum game, capabilities of both the networks are enhanced iteratively. Critically, our techniques are designed to work seamlessly across data-scarce and data-rich areas; even if a particular area has error-prone or missing data, a synthetic population can still be generated, albeit of a lower quality.

            The synthetic population is generated using statistical methods and machine learning algorithms which are flexible enough to generate data at various administrative levels, i.e., at the level of cities, districts, states, or even the entire country, depending on the level of granularity required by the modeller. The primary sources of data for the generation of such a population are datasets from the Census of India, the India Human Development Survey (IHDS), the National Sample Survey (NSS), the National Family Health Welfare Survey (NFHS), and the Gridded Population of the World (GPW). A number of other sources are also used to fine-tune and validate the above datasets.
            </Text>

            <Heading size="sm" m={2} p={2}>The population generation process</Heading>

            <Text m={2} p={2} align='justify'>
              We use IPF to generate a base population, using census data for the demographics and the IHDS survey dataset for personal and household attributes. The base population  thus consists of individual data and household data. We assign each household to an administrative unit within a district.

              We also experimented with CTGAN to generate a base population. The major advantage of IPU over CTGAN is that IPU is capable of matching individual level and household level characteristics of an individual while making sure that members of the household have a realistic age and gender joint distribution.

              To assign job labels to individuals, the relevant data from the IHDS dataset is used. For the time-being, we classify individuals below the age of 18 as students, but could easily relax this assumption. A subset of the population is also assumed be home-bound. This subset consists of unemployed individuals, homemakers, infants and children under the age 3 and elderly people over the retirement age. We use data from the NSS survey to determine the percentage of adult males and females in a city who are home-bound. A random independent sample is drawn from a Bernoulli distribution with this gender-based marginal value as a parameter in order to decide if an individual will be home-bound or not.

              Each student in the population is assigned a school. Similarly, each working individual is assigned a workplace based upon their job label. We generate a synthetic latitude and longitude pair for each home, school and workplace in our dataset using <Link style={{color:"blue"}} variant="outline" href="https://gadm.org/" target={"_blank"}>GADM</Link> grid population density data. We select a subset of grid points that lie within a given geographical boundary and sample grid-points with replacement grid points from the subset, weighing each point by the population density in the associated grid. We add independent random noise drawn from a uniform distribution to the latitudes and longitudes, rejecting those samples which fall outside the given geographical boundary. We follow this process to generate synthetic geolocation data for households, schools and workplaces.

              To assign an individual a school, we sample from the list of schools within that geographical boundary, weighing each school by the inverse of the euclidean distance between it and the individual's home. This weighting factor increases the probability of assigning an individual a school that is closer to their home. We follow a similar method to assign workplaces to adults. Additionally, based on every individual's job label, a workplace is assigned at random from a suitable subset of allowed workplaces.

              A number of additional attributes are included in our synthetic population, including whether an individual uses public transport or whether an individual is an essential worker. These values are assigned using the individual's job label.
            </Text>

            <Heading size="sm" m={2} p={2}>Verifying the generated population</Heading>
            <Text m={2} p={2} align='justify'>

            To compare and verify the generated synthetic population with the real data, multiple metrics such as Statistical (CS-test, KS-test, Bhattacharya distance), Likelihood, and Machine Learning Efficacy Regression are used. For example, the Bhattacharya distance -- a distance measure to measure the statistical similarity between two samples in the same space -- is used to compare the various versions of synthetic population. The greater the overlap between two samples, the lower the Bhattacharya distance. As such, this metric can be used to measure similarity for the age-height and age-weight joint distributions.

            Critically, our techniques are designed to work seamlessly across data-scarce and data-rich areas; even if a particular area has error-prone or missing data, we can still generate a synthetic population, albeit of slightly poorer quality, but without affecting anything else.
          </Text>

          <Flex  p={4} mb={2}>

          <InnerLink to='/viz_engine'>
          <Button leftIcon={<AiOutlineArrowLeft/>}>
              Visualization Engine
            </Button>
          </InnerLink> 

          <Spacer></Spacer>

          <InnerLink to='/simulation_engine'>
          <Button rightIcon={<AiOutlineArrowRight/>}>
              Simulation Engine
            </Button>
          </InnerLink>
        </Flex>

        </Container>
        </Center>
        </ChakraProvider>

    </>
  )
}

export default SyntheticPopulation
