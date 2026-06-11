"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLang } from "@/app/lib/LanguageContext";
import { t } from "@/app/lib/translations";

const NAV_HREFS = ["#about", "#services", "#projects", "#blogs", "#contact"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { lang, toggleLang } = useLang();
  const links = t[lang].nav;

  return (
    <nav className="fixed top-0 w-full z-50 bg-bg/90 backdrop-blur-md border-b border-line">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 text-primary font-bold text-sm tracking-wide no-underline">
          <div className="w-7 h-7 border border-primary flex items-center justify-center text-[11px] font-bold shrink-0">
            B
          </div>
          BSC
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 text-[13px] text-secondary">
          {links.map((label, i) => (
            <a key={i} href={NAV_HREFS[i]} className="hover:text-primary transition-colors">
              {label}
            </a>
          ))}
        </div>

        {/* Desktop right */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 border border-line-strong rounded px-2.5 py-1 text-[11px] font-mono text-secondary hover:border-primary transition-colors"
          >
            <span className={lang === "en" ? "text-accent font-medium" : ""}>EN</span>
            <span className="text-line-strong">|</span>
            <span className={lang === "zh" ? "text-accent font-medium" : ""}>中</span>
          </button>
        </div>

        {/* Mobile right */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleLang}
            className="flex items-center gap-1 border border-line-strong rounded px-2 py-1 text-[11px] font-mono"
          >
            <span className={lang === "en" ? "text-accent" : "text-muted"}>EN</span>
            <span className="text-line-strong">|</span>
            <span className={lang === "zh" ? "text-accent" : "text-muted"}>中</span>
          </button>
          <button
            className="text-secondary"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden bg-card border-b border-line py-4 px-6 flex flex-col gap-4 text-[13px] text-secondary">
          {links.map((label, i) => (
            <a key={i} href={NAV_HREFS[i]} onClick={() => setIsOpen(false)} className="hover:text-primary transition-colors">
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
