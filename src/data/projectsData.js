// Projects / Missions Data
export const projectsData = [
  {
    id: "ai-threat-detection",
    missionCode: "MISSION 01",
    status: "COMPLETED",
    difficulty: "HARD • CYBERSEC + AI",
    title: "AI Insider Threat Detection",
    tagline: "Unsupervised Machine Learning for Anomaly & Rogue Activity Detection",
    brief: "A high-security behavioral analytics engine using Isolation Forest to detect anomalous user actions, privilege escalation, and credential misuse across enterprise telemetry.",
    techStack: ["Python", "Machine Learning", "Isolation Forest", "Data Analysis", "AI", "Matplotlib", "Pandas"],
    accentColor: "#ff007f",
    badge: "AI + DEFENSE",
    githubUrl: "https://github.com/madhavkansal/ai-insider-threat-detection",
    demoUrl: "https://github.com/madhavkansal/ai-insider-threat-detection#demo",

    // Core Features
    features: [
      "User behavior baseline profiling (login times, file access velocity, session spikes)",
      "Unsupervised Isolation Forest algorithm isolating rare anomalous data points",
      "Dynamic risk scoring assigning threat priority from 0.0 to 100.0",
      "Suspicious activity flags for off-hours data exfiltration and privilege abuse",
      "Visual security dashboard with real-time risk heatmaps and alerts"
    ],

    // Technical Dossier for Modal
    dossier: {
      problemStatement: "Traditional rule-based intrusion detection systems (IDS) fail against zero-day insider misuse, compromised accounts, or slow-and-low data exfiltration by legitimate users.",
      solutionArchitecture: "Engineered an unsupervised ML pipeline using Scikit-Learn Isolation Forest. Processes user event streams, normalizes feature vectors (keystroke timing, file access frequency, network egress volume), computes isolation tree depths, and triggers high-fidelity security alerts.",
      keyMetrics: [
        { label: "Anomaly Accuracy", value: "94.8%" },
        { label: "False Positive Reduction", value: "38%" },
        { label: "Evaluation Latency", value: "<12ms" }
      ],
      securityControls: [
        "Noise filtering on benign administrative spikes",
        "Feature weight tuning to prioritize data-exfiltration indicators",
        "Audit trail generation for SOC incident response teams"
      ]
    }
  },

  {
    id: "secure-message-vault",
    missionCode: "MISSION 02",
    status: "COMPLETED",
    difficulty: "HARD • CRYPTOGRAPHY & CYBERSEC",
    title: "Secure Message Vault",
    tagline: "Zero-Knowledge End-to-End Encrypted Ephemeral Message Storage",
    brief: "A cryptographic web vault delivering client-side encryption (AES-256-GCM + PBKDF2), zero-knowledge server storage, one-time self-destructing links, and tamper-proof SHA-256 integrity verification.",
    techStack: ["React.js", "Web Crypto API", "AES-256-GCM", "Node.js", "Express.js", "MongoDB", "PBKDF2", "Cybersecurity"],
    accentColor: "#00e5ff",
    badge: "CRYPTOGRAPHY",
    githubUrl: "https://github.com/Madhav3137/secure-message-vault",
    demoUrl: "https://secure-message-vault.vercel.app/",

    features: [
      "Client-side AES-256-GCM encryption before data ever leaves the browser",
      "Zero-knowledge architecture: server and database never receive plaintext or keys",
      "Ephemeral one-time view links that permanently purge messages upon decryption",
      "Configurable time-to-live (TTL) expiration timer and burn-after-reading safeguards",
      "Cryptographic HMAC-SHA-256 signature verification preventing tampering",
      "Brute-force protection and rate-limiting against unauthorized passphrase attempts"
    ],

    dossier: {
      problemStatement: "Standard messaging and note-taking apps store data unencrypted or hold user keys on central servers, exposing private credentials and sensitive communication to database leaks and MITM attacks.",
      solutionArchitecture: "Engineered a zero-knowledge architecture using browser-native Web Crypto API. Encryption keys are generated client-side from user passphrases using PBKDF2 (100,000 iterations + unique salt). Payloads are encrypted with AES-256-GCM and stored only as ciphertext blobs with automated TTL purge triggers.",
      keyMetrics: [
        { label: "Encryption Standard", value: "AES-256-GCM" },
        { label: "PBKDF2 Iterations", value: "100,000" },
        { label: "Server Knowledge", value: "0% (Zero)" }
      ],
      securityControls: [
        "Key material passed exclusively in URL fragment (#) so server never logs keys",
        "Forward secrecy with unique initialization vectors (IV) generated per message",
        "Instant memory purging of plaintext buffers on client unmount"
      ]
    }
  },

  {
    id: "smart-kitchen-iot",
    missionCode: "MISSION 03",
    status: "COMPLETED",
    difficulty: "HARD • EMBEDDED IoT",
    title: "Smart Kitchen IoT Safety System",
    tagline: "Autonomous Microcontroller Hazards Defense & Remote Telemetry",
    brief: "An IoT embedded safety automation platform built with ESP32 and Arduino, delivering automated gas leak shutoff, fire risk mitigation, and instant emergency notifications.",
    techStack: ["ESP32", "Arduino IDE", "C++", "Blynk IoT", "MQ-2 Gas Sensor", "Flame Sensor", "Servo Actuator"],
    accentColor: "#ffb703",
    badge: "IoT & HARDWARE",
    githubUrl: "https://github.com/madhavkansal/smart-kitchen-iot",
    demoUrl: "https://github.com/madhavkansal/smart-kitchen-iot#schematics",

    features: [
      "MQ-2 gas/LPG leak detection with calibrated PPM safety thresholds",
      "Automatic physical gas cylinder shutoff via servo motor actuation",
      "Real-time ambient kitchen temperature and flame detection monitoring",
      "Automated exhaust ventilation activation when air quality degrades",
      "Smart ultrasonic/optical milk boil-over prevention alert",
      "Blynk cloud telemetry streaming with instant push notifications to mobile"
    ],

    dossier: {
      problemStatement: "Kitchen gas leaks and unattended cooking cause severe domestic fires every year; human reaction times in panic situations are frequently insufficient.",
      solutionArchitecture: "Programmed an ESP32 microcontroller with non-blocking polling loops and hardware interrupts. When sensor thresholds (PPM > 400 or heat spike) are breached, the controller cuts off the mechanical valve in under 1.2s, sounds a buzzer, turns on exhaust fans, and transmits an urgent push notification via WiFi.",
      keyMetrics: [
        { label: "Emergency Cutoff Time", value: "<1.2s" },
        { label: "Push Alert Delay", value: "<800ms" },
        { label: "Hardware Duty Cycle", value: "24/7 Resilient" }
      ],
      securityControls: [
        "Fail-safe mechanical default valve lock during power loss",
        "Debounced sensor inputs preventing false-positive valve closures",
        "Encrypted WiFi telemetry payloads to Blynk IoT cloud"
      ]
    }
  },

  {
    id: "network-discovery-dashboard",
    missionCode: "MISSION 04",
    status: "COMPLETED",
    difficulty: "HARD • CYBERSECURITY",
    title: "Network Discovery & Monitoring Dashboard",
    tagline: "Nmap-Inspired Active Host Reconnaissance & Port Security Visualizer",
    brief: "A cybersecurity networking platform that maps local subnet topologies, scans exposed ports, fingerprints active services, and alerts on unhardened network entry points.",
    techStack: ["Python", "Nmap Engine", "Socket API", "React.js", "Scapy", "REST API", "Tailwind/CSS"],
    accentColor: "#39ff14",
    badge: "CYBER RECON",
    githubUrl: "https://github.com/madhavkansal/network-discovery-dashboard",
    demoUrl: "https://github.com/madhavkansal/network-discovery-dashboard#preview",

    features: [
      "Automated subnet host discovery utilizing ARP sweep and ICMP ping echoes",
      "IP and MAC address resolution with vendor OUI lookup",
      "High-speed multi-threaded TCP SYN / Connect port scanner",
      "Service and banner fingerprinting across critical ports (SSH, HTTP, FTP, RDP)",
      "Real-time interactive network topology node graph",
      "Vulnerability alert indicators for dangerous open ports and cleartext services"
    ],

    dossier: {
      problemStatement: "Unmanaged rogue devices and accidental open ports (e.g. exposed databases, default Telnet/SSH) expose internal networks to rapid lateral attack movements.",
      solutionArchitecture: "Engineered a scanning daemon wrapping Python raw sockets and Nmap libraries. Feeds scanned telemetry into an interactive web interface rendering subnet CIDR blocks, host latency gauges, and CVE risk ratings per discovered port.",
      keyMetrics: [
        { label: "Subnet Scan Speed (/24)", value: "<4.5s" },
        { label: "Common Ports Scanned", value: "Top 1000" },
        { label: "Device Identification", value: "92% Accuracy" }
      ],
      securityControls: [
        "Rate-limiting to avoid network congestion and IDS flooding",
        "Safe scan flag options to prevent service crashing on fragile legacy endpoints",
        "Exportable JSON/CSV audit reports for security compliance"
      ]
    }
  }
];
