import React from 'react';

// Handcrafted, bespoke SVG pixel-art illustrations for each specific project

export function AIThreatPixelArt({ className = "w-full h-full" }) {
  return (
    <svg
      viewBox="0 0 160 100"
      className={className}
      shapeRendering="crispEdges"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background Cyber Radar Frame */}
      <rect width="160" height="100" fill="#080a12" />
      <rect x="4" y="4" width="152" height="92" fill="#0c1020" stroke="#1f2d4d" strokeWidth="2" />
      
      {/* Radar Grid Lines */}
      <line x1="80" y1="8" x2="80" y2="92" stroke="#162945" strokeWidth="1" strokeDasharray="3 3" />
      <line x1="8" y1="50" x2="152" y2="50" stroke="#162945" strokeWidth="1" strokeDasharray="3 3" />
      
      {/* Concentric Radar Rings */}
      <circle cx="80" cy="50" r="18" fill="none" stroke="#1c385c" strokeWidth="1" />
      <circle cx="80" cy="50" r="32" fill="none" stroke="#1c385c" strokeWidth="1" />
      <circle cx="80" cy="50" r="44" fill="none" stroke="#234a78" strokeWidth="1" />

      {/* Radar Sweep Arc Beam */}
      <path d="M 80 50 L 118 20 A 44 44 0 0 0 80 6 Z" fill="rgba(255, 0, 127, 0.25)" />
      <line x1="80" y1="50" x2="118" y2="20" stroke="#ff007f" strokeWidth="2" />

      {/* Normal User Data Nodes (Cyan Pixels) */}
      <rect x="60" y="42" width="4" height="4" fill="#00e5ff" />
      <rect x="94" y="65" width="4" height="4" fill="#00e5ff" />
      <rect x="70" y="70" width="4" height="4" fill="#00e5ff" />
      <rect x="105" y="45" width="4" height="4" fill="#00e5ff" />
      <rect x="52" y="32" width="4" height="4" fill="#00e5ff" />

      {/* DETECTED INSIDER THREAT ANOMALY (Flashing Red/Magenta) */}
      <g className="animate-pulse">
        {/* Pulsing Anomaly Node */}
        <rect x="116" y="24" width="8" height="8" fill="#ff0055" />
        <rect x="114" y="22" width="12" height="2" fill="#ff70a6" />
        <rect x="114" y="32" width="12" height="2" fill="#ff70a6" />
        <rect x="112" y="24" width="2" height="8" fill="#ff70a6" />
        <rect x="126" y="24" width="2" height="8" fill="#ff70a6" />
      </g>

      {/* Threat Label UI Overlay */}
      <rect x="10" y="10" width="58" height="14" fill="#130718" stroke="#ff007f" strokeWidth="1" />
      <text x="14" y="20" fill="#ff007f" fontSize="7" fontFamily="'Press Start 2P', monospace">RISK: 98%</text>

      {/* Tree Depth / Isolation Forest Indicator */}
      <rect x="10" y="76" width="62" height="14" fill="#07151e" stroke="#00e5ff" strokeWidth="1" />
      <text x="14" y="86" fill="#00e5ff" fontSize="6" fontFamily="'Press Start 2P', monospace">iFOREST: RUN</text>
    </svg>
  );
}

export function SecureVaultPixelArt({ className = "w-full h-full" }) {
  return (
    <svg
      viewBox="0 0 160 100"
      className={className}
      shapeRendering="crispEdges"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background Crypto Chamber */}
      <rect width="160" height="100" fill="#080c16" />
      <rect x="4" y="4" width="152" height="92" fill="#0d1424" stroke="#00e5ff" strokeWidth="2" />

      {/* Window Titlebar */}
      <rect x="6" y="6" width="148" height="12" fill="#00e5ff" />
      <rect x="142" y="8" width="8" height="8" fill="#ff0055" />
      <rect x="130" y="8" width="8" height="8" fill="#ffb703" />
      <text x="12" y="15" fill="#060913" fontSize="6" fontFamily="'Press Start 2P', monospace">VAULT_CIPHER_ENGINE.EXE</text>

      {/* Left Panel: Heavy Armored Vault Door / Safe */}
      <rect x="12" y="24" width="60" height="64" fill="#141c33" stroke="#25355e" strokeWidth="2" />
      {/* Outer Vault Wheel */}
      <circle cx="42" cy="56" r="22" fill="#1d2847" stroke="#00e5ff" strokeWidth="1.5" />
      <circle cx="42" cy="56" r="14" fill="#0c1122" stroke="#38bdf8" strokeWidth="1" />
      <circle cx="42" cy="56" r="6" fill="#ffb703" />
      {/* Vault Wheel Spokes / Locking Bolts */}
      <line x1="42" y1="36" x2="42" y2="76" stroke="#00e5ff" strokeWidth="2" />
      <line x1="22" y1="56" x2="62" y2="56" stroke="#00e5ff" strokeWidth="2" />
      <line x1="28" y1="42" x2="56" y2="70" stroke="#00e5ff" strokeWidth="2" />
      <line x1="28" y1="70" x2="56" y2="42" stroke="#00e5ff" strokeWidth="2" />

      {/* Glowing Golden Padlock on Vault Center */}
      <rect x="38" y="52" width="8" height="7" fill="#ffb703" stroke="#b45309" strokeWidth="1" />
      <path d="M 40 52 L 40 48 Q 42 46 44 48 L 44 52" stroke="#ffb703" strokeWidth="1.5" fill="none" />
      <rect x="41.5" y="54" width="1" height="3" fill="#000000" />

      {/* Right Panel: Cryptographic Hex Stream & Terminal */}
      <rect x="76" y="24" width="72" height="64" fill="#080e1b" stroke="#25355e" strokeWidth="1" />
      
      {/* Terminal Title */}
      <rect x="80" y="28" width="64" height="8" fill="#1a2542" />
      <text x="83" y="34" fill="#00e5ff" fontSize="4.5" fontFamily="'Press Start 2P', monospace">AES-256-GCM</text>

      {/* Ciphertext rows */}
      <text x="80" y="44" fill="#39ff14" fontSize="5" fontFamily="'JetBrains Mono', monospace">0x7F 0xA4 0x9B 0x1C</text>
      <text x="80" y="53" fill="#38bdf8" fontSize="5" fontFamily="'JetBrains Mono', monospace">KEY: PBKDF2 (100K)</text>
      <text x="80" y="62" fill="#ffb703" fontSize="5" fontFamily="'JetBrains Mono', monospace">TTL: 1-TIME VIEW</text>
      <text x="80" y="71" fill="#f43f5e" fontSize="5" fontFamily="'JetBrains Mono', monospace">ZERO-KNOWLEDGE</text>

      {/* Status Bar */}
      <rect x="80" y="76" width="64" height="8" fill="#11291b" />
      <text x="83" y="82" fill="#39ff14" fontSize="4.5" fontFamily="'Press Start 2P', monospace">ENCRYPTED [OK]</text>
    </svg>
  );
}

export function SmartKitchenPixelArt({ className = "w-full h-full" }) {
  return (
    <svg
      viewBox="0 0 160 100"
      className={className}
      shapeRendering="crispEdges"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background IoT Workshop / Kitchen Dashboard */}
      <rect width="160" height="100" fill="#0f1118" />
      <rect x="4" y="4" width="152" height="92" fill="#141824" stroke="#ffb703" strokeWidth="2" />

      {/* ESP32 Microcontroller Board representation */}
      <rect x="12" y="24" width="56" height="64" fill="#0d3b2e" stroke="#10b981" strokeWidth="2" />
      {/* ESP32 RF Shield & Antenna */}
      <rect x="18" y="28" width="22" height="18" fill="#94a3b8" stroke="#475569" strokeWidth="1" />
      <rect x="14" y="28" width="3" height="14" fill="#b45309" />
      <text x="21" y="39" fill="#0f172a" fontSize="4" fontFamily="'Press Start 2P', monospace">ESP32</text>

      {/* Pins along sides */}
      <rect x="10" y="48" width="3" height="4" fill="#ffb703" />
      <rect x="10" y="56" width="3" height="4" fill="#ffb703" />
      <rect x="10" y="64" width="3" height="4" fill="#ffb703" />
      <rect x="10" y="72" width="3" height="4" fill="#ffb703" />

      <rect x="67" y="48" width="3" height="4" fill="#ffb703" />
      <rect x="67" y="56" width="3" height="4" fill="#ffb703" />
      <rect x="67" y="64" width="3" height="4" fill="#ffb703" />
      <rect x="67" y="72" width="3" height="4" fill="#ffb703" />

      {/* Blinking Status LED */}
      <circle cx="58" cy="34" r="3" fill="#39ff14" className="animate-ping" />

      {/* Connecting Circuit Bus */}
      <line x1="70" y1="58" x2="84" y2="58" stroke="#10b981" strokeWidth="2" />
      <line x1="84" y1="58" x2="84" y2="40" stroke="#10b981" strokeWidth="2" />
      <line x1="84" y1="40" x2="94" y2="40" stroke="#10b981" strokeWidth="2" />

      {/* Sensor 1: Flame & Gas Sensor */}
      <rect x="94" y="20" width="56" height="34" fill="#1c1626" stroke="#ff0055" strokeWidth="1" />
      <text x="98" y="30" fill="#ff0055" fontSize="5" fontFamily="'Press Start 2P', monospace">MQ-2 GAS SENSOR</text>
      {/* Animated Pixel Fire / Burner */}
      <rect x="102" y="36" width="6" height="12" fill="#ff0055" />
      <rect x="106" y="34" width="6" height="14" fill="#ffb703" />
      <rect x="110" y="38" width="6" height="10" fill="#facc15" />
      <text x="122" y="44" fill="#39ff14" fontSize="6" fontFamily="'JetBrains Mono', monospace">SAFE PPM</text>

      {/* Sensor 2: Servo Valve Controller */}
      <rect x="94" y="58" width="56" height="30" fill="#16222f" stroke="#00e5ff" strokeWidth="1" />
      <text x="98" y="68" fill="#00e5ff" fontSize="5" fontFamily="'Press Start 2P', monospace">VALVE SERVO</text>
      <rect x="102" y="74" width="18" height="8" fill="#334155" />
      <rect x="114" y="72" width="4" height="12" fill="#39ff14" />
      <text x="124" y="80" fill="#39ff14" fontSize="5" fontFamily="'Press Start 2P', monospace">AUTO-CUT</text>

      {/* Top Banner */}
      <rect x="12" y="10" width="70" height="10" fill="#1e1808" stroke="#ffb703" strokeWidth="1" />
      <text x="16" y="17" fill="#ffb703" fontSize="5" fontFamily="'Press Start 2P', monospace">BLYNK IOT CLOUD</text>
    </svg>
  );
}

export function NetworkScannerPixelArt({ className = "w-full h-full" }) {
  return (
    <svg
      viewBox="0 0 160 100"
      className={className}
      shapeRendering="crispEdges"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background Cyber Terminal */}
      <rect width="160" height="100" fill="#09130d" />
      <rect x="4" y="4" width="152" height="92" fill="#0c1c13" stroke="#39ff14" strokeWidth="2" />

      {/* Scanline pattern */}
      <line x1="4" y1="20" x2="156" y2="20" stroke="#163824" strokeWidth="1" />
      <line x1="4" y1="40" x2="156" y2="40" stroke="#163824" strokeWidth="1" />
      <line x1="4" y1="60" x2="156" y2="60" stroke="#163824" strokeWidth="1" />
      <line x1="4" y1="80" x2="156" y2="80" stroke="#163824" strokeWidth="1" />

      {/* Subnet Router Node (Central) */}
      <rect x="20" y="44" width="18" height="14" fill="#072918" stroke="#39ff14" strokeWidth="1" />
      <text x="23" y="53" fill="#39ff14" fontSize="5" fontFamily="'Press Start 2P', monospace">GW</text>

      {/* Topology branches */}
      <line x1="38" y1="51" x2="65" y2="30" stroke="#39ff14" strokeWidth="1.5" />
      <line x1="38" y1="51" x2="65" y2="51" stroke="#39ff14" strokeWidth="1.5" />
      <line x1="38" y1="51" x2="65" y2="72" stroke="#39ff14" strokeWidth="1.5" />

      {/* Target Node 1 (192.168.1.10 - SSH) */}
      <rect x="65" y="22" width="22" height="14" fill="#072918" stroke="#39ff14" strokeWidth="1" />
      <text x="68" y="31" fill="#39ff14" fontSize="4" fontFamily="'Press Start 2P', monospace">PORT 22</text>
      <rect x="74" y="16" width="4" height="4" fill="#39ff14" />

      {/* Target Node 2 (192.168.1.25 - HTTP 80) */}
      <rect x="65" y="44" width="22" height="14" fill="#072918" stroke="#39ff14" strokeWidth="1" />
      <text x="68" y="53" fill="#39ff14" fontSize="4" fontFamily="'Press Start 2P', monospace">PORT 80</text>
      <rect x="74" y="38" width="4" height="4" fill="#39ff14" />

      {/* Target Node 3 (192.168.1.105 - VULN PORT 445 SMB) */}
      <rect x="65" y="66" width="22" height="14" fill="#300d16" stroke="#ff0055" strokeWidth="1" />
      <text x="67" y="75" fill="#ff0055" fontSize="4" fontFamily="'Press Start 2P', monospace">PORT 445</text>
      <rect x="74" y="60" width="4" height="4" fill="#ff0055" className="animate-pulse" />

      {/* Right Column: Nmap Terminal Log */}
      <rect x="94" y="16" width="56" height="70" fill="#040b07" stroke="#1e5436" strokeWidth="1" />
      <text x="98" y="26" fill="#39ff14" fontSize="4.5" fontFamily="'Press Start 2P', monospace">NMAP SCAN</text>
      <text x="98" y="36" fill="#a7f3d0" fontSize="4.5" fontFamily="'JetBrains Mono', monospace">Host: UP (3)</text>
      <text x="98" y="46" fill="#a7f3d0" fontSize="4.5" fontFamily="'JetBrains Mono', monospace">SYN Stealth</text>
      <text x="98" y="56" fill="#a7f3d0" fontSize="4.5" fontFamily="'JetBrains Mono', monospace">OS: Linux 6.x</text>
      <text x="98" y="66" fill="#39ff14" fontSize="4.5" fontFamily="'JetBrains Mono', monospace">Latency 1.2ms</text>
      <text x="98" y="78" fill="#ff0055" fontSize="4.5" fontFamily="'Press Start 2P', monospace">ALERT: SMB</text>

      {/* Header Banner */}
      <rect x="8" y="8" width="78" height="10" fill="#041209" stroke="#39ff14" strokeWidth="1" />
      <text x="12" y="15" fill="#39ff14" fontSize="5" fontFamily="'Press Start 2P', monospace">NMAP SUBNET RECON</text>
    </svg>
  );
}

// Factory helper to render the correct custom pixel art thumbnail
export function ProjectPixelThumbnail({ projectId, className = "w-full h-44" }) {
  switch (projectId) {
    case "ai-threat-detection":
      return <AIThreatPixelArt className={className} />;
    case "secure-message-vault":
      return <SecureVaultPixelArt className={className} />;
    case "smart-kitchen-iot":
      return <SmartKitchenPixelArt className={className} />;
    case "network-discovery-dashboard":
      return <NetworkScannerPixelArt className={className} />;
    default:
      return <AIThreatPixelArt className={className} />;
  }
}
