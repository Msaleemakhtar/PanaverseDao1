"use client";
import Image from "next/image";
import { Heading, Box, Text, Flex, Container } from "@chakra-ui/react";


function About() {
  return (
    <>
      <Box bg="#414150">
        <Container maxW="1400">
          <Flex
            py="100px"
            px={{ lg: "50px", base: "20px" }}
            gap="30px"
            display={{ lg: "flex", base: "grid" }}
          >
            <Box flexBasis="50%">
           
              <Image
                src={"/President.webp"}
                width={500}
                height={400}
                alt="president Image"
              />
            </Box>

            <Box flexBasis="50%" fontWeight="bold" pt="20px">
              <Heading size="3xl" color="white">
                Dr. Arif Alvi
              </Heading>
              <Text color="teal.100" fontSize="20px" mt="10px">
                Dr. Arif Alvi was sworn in as the 13th President of Islamic
                Republic of Pakistan on 9th September 2018.
              </Text>
              <Text color="teal.100" fontSize="20px" mt="10px">
              
                Dr. Arif Alvi was born in 1949 and completed his early education
                in Karachi. He did his Bachelor of Dental Surgery (BDS) from De’
                Montmorency College of Dentistry, Lahore where he was declared
                the “Best Graduate”. He completed his Masters of Science in the
                field of Prosthodontics from University of Michigan (1975) and
                in Orthodontics from University of Pacific, San Francisco
                (1982). He was awarded fellowship ‘Diplomatic American Board of
                Orthodontists (1995)’. President Dr. Arif Alvi has been a
                renowned professional and has held many important positions in
                the field of Dentistry.
              </Text>
              <Text color="teal.100" fontSize="20px" mt="10px">
               
                He remained Dean of Orthodontics, College of Physicians and
                Surgeons of Pakistan, President, Pakistan Dental Association
                (1997-2001), Pakistan Association of Orthodontists (2005), Asia
                Pacific Dental Federation (2006-07) and Councilor of the World
                Dental Federation (2007-2013). Through his sheer hard work in
                the World Dental Federation, he was able to get the declaration
                of 20th March as World Oral Health Day. He is also an author of
                a book, theses, and many articles.
              </Text>
            </Box>
          </Flex>
        </Container>
      </Box>

      <Box bg="#414150">
        <Container maxW="1400">
          <Flex
            justifyContent=" start"
            py="100px"
            px={{ lg: "50px", base: "20px" }}
            gap="30px"
            display={{ lg: "flex", base: "grid" }}
          >
            <Box
              mt="-20px"
              flexBasis="70%"
              fontWeight="bold"
              pt="20px"
              order={{ base: 2, lg: 1 }}
            >
              <Heading size="3xl" color="white">
                Zia Khan
              </Heading>
              <Text color="teal.200" fontSize="21px" mt="10px">
                CEO of Panacloud, the world’s first Integrated API Ownership
                Economy, Crowdfunding, and Development Platform. Volunteer COO
                of PIAIC, an initiative by the President of Pakistan for AI and
                computing mass education. Mentor and software developer with 20+
                years of expertise in cloud and serverless computing, software
                design, project management, and API and App development. Expert
                in concept, business modeling & strategy development for
                startups, specializing in DeFi and token economics. Mentored and
                trained hundreds of thousands of developers. Triple masters
                degrees in business administration, engineering, and finance
                from Arizona State University. Master in Economics from KU.
                Certified Public Accountant and Certified Management Accountant
                in USA.
              </Text>
            </Box>
            <Box order={{ base: 1, lg: 2 }} flexBasis="30%">
             
              <Image
                src={"/Zia.webp"}
                width={1000}
                height={1000}
                alt="zia image"
              />
            </Box>
          </Flex>
        </Container>
      </Box>
    </>
  );
}

export default About;
