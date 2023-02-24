"use client";
import React from "react";

import {
  Heading,
  Box,
  Text,
  Flex,
  Stack,
  Container,
  List,
  ListItem,
  OrderedList,
  HStack,
} from "@chakra-ui/react";

export default function IotQ5() {
  return (
    <Box as="main" bg="#414150">
      <Container maxW="8xl" py="50px">
        <Flex maxW="1400" px={{ base: "5", md: "10" }} align="start" mx="auto">
          <Box textAlign={"center"} color="white" px="10px">
            <Text fontSize="40px" fontWeight={"bold"} color="back">
              Quarter V (Specialized Track)
            </Text>
            <Text fontSize="30px" fontWeight={"bold"} color="blue">
              AC-361: Embedded Programming using C and Rust
            </Text>
            <Text fontSize="30px">Duration: 13 Weeks</Text>
            <Text fontSize="32px" fontWeight={"bold"} color="red">
              Course Description:
            </Text>
            <Text fontSize="28px" textAlign={{ base: "center", md: "justify" }}>
              This is an introductory course about using the C and Rust
              Programming Languages on "Bare Metal" embedded systems, such as
              Microcontrollers. We will start by introducing embedded systems
              and move on to learn the C++ and Rust programming languages. We'll
              learn about basic programming concepts using C and Rust, then we
              will explore key concepts in electronics, microcontrollers, and
              embedded programming. It is a fast-paced, thorough introduction to
              programming with C and Rust that will have you writing programs,
              solving problems, burning your code on microcontrollers, playing
              with GPIOs, and making things that work in no time.
            </Text>

            <Text fontSize="32px" fontWeight={"bold"} color="red" py="32px">
              Course Outline:
            </Text>

            <OrderedList
              fontSize="20px"
              fontWeight={"bold"}
              color="red"
              px={{ base: "2px", md: "32px" }}
              pb="40px"
            >
              <ListItem>
                Introduction to the Internet of Things and Embedded Systems
                (Weeks 1 and 2)
              </ListItem>
              <ListItem>
                The C Reference Book : The C programming language Embedded
                Programming book : Internet of things with ESP8266
              </ListItem>
              <ListItem>Introduction to C Part 1 (Weeks 3B, 4, and 5)</ListItem>
              <ListItem>C Programming Part 2 (Weeks 6 and 7)</ListItem>
              <ListItem>C Programming Part 2 (Weeks 6 and 7)</ListItem>
              <ListItem>
                Introduction to Embedded systems Part 1 (Weeks 8)
              </ListItem>
              <ListItem>
                Introduction to Embedded systems Part 2 (Weeks 9-12)
              </ListItem>
            </OrderedList>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
