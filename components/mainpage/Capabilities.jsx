"use client";
import { Cpu, Hammer, Globe, Ruler } from "lucide-react";
import { useLang } from "@/app/lib/LanguageContext";
import { t } from "@/app/lib/translations";

const ICONS = [<Ruler size={28} />, <Cpu size={28} />, <Hammer size={28} />, <Globe size={28} />];
const ICON_COLORS = ["text-emerald-600", "text-blue-600", "text-purple-600", "text-accent"];
const TOOLS = [
  ["ETABS / SAP2000", "SAFE", "Midas Gen", "Revit", "AutoCAD", "Rhino"],
  ["Grasshopper", "C#", "Python", "Karamba3D"],
  ["C#", "Python", "Revit API", "Strategy"],
  ["React", "Django", "Python (AI/ML)", "Node.js"],
];

export default function Capabilities() {
  const { lang } = useLang();
  const c = t[lang].capabilities;

  return (
    <section id="services" className="py-24 bg-subtle border-b border-line">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-12">
          <div className="flex items-center gap-2.5 font-mono text-[11px] text-muted tracking-[0.12em] uppercase mb-5">
            <span className="w-4 h-px bg-line-strong inline-block" />
            {c.subtitle}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">{c.title}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-line border border-line rounded-lg overflow-hidden">
          {c.services.map((service, index) => (
            <div key={index} className="bg-card p-8 hover:bg-bg transition-colors duration-200 flex flex-col">
              <div className={`mb-5 ${ICON_COLORS[index]}`}>{ICONS[index]}</div>
              <div className="font-mono text-[11px] text-muted mb-2 tracking-widest">0{index + 1}</div>
              <h4 className="text-[18px] font-semibold text-primary mb-3 tracking-tight">{service.title}</h4>
              <p className="text-secondary text-[14px] leading-relaxed mb-6 grow">{service.description}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {TOOLS[index].map(tool => (
                  <span key={tool} className="font-mono text-[10px] text-muted border border-line-strong px-2 py-0.5 rounded-sm">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
