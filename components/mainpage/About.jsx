"use client";
import React from "react";
import { Terminal } from "lucide-react";
import { useLang } from "@/app/lib/LanguageContext";
import { t } from "@/app/lib/translations";

const EXP_LABEL = { en: "Experience", zh: "工作經歷" };

export default function About() {
  const { lang } = useLang();
  const a = t[lang].about;
  const { education, experience } = a;

  return (
    <section id="about" className="py-24 bg-bg px-6 border-b border-line">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">

        {/* Left column */}
        <div>
          {/* Section label */}
          <div className="flex items-center gap-2.5 font-mono text-[11px] text-muted tracking-[0.12em] uppercase mb-5">
            <span className="w-4 h-px bg-line-strong inline-block" />
            {a.subtitle}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight mb-10">{a.title}</h2>

          <div className="space-y-5 text-secondary leading-relaxed text-[16px] mb-10">
            <p>
              <span className="text-primary font-semibold">{a.bioName}</span>
              {" "}{a.bio1}
            </p>
            <p>
              {a.bio2Pre}
              <span className="text-accent font-medium">{a.bio2Highlight}</span>
              {a.bio2Post}
            </p>
            <p>
              {a.bio3Pre}
              <span className="text-accent font-medium">{a.bio3Highlight}</span>
              {a.bio3Mid}
              <strong className="text-primary font-semibold">{a.bio3Bold1}</strong>
              {a.bio3Mid2}
              <strong className="text-primary font-semibold">{a.bio3Bold2}</strong>
              {a.bio3Post}
            </p>
          </div>

          {/* Tech Stack */}
          <div className="mb-8">
            <div className="flex items-center gap-2 text-[15px] font-semibold text-primary mb-4">
              <Terminal size={16} className="text-accent" />
              {a.stackTitle}
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <span className="font-mono text-[10px] text-muted uppercase tracking-widest block mb-3">{a.stackEng}</span>
                <ul className="space-y-2">
                  {["SAP2000/ETABS", "SAFE", "Midas", "Rhino/Grasshopper", "SketchUp", "AutoCAD", "Revit", "FEM Analysis"].map(item => (
                    <li key={item} className="flex items-center gap-2 text-secondary text-sm">
                      <span className="w-1 h-1 bg-accent rounded-full shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <span className="font-mono text-[10px] text-muted uppercase tracking-widest block mb-3">{a.stackDev}</span>
                <ul className="space-y-2">
                  {["React", "Node.js", "Django", "ML/DL (PyTorch, Keras)", "Unity", "Python", "HTML/CSS/JS", "C#"].map(item => (
                    <li key={item} className="flex items-center gap-2 text-secondary text-sm">
                      <span className="w-1 h-1 bg-accent rounded-full shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <span className="font-mono text-[10px] text-muted uppercase tracking-widest block mb-4">{a.eduTitle}</span>
            <div className="space-y-4">
              {education.map(edu => (
                <div key={edu.degree} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 shrink-0" />
                  <div>
                    <div className="text-primary font-semibold text-[15px]">{edu.degree}</div>
                    <div className="text-muted font-mono text-[11px] mt-0.5">{edu.school}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right column — Experience */}
        <div className="md:mt-16">
          <span className="font-mono text-[10px] text-muted uppercase tracking-widest block mb-4">
            {EXP_LABEL[lang]}
          </span>
          <div>
            {experience.map((exp, index) => (
              <div key={index} className="py-5 border-t border-line first:border-t-0">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                  <span className="font-semibold text-primary text-[15px]">{exp.role}</span>
                  <span className="font-mono text-[11px] text-muted shrink-0">{exp.year}</span>
                </div>
                <div className="font-mono text-[12px] text-accent mb-2">{exp.company}</div>
                <p className="text-secondary text-[13px] leading-relaxed">{exp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
