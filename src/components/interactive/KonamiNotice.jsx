import React from 'react';
import { createPortal } from 'react-dom';
import { Award, Sparkles } from 'lucide-react';
import { soundManager } from '../../utils/soundEffects';

export function KonamiNotice({ isOpen, onClose }) {
  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn select-none"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md bg-[#0a0f1d] border-4 border-[#ffb703] p-6 text-center shadow-[10px_10px_0px_#000]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Pixel corners */}
        <span className="absolute -top-2 -left-2 w-4 h-4 bg-black border-2 border-[#ffb703]" />
        <span className="absolute -top-2 -right-2 w-4 h-4 bg-black border-2 border-[#ffb703]" />
        <span className="absolute -bottom-2 -left-2 w-4 h-4 bg-black border-2 border-[#ffb703]" />
        <span className="absolute -bottom-2 -right-2 w-4 h-4 bg-black border-2 border-[#ffb703]" />

        <div className="inline-flex items-center justify-center w-14 h-14 bg-[#231a04] border-2 border-[#ffb703] mb-4 text-[#ffb703] animate-bounce">
          <Award className="w-8 h-8" />
        </div>

        <div className="inline-block px-2.5 py-0.5 bg-[#ffb703] text-black font-pixel text-[9px] mb-2 font-bold uppercase">
          SECRET CHEAT CODE ACTIVATED!
        </div>

        <h2 className="font-pixel text-lg text-white mb-2 tracking-wider">
          HACKER GOD MODE
        </h2>

        <p className="font-mono text-xs text-slate-300 mb-6 leading-relaxed">
          You entered the legendary Konami sequence (<span className="text-[#ffb703]">↑ ↑ ↓ ↓ ← → ← → B A</span>). You have unlocked infinite recruiter favor and master credentials!
        </p>

        {/* Perks Box */}
        <div className="bg-[#0f1629] border border-[#232f4f] p-3 text-left font-mono text-[11px] text-slate-300 space-y-1.5 mb-6">
          <div className="flex items-center gap-2 text-[#39ff14]">
            <Sparkles className="w-3.5 h-3.5 flex-shrink-0" />
            <span>CGPA Status: 9.67 (Rank 1 Tier)</span>
          </div>
          <div className="flex items-center gap-2 text-[#00e5ff]">
            <Sparkles className="w-3.5 h-3.5 flex-shrink-0" />
            <span>Threat Model: Zero False Positives</span>
          </div>
          <div className="flex items-center gap-2 text-[#ff007f]">
            <Sparkles className="w-3.5 h-3.5 flex-shrink-0" />
            <span>Recruiter Response Rate: +100%</span>
          </div>
        </div>

        <button
          onClick={() => {
            soundManager.playSelect();
            onClose();
          }}
          className="w-full py-3 bg-[#ffb703] hover:bg-[#e0a000] text-black font-pixel text-xs border-2 border-black shadow-[4px_4px_0px_#000] active:translate-y-1 cursor-pointer font-bold"
        >
          [ CLAIM GLORY & RESUME ]
        </button>
      </div>
    </div>,
    document.body
  );
}
