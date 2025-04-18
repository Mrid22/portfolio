import React from "react";
import Image from "next/image";
import Hero from "@/src/assets/hero.jpg";

export default function WebDevelopment() {
  return (
    <>
      <section id="hero" className="absolute top-0 left-0 w-full h-full">
        <Image
          src={Hero}
          alt="hero"
          className="object-cover w-full h-full"
          priority
        />
      </section>
    </>
  );
}
