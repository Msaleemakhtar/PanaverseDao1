"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import AWs from "/public/images/aws.jpg";

import { Box, Text, VStack, Container } from "@chakra-ui/react";

export default function Q2() {
  return (
    <Box as="main" bg="#414150">
      <Container maxW="8xl" py="40px">
        <VStack>
          <Box textAlign="center" >
            <Text fontSize="40px" px="5px" color="white" fontWeight={"bold"}>
              Quarter II (Core)
            </Text>
            <Text fontSize="30px" color="white" fontWeight={"bold"}>
              W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Apps and
              APIs using Next.js 13 and Cloud Development Kit (CDK) for
              Terraform
            </Text>

            <Text fontSize="30px" color="blue" fontWeight={"bold"}>
              Course Description:
            </Text>

            <Text fontSize="28px" color="white" fontWeight={"bold"}>
              The objective of this course is to teach participants to develop
              customer-facing planet-scale Websites, Full-Stack Apps and
              templates, Dashboards, and Muti-Cloud Serverless APIs. By the end
              of the quarter, the participants will be able to develop and
              deploy web platforms like Facebook, Shopify, etc. The technologies
              covered in this course will include Next.js 13, Figma, Tailwind
              CSS, Chakra UI, tRPC, QraphQL, Prisma, Cockroachdb Serverless
              (PostgreSQL Compatible), AWS Serverless Technologies, and Cloud
              Development Kit for Terraform (CDKTF)
            </Text>
            <Text fontSize="30px" color="blue" fontWeight={"bold"}>
              Course Outline
            </Text>
            <Text fontSize="26px" color="red" fontWeight={"bold"}>
              Important Links
            </Text>
            <Text fontSize="30px" color="blue" fontWeight={"bold"}>
              Next.js 13 Web Development
            </Text>

            <Box fontSize="28px" py="2px" as="u" color="red">
              <Text>
                <Link href="https://beta.nextjs.org/docs">
                  Next 13 Official Documentation
                </Link>
              </Text>
              <Text>
                <Link href="https://beta.reactjs.org/learn">
                  Latest Learn React Official Website
                </Link>
              </Text>
              <Text>
                <Link href="https://github.com/panaverse/learn-nextjs">
                  Learn Next.js 13 Learning Repo
                </Link>
              </Text>
            </Box>

            <Text fontSize="50px" color="blue" fontWeight={"bold"}>
              Next.js 13 using Chakra UI (Remote Zoom Class)
            </Text>
            <Box fontSize="32px" as="u" color="red" py="2px">
              <Text>
                <Link href="https://www.freecodecamp.org/news/css-flexbox-com">
                  CSS Flexbox Explained Complete Guide to Flexible Containers
                  and Flex Items
                </Link>
              </Text>
              <Text>
                <Link href="https://chakra-ui.com/getting-started">
                  Chakra UI Docs
                </Link>
              </Text>
            </Box>

            <Text fontSize="30px" color="blue" fontWeight={"bold"}>
              UI/UX Design with Figma, TailwindCSS, and Chakra UI (Remote Zoom
              Class)
            </Text>
            <Box fontSize="28px" as="u" color="red" py="2px">
              <Text>
                <Link href="https://www.amazon.com/Designing-Prototyping-Interfaces-Figma-interactive/dp/180056418X/ref=sr_1_1_sspa">
                  Designing and Prototyping Interfaces with Figma: Learn
                  essential UX/UI design principles by creating interactive
                  prototypes for mobile, tablet, and desktop by Fabio Staiano
                </Link>
              </Text>
              <Text>
                <Link href="https://www.figma.com/community/file/971408767069651759">
                  Figma Design Kit for TailwindCSSChakra UI Figma Kit
                </Link>
              </Text>
            </Box>

            <Text fontSize="30px" color="blue" fontWeight={"bold"}>
              API Routes with Next.js (Remote Zoom Class)
            </Text>
            <Text fontSize="28px" as="u" color="red">
              <Link href="https://nextjs.org/docs/api-routes/introduction">
                API Routes
              </Link>
            </Text>

            <Text fontSize="30px" color="blue" fontWeight={"bold"}>
              APIs with Next.js and tRPC (Remote Zoom Class)
            </Text>
            <Box fontSize="28px" as="u" color="red" py="2px">
              <Text>
                <Link href="https://codevoweb.com/build-a-trpc-crud-api-example-with-next-js/">
                  Build a tRPC CRUD API Example with Next.js
                </Link>
              </Text>
              <Text>
                <Link href="https://brockherion.dev/blog/posts/stop-building-rest-apis-for-your-next-apps/">
                  Stop building REST APIs for your Next.js apps, use tRPC
                  instead
                </Link>
              </Text>
            </Box>

            <Text fontSize="50px" color="blue" fontWeight={"bold"}>
              Start from scratch with relational databases
            </Text>
            <Box fontSize="32px" as="u" color="red" py="2px">
              <Text>
                <Link href="https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-postgres">
                  SQL and Prisma
                </Link>
              </Text>

              <Text as="u" color="red">
                <Link href="https://www.youtube.com/watch?v=5hzZtqCNQKk">
                  SQL For Beginners Video Tutorial
                </Link>
              </Text>

              <Text as="u" color="red">
                <Link href="https://www.freecodecamp.org/news/dbms-and-sql-basics/">
                  Database Management Systems and SQL – Tutorial for Beginners
                </Link>
              </Text>
            </Box>

            <Text fontSize="30px" color="blue" fontWeight={"bold"}>
              Next.js 13 using TailwindCSS (Remote Zoom Class)
            </Text>
            <Text fontSize="28px" as="u" color="red">
              <Link href="https://pragprog.com/titles/tailwind2/modern-css-with-tailwind-second-edition/">
                Modern CSS with Tailwind, Second Edition by Noel Rappin
              </Link>
            </Text>

            <Text fontSize="30px" color="blue" fontWeight={"bold"}>
              AWS Application Composer (Remote Zoom Class)
            </Text>
            <Box fontSize="28px" as="u" color="red" py="2px">
              <Text>
                <Link href="https://www.youtube.com/watch?v=BujE_tik5r8">
                  What is AWS Application Composer?
                </Link>
              </Text>

              <Text>
                <Link href="https://www.youtube.com/watch?v=p411uh363jQ">
                  Event-driven apps with AWS Application Composer
                </Link>
              </Text>

              <Text>
                <Link href="https://aws.amazon.com/application-composer/">
                  Visually design and build serverless applications quickly
                </Link>
              </Text>
            </Box>

            <Text fontSize="30px" color="blue" fontWeight={"bold"}>
              Web 2.0 Projects
            </Text>
            <Box fontSize="28px" as="u" color="red" py="2px">
              <Text>
                <Link href="https://github.com/panaverse/nextjs-projects">
                  Next.js Projects
                </Link>
              </Text>

              <Text>
                <Link href="https://github.com/panaverse/styling-nextjs-projects">
                  Styling Next.js Projects using TailwindCSS and Chakra UI
                </Link>
              </Text>

              <Text>
                <Link href="https://github.com/ogzhanolguncu/min-todo">
                  Todo Full-Stack App
                </Link>
              </Text>

              <Text>
                <Link href="https://www.youtube.com/watch?v=nzJsYJPCc80">
                  Build a Twitter Clone
                </Link>
              </Text>
            </Box>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}
