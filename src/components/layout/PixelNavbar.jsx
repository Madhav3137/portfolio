import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Tv, Terminal, Menu, X, Sun, Moon } from 'lucide-react';
import { soundManager } from '../../utils/soundEffects';

export function PixelNavbar({
  activeSection,
  sfxMuted,
  onToggleSfx,
  crtEnabled,
  onToggleCrt,
  onOpenTerminal,
  theme = 'dark',
  onToggleTheme
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
    { id: 'skills', label: 'SKILLS' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'experience', label: 'EXPERIENCE' },
    { id: 'education', label: 'EDUCATION' },
    { id: 'contact', label: 'CONTACT' }
  ];

  // Track overall scroll progress for game EXP bar
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const progress = Math.min(100, Math.max(0, (window.scrollY / totalScroll) * 100));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    soundManager.playSelect();
    setMobileMenuOpen(false);
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#090c16]/95 backdrop-blur-md border-b-2 border-[#192238] select-none">
      {/* Top EXP Progress Bar */}
      <div className="w-full h-1 bg-[#101726]">
        <div
          className="h-full bg-gradient-to-r from-[#00e5ff] via-[#ff007f] to-[#39ff14] transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 h-14 flex items-center justify-between">
        {/* Left: Player HUD Stats */}
        <div
          onClick={() => scrollToSection('home')}
          className="flex items-center gap-2 cursor-pointer group"
          title="Return to Spawn Point"
        >
          {/* Mini Pixel Player Sprite */}
          <div className="w-7 h-7 bg-[#12182b] border border-[#00e5ff] flex items-center justify-center shadow-[2px_2px_0px_#000]">
            <span className="font-pixel text-[10px] text-[#00e5ff]">MK</span>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-pixel text-[10px] text-white tracking-wider group-hover:text-[#00e5ff] transition-colors">
                MADHAV
              </span>
              <span className="font-pixel text-[8px] px-1 py-0.2 bg-[#00e5ff]/20 text-[#00e5ff] border border-[#00e5ff]/40">
                LVL 3
              </span>
            </div>
            <div className="flex items-center gap-2 text-[9px] font-mono text-slate-400">
              <span className="text-[#39ff14] font-bold">HP 100%</span>
              <span className="text-slate-600">|</span>
              <span className="text-[#00e5ff]">CGPA 9.67</span>
            </div>
          </div>
        </div>

        {/* Center: Desktop Navigation Bar */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                onMouseEnter={() => soundManager.playBlip()}
                className={`
                  relative px-3 py-1.5 font-pixel text-[9.5px] tracking-wide uppercase transition-all
                  ${
                    isActive
                      ? 'bg-[#151f38] text-[#00e5ff] border-b-2 border-[#00e5ff] shadow-[inset_0_-2px_0_#00e5ff]'
                      : 'text-slate-400 hover:text-white hover:bg-[#121727]'
                  }
                `}
              >
                {item.label}
                {isActive && (
                  <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#00e5ff]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right: Quick Controls & Toggles */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Cyber Terminal Launcher */}
          <button
            onClick={() => {
              soundManager.playMissionStart();
              if (onOpenTerminal) onOpenTerminal();
            }}
            title="Open Interactive Cyber Terminal"
            className="flex items-center gap-1 px-2.5 py-1 bg-[#101726] border border-[#39ff14]/60 text-[#39ff14] hover:bg-[#39ff14] hover:text-black font-pixel text-[9px] shadow-[2px_2px_0px_#000] transition-colors"
          >
            <Terminal className="w-3 h-3" />
            <span className="hidden sm:inline">&gt;_ CLI</span>
          </button>

          {/* CRT Scanlines Toggle */}
          <button
            onClick={() => {
              soundManager.playSelect();
              onToggleCrt();
            }}
            title={crtEnabled ? "Turn off CRT Scanlines" : "Turn on CRT Scanlines"}
            className={`
              p-1.5 border font-pixel text-[9px] transition-colors shadow-[2px_2px_0px_#000]
              ${
                crtEnabled
                  ? 'bg-[#00e5ff]/20 text-[#00e5ff] border-[#00e5ff]'
                  : 'bg-[#101422] text-slate-500 border-[#252f4a] hover:text-white'
              }
            `}
          >
            <Tv className="w-3.5 h-3.5" />
          </button>

          {/* SFX Sound Toggle */}
          <button
            onClick={() => {
              onToggleSfx();
            }}
            title={sfxMuted ? "Unmute 8-Bit Audio" : "Mute 8-Bit Audio"}
            className={`
              p-1.5 border font-pixel text-[9px] transition-colors shadow-[2px_2px_0px_#000]
              ${
                !sfxMuted
                  ? 'bg-[#ff007f]/20 text-[#ff007f] border-[#ff007f]'
                  : 'bg-[#101422] text-slate-500 border-[#252f4a] hover:text-white'
              }
            `}
          >
            {sfxMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
          </button>

          {/* Light / Dark Mode Theme Toggle Button */}
          <button
            onClick={() => {
              soundManager.playSelect();
              if (onToggleTheme) onToggleTheme();
            }}
            title={theme === 'light' ? "Switch to Cyber Dark Mode" : "Switch to Cyber Light Mode"}
            aria-label="Toggle Light/Dark Theme"
            className={`
              p-1.5 border font-pixel text-[9px] transition-colors shadow-[2px_2px_0px_#000] cursor-pointer
              ${
                theme === 'light'
                  ? 'bg-[#ffb703] text-black border-black font-bold hover:bg-[#e0a000]'
                  : 'bg-[#101422] text-[#ffb703] border-[#252f4a] hover:border-[#ffb703] hover:text-white'
              }
            `}
          >
            {theme === 'light' ? <Moon className="w-3.5 h-3.5" /> : <Sun className="w-3.5 h-3.5" />}
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => {
              soundManager.playSelect();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="lg:hidden p-1.5 bg-[#12182b] border border-[#00e5ff] text-[#00e5ff]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t-2 border-[#192238] bg-[#0c0f1d] px-4 py-3 shadow-[0_10px_20px_rgba(0,0,0,0.9)] animate-fadeIn">
          <div className="grid grid-cols-2 gap-2 mb-3">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`
                    p-2.5 text-left font-pixel text-[9.5px] border
                    ${
                      isActive
                        ? 'bg-[#182340] text-[#00e5ff] border-[#00e5ff]'
                        : 'bg-[#101424] text-slate-300 border-[#1f2942] hover:bg-[#151c30]'
                    }
                  `}
                >
                  &gt; {item.label}
                </button>
              );
            })}
          </div>

          {/* Mobile Quick Action: Theme Switch */}
          <div className="pt-2 border-t border-[#1c263f] flex items-center justify-between">
            <span className="font-pixel text-[8.5px] text-slate-400">
              THEME: <span className="text-[#ffb703] uppercase font-bold">{theme}</span>
            </span>
            <button
              onClick={() => {
                soundManager.playSelect();
                if (onToggleTheme) onToggleTheme();
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-[#12182a] border border-[#ffb703] text-[#ffb703] font-pixel text-[8.5px] shadow-[2px_2px_0_#000] cursor-pointer"
            >
              {theme === 'light' ? (
                <>
                  <Moon className="w-3 h-3" />
                  <span>DARK MODE</span>
                </>
              ) : (
                <>
                  <Sun className="w-3 h-3" />
                  <span>LIGHT MODE</span>
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
