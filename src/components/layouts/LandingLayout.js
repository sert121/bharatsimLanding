import React from "react";
import { Flex } from "@chakra-ui/react";
import Header from "../sections/Header";
import Footer from "../sections/Footer";
export default function LandingLayout(props) {
  return (
    <Flex
      direction="column"
      align="center"
      maxW={{ xl: "1600px" }}
      m="0 auto"
      {...props}
      bg="#392F74"
      minH="93vh"
    >
      <Header />
      {props.children}

    </Flex>
  );
}
