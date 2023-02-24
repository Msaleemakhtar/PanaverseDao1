"use client";
import React from "react";
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Text,
  Grid,
  Icon,
  HStack,
} from "@chakra-ui/react";
import Image from "next/image";
import logo from "../../public/images/logo.png";
import { PhoneIcon, EmailIcon } from "@chakra-ui/icons";
import { TiSocialYoutube, TiSocialFacebook } from "react-icons/ti";
import { GoOctoface } from "react-icons/go";
import { SiDiscord } from "react-icons/si";
import Link from "next/link";

export default function Footer() {
  return (
    <Box bg="#414150">
      <Container maxW={"full"} py = "32px">
        <SimpleGrid
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
          spacing="30px"
          pt={"20px"}
         
          px={{ base: "none", md: "24" }}
        >
          <Box >
            <Heading pb="24px" fontSize={"3xl"} color="white">
              About Us
            </Heading>
            <Image src={logo} width={200} height={200} alt="panaverse" />
            <Text fontSize={"20px"} pt="10px" color= "black">
              Panaverse Dao is a world-leading centre of learning and teaching
              of Web3.O alongwith cutting edge technologies. Let's explore the
              Real Potential of Web3.O and Metaverse With Panaverse DAO
            </Text>
          </Box>

          <Box color="black" fontSize="24px"   >
            <Heading color="white" fontSize={"3xl"}>
              Contact Us
            </Heading>

            <HStack pt="18px">
              <PhoneIcon />
              <Text>: +92 308 2220203</Text>
            </HStack>
            <HStack pt="18px">
              <EmailIcon />
              <Link href="notify@piaic.org">education@piaic.org </Link>
            </HStack>
          </Box>

          <Box color="black"  >
            <Heading color="white" fontSize={"3xl"}>
              Follow Us
            </Heading>
            <Grid fontSize="24px">
              <HStack>
                <TiSocialFacebook />
                <Link href="https://www.facebook.com/piaic/">Facebook</Link>
              </HStack>
              <HStack>
                <TiSocialYoutube />
                <Link href="https://www.youtube.com/@panaverse">YouTube</Link>
              </HStack>
              <HStack>
                <GoOctoface />
                <Link href="https://github.com/panaverse">Github</Link>
              </HStack>
              <HStack>
                <SiDiscord />
                <Link href="https://discord.gg/YuEn7HgF">Discord</Link>
              </HStack>
            </Grid>
          </Box>
        </SimpleGrid>
      </Container>

      
    </Box>
  );
}
