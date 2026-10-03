import React, { useState, useEffect, useRef } from 'react';
import { User } from 'lucide-react';
import { profileData } from '../data/profileData';
import { PixelAvatar } from '../components/common/PixelAvatar';
import { PixelCard } from '../components/common/PixelCard';
import { PixelBadge } from '../components/common/PixelBadge';

export function AboutSection() {
  const [animateStats, setAnimateStats] = useState(false);
  const sectionRef = useRef(null);

  // Trigger stat bar animation when scrolled into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateStats(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-16 sm:py-24 px-4 max-w-6xl mx-auto select-none"
    >
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#101726] border border-[#00e5ff]/40 text-[#00e5ff] font-pixel text-[9px] mb-2 shadow-[2px_2px_0px_#000]">
          <User className="w-3.5 h-3.5" />
          <span>PLAYER DOSSIER</span>
        </div>
        <h2 className="font-pixel text-xl sm:text-2xl text-white tracking-wider uppercase">
          CHARACTER PROFILE
        </h2>
        <p className="font-mono text-xs text-slate-400 mt-2 max-w-md mx-auto">
          &gt; Inspecting user attributes, academic telemetry & defensive loadout...
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Column: Character Card with Avatar & RPG Info */}
        <div className="lg:col-span-5">
          <PixelCard
            title="CHARACTER SHEET"
            variant="glow"
            accentColor="#00e5ff"
            badge="VERIFIED"
          >
            <div className="flex flex-col items-center text-center">
              {/* Custom Pixel Art Avatar */}
              <div className="mb-4">
                <PixelAvatar size={110} />
              </div>

              {/* Character Details */}
              <h3 className="font-pixel text-base text-white tracking-wider mb-1">
                {profileData.name}
              </h3>
              <p className="font-mono text-xs text-[#00e5ff] mb-4">
                {profileData.characterClass}
              </p>

              {/* Status Table */}
              <div className="w-full bg-[#080b15] border border-[#1d2740] p-3 text-left font-mono text-xs text-slate-300 space-y-2 mb-4">
                <div className="flex justify-between border-b border-[#182035] pb-1">
                  <span className="text-slate-400">Class:</span>
                  <span className="text-white font-semibold">{profileData.level}</span>
                </div>
                <div className="flex justify-between border-b border-[#182035] pb-1">
                  <span className="text-slate-400">University:</span>
                  <span className="text-[#38bdf8] font-semibold">{profileData.university}</span>
                </div>
                <div className="flex justify-between border-b border-[#182035] pb-1">
                  <span className="text-slate-400">CGPA:</span>
                  <span className="text-[#39ff14] font-bold tracking-wide">
                    {profileData.cgpa} / 10.0 ⭐
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Focus:</span>
                  <span className="text-[#ffb703] text-right font-medium text-[11px]">
                    Cybersec + Full-Stack
                  </span>
                </div>
              </div>

              {/* Player Attributes Status Bars (HP, MANA, EXP) */}
              <div className="w-full space-y-2">
                {profileData.attributes.map((attr) => (
                  <div key={attr.label} className="text-left font-mono text-[11px]">
                    <div className="flex justify-between text-slate-400 mb-0.5">
                      <span className="font-pixel text-[8px]" style={{ color: attr.color }}>
                        {attr.label}
                      </span>
                      <span>
                        {attr.current} / {attr.max}
                      </span>
                    </div>
                    <div className="w-full h-2.5 bg-[#080b15] border border-[#1f2a45]">
                      <div
                        className="h-full transition-all duration-700 ease-out"
                        style={{
                          width: `${(attr.current / attr.max) * 100}%`,
                          backgroundColor: attr.color
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </PixelCard>
        </div>

        {/* Right Column: Professional Summary + Animated RPG Stats + Equipment */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Bio Box */}
          <PixelCard
            title="DEVELOPER STATEMENT"
            accentColor="#ffb703"
            variant="default"
          >
            <p className="font-mono text-sm leading-relaxed text-slate-300 mb-4">
              {profileData.bio}
            </p>

            <div className="flex flex-wrap gap-2">
              <PixelBadge variant="legendary">9.67 CGPA</PixelBadge>
              <PixelBadge variant="cyber">THREAT MODELING</PixelBadge>
              <PixelBadge variant="default">REACT.JS</PixelBadge>
              <PixelBadge variant="success">PYTHON & ML</PixelBadge>
              <PixelBadge variant="rare">IOT & ARDUINO</PixelBadge>
            </div>
          </PixelCard>

          {/* RPG Stats Breakdown (Animated) */}
          <PixelCard
            title="RPG STAT ATTRIBUTES"
            accentColor="#39ff14"
            variant="default"
            badge="100% MOTIVATION"
          >
            <div className="space-y-4">
              {profileData.rpgStats.map((stat) => (
                <div key={stat.name} className="space-y-1">
                  <div className="flex justify-between items-center font-mono text-xs">
                    <span className="font-pixel text-[9px] text-white tracking-wider">
                      {stat.name}
                    </span>
                    <span className="font-pixel text-[9px]" style={{ color: stat.color }}>
                      {stat.value}%
                    </span>
                  </div>

                  {/* Retro Stepped Progress Bar */}
                  <div className="w-full h-3.5 bg-[#060810] border border-[#233154] p-0.5">
                    <div
                      className="h-full transition-all duration-1000 ease-out"
                      style={{
                        width: animateStats ? `${stat.value}%` : '0%',
                        backgroundColor: stat.color,
                        boxShadow: `0 0 8px ${stat.color}66`
                      }}
                    />
                  </div>

                  <p className="font-mono text-[10.5px] text-slate-400">
                    &gt; {stat.note}
                  </p>
                </div>
              ))}
            </div>
          </PixelCard>

          {/* Equipped Gear Slots */}
          <PixelCard
            title="EQUIPPED LOADOUT"
            accentColor="#ff007f"
            variant="cyber"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {profileData.equipment.map((eq) => (
                <div
                  key={eq.slot}
                  className="bg-[#0b0e1b] border border-[#222c4a] p-2.5 shadow-[2px_2px_0px_#000]"
                >
                  <span className="font-pixel text-[7.5px] text-[#ff007f] block mb-1">
                    [{eq.slot}]
                  </span>
                  <h4 className="font-mono text-xs text-white font-semibold">
                    {eq.item}
                  </h4>
                  <span className="font-mono text-[10px] text-[#39ff14] mt-0.5 block">
                    {eq.perk}
                  </span>
                </div>
              ))}
            </div>
          </PixelCard>

        </div>
      </div>
    </section>
  );
}
