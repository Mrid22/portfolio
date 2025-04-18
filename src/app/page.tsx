import React from "react";
import Image from "next/image";
import ProjectCard from "../components/ProjectCard";
import Hero from "@/src/assets/hero.jpg";

export default function App() {
  return (
    <>
      <section id="hero" className="absolute top-0 left-0 w-full h-full">
        <Image src={Hero} alt="Hero Image" fill className="object-cover" />
      </section>
      <section id="projects" className="grid grid-cols-2">
        <ProjectCard />
        <ProjectCard />
      </section>
    </>
  );
}
