"use client";
import React from "react";
import NextLink from "next/link";
import Image from "next/image";

import {
  Heading,
  Box,
  Stack,
  Text,
  Card,
  CardBody,
  Flex,
  Grid,
  Link, Button
} from "@chakra-ui/react";

interface CoreprgCards {
  key:number;
  title: string;
  content?: string;
  imageUrl: string;
  imageAlt: string;
}

function CorePrg(props: CoreprgCards) {
  const { title, content, imageUrl, imageAlt } = props;
  return (
    <>
      <Card _hover={{ bg: "#FF6A3D" }}>
        <CardBody>
          <Image src={imageUrl} alt={imageAlt} width={500} height={500} />
          <Stack mt="6" spacing="3">
            <Heading size="lg">{title}</Heading>
            <Text fontWeight={"extrabold"}>{content}</Text>
          </Stack>
        </CardBody>
        <Button variant='solid' colorScheme='blue'>
        Explore...
      </Button>
      </Card>
    </>
  );
}

const CardsData = [
  {
    key:1,
    title: "Quarter IV (Core)",
    content:
      "W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps",
    imagePath: "/images/web3.jpeg",
    imageAlt: "syllabus",
    url: "/web3/webq4",
  },
  {
    key:2,
    title: "Quarter V (Core)",
    content:
      "MV-361: Developing Open Virtual and Augmented Metaverse..   ",
    imagePath: "/images/web3.jpeg",
    imageAlt: "nnnnn",
    url: "/web3/webq5",
  },
];

export default function Web3() {
  return (
    <Box bg="#414150">
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        overflow="hidden"
        maxW="1440"
        align="center"
        alignContent={"center"}
        alignItems={{ base: "start", md: "center" }}
        pt={{ base: "5", md: "15" }}
        px={{ base: "20", md: "20" }}
        mx={"auto"}
      >
        <Box mx="auto" textAlign="center">
          <Heading
            py="60px"
            color="blue"
            fontSize={{ base: "4xl", md: "6xl" }}
            fontWeight="bold"
          >
            Web 3.0 (Blockchain) and Metaverse Specialization
          </Heading>

          <Text py="30px" color="white" fontSize="3xl" fontWeight="bold">
            This Web 3.0 and Metaverse specialization focuses on developing
            full-stack Web 3.0 and Metaverse experiences for the next generation
            of the internet by specializing in building worlds that merge the
            best of cutting-edge decentralized distributed blockchains with 3D
            metaverse client experiences.
          </Text>

          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
              md: "repeat(2, 1fr)",
            }}
            maxW={"9xl"}
            gap={10}
            //mx="auto"
            pt="100px"
            pb="200px"
          >
            {CardsData.map((e) => (
              <Link as = {NextLink} key = {e.key}href={e.url}>
                <CorePrg
                  imageUrl={e.imagePath}
                  imageAlt={e.imageAlt}
                  title={e.title}
                  content={e.content}
                />
              </Link>
            ))}
          </Grid>
        </Box>
      </Flex>
    </Box>
  );
}
