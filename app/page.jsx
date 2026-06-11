import React from "react";
import Navbar from "@/components/mainpage/Navbar";
import Projects from "@/components/mainpage/Projects";
import Capabilities from "@/components/mainpage/Capabilities";
import About from "@/components/mainpage/About";
import Hero from "@/components/mainpage/Hero";
import Contact from "@/components/mainpage/Contact";
import RecentLogs from "@/components/mainpage/RecentLogs";
import { getSortedPostsData } from "@/app/lib/posts";

export default function Portfolio() {
  const allPosts = getSortedPostsData();
  const recentPosts = allPosts.slice(0, 3);
  return (
    <div className="bg-bg min-h-screen text-primary selection:bg-accent/20 selection:text-accent">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Capabilities />
        <Projects />
        <RecentLogs posts={recentPosts} />
        <Contact />
      </main>
    </div>
  );
}
