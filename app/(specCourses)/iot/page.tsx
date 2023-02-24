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
  Button, 
  Link

} from "@chakra-ui/react";

interface CoreprgCards {
  key:number;
  title: string;
  content?: string;
  imageUrl: string;
  imageAlt: string;
}

function CorePrg(props: CoreprgCards) {
  const {key,  title, content, imageUrl, imageAlt } = props;
  return (
    <>
      <Card  _hover={{ bg: "#FF6A3D" }}>
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
    content: "AC-351: Ambient Computing with VA and Matter Protocol Devices",
    imagePath: "/images/iot.jpeg",
    imageAlt: "syllabus",
    url: "/iot/iotq4",
  },
  {
    key:2,
    title: "Quarter V (Core)",
    content:
      "AC-361: Embedded Programming using C and Rust  ",
    imagePath: "/images/iot.jpeg",
    imageAlt: "nnnnn",
    url: "/iot/iotq5",
  },
  
   
];

export default function Iot() {
  return (
    <Box   bg="#414150">
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
        <Box  textAlign="center">
          <Heading py = "60px" color= "blue" fontSize = {{base: "2xl", md : "3xl"}} fontWeight= "bold">Ambient Computing and IoT Specialization</Heading>

          <Text py= "30px" color= "white"  fontSize = "2xl" fontWeight= "bold">
        
          The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter Protocol, and Embedded Devices. 
          </Text>

          

          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
              md: "repeat(2, 1fr)",
            }}
            maxW={"9xl"}
            gap={15}
          
            pt= "100px"
            pb = "200px"
          >
            {CardsData.map((e) => (
              <Link as = {NextLink} key = {e.key} href={e.url}>
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
