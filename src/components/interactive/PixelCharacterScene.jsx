import React, { useState, useEffect, useRef } from 'react';
import { soundManager } from '../../utils/soundEffects';

export function PixelCharacterScene({ onOpenTerminal }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [speechBubble, setSpeechBubble] = useState(null);
  const [clickCount, setClickCount] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const sceneRef = useRef(null);

  // Track mouse relative to scene for subtle head/eye tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!sceneRef.current) return;
      const rect = sceneRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Normalize between -1 and 1
      const deltaX = Math.max(-1, Math.min(1, (e.clientX - centerX) / (rect.width / 2)));
      const deltaY = Math.max(-1, Math.min(1, (e.clientY - centerY) / (rect.height / 2)));

      setMousePos({ x: deltaX * 4, y: deltaY * 2 });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Speech bubble dialog pool
  const quotes = [
    "Compiling defense protocols...",
    "All firewalls nominal!",
    "Chitkara University: 9.67 CGPA!",
    "Zero-day detected? Not on my watch.",
    "Dual-monitor setup: Max productivity!",
    "Tip: Try the Konami code: ↑ ↑ ↓ ↓ ← → ← → B A",
    "Click my monitor to launch the cyber terminal!"
  ];

  const handleCharacterClick = () => {
    soundManager.playSelect();
    const newCount = clickCount + 1;
    setClickCount(newCount);

    // Easter egg: 5 clicks opens terminal directly
    if (newCount % 5 === 0 && onOpenTerminal) {
      soundManager.playMissionStart();
      setSpeechBubble("ACCESS GRANTED: Launching Cyber Terminal...");
      setTimeout(() => {
        onOpenTerminal();
      }, 700);
      return;
    }

    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setSpeechBubble(randomQuote);

    // Toggle typing state
    setIsTyping((prev) => !prev);
    setTimeout(() => setIsTyping(true), 800);
  };

  return (
    <div
      ref={sceneRef}
      className="relative w-full max-w-xl mx-auto cursor-pointer select-none group"
      onClick={handleCharacterClick}
      title="Click Madhav or his PC to interact!"
    >
      {/* Speech Bubble popup */}
      {speechBubble && (
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 z-30 bg-[#0d1322] border-2 border-[#00e5ff] px-3 py-1.5 shadow-[4px_4px_0px_#000] animate-bounce">
          <p className="font-pixel text-[10px] text-[#00e5ff] tracking-wide text-center whitespace-nowrap">
            {speechBubble}
          </p>
          {/* Arrow */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-[#00e5ff]"></div>
        </div>
      )}

      {/* SVG Bespoke 2D Pixel Scene */}
      <svg
        viewBox="0 0 320 200"
        className="w-full h-auto drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)]"
        shapeRendering="crispEdges"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Neon Monitor Glow Filter */}
          <filter id="monitorGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#00e5ff" floodOpacity="0.4" />
          </filter>
        </defs>

        {/* 1. ROOM BACKGROUND & WALL */}
        <rect width="320" height="200" fill="#090b14" />
        {/* Wall grid wallpaper */}
        <line x1="0" y1="40" x2="320" y2="40" stroke="#121626" strokeWidth="1" />
        <line x1="0" y1="80" x2="320" y2="80" stroke="#121626" strokeWidth="1" />
        <line x1="0" y1="120" x2="320" y2="120" stroke="#121626" strokeWidth="1" />

        {/* Floor Baseboard & Wooden/Tech Floor Tiles */}
        <rect x="0" y="146" width="320" height="4" fill="#1b2138" />
        <rect x="0" y="150" width="320" height="50" fill="#0d111d" />
        {/* Floor perspective tiles */}
        <line x1="30" y1="150" x2="0" y2="200" stroke="#171e33" strokeWidth="1" />
        <line x1="100" y1="150" x2="70" y2="200" stroke="#171e33" strokeWidth="1" />
        <line x1="170" y1="150" x2="160" y2="200" stroke="#171e33" strokeWidth="1" />
        <line x1="240" y1="150" x2="250" y2="200" stroke="#171e33" strokeWidth="1" />
        <line x1="300" y1="150" x2="320" y2="185" stroke="#171e33" strokeWidth="1" />

        {/* 2. CHITKARA UNIVERSITY DIPLOMA & WALL PLAQUE */}
        <rect x="22" y="24" width="46" height="34" fill="#151b2e" stroke="#ffb703" strokeWidth="2" />
        <rect x="26" y="28" width="38" height="26" fill="#f8fafc" />
        {/* Chitkara Red Crest */}
        <rect x="39" y="32" width="12" height="10" fill="#dc2626" />
        <rect x="42" y="34" width="6" height="6" fill="#ffffff" />
        <text x="30" y="48" fill="#1e293b" fontSize="4.5" fontFamily="'Press Start 2P', monospace">CHITKARA</text>
        <text x="32" y="52" fill="#dc2626" fontSize="3.5" fontFamily="'Press Start 2P', monospace">9.67 CGPA</text>

        {/* Cyber Security Poster on Wall */}
        <rect x="76" y="20" width="34" height="40" fill="#101828" stroke="#ff007f" strokeWidth="1" />
        <text x="80" y="32" fill="#ff007f" fontSize="4" fontFamily="'Press Start 2P', monospace">CYBER</text>
        <text x="80" y="38" fill="#ff007f" fontSize="4" fontFamily="'Press Start 2P', monospace">DEFENSE</text>
        {/* Shield icon */}
        <polygon points="93,42 99,44 99,50 93,56 87,50 87,44" fill="#39ff14" />

        {/* 3. SERVER RACK TOWER (Right Corner) */}
        <rect x="268" y="44" width="42" height="114" fill="#111626" stroke="#1e293b" strokeWidth="2" />
        {/* Server Units */}
        {[0, 1, 2, 3, 4, 5].map((u) => (
          <g key={u}>
            <rect x="272" y={48 + u * 18} width="34" height="14" fill="#080c16" stroke="#25355e" strokeWidth="1" />
            <rect x="275" y={52 + u * 18} width="16" height="6" fill="#04070e" />
            {/* Blinking Activity LEDs */}
            <rect
              x="294"
              y={53 + u * 18}
              width="3"
              height="3"
              fill={u % 2 === 0 ? "#39ff14" : "#00e5ff"}
              className="animate-pulse"
            />
            <rect
              x="299"
              y={53 + u * 18}
              width="3"
              height="3"
              fill={u % 3 === 0 ? "#ff007f" : "#ffb703"}
              className="animate-ping"
            />
          </g>
        ))}

        {/* 4. DEVELOPER DESK & CHAIR */}
        {/* Gaming Chair Backrest */}
        <rect x="138" y="70" width="44" height="68" fill="#192036" stroke="#00e5ff" strokeWidth="2" rx="4" />
        <rect x="144" y="76" width="32" height="12" fill="#00e5ff" fillOpacity="0.2" />
        {/* Chair Head Cushion with 'M' logo */}
        <rect x="150" y="74" width="20" height="8" fill="#ff007f" />
        <text x="157" y="80" fill="#ffffff" fontSize="4.5" fontFamily="'Press Start 2P', monospace">M</text>
        {/* Chair Base & Wheels */}
        <rect x="156" y="138" width="8" height="24" fill="#0f172a" />
        <line x1="140" y1="162" x2="180" y2="162" stroke="#334155" strokeWidth="4" />
        <circle cx="140" cy="164" r="2" fill="#020617" />
        <circle cx="160" cy="164" r="2" fill="#020617" />
        <circle cx="180" cy="164" r="2" fill="#020617" />

        {/* Heavy Wooden/Metal Workstation Desk */}
        <rect x="68" y="126" width="190" height="10" fill="#2d3748" stroke="#1a202c" strokeWidth="2" />
        <rect x="74" y="136" width="178" height="3" fill="#1a202c" />
        {/* Desk Legs */}
        <rect x="74" y="139" width="8" height="36" fill="#1e293b" />
        <rect x="244" y="139" width="8" height="36" fill="#1e293b" />
        {/* Cable wire manager */}
        <path d="M 120 136 Q 130 160 145 168" stroke="#334155" strokeWidth="2" fill="none" />
        <path d="M 210 136 Q 225 155 240 165" stroke="#334155" strokeWidth="2" fill="none" />

        {/* 5. DUAL MONITOR SETUP */}
        {/* Left Monitor (Cyber Radar & Terminal stream) */}
        <g filter="url(#monitorGlow)">
          <rect x="72" y="80" width="60" height="42" fill="#070a14" stroke="#38bdf8" strokeWidth="2" />
          <rect x="75" y="83" width="54" height="36" fill="#050811" />
          {/* Scrolling Green / Cyan Code Matrix */}
          <line x1="77" y1="88" x2="105" y2="88" stroke="#39ff14" strokeWidth="1.5" />
          <line x1="77" y1="92" x2="115" y2="92" stroke="#00e5ff" strokeWidth="1.5" />
          <line x1="77" y1="96" x2="98" y2="96" stroke="#39ff14" strokeWidth="1.5" />
          <line x1="77" y1="100" x2="122" y2="100" stroke="#00e5ff" strokeWidth="1.5" />
          <line x1="77" y1="104" x2="90" y2="104" stroke="#ff007f" strokeWidth="1.5" />
          <line x1="77" y1="108" x2="118" y2="108" stroke="#39ff14" strokeWidth="1.5" />
          <line x1="77" y1="112" x2="102" y2="112" stroke="#00e5ff" strokeWidth="1.5" />
          {/* Monitor Stand */}
          <rect x="98" y="122" width="8" height="5" fill="#475569" />
          <rect x="92" y="125" width="20" height="2" fill="#334155" />
        </g>

        {/* Right / Main Monitor (Interactive Bash Terminal Prompt) */}
        <g
          filter="url(#monitorGlow)"
          className="cursor-pointer hover:opacity-90 transition-opacity"
          onClick={(e) => {
            e.stopPropagation();
            soundManager.playMissionStart();
            if (onOpenTerminal) onOpenTerminal();
          }}
        >
          <rect x="180" y="74" width="76" height="48" fill="#030712" stroke="#39ff14" strokeWidth="2" />
          <rect x="183" y="77" width="70" height="42" fill="#020617" />
          {/* Title bar */}
          <rect x="183" y="77" width="70" height="6" fill="#166534" />
          <text x="185" y="82" fill="#ffffff" fontSize="3" fontFamily="'Press Start 2P', monospace">bash - madhav@cu</text>
          {/* Terminal output lines */}
          <text x="185" y="89" fill="#39ff14" fontSize="3.5" fontFamily="'JetBrains Mono', monospace">&gt; whoami</text>
          <text x="185" y="95" fill="#38bdf8" fontSize="3.5" fontFamily="'JetBrains Mono', monospace">&gt; cybersecurity</text>
          <text x="185" y="101" fill="#facc15" fontSize="3.5" fontFamily="'JetBrains Mono', monospace">&gt; fullstack_dev</text>
          <text x="185" y="107" fill="#f43f5e" fontSize="3.5" fontFamily="'JetBrains Mono', monospace">&gt; builder [9.67]</text>
          {/* Blinking prompt cursor */}
          <text x="185" y="114" fill="#39ff14" fontSize="4" fontFamily="'Press Start 2P', monospace">&gt;_</text>
          {/* Stand */}
          <rect x="214" y="122" width="8" height="5" fill="#475569" />
          <rect x="208" y="125" width="20" height="2" fill="#334155" />
        </g>

        {/* 6. DESK ACCESSORIES */}
        {/* Mechanical Keyboard with RGB Glow */}
        <rect x="136" y="126" width="48" height="8" fill="#0f172a" stroke="#00e5ff" strokeWidth="1" />
        {/* Key caps */}
        {[0, 1, 2, 3, 4, 5, 6, 7].map((k) => (
          <rect key={k} x={138 + k * 5.5} y="128" width="4" height="4" fill="#38bdf8" />
        ))}

        {/* Gaming Mouse & Mousepad */}
        <rect x="188" y="127" width="16" height="7" fill="#1e293b" />
        <rect x="192" y="128" width="6" height="4" fill="#ff007f" rx="1" />

        {/* Coffee Mug with Rising Pixel Steam */}
        <rect x="118" y="124" width="8" height="8" fill="#ef4444" stroke="#991b1b" strokeWidth="1" />
        <rect x="126" y="126" width="2" height="4" fill="#ef4444" />
        {/* Steam particles */}
        <g className="animate-pulse">
          <rect x="120" y="120" width="2" height="2" fill="#ffffff" fillOpacity="0.7" />
          <rect x="122" y="116" width="2" height="2" fill="#ffffff" fillOpacity="0.5" />
          <rect x="120" y="112" width="2" height="2" fill="#ffffff" fillOpacity="0.3" />
        </g>

        {/* 7. MADHAV - REAL DEVELOPER PIXEL SPRITE (BASED ON PHOTO) */}
        {/* Madhav Body sitting in chair */}
        {/* Maroon / Burgundy Chitkara University Polo Shirt */}
        <rect x="144" y="104" width="32" height="26" fill="#8c1825" />
        {/* Polo ribbed collar */}
        <polygon points="152,104 160,110 156,104" fill="#72121e" />
        <polygon points="168,104 160,110 164,104" fill="#72121e" />
        {/* Red button placket */}
        <rect x="158.5" y="106" width="3" height="8" fill="#72121e" />
        <rect x="159.5" y="108" width="1" height="1" fill="#ef4444" />
        <rect x="159.5" y="111" width="1" height="1" fill="#ef4444" />
        {/* Chitkara University Logo on chest (white print) */}
        <rect x="147" y="110" width="3" height="2" fill="#ef4444" />
        <rect x="151" y="110" width="5" height="1" fill="#ffffff" />
        <rect x="151" y="112" width="4" height="1" fill="#ffffff" />

        {/* Animated Typing Arms & Hands (Wearing Maroon Polo Sleeves) */}
        {/* Left Arm */}
        <line
          x1="144"
          y1="108"
          x2={isTyping ? "142" : "144"}
          y2={isTyping ? "127" : "129"}
          stroke="#8c1825"
          strokeWidth="6"
          strokeLinecap="square"
        />
        {/* Left Hand */}
        <rect x={isTyping ? "140" : "142"} y={isTyping ? "125" : "127"} width="6" height="4" fill="#f0c29b" />

        {/* Right Arm */}
        <line
          x1="176"
          y1="108"
          x2={isTyping ? "178" : "176"}
          y2={isTyping ? "127" : "129"}
          stroke="#8c1825"
          strokeWidth="6"
          strokeLinecap="square"
        />
        {/* Right Hand */}
        <rect x={isTyping ? "176" : "174"} y={isTyping ? "125" : "127"} width="6" height="4" fill="#f0c29b" />

        {/* Head & Face (Interactive Mouse Parallax) */}
        <g transform={`translate(${mousePos.x}, ${mousePos.y})`}>
          {/* Neck */}
          <rect x="156" y="96" width="8" height="8" fill="#e2af88" />
          {/* Silver Chain at Neck */}
          <path d="M 157 101 Q 160 104 163 101" stroke="#cbd5e1" strokeWidth="1" fill="none" />

          {/* Head Base */}
          <rect x="149" y="80" width="22" height="19" fill="#f0c29b" />

          {/* Hair: Voluminous Dark Quiff Swept Upward & Right */}
          <rect x="151" y="73" width="20" height="4" fill="#18181d" />
          <rect x="154" y="71" width="16" height="3" fill="#25242c" />
          <rect x="158" y="70" width="10" height="2" fill="#33323b" />
          {/* Hair sides with faded undercut */}
          <rect x="147" y="76" width="24" height="6" fill="#18181d" />
          <rect x="147" y="82" width="3" height="6" fill="#201f26" />
          <rect x="170" y="82" width="3" height="6" fill="#201f26" />

          {/* Defined Eyebrows */}
          <rect x="151" y="82" width="6" height="2" fill="#141416" />
          <rect x="162" y="82" width="6" height="2" fill="#141416" />

          {/* Clear Transparent Square-Round Glasses (with thin rims & soft blue glare) */}
          {/* Left Lens */}
          <rect x="150" y="84" width="7" height="6" fill="#60a5fa" fillOpacity="0.25" stroke="#cbd5e1" strokeWidth="1" />
          <rect x="151" y="85" width="2" height="2" fill="#93c5fd" fillOpacity="0.7" />
          {/* Bridge */}
          <rect x="157" y="85" width="4" height="1" fill="#cbd5e1" />
          {/* Right Lens */}
          <rect x="161" y="84" width="7" height="6" fill="#60a5fa" fillOpacity="0.25" stroke="#cbd5e1" strokeWidth="1" />
          <rect x="162" y="85" width="2" height="2" fill="#93c5fd" fillOpacity="0.7" />

          {/* Eyes behind clear glasses (following mouse subtly) */}
          <rect x={152 + mousePos.x * 0.25} y="86" width="2" height="2" fill="#18181d" />
          <rect x={163 + mousePos.x * 0.25} y="86" width="2" height="2" fill="#18181d" />

          {/* Nose */}
          <rect x="158" y="88" width="3" height="3" fill="#dfa57c" />

          {/* Trimmed Mustache */}
          <rect x="156" y="92" width="7" height="1.5" fill="#232128" />

          {/* Friendly Calm Smile */}
          <rect x="157" y="94" width="5" height="1" fill="#b45309" />

          {/* Chin Beard & Jawline Trim */}
          <rect x="156" y="96" width="7" height="3" fill="#232128" />
          <rect x="150" y="91" width="2" height="5" fill="#232128" />
          <rect x="168" y="91" width="2" height="5" fill="#232128" />
        </g>

        {/* 8. MINI CYBER SECURITY DRONE / BOT (Floating Companion) */}
        <g className="animate-bounce">
          <rect x="25" y="95" width="18" height="14" fill="#0f172a" stroke="#00e5ff" strokeWidth="1" rx="2" />
          <circle cx="34" cy="102" r="3" fill="#ff007f" />
          <circle cx="34" cy="102" r="1" fill="#ffffff" />
          {/* Rotor antennas */}
          <line x1="22" y1="95" x2="25" y2="98" stroke="#38bdf8" strokeWidth="1" />
          <line x1="46" y1="95" x2="43" y2="98" stroke="#38bdf8" strokeWidth="1" />
          <rect x="24" y="109" width="20" height="2" fill="#00e5ff" fillOpacity="0.3" />
        </g>
      </svg>

      {/* Interactive Helper Banner */}
      <div className="mt-3 flex items-center justify-center gap-3">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#101524] border border-[#00e5ff]/40 text-[#00e5ff] text-[10px] font-pixel shadow-[2px_2px_0px_#000]">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          MADHAV@WORKSTATION [ACTIVE]
        </span>
        <span className="text-[11px] font-mono text-slate-400 hidden sm:inline">
          (Click character or PC for secret interactions)
        </span>
      </div>
    </div>
  );
}
