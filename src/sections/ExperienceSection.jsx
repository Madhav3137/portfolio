import React from 'react';
import { Scroll, CheckCircle, Sparkles, Building2 } from 'lucide-react';
import { questsData } from '../data/experienceData';
import { PixelBadge } from '../components/common/PixelBadge';

export function ExperienceSection() {
  return (
    <section id="experience" className="py-16 sm:py-24 px-4 max-w-6xl mx-auto select-none">
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#101726] border border-[#ffb703]/50 text-[#ffb703] font-pixel text-[9px] mb-2 shadow-[2px_2px_0px_#000]">
          <Scroll className="w-3.5 h-3.5" />
          <span>JOURNAL & ACHIEVEMENTS</span>
        </div>
        <h2 className="font-pixel text-xl sm:text-2xl text-white tracking-wider uppercase">
          EXPERIENCE QUEST LOG
        </h2>
        <p className="font-mono text-xs text-slate-400 mt-2 max-w-lg mx-auto">
          &gt; Completed organizational quests, leadership initiatives & competitive assessments.
        </p>
      </div>

      {/* Quests Stack */}
      <div className="space-y-6">
        {questsData.map((quest) => (
          <div
            key={quest.id}
            className="relative bg-[#0b0e1b] border-2 border-[#1c2640] p-5 sm:p-6 shadow-[6px_6px_0px_#000] hover:border-[#ffb703] transition-colors"
          >
            {/* Quest Completed Stamp Watermark */}
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 border-2 border-[#39ff14] px-2.5 py-1 text-[#39ff14] font-pixel text-[9px] sm:text-[10px] tracking-wider uppercase rotate-6 bg-[#091a10]/80 shadow-[2px_2px_0px_#000]">
              ✓ {quest.status}
            </div>

            {/* Header / Quest Title */}
            <div className="flex flex-wrap items-center gap-2 mb-2 pr-28 sm:pr-32">
              <span className="font-pixel text-[10px] text-[#00e5ff]">
                {quest.questCode}
              </span>
              <span className="text-slate-600">|</span>
              <PixelBadge variant="legendary" size="xs">
                {quest.rank}
              </PixelBadge>
              <PixelBadge variant="dark" size="xs">
                {quest.type}
              </PixelBadge>
            </div>

            <h3 className="font-pixel text-base sm:text-lg text-white tracking-wide mb-1">
              {quest.role}
            </h3>

            <div className="flex items-center gap-2 font-mono text-xs text-[#ffb703] font-semibold mb-4">
              <Building2 className="w-3.5 h-3.5" />
              <span>{quest.organization}</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-400">{quest.period}</span>
            </div>

            {/* Summary */}
            <p className="font-mono text-xs sm:text-[13px] text-slate-300 leading-relaxed mb-4 max-w-3xl">
              {quest.summary}
            </p>

            {/* Key Accomplishments */}
            <div className="space-y-1.5 font-mono text-xs text-slate-300 bg-[#070a14] border border-[#162038] p-3 mb-4">
              {quest.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#00e5ff] flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Quest Rewards / Unlocks */}
            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[#18233b]">
              <span className="font-pixel text-[8px] text-slate-400 uppercase">
                QUEST REWARDS:
              </span>
              {quest.rewards.map((rew, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1 px-2 py-0.5 bg-[#171f11] border border-[#2b5420] text-[#39ff14] font-pixel text-[8px]"
                >
                  <Sparkles className="w-2.5 h-2.5" />
                  {rew}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
