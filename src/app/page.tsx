import React from "react";
import Image from "next/image";
import ProjectCard from "../components/ProjectCard";
import Hero from "@/src/assets/hero.jpg";

export default function App() {
  return (
    <>
      <section></section>
      <section id="projects" className="grid grid-cols-2">
        <ProjectCard
          title="UI Design"
          img_src={Hero}
          img_desc="UI Design"
          description="My UI Design Projects"
          link="/projects/ui-design"
        ></ProjectCard>
      </section>
    </>
  );
}
