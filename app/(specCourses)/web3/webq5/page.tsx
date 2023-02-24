"use client";
import React from "react";
import Link from "next/link";

import { Heading, Box, Text, Flex, Stack, Container } from "@chakra-ui/react";

export default function WEb3Q5() {
  return (
    <Box as="main" bg="#414150">
      <Container maxW="8xl" py="50px">
        <Flex
          maxW="1400"
          flexDir={{ base: "column", md: "row" }}
          px={{ base: "5", md: "10" }}
          align="start"

          //  pt={{ base: "20", md: "32" }}
        >
          <Box textAlign={"center"} color="white" px="10px">
            <Text fontSize="40px" fontWeight={"bold"} color="back">
              Quarter V (Specialized Track)
            </Text>
            <Text fontSize="32px" fontWeight={"bold"} color="blue">
              MV-361: Developing Planet-Scale Open Virtual and Augmented
              Metaverse Experiences
            </Text>
            <Text fontSize="30px">Duration: 13 Weeks</Text>
            <Text fontSize="32px" fontWeight={"bold"} color="red">
              Course Description:
            </Text>

            <Box
              textAlign={"center"}
              color="white"
              px="10px"
              fontSize="30px"
              py="32px"
            >
              <Text>
                The Web is the Metaverse. The metaverse requires an
                infrastructure that connects all of the metaverses so that we
                can travel between them. This is only achievable with open
                web-based metaverses. The internet and its browsers are magical.
                Federated but linked experiences connect pages, people,
                technology, businesses, standards, and nations. It's unlike
                anything else. The metaverse should replicate the best qualities
                of the web - it should just be the web. We just have to extend
                online responsive design from mobile to desktop to 3D, Augmented
                Reality, and Virtual Reality. This course will teach you how to
                build the Open Social Spatial Web with WebXR and WebGPU
                technologies.
              </Text>
            </Box>

            <Text fontSize="36px" fontWeight={"bold"} color="red">
              Course Outline:
            </Text>
            <Text fontSize="32px" fontWeight={"bold"} color="black">
              1. Open Metaverse Web Development
            </Text>

            <Text as="u" fontSize="24px" fontWeight={"bold"} color="red">
              <Link href="https://github.com/panaverse/metaverse-web">
                Open Metaverse Learning Repo
              </Link>
            </Text>
            <Text fontSize="28px" fontWeight={"bold"} color="black">
              Blender 3D asset Creation for the Metaverse (Remote Zoom Class)
            </Text>
            <Text fontSize="28px" fontWeight={"bold"} color="black">
              Blender development is being funded by heavyweights in the
              real-time 3D (RT3D) space such as Apple, Unity, AMD, Intel, Meta,
              NVIDIA, AWS, Epic Games, Adobe, Microsoft, and Decentraland. It is
              expected to become the standard asset creation tool for metaverse.
            </Text>

            <Box as="u" fontSize="26px" fontWeight={"bold"} color="red">
              <Text>
                <Link href="https://panaverse-mk.vercel.app/metaverse/Download%20https:/www.blender.org/download">
                  Blender 3.3+
                </Link>
              </Text>
              <Text>
                <Link href="https://www.youtube.com/playlist?list=PLjEaoINr3zgFX8ZsChQVQsuDSjEqdWMAD">
                  Blender 3.0 Beginner Tutorial
                </Link>
              </Text>
              <Text>
                <Link href="https://docs.google.com/document/d/1zPBgZAdftWa6WVa7UIFUqW_7EcqOYE0X743RqFuJL3o/edit">
                  Blender 3.0 Hotkey
                </Link>
              </Text>

              <Text>
                <Link href="https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561">
                  Blender Projects Textbook: Blender by Example 2nd Edition
                </Link>
              </Text>
              <Text>
                <Link href="https://www.amazon.com/Complete-Guide-Blender-Graphics-Animation/dp/103212167X/ref=sr_1_5">
                  Blender Textbook: The Complete Guide to Blender Graphics:
                  Computer Modeling & Animation 7th Edition
                </Link>
              </Text>
              <Text>
                <Link href="https://www.amazon.com/Complete-Guide-Blender-Graphics-Animation/dp/103212167X/ref=sr_1_5">
                  M. Blain
                </Link>
              </Text>
              <Text>
                <Link href="https://www.youtube.com/watch?v=H7T0SzdFHwg">
                  Best Hardware Performance for Blender Rendering
                </Link>
              </Text>
            </Box>

            <Text fontSize="32px" fontWeight={"bold"} color="black">
              Assignment 1
            </Text>

            <Text as="u" fontSize="24px" fontWeight={"bold"} color="red">
              <Link href="https://www.youtube.com/playlist?list=PLjEaoINr3zgFX8ZsChQVQsuDSjEqdWMAD">
                Build a 3D Donut using Blender 3 as shown in these video
                tutorials
              </Link>
            </Text>

            <Text fontSize="32px" fontWeight={"bold"} color="black">
              Assignment 2
            </Text>

            <Text as="u" fontSize="24px" fontWeight={"bold"} color="red">
              <Link href="https://www.youtube.com/playlist?list=PLjEaoINr3zgFX8ZsChQVQsuDSjEqdWMAD">
                Build a Viking Scene using Blender 3 as shown in chapter 2 of
                the Book [Blender by Example 2nd Edition]
              </Link>
            </Text>

            <Text fontSize="32px" fontWeight={"bold"} color="black">
              Assignment 3
            </Text>

            <Text as="u" fontSize="24px" fontWeight={"bold"} color="red">
              <Link href="https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561">
                Modeling a Time Machine using Blender 3 as shown in chapters 3
                and 4 of the Book Blender by Example 2nd Edition
              </Link>
            </Text>
            <Text fontSize="32px" fontWeight={"bold"} color="black">
              Assignment 4
            </Text>

            <Text as="u" fontSize="24px" fontWeight={"bold"} color="red">
              <Link href="https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561">
                Build a Modern Kitchen using Blender 3 as shown in chapters 5,
                6, and 7 of the Book Blender by Example 2nd Edition
              </Link>
            </Text>

            <Text fontSize="32px" fontWeight={"bold"} color="black">
              Assignment 5
            </Text>

            <Text as="u" fontSize="24px" fontWeight={"bold"} color="red">
              <Link href="https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561">
                Illustrating an Alien Hero with Grease Pencil as shown in
                chapter 8 of the Book Blender by Example 2nd Edition
              </Link>
            </Text>
            <Text fontSize="32px" fontWeight={"bold"} color="black">
              Assignment 6
            </Text>

            <Text as="u" fontSize="24px" fontWeight={"bold"} color="red">
              <Link href="https://www.youtube.com/watch?v=bpvh-9H8S1g">
                Build a 3D Sword in the Stone using Blender 3 as shown in these
                video tutorials
              </Link>
            </Text>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
