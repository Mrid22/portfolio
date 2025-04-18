import React from "react";
import Image from "next/image";
import ProjectCard from "../components/ProjectCard";
import Hero from "@/src/assets/hero.jpg";

export default function App() {
  return (
    <>
      <section id="hero" className="relative top-0 left-0 w-full h-full">
        <Image
          src={Hero}
          alt="Hero Image"
          fill
          className="relative top-0 left-0"
        />
      </section>
      <section id="projects" className="grid w-screen h-screen grid-cols-2">
        <ProjectCard />
        <ProjectCard />
      </section>
    </>
  );
}
