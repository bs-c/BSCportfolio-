"use client";
import React, { useState, use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Github,
  ExternalLink,
  Terminal,
  Cpu,
  Box,
  Code,
  CheckCircle,
  X,
  Maximize2,
} from "lucide-react";
import { projectsData } from "../../lib/data";
import { YouTubeEmbed } from "@next/third-parties/google";
import { getStatusConfig } from "@/app/lib/utils";

// --- VideoPlayer 元件 (保持不變) ---
const VideoPlayer = ({ src }) => {
  if (!src) return null;
  const getVideoId = (url) => {
    if (!url) return null;
    if (url.includes("v=")) return url.split("v=")[1].split("&")[0];
    if (url.includes("youtu.be/"))
      return url.split("youtu.be/")[1].split("?")[0];
    if (url.includes("/embed/")) return url.split("/embed/")[1].split("?")[0];
    return null;
  };
  const videoId = getVideoId(src);
  if (!videoId) {
    return (
      <div className="my-12 group">
        <video
          controls
          className="w-full h-full object-cover rounded-lg border border-slate-800"
        >
          <source src={src} type="video/mp4" />
        </video>
      </div>
    );
  }
  return (
    <div className="my-12 group">
      <div className="flex items-center gap-2 mb-3 text-cyan-500 font-mono text-sm tracking-widest">
        <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
        LIVE_DEMO_SEQUENCE
      </div>
      <div className="relative w-full aspect-video bg-slate-900 border border-slate-800 rounded-lg overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)]">
        <YouTubeEmbed videoid={videoId} style="width: 100%; height: 100%;" />
      </div>
    </div>
  );
};

export default function ProjectDetail({ params }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const resolvedParams = use(params);
  const id = resolvedParams.id;
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  const getHeaders = (cat) => {
    if (cat === "CIVIL") {
      return { section1: "The Challenge", section2: "The Execution" };
    }
    return { section1: "The Problem", section2: "The Solution" };
  };
  const headers = getHeaders(project.category);

  const CategoryIcon =
    {
      CIVIL: Box,
      DEV: Code,
      HYBRID: Cpu,
    }[project.category] || Code;

  return (
    <main className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-cyan-500/30">
      {/* --- Lightbox (保持不變) --- */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] bg-slate-950/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-10 cursor-zoom-out animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors">
            <X size={32} />
          </button>
          <div
            className="relative max-w-7xl max-h-full rounded-lg overflow-hidden border border-slate-700 shadow-2xl bg-slate-900"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.caption}
              className="w-full h-full object-contain max-h-[85vh]"
            />
            <div className="absolute bottom-0 w-full bg-slate-950/90 p-4 border-t border-slate-800 flex justify-between items-center">
              <span className="font-mono text-cyan-400 text-sm tracking-wide">
                {selectedImage.caption}
              </span>
              <span className="text-xs text-slate-600 font-mono">
                [ ESC_TO_CLOSE ]
              </span>
            </div>
          </div>
        </div>
      )}

      {/* --- Navbar (保持不變) --- */}
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur border-b border-slate-800 z-50">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center">
          <Link
            href="/#projects"
            className="flex items-center gap-2 text-sm font-mono text-cyan-500 hover:text-cyan-400 transition-colors"
          >
            <ArrowLeft size={16} /> [ RETURN_TO_ROOT ]
          </Link>
        </div>
      </nav>

      {/* 🔥🔥🔥 關鍵修改區域：Hero Section (紅框區域) 🔥🔥🔥
         這是一個獨立的容器，負責包住 Header 和 背景圖
      */}
      <section className="relative w-full border-b border-slate-800 bg-slate-900/20 overflow-hidden">
        {/* 1. 背景圖層：只存在於這個 section 內 */}
        {project.cover && (
          <div className="absolute inset-0 z-0 pointer-events-none">
            {/* 圖片：填滿整個 Hero 區塊 */}
            <img
              src={project.cover}
              alt="Header Background"
              className="w-full h-full object-cover opacity-50 blur-[2px] filter grayscale contrast-125 mix-blend-screen"
            />

            {/* 漸層遮罩：讓圖片底部稍微融入邊框 */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/80 to-slate-950"></div>
          </div>
        )}

        {/* 2. Header 內容層：原本的 Header 移到這裡 */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 pt-32 pb-16">
          <div className="flex items-center gap-3 text-cyan-500 mb-4 font-mono text-sm tracking-widest">
            <CategoryIcon size={18} />
            <span>PROJECT_ID: {project.id.toUpperCase()}</span>

            <span
              className={`flex items-center gap-2 px-2 py-0.5 rounded border ${getStatusConfig(project.status).style}`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full ${getStatusConfig(project.status).dot} shadow-sm`}
              ></span>
              {project.status}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {project.title}
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed max-w-2xl">
            {project.subtitle || project.description}
          </p>

          <div className="flex gap-4 mt-8">
            {project.github && (
              <a
                href={project.github}
                className="flex items-center gap-2 px-4 py-2 bg-slate-900/80 border border-slate-700 rounded hover:border-cyan-500 hover:text-white transition-colors backdrop-blur-sm"
              >
                <Github size={18} /> Source Code
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                className="flex items-center gap-2 px-4 py-2 bg-cyan-950/30 border border-cyan-500/50 text-cyan-400 rounded hover:bg-cyan-600/20 transition-colors backdrop-blur-sm"
              >
                <ExternalLink size={18} /> Live Demo
              </a>
            )}
          </div>
        </div>
      </section>

      {/* 🔥🔥🔥 下方內容區域 (純黑背景) 🔥🔥🔥
         不再被背景圖影響，保持乾淨
      */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* 左欄：主要內容 */}
          <div className="md:col-span-2 space-y-12">
            {/* Challenge / Problem */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-red-400">01.</span> {headers.section1}
              </h2>
              <div className="p-6 bg-slate-900/30 border-l-2 border-red-500/50 rounded-r-lg text-slate-400 leading-relaxed">
                {project.challenge || project.problem || "Description..."}
              </div>
            </section>

            {/* Solution / Execution */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-cyan-400">02.</span> {headers.section2}
              </h2>
              <div className="p-6 bg-slate-900/30 border-l-2 border-cyan-500/50 rounded-r-lg text-slate-400 leading-relaxed">
                <p>{project.solution}</p>
              </div>

              {project.demoVideo?.map((videourl, index) => (
                <VideoPlayer key={index} src={videourl} />
              ))}
            </section>

            {/* Key Features */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-6">
                Key Features
              </h2>
              <div className="grid gap-4">
                {project.features?.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-4 bg-slate-900 rounded border border-slate-800"
                  >
                    <CheckCircle
                      size={18}
                      className="text-cyan-500 mt-1 shrink-0"
                    />
                    <span className="text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* 右欄：側邊欄資訊 */}
          <aside className="space-y-8">
            <div className="p-6 bg-slate-900 border border-slate-800 rounded-lg">
              <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                <Terminal size={16} className="text-cyan-500" /> TECH_STACK
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs font-mono text-cyan-300 bg-cyan-950/30 px-2 py-1 rounded border border-cyan-900/50"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2 text-slate-500 font-mono text-xs mb-2">
                <Maximize2 size={12} /> SYSTEM_GALLERY
              </div>

              {project.images?.map((img, i) => (
                <div
                  key={i}
                  onClick={() => setSelectedImage(img)}
                  className="group relative bg-slate-900 border border-slate-800 rounded-lg overflow-hidden cursor-pointer hover:border-cyan-500/50 transition-all"
                >
                  <img
                    src={img.src}
                    alt={img.caption}
                    className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-cyan-500/50 shadow-[0_0_10px_#06b6d4] translate-y-[-100%] group-hover:animate-scan"></div>

                  <div className="absolute bottom-0 w-full bg-slate-950/80 border-t border-slate-800 p-2 flex justify-between items-center backdrop-blur-sm">
                    <span className="text-[10px] font-mono text-cyan-400 truncate max-w-[70%]">
                      {img.caption}
                    </span>
                    <span className="text-[8px] text-slate-600 border border-slate-700 px-1 rounded">
                      IMG_{i + 1}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
