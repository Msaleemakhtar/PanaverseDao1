"use client";

import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import CardDisplay from "./components/Coreprg";
import SpecCourse from "./components/SpecCourse";

export default function Home() {
  return (
    <>
      <Header />
      <CardDisplay />
      <SpecCourse />
    </>
  );
}
