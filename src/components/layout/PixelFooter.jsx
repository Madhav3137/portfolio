import { ArrowUp, Mail, ShieldCheck } from 'lucide-react';
import { GithubPixelIcon, LinkedinPixelIcon, InstagramPixelIcon } from '../common/PixelIcons';
import { profileData } from '../../data/profileData';
import { soundManager } from '../../utils/soundEffects';

export function PixelFooter({ onOpenTerminal }) {
  const scrollToTop = () => {
    soundManager.playSelect();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t-2 border-[#192238] bg-[#070912] text-slate-300 py-10 px-4 select-none relative">
      {/* Decorative Pixel Ribbon */}
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* Retro Game Ending Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#12192e] border border-[#00e5ff]/50 text-[#00e5ff] font-pixel text-[9px] mb-6 shadow-[3px_3px_0px_#000]">
          <ShieldCheck className="w-3.5 h-3.5 text-[#39ff14]" />
          <span>STAGE CLEAR • RECRUITER SAFE • ALL ASSETS SECURE</span>
        </div>

        {/* Title */}
        <h2 className="font-pixel text-sm sm:text-base text-white tracking-wider mb-2">
          MADHAV KANSAL — QUEST COMPLETE
        </h2>
        <p className="font-mono text-xs text-slate-400 max-w-lg mb-6">
          Thank you for exploring my 2D interactive developer quest. Open to software engineering and cybersecurity internships & full-time roles.
        </p>

        {/* Social Links Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <a
            href={profileData.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundManager.playSelect()}
            className="flex items-center gap-2 px-3 py-2 bg-[#121626] border border-[#232f4f] hover:border-[#00e5ff] hover:text-[#00e5ff] font-pixel text-[9px] shadow-[2px_2px_0px_#000] transition-colors"
          >
            <GithubPixelIcon className="w-3.5 h-3.5" />
            <span>GITHUB</span>
          </a>

          <a
            href={profileData.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundManager.playSelect()}
            className="flex items-center gap-2 px-3 py-2 bg-[#121626] border border-[#232f4f] hover:border-[#00e5ff] hover:text-[#00e5ff] font-pixel text-[9px] shadow-[2px_2px_0px_#000] transition-colors"
          >
            <LinkedinPixelIcon className="w-3.5 h-3.5" />
            <span>LINKEDIN</span>
          </a>

          <a
            href={`mailto:${profileData.socials.email}`}
            onClick={() => soundManager.playSelect()}
            className="flex items-center gap-2 px-3 py-2 bg-[#121626] border border-[#232f4f] hover:border-[#00e5ff] hover:text-[#00e5ff] font-pixel text-[9px] shadow-[2px_2px_0px_#000] transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>EMAIL</span>
          </a>

          <a
            href={profileData.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundManager.playSelect()}
            className="flex items-center gap-2 px-3 py-2 bg-[#121626] border border-[#232f4f] hover:border-[#ff007f] hover:text-[#ff007f] font-pixel text-[9px] shadow-[2px_2px_0px_#000] transition-colors"
          >
            <InstagramPixelIcon className="w-3.5 h-3.5" />
            <span>INSTAGRAM</span>
          </a>

          <button
            onClick={() => {
              soundManager.playMissionStart();
              if (onOpenTerminal) onOpenTerminal();
            }}
            className="flex items-center gap-2 px-3 py-2 bg-[#121626] border border-[#39ff14]/60 text-[#39ff14] hover:bg-[#39ff14] hover:text-black font-pixel text-[9px] shadow-[2px_2px_0px_#000] transition-colors"
          >
            <span>&gt;_ OPEN TERMINAL</span>
          </button>
        </div>

        {/* Scroll To Top Button */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 px-4 py-2 bg-[#00e5ff] text-black font-pixel text-[9.5px] border-2 border-black shadow-[3px_3px_0px_#000] hover:bg-[#38bdf8] active:translate-y-1 mb-8 cursor-pointer"
        >
          <ArrowUp className="w-3.5 h-3.5" />
          <span>[ RETURN TO SPAWN / TOP ]</span>
        </button>

        {/* Credits and Secret hint */}
        <div className="border-t border-[#161e33] w-full pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-slate-500 gap-3">
          <p>© {new Date().getFullYear()} Madhav Kansal. Chitkara University (CGPA 9.67).</p>
          <p className="flex items-center gap-1.5">
            Built with React, Vite & 8-Bit Pixel Art
          </p>
          <p className="text-slate-600 hover:text-slate-400 transition-colors">
            Secret Code: ↑ ↑ ↓ ↓ ← → ← → B A
          </p>
        </div>
      </div>
    </footer>
  );
}
