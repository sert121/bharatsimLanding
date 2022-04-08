import React from "react";
import { Flex } from "@chakra-ui/react";
import Header from "../sections/Header";
import Footer from "../sections/Footer";
export default function LandingLayout(props) {
  return (
    <Flex
      direction="column"
      align="center"
      m="0 auto"
      {...props}
      // bg="#392F74"
      minH="93vh"
    >
      <Header bg="#392F74" />
      {props.children}

    </Flex>
  );
}
