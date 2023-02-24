"use client";
import React from "react";
import Link from "next/link";

import { Heading, Box, Text, Flex, Stack, Container } from "@chakra-ui/react";

export default function NpaQuarters() {
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
            <Text fontSize="50px" fontWeight={"bold"} color="back">
              Quarter IV (Specialized Track)
            </Text>
            <Text fontSize="30px" fontWeight={"bold"} color="blue">
              NPA-351: CCNA 200-301 Certification
            </Text>
            <Text fontSize="30px">Duration: 13 Weeks</Text>
            <Text fontSize="32px" fontWeight={"bold"} color="red">
              Course Description:
            </Text>
            <Text fontSize="30px">
              This course will focus on learning the basics of the networking
              and preparing for the new Cisco Certified Network Associate (CCNA)
              exam. This comprehensive course focuses on the solutions and
              technologies needed to implement and administer a broad range of
              modern networking and IT infrastructure
            </Text>

            <Text fontSize="32px" fontWeight={"bold"} color="red">
              Course Outline:
            </Text>

            <Text as="u" fontSize="20px" fontWeight={"bold"} color="red">
              <Link href="https://www.amazon.com/CCNA-200-301-Official-Guide-Library/dp/1587147149/ref=sr_1_1">
                Textbook
              </Link>
            </Text>

            <Text fontSize="50px" fontWeight={"bold"} color="back" pt="100px">
              Quarter V (Specialized Track)
            </Text>
            <Text fontSize="30px" fontWeight={"bold"} color="blue">
              NPA-361: Network Programmability and Automation
            </Text>
            <Text fontSize="30px">Duration: 13 Weeks</Text>
            <Text fontSize="32px" fontWeight={"bold"} color="red">
              Course Description:
            </Text>
            <Text fontSize="30px">
              Traditional network management techniques can't be effectively
              automated and don't scale well. By implementing network
              programmability based on Application Programming Interfaces, this
              course will assist in overcoming issues of the future and help you
              develop the skills required for the Next-Generation Network
              Engineer.
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
              <Link href="https://www.amazon.com/Network-Programmability-Automation-Networking-Technology/dp/1587145146/ref=sr_1_3">
                Textbook
              </Link>
            </Text>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
