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
  key:number;
  title: string;
  content?: string;
  imageUrl: string;
  imageAlt: string;
}

function CorePrg(props: CoreprgCards) {
  const { key, title, content, imageUrl, imageAlt } = props;
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
    content: "Bio-351: Python for Biologists",
    imagePath: "/images/bio.jpg",
    imageAlt: "syllabus",
    url: "/bio/bquarters",
  },
  {
    key:2,
    title: "Quarter V (Core)",
    content: "Bio-361: Bioinformatics with Python ",
    imagePath: "/images/bio.jpg",
    imageAlt: "nnnnn",
    url: "/bio/bquarters",
  },
];

export default function Bio() {
  return (
    <Box bg="#414150">
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        overflow="hidden"
        maxW="1440"
        align="center"
        alignContent={"center"}
        alignItems={{ base: "center", md: "center" }}
        pt={{ base: "5", md: "15" }}
        px={{ base: "20", md: "20" }}
        mx={"auto"}
      >
        <Box textAlign="center">
          <Heading py="60px" color="blue" fontSize="40px" fontWeight="bold">
            Genomics and Bioinformatics Specialization
          </Heading>

          <Text py="30px" color="white" fontSize="30px" fontWeight="bold">
            Genomics is the study of the total genetic makeup of individual
            organisms, and how this genetic information is structured,
            functions, and has evolved; bioinformatics encompasses a diverse
            range of analytical methods and tools applied to genomic data. This
            Specialization focuses on performing complex bioinformatics analysis
            using the most essential Python libraries and applications..
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
              <Link as = {NextLink} key = {e.key}href={e.url}>
                <CorePrg
                key = {e.key}
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
