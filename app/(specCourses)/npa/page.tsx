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
  const { title, content, imageUrl, imageAlt } = props;
  return (
    <>
      <Card maxW="1000" maxH="1000" _hover={{ bg: "#FF6A3D" }}>
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
    content: "NPA-351: CCNA 200-301 Certification",
    imagePath: "/images/npa.jpg",
    imageAlt: "syllabus",
    url: "/npa/npaquarters",
  },
  {
    key:2,
    title: "Quarter V (Core)",
    content: "NPA-361: Network Programmability and Automation  ",
    imagePath: "/images/npa.jpg",
    imageAlt: "nnnnn",
    url: "/npa/npaquarters",
  },
];

export default function Npa() {
  return (
    <Box bg="#414150">
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        maxW="1440"
        align="center"
        alignContent={"center"}
        alignItems={{ base: "start", md: "center" }}
        pt={{ base: "5", md: "15" }}
        px={{ base: "5", md: "20" }}
        mx={"auto"}
      >
        <Box textAlign="center">
          <Heading py="60px" color="blue" fontSize="4xl" fontWeight="bold">
            Network Programmability and Automation Specialization
          </Heading>

          <Text py="30px" color="white" fontSize="3xl" fontWeight="bold">
            More than ever, network engineers are finding it challenging to
            complete their duties entirely manually. Network automation is now
            crucial due to new protocols, technologies, delivery models, and the
            requirement for enterprises to become more adaptable and agile. This
            course teaches network engineers how to automate systems with code
            using a variety of technologies and tools, including Linux, Python,
            APIs, and Git.
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
