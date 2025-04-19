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
    </>
  );
}
