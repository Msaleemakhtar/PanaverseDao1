"use client";
import React from "react";
import Link from "next/link";

import { Heading, Box, Text, Flex, Stack, Container } from "@chakra-ui/react";

export default function IotQ4() {
  return (
    <Box as="main" bg="#414150">
      <Container maxW="8xl" py="50px">
        <Flex
          maxW="1400"
          // flexDir={{ base: "column", md: "row" }}
          px={{ base: "5", md: "10" }}
          align="start"
          mx="auto"

         
        >
          <Box textAlign={"center"} color="white" px="10px">
            <Text fontSize="40px" fontWeight={"bold"} color="back">
              Quarter IV (Specialized Track)
            </Text>
            <Text fontSize="32px" fontWeight={"bold"} color="blue">
              AC-351: Ambient Computing with Voice Assistants and Matter Devices
            </Text>
            <Text fontSize="30px">Duration: 13 Weeks</Text>
            <Text fontSize="32px" fontWeight={"bold"} color="red">
              Course Description:
            </Text>

            <Box
              textAlign={{base: "center", md: "justify"}}
              color="white"
    
              fontSize="30px"
              py="32px"
            >
              <Text>
                Ambient computing, also commonly referred to as ubiquitous
                computing, is the concept of blending computing power into our
                everyday lives in a way that is embedded into our surroundings -
                invisible but useful. In a multi-device world, people don't want
                to spend their life fussing with technology. An ambient approach
                gets the tech out of your way so you can live your life while
                getting the help you need. It doesn't matter what device you're
                using, what context you're in, whether you're talking, typing,
                or tapping. The technology in your life works together
                seamlessly. Ambient computing uses all aspects of modern-day
                technology, including voice assistants, artificial intelligence,
                sensors, connectivity, cloud computing and more.
              </Text>

              <Text py="30px">
                If you were thinking that the IoT and ambient computing sound a
                lot alike, you aren't wrong; the two concepts are intertwined.
                IoT refers to the vast array of devices that connect to the
                internet to optimize their functionality, like smart sensors and
                smart speakers: ambient computing builds on that. Ambient
                computing focuses on the interaction between these devices once
                they are connected.
              </Text>
              <Text>
                Matter, the next-generation smart home standard, solves many
                smart home pain points while bringing all our IoT devices
                together. Some of the biggest tech companies are working
                together to make Matter a unified protocol for future smart
                homes. These companies include Apple, Amazon, and Google. This
                means Apple HomeKit, Amazon Alexa, Samsung SmartThings, Google
                Nest, and Samsung SmartThings will support the Matter standard
                by default for all new devices.
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
              <Link href="https://developer.amazon.com/en-US/alexa">
                Alexa Skill Developement
              </Link>
            </Text>

            <Text fontSize="30px">Alexa with Matter Protocol</Text>

            <Text as="u" fontSize="20px" fontWeight={"bold"} color="red">
              <Link href="https://developer.amazon.com/en-US/alexa/matter">
                Link1
              </Link>
            </Text>

            <br />

            <Text
              as="u"
              fontSize="20px"
              fontWeight={"bold"}
              color="red"
              pb="32px"
            >
              <Link href="https://developer.amazon.com/en-US/blogs/alexa/device-makers/2022/07/alexa-live-2022-ack-sdk-matter.html">
                Link1
              </Link>
            </Text>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
