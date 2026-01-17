import { Cpu, Hammer, Globe, Ruler, MoveRight } from "lucide-react"; // 記得引入 Ruler

export default function Capabilities() {
  const services = [
    {
      title: "Structural Design",
      icon: <Ruler size={32} />,
      color: "text-emerald-400", // 🟢 綠色：代表安全與實務
      description:
        "Delivering comprehensive structural design for RC, Steel, and Timber projects. Specialized in code compliance, safety verification, and design optimization for diverse building types.",
      tools: [
        "ETABS/SAP2000/SAFE",
        "Midas Gen",
        "Revit",
        "AutoCAD",
        "Rhino",
        "SketchUP",
      ],
    },
    {
      title: "Computational Design",
      icon: <Cpu size={32} />,
      color: "text-blue-400",
      description:
        "Developing Grasshopper plugins and automation scripts to streamline structural analysis workflows and geometry generation.",
      tools: ["Grasshopper", "C#", "Python", "Karamba3D"],
    },
    {
      title: "AEC Tech Consulting",
      icon: <Hammer size={32} />,
      color: "text-purple-400",
      description:
        "Helping engineering firms transition to modern workflows. Bridging the communication gap between engineers and developers.",
      tools: ["C#", "Python", "Revit"],
    },
    {
      title: "Programme Development",
      icon: <Globe size={32} />,
      color: "text-cyan-400",
      description:
        "Building custom applications for engineering data visualization, dashboards, and platforms.",
      tools: ["C#", "Python", "HTML/CSS/JS", "React", "Django", "Node.js"],
    },
  ];

  return (
    <section className="py-20" id="services">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end gap-4 mb-12">
          <span className="text-cyan-500 font-mono text-sm tracking-widest">
            02.
          </span>
          <h2 className="text-3xl font-bold text-white">WHAT I DO</h2>
        </div>

        <h3 className="text-4xl md:text-5xl font-bold text-white mb-16">
          Capabilities
        </h3>

        {/* 🔥 修改這裡：改為 md:grid-cols-2 (2x2 矩陣) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-slate-950/50 border border-slate-800 hover:border-slate-600 transition-all duration-300 rounded-lg hover:-translate-y-1"
            >
              {/* Icon */}
              <div className={`mb-6 ${service.color}`}>{service.icon}</div>

              {/* Title */}
              <h4 className="text-xl font-bold text-slate-100 mb-4 group-hover:text-white transition-colors">
                {service.title}
              </h4>

              {/* Description */}
              <p className="text-slate-400 leading-relaxed mb-6 h-20">
                {service.description}
              </p>

              {/* Arrow Hint (Optional) */}
              <div className="flex items-center gap-2 text-sm font-mono text-slate-600 group-hover:text-cyan-400 transition-colors">
                <div className="flex flex-wrap gap-2 mt-auto">
                  {service.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-mono px-1.5 py-0.5 rounded border border-slate-700 text-slate-500 bg-slate-900"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
