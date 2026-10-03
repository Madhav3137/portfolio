import React, { useState } from 'react';
import { Mail, Send, Terminal } from 'lucide-react';
import { GithubPixelIcon, LinkedinPixelIcon, InstagramPixelIcon } from '../components/common/PixelIcons';
import { profileData } from '../data/profileData';
import { PixelButton } from '../components/common/PixelButton';
import { soundManager } from '../utils/soundEffects';

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [statusLogs, setStatusLogs] = useState([]);

  const handleChange = (e) => {
    soundManager.playTypeKey();
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      soundManager.playSelect();
      setStatus('error');
      setStatusLogs(['> ERROR 400: All parameters (NAME, EMAIL, MESSAGE) are required.']);
      return;
    }

    soundManager.playMissionStart();
    setStatus('sending');
    setStatusLogs([
      '> INITIATING ENCRYPTED UPLINK...',
      '> HANDSHAKING WITH DISPATCH SERVER...',
      '> TRANSMITTING SECURE TELEMETRY PACKETS...'
    ]);

    setTimeout(() => {
      soundManager.playSuccess();
      setStatus('sent');
      setStatusLogs((prev) => [
        ...prev,
        '> PACKETS VERIFIED BY RECEIVER [200 OK]',
        '> MESSAGE SENT SUCCESSFULLY ✓',
        '> Madhav will respond to your transmission shortly.'
      ]);
      setFormState({ name: '', email: '', message: '' });
    }, 1200);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 px-4 max-w-5xl mx-auto select-none">
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#101726] border border-[#00e5ff]/50 text-[#00e5ff] font-pixel text-[9px] mb-2 shadow-[2px_2px_0px_#000]">
          <Terminal className="w-3.5 h-3.5" />
          <span>COMMS UPLINK</span>
        </div>
        <h2 className="font-pixel text-xl sm:text-2xl text-white tracking-wider uppercase">
          &gt; LET'S CONNECT
        </h2>
        <p className="font-mono text-xs sm:text-sm text-slate-300 mt-2 max-w-lg mx-auto leading-relaxed">
          Have a project, internship opportunity, collaboration idea, or just want to talk tech?
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Direct Communication Coordinates */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-[#0b0e1b] border-2 border-[#1c2640] p-5 shadow-[4px_4px_0px_#000]">
            <h3 className="font-pixel text-xs text-white uppercase mb-4 flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[#39ff14] inline-block animate-pulse" />
              DIRECT CHANNELS
            </h3>

            <div className="space-y-3 font-mono text-xs">
              {/* Email */}
              <a
                href={`mailto:${profileData.socials.email}`}
                onClick={() => soundManager.playSelect()}
                className="flex items-center gap-3 p-2.5 bg-[#101526] border border-[#1f2942] hover:border-[#00e5ff] hover:text-[#00e5ff] text-slate-300 transition-colors"
              >
                <Mail className="w-4 h-4 text-[#00e5ff] flex-shrink-0" />
                <div className="truncate">
                  <span className="font-pixel text-[8px] text-slate-400 block uppercase">
                    EMAIL DISPATCH
                  </span>
                  <span className="truncate">{profileData.socials.email}</span>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href={profileData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundManager.playSelect()}
                className="flex items-center gap-3 p-2.5 bg-[#101526] border border-[#1f2942] hover:border-[#00e5ff] hover:text-[#00e5ff] text-slate-300 transition-colors"
              >
                <LinkedinPixelIcon className="w-4 h-4 text-[#38bdf8] flex-shrink-0" />
                <div>
                  <span className="font-pixel text-[8px] text-slate-400 block uppercase">
                    PROFESSIONAL NETWORK
                  </span>
                  <span>linkedin.com/in/madhavkansal</span>
                </div>
              </a>

              {/* GitHub */}
              <a
                href={profileData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundManager.playSelect()}
                className="flex items-center gap-3 p-2.5 bg-[#101526] border border-[#1f2942] hover:border-[#00e5ff] hover:text-[#00e5ff] text-slate-300 transition-colors"
              >
                <GithubPixelIcon className="w-4 h-4 text-white flex-shrink-0" />
                <div>
                  <span className="font-pixel text-[8px] text-slate-400 block uppercase">
                    CODE REPOSITORIES
                  </span>
                  <span>github.com/Madhav3137</span>
                </div>
              </a>

              {/* Instagram */}
              <a
                href={profileData.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundManager.playSelect()}
                className="flex items-center gap-3 p-2.5 bg-[#101526] border border-[#1f2942] hover:border-[#ff007f] hover:text-[#ff007f] text-slate-300 transition-colors"
              >
                <InstagramPixelIcon className="w-4 h-4 text-[#ff007f] flex-shrink-0" />
                <div>
                  <span className="font-pixel text-[8px] text-slate-400 block uppercase">
                    CREATIVE & MEDIA
                  </span>
                  <span>instagram.com/madhav._.kansal</span>
                </div>
              </a>
            </div>
          </div>

          {/* Quick Notice */}
          <div className="bg-[#0f1422] border border-[#222e4c] p-4 text-[11px] font-mono text-slate-400 shadow-[3px_3px_0px_#000]">
            <p className="text-[#39ff14] font-pixel text-[9px] mb-1">
              &gt; RESPONSE LATENCY: &lt; 24 HOURS
            </p>
            Currently seeking Software Engineering and Cybersecurity Internships for Summer & Fall.
          </div>
        </div>

        {/* Right Column: Retro Terminal Form */}
        <div className="lg:col-span-7">
          <div className="bg-[#070a14] border-2 border-[#00e5ff] shadow-[8px_8px_0px_#000] p-5 sm:p-7">
            {/* Terminal Window Header */}
            <div className="flex items-center justify-between border-b-2 border-[#162238] pb-3 mb-5">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-[#00e5ff] inline-block" />
                <span className="font-pixel text-[10px] text-white uppercase">
                  MESSAGE_TRANSMISSION.SH
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 bg-[#ff0055]" />
                <span className="w-2 h-2 bg-[#ffb703]" />
                <span className="w-2 h-2 bg-[#39ff14]" />
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Field */}
              <div>
                <label className="font-pixel text-[9px] text-[#00e5ff] block mb-1.5 uppercase">
                  &gt; NAME:
                </label>
                <input
                  type="text"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="e.g. Recruiters / Lead Architect"
                  required
                  className="w-full bg-[#0d1222] border-2 border-[#1f2c4a] px-3 py-2 text-white font-mono text-xs focus:border-[#00e5ff] outline-none shadow-[2px_2px_0px_#000]"
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="font-pixel text-[9px] text-[#00e5ff] block mb-1.5 uppercase">
                  &gt; EMAIL:
                </label>
                <input
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="e.g. your.email@company.com"
                  required
                  className="w-full bg-[#0d1222] border-2 border-[#1f2c4a] px-3 py-2 text-white font-mono text-xs focus:border-[#00e5ff] outline-none shadow-[2px_2px_0px_#000]"
                />
              </div>

              {/* Message Field */}
              <div>
                <label className="font-pixel text-[9px] text-[#00e5ff] block mb-1.5 uppercase">
                  &gt; MESSAGE:
                </label>
                <textarea
                  name="message"
                  rows="4"
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Details regarding your opportunity, project, or greeting..."
                  required
                  className="w-full bg-[#0d1222] border-2 border-[#1f2c4a] px-3 py-2 text-white font-mono text-xs focus:border-[#00e5ff] outline-none shadow-[2px_2px_0px_#000] resize-none"
                />
              </div>

              {/* Terminal Logs Window */}
              {statusLogs.length > 0 && (
                <div className="bg-[#03060d] border border-[#162638] p-3 font-mono text-xs space-y-1">
                  {statusLogs.map((log, idx) => (
                    <div
                      key={idx}
                      className={
                        log.includes('SUCCESSFULLY') || log.includes('200 OK')
                          ? 'text-[#39ff14] font-bold'
                          : log.includes('ERROR')
                          ? 'text-[#ff0055]'
                          : 'text-[#00e5ff]'
                      }
                    >
                      {log}
                    </div>
                  ))}
                </div>
              )}

              {/* Submit Button */}
              <PixelButton
                type="submit"
                variant="primary"
                size="md"
                icon={Send}
                disabled={status === 'sending'}
                className="w-full mt-2"
              >
                {status === 'sending' ? '[ TRANSMITTING... ]' : '[ SEND MESSAGE ]'}
              </PixelButton>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}
