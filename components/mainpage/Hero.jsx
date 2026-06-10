"use client";
import React from "react";
import { Snowflake, Motorbike, Waves } from "lucide-react";
import ThreeScene from "@/components/mainpage/ThreeScene";
import { useLang } from "@/app/lib/LanguageContext";
import { t } from "@/app/lib/translations";

export default function Hero() {
  const { lang } = useLang();
  const h = t[lang].hero;

  return (
    <section className="relative min-h-screen flex items-center pt-20 border-b border-slate-900 bg-slate-950 overflow-hidden">
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#4b5563 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        <div className="space-y-8">
          <div className="inline-flex items-center space-x-2 text-cyan-400 font-mono text-xs md:text-sm tracking-wider border border-cyan-900/50 bg-cyan-900/10 px-3 py-1 rounded">
            <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
            <span>{h.badge}</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            {h.h1[0]}
            <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-600">
              {h.h1[1]}
            </span>
            <br />
            {h.h1[2]}
          </h1>

          <p className="text-lg text-slate-400 max-w-xl border-l-2 border-slate-700 pl-6 leading-relaxed">
            {h.descPre}
            <strong className="text-white">{h.descBold1}</strong>
            {h.descMid}
            <strong className="text-white">{h.descBold2}</strong>
            {h.descPost}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="#projects"
              className="px-8 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-mono font-medium rounded transition-all shadow-[0_0_20px_rgba(8,145,178,0.3)] text-center"
            >
              {h.cta1}
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-slate-700 text-slate-300 hover:border-cyan-500 hover:text-cyan-400 font-mono font-medium rounded transition-colors text-center"
            >
              {h.cta2}
            </a>
          </div>

          <div className="pt-8 flex flex-wrap gap-6 text-xs md:text-sm font-mono text-slate-500 border-t border-slate-800/50">
            <div className="flex items-center gap-2 text-slate-400">
              {h.location}
            </div>
            <div className="flex items-center gap-2 text-slate-400">
              <span>{h.sidequest}</span>
              <div className="flex gap-1">
                <div className="p-1.5 bg-slate-900 border border-slate-700 rounded text-cyan-400 hover:text-white hover:border-cyan-500 transition-all" title="Snowboarding">
                  <Snowflake size={14} />
                </div>
                <div className="p-1.5 bg-slate-900 border border-slate-700 rounded text-blue-400 hover:text-white hover:border-blue-500 transition-all" title="Motorcycling">
                  <Motorbike size={14} />
                </div>
                <div className="p-1.5 bg-slate-900 border border-slate-700 rounded text-teal-400 hover:text-white hover:border-teal-500 transition-all" title="Scuba Diving">
                  <Waves size={14} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Visual */}
        <div className="hidden lg:flex h-125 w-full bg-slate-900/30 border border-slate-800 rounded-lg items-center justify-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-linear-to-b from-transparent via-cyan-500/5 to-transparent pointer-events-none z-0" />
          <div
            className="absolute inset-0 opacity-20 pointer-events-none z-0"
            style={{
              backgroundImage:
                "linear-gradient(0deg, transparent 24%, rgba(6, 182, 212, .1) 25%, rgba(6, 182, 212, .1) 26%, transparent 27%, transparent 74%, rgba(6, 182, 212, .1) 75%, rgba(6, 182, 212, .1) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(6, 182, 212, .1) 25%, rgba(6, 182, 212, .1) 26%, transparent 27%, transparent 74%, rgba(6, 182, 212, .1) 75%, rgba(6, 182, 212, .1) 76%, transparent 77%, transparent)",
              backgroundSize: "50px 50px",
            }}
          />
          <div className="absolute inset-0 z-10 cursor-move">
            <ThreeScene />
          </div>
          <div className="absolute bottom-4 right-6 text-right z-20 pointer-events-none">
            <p className="font-mono text-cyan-500 text-xs tracking-widest mb-1">{h.hint}</p>
            <p className="text-slate-600 text-[10px]">{h.drag}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
