import React from "react";
import { Terminal, Cpu, Github, Linkedin, Mail } from "lucide-react";
import Navbar from "@/components/mainpage/Navbar";
import Projects from "@/components/mainpage/Projects";
import Capabilities from "@/components/mainpage/Capabilities";
import About from "@/components/mainpage/About";
import Hero from "@/components/mainpage/Hero";
import Contact from "@/components/mainpage/Contact";
import RecentLogs from "@/components/mainpage/RecentLogs";
import { getSortedPostsData } from "@/app/lib/posts";

/* --- 共用元件：區塊標題 --- */
const SectionTitle = ({ number, title, subtitle }) => (
  <div className="mb-16">
    <div className="flex  mb-4">
      <span className="font-mono text-blue-400 text-sm tracking-widest uppercase">
        {subtitle}
      </span>
    </div>
    <h2 className="text-3xl md:text-4xl font-bold text-slate-100">{title}</h2>
  </div>
);

/* --- Main Page Component --- */
export default function Portfolio() {
  const allPosts = getSortedPostsData();
  const recentPosts = allPosts.slice(0, 3);
  return (
    <div className="bg-slate-950 min-h-screen text-slate-200 selection:bg-cyan-500 selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <About SectionTitle={SectionTitle} />
        <Capabilities SectionTitle={SectionTitle} />
        <Projects />
        <RecentLogs posts={recentPosts} />
        <Contact />
      </main>
    </div>
  );
}
