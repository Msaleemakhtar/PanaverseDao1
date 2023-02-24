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
  Link,
  Button
} from "@chakra-ui/react";

interface CoreprgCards {
  key:number;
  title: string;
  content?: string;
  imageUrl: string;
  imageAlt: string;
}

function CorePrg(props: CoreprgCards) {
  const { title, content, imageUrl, imageAlt, key } = props;
  return (
    <>
      <Card _hover={{ bg: "#FF6A3D" }}>
        <CardBody>
          <Image src={imageUrl} alt={imageAlt} width={500} height={500} />
          <Stack mt="6" spacing="3">
            <Heading size="md">{title}</Heading>
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
    key :1,
    title: "Quarter I (Core)",
    content: "CS-101: Object-Oriented Programming using TypeScript",
    imagePath: "/images/1.png",
    imageAlt: "syllabus",
    url: "/quarter1",
  },
  {
    key:2,
    title: "Quarter II (Core)",
    content:
      "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps  ",
    imagePath: "/images/2.jpeg",
    imageAlt: "nnnnn",
    url: "/quarter2",
  },
  {
    key:3,
    title: "Quarter III (Core)",
    content:
      "$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development",
    imagePath: "/images/3.webp",
    imageAlt: "ddd",
    url: "/quarter3",
  },
];

export default function CardDisplay() {
  return (
    <Box bg="#414150">
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        maxW="1440"
        align="center"
        alignContent={"center"}
        alignItems={{ base: "center", md: "center" }}
        pt={{ base: "5", md: "10" }}
        px={{ base: "20", md: "20" }}
        mx={"auto"}
      >
        <Box  pb="25px" textAlign="center">
          <Heading fontWeight="bold" color = "white" pb = "16px">
            Core Courses (Common in All Specializations)
          </Heading>

          <Text pb="25px" color="white">
            Every participant of the program will start by completing the
            following three core courses:
          </Text>


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
              <Link key = {e.key} as = {NextLink} href={e.url}>
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
