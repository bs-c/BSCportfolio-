"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Folder,
  Github,
  ExternalLink,
  Code,
  Box,
  Cpu,
  LayoutGrid,
  List,
  Filter,
  X,
} from "lucide-react";
import { projectsData } from "@/app/lib/data";

// --- 共用樣式設定 (從外部引入或寫在這裡) ---
const getStatusConfig = (status) => {
  // ... (保留您之前的 getStatusConfig 程式碼) ...
  switch (status) {
    case "DEPLOYED":
      return {
        style: "bg-emerald-950/40 text-emerald-400 border-emerald-500/30",
        dot: "bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)]",
      };
    case "BETA":
      return {
        style: "bg-amber-950/40 text-amber-400 border-amber-500/30",
        dot: "bg-amber-400 animate-pulse",
      };
    case "PROTOTYPE":
      return {
        style: "bg-fuchsia-950/40 text-fuchsia-400 border-fuchsia-500/30",
        dot: "bg-fuchsia-400",
      };
    case "RESEARCH":
      return {
        style: "bg-blue-950/40 text-blue-400 border-blue-500/30",
        dot: "bg-blue-400",
      };
    case "EXPERIMENTAL":
      return {
        style: "bg-pink-950/40 text-pink-400 border-pink-500/30",
        dot: "bg-pink-400",
      };
    default:
      return {
        style: "bg-slate-900 text-slate-500 border-slate-800",
        dot: "bg-slate-600",
      };
  }
};

// --- 子元件：列表模式的一列 ---
const ProjectListRow = ({ project, onCategoryClick }) => {
  // 🔥 接收 onCategoryClick
  const config = getStatusConfig(project.status);

  return (
    <div className="group flex items-center gap-4 p-4 border-b border-slate-800/50 hover:bg-slate-900/80 transition-all duration-300 hover:border-l-2 hover:border-l-cyan-500">
      {/* Status */}
      <div className="w-24 shrink-0 flex items-center gap-2">
        <span className={`w-1.5 h-1.5 rounded-full ${config.dot}`}></span>
        <span
          className={`text-[10px] font-mono ${config.style.replace("border", "").replace("bg-", "text-")} opacity-70`}
        >
          {project.status}
        </span>
      </div>

      {/* Title (Link) */}
      <div className="w-1/4 min-w-[200px]">
        <Link href={`/projects/${project.id}`} className="block">
          <h3 className="text-sm font-bold text-slate-300 group-hover:text-cyan-400 transition-colors truncate cursor-pointer">
            {project.title}
          </h3>
        </Link>
      </div>

      {/* Category (Clickable Filter) */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onCategoryClick(project.category);
        }} // 🔥 點擊觸發篩選
        className="shrink-0 flex items-center gap-1 px-2 py-1 rounded border border-slate-800 bg-slate-950/50 text-[10px] font-mono text-slate-500 hover:text-cyan-400 hover:border-cyan-500/50 transition-colors"
      >
        {project.category === "CIVIL" && <Box size={12} />}
        {project.category === "DEV" && <Code size={12} />}
        {project.category === "HYBRID" && <Cpu size={12} />}
        {project.category}
      </button>

      {/* Tech Stack */}
      <div className="flex-1 flex flex-wrap gap-2 opacity-50 group-hover:opacity-100 transition-opacity">
        {project.tech.slice(0, 4).map((t, i) => (
          <span key={i} className="text-[10px] font-mono text-slate-500">
            {t}
            {i < 3 ? "," : ""}
          </span>
        ))}
      </div>

      <Link
        href={`/projects/${project.id}`}
        className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300"
      >
        <ExternalLink size={14} className="text-cyan-500" />
      </Link>
    </div>
  );
};

// --- 子元件：網格模式的卡片 ---
const ProjectCard = ({ project, onCategoryClick }) => {
  // 🔥 接收 onCategoryClick
  const config = getStatusConfig(project.status);

  return (
    <div className="block h-full group relative bg-slate-900/40 border border-slate-800 hover:border-cyan-500/50 rounded-lg p-6 transition-all duration-500 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] hover:-translate-y-1 overflow-hidden flex flex-col">
      {/* 🔥 背景圖片層 (預設隱藏，Hover 顯現) */}
      {project.cover && (
        <>
          <div className="absolute inset-0 z-0">
            <img
              src={project.cover}
              alt={project.title}
              className="w-full h-full object-cover opacity-0 group-hover:opacity-20 transition-opacity duration-500 grayscale group-hover:grayscale-0" // Hover 時出現並從黑白變彩色
            />
          </div>
          {/* 漸層遮罩，確保文字永遠清晰 */}
          <div className="absolute inset-0 z-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/40 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
        </>
      )}

      <div className="relative z-10 flex flex-col h-full">
        <div className="flex justify-between items-start mb-4">
          {/* Category Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              onCategoryClick(project.category);
            }} // 🔥 點擊觸發篩選
            className="p-2 bg-slate-950/80 backdrop-blur-sm rounded-md border border-slate-800 text-cyan-500 hover:bg-cyan-950/30 hover:border-cyan-500 transition-all"
            title={`Filter by ${project.category}`}
          >
            {project.category === "CIVIL" && <Box size={20} />}
            {project.category === "DEV" && <Code size={20} />}
            {project.category === "HYBRID" && <Cpu size={20} />}
          </button>

          {/* Status Tag */}
          <div
            className={`flex items-center gap-2 px-2 py-1 rounded border text-[10px] font-mono font-bold tracking-wider ${config.style}`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full ${config.dot} shadow-sm`}
            ></span>
            {project.status}
          </div>
        </div>

        <Link href={`/projects/${project.id}`} className="block flex-1">
          <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-cyan-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
            {project.description}
          </p>
        </Link>

        {/* Footer... */}
      </div>
    </div>
  );
};

// --- 🔥 主元件 ---
export default function Projects() {
  const [filter, setFilter] = useState("ALL"); // 狀態：目前篩選的類別
  const [viewMode, setViewMode] = useState("GRID"); // 狀態：網格或列表

  // 🔥 核心邏輯：篩選資料
  const filteredProjects = projectsData.filter((project) => {
    if (filter === "ALL") return true;
    return project.category === filter;
  });

  const tabs = ["ALL", "CIVIL", "DEV", "HYBRID"];

  return (
    <section
      id="projects"
      className="py-24 px-6 bg-slate-950 relative overflow-hidden min-h-screen"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header & Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-slate-800 pb-6">
          {/* Title */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
              <Folder className="text-cyan-500" /> Selected_Works
            </h2>
            <div className="flex items-center gap-2 text-sm text-slate-500 font-mono">
              <span>Showing {filteredProjects.length} projects</span>
              {filter !== "ALL" && (
                <span className="flex items-center gap-1 text-cyan-400">
                  / Filtered by [{filter}]
                  <button
                    onClick={() => setFilter("ALL")}
                    className="hover:text-white"
                  >
                    <X size={12} />
                  </button>
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* 🔥 分類篩選按鈕 (Filter Tabs) */}
            <div className="flex p-1 bg-slate-900 border border-slate-800 rounded-lg">
              {tabs.map((tab) => {
                const isActive = filter === tab;
                return (
                  <button
                    key={tab}
                    onClick={() => setFilter(tab)}
                    className={`
                      relative px-4 py-2 rounded text-[10px] font-mono font-bold tracking-widest uppercase transition-all
                      ${
                        isActive
                          ? "bg-cyan-500/10 text-cyan-400 shadow-[inset_0_0_10px_rgba(6,182,212,0.1)]"
                          : "text-slate-500 hover:text-slate-300 hover:bg-slate-800/50"
                      }
                    `}
                  >
                    {tab}
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-cyan-400"></span>
                    )}
                  </button>
                );
              })}
            </div>

            <div className="w-px h-8 bg-slate-800"></div>

            {/* 視圖切換按鈕 (View Toggle) */}
            <div className="flex p-1 bg-slate-900 border border-slate-800 rounded-lg">
              <button
                onClick={() => setViewMode("GRID")}
                className={`p-2 rounded transition-all ${viewMode === "GRID" ? "bg-slate-800 text-cyan-400" : "text-slate-500 hover:text-slate-300"}`}
              >
                <LayoutGrid size={16} />
              </button>
              <button
                onClick={() => setViewMode("LIST")}
                className={`p-2 rounded transition-all ${viewMode === "LIST" ? "bg-slate-800 text-cyan-400" : "text-slate-500 hover:text-slate-300"}`}
              >
                <List size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* 內容顯示區 */}
        <div className="min-h-[400px]">
          {/* 如果篩選結果為空 */}
          {filteredProjects.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20 text-slate-600 font-mono border border-dashed border-slate-800 rounded-lg">
              <Filter size={48} className="mb-4 opacity-50" />
              <p>NO_DATA_FOUND_IN_CATEGORY: {filter}</p>
            </div>
          )}

          {/* Grid Mode */}
          {viewMode === "GRID" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-500">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onCategoryClick={setFilter}
                /> // 傳入篩選函式
              ))}
            </div>
          )}

          {/* List Mode */}
          {viewMode === "LIST" && (
            <div className="flex flex-col border-t border-slate-800 animate-in fade-in slide-in-from-bottom-2 duration-500">
              {filteredProjects.map((project) => (
                <ProjectListRow
                  key={project.id}
                  project={project}
                  onCategoryClick={setFilter}
                /> // 傳入篩選函式
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
