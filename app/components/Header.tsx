"use client";
import React from "react";
import Link from "next/link";
import { Box, Flex, Text, Button, Container, Stack } from "@chakra-ui/react";
import Image from "next/image";
import Metaverse1 from "../../public/images/metaverse1.png";


export default function Header() {
  return (
    <>
      <Box as="main" bg="#414150">
        <Container maxW={"full"}>
          <Flex
            maxW={"full"}
            flexDir={{ base: "column", md: "row" }}
            pt={{ base: "5", md: "10" }}
            px={{ base: "5", md: "10" }}
            align="start"
            mx="auto"
          >
            <Box
              color="white"
              as="section"
              order={{ base: 2, md: 1 }}
              flex="1"
              textAlign={{ base: "center", md: "start" }}
              pb={{ base: 5, md: 10, lg: 10 }}
              pt={{ base: 5, md: 100, lg: 100 }}
           
            >
              <Text pb="25px" fontWeight={"bold"} fontSize={"2xl"}>
                Presidential Initiative for Artificial Intelligence and
                Computing(PIAIC)
              </Text>
              <Text
                color="#FF6A3D"
                fontWeight={{ base: "bold", md: "bold", lg: "bold" }}
                fontSize={{ base: "3xl", md: "6xl", lg: "6xl" }}
              >
                Certified Web 3.0 & Metaverse Developer
              </Text>

              <Text
               
                pt="12px"
                color="white"
                fontSize={{ base: "xl", md: "2xl", lg: "2xl" }}
              >
                A One and Quarter Years Panaverse DAO Earn as you Learn Program
                Getting Ready for the Next Generation of the Internet
                Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI),
                Cloud, Edge, Ambient Computing/IoT, Network Automation, and
                Bioinformatics Technologies.
              </Text>

              <Box mt={"32px"}>
                <Button
                  size="md"
                  height="40px"
                  width="100px"
                  border="2px"
                  borderColor="green.500"
                  bg="green.600"
                  fontSize="20px"
                  
                  color="white"
                  _hover={{
                    bg: "gray.400",
                    borderColor: "black",
                    color: "black",
                  }}
                >
                  <Link href={"https://portal.piaic.org/signup"}>Apply</Link>
                </Button>
              </Box>
            </Box>

            <Box as="section" order={{ base: 1, md: 2 }} flex="1">
              <Box
                maxW={{ base: "500px", md: "750", lg: "750" }}
                mx={{ base: 0, md: " auto" }}
                minW="150px"
              >
                <Image
                  src={Metaverse1}
                  alt="Metaverse"
                  width={2000}
                  height={2000}
                />
              </Box>
            </Box>
          </Flex>
        </Container>
      </Box>
    </>
  );
}
