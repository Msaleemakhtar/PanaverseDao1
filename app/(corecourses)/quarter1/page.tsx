"use client";
import React from "react";
import Link from "next/link";

import { Heading, Box, Text, Flex, Stack, Container } from "@chakra-ui/react";

export default function Q1() {
  return (
    <Box as="main" bg="#414150">
      <Container maxW="8xl" py="60px">
        <Flex
          maxW="1400"
          flexDir={{ base: "column", md: "row" }}
          px={{ base: "5", md: "10" }}
          align="start"
          mx="auto"
        >
          <Box textAlign="center" color="white">
            <Text fontSize="40px" fontWeight={"bold"} color="back">
              Quarter I (Core)
            </Text>
            <Text fontSize="32px" fontWeight={"bold"} color="blue">
              CS-101: Object-Oriented Programming using TypeScript
            </Text>
            <Text fontSize="30px">
              Duration: 13 Weeks Course Description: We will start the program
              by learning the fundamentals of Object-Oriented programming using
              JavaScript and TypeScript. We will also understand the latest Web
              trends i.e. Web 3.0 and Metaverse concepts and try to understand
              their working from the perspective of the users.
            </Text>
            <Text fontSize="30px" fontWeight={"bold"} color="red">
              Important Links:
            </Text>

            <Box
              fontSize="28px"
              fontWeight={"bold"}
              py="20px"
              my="20px"
              color="red"
              as="u"
            >
              <Text>
                <Link href="https://www.youtube.com/watch?v=57RKSZv-KQI&list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6">
                  HTML and CSS (Homework) Learn HTML by Hira Khan (Watch
                  Recorded Videos)
                </Link>
              </Text>
              <Text>
                <Link href="https://www.youtube.com/playlist?list=PLKvqnz8z1zWQSWIen_zUSEBmtqzPLuRob">
                  Learn CSS Intro by Hira Khan (Watch Recorded Videos)
                </Link>
              </Text>
              <Text>
                <Link href="https://docs.google.com/presentation/d/12C1s4UBTlR9nZNEkRE6aAuGeRA3s92jx-8nJKo9jdH4/edit#slide=id.p">
                  Web 3.0 and Metaverse Theory Introduction to Panaverse DAO
                </Link>
              </Text>
              <Text>
                <Link href="https://docs.google.com/presentation/d/1FSbr9aJwO0-fmZHqWy_eHO2N_jwJLmQCy4cG8rd4ctw/edit">
                  Web 3.0 User Guide
                </Link>
              </Text>
              <Text>
                <Link href="https://docs.google.com/presentation/d/1FSbr9aJwO0-fmZHqWy_eHO2N_jwJLmQCy4cG8rd4ctw/edit">
                  Complete Web 3 Assignments included in the Web 3 User Guide
                  Virtual and Augmented Metaverse User Guide
                </Link>
              </Text>
              <Text>
                <Link href="https://youtube.com/playlist?list=PLKvqnz8z1zWQdc0NSLknxmxBch5gLOqyo">
                  Fundamentals of JavaScript (ECMAScript 2022 Language
                  Specification) Learn JavaScript by Zeeshan Hanif (Watch
                  Recorded Videos)
                </Link>
              </Text>
              <Text>
                <Link href="https://www.amazon.com/JavaScript-Beginner-Professional-building-interactive/dp/1800562527/ref=sr_1_4">
                  Chapters 2-6, 13 of JavaScript from Beginner to Professional:
                  Learn JavaScript quickly by building fun, interactive, and
                  dynamic web apps, games, and pages
                </Link>
              </Text>
              <Text>
                <Link href="https://github.com/PacktPublishing/JavaScript-from-Beginner-to-Professional">
                  JavaScript Book Code
                </Link>
              </Text>
              <Text>
                <Link href="https://github.com/panaverse/typescript-node-projects/blob/main/getting-started-exercises.md">
                  Getting Started Exercises with JavaScript and Node.js
                </Link>
              </Text>
              <Text>
                <Link href="https://docs.google.com/presentation/d/1eOLJTN0FyVAw6lMUvA_XYLORKnudWXyzXsB6sg5oPIs/edit#slide=id.g165ecffdef6_216_7">
                  Fundamentals of JavaScript and Node.js Quiz Topics Covered in
                  the Quiz:
                </Link>
              </Text>
            </Box>

            <Text fontSize="30px">
              How to accept user input in your Node.js JavaScript programs, this
              will allow us to create interactive Node.js console programs using
              prompt-sync library. The last example in this presentation shows
              you how to use prompt-sync library in your Node.js programs:
            </Text>

            <Text as="u" color="red" fontSize="30px" fontWeight={"bold"}>
              <Link href="https://docs.google.com/presentation/d/1eOLJTN0FyVAw6lMUvA_XYLORKnudWXyzXsB6sg5oPIs/edit#slide=id.p">
                User Input in Node.js
              </Link>
            </Text>
            <Text textAlign="start" fontSize="30px">
              Note: After this point, we will do all our class work and
              exercises using Node.js in .mjs files. We will also be able to
              develop interactive Node.js console programs which will greatly
              help the students to learn. Using Arrays and Objects in Node.js
              Programs (chapter 3 of JavaScript from Beginner to Professional)
              Using if and if else statements, else if statements, Conditional
              ternary operators, and switch statements in Node.js programs
              (chapter 4 of JavaScript from Beginner to Professional) Using
              while loop, do while loop, for loop, for in, and for of loop in
              Node.js (chapter 5 of JavaScript from Beginner to Professional)
              Using Basic functions, Function arguments, Return, Variable scope
              in functions, Recursive functions, Nested functions, Anonymous
              functions, and Function callbacks in Node.js (chapter 6 of
              JavaScript from Beginner to Professional) Using Concurrency,
              Callbacks, Promises, async / await, and Event loop (chapter 13 of
              JavaScript from Beginner to Professional) JavaScript promises,
              mastering the asynchronous
            </Text>

            <Text as="u" color="red" fontSize="30px" fontWeight={"bold"}>
              <Link href="https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/what-is-asynchronous-in-javascript">
                Playground for Mastering promises and asynchronous
              </Link>
            </Text>

            <Text as="u" color="red" fontSize="30px" fontWeight={"bold"}>
              <Link href="https://dev.to/brayanarrieta/new-javascript-features-ecmascript-2022-with-examples-4nhg">
                New JavaScript Features in ECMAScript 2022 and 2021
              </Link>
            </Text>

            <Text pt="32px" fontSize="40px" fontWeight={"bold"} color="blue">
              Object-Oriented Programming with TypeScript Chapters 1-11 of
              Learning
            </Text>
            <Box
              fontSize="28px"
              fontWeight={"bold"}
              py="20px"
              my="20px"
              as="u"
              color="red"
            >
              <Text>
                <Link href="https://www.amazon.com/Learning-TypeScript-Development-Type-Safe-JavaScript/dp/1098110331/ref=sr_1_1">
                  TypeScript: Enhance Your Web Development Skills Using
                  Type-Safe JavaScript
                </Link>
              </Text>
              <Text>
                <Link href="https://github.com/panaverse/learn-typescript">
                  Learning Repository In Class
                </Link>
              </Text>
              <Text>
                <Link href="https://www.learningtypescript.com/">
                  Companion projects and articles for Learning TypeScript
                </Link>
              </Text>
              <Text>
                <Link href="https://panaverse-mk.vercel.app/quarter1">
                  Homework Project
                </Link>
              </Text>
            </Box>

            <Text fontSize="32px" fontWeight={"bold"} color="blue" pt="32px">
              Fundamentals of TypeScript Quiz TypeScript Professional
              Proficiency Quiz TypeScript for React Minimal TypeScript Crash
              Course For React With Interactive Code Exercises
            </Text>
            <Text
              as="u"
              color="red"
              fontSize="30px"
              fontWeight={"bold"}
              bg="white"
            >
              <Link href="https://profy.dev/article/react-typescript">
                Exercises
              </Link>
            </Text>

            <Text fontSize="40px" fontWeight={"bold"} color="blue" pt="32px">
              Quarter Break Assignments and Quizzes During the Quarter Break, we
              do the following
            </Text>
            <Box
              fontSize="28px"
              fontWeight={"bold"}
              py="20px"
              as="u"
              color="red"
            >
              <Text>
                <Link href="https://github.com/panaverse/learn-nextjs/tree/main/assignment00_cloud_to_edge">
                  Assignment: 1
                </Link>
              </Text>
              <Text>
                <Link href="https://github.com/panaverse/learn-nextjs/tree/main/assignment01_todo_app">
                  Assingment: 2
                </Link>
              </Text>
              <Text>
                <Link href="https://github.com/panaverse/styling-nextjs-projects/tree/main/project00_pricing_ui">
                  Assingment: 3
                </Link>
              </Text>
              <Text>
                <Link href="https://docs.google.com/document/d/13Z4tMKQmZpMEsOc1Y_qAXbOstRolGIFupHxQFgAFl98/edit">
                  4. Build a Panaverse DAO Syllabus Website using Next.js 13
                  given the content from the following document:
                </Link>
              </Text>
              <Text>
                <Link href="https://docs.google.com/document/d/13Z4tMKQmZpMEsOc1Y_qAXbOstRolGIFupHxQFgAFl98/edit">
                  5. Build a new PIAIC Website using Next.js 13 given the
                  content from the current PIAIC Website and from the following
                  document:
                </Link>
              </Text>
            </Box>
            <Text fontSize="30px" fontWeight={"bold"} color="blue" pt="32px">
              The best-developed Website will be hosted on www.piaic.org domain.
              After completing the above Five Assignments everyone will appear
              in the following two Quizzes covering Github and TypeScript:
            </Text>

            <Text fontSize="30px" fontWeight={"bold"} color="black">
              Fundamentals of Version Control with Git Quiz Version Control
              using Git and GitHub By Sir Zeeshan Hanif
            </Text>

            <Text
              as="u"
              color="red"
              fontSize="28px"
              fontWeight={"bold"}
              bg="white"
            >
              <Link href="https://www.youtube.com/playlist?list=PLKueo-cldy_HjRnPUL4G3pWHS7FREAizF">
                (Watch Recorded Videos)
              </Link>
            </Text>

            <Text fontSize="30px" fontWeight={"bold"} color="blue" pt="32px">
              Chapters 1, 2, 3, and 4 Learn Version Control with Git: A
              step-by-step course for the complete beginner by Tobias Günther We
              will also cover these readings:
            </Text>

            <Box
              fontSize="28px"
              fontWeight={"bold"}
              py="32px"
              color=" red"
              as="u"
            >
              <Text>
                <Link href="https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github">
                  Markdown Basics: Github
                </Link>
              </Text>
              <Text>
                <Link href="https://stackoverflow.com/questions/5009600/difference-between-fork-and-branch-on-github">
                  Difference between fork and branch on github
                </Link>
              </Text>
              <Text>
                <Link href="https://stackoverflow.com/questions/3329943/what-are-the-differences-between-git-branch-fork-fetch-merge-rebase-and-clon">
                  Git branch fork fetch merge rebase and clone what are the
                  differences
                </Link>
              </Text>
              <Text>
                <Link href="https://git-scm.com/book/en/v2/Git-Branching-Rebasing">
                  Git Branching Rebasing
                </Link>
              </Text>
              <Text>
                <Link href="https://git-scm.com/book/en/v2/Git-Branching-Remote-Branches#Tracking-Branches">
                  Git Branching Remote Branches & Tracking Branches
                </Link>
              </Text>
              <Text>
                <Link href="https://docs.github.com/en/get-started/quickstart/set-up-git">
                  Git Branching Remote Branches & Tracking Branches
                </Link>
              </Text>
              <Text>
                <Link href="https://www.datacamp.com/courses/introduction-to-git">
                  Homework:
                </Link>
              </Text>
              <Text>
                <Link href="https://www.kdnuggets.com/2022/11/git-data-science-cheatsheet.html">
                  Git Cheatsheet
                </Link>
              </Text>
            </Box>
            <Text fontSize="40px" fontWeight={"bold"} color="black">
              Git Quiz Total Questions: 32, Total Time: 75 minutes
            </Text>
            <Text fontSize="32px" fontWeight={"bold"} color="black">
              TypeScript Proficiency Quiz Total Questions: 63 Duration: 120
              minutes
            </Text>

            <Text as="u" color="red" fontSize="28px" fontWeight={"bold"}>
              <Link href="https://github.com/panaverse/learn-typescript">
                Study Material:
              </Link>
            </Text>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
