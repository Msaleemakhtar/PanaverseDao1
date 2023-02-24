"use client";
import React from "react";
import Link from "next/link";

import { Heading, Box, Text, Flex, Stack, Container } from "@chakra-ui/react";

export default function Q3() {
  return (
    <Box as="main" bg="#414150">
      <Container maxW="8xl" py="50px">
        <Flex
          maxW="1400"
          flexDir={{ base: "column", md: "row" }}
          px={{ base: "5", md: "10" }}
          align="start"
          mx="auto"
        >
          <Box textAlign={"center"} color="white" px="10px">
            <Text fontSize="32px" fontWeight= {"bold"} color = "back">
              Quarter III (Core)
            </Text>
            <Text fontSize="28px" fontWeight={"bold"} color = "blue">
              $-101: Dollar Making Bootcamp - Full-Stack Template and API
              Product Development
            </Text>
            <Text fontSize="28px">Duration: 13 Weeks</Text>
            <Text fontSize="28px" fontWeight={"bold"} color="red">
              Earn While You Learn Projects
            </Text>
            <Text fontSize="28px">
              1. Build Full-Stack Next.js 13 Jamstack Templates
            </Text>

            <Text textAlign="start" fontSize="26px">
              You will be assigned to build a template which we will sell on
              Theme Forest and Panaverse DAO marketplace. The Panaverse DAO will
              receive 25% share on the sale of the template which will be used
              to manage the platform. An additional 15% will be spent on
              marketing the template. 60% of the revenues will be distributed to
              the developer through the Panaverse DAO in the form of Panaverse
              tokens.
            </Text>

            <Text fontSize="30px" color="red">
              The Template Standard
            </Text>

            <Text fontSize="30px">2. Build QraphQL APIs</Text>

            <Text fontSize="26px">
              
              You will be assigned to build APIs for which you will sell
              subscriptions on the Panaverse DAO Marketplace. The Panaverse DAO
              will receive 25% share on the sale of the template which will be
              used to manage the platform. An additional 15% will be spent on
              marketing the template. 60% of the revenues will be distributed to
              the developer through the Panaverse DAO in the form of Panaverse
              tokens.
            </Text>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
