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
    demoVideo: ["https://youtu.be/crL5hKoKt7Q"],
    link: "https://youtu.be/crL5hKoKt7Q",
    github: null,
    status: "INTERNAL_TOOL",
    images: [
      {
        src: "/projects/ExcelToSAP2000byOAPI/ExcelToSAP2000byOAPI-1.png",
        caption: "FIG_01: Demo Screenshot",
      },
    ],
  },
  {
    id: "Inspection-System",
    title: "Construction Inspection Management System",
    cover: "/projects/InspectionSystem/Inspection-System-1.png",
    category: "HYBRID",
    subtitle:
      "Streamlining site inspections via Python & LINE Bot integration for real-time stakeholder synchronization.",
    description:
      "Digitizing construction management by converting manual workflows into a transparent, standardized system...",
    challenge:
      "Traditional construction projects often suffer from procedural non-compliance and information silos. Contractors frequently bypass standard inspection protocols, causing scheduling conflicts for supervisors. Meanwhile, owners and project managers lack a transparent channel to track inspection progress, leading to information asymmetry and inefficient decision-making.",
    solution:
      "An automated inspection hub driven by Python logic. The system utilizes Google Sheets for a lightweight, collaborative database and LINE Bot for a highly accessible user interface. It enforces standard application procedures for contractors, provides mobile reporting tools for supervisors, and offers real-time data visualization for owners.",
    features: [
      "Process Standardization & Error Prevention",
      "Real-time LINE Bot Interface",
      "Cloud Synchronization & Progress Tracking",
    ],
    tech: ["Python", "Line ChatBot", "Google Sheet"],
    demoVideo: ["https://youtu.be/iFNkS2v9hEE"],
    link: "https://youtu.be/iFNkS2v9hEE",
    github: null,
    status: "PROTOTYPE",
    images: [
      {
        src: "/projects/InspectionSystem/Inspection-System-1.png",
        caption: "FIG_01: System Diagram",
      },
    ],
  },
  {
    id: "3DTrussplatform",
    title: "Web-based 3D Truss Analysis Application",
    cover: "/projects/3DTrussplatform/3DTrussplatform-1.png",
    category: "HYBRID",
    subtitle: "A Full-Stack Solution Integrating React & Python FEM.",
    description:
      "This project bridges modern web tech with structural mechanics to create a lightweight, cross-platform analysis environment.",
    challenge:
      "The main challenge was achieving high-performance 3D rendering and interaction in the web while handling intensive FEM matrix calculations.",
    solution:
      "Implemented a decoupled architecture: React + R3F on the frontend for a CAD-like feel, and Django + Python on the backend for scientific computing, balancing interactivity with power.",
    features: [
      "Versatile Modeling & DXF Support",
      "Python-Powered FEM Engine",
      "Interactive Data Visualization",
    ],
    tech: ["Python", "Django", "React", "three.js(R3F)"],
    demoVideo: ["https://youtu.be/S-NDjL-cWu0", "https://youtu.be/CF56by8XvwI"],
    link: "https://youtu.be/CF56by8XvwI",
    github: null,
    status: "EXPERIMENTAL",
    images: [
      {
        src: "/projects/3DTrussplatform/3DTrussplatform-1.png",
        caption: "FIG_01: Demo Screenshot",
      },
    ],
  },
  // ... 其他專案請依此類推 ...
];
