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
      <section
        id="projects"
        className="grid grid-cols-2 gap-1 p-0 w-screen h-screen"
      >
        <ProjectCard
          title="UI Design"
          img_src={Hero}
          img_desc="UI Design"
          description="My UI Design Projects"
          link="/projects/ui-design"
        ></ProjectCard>
        <ProjectCard
          title="Web Development"
          img_src={Hero}
          img_desc="Python Image"
          description="My Python Projects"
          link="/projects/python"
        ></ProjectCard>
      </section>
    </>
  );
}
