import React from "react";
import Hero from "../components/Hero";
import Skills from "../components/Skills"; // small teaser on home
import Projects from "../components/Projects";

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <Projects />
    </>
  );
}
