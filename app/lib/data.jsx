// app/data.js (或 lib/data.js)

export const projectsData = [
   {
    id: "TimberCodeAI",
    title: "TimberCode AI: Conversational Structural Code Assistant",
    cover:"/projects/TimberCodeAI/TimberCodeAI-1.png",
    category: "HYBRID",
    subtitle:
      "Conversational Structural Code Assistant powered by Gemini Function Calling.",
    description:
      "An LLM-powered assistant that bridges natural language queries with deterministic engineering calculations for Taiwan timber design code. Built on a 'LLM handles language, Python handles facts' architecture—the language model interprets intent and orchestrates responses, while every numerical result, code citation, and member check is grounded in verified Python logic. The goal: eliminate numerical hallucination, the single most dangerous failure mode when AI meets engineering codes.",
    challenge:
      "Timber structural design in Taiwan demands fluent navigation of Taiwan Timber Code provisions, multi-case load combinations, and fire-resistance char-depth reductions—a steep barrier for engineers unfamiliar with wood as a structural material. A naive ChatGPT-style assistant cannot solve this: large language models routinely fabricate clause numbers, miscalculate section properties, and invent design equations that look authoritative but are wrong. In structural engineering, a hallucinated allowable stress isn't a quirky AI mistake—it's a liability. The challenge was to expose the conversational power of LLMs to junior engineers and students, without ever letting the model touch the math.",
    solution:
      "I architected TimberCode AI around a strict separation of duties: Gemini serves only as the natural-language interface and tool orchestrator, while all engineering logic lives in a deterministic Python core—the same verified functions that power Taiwan Timber Code Checker. When a user describes a design scenario in plain Chinese or English, the LLM parses intent, extracts parameters (member dimensions, species, load combinations, fire rating), and invokes the corresponding Python function via Gemini Function Calling. The function returns structured results with explicit clause references, which the LLM then narrates back to the user. The model never computes; it only translates. This design—closer to a structured agent than a chatbot—reduces hallucination on numerical and code-citation tasks to effectively zero, because the LLM has no opportunity to invent numbers it isn't allowed to produce.",
    features: [
  "Function Calling over RAG — engineering logic is invoked as deterministic Python tools, not retrieved as text, eliminating numerical and citation hallucination",
  "Bilingual conversational intake — describe a member, load combination, or fire scenario in plain Chinese or English; the assistant extracts structured parameters and routes them to the correct check",
  "Auditable output by design — every numerical result is paired with the Python function that produced it and the code clause it cites, so answers are traceable rather than opaque"
    ],
    tech: ["Python", "Streamlit","LLM","Function Calling","Gemini API"],
    demoVideo: ["https://www.youtube.com/watch?v=v9Wo87AF09s"],
    link: "https://bs-c.github.io/TaiwanTimberCode_Demo/",
    github: null,
    status: "BETA",
    images: [      
      {
        src: "/projects/TimberCodeAI/TimberCodeAI-1.png",
        caption: "FIG_01: User Interface ",
      },
],
  },
  {
    id: "TaiwanTimberCodeChecker",
    title: "Taiwan Timber Code: Wood Member Design Checker",
    cover:"/projects/TaiwanTimberCodeChecker/TaiwanTimberCodeChecker-1.png",
    category: "HYBRID",
    subtitle:
      "A web-based structural verification tool implementing Taiwan's Building Code for timber members, covering standard and fire-resistance design checks.",
    description:
      "A fully client-side web application that automates the structural verification of rectangular timber members per Taiwan Building Code. Handles material input, multi-case load combinations, and fire-resistance design with automatic char-depth section reduction.",
    challenge:
      "Structural verification of timber members under Taiwan's Building Code requires cross-referencing multiple tables—species classification, allowable stresses, slenderness reduction factors—while simultaneously performing multi-stage calculations for bending, shear, combined stress, and lateral buckling. Fire-resistance scenarios add further complexity, as the effective section must be reduced per charring depth based on the number of exposed faces. Manually navigating these interdependent calculations is tedious and error-prone.",
    solution:
      "A fully client-side web application that consolidates all verification workflows into a single interactive tool. Users input material properties, section dimensions, and load cases (long-term, short-term, and fire), and the system instantly computes safety ratios for all required checks. Fire design checks automatically reduce the effective section based on the number of exposed faces and re-run all verifications against fire-load combinations.",
    features: [
      "Five-check verification engine covering section properties, long-term / short-term allowable stress, slenderness ratio & three-stage buckling reduction (≤30, 30–100, >100), bending modification factors (size & lateral buckling), and combined stress ratios.",
      "Integrated fire-resistance module that calculates char-depth section reduction for 3-face, and 4-face fire exposure, then re-runs all checks against short-term allowable stresses scaled for fire loading.",
      "One-click PDF calculation sheet export, producing a print-ready document for design submissions and client presentations.",
    ],
    tech: ["JavaScript", "HTML/CSS"],
    demoVideo: ["https://youtu.be/-cL39BgUgmI"],
    link: "https://bs-c.github.io/TaiwanTimberCode_Demo/",
    github: "https://github.com/bs-c/TaiwanTimberCode_Demo",
    status: "DEPLOYED",
    images: [      
      {
        src: "/projects/TaiwanTimberCodeChecker/TaiwanTimberCodeChecker-1.png",
        caption: "FIG_01: User Interface ",
      },
      {
        src: "/projects/TaiwanTimberCodeChecker/TaiwanTimberCodeChecker-2.png",
        caption: "FIG_02: Calculation Basis",
      },],
  },
  {
    id: "TimeberExpertSystem", // 這是網址會用到的 slug (唯一識別碼)
    title: "Online Timber Expert System",
    cover: "/projects/TimeberExpertSystem/TimeberExpertSystem-1.png",
    category: "HYBRID",
    subtitle:
      "A Professional Web Tool for Chi Cheng Ltd.(啟誠興業股份有限公司): Integrating International Standards with Automated Material Selection.",
    description:
      "A web-based expert system that automates structural analysis and material selection for timber engineering, simplifying cross-border code compliance.",
    challenge:
      "Chi Cheng Ltd.(啟誠興業股份有限公司) aims to introduce high-quality international timber to the Taiwan market. However, local architects and structural engineers are often unfamiliar with foreign timber codes (EN/ANSI/JAS). The complexity of manually converting these specifications to Taiwan's Building Code created a knowledge gap, causing potential clients to hesitate in adopting timber solutions and slowing down the company's business growth.",
    solution:
      " I constructed a public-facing Expert System that encapsulates complex structural mechanics and code logic behind a user-friendly interface. Architects simply input design loads, and the system instantly recommends materials compliant with local regulations, accompanied by visual safety checks. This drastically lowers the technical barrier to entry and accelerates the decision-making process for clients.",
    features: [
      "Designed for external users, this engine automates the mapping of obscure foreign material parameters (EN/ANSI/JAS) to Taiwan Building Code values, making timber design accessible even to non-specialists.",
      `Provides a "What You See Is What You Get" design experience. Upon entering span and load data, the system calculates safety factors for Moment, Shear, and Deflection in real-time, displaying results with clear OK/NG indicators`,
      "Supports one-click generation of standard A4 structural calculation sheets and volume estimation tables. These reports are ready for client presentations or preliminary design submissions, enhancing communication efficiency.",
    ],
    tech: ["CSS", "JavaScript"],
    demoVideo: ["https://youtu.be/Mv2VLE2m2Cc"],
    link: "https://youtu.be/Mv2VLE2m2Cc",
    github: null,
    status: "BETA",
    images: [
      {
        src: "/projects/TimeberExpertSystem/TimeberExpertSystem-2.png",
        caption: "FIG_01: Input Interface ",
      },
      {
        src: "/projects/TimeberExpertSystem/TimeberExpertSystem-3.png",
        caption: "FIG_02: Calculation Result",
      },
      {
        src: "/projects/TimeberExpertSystem/TimeberExpertSystem-4.png",
        caption: "FIG_03: Export to PDF ",
      },
    ],
  },
  {
    id: "SurveyWebApp", // 這是網址會用到的 slug (唯一識別碼)
    title: "Survey Web App",
    cover: "/projects/SurveyWebApp/SurveyWebApp-1.png",
    category: "HYBRID",
    subtitle:
      "web-based surveying tool integrating traverse, leveling, and geometric alignment design, featuring project management and real-time graphical preview.",
    description:
      "A web-based surveying platform integrating traverse, leveling, and alignment calculations. Built with React, Django, and WebGL (R3F), it features real-time 2D visualization and multi-project management for streamlined engineering workflows.",
    challenge:
      "Traditional civil engineering surveying workflows often face challenges with fragmented file management and disjointed calculation processes, where data for different alignments is scattered without a unified interface for organization. This inefficiency is exacerbated by the disconnect between numerical input and graphical verification, as engineers cannot immediately see how changes to mileage or elevation parameters affect the actual geometry, making error detection difficult. Furthermore, the lack of a standardized, guided workflow increases the risk of formatting errors and missing files, ultimately compromising the reliability and efficiency of the surveying design process.",
    solution:
      "Survey Web App offers a comprehensive cloud-based solution that centralizes project management via an intuitive sidebar, enabling users to efficiently switch between and maintain multiple alignment projects. At its core, the platform integrates an Excel-like interactive editing grid with a high-performance WebGL rendering engine to achieve real-time synchronization between data and graphics; any modification to PVI or grade parameters is instantly reflected in the 2D alignment graph below, providing immediate visual feedback. Additionally, the system employs a standardized four-stage tabbed workflow that guides users sequentially through uploading, calculating, viewing, and saving, effectively minimizing human error and ensuring the accuracy of the surveying design results.",
    features: [
      "Covers traverse calculation, leveling, horizontal alignment analysis (including geometric interaction between two alignments), and vertical profile calculation.",
      "A high-performance 2D rendering viewport built on React Three Fiber, offering precise geometric representation and a smooth, CAD-like interactive experience (Pan/Zoom).",
      "Supports batch information import via Excel file upload.",
      "Generates detailed Excel calculation reports and standard DXF 2D alignment files complete with layer information.",
    ],
    tech: ["React", "Django", "R3F"],
    demoVideo: ["https://youtu.be/IOLdL3b16hc", "https://youtu.be/1AAcATYR4hM"],
    link: "https://youtu.be/1AAcATYR4hM",
    github: null,
    status: "INTERNAL_TOOL",
    images: [
      {
        src: "/projects/SurveyWebApp/SurveyWebApp-2.png",
        caption: "FIG_01: Demo Screenshot ",
      },
    ],
  },
  {
    id: "AR-Structural-Viz", // 這是網址會用到的 slug (唯一識別碼)
    title: "AR Structural Viz: QR-Anchored Blueprint Visualization",
    cover: "/projects/ARStructuralViz/ARStructuralViz-1.png",
    category: "HYBRID",
    subtitle:
      "Interactive 3D structural overlays via precise QR code anchoring using Unity & ARKit.",
    description:
      "Designed to bridge the gap between 2D drafts and 3D reality, this mobile application utilizes Unity and ARKit to bring structural blueprints to life. By detecting a specific QR code placed alongside the physical floor plan, the app calculates relative coordinates to accurately project a 1:1 scale 3D model onto the drawing. The system features a C#-based interactive interface, allowing users to toggle visibility for critical structural layers—footings, beams, columns, and slabs—providing a clear, X-ray-like understanding of the building's skeleton.",
    // --- 內頁專屬詳細內容 ---
    challenge:
      "Structural logic is often lost in flat 2D blueprints, making it difficult for students and clients to visualize vertical relationships and spatial depth. Traditional interpretation requires significant cognitive effort and is prone to miscommunication.",
    solution:
      "A marker-based AR solution that uses QR codes as high-stability anchors. Instead of relying solely on image recognition of the drawing itself, the QR code acts as a robust reference point, ensuring the 3D hologram is instantiated at the precise relative position over the blueprint, allowing for stable and interactive inspection.",
    features: [
      "Leverages ARKit to detect QR codes as fiducial markers, instantly generating and anchoring the 3D model to the blueprint with high stability and accurate alignment.",
      "Features a dynamic UI that empowers users to selectively show or hide specific structural elements (Footing, Beams, Columns, Slabs) for focused analysis.",
      "Written in C#, the custom logic ensures smooth performance and interaction, allowing for a seamless educational or presentation experience on mobile devices.",
    ],
    tech: ["Unity", "C#", "ARKit", "iOS"],
    demoVideo: ["https://youtu.be/3oYWGmNSFD4"],
    link: "https://youtu.be/3oYWGmNSFD4",
    github: null,
    status: "EXPERIMENTAL",
    images: [
      {
        src: "/projects/ARStructuralViz/ARStructuralViz-1.png",
        caption: "FIG_01: System Flowchart ",
      },
      {
        src: "/projects/ARStructuralViz/ARStructuralViz-2.png",
        caption: "FIG_02: Demo Screenshot ",
      },
    ],
  },
  {
    id: "GrasshopperSAP2000RealTime", // 這是網址會用到的 slug (唯一識別碼)
    title: "Grasshopper-SAP2000 Real-Time Interoperability Link",
    cover:
      "/projects/GrasshopperSAP2000RealTime/GrasshopperSAP2000RealTime-1.png",
    category: "HYBRID",
    subtitle:
      "Bridging Parametric Geometry and Structural Analysis via Python & CSI OAPI",
    description:
      "A computational design tool that establishes a live data bridge between Rhino/Grasshopper and SAP2000. By leveraging Python to wrap the CSI OAPI, this project allows for real-time synchronization of geometric data. Changes in Grasshopper parameters are instantly reflected in the SAP2000 analysis model, enabling a seamless Design-Analyze feedback loop.",
    // --- 內頁專屬詳細內容 ---
    challenge:
      "Traditional structural workflows involve a disconnected process where geometry is modeled in CAD/Rhino and then manually rebuilt or imported into analysis software (SAP2000). This static data exchange makes design iterations slow and cumbersome, as every geometric modification requires re-exporting and re-defining boundary conditions.",
    solution:
      "I developed a Python-based connector script within Grasshopper that acts as a direct driver for SAP2000 via its OAPI. This eliminates file exchange entirely. The tool listens to parametric changes in Grasshopper and programmatically updates nodes, frames, and assignments in SAP2000 in real-time.",
    features: [
      "Modifying sliders in Grasshopper (e.g., span, height, truss depth) instantly updates the SAP2000 model geometry without manual exporting.",
      "Uses Python to interface with the CSI OAPI, handling complex object creation and modification commands automatically.",
      "Enables engineers to visualize structural implications of geometric changes immediately, facilitating rapid optimization during the conceptual design phase.",
    ],
    tech: ["Python", "CSI OAPI", "grasshopper"],
    demoVideo: ["https://youtu.be/wbapGJKBuY8"],
    link: "https://youtu.be/wbapGJKBuY8",
    github: null,
    status: "PROTOTYPE",
    images: [
      {
        src: "/projects/GrasshopperSAP2000RealTime/GrasshopperSAP2000RealTime-1.png",
        caption: "FIG_01: System Flowchart",
      },
      {
        src: "/projects/GrasshopperSAP2000RealTime/GrasshopperSAP2000RealTime-2.png",
        caption: "FIG_02: Demo Screenshot",
      },
    ],
  },
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
