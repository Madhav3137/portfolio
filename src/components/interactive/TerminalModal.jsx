import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Terminal as TerminalIcon, Maximize2, Minimize2 } from 'lucide-react';
import { profileData } from '../../data/profileData';
import { projectsData } from '../../data/projectsData';
import { soundManager } from '../../utils/soundEffects';

export function TerminalModal({ isOpen, onClose }) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { text: '==================================================', type: 'system' },
    { text: '  MADHAV OS v3.8 - CYBER SECURITY TERMINAL [OK]   ', type: 'highlight' },
    { text: '==================================================', type: 'system' },
    { text: 'Type "help" to view available terminal commands.', type: 'info' },
    { text: 'Try: whoami, skills, projects, nmap, cat flag.txt', type: 'dim' },
  ]);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isMaximized, setIsMaximized] = useState(false);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (cmdStr) => {
    const raw = cmdStr.trim();
    if (!raw) return;

    soundManager.playTypeKey();
    const args = raw.toLowerCase().split(' ');
    const command = args[0];

    // Append to command history for arrow navigation
    setCommandHistory((prev) => [...prev, raw]);
    setHistoryIndex(-1);

    const newLogs = [{ text: `madhav@security-terminal:~$ ${raw}`, type: 'prompt' }];

    switch (command) {
      case 'help':
        newLogs.push(
          { text: 'AVAILABLE COMMANDS:', type: 'highlight' },
          { text: '  whoami      - Print identity, CGPA, and status', type: 'info' },
          { text: '  skills      - Dump technical inventory & proficiencies', type: 'info' },
          { text: '  projects    - List active missions & repositories', type: 'info' },
          { text: '  quests      - Display achievements & experience', type: 'info' },
          { text: '  nmap [host] - Run simulated network reconnaissance scanner', type: 'info' },
          { text: '  contact     - Display communication channels', type: 'info' },
          { text: '  cat flag.txt- Inspect the security CTF flag', type: 'info' },
          { text: '  sudo        - Request root administrative privilege', type: 'info' },
          { text: '  clear       - Wipe the terminal screen buffer', type: 'info' },
          { text: '  exit        - Close the cyber terminal session', type: 'info' }
        );
        break;

      case 'whoami':
        newLogs.push(
          { text: `NAME: ${profileData.name}`, type: 'success' },
          { text: `ROLE: ${profileData.role}`, type: 'info' },
          { text: `ACADEMICS: ${profileData.university} • CGPA: ${profileData.cgpa}`, type: 'highlight' },
          { text: `STATUS: ${profileData.status}`, type: 'dim' },
          { text: profileData.bio, type: 'info' }
        );
        break;

      case 'skills':
        newLogs.push(
          { text: '--- TECHNICAL INVENTORY DUMP ---', type: 'highlight' },
          { text: '[LANGUAGES]   : C++, Java, JavaScript (ES6+), Python', type: 'info' },
          { text: '[WEB DEV]     : React.js, HTML5, CSS3, Node.js, Express.js, MongoDB', type: 'info' },
          { text: '[CYBERSECURITY]: Networking (TCP/IP), Linux, Wireshark, Nmap, Threat Modeling, SIEM, Forensics', type: 'success' },
          { text: '[TOOLS & HW]  : Git, GitHub, VS Code, Arduino IDE, Blynk, ESP32', type: 'info' }
        );
        break;

      case 'projects':
        newLogs.push(
          { text: '--- ACTIVE MISSIONS ---', type: 'highlight' },
          ...projectsData.map(
            (p) => ({
              text: `• [${p.missionCode}] ${p.title} (${p.techStack.slice(0, 3).join(', ')}) -> Status: ${p.status}`,
              type: 'info'
            })
          )
        );
        break;

      case 'quests':
        newLogs.push(
          { text: '--- QUEST LOG & MILESTONES ---', type: 'highlight' },
          { text: '[QUEST 1] JP Morgan - Qualified technical assessment; interviewed for SDE Intern', type: 'success' },
          { text: '[QUEST 2] Umang NGO - Media Head (Photography & Outreach Campaigns)', type: 'info' },
          { text: '[QUEST 3] Xposure - Photography & Branding Society Member (Chitkara)', type: 'info' }
        );
        break;

      case 'contact':
        newLogs.push(
          { text: `EMAIL    : ${profileData.socials.email}`, type: 'highlight' },
          { text: `LINKEDIN : ${profileData.socials.linkedin}`, type: 'info' },
          { text: `GITHUB   : ${profileData.socials.github}`, type: 'info' },
          { text: `INSTAGRAM: ${profileData.socials.instagram}`, type: 'dim' }
        );
        break;

      case 'nmap':
        const target = args[1] || '127.0.0.1';
        newLogs.push(
          { text: `Starting Nmap 7.94 ( https://nmap.org ) at ${new Date().toLocaleTimeString()} ...`, type: 'dim' },
          { text: `Nmap scan report for ${target}`, type: 'info' },
          { text: 'PORT     STATE SERVICE     VERSION', type: 'highlight' },
          { text: '22/tcp   open  ssh         OpenSSH 9.6 (Hardened)', type: 'info' },
          { text: '80/tcp   open  http        Madhav-React-Engine/1.0', type: 'success' },
          { text: '443/tcp  open  https       TLS 1.3 / CyberShield active', type: 'success' },
          { text: '8080/tcp open  http-proxy  Isolation Forest AI Pipeline', type: 'highlight' },
          { text: 'Nmap done: 1 IP address (1 host up) scanned in 0.42 seconds.', type: 'dim' }
        );
        soundManager.playSuccess();
        break;

      case 'cat':
        if (args[1] === 'flag.txt' || args[1] === 'flag') {
          newLogs.push(
            { text: 'FLAG FOUND!', type: 'highlight' },
            { text: 'CTF{MADHAV_KANSAL_9_67_CYBER_BUILDER_2026}', type: 'success' },
            { text: 'Achievement Unlocked: Master Codebreaker (+500 EXP)', type: 'dim' }
          );
          soundManager.playMissionStart();
        } else {
          newLogs.push({ text: `cat: ${args[1] || ''}: No such file or directory`, type: 'error' });
        }
        break;

      case 'sudo':
        newLogs.push(
          { text: '[SECURITY AUDIT ALERT] Unauthorized privilege escalation attempt logged.', type: 'error' },
          { text: 'Incident has been reported to security operations center.', type: 'highlight' }
        );
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      case 'exit':
        soundManager.playSelect();
        onClose();
        return;

      default:
        newLogs.push({
          text: `Command not found: "${raw}". Type "help" to view available commands.`,
          type: 'error'
        });
        break;
    }

    setHistory((prev) => [...prev, ...newLogs]);
    setInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(input);
    } else if (e.key === 'ArrowUp') {
      if (commandHistory.length > 0) {
        const nextIdx = historyIndex + 1;
        if (nextIdx < commandHistory.length) {
          setHistoryIndex(nextIdx);
          setInput(commandHistory[commandHistory.length - 1 - nextIdx]);
        }
      }
    } else if (e.key === 'ArrowDown') {
      if (historyIndex > 0) {
        const nextIdx = historyIndex - 1;
        setHistoryIndex(nextIdx);
        setInput(commandHistory[commandHistory.length - 1 - nextIdx]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  const colorMap = {
    system: 'text-slate-500',
    highlight: 'text-[#ffb703] font-bold',
    info: 'text-slate-300',
    success: 'text-[#39ff14] font-semibold',
    prompt: 'text-[#00e5ff]',
    dim: 'text-slate-400 italic',
    error: 'text-[#ff0055]'
  };

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 pt-16 sm:pt-4 bg-black/85 backdrop-blur-md animate-fadeIn select-none"
      onClick={onClose}
    >
      <div
        className={`
          flex flex-col bg-[#05070d] border-2 border-[#39ff14] shadow-[8px_8px_0px_#000]
          transition-all duration-200
          ${isMaximized ? 'w-full h-full' : 'w-full max-w-2xl h-[480px] max-h-[85vh]'}
        `}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-3 py-2 bg-[#0d1612] border-b-2 border-[#163826]">
          <div className="flex items-center gap-2">
            <TerminalIcon className="w-3.5 h-3.5 text-[#39ff14]" />
            <span className="font-pixel text-[10px] text-[#39ff14]">
              madhav@security-terminal:~ (bash)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsMaximized(!isMaximized)}
              className="p-1 text-slate-400 hover:text-white"
              title={isMaximized ? "Restore" : "Maximize"}
            >
              {isMaximized ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={() => {
                soundManager.playSelect();
                onClose();
              }}
              className="px-1.5 py-0.5 font-pixel text-[9px] bg-[#1b251f] text-slate-300 hover:bg-[#ff0055] hover:text-white border border-[#2b4436]"
              title="Close Terminal"
            >
              [X]
            </button>
          </div>
        </div>

        {/* Terminal Logs Viewport */}
        <div
          className="flex-1 p-4 overflow-y-auto font-mono text-xs sm:text-[13px] leading-relaxed select-text custom-scrollbar bg-[#05070d]"
          onClick={() => inputRef.current?.focus()}
        >
          {history.map((line, idx) => (
            <div key={idx} className={`${colorMap[line.type] || 'text-slate-300'} whitespace-pre-wrap`}>
              {line.text}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Input Prompt Row */}
        <div className="flex items-center gap-2 px-4 py-2.5 bg-[#080d16] border-t border-[#163826]">
          <span className="font-mono text-xs text-[#39ff14] font-bold whitespace-nowrap">
            &gt;
          </span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="type 'help', 'whoami', 'nmap'..."
            className="flex-1 bg-transparent text-[#39ff14] font-mono text-xs outline-none caret-[#39ff14]"
            autoFocus
          />
          <button
            onClick={() => handleCommand(input)}
            className="px-2 py-1 bg-[#163826] text-[#39ff14] font-pixel text-[8px] border border-[#39ff14]/40 hover:bg-[#39ff14] hover:text-black cursor-pointer"
          >
            EXEC
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}
