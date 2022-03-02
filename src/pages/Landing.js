import React from "react";
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
} from '@chakra-ui/react';
import Hero from "../components/sections/Hero";
import LandingLayout from "../components/layouts/LandingLayout";
import LandingHero from "./LandingHero";
import Footer from "../components/sections/Footer";
import theme from '../theme.js';
export default function Landing() {
  return (
    <ChakraProvider theme={theme}>
    <LandingLayout>
      {/* <Hero
        title="Bharatsim"
        subtitle="This is the subheader section where you describe the basic benefits of your product"
        image=""
        ctaText="Create your account now"
        ctaLink="/signup"
      /> */}
      <LandingHero/>
    </LandingLayout>
    <Footer />
    </ChakraProvider>
  );
}
