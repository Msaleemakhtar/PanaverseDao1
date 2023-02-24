"use client";
import React from "react";
import Link from "next/link";

import { Heading, Box, Text, Flex, Stack, Container } from "@chakra-ui/react";

export default function AiQ4() {
  return (
    <Box as="main" bg="#414150">
      <Container maxW="8xl" py="50px">
        <Flex
          maxW="1400"
          // flexDir={{ base: "column", md: "row" }}
          px={{ base: "5", md: "10" }}
          align="start"
        

          //  pt={{ base: "20", md: "32" }}
        >
          <Box textAlign={{ base: "start", md: "center" }} color="white" >
            <Text fontSize="40px" fontWeight={"bold"} color="back">
              Quarter IV (Specialized Track)
            </Text>
            <Text fontSize="32px" fontWeight={"bold"} color="blue">
              AI-351: Developing Planet-Scale Intelligent APIs and Python
              Programming
            </Text>
            <Text fontSize="30px">Duration: 13 Weeks</Text>
            <Text fontSize="32px" fontWeight={"bold"} color="red">
              Course Description:
            </Text>

            <Box
              textAlign={"center"}
              color="white"
             
              fontSize="30px"
              py="32px"
            >
              <Text>
                Artificial intelligence is the simulation of human intelligence
                processes by machines, especially computer systems. The AI and
                Deep Learning Specialization is a foundational program that will
                aid in your comprehension of deep learning's potential,
                difficulties, and effects as well as equip you to take part in
                the creation of cutting-edge AI technology.
              </Text>

              <Text py="30px">
                We will start this course by understanding the fundamentals and
                use cases for AI and move on to building next-gen intelligent
                apps using OpenAI’s powerful models and Next.js 13.
              </Text>
              <Text py="30px">
                We'll conclude the course by learning about basic programming
                concepts using Python, such as lists, dictionaries, classes,
                functions, and loops, and practice writing clean and readable
                code with exercises for each topic. We'll also learn how to make
                your programs interactive and how to test your code safely
                before adding it to a project. It is a fast-paced, thorough
                introduction to programming with Python 3.10+ that will have you
                writing programs, solving problems, and making things that work
                in no time. In this quarter we will also learn Git, the
                distributed version control system. We will also review
                Git-based GitHub services.
              </Text>
            </Box>

            <Text fontSize="30px" fontWeight={"bold"} color="red">
              Course Outline:
            </Text>

            <Text fontSize="30px" fontWeight={"bold"} color="redblack">
              1. Introduction to Machine Learning, Data Science, and AI
            </Text>

            <Text as="u" fontSize="20px" fontWeight={"bold"} color="red">
              <Link href="https://www.coursera.org/learn/ai-for-everyone">
                AI for Everyone
              </Link>
            </Text>

            <Text fontSize="30px" fontWeight={"bold"} color="redblack">
              AI for Everyone Quiz in Week 3
            </Text>

            <Text fontSize="30px" fontWeight={"bold"} color="redblack">
              Total Questions: 60, Total Time: 75 minutes
            </Text>

            <Text fontSize="30px" fontWeight={"bold"} color="redblack">
              2. Building Next-Gen Intelligent Apps with OpenAI’s Powerful
              Models
            </Text>

            <Text fontSize="30px" fontWeight={"bold"} color="redblack">
              We will cover GPT-4, ChatGPT, etc. and Next.js 13
            </Text>

            <Text fontSize="30px" fontWeight={"bold"} color="redblack">
              3. Python Crash Course for TypeScript Developers
            </Text>

            <Text as="u" fontSize="20px" fontWeight={"bold"} color="red">
              <Link href="https://www.amazon.com/Python-Crash-Course-2nd-Edition/dp/1593279280/ref=sr_1_5">
                Python Crash Course, 2nd Edition: A Hands-On, Project-Based
                Introduction to Programming 2nd Edition
              </Link>
            </Text>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
