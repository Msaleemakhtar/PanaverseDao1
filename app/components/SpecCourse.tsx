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
  Container,
  HStack,
  Button, Link
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
            <Text fontWeight={"bold"}>{content}</Text>
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
    title: "Specialized Tracks",
    content: "Web 3.0 and Metaverse Specialization",
    imagePath: "/images/wb3.jpeg",
    imageAlt: "syllabus",
    url: "/web3",
  },
  {
    key:2,
    title: "Specialized Tracks",
    content: "Artificial Intelligence (AI) and Deep Learning Specialization",
    imagePath: "/images/ai.jpg",
    imageAlt: "syllabus",
    url: "/ai",
  },
  {
    key:3,
    title: "Specialized Tracks",
    content:
      " CNC Specialization(Containers, Kubernetes, and CDK for Kubernetes).",
    imagePath: "/images/cloudNative.jpg",
    imageAlt: "syllabus",
    url: "/cnc",
  },
  {
    key:4,
    title: "Specialized Tracks",
    content: "Network Programmability and Automation Specialization",
    imagePath: "/images/auto.jpg",
    imageAlt: "syllabus",
    url: "/npa",
  },
  {
    key:5,
    title: "Specialized Tracks",
    content: "Ambient Computing and IoT Specialization ",
    imagePath: "/images/iot.jpg",
    imageAlt: "syllabus",
    url: "/iot",
  },
  {
    key:6,
    title: "Specialized Tracks",
    content: "Genomics and Bioinformatics Specialization for Biologists ",
    imagePath: "/images/bio.jpeg",
    imageAlt: "syllabus",
    url: "/bio",
  },
];

export default function SpecCourse() {
  return (
    <Box bg="#414150">
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        maxW="1440"
        align="center"
        alignContent={"center"}
        alignItems="center"
        pt={{ base: "5", md: "20" }}
        px={{ base: "10", md: "20" }}
        mx={"auto"}
      >
        <Box mx="auto" pb="100" textAlign="start" color = "white">
          <Heading pb="10">Specialized Tracks:</Heading>

          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            }}
            maxW={"9xl"}
            gap={10}
            mx="auto"
          >
            {CardsData.map((e) => (
              <Link as = {NextLink} key={e.key}href={e.url}>
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
