# Madhav Kansal - 2D Pixel-Art Developer Portfolio & Quest Log 🎮

An interactive, high-performance personal portfolio built with **React.js + Vite**, featuring a **2D pixel-art retro adventure aesthetic**, bespoke custom developer sprites, sound synthesizer, interactive Linux cyber terminal, and recruiter-friendly readability.

---

## 🌟 Highlights & Features

- **Custom 2D Pixel Developer Scene**: Bespoke pixel art of Madhav at a dual-monitor cyber workstation with animated typing hands, glowing monitors, blinking server LEDs, Chitkara University 9.67 CGPA crest, and mouse-reactive head tracking.
- **Bespoke Project Illustrations**: Custom SVG pixel art for all 4 key projects (AI Insider Threat radar anomaly, Student Management terminal, Smart Kitchen ESP32 sensor rig, and Nmap subnet recon scanner).
- **Procedural 8-Bit Audio Synthesizer**: Pure Web Audio API retro sound generator with an instant **Mute/Unmute toggle** (zero heavy external audio asset downloads).
- **CRT Scanlines Filter**: Retro CRT monitor scanlines & vignette effect with an instant **ON/OFF toggle**.
- **Interactive Cyber Terminal CLI**: Launchable via `[>_ CLI]` button or by clicking the hero PC screen. Supports commands: `help`, `whoami`, `skills`, `projects`, `quests`, `nmap [host]`, `sudo`, `cat flag.txt`, `clear`, `exit`.
- **Easter Eggs**: Secret Konami Code (`↑ ↑ ↓ ↓ ← → ← → B A`) activates God Mode with confetti and victory fanfares.
- **Recruiter & Mobile Optimized**: Clean high-contrast typography (`Press Start 2P` for pixel headers, `JetBrains Mono` for crisp descriptions). 100% responsive with zero horizontal overflow.

---

## 🚀 Getting Started

### 1. Prerequisites
Ensure you have **Node.js (v18+)** and **npm** installed on your system.

```bash
node -v
npm -v
```

### 2. Installation
Clone or navigate to the project directory and install the dependencies:

```bash
cd protfolio
npm install
```

### 3. Run Locally in Development Mode
Start the Vite development server with Hot Module Replacement (HMR):

```bash
npm run dev
```
Open your browser and navigate to the printed local URL (typically `http://localhost:5173`).

### 4. Build for Production
To create an optimized production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## 🛠️ Customization & Adding Content

All content is cleanly decoupled in `src/data/` so you never have to hunt through UI components.

### 1. Updating Your Personal Information & Links
Edit [`src/data/profileData.js`](file:///Users/madhavkansal/Documents/protfolio/src/data/profileData.js):
```javascript
socials: {
  email: "your.email@example.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourprofile",
  instagram: "https://instagram.com/yourhandle",
  resumeUrl: "/resume.pdf"
}
```

### 2. Adding a New Project / Mission
Open [`src/data/projectsData.js`](file:///Users/madhavkansal/Documents/protfolio/src/data/projectsData.js) and add an object to `projectsData`:
```javascript
{
  id: "my-new-project",
  missionCode: "MISSION 05",
  status: "COMPLETED",
  difficulty: "HARD • CYBERSECURITY",
  title: "Next-Gen Cloud Honeypot",
  tagline: "Decoy cloud infrastructure for attacker telemetry",
  brief: "Designed and deployed high-interaction honeypots...",
  techStack: ["Python", "Docker", "GCP", "ELK Stack"],
  accentColor: "#00e5ff",
  badge: "HONEYPOT DEFENSE",
  githubUrl: "https://github.com/madhavkansal/honeypot",
  demoUrl: "https://example.com/demo",
  features: [
    "Simulated SSH and Telnet login captures",
    "Real-time geolocation mapping of brute-force IP addresses"
  ],
  dossier: {
    problemStatement: "Need for active telemetry on automated scanning bots...",
    solutionArchitecture: "Multi-container decoys monitoring ingress packets...",
    keyMetrics: [
      { label: "Probes Logged", value: "50,000+" },
      { label: "IP Blocks", value: "99.4%" }
    ],
    securityControls: [
      "Strict network sandboxing preventing lateral network movement"
    ]
  }
}
```

### 3. Updating Skills Inventory
Edit [`src/data/skillsData.js`](file:///Users/madhavkansal/Documents/protfolio/src/data/skillsData.js) to add or adjust your technical stack items, rarity, and perks.

---

## 🌐 Deploying to Vercel

Deploying this portfolio to [Vercel](https://vercel.com) takes less than 2 minutes:

### Method A: Deploy via Vercel CLI
1. Install the Vercel CLI globally:
   ```bash
   npm i -g vercel
   ```
2. Run the deployment command from the project root:
   ```bash
   vercel
   ```
3. Follow the CLI prompts (accept default settings; Framework Preset: **Vite**).
4. For production deployment:
   ```bash
   vercel --prod
   ```

### Method B: Deploy via GitHub (Recommended)
1. Push this project to your GitHub account:
   ```bash
   git init
   git add .
   git commit -m "feat: initial 2D pixel developer portfolio"
   git branch -M main
   git remote add origin https://github.com/madhavkansal/portfolio.git
   git push -u origin main
   ```
2. Log in to [Vercel Dashboard](https://vercel.com/new).
3. Click **"Import Project"** and select your `portfolio` repository.
4. Vercel will automatically detect **Vite**:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. Click **Deploy**. Your portfolio will go live on a free SSL-secured `*.vercel.app` domain!

---

## 📜 License
Created by **Madhav Kansal**. Free to use and customize for personal developer portfolios.
