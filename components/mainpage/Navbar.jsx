"use client";
import React, { useState } from "react";
import { useLang } from "@/app/lib/LanguageContext";
import { t } from "@/app/lib/translations";

const NAV_HREFS = ["#about", "#services", "#projects", "#blogs", "#contact"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { lang, toggleLang } = useLang();
  const links = t[lang].nav;

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a className="font-bold text-xl tracking-tighter text-white" href="#">
          BSC's &nbsp; PORTFOLIO<span className="text-cyan-500">_</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-mono text-slate-400">
          {links.map((label, i) => (
            <a key={i} href={NAV_HREFS[i]} className="hover:text-cyan-400 transition-colors">
              {label}
            </a>
          ))}

          {/* Language Toggle */}
          <button
            onClick={toggleLang}
            className="flex items-center gap-1 border border-slate-700 rounded px-2 py-1 text-xs hover:border-cyan-500 transition-colors"
          >
            <span className={lang === "en" ? "text-cyan-400" : "text-slate-500"}>EN</span>
            <span className="text-slate-700">|</span>
            <span className={lang === "zh" ? "text-cyan-400" : "text-slate-500"}>中</span>
          </button>
        </div>

        {/* Mobile right side */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleLang}
            className="flex items-center gap-1 border border-slate-700 rounded px-2 py-1 text-xs font-mono"
          >
            <span className={lang === "en" ? "text-cyan-400" : "text-slate-500"}>EN</span>
            <span className="text-slate-700">|</span>
            <span className={lang === "zh" ? "text-cyan-400" : "text-slate-500"}>中</span>
          </button>
          <button
            className="text-slate-300 font-mono text-sm"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "[ CLOSE ]" : "[ MENU ]"}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-slate-950 border-b border-slate-800 py-4 px-6 flex flex-col gap-4 font-mono text-sm text-slate-400">
          {links.map((label, i) => (
            <a key={i} href={NAV_HREFS[i]} onClick={() => setIsOpen(false)}>
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
