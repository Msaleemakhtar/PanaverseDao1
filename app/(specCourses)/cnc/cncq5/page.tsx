"use client";
import React from "react";
import Link from "next/link";

import { Heading, Box, Text, Flex, Stack, Container } from "@chakra-ui/react";

export default function CncQ5() {
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
              Quarter V (Specialized Track)
            </Text>
            <Text fontSize="40px" fontWeight={"bold"} color="blue">
              CN-361: Developing Multi-Cloud Apps using CDK for Terraform
            </Text>
            <Text fontSize="30px">Duration: 13 Weeks</Text>
            <Text fontSize="32px" fontWeight={"bold"} color="red">
              Course Description:
            </Text>

            <Box
              textAlign={"justify"}
              color="white"
              px="10px"
              fontSize="30px"
              py="32px"
            >
              <Text>
                Terraform lets you use the same workflow to manage multiple
                providers and handle cross-cloud dependencies. This simplifies
                management and orchestration for large-scale, multi-cloud
                infrastructures.
              </Text>

              <Text py="30px">
                Cloud Development Kit for Terraform (CDKTF) allows you to use
                familiar programming languages to define and provision
                infrastructure. This gives you access to the entire Terraform
                ecosystem without learning HashiCorp Configuration Language
                (HCL) and lets you leverage the power of your existing toolchain
                for testing, dependency management, etc.
              </Text>
            </Box>

            <Text fontSize="32px" fontWeight={"bold"} color="red">
              Course Outline:
            </Text>

            <Text as="u" fontSize="20px" fontWeight={"bold"} color="red">
              <Link href="https://developer.hashicorp.com/terraform/cdktf">
                CDK for Terraform
              </Link>
            </Text>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
