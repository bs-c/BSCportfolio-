"use client";
import { Cpu, Hammer, Globe, Ruler } from "lucide-react";
import { useLang } from "@/app/lib/LanguageContext";
import { t } from "@/app/lib/translations";

const ICONS = [
  <Ruler size={32} />,
  <Cpu size={32} />,
  <Hammer size={32} />,
  <Globe size={32} />,
];
const COLORS = ["text-emerald-400", "text-blue-400", "text-purple-400", "text-cyan-400"];

export default function Capabilities() {
  const { lang } = useLang();
  const c = t[lang].capabilities;

  return (
    <section className="py-20" id="services">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section title */}
        <div className="mb-16">
          <div className="flex mb-4">
            <span className="font-mono text-blue-400 text-sm tracking-widest uppercase">
              {c.subtitle}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100">{c.title}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {c.services.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-slate-950/50 border border-slate-800 hover:border-slate-600 transition-all duration-300 rounded-lg hover:-translate-y-1 flex flex-col h-full"
            >
              <div className={`mb-6 ${COLORS[index]}`}>{ICONS[index]}</div>
              <h4 className="text-xl font-bold text-slate-100 mb-4 group-hover:text-white transition-colors">
                {service.title}
              </h4>
              <p className="text-slate-400 leading-relaxed mb-6 md:min-h-20">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {[
                  ["ETABS/SAP2000/SAFE", "Midas Gen", "Revit", "AutoCAD", "Rhino", "SketchUP"],
                  ["Grasshopper", "C#", "Python", "Karamba3D"],
                  ["C#", "Python", "Revit", "Strategy"],
                  ["C#", "Python(AI/ML)", "HTML/CSS/JS", "React", "Django", "Node.js"],
                ][index].map((tool) => (
                  <span
                    key={tool}
                    className="text-[10px] font-mono px-1.5 py-0.5 rounded border border-slate-700 text-slate-500 bg-slate-900 group-hover:border-slate-600 transition-colors"
                  >
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
