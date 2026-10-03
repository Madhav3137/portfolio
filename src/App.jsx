import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { PixelNavbar } from './components/layout/PixelNavbar';
import { PixelFooter } from './components/layout/PixelFooter';
import { CRTOverlay } from './components/common/CRTOverlay';
import { ParticleCanvas } from './components/interactive/ParticleCanvas';
import { TerminalModal } from './components/interactive/TerminalModal';
import { KonamiNotice } from './components/interactive/KonamiNotice';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { SkillsSection } from './sections/SkillsSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { EducationSection } from './sections/EducationSection';
import { ContactSection } from './sections/ContactSection';
import { soundManager } from './utils/soundEffects';
import { useKonamiCode } from './utils/konami';

export function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [sfxMuted, setSfxMuted] = useState(soundManager.isMuted());
  const [crtEnabled, setCrtEnabled] = useState(true);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [konamiOpen, setKonamiOpen] = useState(false);

  // Toggle SFX
  const handleToggleSfx = () => {
    const unmuted = soundManager.toggleMute();
    setSfxMuted(!unmuted);
    if (unmuted) {
      soundManager.playSelect();
    }
  };

  // Toggle CRT Scanlines
  const handleToggleCrt = () => {
    setCrtEnabled((prev) => !prev);
  };

  // Konami Code Trigger: ↑ ↑ ↓ ↓ ← → ← → B A
  useKonamiCode(() => {
    soundManager.playKonamiPowerUp();
    try {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });
    } catch {}
    setKonamiOpen(true);
  });

  // Track active section on scroll
  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'contact'];

    const handleScroll = () => {
      // Viewport-relative trigger for accurate indexing across mobile phone and desktop screens
      const triggerY = Math.max(80, window.innerHeight * 0.35);

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= triggerY) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#080a12] text-slate-200 relative selection:bg-[#00e5ff] selection:text-black overflow-x-hidden">
      {/* Background Pixel Dust Stars */}
      <ParticleCanvas />

      {/* Optional CRT Scanlines Filter */}
      <CRTOverlay enabled={crtEnabled} />

      {/* Retro Navigation HUD */}
      <PixelNavbar
        activeSection={activeSection}
        sfxMuted={sfxMuted}
        onToggleSfx={handleToggleSfx}
        crtEnabled={crtEnabled}
        onToggleCrt={handleToggleCrt}
        onOpenTerminal={() => setTerminalOpen(true)}
      />

      {/* Main Game World Content */}
      <main className="relative z-10">
        <HeroSection onOpenTerminal={() => setTerminalOpen(true)} />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
      </main>

      {/* Pixel Credits Footer */}
      <PixelFooter onOpenTerminal={() => setTerminalOpen(true)} />

      {/* Interactive Cyber Terminal CLI Modal */}
      <TerminalModal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
      />

      {/* Secret Konami Code Victory Dialog */}
      <KonamiNotice
        isOpen={konamiOpen}
        onClose={() => setKonamiOpen(false)}
      />
    </div>
  );
}

export default App;
