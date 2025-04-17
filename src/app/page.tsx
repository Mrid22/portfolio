import React from "react";
import Image from "next/image";

export default function App() {
  return (
    <>
      <section id="hero" className="absolute top-0 left-0 w-full h-full">
        <Image
          src="../assets/hero.jpg"
          alt="Hero Image"
          fill
          className="object-cover"
        />
      </section>
    </>
  );
}
