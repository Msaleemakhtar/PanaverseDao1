"use client";
import React from "react";
import Link from "next/link";

import { Heading, Box, Text, Flex, Stack, Container } from "@chakra-ui/react";

export default function CncQ4() {
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
            <Text fontSize="40px" fontWeight={"bold"} color="blue">
              CN-351: Certified Kubernetes Application Developer (CKAD)
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
                Cloud-native architecture and technologies are an approach to
                designing, constructing, and operating workloads that are built
                in the cloud and take full advantage of the cloud computing
                model. Cloud-native technologies empower organizations to build
                and run scalable applications in modern, dynamic environments
                such as public, private, and hybrid clouds. Containers, service
                meshes, microservices, immutable infrastructure, and declarative
                APIs exemplify this approach.
              </Text>

              <Text py="30px">
                These techniques enable loosely coupled systems that are
                resilient, manageable, and observable. Combined with robust
                automation, they allow engineers to make high-impact changes
                frequently and predictably with minimal toil.
              </Text>
              <Text>
                Kubernetes is an open-source system for automating the
                deployment, scaling, and management of containerized
                applications. In this course, you will learn how to develop
                cloud applications using cloud-native technologies like
                Containers, Kubernetes, and CDK for Kubernetes.
              </Text>
              <Text>
                In this course we will learn to build smart homes with Amazon
                Alexa and Matter protocol.
              </Text>
            </Box>

            <Text fontSize="32px" fontWeight={"bold"} color="red">
              Course Outline:
            </Text>

            <Text as="u" fontSize="20px" fontWeight={"bold"} color="red">
              <Link href="https://www.amazon.com/Kubernetes-Running-Dive-Future-Infrastructure/dp/109811020X/ref=sr_1_3">
                Kubernetes: Up and Running: Dive into the Future of
                Infrastructure 3rd Edition
              </Link>
            </Text>
            <br />

            <Text as="u" fontSize="20px" fontWeight={"bold"} color="red">
              <Link href="https://cdk8s.io/">
                Cloud Development Kit for Kubernetes
              </Link>
            </Text>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
