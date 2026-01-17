import { Cpu, Hammer, Globe, Ruler, MoveRight } from "lucide-react"; // 記得引入 Ruler

export default function Capabilities({ SectionTitle }) {
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
        <SectionTitle number="2" title="Capabilities" subtitle="WHAT I DO" />

        {/* 修改這裡：改為 md:grid-cols-2 (2x2 矩陣) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-slate-950/50 border border-slate-800 hover:border-slate-600 transition-all duration-300 rounded-lg hover:-translate-y-1 flex flex-col h-full"
            >
              {/* ⬆️ 修正點 1: 加入 flex flex-col h-full，讓內部元件垂直排列並撐滿高度 */}

              {/* Icon */}
              <div className={`mb-6 ${service.color}`}>{service.icon}</div>

              {/* Title */}
              <h4 className="text-xl font-bold text-slate-100 mb-4 group-hover:text-white transition-colors">
                {service.title}
              </h4>

              {/* Description */}
              <p className="text-slate-400 leading-relaxed mb-6 md:min-h-[5rem]">
                {/* ⬆️ 修正點 2: 
        - 移除了原本的 h-20 
        - 改用 md:min-h-[5rem] (只在電腦版保留最小高度以維持整齊)
        - 手機版會自動變成 auto，文字再長也不會重疊 
    */}
                {service.description}
              </p>

              {/* Tools Tags (原本的 Details) */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {/* ⬆️ 修正點 3: mt-auto 會自動填補中間的空白，把這一塊推到最下面 */}
                {service.tools.map((tool, i) => (
                  <span
                    key={i}
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
