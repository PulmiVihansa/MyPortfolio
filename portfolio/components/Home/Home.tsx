"use client";

import React from "react";
import Hero from "./Hero/Hero";
import About from "./About/About";
import SkillsSection from "./Skills";
import Projects from "./Projects/Projects";
import Certificates from "./Certificates";
import Education from "./Education/Education";
import ContactSection from "./Contact/Contact";
import Footer from "./Footer/Footer";
import StarParticles from "./Particles/StarParticles";

const Home = () => {
  return (
    <div className="relative overflow-hidden">
      {/* ⭐ Floating Stars */}
      <StarParticles />

      {/* Main Content */}
      <div className="relative z-10">
        <Hero />
        <About />
        <SkillsSection />
        <Projects />
        <Certificates />
        <Education />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
