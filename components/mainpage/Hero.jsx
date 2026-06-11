"use client";
import React from "react";
import { Snowflake, Motorbike, Waves } from "lucide-react";
import ThreeScene from "@/components/mainpage/ThreeScene";
import { useLang } from "@/app/lib/LanguageContext";
import { t } from "@/app/lib/translations";

const HERO_LABEL = { en: "Civil Dev Hybrid", zh: "土木開發複合型" };

export default function Hero() {
  const { lang } = useLang();
  const h = t[lang].hero;

  return (
    <section className="relative min-h-screen flex items-center pt-20 border-b border-line bg-bg overflow-hidden">
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          backgroundImage: "radial-gradient(#CCCCC7 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        <div className="space-y-8">
          {/* Section label */}
          <div className="flex items-center gap-2.5 font-mono text-[11px] text-muted tracking-[0.12em] uppercase">
            <span className="w-4 h-px bg-line-strong inline-block" />
            {HERO_LABEL[lang]}
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-primary leading-tight tracking-tight">
            {h.h1[0]}
            <br />
            <span className="text-accent">{h.h1[1]}</span>
            <br />
            {h.h1[2]}
          </h1>

          <p className="text-[17px] text-secondary max-w-xl border-l-2 border-line-strong pl-6 leading-relaxed">
            {h.descPre}
            <strong className="text-primary font-semibold">{h.descBold1}</strong>
            {h.descMid}
            <strong className="text-primary font-semibold">{h.descBold2}</strong>
            {h.descPost}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 pt-1">
            <a
              href="#projects"
              className="px-8 py-3 bg-primary text-bg font-mono text-sm font-medium rounded text-center hover:bg-primary/85 transition-colors"
            >
              {h.cta1}
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-line-strong text-secondary hover:border-primary hover:text-primary font-mono text-sm font-medium rounded text-center transition-colors"
            >
              {h.cta2}
            </a>
          </div>

          <div className="pt-6 flex flex-wrap gap-6 text-[11px] font-mono text-muted border-t border-line">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
              {h.location}
            </div>
            <div className="flex items-center gap-2">
              <span>{h.sidequest}</span>
              <div className="flex gap-1">
                <div className="p-1 border border-line rounded text-secondary hover:border-line-strong hover:text-primary transition-all" title="Snowboarding">
                  <Snowflake size={12} />
                </div>
                <div className="p-1 border border-line rounded text-secondary hover:border-line-strong hover:text-primary transition-all" title="Motorcycling">
                  <Motorbike size={12} />
                </div>
                <div className="p-1 border border-line rounded text-secondary hover:border-line-strong hover:text-primary transition-all" title="Scuba Diving">
                  <Waves size={12} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Visual */}
        <div className="hidden lg:flex h-125 w-full bg-card border border-line rounded-lg items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 z-10 cursor-move">
            <ThreeScene />
          </div>
          <div className="absolute bottom-3 right-4 text-right z-20 pointer-events-none">
            <p className="font-mono text-muted text-[10px] tracking-widest mb-0.5">{h.hint}</p>
            <p className="font-mono text-[9px]" style={{ color: "#CCCCC7" }}>{h.drag}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
