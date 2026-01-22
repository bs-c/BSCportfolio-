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
  Layers, // 新增 Layers icon
} from "lucide-react";
import { projectsData } from "@/app/lib/data";
import { getStatusConfig } from "@/app/lib/utils";

// --- 子元件：列表模式的一列 (保持不變) ---
const ProjectListRow = ({ project, onCategoryClick }) => {
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
        }}
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

// --- 子元件：網格模式的卡片 (保持不變) ---
const ProjectCard = ({ project, onCategoryClick }) => {
  const config = getStatusConfig(project.status);

  return (
    <div className="block h-full group relative bg-slate-900/40 border border-slate-800 hover:border-cyan-500/50 rounded-lg p-6 transition-all duration-500 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] hover:-translate-y-1 overflow-hidden flex flex-col">
      {/* 背景圖片層 */}
      {project.cover && (
        <>
          <div className="absolute inset-0 z-0">
            <img
              src={project.cover}
              alt={project.title}
              className="w-full h-full object-cover opacity-0 group-hover:opacity-20 transition-opacity duration-500 grayscale group-hover:grayscale-0"
            />
          </div>
          <div className="absolute inset-0 z-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/40 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
        </>
      )}

      <div className="relative z-10 flex flex-col h-full">
        <div className="flex justify-between items-start mb-4">
          <button
            onClick={(e) => {
              e.preventDefault();
              onCategoryClick(project.category);
            }}
            className="p-2 bg-slate-950/80 backdrop-blur-sm rounded-md border border-slate-800 text-cyan-500 hover:bg-cyan-950/30 hover:border-cyan-500 transition-all"
            title={`Filter by ${project.category}`}
          >
            {project.category === "CIVIL" && <Box size={20} />}
            {project.category === "DEV" && <Code size={20} />}
            {project.category === "HYBRID" && <Cpu size={20} />}
          </button>

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
      </div>
    </div>
  );
};

// --- 🔥 主元件 ---
export default function Projects() {
  // 🔥 1. 狀態拆分：Category 和 Status 獨立管理
  const [categoryFilter, setCategoryFilter] = useState("ALL");
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [viewMode, setViewMode] = useState("GRID");

  // 🔥 2. 自動抓取所有不重複的 Status (用於產生篩選按鈕)
  const allStatuses = ["ALL", ...new Set(projectsData.map((p) => p.status))];

  // 🔥 3. 核心邏輯：雙重篩選 (Category AND Status)
  const filteredProjects = projectsData.filter((project) => {
    const matchCategory =
      categoryFilter === "ALL" || project.category === categoryFilter;
    const matchStatus =
      statusFilter === "ALL" || project.status === statusFilter;
    return matchCategory && matchStatus;
  });

  const categoryTabs = ["ALL", "CIVIL", "DEV", "HYBRID"];

  return (
    <section
      id="projects"
      className="py-24 px-6 bg-slate-950 relative overflow-hidden min-h-screen"
    >
      <div className="max-w-7xl mx-auto">
        {/* --- Header Area --- */}
        <div className="flex flex-col gap-6 mb-12 border-b border-slate-800 pb-6">
          {/* Row 1: Title & Main Controls (Category & View) */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            {/* Title Section */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
                <Folder className="text-cyan-500" /> Selected_Works
              </h2>
              <div className="flex items-center gap-2 text-sm text-slate-500 font-mono">
                <span>Showing {filteredProjects.length} projects</span>

                {/* 顯示目前的篩選條件提示 */}
                {(categoryFilter !== "ALL" || statusFilter !== "ALL") && (
                  <span className="flex items-center gap-1 text-cyan-400">
                    / Filter:
                    {categoryFilter !== "ALL" && ` [${categoryFilter}]`}
                    {statusFilter !== "ALL" && ` [${statusFilter}]`}
                    <button
                      onClick={() => {
                        setCategoryFilter("ALL");
                        setStatusFilter("ALL");
                      }}
                      className="ml-2 hover:text-white flex items-center gap-1 border border-slate-700 px-1 rounded bg-slate-800"
                    >
                      <X size={10} /> CLEAR
                    </button>
                  </span>
                )}
              </div>
            </div>

            {/* Controls Section */}
            <div className="flex items-center gap-4">
              {/* Category Tabs */}
              <div className="flex p-1 bg-slate-900 border border-slate-800 rounded-lg">
                {categoryTabs.map((tab) => {
                  const isActive = categoryFilter === tab;
                  return (
                    <button
                      key={tab}
                      onClick={() => setCategoryFilter(tab)}
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

              {/* View Toggle */}
              <div className="flex p-1 bg-slate-900 border border-slate-800 rounded-lg">
                <button
                  onClick={() => setViewMode("GRID")}
                  className={`p-2 rounded transition-all ${
                    viewMode === "GRID"
                      ? "bg-slate-800 text-cyan-400"
                      : "text-slate-500 hover:text-slate-300"
                  }`}
                >
                  <LayoutGrid size={16} />
                </button>
                <button
                  onClick={() => setViewMode("LIST")}
                  className={`p-2 rounded transition-all ${
                    viewMode === "LIST"
                      ? "bg-slate-800 text-cyan-400"
                      : "text-slate-500 hover:text-slate-300"
                  }`}
                >
                  <List size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* 🔥 Row 2: Status Filter Bar (新增的區域) */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            <div className="flex items-center gap-2 text-[10px] font-mono text-slate-500 mr-2">
              <Layers size={12} /> STATUS_FILTER:
            </div>

            {allStatuses.map((status) => {
              const isSelected = statusFilter === status;
              const config = getStatusConfig(status);

              // 計算數量 (基於目前的 Category Filter)
              // 這樣做的好處：當你選 DEV 時，Status 的數量會自動變成只剩 DEV 的數量
              const count =
                status === "ALL"
                  ? categoryFilter === "ALL"
                    ? projectsData.length
                    : projectsData.filter((p) => p.category === categoryFilter)
                        .length
                  : projectsData.filter(
                      (p) =>
                        p.status === status &&
                        (categoryFilter === "ALL" ||
                          p.category === categoryFilter),
                    ).length;

              // 如果數量為 0，可以選擇隱藏或變淡 (這裡選擇變淡)
              const isZero = count === 0;

              return (
                <button
                  key={status}
                  onClick={() => setStatusFilter(status)}
                  disabled={isZero}
                  className={`
                    px-3 py-1.5 rounded text-[10px] font-mono border transition-all duration-300 flex items-center gap-2
                    ${
                      isSelected
                        ? config.style + " shadow-md" // 選中時套用該狀態的顏色樣式
                        : "bg-slate-900 border-slate-800 text-slate-500 hover:border-slate-600 hover:text-slate-300" // 未選中
                    }
                    ${isZero ? "opacity-30 cursor-not-allowed" : "opacity-100"}
                  `}
                >
                  {status}
                  <span
                    className={`opacity-60 ${isSelected ? "text-current" : "text-slate-600"}`}
                  >
                    [{count}]
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 內容顯示區 */}
        <div className="min-h-[400px]">
          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20 text-slate-600 font-mono border border-dashed border-slate-800 rounded-lg">
              <Filter size={48} className="mb-4 opacity-50" />
              <p>NO_DATA_FOUND</p>
              <p className="text-xs mt-2">
                Category:{" "}
                <span className="text-cyan-500">{categoryFilter}</span> +
                Status: <span className="text-cyan-500">{statusFilter}</span>
              </p>
              <button
                onClick={() => {
                  setCategoryFilter("ALL");
                  setStatusFilter("ALL");
                }}
                className="mt-6 text-xs text-cyan-400 hover:text-white border-b border-cyan-500/50 pb-0.5"
              >
                RESET_ALL_FILTERS
              </button>
            </div>
          )}

          {/* Grid Mode */}
          {viewMode === "GRID" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-500">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onCategoryClick={setCategoryFilter} // 🔥 修正：傳入正確的 setter
                />
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
                  onCategoryClick={setCategoryFilter} // 🔥 修正：傳入正確的 setter
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
