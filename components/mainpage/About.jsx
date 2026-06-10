"use client";
import React from "react";
import { Terminal } from "lucide-react";
import { useLang } from "@/app/lib/LanguageContext";
import { t } from "@/app/lib/translations";

export default function About() {
  const { lang } = useLang();
  const a = t[lang].about;
  const { education, experience } = a;

  return (
    <section id="about" className="py-24 bg-slate-950 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Left column */}
        <div>
          {/* Section title */}
          <div className="mb-16">
            <div className="flex mb-4">
              <span className="font-mono text-blue-400 text-sm tracking-widest uppercase">
                {a.subtitle}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100">{a.title}</h2>
          </div>

          <div className="space-y-6 text-slate-400 leading-relaxed">
            <p className="text-slate-400 mb-2 leading-relaxed">
              <span className="block text-white font-bold text-lg mb-2">{a.bioName}</span>
              {a.bio1}
            </p>
            <p className="mb-2">
              {a.bio2Pre}
              <span className="text-cyan-400">{a.bio2Highlight}</span>
              {a.bio2Post}
            </p>
            <p>
              {a.bio3Pre}
              <span className="text-cyan-400">{a.bio3Highlight}</span>
              {a.bio3Mid}
              <strong className="text-white">{a.bio3Bold1}</strong>
              {a.bio3Mid2}
              <strong className="text-white">{a.bio3Bold2}</strong>
              {a.bio3Post}
            </p>
          </div>

          <br />

          <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
            <Terminal size={20} className="text-cyan-500" /> {a.stackTitle}
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <span className="text-xs font-mono text-slate-500 uppercase">{a.stackEng}</span>
              <ul className="space-y-2">
                {["SAP2000/ETABS", "SAFE", "Midas", "Rhino/Grasshopper", "SketchUp", "AutoCAD", "Revit", "FEM Analysis"].map(item => (
                  <li key={item} className="flex items-center gap-2 text-slate-300 text-sm">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-2">
              <span className="text-xs font-mono text-slate-500 uppercase">{a.stackDev}</span>
              <ul className="space-y-2">
                {["React", "Node.js", "Django", "ML/DL (PyTorch, Keras, sklearn)", "Unity", "Python", "HTML/CSS/JS", "C#"].map(item => (
                  <li key={item} className="flex items-center gap-2 text-slate-300 text-sm">
                    <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-5">
            <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <span className="text-cyan-500">🎓</span> {a.eduTitle}
            </h3>
            <div className="space-y-4 border-l-2 border-slate-800 pl-4">
              {education.map(edu => (
                <div key={edu.degree} className="relative group">
                  <div className="absolute -left-5.25 top-1.5 w-2.5 h-2.5 bg-slate-900 border border-slate-600 rounded-full group-hover:bg-cyan-500 group-hover:border-cyan-400 transition-colors" />
                  <h4 className="text-slate-200 font-bold text-lg group-hover:text-cyan-400 transition-colors">{edu.degree}</h4>
                  <div className="text-sm font-mono text-slate-500 mb-1">{edu.school}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right column — Experience */}
        <div>
          <div className="mt-12 border border-slate-800 bg-slate-950/50 p-6 rounded-lg font-mono text-sm">
            <h3 className="text-cyan-500 mb-6 flex items-center gap-2">
              <span className="animate-pulse">_</span> {a.expTitle}
            </h3>
            <div className="space-y-8 relative border-l border-slate-800 ml-3 pl-8">
              {experience.map((exp, index) => (
                <div key={index} className="relative mb-5">
                  <div className="absolute -left-9.25 top-1.5 w-3 h-3 bg-slate-900 border border-cyan-500/50 rounded-full" />
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-1">
                    <span className="text-cyan-400 font-bold">{exp.year}</span>
                    <span className="text-slate-500 hidden sm:inline">|</span>
                    <span className="text-slate-200 font-bold">{exp.role}</span>
                  </div>
                  <div className="mt-1 mb-1">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900 border border-slate-700/50 text-cyan-300 font-mono text-xs shadow-sm">
                      <span className="text-slate-500">@</span>
                      <span className="font-semibold tracking-wide">{exp.company}</span>
                    </span>
                  </div>
                  <p className="text-slate-300 leading-relaxed max-w-2xl">{exp.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
