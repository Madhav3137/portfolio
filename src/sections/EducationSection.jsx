import React from 'react';
import { GraduationCap, Award, CheckCircle2 } from 'lucide-react';
import { educationData } from '../data/experienceData';

export function EducationSection() {
  return (
    <section id="education" className="py-16 sm:py-24 px-4 max-w-6xl mx-auto select-none">
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#101726] border border-[#39ff14]/50 text-[#39ff14] font-pixel text-[9px] mb-2 shadow-[2px_2px_0px_#000]">
          <GraduationCap className="w-3.5 h-3.5" />
          <span>KNOWLEDGE ARCHIVES</span>
        </div>
        <h2 className="font-pixel text-xl sm:text-2xl text-white tracking-wider uppercase">
          EDUCATION & CHECKPOINTS
        </h2>
        <p className="font-mono text-xs text-slate-400 mt-2 max-w-lg mx-auto">
          &gt; Academic world checkpoints, continuous distinction & core curriculum foundations.
        </p>
      </div>

      {/* Timeline Checkpoints */}
      <div className="relative border-l-2 border-[#1e2a47] ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-10">
        {educationData.map((edu) => (
          <div key={edu.id} className="relative group">
            {/* Glowing Pixel Map Pin / Node */}
            <div className="absolute -left-[35px] sm:-left-[51px] top-1.5 w-6 h-6 bg-[#0c101d] border-2 border-[#00e5ff] flex items-center justify-center shadow-[0_0_10px_rgba(0,229,255,0.4)]">
              <span className="w-2 h-2 bg-[#39ff14]" />
            </div>

            {/* Checkpoint Card */}
            <div className="bg-[#0b0e1b] border-2 border-[#1c2640] p-5 sm:p-6 shadow-[6px_6px_0px_#000] hover:border-[#00e5ff] transition-colors">
              {/* Checkpoint Badge & Period */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="font-pixel text-[9px] text-[#00e5ff]">
                  {edu.checkpoint}
                </span>
                <span className="font-mono text-xs text-slate-400">
                  {edu.period}
                </span>
              </div>

              {/* Institution */}
              <h3 className="font-pixel text-base sm:text-lg text-white tracking-wide mb-1">
                {edu.institution}
              </h3>

              {/* Degree */}
              <p className="font-mono text-xs sm:text-sm text-slate-300 font-semibold mb-3">
                {edu.degree}
              </p>

              {/* CGPA / Distinction Ribbon */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#121f18] border border-[#2b5420] text-[#39ff14] font-pixel text-[10px] mb-4 shadow-[2px_2px_0px_#000]">
                <Award className="w-3.5 h-3.5" />
                <span>{edu.score}</span>
                <span className="text-slate-500">•</span>
                <span className="text-slate-300 text-[8.5px]">{edu.scoreBadge}</span>
              </div>

              {/* Description */}
              <p className="font-mono text-xs text-slate-300 leading-relaxed mb-4">
                {edu.description}
              </p>

              {/* Accomplishments */}
              <div className="space-y-1.5 font-mono text-xs text-slate-300 bg-[#070914] border border-[#162038] p-3">
                {edu.achievements.map((item, aIdx) => (
                  <div key={aIdx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00e5ff] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
