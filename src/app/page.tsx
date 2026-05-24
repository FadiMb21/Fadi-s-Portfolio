"use client";

import dynamic from "next/dynamic";

import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Education from "@/components/sections/Education";
import Languages from "@/components/sections/Languages";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

// Lazy-load heavy visual effects — SSR disabled for canvas/mouse effects
const ParticleField = dynamic(
  () => import("@/components/effects/ParticleField"),
  { ssr: false }
);
const MouseGlow = dynamic(() => import("@/components/effects/MouseGlow"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <ParticleField />
      <MouseGlow />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Languages />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
