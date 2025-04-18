import React from "react";
import Image from "next/image";
import ProjectCard from "../components/ProjectCard";
import Hero from "@/src/assets/hero.jpg";

export default function App() {
  return (
    <>
      <section id="hero" className="relative top-0 left-0 w-screen h-screen">
        <Image src={Hero} alt="Hero Image" fill className="top-0 left-0" />
      </section>
      <section
        id="projects"
        className="relative grid w-screen h-screen grid-cols-2 grid-rows-2 gap-5"
      >
        <ProjectCard
          title="UI Design"
          description="My UI Design projects"
          img_src={Hero}
          img_desc="picture for Ui design"
          link="/projects/ui-design"
        />
        <ProjectCard
          title="Python"
          description="My Python projects"
          img_src={Hero}
          img_desc="picture for Python"
          link="//projects/python"
        />
        <ProjectCard
          title="Web Development"
          description="My Web Development projects"
          img_src={Hero}
          img_desc="picture for Web Development"
          link="/projects/web-development"
        />
        <ProjectCard
          title="Nix OS"
          description="My Nix OS configuration"
          img_src={Hero}
          img_desc="picture for Nix  OS"
          link="/projects/nixos"
        />
      </section>
    </>
  );
}
