export const profile = {
  name: "Janit Rajkarnikar",
  role: "Software Engineer",
  lede: "I build across web, mobile, and backend — most recently a four-surface product, a Rust-and-Python code-retrieval engine, and a couple of research papers.",
  location: "Hattiesburg, MS",
  email: "rajkarnikarjanit22@gmail.com",
  github: "https://github.com/aniJani",
  linkedin: "https://www.linkedin.com/in/janitrajkarnikar/",
  cv: "/Janit_Rajkarnikar_Resume.pdf",
  education: {
    school: "University of Southern Mississippi",
    degree: "B.S. Computer Science, minors in Mathematics and Data Analysis",
    detail: "GPA 4.0 · President's List every semester",
    year: "2026",
  },
};

export const experience = [
  {
    id: "illumibot",
    company: "Illumibot (ArroyoDev)",
    role: "Software Engineer",
    period: "Feb 2026 — Present",
    stack: ["Flutter", "React", "TypeScript", "Supabase", "Python", "OpenCV"],
    points: [
      "Ship across four surfaces — Flutter mobile, React web, Deno serverless on Supabase, and a Python/OpenCV service — for a two-sided marketplace with Stripe Connect payouts, Algolia search, and realtime messaging.",
      "Built the projector-to-surface computer-vision pipeline: homography, multi-projector stitching, ArUco calibration, and LoFTR feature matching on Apple-Silicon MPS, running on Cloud Run and consumed in-app through a hand-written GLSL keystone-warp shader.",
    ],
  },
  {
    id: "cloudcrust",
    company: "CloudCrust LLC",
    role: "Software Intern",
    period: "Sep 2025 — Jan 2026",
    stack: ["Next.js", "React Native"],
    points: [
      "Built production web and mobile features around geospatial visualization and location-based data workflows, plus authentication and subscription billing for shipped apps.",
    ],
  },
  {
    id: "woafmeow",
    company: "Woafmeow, Inc.",
    role: "Software Engineer Intern",
    period: "Aug 2024 — May 2025",
    stack: ["FastAPI", "React Native", "PostgreSQL", "Azure"],
    points: [
      "Built FastAPI and React Native features on PostgreSQL/Azure, improving user engagement by 30%.",
      "Refactored the backend into a modular architecture, removing 200+ lines of duplicated logic.",
    ],
  },
];

export const openSource = [
  {
    id: "graphify",
    project: "Graphify",
    // PR was closed, not merged — the maintainer folded the change into the
    // release commit and credited it. Verified the test + guard exist at v0.9.36.
    label: "PR #2522 · shipped in v0.9.36",
    scale: "104k stars · Python",
    blurb:
      "graphify cluster-only ignored the return value of to_json(), so when the shrink guard refused to overwrite graph.json the command still exited 0 and printed \u201cupdated\u201d \u2014 leaving the report and labels describing a clustering the graph did not contain. Reordered the writes so the graph goes first, checked the refusal, and exited non-zero naming the untouched artifacts. Shipped with a regression test.",
    links: [
      {
        label: "PR #2522",
        href: "https://github.com/Graphify-Labs/graphify/pull/2522",
      },
      {
        label: "v0.9.36 release",
        href: "https://github.com/Graphify-Labs/graphify/releases/tag/v0.9.36",
      },
    ],
  },
  {
    id: "scrapy",
    project: "Scrapy",
    label: "PR #7818 · merged",
    scale: "64k stars · Python",
    blurb:
      "Fixed a Python 3.14 forward-compatibility break \u2014 PEP 649 lazy annotations raising NameError during Scrapy's middleware and stats-collector introspection. Shipped a signature-inspection helper with regression tests, merged after maintainer review.",
    links: [
      {
        label: "PR #7818",
        href: "https://github.com/scrapy/scrapy/pull/7818",
      },
    ],
  },
];

export const publications = [
  {
    id: "roberta-openstack",
    authors: "J. Rajkarnikar, N. Poudel, N. Rahimi",
    position: "First author",
    title:
      "Unsupervised Anomaly Detection in OpenStack Logs via Fine-Tuned RoBERTa Embeddings",
    venue: "Journal of Cybersecurity, Digital Forensics and Jurisprudence",
    detail: "vol. 1, pp. 9–21",
    year: "2025",
    note: "RoBERTa + LoRA/PEFT embeddings · 0.97 F1 · 0.99 ROC-AUC",
    href: "https://www.cdfjjournal.com/index.php/cdfj/article/view/3",
  },
  {
    id: "xattnfusion",
    authors: "J. Rajkarnikar, S. Joshi, Z. Zhou",
    position: "First author",
    title:
      "Macro–Market Fusion with Cross-Attention for Equity Return Prediction",
    venue: "Mathematics",
    detail: "vol. 14, no. 8, art. 1361",
    year: "2026",
    note: "XAttnFusion · 0.63 AUROC on SPY · +8.1% over best baseline",
    // DOI confirmed via Crossref: title, all three authors and vol/issue match
    href: "https://doi.org/10.3390/math14081361",
  },
  {
    id: "phishing-ensemble",
    authors: "D. Precious-Esue, J. Rajkarnikar, B. Bellrose, et al.",
    position: "Co-author",
    title: "Ensemble Machine Learning Approach to Phishing Website Detection",
    venue: "Computers and Their Applications (CATA), Springer CCIS",
    detail: "vol. 2435",
    year: "2025",
    note: "Bagging ensemble · 98.66% accuracy",
    href: "https://doi.org/10.1007/978-3-031-92178-0_8",
  },
];

const shots = (files) => files.map((f) => `/${f}`);

export const projects = [  {
    id: "suga",
    name: "Suga",
    blurb:
      "A workflow-automation companion that captures and replays user actions, turning observed interactions into reusable automated workflows across 12+ SaaS integrations. Fastify and BullMQ/Redis workers behind a Next.js and React Flow visual builder.",
    stack: ["TypeScript", "Fastify", "Next.js", "Redis", "Electron"],
    links: [{ label: "suga.cx", href: "https://suga.cx" }],
    media: { type: "video", src: "https://www.youtube.com/embed/9iAq3HovZnc" },
  },
  {
    id: "ponpon",
    name: "PonPon",
    blurb:
      "A small, cute Pomodoro timer that occupies a sliver of your screen and otherwise stays out of the way. Tauri app; Windows and Apple Silicon builds on GitHub.",
    stack: ["React", "TypeScript", "Tauri", "Node.js"],
    links: [
      {
        label: "macOS (.dmg)",
        href: "https://github.com/aniJani/PonPon/releases/download/v0.2.0/ponpon_0.2.0_aarch64.dmg",
      },
      {
        label: "github.com/aniJani/PonPon",
        href: "https://github.com/aniJani/PonPon",
      },
    ],
    media: {
      type: "carousel",
      images: shots([
        "ponpon1.png",
        "ponpon2.png",
        "ponpon3.png",
        "ponpon4.png",
      ]),
    },
  },

  {
    id: "axess",
    name: "AxessProtocol",
    blurb:
      "A marketplace for renting out idle GPUs, with payment settled on-chain. I built the host agent: it detects the machine's specs, registers it on Aptos, launches the renter's job in a Docker container with GPU passthrough, exposes a Jupyter notebook over a Cloudflare tunnel, and claims streaming payments on-chain while the job runs. Move contracts and frontend by Nishan Thapa; four repos, two people.",
    stack: ["Python", "Aptos", "Move", "Docker", "asyncio", "WebSockets"],
    links: [
      {
        label: "github.com/aniJani/oracleAgent",
        href: "https://github.com/aniJani/oracleAgent",
      },
      {
        label: "live frontend",
        href: "https://axess-protocol-frontend.vercel.app",
      },
      {
        label: "contracts (Move)",
        href: "https://github.com/Nishan30/AxessProtocol",
      },
    ],
    media: {
      type: "spec",
      facts: [
        ["My part", "Host / oracle agent — 22 of 24 commits"],
        ["Chain", "Aptos · Move modules for escrow + reputation"],
        ["Runtime", "Docker with NVIDIA GPU passthrough"],
        ["Access", "Jupyter over Cloudflare tunnel, basic auth"],
        ["Payments", "Streaming on-chain claims while the job runs"],
        ["Shape", "4 repos · agent, backend, contracts, frontend"],
      ],
    },
  },
  {
    id: "reposynth",
    name: "RepoSynth",
    blurb:
      "A repository-understanding and retrieval platform. It fuses semantic search over SentenceTransformers/FAISS with lexical symbol matching, then feeds an LLM context engine over large codebases. A Rust tree-sitter parsing daemon with commit-keyed multi-stage caching cuts repeated re-analysis from 40s to 2s.",
    stack: ["Python", "Rust", "TypeScript", "FAISS", "FastAPI"],
    // reposynth.com is down — point at the public repo instead
    links: [
      {
        label: "github.com/aniJani/reposynth",
        href: "https://github.com/aniJani/reposynth",
      },
    ],
    media: {
      type: "carousel",
      images: shots([
        "reposynth.png",
        "reposynth2.png",
        "reposynth3.png",
      ]),
    },
  },
  {
    id: "asbuilt",
    name: "asbuilt",
    blurb:
      "A read-only MCP server that extracts a codebase's backend assumptions — Supabase/Firebase/Postgres calls, tables, auth rules — across TypeScript and Python, then verifies them against the live backend and reports every mismatch with file:line provenance.",
    stack: ["Python", "tree-sitter", "MCP"],
    links: [],
    media: {
      type: "spec",
      facts: [
        ["Surface", "Model Context Protocol server"],
        ["Languages parsed", "TypeScript, Python"],
        ["Backends verified", "Supabase, Firebase, Postgres"],
        ["Tests", "118 — near 1:1 test-to-code"],
        ["Mode", "Read-only. Never mutates the backend."],
      ],
    },
  },
  {
    id: "permit-pro",
    name: "Permit Pro",
    blurb:
      "A cross-platform app for the construction industry that turns building-permit data into actionable leads, with interactive heat maps, analytics dashboards, and in-app subscriptions. Built with a local business owner and shipped to both stores.",
    stack: ["React Native", "Expo", "TypeScript", "Django"],
    links: [
      {
        label: "App Store",
        href: "https://apps.apple.com/us/app/the-permit-pro/id6751512655",
      },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.permit.PermitPro",
      },
    ],
    media: {
      type: "carousel",
      images: shots([
        "pp.jpg",
        "pp1.png",
        "pp2.png",
        "pp3.png",
        "pp4.png",
        "pp5.jpg",
      ]),
    },
  },
  {
    id: "jb-construction",
    name: "Jackson Brothers Construction",
    blurb:
      "A business site for a family-owned general contractor: an interactive D3 service-area map, headless CMS so the owner can edit copy without a developer, and lead-generation forms.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Sanity", "D3.js"],
    links: [
      {
        label: "welikeconstruction.com",
        href: "https://www.welikeconstruction.com",
      },
    ],
    media: { type: "carousel", images: shots(["jb1.png", "jb3.png"]) },
  },
  {
    id: "infolaya",
    name: "Infolaya",
    blurb:
      "A no-code data processing and visualization platform that turns complex datasets into recommendations and insights, so people without a technical background can analyze and visualize their own data.",
    stack: ["Next.js", "Node.js", "FastAPI", "MongoDB", "Firebase"],
    links: [{ label: "infolaya.tech", href: "https://www.infolaya.tech/" }],
    media: {
      type: "carousel",
      images: shots([
        "infolaya1.png",
        "infolaya2.png",
        "infolaya3.png",
      ]),
    },
  },
  {
    id: "baagchal",
    name: "Baagchal",
    blurb:
      "A digital version of the traditional Nepali board game Baagchal, with real-time multiplayer over Socket.io.",
    stack: ["Next.js", "Node.js", "Socket.io", "MongoDB", "Azure"],
    links: [{ label: "baagchal.com", href: "https://www.baagchal.com/" }],
    media: {
      type: "carousel",
      images: shots([
        "baagchal1.png",
        "baagchal2.png",
        "baagchal3.png",
        "baagchal4.png",
      ]),
    },
  },
  {
    id: "gtn",
    name: "Guess The Nepali",
    blurb:
      "An interactive game that challenges players to guess Nepali people's ethnicities — made as a tribute to the cultural diversity in Nepal.",
    stack: ["Next.js", "Node.js", "MongoDB"],
    links: [
      { label: "guessthenepali.com", href: "https://www.guessthenepali.com/" },
    ],
    media: {
      type: "carousel",
      images: shots(["gtn1.png", "gtn2.png", "gtn3.png", "gtn4.png"]),
    },
  },
  {
    id: "speed-reader-trainer",
    name: "Speed Reader Trainer",
    blurb:
      "A reading trainer that helps people push their reading speed up without losing comprehension.",
    stack: ["Next.js", "Node.js"],
    links: [
      {
        label: "speed-reader-trainer.vercel.app",
        href: "https://speed-reader-trainer.vercel.app/",
      },
    ],
    media: {
      type: "carousel",
      images: shots([
        "spr1.png",
        "spr2.png",
        "spr3.png",
        "spr4.png",
        "spr5.png",
      ]),
    },
  },
  {
    id: "designers-touch",
    name: "The Designer's Touch",
    blurb:
      "A creative platform for designing custom t-shirts and merchandise, with a real-time 3D preview rendered in Three.js.",
    stack: ["React", "Node.js", "Three.js", "Express", "Firebase", "AWS"],
    links: [],
    media: {
      type: "carousel",
      images: shots([
        "dt.png",
        "dt2.png",
        "dt3.png",
        "dt4.png",
        "dt6.png",
        "dt7.png",
        "dt8.png",
      ]),
    },
  },
  {
    id: "emoki",
    name: "Emoki",
    blurb:
      "An emotion-tracking app that aggregates how you felt over time, so patterns you would not notice day to day become visible.",
    stack: [
      "React Native",
      "Node.js",
      "SQLite",
      "Express",
      "Flask",
      "Firebase",
      "MongoDB",
    ],
    links: [],
    media: {
      type: "carousel",
      images: shots([
        "Emoki (1).jpg",
        "Emoki (2).jpg",
        "Emoki (3).jpg",
        "Emoki (4).jpg",
        "Emoki (5).jpg",
        "Emoki (6).jpg",
      ]),
    },
  },
  {
    id: "calorie-tracker",
    name: "Calorie Tracker",
    blurb:
      "A deliberately plain mobile app for tracking daily calorie intake — the whole point was that logging a meal takes one screen.",
    stack: ["React Native", "Node.js", "SQLite"],
    links: [],
    media: {
      type: "carousel",
      images: shots([
        "CalorieTracker (2).jpg",
        "CalorieTracker (3).jpg",
        "CalorieTracker (1).jpg",
        "CalorieTracker (5).jpg",
        "CalorieTracker (4).jpg",
      ]),
    },
  },
];
