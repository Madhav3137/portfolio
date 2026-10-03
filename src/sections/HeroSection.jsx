import React from 'react';
import { Terminal, Shield, Code, ChevronDown, Sparkles, Send, FolderGit2 } from 'lucide-react';
import { profileData } from '../data/profileData';
import { PixelCharacterScene } from '../components/interactive/PixelCharacterScene';
import { PixelButton } from '../components/common/PixelButton';
import { soundManager } from '../utils/soundEffects';

export function HeroSection({ onOpenTerminal }) {
  const scrollTo = (id) => {
    soundManager.playSelect();
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 70;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-3.5rem)] pt-16 pb-16 flex flex-col justify-center items-center px-4 overflow-hidden"
    >
      {/* Decorative Grid Lines */}
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
        
        {/* Left Column: Introductions and CTA */}
        <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#101726] border-2 border-[#00e5ff]/50 shadow-[3px_3px_0px_#000] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#39ff14] animate-ping" />
            <span className="font-pixel text-[9px] text-[#00e5ff] uppercase tracking-wider">
              PLAYER 1: {profileData.handle}
            </span>
          </div>

          {/* Main Greeting */}
          <h1 className="font-pixel text-2xl sm:text-3xl md:text-4xl text-white tracking-wider mb-4 leading-snug">
            Hi, I'm <span className="text-[#00e5ff] drop-shadow-[0_0_12px_rgba(0,229,255,0.4)]">Madhav</span> 👋
          </h1>

          {/* Role Subtitle */}
          <p className="font-pixel text-xs sm:text-[13px] text-[#ffb703] leading-relaxed mb-4 max-w-xl">
            {profileData.role}
          </p>

          {/* Description */}
          <p className="font-mono text-sm sm:text-[15px] text-slate-300 leading-relaxed mb-6 max-w-xl">
            "{profileData.shortDescription}"
          </p>

          {/* Mini RPG Attribute Pills */}
          <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-8">
            <div className="px-2.5 py-1 bg-[#131b2e] border border-[#233154] font-mono text-[11px] text-slate-300 flex items-center gap-1.5 shadow-[2px_2px_0px_#000]">
              <Shield className="w-3.5 h-3.5 text-[#ff007f]" />
              <span>Chitkara CSE (3rd Year)</span>
            </div>
            <div className="px-2.5 py-1 bg-[#131b2e] border border-[#233154] font-mono text-[11px] text-slate-300 flex items-center gap-1.5 shadow-[2px_2px_0px_#000]">
              <Sparkles className="w-3.5 h-3.5 text-[#39ff14]" />
              <span className="text-[#39ff14] font-bold">CGPA: 9.67</span>
            </div>
            <div className="px-2.5 py-1 bg-[#131b2e] border border-[#233154] font-mono text-[11px] text-slate-300 flex items-center gap-1.5 shadow-[2px_2px_0px_#000]">
              <Code className="w-3.5 h-3.5 text-[#00e5ff]" />
              <span>Full-Stack & Security</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3.5 justify-center lg:justify-start w-full sm:w-auto">
            <PixelButton
              variant="primary"
              size="md"
              icon={FolderGit2}
              onClick={() => scrollTo('projects')}
            >
              [ EXPLORE MY WORK ]
            </PixelButton>

            <PixelButton
              variant="secondary"
              size="md"
              icon={Send}
              onClick={() => scrollTo('contact')}
            >
              [ CONTACT ME ]
            </PixelButton>

            <PixelButton
              variant="dark"
              size="md"
              icon={Terminal}
              onClick={() => {
                soundManager.playMissionStart();
                if (onOpenTerminal) onOpenTerminal();
              }}
            >
              [ &gt;_ CLI TERMINAL ]
            </PixelButton>
          </div>
        </div>

        {/* Right Column: 2D Pixel Art Developer Scene */}
        <div className="lg:col-span-6 w-full flex justify-center">
          <PixelCharacterScene onOpenTerminal={onOpenTerminal} />
        </div>
      </div>

      {/* Down Scroll Indicator */}
      <div
        onClick={() => scrollTo('about')}
        className="mt-8 cursor-pointer flex flex-col items-center text-slate-500 hover:text-[#00e5ff] transition-colors group animate-bounce select-none"
      >
        <span className="font-pixel text-[8px] tracking-widest uppercase mb-1">
          SCROLL TO EXPLORE
        </span>
        <ChevronDown className="w-4 h-4 text-[#00e5ff]" />
      </div>
    </section>
  );
}
