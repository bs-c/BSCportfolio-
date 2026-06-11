"use client";

import React, { useState } from "react";
import { useLang } from "@/app/lib/LanguageContext";
import { t } from "@/app/lib/translations";
import Link from "next/link";
import {
  Folder,
  ExternalLink,
  Code,
  Box,
  Cpu,
  LayoutGrid,
  List,
  Filter,
  X,
  Layers,
} from "lucide-react";
import { projectsData } from "@/app/lib/data";
import { getStatusConfig } from "@/app/lib/utils";

// Category icon helper
const CatIcon = ({ cat, size = 16 }) => {
  if (cat === "CIVIL") return <Box size={size} />;
  if (cat === "DEV")   return <Code size={size} />;
  return <Cpu size={size} />;
};

// --- List row ---
const ProjectListRow = ({ project, onCategoryClick }) => {
  const config = getStatusConfig(project.status);
  return (
    <div className="group flex items-center gap-4 py-4 px-4 border-b border-line hover:bg-subtle transition-colors duration-200">
      <div className="w-24 shrink-0 flex items-center gap-2">
        <span className={`w-2 h-2 rounded-full ${config.dot}`} />
        <span className="font-mono text-[10px] text-muted">{project.status}</span>
      </div>
      <div className="w-1/4 min-w-50">
        <Link href={`/projects/${project.id}`} className="block">
          <h3 className="text-sm font-semibold text-primary group-hover:text-accent transition-colors truncate">
            {project.title}
          </h3>
        </Link>
      </div>
      <button
        onClick={e => { e.stopPropagation(); onCategoryClick(project.category); }}
        className="shrink-0 flex items-center gap-1 px-2 py-1 rounded border border-line text-[10px] font-mono text-muted hover:text-accent hover:border-accent/50 transition-colors"
      >
        <CatIcon cat={project.category} size={11} />
        {project.category}
      </button>
      <div className="flex-1 flex flex-wrap gap-2 opacity-40 group-hover:opacity-100 transition-opacity">
        {project.tech.slice(0, 4).map((tech, i) => (
          <span key={i} className="text-[10px] font-mono text-muted">
            {tech}{i < 3 ? "," : ""}
          </span>
        ))}
      </div>
      <Link href={`/projects/${project.id}`} className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
        <ExternalLink size={14} className="text-accent" />
      </Link>
    </div>
  );
};

// --- Grid card ---
const ProjectCard = ({ project, onCategoryClick }) => {
  const config = getStatusConfig(project.status);
  return (
    <div className="group relative bg-card border border-line hover:border-line-strong rounded-lg p-6 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 overflow-hidden flex flex-col">
      {project.cover && (
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img src={project.cover} alt={project.title} className="w-full h-full object-cover opacity-0 group-hover:opacity-10 transition-opacity duration-500 grayscale" />
          <div className="absolute inset-0 bg-linear-to-t from-card via-card/90 to-card/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      )}

      <div className="relative z-10 flex flex-col h-full">
        <div className="flex justify-between items-start mb-5">
          <button
            onClick={e => { e.preventDefault(); onCategoryClick(project.category); }}
            className="p-1.5 border border-line rounded text-muted hover:text-accent hover:border-accent/50 transition-all"
          >
            <CatIcon cat={project.category} size={16} />
          </button>
          <div className={`flex items-center gap-1.5 px-2 py-1 rounded border text-[10px] font-mono font-medium ${config.style}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${config.dot}`} />
            {project.status}
          </div>
        </div>

        <Link href={`/projects/${project.id}`} className="block flex-1">
          <h3 className="text-[16px] font-semibold text-primary mb-2 group-hover:text-accent transition-colors tracking-tight">
            {project.title}
          </h3>
          <p className="text-secondary text-[13px] leading-relaxed line-clamp-3">{project.description}</p>
        </Link>
      </div>
    </div>
  );
};

// --- Main ---
export default function Projects() {
  const { lang } = useLang();
  const p = t[lang].projects;

  const [categoryFilter, setCategoryFilter] = useState("ALL");
  const [statusFilter, setStatusFilter]     = useState("ALL");
  const [viewMode, setViewMode]             = useState("GRID");

  const allStatuses = ["ALL", ...new Set(projectsData.map(p => p.status))];
  const filteredProjects = projectsData.filter(project => {
    const matchCat    = categoryFilter === "ALL" || project.category === categoryFilter;
    const matchStatus = statusFilter   === "ALL" || project.status   === statusFilter;
    return matchCat && matchStatus;
  });

  const categoryTabs = ["ALL", "CIVIL", "DEV", "HYBRID"];

  return (
    <section id="projects" className="py-24 px-6 bg-bg border-b border-line">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col gap-5 mb-10 pb-6 border-b border-line">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-2.5 font-mono text-[11px] text-muted tracking-[0.12em] uppercase mb-5">
                <span className="w-4 h-px bg-line-strong inline-block" />
                Portfolio
              </div>
              <h2 className="text-3xl font-bold text-primary tracking-tight flex items-center gap-3">
                <Folder size={24} className="text-accent" /> {p.title}
              </h2>
              <div className="flex items-center gap-2 text-[13px] text-muted font-mono mt-2">
                <span>{p.showing(filteredProjects.length)}</span>
                {(categoryFilter !== "ALL" || statusFilter !== "ALL") && (
                  <span className="flex items-center gap-1 text-accent">
                    · {p.filterLabel}
                    {categoryFilter !== "ALL" && ` [${categoryFilter}]`}
                    {statusFilter   !== "ALL" && ` [${statusFilter}]`}
                    <button
                      onClick={() => { setCategoryFilter("ALL"); setStatusFilter("ALL"); }}
                      className="ml-1 flex items-center gap-0.5 border border-line-strong px-1.5 py-0.5 rounded text-[10px] hover:border-primary hover:text-primary transition-colors"
                    >
                      <X size={9} /> {p.clear}
                    </button>
                  </span>
                )}
              </div>
            </div>

            <div className="flex items-center gap-3">
              {/* Category tabs */}
              <div className="flex border border-line rounded-md overflow-hidden">
                {categoryTabs.map(tab => (
                  <button
                    key={tab}
                    onClick={() => setCategoryFilter(tab)}
                    className={`px-4 py-2 text-[11px] font-mono tracking-widest transition-colors ${
                      categoryFilter === tab
                        ? "bg-primary text-bg"
                        : "text-muted hover:text-primary hover:bg-subtle"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="w-px h-7 bg-line" />

              {/* View toggle */}
              <div className="flex border border-line rounded-md overflow-hidden">
                <button
                  onClick={() => setViewMode("GRID")}
                  className={`p-2 transition-colors ${viewMode === "GRID" ? "bg-primary text-bg" : "text-muted hover:text-primary"}`}
                >
                  <LayoutGrid size={15} />
                </button>
                <button
                  onClick={() => setViewMode("LIST")}
                  className={`p-2 transition-colors ${viewMode === "LIST" ? "bg-primary text-bg" : "text-muted hover:text-primary"}`}
                >
                  <List size={15} />
                </button>
              </div>
            </div>
          </div>

          {/* Status filter */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-1.5 font-mono text-[10px] text-muted mr-1">
              <Layers size={11} /> STATUS:
            </div>
            {allStatuses.map(status => {
              const isSelected = statusFilter === status;
              const config = getStatusConfig(status);
              const count = status === "ALL"
                ? (categoryFilter === "ALL" ? projectsData.length : projectsData.filter(p => p.category === categoryFilter).length)
                : projectsData.filter(p => p.status === status && (categoryFilter === "ALL" || p.category === categoryFilter)).length;
              const isZero = count === 0;

              return (
                <button
                  key={status}
                  onClick={() => setStatusFilter(status)}
                  disabled={isZero}
                  className={`px-3 py-1 rounded text-[10px] font-mono border transition-all flex items-center gap-1.5
                    ${isSelected ? config.style : "bg-card border-line text-muted hover:border-line-strong hover:text-secondary"}
                    ${isZero ? "opacity-30 cursor-not-allowed" : ""}`}
                >
                  {status}
                  <span className="opacity-60">[{count}]</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Content */}
        <div className="min-h-100">
          {filteredProjects.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20 text-muted font-mono border border-dashed border-line rounded-lg">
              <Filter size={40} className="mb-4 opacity-40" />
              <p className="text-sm">NO_DATA_FOUND</p>
              <p className="text-[11px] mt-1 text-muted/70">
                Category: <span className="text-accent">{categoryFilter}</span> · Status: <span className="text-accent">{statusFilter}</span>
              </p>
              <button onClick={() => { setCategoryFilter("ALL"); setStatusFilter("ALL"); }} className="mt-5 text-[12px] text-accent hover:text-primary border-b border-accent/40 pb-px">
                RESET_ALL_FILTERS
              </button>
            </div>
          )}

          {viewMode === "GRID" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredProjects.map(project => (
                <ProjectCard key={project.id} project={project} onCategoryClick={setCategoryFilter} />
              ))}
            </div>
          )}

          {viewMode === "LIST" && (
            <div className="border border-line rounded-lg overflow-hidden">
              {filteredProjects.map(project => (
                <ProjectListRow key={project.id} project={project} onCategoryClick={setCategoryFilter} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
