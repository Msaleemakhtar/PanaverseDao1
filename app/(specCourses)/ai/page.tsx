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
  Button, Link
} from "@chakra-ui/react";

interface CoreprgCards {
  key: number;
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
      "AI-351: Developing Planet-Scale Intelligent APIs and Python Programming",
    imagePath: "/images/ai.jpeg",
    imageAlt: "syllabus",
    url: "/ai/aiq4",
  },
  {
    key:2,
    title: "Quarter V (Core)",
    content: "AI-361: Deep Learning and MLOps  ",
    imagePath: "/images/ai.jpeg",
    imageAlt: "nnnnn",
    url: "/ai/aiq5",
  },
];

export default function Ai() {
  return (
    <Box bg="#414150">
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        maxW="1440"
        align="center"
        alignContent={"center"}
        alignItems={{ base: "center", md: "center" }}
        pt={{ base: "5", md: "15" }}
        px={{ base: "5", md: "20" }}
        mx={"auto"}
      >
        <Box textAlign="center">
          <Heading py="40px" color="blue" fontSize="5xl" fontWeight="bold">
            Artificial Intelligence (AI) and Deep Learning Specialization
          </Heading>

          <Text py="30px" color="white" fontSize="3xl" fontWeight="bold">
            The AI and Deep Learning specialization focuses on building and
            deploying intelligent APIs using OpenAI models and building custom
            Deep Learning Tensorflow models.
          </Text>

          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
              md: "repeat(2, 1fr)",
            }}
            maxW={"9xl"}
            gap={15}
            mx="auto"
            pt="100px"
            pb="200px"
          >
            {CardsData.map((e) => (
              <Link as = {NextLink} key = {e.key} href={e.url}>
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
