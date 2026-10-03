import React, { useState } from 'react';
import { Target, ExternalLink, CheckCircle2, ShieldAlert, Cpu, Play } from 'lucide-react';
import { GithubPixelIcon } from '../components/common/PixelIcons';
import { projectsData } from '../data/projectsData';
import { ProjectPixelThumbnail } from '../components/common/ProjectPixelThumbnails';
import { PixelModal } from '../components/common/PixelModal';
import { PixelBadge } from '../components/common/PixelBadge';
import { PixelButton } from '../components/common/PixelButton';
import { soundManager } from '../utils/soundEffects';

export function ProjectsSection() {
  const [activeModalProject, setActiveModalProject] = useState(null);

  const handleOpenMission = (project) => {
    soundManager.playMissionStart();
    setActiveModalProject(project);
  };

  const handleCloseModal = () => {
    soundManager.playSelect();
    setActiveModalProject(null);
  };

  return (
    <section id="projects" className="py-16 sm:py-24 px-4 max-w-6xl mx-auto select-none">
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#101726] border border-[#ff007f]/50 text-[#ff007f] font-pixel text-[9px] mb-2 shadow-[2px_2px_0px_#000]">
          <Target className="w-3.5 h-3.5" />
          <span>CAMPAIGN OBJECTIVES</span>
        </div>
        <h2 className="font-pixel text-xl sm:text-2xl text-white tracking-wider uppercase">
          PROJECTS & MISSIONS
        </h2>
        <p className="font-mono text-xs text-slate-400 mt-2 max-w-lg mx-auto">
          &gt; High-impact cybersecurity solutions, full-stack architectures, and IoT defense systems.
        </p>
      </div>

      {/* Missions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="flex flex-col bg-[#0b0e1b] border-2 border-[#1a233b] shadow-[6px_6px_0px_#000] hover:border-[#00e5ff] transition-all duration-200 group"
          >
            {/* Top Mission Status Bar */}
            <div className="flex items-center justify-between px-4 py-2 bg-[#101526] border-b-2 border-[#1a233b]">
              <div className="flex items-center gap-2">
                <span
                  className="w-2.5 h-2.5 inline-block animate-pulse"
                  style={{ backgroundColor: project.accentColor }}
                />
                <span className="font-pixel text-[9px] text-[#00e5ff] tracking-wider">
                  {project.missionCode}
                </span>
              </div>
              <span className="font-pixel text-[8px] text-[#39ff14] bg-[#0c1f13] px-2 py-0.5 border border-[#1b4329]">
                STATUS: {project.status}
              </span>
            </div>

            {/* Bespoke Project Pixel Art Scene */}
            <div className="relative border-b-2 border-[#1a233b] bg-black overflow-hidden">
              <ProjectPixelThumbnail projectId={project.id} className="w-full h-44 sm:h-48 object-cover" />
              <div className="absolute bottom-2 left-2">
                <PixelBadge variant="dark" size="xs">
                  {project.difficulty}
                </PixelBadge>
              </div>
            </div>

            {/* Mission Details */}
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-pixel text-sm sm:text-base text-white tracking-wide mb-2 group-hover:text-[#00e5ff] transition-colors">
                  {project.title}
                </h3>
                <p className="font-mono text-xs text-slate-300 mb-4 leading-relaxed">
                  {project.brief}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 bg-[#141b2e] border border-[#212d4d] text-slate-300 font-mono text-[10px]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[#182136]">
                <PixelButton
                  variant="primary"
                  size="sm"
                  icon={Play}
                  onClick={() => handleOpenMission(project)}
                  className="flex-1"
                >
                  [ START MISSION ]
                </PixelButton>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundManager.playSelect()}
                  className="p-2 bg-[#121727] text-slate-300 hover:text-white border border-[#253252] hover:border-[#00e5ff] shadow-[2px_2px_0px_#000] transition-colors"
                  title="View GitHub Source"
                >
                  <GithubPixelIcon className="w-4 h-4" />
                </a>

                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => soundManager.playSelect()}
                    className="p-2 bg-[#121727] text-slate-300 hover:text-white border border-[#253252] hover:border-[#00e5ff] shadow-[2px_2px_0px_#000] transition-colors"
                    title="Live Preview / Demo"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Detail Modal Dossier */}
      {activeModalProject && (
        <PixelModal
          isOpen={Boolean(activeModalProject)}
          onClose={handleCloseModal}
          title={`${activeModalProject.missionCode} : ${activeModalProject.title}`}
          subtitle={activeModalProject.tagline}
          accentColor={activeModalProject.accentColor}
        >
          <div className="space-y-6">
            
            {/* Visual Header Banner */}
            <div className="border-2 border-[#1f2a45] overflow-hidden bg-black">
              <ProjectPixelThumbnail
                projectId={activeModalProject.id}
                className="w-full h-48 sm:h-56 object-cover"
              />
            </div>

            {/* Problem & Architecture */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#0e1324] border border-[#1e2a47] p-4 shadow-[2px_2px_0px_#000]">
                <h4 className="font-pixel text-[10px] text-[#ff007f] mb-2 uppercase flex items-center gap-1.5">
                  <ShieldAlert className="w-3.5 h-3.5" />
                  PROBLEM STATEMENT
                </h4>
                <p className="font-mono text-xs text-slate-300 leading-relaxed">
                  {activeModalProject.dossier.problemStatement}
                </p>
              </div>

              <div className="bg-[#0e1324] border border-[#1e2a47] p-4 shadow-[2px_2px_0px_#000]">
                <h4 className="font-pixel text-[10px] text-[#00e5ff] mb-2 uppercase flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5" />
                  SOLUTION ARCHITECTURE
                </h4>
                <p className="font-mono text-xs text-slate-300 leading-relaxed">
                  {activeModalProject.dossier.solutionArchitecture}
                </p>
              </div>
            </div>

            {/* Key Metrics / Benchmarks */}
            <div>
              <h4 className="font-pixel text-[10px] text-[#ffb703] mb-2.5 uppercase">
                PERFORMANCE TELEMETRY & METRICS
              </h4>
              <div className="grid grid-cols-3 gap-3">
                {activeModalProject.dossier.keyMetrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="bg-[#12192e] border border-[#243357] p-3 text-center"
                  >
                    <span className="font-pixel text-sm sm:text-base text-[#39ff14] block mb-1">
                      {metric.value}
                    </span>
                    <span className="font-mono text-[10px] text-slate-400">
                      {metric.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Features Checklist */}
            <div>
              <h4 className="font-pixel text-[10px] text-white mb-2.5 uppercase">
                SYSTEM CAPABILITIES & IMPLEMENTATION
              </h4>
              <div className="space-y-2 font-mono text-xs text-slate-300 bg-[#0c101e] border border-[#1e2947] p-4">
                {activeModalProject.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#39ff14] flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Security Safeguards */}
            <div>
              <h4 className="font-pixel text-[10px] text-[#ff007f] mb-2 uppercase">
                DEFENSIVE SAFEGUARDS & SECURITY CONTROLS
              </h4>
              <ul className="list-disc list-inside font-mono text-xs text-slate-300 space-y-1 bg-[#130d1b] border border-[#3b1c31] p-3">
                {activeModalProject.dossier.securityControls.map((sec, idx) => (
                  <li key={idx}>{sec}</li>
                ))}
              </ul>
            </div>

            {/* Action Links */}
            <div className="flex flex-wrap gap-3 pt-3 border-t border-[#1e273f]">
              <PixelButton
                variant="primary"
                size="md"
                icon={GithubPixelIcon}
                href={activeModalProject.githubUrl}
                target="_blank"
                className="flex-1 sm:flex-none"
              >
                [ VIEW GITHUB REPO ]
              </PixelButton>

              {activeModalProject.demoUrl && (
                <PixelButton
                  variant="secondary"
                  size="md"
                  icon={ExternalLink}
                  href={activeModalProject.demoUrl}
                  target="_blank"
                  className="flex-1 sm:flex-none"
                >
                  [ LIVE PREVIEW ]
                </PixelButton>
              )}
            </div>

          </div>
        </PixelModal>
      )}
    </section>
  );
}
