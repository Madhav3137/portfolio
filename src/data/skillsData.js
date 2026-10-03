// Skills Inventory & Skill Tree Data
export const skillCategories = [
  { id: "all", label: "ALL INVENTORY" },
  { id: "cyber", label: "CYBERSECURITY" },
  { id: "dev", label: "WEB DEV" },
  { id: "lang", label: "PROGRAMMING" },
  { id: "tools", label: "TOOLS & HARDWARE" }
];

export const skillsData = [
  // Programming
  {
    id: "cpp",
    name: "C++",
    category: "lang",
    rarity: "Epic",
    level: "LVL 88",
    color: "#00758f",
    description: "High-performance object-oriented programming, low-level memory management, and data structures.",
    stats: "Speed +40 | Memory Ctrl +50"
  },
  {
    id: "java",
    name: "Java",
    category: "lang",
    rarity: "Epic",
    level: "LVL 85",
    color: "#f89820",
    description: "Enterprise OOP architecture, robust collections framework, and multi-threaded applications.",
    stats: "Stability +45 | OOP Mastery +50"
  },
  {
    id: "javascript",
    name: "JavaScript",
    category: "lang",
    rarity: "Legendary",
    level: "LVL 92",
    color: "#f7df1e",
    description: "Modern ES6+, async/await concurrency, DOM manipulation, closures, and full-stack event loops.",
    stats: "Versatility +50 | Interactivity +45"
  },
  {
    id: "python",
    name: "Python",
    category: "lang",
    rarity: "Legendary",
    level: "LVL 95",
    color: "#3776ab",
    description: "Machine Learning (Isolation Forest), automated threat detection scripts, sockets, and data processing.",
    stats: "ML Power +55 | Scripting Speed +60"
  },

  // Web Development
  {
    id: "react",
    name: "React.js",
    category: "dev",
    rarity: "Legendary",
    level: "LVL 92",
    color: "#61dafb",
    description: "Component lifecycle, custom hooks, context state management, virtual DOM, and responsive UI engineering.",
    stats: "UI Fluidity +50 | Modularity +50"
  },
  {
    id: "html5",
    name: "HTML5",
    category: "dev",
    rarity: "Rare",
    level: "LVL 95",
    color: "#e34f26",
    description: "Semantic web structure, accessibility (a11y), responsive viewport architectures, and SEO tags.",
    stats: "Structure +40 | Accessibility +40"
  },
  {
    id: "css3",
    name: "CSS3 / Vanilla",
    category: "dev",
    rarity: "Rare",
    level: "LVL 90",
    color: "#264de4",
    description: "Flexbox, CSS Grid, custom pixel borders, keyframe animations, responsive media queries, and CRT effects.",
    stats: "Aesthetics +50 | Animation +45"
  },
  {
    id: "nodejs",
    name: "Node.js",
    category: "dev",
    rarity: "Epic",
    level: "LVL 86",
    color: "#68a063",
    description: "Asynchronous backend runtimes, RESTful microservices, stream handling, and package orchestration.",
    stats: "Throughput +45 | Async API +40"
  },
  {
    id: "express",
    name: "Express.js",
    category: "dev",
    rarity: "Epic",
    level: "LVL 86",
    color: "#ffffff",
    description: "Middleware pipelines, secure route gating, JWT session verification, and API endpoint design.",
    stats: "Routing +40 | Middleware +45"
  },
  {
    id: "mongodb",
    name: "MongoDB",
    category: "dev",
    rarity: "Epic",
    level: "LVL 84",
    color: "#47a248",
    description: "NoSQL document schemas, BSON queries, aggregation pipelines, and indexing optimization.",
    stats: "Schema Agility +45 | Query Speed +40"
  },

  // Cybersecurity
  {
    id: "networking",
    name: "Networking",
    category: "cyber",
    rarity: "Legendary",
    level: "LVL 90",
    color: "#00ffcc",
    description: "TCP/IP suite, OSI 7-layer model, subnetting, CIDR, DNS, routing protocols, and packet lifecycle.",
    stats: "Packet Telemetry +55 | Protocol Insight +50"
  },
  {
    id: "linux",
    name: "Linux (Debian/Kali)",
    category: "cyber",
    rarity: "Legendary",
    level: "LVL 92",
    color: "#fcc624",
    description: "Bash scripting, system administration, process forensics, cron jobs, file permissions, and hardening.",
    stats: "Terminal Agility +60 | OS Control +55"
  },
  {
    id: "wireshark",
    name: "Wireshark",
    category: "cyber",
    rarity: "Epic",
    level: "LVL 88",
    color: "#1679a7",
    description: "Deep packet inspection (DPI), protocol analysis, pcap triage, and uncovering plaintext anomalies.",
    stats: "Traffic Forensics +50 | Anomaly Spotting +45"
  },
  {
    id: "nmap",
    name: "Nmap",
    category: "cyber",
    rarity: "Epic",
    level: "LVL 90",
    color: "#2f5597",
    description: "Network host discovery, port scanning (SYN/TCP/UDP), OS fingerprinting, and NSE script automation.",
    stats: "Reconnaissance +55 | Port Discovery +50"
  },
  {
    id: "threat-modeling",
    name: "Threat Modeling",
    category: "cyber",
    rarity: "Legendary",
    level: "LVL 88",
    color: "#ff0055",
    description: "STRIDE framework, attack vector mapping, vulnerability posture analysis, and defensive safeguards.",
    stats: "Vulnerability Intel +50 | Defense Prep +55"
  },
  {
    id: "siem",
    name: "SIEM",
    category: "cyber",
    rarity: "Epic",
    level: "LVL 82",
    color: "#9d4edd",
    description: "Security information & event management, log aggregation, correlation rule design, and alert triage.",
    stats: "Log Analytics +45 | Incident Triage +40"
  },
  {
    id: "digital-forensics",
    name: "Digital Forensics",
    category: "cyber",
    rarity: "Epic",
    level: "LVL 84",
    color: "#06d6a0",
    description: "Evidence preservation, artifact recovery, disk/memory triage, and cyber incident root-cause analysis.",
    stats: "Evidence Chain +45 | Root Cause Triage +45"
  },

  // Tools & Hardware
  {
    id: "git",
    name: "Git",
    category: "tools",
    rarity: "Rare",
    level: "LVL 92",
    color: "#f05032",
    description: "Branching workflows, merge conflicts resolution, commit hygiene, rebasing, and cherry-picking.",
    stats: "Version Control +50 | Safe Rollback +45"
  },
  {
    id: "github",
    name: "GitHub",
    category: "tools",
    rarity: "Rare",
    level: "LVL 92",
    color: "#ffffff",
    description: "CI/CD actions, collaboration, code reviews, pull requests, and repository governance.",
    stats: "Team Sync +45 | Project Release +45"
  },
  {
    id: "vscode",
    name: "VS Code",
    category: "tools",
    rarity: "Rare",
    level: "LVL 96",
    color: "#007acc",
    description: "Custom keybindings, debugging configurations, remote SSH tunnels, and extensions orchestration.",
    stats: "Dev Velocity +55 | Debug Precision +50"
  },
  {
    id: "arduino",
    name: "Arduino IDE",
    category: "tools",
    rarity: "Epic",
    level: "LVL 88",
    color: "#00979d",
    description: "Microcontroller firmware programming, GPIO control, sensor integration, and serial debugging.",
    stats: "Hardware Link +50 | Embedded Code +45"
  },
  {
    id: "blynk",
    name: "Blynk IoT",
    category: "tools",
    rarity: "Rare",
    level: "LVL 85",
    color: "#24c48e",
    description: "Cloud telemetry bridge, real-time IoT dashboard triggers, and mobile push notifications.",
    stats: "Telemetry Sync +45 | Remote Actuation +40"
  }
];
