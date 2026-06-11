"use client";
import React, { useState, use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Github,
  ExternalLink,
  Play,
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

const VideoPlayer = ({ src }) => {
  if (!src) return null;
  const getVideoId = (url) => {
    if (!url) return null;
    if (url.includes("v="))       return url.split("v=")[1].split("&")[0];
    if (url.includes("youtu.be/")) return url.split("youtu.be/")[1].split("?")[0];
    if (url.includes("/embed/"))   return url.split("/embed/")[1].split("?")[0];
    return null;
  };
  const videoId = getVideoId(src);
  if (!videoId) {
    return (
      <div className="my-10">
        <video controls className="w-full rounded-lg border border-line">
          <source src={src} type="video/mp4" />
        </video>
      </div>
    );
  }
  return (
    <div className="my-10">
      <div className="flex items-center gap-2 mb-3 font-mono text-[11px] text-muted tracking-widest">
        <span className="w-2 h-2 bg-red-500 rounded-full" />
        DEMO_SEQUENCE
      </div>
      <div className="relative w-full aspect-video bg-subtle border border-line rounded-lg overflow-hidden">
        <YouTubeEmbed videoid={videoId} style="width: 100%; height: 100%;" />
      </div>
    </div>
  );
};

export default function ProjectDetail({ params }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const resolvedParams = use(params);
  const id = resolvedParams.id;
  const project = projectsData.find(p => p.id === id);

  if (!project) notFound();

  const headers = project.category === "CIVIL"
    ? { section1: "The Challenge", section2: "The Execution" }
    : { section1: "The Problem",   section2: "The Solution" };

  const CategoryIcon = { CIVIL: Box, DEV: Code, HYBRID: Cpu }[project.category] || Code;

  return (
    <main className="min-h-screen bg-bg text-primary">
      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-100 bg-primary/80 backdrop-blur-sm flex items-center justify-center p-4 md:p-10 cursor-zoom-out"
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute top-6 right-6 text-bg/60 hover:text-bg transition-colors">
            <X size={28} />
          </button>
          <div
            className="relative max-w-7xl max-h-full rounded-lg overflow-hidden border border-line shadow-2xl bg-card"
            onClick={e => e.stopPropagation()}
          >
            <img src={selectedImage.src} alt={selectedImage.caption} className="w-full h-full object-contain max-h-[85vh]" />
            <div className="absolute bottom-0 w-full bg-card/90 p-4 border-t border-line flex justify-between items-center backdrop-blur-sm">
              <span className="font-mono text-accent text-sm tracking-wide">{selectedImage.caption}</span>
              <span className="text-[10px] text-muted font-mono">[ ESC_TO_CLOSE ]</span>
            </div>
          </div>
        </div>
      )}

      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-bg/90 backdrop-blur border-b border-line z-50">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center">
          <Link href="/#projects" className="flex items-center gap-2 text-sm font-mono text-accent hover:text-primary transition-colors">
            <ArrowLeft size={15} /> [ RETURN ]
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative w-full border-b border-line bg-subtle overflow-hidden">
        {project.cover && (
          <div className="absolute inset-0 z-0 pointer-events-none">
            <img src={project.cover} alt="Header Background" className="w-full h-full object-cover opacity-15 blur-sm grayscale" />
            <div className="absolute inset-0 bg-linear-to-b from-subtle/60 via-subtle/85 to-subtle" />
          </div>
        )}
        <div className="relative z-10 max-w-4xl mx-auto px-6 pt-32 pb-16">
          <div className="flex items-center gap-3 text-accent mb-4 font-mono text-[11px] tracking-widest">
            <CategoryIcon size={16} />
            <span>PROJECT / {project.id.toUpperCase()}</span>
            <span className={`flex items-center gap-1.5 px-2 py-0.5 rounded border text-[10px] ${getStatusConfig(project.status).style}`}>
              <span className={`w-1.5 h-1.5 rounded-full ${getStatusConfig(project.status).dot}`} />
              {project.status}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-5 leading-tight tracking-tight">
            {project.title}
          </h1>
          <p className="text-[17px] text-secondary leading-relaxed max-w-2xl">
            {project.subtitle || project.description}
          </p>
          <div className="flex gap-3 mt-8 flex-wrap">
            {project.github && (
              <a href={project.github} className="flex items-center gap-2 px-4 py-2 bg-card border border-line rounded hover:border-line-strong hover:text-primary transition-colors text-secondary text-sm">
                <Github size={16} /> Source Code
              </a>
            )}
            {project.demoVideo?.[0] && (
              <a href={project.demoVideo[0]} target="_blank" className="flex items-center gap-2 px-4 py-2 bg-accent-light border border-accent/30 text-accent rounded hover:bg-accent/10 transition-colors text-sm">
                <Play size={16} /> Watch Demo
              </a>
            )}
            {project.link && project.link !== project.demoVideo?.[0] && (
              <a href={project.link} target="_blank" className="flex items-center gap-2 px-4 py-2 bg-card border border-line rounded hover:border-accent hover:text-accent transition-colors text-secondary text-sm">
                <ExternalLink size={16} /> Live Demo
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Main */}
          <div className="md:col-span-2 space-y-12">
            <section>
              <h2 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                <span className="font-mono text-red-500 text-[13px]">01.</span> {headers.section1}
              </h2>
              <div className="p-5 bg-card border-l-2 border-red-400 rounded-r-lg text-secondary leading-relaxed text-[15px]">
                {project.challenge || project.problem || "Description..."}
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                <span className="font-mono text-accent text-[13px]">02.</span> {headers.section2}
              </h2>
              <div className="p-5 bg-card border-l-2 border-accent rounded-r-lg text-secondary leading-relaxed text-[15px]">
                {project.solution}
              </div>
              {project.demoVideo?.map((url, i) => <VideoPlayer key={i} src={url} />)}
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary mb-5">Key Features</h2>
              <div className="grid gap-3">
                {project.features?.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-card rounded-lg border border-line text-[14px]">
                    <CheckCircle size={16} className="text-accent mt-0.5 shrink-0" />
                    <span className="text-secondary leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            <div className="p-5 bg-card border border-line rounded-lg">
              <h3 className="text-[12px] font-mono text-muted uppercase tracking-widest mb-4 flex items-center gap-2">
                <Terminal size={13} /> TECH_STACK
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span key={i} className="text-[11px] font-mono text-accent bg-accent-light px-2.5 py-1 rounded border border-accent/20">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {project.images?.length > 0 && (
              <div className="space-y-3">
                <div className="flex items-center gap-2 font-mono text-[11px] text-muted tracking-widest">
                  <Maximize2 size={11} /> GALLERY
                </div>
                {project.images.map((img, i) => (
                  <div
                    key={i}
                    onClick={() => setSelectedImage(img)}
                    className="group relative bg-card border border-line rounded-lg overflow-hidden cursor-pointer hover:border-line-strong transition-all"
                  >
                    <img src={img.src} alt={img.caption} className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 w-full bg-card/90 border-t border-line p-2 flex justify-between items-center">
                      <span className="text-[10px] font-mono text-accent truncate max-w-[70%]">{img.caption}</span>
                      <span className="text-[9px] text-muted border border-line px-1 rounded">IMG_{i + 1}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </aside>
        </div>
      </div>
    </main>
  );
}
