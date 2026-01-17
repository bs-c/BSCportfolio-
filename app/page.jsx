"use client";
import React, { useState } from "react";
import { Terminal, Cpu, Github, Linkedin, Mail } from "lucide-react";
import Navbar from "@/components/mainpage/Navbar";
import Projects from "@/components/mainpage/Projects";
import Capabilities from "@/components/mainpage/Capabilities";
import About from "@/components/mainpage/About";
import Hero from "@/components/mainpage/Hero";
import Contact from "@/components/mainpage/Contact";

/* --- 共用元件：區塊標題 --- */
const SectionTitle = ({ number, title, subtitle }) => (
  <div className="mb-16">
    <div className="flex items-center gap-4 mb-4">
      <span className="font-mono text-cyan-500 text-sm tracking-widest">
        0{number}.
      </span>
      <div className="h-1px w-12 bg-cyan-900/50"></div>
      <span className="font-mono text-blue-400 text-sm tracking-widest uppercase">
        {subtitle}
      </span>
    </div>
    <h2 className="text-3xl md:text-4xl font-bold text-slate-100">{title}</h2>
  </div>
);

/* --- Main Page Component --- */
export default function Portfolio() {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-200 selection:bg-cyan-500 selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <About SectionTitle={SectionTitle} />
        <Capabilities SectionTitle={SectionTitle} />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
