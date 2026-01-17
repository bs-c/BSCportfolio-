import React from "react";
import { Terminal } from "lucide-react";

export default function About({ SectionTitle }) {
  const ExperienceLog = () => {
    //const [isExpanded, setIsExpanded] = useState(false);

    const experiences = [
      {
        year: "2024.08 - PRESENT",
        role: "Structural Engineer",
        company: "Arup, Taiwan",
        desc: "Specialized in structural design for diverse projects, including buildings, pedestrian bridges, and onshore substations for offshore wind power. Designed RC and steel members, connections, and foundations, and managed RFI responses. Additionally, developed automation tools for analysis software data integration and created custom design applications compliant with the latest RC and timber codes to optimize engineering workflows.",
      },
      {
        year: "2022.09 - 2024.05",
        role: "Development & Supervising Engineer",
        company: "Sinotech Engineering Consultants Ltd, Taiwan",
        desc: "A hybrid engineer combining Site Supervision and software development. Experienced in supervising the New Taipei City Wenzaizhen project and developing engineering software solutions, including CAD/BIM plugins, web apps for road alignment, and automation tools using C# and APIs.",
      },
      {
        year: "2021.07 - 2022.08",
        role: "Structural Engineer",
        company: "Point Structure Associates, Taiwan",
        desc: "Designed gravity and lateral systems for diverse structures (RC, steel, timber, bamboo) while developing automation tools and building parametric tools using Rhino(grasshopper) and Python.",
      },
      {
        year: "2020.09 - 2021.06",
        role: "Research Assistant",
        company: "National Taiwan University of Science and Technology, Taiwan",
        desc: "Participated in domestic Cross Laminated Timber (CLT) fire resistance experiments and analyzed its post-fire mechanical behavior.",
      },
    ];

    // 預設只顯示前 1 筆，展開後顯示全部
    //const displayed = isExpanded ? experiences : experiences.slice(0, 1);
    const displayed = experiences;

    return (
      <div className="mt-12 border border-slate-800 bg-slate-950/50 p-6 rounded-lg font-mono text-sm">
        <h3 className="text-cyan-500 mb-6 flex items-center gap-2">
          <span className="animate-pulse">_</span> SYSTEM_LOGS / EXPERIENCE
        </h3>

        <div className="space-y-8 relative border-l border-slate-800 ml-3 pl-8">
          {displayed.map((exp, index) => (
            <div key={index} className="relative mb-5">
              {/* 時間軸裝飾點 */}
              <div className="absolute -left-9.25 top-1.5 w-3 h-3 bg-slate-900 border border-cyan-500/50 rounded-full"></div>

              <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-1">
                <span className="text-cyan-400 font-bold">{exp.year}</span>
                <span className="text-slate-500 hidden sm:inline">|</span>
                <span className="text-slate-200 font-bold">{exp.role}</span>
              </div>
              <div className="mt-1 mb-1">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900 border border-slate-700/50 text-cyan-300 font-mono text-xs shadow-sm group-hover:border-cyan-500/50 transition-colors">
                  <span className="text-slate-500">@</span>
                  <span className="font-semibold tracking-wide">
                    {exp.company}
                  </span>
                </span>
              </div>
              <p className="text-slate-300 leading-relaxed max-w-2xl">
                {exp.desc}
              </p>
            </div>
          ))}
        </div>

        {/* 展開/收合按鈕 */}
        {/*<button
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-8 text-xs text-cyan-500 hover:text-cyan-400 border-b border-dashed border-cyan-500/50 pb-1 transition-colors"
      >
        {isExpanded
          ? "[ COLLAPSE LOGS ]"
          : `[ LOAD OLDER LOGS (${experiences.length - 1} MORE) ]`}
      </button>*/}
      </div>
    );
  };

  return (
    <section id="about" className="py-24 bg-slate-950 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <SectionTitle number="1" title="Background" subtitle="Who Am I" />

          <div className="space-y-6 text-slate-400 leading-relaxed">
            <p className="text-slate-400 mb-2 leading-relaxed">
              <span className="block text-white font-bold text-lg mb-2">
                Hi, I'm BSC.
              </span>
              Civil Engineer by training. Developer by passion.
            </p>
            <p className="mb-2">
              Inspired by the potential of automation in construction, I pivoted
              to <span className="text-cyan-400">bridge the software gap</span>{" "}
              myself.
            </p>
            <p>
              I combine deep domain knowledge with{" "}
              <span className="text-cyan-400">modern technologies</span> to
              build next-gen tools for{" "}
              <strong className="text-white">the AEC Industry</strong> and the
              future of the{" "}
              <strong className="text-white">Built Environment</strong>.
            </p>
          </div>
          <br />
          <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
            <Terminal size={20} className="text-cyan-500" /> Technical Stack
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {/* Engineering Stack */}
            <div className="space-y-2">
              <span className="text-xs font-mono text-slate-500 uppercase">
                Engineering & Tools
              </span>
              <ul className="space-y-2">
                {[
                  "SAP2000 / ETABS/SAFE",
                  "Midas",
                  "Rhino/Grasshopper",
                  "SketchUp",
                  "AutoCAD",
                  "Revit",
                  "FEM Analysis",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-slate-300 text-sm"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>{" "}
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {/* Dev Stack */}
            <div className="space-y-2">
              <span className="text-xs font-mono text-slate-500 uppercase">
                Development
              </span>
              <ul className="space-y-2">
                {[
                  "Python",
                  "HTML/CSS/JS",
                  "React",
                  "Tailwind",
                  "Node.js",
                  "C#",
                  "Unity",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-slate-300 text-sm"
                  >
                    <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></span>{" "}
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-5">
            <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              {/* 這裡用一個畢業帽或證書的 icon */}
              <span className="text-cyan-500">🎓</span> Academic Credentials
            </h3>

            <div className="space-y-4 border-l-2 border-slate-800 pl-4">
              {/* 碩士學歷 */}
              <div className="relative group">
                <div className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 bg-slate-900 border border-slate-600 rounded-full group-hover:bg-cyan-500 group-hover:border-cyan-400 transition-colors"></div>
                <h4 className="text-slate-200 font-bold text-lg group-hover:text-cyan-400 transition-colors">
                  M.S. in Architecture
                </h4>
                <div className="text-sm font-mono text-slate-500 mb-1">
                  National Taiwan University of Science and Technology ·
                  Expected 2026
                </div>
              </div>
              <div className="relative group">
                <div className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 bg-slate-900 border border-slate-600 rounded-full group-hover:bg-cyan-500 group-hover:border-cyan-400 transition-colors"></div>
                <h4 className="text-slate-200 font-bold text-lg group-hover:text-cyan-400 transition-colors">
                  M.S. in Applied Mechanics
                </h4>
                <div className="text-sm font-mono text-slate-500 mb-1">
                  National Taiwan University · 2020
                </div>
              </div>

              {/* 學士學歷 */}
              <div className="relative group">
                <div className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 bg-slate-900 border border-slate-600 rounded-full group-hover:bg-cyan-500 group-hover:border-cyan-400 transition-colors"></div>
                <h4 className="text-slate-200 font-bold text-lg group-hover:text-cyan-400 transition-colors">
                  B.S. in Civil Engineering
                </h4>
                <div className="text-sm font-mono text-slate-500">
                  Tamkang University · 2017
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <ExperienceLog />
        </div>
      </div>
    </section>
  );
}
