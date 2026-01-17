"use client"; // 🔥 必須加入這行，因為需要用到 useState (點擊互動)
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
import { projectsData } from "../../lib/data"; // 請確認路徑正確

// 放在 import 下方，ProjectDetail 之前
const VideoPlayer = ({ src }) => {
  if (!src) return null;

  // --- 🔥 新增：智慧型 YouTube 網址轉換器 ---
  const getEmbedUrl = (url) => {
    // 檢查是否為 YouTube 網址
    if (!url.includes("youtube.com") && !url.includes("youtu.be")) return url;

    // 如果已經是 embed 網址，直接回傳
    if (url.includes("/embed/")) return url;

    // 嘗試從網址中抓取 Video ID
    let videoId = "";

    // 處理 youtube.com/watch?v=ID
    if (url.includes("v=")) {
      videoId = url.split("v=")[1].split("&")[0];
    }
    // 處理 youtu.be/ID (短網址)
    else if (url.includes("youtu.be/")) {
      videoId = url.split("youtu.be/")[1].split("?")[0];
    }

    // 回傳正確的嵌入格式
    return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
  };

  const finalSrc = getEmbedUrl(src);
  const isYoutube = finalSrc.includes("youtube.com/embed");

  return (
    <div className="my-12 group">
      <div className="flex items-center gap-2 mb-3 text-cyan-500 font-mono text-sm tracking-widest">
        <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
        LIVE_DEMO_SEQUENCE
      </div>

      <div className="relative w-full aspect-video bg-slate-900 border border-slate-800 rounded-lg overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)] group-hover:border-cyan-500/50 transition-colors">
        {/* 裝飾性掃描線 */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-cyan-500/30 z-10 animate-scan pointer-events-none"></div>

        {isYoutube ? (
          <iframe
            src={finalSrc}
            title="Project Demo"
            className="w-full h-full"
            // 🔥 加入這些權限設定非常重要，否則可能會無法播放
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <video controls className="w-full h-full object-cover">
            <source src={finalSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>

      <div className="mt-2 flex justify-between text-[10px] font-mono text-slate-600">
        <span>STATUS: PLAYBACK_READY</span>
        <span>MODE: HD_STREAM</span>
      </div>
    </div>
  );
};

export default function ProjectDetail({ params }) {
  const [selectedImage, setSelectedImage] = useState(null);
  // 1. 根據網址 ID 找到對應的專案資料
  const resolvedParams = use(params);
  const id = resolvedParams.id;
  const project = projectsData.find((p) => p.id === id);

  // 2. 如果找不到，回傳 404
  if (!project) {
    notFound();
  }

  // 設定對應的 Icon
  const CategoryIcon =
    {
      CIVIL: Box,
      DEV: Code,
      HYBRID: Cpu,
    }[project.category] || Code;

  return (
    <main className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-cyan-500/30">
      {/* --- 燈箱 (Lightbox) 區域 --- */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] bg-slate-950/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-10 cursor-zoom-out animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          {/* 關閉按鈕 */}
          <button className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors">
            <X size={32} />
          </button>

          {/* 大圖容器 */}
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
      {/* 頂部導航 */}
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

      <div className="max-w-4xl mx-auto px-6 pt-32 pb-24">
        {/* Header: 專案標題區 */}
        <header className="mb-16 border-b border-slate-800 pb-12">
          <div className="flex items-center gap-3 text-cyan-500 mb-4 font-mono text-sm tracking-widest">
            <CategoryIcon size={18} />
            <span>PROJECT_ID: {project.id.toUpperCase()}</span>
            <span className="px-2 py-0.5 border border-cyan-900 bg-cyan-950/30 text-[10px] rounded text-cyan-300">
              {project.status}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {project.title}
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed max-w-2xl">
            {project.subtitle || project.description}
          </p>

          {/* Links */}
          <div className="flex gap-4 mt-8">
            {project.github && (
              <a
                href={project.github}
                className="flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-700 rounded hover:border-cyan-500 hover:text-white transition-colors"
              >
                <Github size={18} /> Source Code
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                className="flex items-center gap-2 px-4 py-2 bg-cyan-600/10 border border-cyan-500/50 text-cyan-400 rounded hover:bg-cyan-600/20 transition-colors"
              >
                <ExternalLink size={18} /> Live Demo
              </a>
            )}
          </div>
        </header>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* 左欄：主要內容 */}
          <div className="md:col-span-2 space-y-12">
            {/* 挑戰 (Challenge) */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-red-400">01.</span> The Problem
              </h2>
              <div className="p-6 bg-slate-900/30 border-l-2 border-red-500/50 rounded-r-lg text-slate-400 leading-relaxed">
                {project.challenge ||
                  "Description of the technical challenge goes here..."}
              </div>
            </section>

            {/* 解決方案 (Solution) */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-cyan-400">02.</span> The Solution
              </h2>
              <div className="p-6 bg-slate-900/30 border-l-2 border-cyan-500/50 rounded-r-lg text-slate-400 leading-relaxed">
                <p>{project.solution}</p>
              </div>
              {/* 在這裡插入影片播放器 */}
              <VideoPlayer src={project.demoVideo} />
            </section>

            {/* 關鍵功能 (Key Features) */}
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
            {/* Tech Stack Widget */}
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

            {/* 專案圖片 (Placeholder) */}
            <div className="aspect-video bg-slate-900 border border-slate-800 rounded-lg flex items-center justify-center text-slate-600">
              {/* 取代原本的 [ IMAGE_PLACEHOLDER ] */}
              <div className="space-y-4">
                {project.images?.map((img, i) => (
                  <div
                    key={i}
                    onClick={() => setSelectedImage(img)}
                    className="group relative bg-slate-900 border border-slate-800 rounded-lg overflow-hidden"
                  >
                    {/* 圖片本身 */}
                    <img
                      src={img.src}
                      alt={img.caption}
                      className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                    />

                    {/* 科技感掃描線 (裝飾) */}
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-cyan-500/50 shadow-[0_0_10px_#06b6d4] translate-y-[-100%] group-hover:animate-scan"></div>

                    {/* 底部 Caption */}
                    <div className="absolute bottom-0 w-full bg-slate-950/80 border-t border-slate-800 p-2 flex justify-between items-center backdrop-blur-sm">
                      <span className="text-[10px] font-mono text-cyan-400 truncate">
                        {img.caption}
                      </span>
                      <span className="text-[8px] text-slate-600 border border-slate-700 px-1 rounded">
                        IMG_{i + 1}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
