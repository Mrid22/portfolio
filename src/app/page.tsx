import React from "react";
import Image from "next/image";
import ProjectCard from "../components/ProjectCard";
import Hero from "@/src/assets/hero.jpg";

export default function App() {
  return (
    <>
      <section id="hero" className="w-screen h-screen box-border">
        <Image src={Hero} alt="Hero Image" fill className="object-fill"></Image>
      </section>
      <section
        id="projects"
        className="relative w-screen h-screen box-border px-2 grid grid-cols-2 gap-2"
      >
        <ProjectCard
          title="UI Design"
          description="My UI Design Projects"
          img_src={Hero}
          img_desc="UI design img"
          link="/projects/ui-design"
        ></ProjectCard>
        <ProjectCard
          title="Web Development"
          description="My Web Development Projects"
          img_src={Hero}
          img_desc="Web Dev img"
          link="/projects/web-development"
        ></ProjectCard>
        <ProjectCard
          title="Python"
          description="My Python Projects"
          img_src={Hero}
          img_desc="Python img"
          link="/projects/python"
        ></ProjectCard>
        <ProjectCard
          title="Android"
          description="My Android Apps"
          img_src={Hero}
          img_desc="Android img"
          link="/projects/android"
        ></ProjectCard>
      </section>
    </>
  );
}
