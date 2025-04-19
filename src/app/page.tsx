import React from "react";
import Image from "next/image";
import ProjectCard from "../components/ProjectCard";
import Hero from "@/src/assets/hero.jpg";

export default function App() {
  return (
    <>
      <section id="hero" className="w-screen h-screen">
        <Image src={Hero} alt="Hero Image" fill></Image>
      </section>
      <section id="projects" className="w-screen h-screen p-1">
        <ProjectCard
          img_src={Hero}
          img_desc="UI design img"
          title="UI Design"
          description="My UI Design Projects"
          link="/projects/ui-design"
        ></ProjectCard>
      </section>
    </>
  );
}
