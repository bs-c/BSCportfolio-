// app/data.js (或 lib/data.js)

export const projectsData = [
  {
    id: "Excel-to-SAP2000_ETABS", // 這是網址會用到的 slug (唯一識別碼)
    title: "Excel-to-SAP200/ETABS Modeling and Analysis Tool",
    cover: "/projects/ExcelToSAP2000byOAPI/ExcelToSAP2000byOAPI-1.png",
    category: "HYBRID",
    subtitle: "SAP2000/ETABS Automation via Python & OAPI",
    description:
      "Developed a Python-based automation tool that integrates SAP2000/ETABS with excel...",
    // --- 內頁專屬詳細內容 ---
    challenge:
      "Manual data transfer between Excel calculation sheets and SAP2000 is repetitive, time-consuming, and prone to human error, especially when dealing with complex geometries or multiple load cases.",
    solution:
      "Developed a Python automation script using the CSI OAPI to bridge Excel and SAP2000. The tool automatically reads parameters to generate models and apply loads, ensuring data integrity and significantly reducing modeling time.",
    features: [
      "Integrated Excel with SAP2000",
      "Automated load calculation and assignment",
      "Automated the generation of structural analysis models",
    ],
    tech: ["Python", "CSI OAPI", "Excel"],
    demoVideo: "https://youtu.be/crL5hKoKt7Q",
    link: "https://youtu.be/crL5hKoKt7Q",
    github: null,
    status: "INTERNAL_TOOL",
    images: [
      {
        src: "/projects/ExcelToSAP2000byOAPI/ExcelToSAP2000byOAPI-1.png",
        caption: "FIG_01: DASHBOARD_UI",
      },
      {
        src: "/projects/ExcelToSAP2000byOAPI/ExcelToSAP2000byOAPI-1.png",
        caption: "FIG_01: DASHBOARD_UI",
      },
    ], // 預留圖片欄位
  },
  {
    id: "parametric-truss",
    title: "Parametric Truss Analysis",
    cover: "/projects/ExcelToSAP2000byOAPI/ExcelToSAP2000byOAPI-1.png",
    category: "CIVIL",
    subtitle:
      "Master's Thesis: Computational optimization for curved geometries",
    description:
      "An automated tool designed to solve the complexity of modeling free-form grid shells...",
    challenge:
      "Manual modeling of complex curves takes days and is prone to human error.",
    solution:
      "Built a Grasshopper-Python script that generates geometry based on mathematical functions...",
    features: [
      "40% reduction in modeling time",
      "Automatic node coordinate export",
      "Direct link to SAP2000 via API",
    ],
    tech: ["Rhino", "Grasshopper", "Python", "FEM"],
    demoVideo: "#",
    link: "#",
    github: "#",
    status: "RESEARCH",
    images: [],
  },
  // ... 其他專案請依此類推 ...
];
