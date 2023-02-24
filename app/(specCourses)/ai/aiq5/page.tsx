"use client";
import React from "react";
import Link from "next/link";

import { Heading, Box, Text, Flex, Stack, Container } from "@chakra-ui/react";

export default function AiQ5() {
  return (
    <Box as="main" bg="#414150">
      <Container maxW="8xl" py="50px">
        <Flex
          maxW="1400"
          flexDir={{ base: "column", md: "row" }}
          px={{ base: "5", md: "10" }}
          align="start"
          mx="auto"

          //  pt={{ base: "20", md: "32" }}
        >
          <Box textAlign={"center"} color="white">
            <Text fontSize="40px" fontWeight={"bold"} color="back">
              Quarter V (Specialized Track)
            </Text>
            <Text fontSize="30px" fontWeight={"bold"} color="blue">
              AI-361: Deep Learning and MLOps
            </Text>
            <Text fontSize="30px">Duration: 13 Weeks</Text>
            <Text fontSize="32px" fontWeight={"bold"} color="red">
              Course Description:
            </Text>

            <Box
              textAlign={{base: "center", md :"justify"}}
              color="white"
              px="10px"
              fontSize="30px"
              py="32px"
            >
              <Text>
                This course will help you understand the capabilities,
                challenges, and consequences of deep learning and prepare you to
                participate in the development of leading-edge AI technology. We
                will finish the program by learning how to envision, create, and
                maintain integrated systems that run constantly in production.
                Production systems must manage constantly changing data, in
                stark contrast to typical machine learning modeling. The
                production system must also operate continuously at the lowest
                possible cost while delivering the highest possible performance.
              </Text>

              <Box textAlign="center" py="60px">
                <Text fontSize="32px" fontWeight={"bold"} color="black">
                  1. Deep Learning with Tensorflow
                </Text>

                <Text as="u" fontSize="20px" fontWeight={"bold"} color="red">
                  <Link href="https://www.amazon.com/Learning-Python-Second-Fran%C3%A7ois-Chollet/dp/1617296864/ref=sr_1_2">
                    Deep Learning with Python, Second Edition 2nd Edition
                  </Link>
                </Text>

                <Text fontSize="32px" fontWeight={"bold"} color="black">
                  2. Machine Learning Engineering for Production (MLOps) using
                  Terraform for CDK
                </Text>

                <Text as="u" fontSize="20px" fontWeight={"bold"} color="red">
                  <Link href="https://betterprogramming.pub/a-comprehensive-guide-to-mlops-infrastructure-as-code-iac-ef4c97742351">
                    A Comprehensive Guide to MLOps Terraform: Infrastructure As
                    Code(IaC)
                  </Link>
                </Text>
                <br />
                <Text as="u" fontSize="20px" fontWeight={"bold"} color="red">
                  <Link href="https://towardsdatascience.com/mlops-leveraging-aws-sagemaker-terraform-and-gitlab-e7d97eaa6dce">
                    MLOps leveraging AWS SageMaker and Terraform
                  </Link>
                </Text>
              </Box>
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
