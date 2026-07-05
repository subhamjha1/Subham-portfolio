export const myProjects = [
  {
    id: 1,
    title: "Leukemia Stage Classifier — CNN + VLM Ensemble",
    description:
      "A calibration-aware ensemble framework for leukemia stage classification from peripheral blood smear images, combining Inception V3 with Qwen3-VL as a probabilistic reasoning agent.",
    subDescription: [
      "Achieved 98.6% cross-validated accuracy across 4 leukemia stages (Benign, Pre-leukemic, Early, Advanced) on 3,256 PBS images.",
      "Reduced Expected Calibration Error by 26% (0.0072 → 0.0053) using sampling-based VLM fusion — statistically significant at p < 0.05.",
      "Integrated Grad-CAM visualisations confirming 87.3% activation overlap with cell nuclei, validating biological plausibility.",
      "Built automated diagnostic report generator with uncertainty flags and clinician-readable summaries via Qwen3-VL.",
    ],
    href: "https://github.com/subhamjha1",
    logo: "",
    image: "/assets/projects/accessories.jpg",
    tags: [
      { id: 1, name: "Python", path: "/assets/logos/html5.svg" },
      { id: 2, name: "TensorFlow", path: "/assets/logos/microsoft.svg" },
      { id: 3, name: "Azure", path: "/assets/logos/azure.svg" },
      { id: 4, name: "Git", path: "/assets/logos/git.svg" },
    ],
  },
  {
    id: 2,
    title: "Real-Time Business Analytics Platform",
    description:
      "A production-grade streaming and batch data pipeline to monitor business KPIs in real time with automated data validation and versioned workflows.",
    subDescription: [
      "Designed end-to-end streaming & batch pipelines using Azure Databricks, Kafka, and Delta Lake.",
      "Enabled reliable, scalable KPI reporting infrastructure reducing data latency significantly over batch-only approaches.",
      "Implemented automated data validation and versioned workflows for audit-ready reporting.",
      "Supports live business decision-making with real-time dashboard integration.",
    ],
    href: "https://github.com/subhamjha1",
    logo: "",
    image: "/assets/projects/elearning.jpg",
    tags: [
      { id: 1, name: "Azure", path: "/assets/logos/azure.svg" },
      { id: 2, name: "SQL", path: "/assets/logos/microsoftsqlserver.svg" },
      { id: 3, name: "JavaScript", path: "/assets/logos/javascript.svg" },
      { id: 4, name: "Git", path: "/assets/logos/git.svg" },
    ],
  },
  {
    id: 3,
    title: "Vera — Live Production REST API",
    description:
      "A production-ready REST API shipped under the magicpin Vera Challenge — structured, optimised endpoints fully deployed under competition constraints.",
    subDescription: [
      "Converted broad, ambiguous requirements into structured, optimised API endpoints under tight deadlines.",
      "Built with FastAPI and Docker for containerised, scalable deployment — fully live, not a prototype.",
      "Implemented SQL-backed data models with clean endpoint design and error handling.",
      "Demonstrated the ability to stay calm, structure problems, and ship under real commercial pressure.",
    ],
    href: "https://github.com/subhamjha1",
    logo: "",
    image: "/assets/projects/auth-system.jpg",
    tags: [
      { id: 1, name: "Python", path: "/assets/logos/html5.svg" },
      { id: 2, name: "Docker", path: "/assets/logos/vitejs.svg" },
      { id: 3, name: "SQL", path: "/assets/logos/sqlite.svg" },
      { id: 4, name: "Git", path: "/assets/logos/git.svg" },
    ],
  },
  {
    id: 4,
    title: "GenAI Recruitment Engine",
    description:
      "An embedding-based candidate screening system using Gemini Pro and LangChain to evaluate and rank resumes at scale.",
    subDescription: [
      "Built a GenAI candidate screening system with embedding-based similarity search using Vector DB.",
      "Improved hiring relevance via decision logic optimisation and semantic ranking of applicant profiles.",
      "Integrated Gemini Pro and LangChain for intelligent resume parsing and natural language understanding.",
      "Designed for scale — evaluates and ranks large candidate pools without manual review bottlenecks.",
    ],
    href: "https://github.com/subhamjha1",
    logo: "",
    image: "/assets/projects/game-engine.jpg",
    tags: [
      { id: 1, name: "Python", path: "/assets/logos/html5.svg" },
      { id: 2, name: "React", path: "/assets/logos/react.svg" },
      { id: 3, name: "JavaScript", path: "/assets/logos/javascript.svg" },
      { id: 4, name: "Git", path: "/assets/logos/git.svg" },
    ],
  },
  {
    id: 5,
    title: "Zestie — AI Fitness Assistant",
    description:
      "An LLM-powered personalised fitness buddy built after 47 user interviews — solving real pain points, not assumed ones.",
    subDescription: [
      "Conducted 47 user interviews to validate the core problem before writing a single line of code.",
      "Owned the entire product arc solo: research → RICE prioritisation → PRD → Figma design → solution delivery.",
      "Designed LLM-powered personalisation layer addressing the key insight that generic apps fail to adapt to individual needs.",
      "Built with a product-first mindset — demonstrates the same user empathy needed for complex stakeholder-facing roles.",
    ],
    href: "https://github.com/subhamjha1",
    logo: "",
    image: "/assets/projects/blazor-app.jpg",
    tags: [
      { id: 1, name: "Python", path: "/assets/logos/html5.svg" },
      { id: 2, name: "React", path: "/assets/logos/react.svg" },
      { id: 3, name: "Tailwind", path: "/assets/logos/tailwindcss.svg" },
      { id: 4, name: "Git", path: "/assets/logos/git.svg" },
    ],
  },
  {
    id: 6,
    title: "Cars24 vs Spinny — Buyer Journey Teardown",
    description:
      "A data-backed competitive teardown of the digital used-car buying journey across Cars24, Spinny, and CarDekho.",
    subDescription: [
      "Mapped the full digital purchase funnel across three platforms using Python & Excel.",
      "Identified conversion drop-offs, trust gaps, and UX friction points with data-backed hypotheses.",
      "Delivered C-suite-ready analysis with actionable recommendations on pricing transparency and buyer confidence.",
      "Proposed product interventions directly applicable to OEM digital strategy questions every automotive brand faces.",
    ],
    href: "https://github.com/subhamjha1",
    logo: "",
    image: "/assets/projects/wordpress-theme.jpg",
    tags: [
      { id: 1, name: "Python", path: "/assets/logos/html5.svg" },
      { id: 2, name: "SQL", path: "/assets/logos/microsoftsqlserver.svg" },
      { id: 3, name: "JavaScript", path: "/assets/logos/javascript.svg" },
      { id: 4, name: "Git", path: "/assets/logos/git.svg" },
    ],
  },
];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "https://wa.me/917982262704",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/subham-jha-02aug2002/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "GitHub",
    href: "https://github.com/subhamjha1",
    icon: "/assets/socials/instagram.svg",
  },
];

export const experiences = [
  {
    title: "AI Product Manager Intern",
    job: "IBM SkillsBuild",
    date: "Aug 2025",
    contents: [
      "Owned a WhatsApp + web AI product end-to-end — single SPOC across engineering, design, and business teams with zero escalations.",
      "Defined and tracked product KPIs; ran post-launch funnel analysis to identify user drop-offs and iterated within the same sprint.",
      "Worked cross-functionally to turn ambiguous business requirements into structured PRDs and measurable success metrics.",
      "Communicated complex AI product behaviour in simple terms to non-technical stakeholders.",
    ],
  },
  {
    title: "ML Research Intern",
    job: "DTU Research Lab",
    date: "May – Jul 2025",
    contents: [
      "Built a CNN-based leukemia detection pipeline end-to-end: data preprocessing, model training, evaluation, and optimisation.",
      "Published research on calibration-aware ensemble learning combining Inception V3 CNN with Qwen3-VL vision-language model.",
      "Achieved 98.6% cross-validated accuracy; reduced Expected Calibration Error by 26% using VLM-augmented ensemble fusion.",
      "Collaborated with academic mentors to apply research-grade rigour to a real healthcare use case and presented findings to non-technical faculty.",
    ],
  },
  {
    title: "Business & Data Analyst Intern",
    job: "JMD Enterprises",
    date: "May – Oct 2024",
    contents: [
      "Analysed cost, demand & operational performance data to identify trends and support data-driven strategic decisions for senior stakeholders.",
      "Built executive-ready Power BI & Excel dashboards tracking live KPIs, planning variances, and business health metrics used in monthly reviews.",
      "Automated data-cleaning & reporting workflows using Python (Pandas), cutting manual effort by ~60% and improving data accuracy.",
      "Translated ambiguous business questions into structured SQL queries and reports — delivered insights directly used in operational decision-making.",
    ],
  },
  {
    title: "Founder",
    job: "VisionAI Shades (AI Startup)",
    date: "Oct 2025 – Present",
    contents: [
      "Leading product strategy, MVP development, and business planning for an AI-powered assistive wearable for real-time object detection & navigation.",
      "Driving market research, user validation, hardware–software integration, and go-to-market strategy as solo founder.",
      "Managed brand partnerships and raised ₹5L+ in sponsorship as Corporate Head of Yuvaan & Invictus DTU through structured business pitches.",
    ],
  },
];

export const reviews = [
  {
    name: "Jyant",
    username: "@jay",
    body: "Subham's analytical thinking is exceptional — he turned our messy data into insights we actually acted on.",
    img: "https://robohash.org/jay",
  },
  {
    name: "Tarun",
    username: "@tarun_dtu",
    body: "The dashboards Subham built saved us hours every week. Clean, intuitive, and exactly what we needed.",
    img: "https://robohash.org/tarun",
  },
  {
    name: "Keshav",
    username: "@keshav_pm",
    body: "He has this rare ability to understand a business problem before jumping to a solution. Impressive for someone so early in his career.",
    img: "https://robohash.org/keshav",
  },
  {
    name: "Amrit",
    username: "@amrit_ml",
    body: "Working with Subham on the research lab project was fantastic. He owns problems end-to-end without hand-holding.",
    img: "https://robohash.org/amrit",
  },
  {
    name: "Priya",
    username: "@priya_tech",
    body: "He shipped a fully working API in a competition setting. No excuses, no delays — just results.",
    img: "https://robohash.org/priya",
  },
  {
    name: "Rakesh",
    username: "@rakesh_ibm",
    body: "Subham asked the right questions from day one and translated ambiguity into structure faster than most senior colleagues.",
    img: "https://robohash.org/rakesh",
  },
  {
    name: "Deepak",
    username: "@deepak_biz",
    body: "I've seen the Cars24 teardown — the depth of funnel analysis was C-suite ready. Honestly impressive work.",
    img: "https://robohash.org/deepak",
  },
  {
    name: "Tanvi",
    username: "@tanvi_ai",
    body: "The leukemia research is genuinely novel — using VLMs for confidence calibration in medical AI is a smart framing.",
    img: "https://robohash.org/tanvi",
  },
];
