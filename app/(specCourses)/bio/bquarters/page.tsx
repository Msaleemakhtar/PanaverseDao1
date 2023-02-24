"use client";
import React from "react";
import Link from "next/link";

import { Heading, Box, Text, Flex, Stack, Container } from "@chakra-ui/react";

export default function BioQ4() {
  return (
    <Box as="main" bg="#414150">
      <Container maxW="8xl" py="50px">
        <Flex
          maxW="1400"
          // flexDir={{ base: "column", md: "row" }}
          px={{ base: "5", md: "10" }}
          align="start"
          mx="auto"

          //  pt={{ base: "20", md: "32" }}
        >
          <Box textAlign={"center"} color="white" px="10px">
            <Text fontSize="40px" fontWeight={"bold"} color="back">
              Quarter IV (Specialized Track)
            </Text>
            <Text fontSize="30px" fontWeight={"bold"} color="blue">
              Bio-351: Python for Biologists
            </Text>
            <Text fontSize="30px">Duration: 13 Weeks</Text>
            <Text fontSize="32px" fontWeight={"bold"} color="red">
              Course Description:
            </Text>
            <Text fontSize="30px">
              This course will focus on learning the basics of the Python
              programming language through genomics examples.
            </Text>

            <Text fontSize="32px" fontWeight={"bold"} color="red">
              Course Outline:
            </Text>

            <Text as="u" fontSize="20px" fontWeight={"bold"} color="red">
              <Link href="https://www.pythonforbiologists.org/">Textbook</Link>
            </Text>

            <Text fontSize="40px" fontWeight={"bold"} color="back" pt="100px">
              Quarter V (Specialized Track)
            </Text>
            <Text fontSize="30px" fontWeight={"bold"} color="blue">
              Bio-361: Bioinformatics with Python
            </Text>
            <Text fontSize="30px">Duration: 13 Weeks</Text>
            <Text fontSize="32px" fontWeight={"bold"} color="red">
              Course Description:
            </Text>
            <Text fontSize="30px">
              In this course we will discover modern, next-generation sequencing
              libraries from the powerful Python ecosystem to perform
              cutting-edge research and analyze large amounts of biological
              data.
            </Text>
            <Text fontSize="32px" fontWeight={"bold"} color="red">
              Course Outline:
            </Text>

            <Text
              as="u"
              fontSize="20px"
              fontWeight={"bold"}
              color="red"
              pb="32px"
            >
              <Link href="https://www.amazon.com/Bioinformatics-Python-Cookbook-applications-computational/dp/1803236426/ref=sr_1_1">
                Textbook
              </Link>
            </Text>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
