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
    content: "CN-351: Certified Kubernetes Application Developer (CKAD)",
    imagePath: "/images/cnc.jpeg",
    imageAlt: "syllabus",
    url: "/cnc/cncq4",
  },
  {
    key:2,
    title: "Quarter V (Core)",
    content: "CN-361: Developing Multi-Cloud APIs using CDK for Terraform  ",
    imagePath: "/images/cnc.jpeg",
    imageAlt: "nnnnn",
    url: "/cnc/cncq5",
  },
];

export default function Cnc() {
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
        <Box mx="auto" textAlign="center">
          <Heading py="60px" color="blue" fontSize="3xl" fontWeight="bold">
            Cloud-Native Computing Specialization
          </Heading>

          <Text py="30px" color="white" fontSize="2xl" fontWeight="bold">
            The Cloud-Native Computing Specialization focuses on Containers,
            Kubernetes, and CDK for Kubernetes.
          </Text>

          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
              md: "repeat(2, 1fr)",
            }}
            maxW={"9xl"}
            gap={25}
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
