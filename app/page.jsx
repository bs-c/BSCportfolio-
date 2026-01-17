"use client";
import React, { useState } from "react";
import {
  Terminal,
  Cpu,
  Github,
  Linkedin,
  Mail,
  Globe,
  Hammer,
  Ruler,
  Snowflake,
  Motorbike,
  Waves,
} from "lucide-react";
import ThreeScene from "@/components/ThreeScene";
import Projects from "@/components/Projects";
import Capabilities from "@/components/Capabilities";

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

/* --- 1. Navigation Bar --- */
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a className="font-bold text-xl tracking-tighter text-white" href="#">
          BSC's &nbsp; PORTFOLIO<span className="text-cyan-500">_</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm font-mono text-slate-400">
          <a href="#about" className="hover:text-cyan-400 transition-colors">
            01. ABOUT
          </a>
          <a href="#services" className="hover:text-cyan-400 transition-colors">
            02. SERVICES
          </a>
          <a href="#projects" className="hover:text-cyan-400 transition-colors">
            03. WORK
          </a>
          <a href="#contact" className="hover:text-cyan-400 transition-colors">
            04. CONTACT
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-slate-300 font-mono text-sm"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "[ CLOSE ]" : "[ MENU ]"}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-slate-950 border-b border-slate-800 py-4 px-6 flex flex-col gap-4 font-mono text-sm text-slate-400">
          <a href="#about" onClick={() => setIsOpen(false)}>
            01. ABOUT
          </a>
          <a href="#services" onClick={() => setIsOpen(false)}>
            02. SERVICES
          </a>
          <a href="#projects" onClick={() => setIsOpen(false)}>
            03. WORK
          </a>
          <a href="#contact" onClick={() => setIsOpen(false)}>
            04. CONTACT
          </a>
        </div>
      )}
    </nav>
  );
};

/* --- 2. Hero Section --- */
const Hero = () => (
  <section className="relative min-h-screen flex items-center pt-20 border-b border-slate-900 bg-slate-950 overflow-hidden">
    <div
      className="absolute inset-0 opacity-10 pointer-events-none"
      style={{
        backgroundImage: "radial-gradient(#4b5563 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }}
    ></div>

    <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
      <div className="space-y-8">
        <div className="inline-flex items-center space-x-2 text-cyan-400 font-mono text-xs md:text-sm tracking-wider border border-cyan-900/50 bg-cyan-900/10 px-3 py-1 rounded">
          <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></span>
          <span>SYSTEM_ONLINE: CIVIL_DEV_HYBRID</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
          Structural Engineering.
          <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-600">
            Computational Design.
          </span>
          <br />
          Software Development.
        </h1>
        <p className="text-lg text-slate-400 max-w-xl border-l-2 border-slate-700 pl-6 leading-relaxed">
          I bridge the gap between <strong>Physical Structures</strong> and{" "}
          <strong>Digital Logic</strong>. Stop explaining physics to your
          developers—I build parametric tools and platforms that just work.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <a
            href="#projects"
            className="px-8 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-mono font-medium rounded transition-all shadow-[0_0_20px_rgba(8,145,178,0.3)] text-center"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-slate-700 text-slate-300 hover:border-cyan-500 hover:text-cyan-400 font-mono font-medium rounded transition-colors text-center"
          >
            Contact Me
          </a>
        </div>

        <div className="pt-8 flex flex-wrap gap-6 text-xs md:text-sm font-mono text-slate-500 border-t border-slate-800/50">
          <div className="flex items-center gap-2 text-slate-400 group relative">
            LOCATION: TW
          </div>
          <div className="flex items-center gap-2 text-slate-400 group cursor-help relative">
            <span>SIDE QUEST:</span>
            <div className="flex gap-1">
              {/* 滑雪 */}
              <div
                className="p-1.5 bg-slate-900 border border-slate-700 rounded text-cyan-400 hover:text-white hover:border-cyan-500 transition-all"
                title="Snowboarding"
              >
                <Snowflake size={14} />
              </div>
              {/* 重機 */}
              <div
                className="p-1.5 bg-slate-900 border border-slate-700 rounded text-blue-400 hover:text-white hover:border-blue-500 transition-all"
                title="Motorcycling"
              >
                <Motorbike size={14} />
              </div>
              {/* 潛水 */}
              <div
                className="p-1.5 bg-slate-900 border border-slate-700 rounded text-teal-400 hover:text-white hover:border-teal-500 transition-all"
                title="Scuba Diving"
              >
                <Waves size={14} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Visual */}
      <div className="hidden lg:flex h-[500px] w-full bg-slate-900/30 border border-slate-800 rounded-lg items-center justify-center relative overflow-hidden group">
        {/* --- 這裡原本是 Placeholder，現在換成 ThreeScene --- */}

        {/* 背景裝飾 (保留一點背景光暈) */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent pointer-events-none z-0"></div>

        {/* 格線裝飾 (保留，增加科技感) */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none z-0"
          style={{
            backgroundImage:
              "linear-gradient(0deg, transparent 24%, rgba(6, 182, 212, .1) 25%, rgba(6, 182, 212, .1) 26%, transparent 27%, transparent 74%, rgba(6, 182, 212, .1) 75%, rgba(6, 182, 212, .1) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(6, 182, 212, .1) 25%, rgba(6, 182, 212, .1) 26%, transparent 27%, transparent 74%, rgba(6, 182, 212, .1) 75%, rgba(6, 182, 212, .1) 76%, transparent 77%, transparent)",
            backgroundSize: "50px 50px",
          }}
        ></div>

        {/* 3D Canvas 層 (z-10 確保它在背景之上，並且可互動) */}
        <div className="absolute inset-0 z-10 cursor-move">
          <ThreeScene />
        </div>

        {/* UI 浮層 (放在 z-20，蓋在 Canvas 上面，顯示狀態) */}
        <div className="absolute bottom-4 right-6 text-right z-20 pointer-events-none">
          <p className="font-mono text-cyan-500 text-xs tracking-widest mb-1">
            Interactive_View
          </p>
          <p className="text-slate-600 text-[10px]">[ DRAG TO ROTATE ]</p>
        </div>
      </div>
    </div>
  </section>
);

/* --- 3. About Section --- */
const ExperienceLog = () => {
  //const [isExpanded, setIsExpanded] = useState(false);

  const experiences = [
    {
      year: "2024.08 - PRESENT",
      role: "Structural Engineer",
      company: "Arup, Taiwan",
      desc: "Specialized in structural design for diverse projects, including buildings, pedestrian bridges, and onshore substations for offshore wind power. Designed RC and steel members, connections, and foundations, and managed RFI responses. Additionally, developed automation tools for analysis software data integration and created custom design applications compliant with the latest RC and timber codes to optimize engineering workflows.",
    },
    {
      year: "2022.09 - 2024.05",
      role: "Development & Supervising Engineer",
      company: "Sinotech Engineering Consultants Ltd, Taiwan",
      desc: "A hybrid engineer combining Site Supervision and software development. Experienced in supervising the New Taipei City Wenzaizhen project and developing engineering software solutions, including CAD/BIM plugins, web apps for road alignment, and automation tools using C# and APIs.",
    },
    {
      year: "2021.07 - 2022.08",
      role: "Structural Engineer",
      company: "Point Structure Associates, Taiwan",
      desc: "Designed gravity and lateral systems for diverse structures (RC, steel, timber, bamboo) while developing automation tools and building parametric tools using Rhino(grasshopper) and Python.",
    },
    {
      year: "2020.09 - 2021.06",
      role: "Research Assistant",
      company: "National Taiwan University of Science and Technology, Taiwan",
      desc: "Participated in domestic Cross Laminated Timber (CLT) fire resistance experiments and analyzed its post-fire mechanical behavior.",
    },
  ];

  // 預設只顯示前 1 筆，展開後顯示全部
  //const displayed = isExpanded ? experiences : experiences.slice(0, 1);
  const displayed = experiences;

  return (
    <div className="mt-12 border border-slate-800 bg-slate-950/50 p-6 rounded-lg font-mono text-sm">
      <h3 className="text-cyan-500 mb-6 flex items-center gap-2">
        <span className="animate-pulse">_</span> SYSTEM_LOGS / EXPERIENCE
      </h3>

      <div className="space-y-8 relative border-l border-slate-800 ml-3 pl-8">
        {displayed.map((exp, index) => (
          <div key={index} className="relative mb-5">
            {/* 時間軸裝飾點 */}
            <div className="absolute -left-9.25 top-1.5 w-3 h-3 bg-slate-900 border border-cyan-500/50 rounded-full"></div>

            <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-1">
              <span className="text-cyan-400 font-bold">{exp.year}</span>
              <span className="text-slate-500 hidden sm:inline">|</span>
              <span className="text-slate-200 font-bold">{exp.role}</span>
            </div>
            <div className="mt-1 mb-1">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900 border border-slate-700/50 text-cyan-300 font-mono text-xs shadow-sm group-hover:border-cyan-500/50 transition-colors">
                <span className="text-slate-500">@</span>
                <span className="font-semibold tracking-wide">
                  {exp.company}
                </span>
              </span>
            </div>
            <p className="text-slate-300 leading-relaxed max-w-2xl">
              {exp.desc}
            </p>
          </div>
        ))}
      </div>

      {/* 展開/收合按鈕 */}
      {/*<button
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-8 text-xs text-cyan-500 hover:text-cyan-400 border-b border-dashed border-cyan-500/50 pb-1 transition-colors"
      >
        {isExpanded
          ? "[ COLLAPSE LOGS ]"
          : `[ LOAD OLDER LOGS (${experiences.length - 1} MORE) ]`}
      </button>*/}
    </div>
  );
};

const About = () => (
  <section id="about" className="py-24 bg-slate-950 px-6">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
      <div>
        <SectionTitle number="1" title="Background" subtitle="Who Am I" />
        <div className="space-y-6 text-slate-400 leading-relaxed">
          <p className="text-slate-400 mb-2 leading-relaxed">
            <span className="block text-white font-bold text-lg mb-2">
              Hi, I'm BSC.
            </span>
            Civil Engineer by training. Developer by passion.
          </p>
          <p className="mb-2">
            Inspired by the potential of automation in construction, I pivoted
            to <span className="text-cyan-400">bridge the software gap</span>{" "}
            myself.
          </p>
          <p>
            I combine deep domain knowledge with{" "}
            <span className="text-cyan-400">modern technologies</span> to build
            next-gen tools for{" "}
            <strong className="text-white">the AEC Industry</strong> and the
            future of the{" "}
            <strong className="text-white">Built Environment</strong>.
          </p>
        </div>
        <br />
        <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
          <Terminal size={20} className="text-cyan-500" /> Technical Stack
        </h3>
        <div className="grid grid-cols-2 gap-4">
          {/* Engineering Stack */}
          <div className="space-y-2">
            <span className="text-xs font-mono text-slate-500 uppercase">
              Engineering & Tools
            </span>
            <ul className="space-y-2">
              {[
                "SAP2000 / ETABS/SAFE",
                "Midas",
                "Rhino/Grasshopper",
                "SketchUp",
                "AutoCAD",
                "Revit",
                "FEM Analysis",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-slate-300 text-sm"
                >
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>{" "}
                  {item}
                </li>
              ))}
            </ul>
          </div>
          {/* Dev Stack */}
          <div className="space-y-2">
            <span className="text-xs font-mono text-slate-500 uppercase">
              Development
            </span>
            <ul className="space-y-2">
              {[
                "Python",
                "HTML/CSS/JS",
                "React",
                "Tailwind",
                "Node.js",
                "C#",
                "Unity",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-slate-300 text-sm"
                >
                  <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></span>{" "}
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
            {/* 這裡用一個畢業帽或證書的 icon */}
            <span className="text-cyan-500">🎓</span> Academic Credentials
          </h3>

          <div className="space-y-4 border-l-2 border-slate-800 pl-4">
            {/* 碩士學歷 */}
            <div className="relative group">
              <div className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 bg-slate-900 border border-slate-600 rounded-full group-hover:bg-cyan-500 group-hover:border-cyan-400 transition-colors"></div>
              <h4 className="text-slate-200 font-bold text-lg group-hover:text-cyan-400 transition-colors">
                M.S. in Architecture
              </h4>
              <div className="text-sm font-mono text-slate-500 mb-1">
                National Taiwan University of Science and Technology · Expected
                2026
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 bg-slate-900 border border-slate-600 rounded-full group-hover:bg-cyan-500 group-hover:border-cyan-400 transition-colors"></div>
              <h4 className="text-slate-200 font-bold text-lg group-hover:text-cyan-400 transition-colors">
                M.S. in Applied Mechanics
              </h4>
              <div className="text-sm font-mono text-slate-500 mb-1">
                National Taiwan University · 2020
              </div>
            </div>

            {/* 學士學歷 */}
            <div className="relative group">
              <div className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 bg-slate-900 border border-slate-600 rounded-full group-hover:bg-cyan-500 group-hover:border-cyan-400 transition-colors"></div>
              <h4 className="text-slate-200 font-bold text-lg group-hover:text-cyan-400 transition-colors">
                B.S. in Civil Engineering
              </h4>
              <div className="text-sm font-mono text-slate-500">
                Tamkang University · 2017
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <ExperienceLog />
      </div>
    </div>
  </section>
);

/* --- Contact Section --- */
const Contact = () => (
  <section
    id="contact"
    className="py-24 bg-slate-950 px-6 border-t border-slate-900"
  >
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
        Ready to Collaborate?
      </h2>
      <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
        Whether you need a custom engineering tool, a 3D web visualizer, or just
        want to talk about snowboarding, diving or motorcycling —my inbox is
        open.
      </p>

      <div className="flex justify-center gap-6 mb-16">
        {/* <a
          href="#"
          className="p-4 border border-slate-800 rounded-full hover:border-cyan-500 hover:text-cyan-400 text-slate-400 transition-all"
        >
          <Github size={24} />
        </a> */}
        <a
          href="https://www.linkedin.com/in/bo-sen-chuang-b3345b222"
          target="_blank"
          className="p-4 border border-slate-800 rounded-full hover:border-blue-500 hover:text-blue-500 text-slate-400 transition-all"
        >
          <Linkedin size={24} />
        </a>
        <a
          href="mailto:bsc.doken@gmail.com"
          className="p-4 border border-slate-800 rounded-full hover:border-purple-500 hover:text-purple-500 text-slate-400 transition-all"
        >
          <Mail size={24} />
        </a>
      </div>

      <footer className="text-slate-600 text-sm font-mono">
        &copy; {new Date().getFullYear()} Designed & Built by BSC.
      </footer>
    </div>
  </section>
);

/* --- Main Page Component --- */
export default function Portfolio() {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-200 selection:bg-cyan-500 selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Capabilities />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
