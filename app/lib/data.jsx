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
  {
    id: "RevitRebarAPI",
    title: "Revit Rebar Automation Plugin",
    cover: "/projects/RevitRebarAPI/RevitRebarAPI-1.jpeg",
    category: "HYBRID",
    subtitle: "A High-Efficiency BIM Tool Integrating C# and Revit API",
    description: `An efficiency tool developed using the Revit API and Windows Forms. It transforms the tedious manual rebar placement process into simple parameter inputs through automation algorithms, achieving a seamless "input-to-model" workflow.`,
    challenge:
      "In the traditional structural detailing workflow, there is a significant disconnect between calculation and modeling. Engineers often have to manually convert the required reinforcement area (calculated in Excel) into specific bar counts and spacing, then manually place these elements in Revit. This process is not only repetitive and time-consuming but also prone to human error—a simple miscalculation or a slip of the mouse can lead to inaccurate documentation or clashes, creating a bottleneck in the BIM delivery pipeline.",
    solution: `To bridge this gap, I developed a custom C# automation tool integrated directly into Revit. By leveraging the Revit API and Windows Forms, I created a seamless interface where users simply input the design parameters—specifically the required steel area and bar size. The plugin's underlying algorithm instantly processes these inputs to determine the optimal rebar configuration and programmatically generates the 3D rebar entities. This transforms a multi-step, manual drafting task into a "single-click" automated operation, ensuring both geometric precision and data consistency.`,
    features: [
      `Intuitive Parameter Input (Windows Forms) Developed with Windows Forms to provide a clean interface, allowing users to easily input "Required Reinforcement Area" and select standard "Bar Sizes," lowering the barrier to entry.`,
      "Intelligent Calculation Logic Built-in algorithms automatically convert user inputs into the optimal rebar spacing and quantity based on design requirements, eliminating the need for manual calculation.",
      "Directly interacts with the Revit core to eliminate repetitive manual clicking, generating precise 3D rebar models with a single click to significantly improve modeling efficiency and accuracy.",
    ],
    tech: ["C#", "Revit API", ".NET Framework"],
    demoVideo: ["https://youtu.be/pgxuDWJs-aQ", "https://youtu.be/JOBQ3_T3Pkk"],
    link: "https://youtu.be/pgxuDWJs-aQ",
    github: null,
    status: "PROTOTYPE",
    images: [
      {
        src: "/projects/RevitRebarAPI/RevitRebarAPI-2.png",
        caption: "FIG_01: Automated Column Reinforcement Demo",
      },
      {
        src: "/projects/RevitRebarAPI/RevitRebarAPI-3.png",
        caption: "FIG_02: Automated Beam Reinforcement Demo",
      },
    ],
  },
  // ... 其他專案請依此類推 ...
];
