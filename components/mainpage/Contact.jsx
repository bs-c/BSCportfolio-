"use client";
import React from "react";
import { Linkedin, Mail } from "lucide-react";
import { useLang } from "@/app/lib/LanguageContext";
import { t } from "@/app/lib/translations";

export default function Contact() {
  const { lang } = useLang();
  const c = t[lang].contact;

  return (
    <section id="contact" className="py-24 bg-bg px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2.5 font-mono text-[11px] text-muted tracking-[0.12em] uppercase mb-5">
          <span className="w-4 h-px bg-line-strong inline-block" />
          Contact
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-primary tracking-tight mb-6">{c.title}</h2>
        <p className="text-secondary text-[17px] mb-12 max-w-2xl mx-auto leading-relaxed">{c.desc}</p>

        <div className="flex justify-center gap-5 mb-16">
          <a
            href="https://www.linkedin.com/in/bo-sen-chuang-b3345b222"
            target="_blank"
            className="p-4 border border-line rounded-full hover:border-line-strong hover:text-accent text-secondary transition-all"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="mailto:bsc.doken@gmail.com"
            className="p-4 border border-line rounded-full hover:border-line-strong hover:text-accent text-secondary transition-all"
          >
            <Mail size={22} />
          </a>
        </div>

        <footer className="text-muted text-[12px] font-mono border-t border-line pt-8">
          &copy; {new Date().getFullYear()} &nbsp;·&nbsp; Designed &amp; Built by BSC
        </footer>
      </div>
    </section>
  );
}
