import React, { useState } from 'react';
import { Camera, Sparkles } from 'lucide-react';
import { soundManager } from '../../utils/soundEffects';

export function PixelAvatar({ size = 130, className = "" }) {
  const [showRealPhoto, setShowRealPhoto] = useState(false);

  const togglePhoto = () => {
    soundManager.playSelect();
    setShowRealPhoto(!showRealPhoto);
  };

  return (
    <div className={`relative inline-flex flex-col items-center select-none ${className}`}>
      {/* Avatar Container with Pixel Frame */}
      <div
        onClick={togglePhoto}
        className="relative cursor-pointer group transition-transform active:scale-95"
        style={{ width: size, height: size }}
        title="Click to toggle between Pixel Avatar & Real Photo"
      >
        {/* Outer Pixelated Frame Border */}
        <div className="absolute inset-0 bg-[#090c16] border-2 border-[#00e5ff] shadow-[4px_4px_0px_#000]">
          {/* Stepped Corner Pixel Accent Blocks */}
          <span className="absolute -top-1 -left-1 w-2 h-2 bg-white" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-white" />
          <span className="absolute -bottom-1 -left-1 w-2 h-2 bg-white" />
          <span className="absolute -bottom-1 -right-1 w-2 h-2 bg-white" />
        </div>

        {/* Inner Content: Either Real Photo or Custom Pixel Avatar */}
        <div className="absolute inset-1.5 overflow-hidden bg-[#0e1324] flex items-center justify-center">
          {showRealPhoto ? (
            /* Real Photo Mode (Madhav's Actual Uploaded Photo) */
            <div className="relative w-full h-full">
              <img
                src="/madhav-photo.jpg"
                alt="Madhav Kansal - Real Photo"
                className="w-full h-full object-cover object-top filter contrast-105"
              />
              {/* Subtle Scanline Overlay */}
              <div
                className="absolute inset-0 pointer-events-none opacity-25"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(0,0,0,0) 50%, rgba(0,0,0,0.7) 50%)',
                  backgroundSize: '100% 3px'
                }}
              />
            </div>
          ) : (
            /* Custom Bespoke Pixel Art Avatar Matching Madhav's Real Face */
            <svg
              viewBox="0 0 64 64"
              className="w-full h-full"
              shapeRendering="crispEdges"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Background gradient */}
              <rect width="64" height="64" fill="#0c1020" />
              <rect x="2" y="2" width="60" height="60" fill="#11172c" />

              {/* === 1. HAIR: VOLUME ON TOP, SWEPT UP & TO THE RIGHT, FADE ON SIDES === */}
              {/* Top hair volume (styled quiff/pompadour) */}
              <rect x="18" y="5" width="28" height="5" fill="#141416" />
              <rect x="22" y="4" width="22" height="4" fill="#1f1e24" />
              <rect x="26" y="3" width="16" height="3" fill="#292830" />
              <rect x="30" y="2" width="10" height="2" fill="#35343d" />
              
              {/* Main hair body */}
              <rect x="16" y="9" width="32" height="6" fill="#141416" />
              <rect x="15" y="12" width="34" height="5" fill="#18181d" />
              
              {/* Hair texture strands / highlights (swept right) */}
              <rect x="24" y="6" width="6" height="2" fill="#2d2c36" />
              <rect x="32" y="5" width="8" height="2" fill="#2d2c36" />
              <rect x="38" y="7" width="6" height="2" fill="#2d2c36" />

              {/* Side fades (shorter faded hair) */}
              <rect x="14" y="16" width="4" height="10" fill="#201e26" />
              <rect x="46" y="16" width="4" height="10" fill="#201e26" />
              <rect x="16" y="22" width="2" height="5" fill="#1a1820" />
              <rect x="46" y="22" width="2" height="5" fill="#1a1820" />

              {/* === 2. FACE & SKIN TONE === */}
              {/* Forehead */}
              <rect x="18" y="16" width="28" height="6" fill="#f0c29b" />
              {/* Cheeks & Mid-face */}
              <rect x="18" y="22" width="28" height="14" fill="#f0c29b" />
              {/* Temple shadow */}
              <rect x="18" y="17" width="2" height="6" fill="#e2af88" />
              <rect x="44" y="17" width="2" height="6" fill="#e2af88" />

              {/* Ears */}
              <rect x="12" y="22" width="3" height="7" fill="#e5ad85" />
              <rect x="49" y="22" width="3" height="7" fill="#e5ad85" />

              {/* Defined Eyebrows */}
              <rect x="21" y="19" width="8" height="2" fill="#16151a" />
              <rect x="35" y="19" width="8" height="2" fill="#16151a" />

              {/* Eyes */}
              <rect x="23" y="23" width="4" height="3" fill="#ffffff" />
              <rect x="25" y="23" width="2" height="3" fill="#1e1b18" />
              <rect x="37" y="23" width="4" height="3" fill="#ffffff" />
              <rect x="37" y="23" width="2" height="3" fill="#1e1b18" />

              {/* === 3. CLEAR TRANSPARENT SQUARE GLASSES WITH BLUE REFLECTION === */}
              {/* Left Lens Frame (Clear transparent with subtle blue anti-glare sheen) */}
              <rect x="20" y="21" width="10" height="7" fill="#60a5fa" fillOpacity="0.25" stroke="#cbd5e1" strokeWidth="1" />
              <rect x="21" y="22" width="2" height="2" fill="#93c5fd" fillOpacity="0.8" />
              
              {/* Bridge */}
              <rect x="30" y="23" width="4" height="1" fill="#cbd5e1" />

              {/* Right Lens Frame */}
              <rect x="34" y="21" width="10" height="7" fill="#60a5fa" fillOpacity="0.25" stroke="#cbd5e1" strokeWidth="1" />
              <rect x="35" y="22" width="2" height="2" fill="#93c5fd" fillOpacity="0.8" />

              {/* Frame Temples */}
              <rect x="17" y="22" width="3" height="1" fill="#cbd5e1" />
              <rect x="44" y="22" width="3" height="1" fill="#cbd5e1" />

              {/* Nose Bridge */}
              <rect x="31" y="25" width="2" height="5" fill="#dfa57c" />
              <rect x="30" y="29" width="4" height="1" fill="#cb8d63" />

              {/* === 4. FACIAL HAIR: TRIMMED BEARD & MUSTACHE === */}
              {/* Mustache */}
              <rect x="28" y="32" width="8" height="2" fill="#232128" />
              <rect x="27" y="33" width="2" height="2" fill="#232128" />
              <rect x="35" y="33" width="2" height="2" fill="#232128" />

              {/* Lips / Friendly Smile */}
              <rect x="29" y="34" width="6" height="1" fill="#c77b5a" />

              {/* Soul Patch / Under-lip beard */}
              <rect x="31" y="36" width="2" height="2" fill="#232128" />

              {/* Chin Beard (Fuller trimmed beard) */}
              <rect x="26" y="38" width="12" height="4" fill="#232128" />
              <rect x="28" y="41" width="8" height="2" fill="#1b1a20" />

              {/* Jawline Trimmed Beard (connecting up to sideburns) */}
              <rect x="18" y="32" width="3" height="6" fill="#292731" />
              <rect x="20" y="36" width="4" height="3" fill="#292731" />
              <rect x="43" y="32" width="3" height="6" fill="#292731" />
              <rect x="40" y="36" width="4" height="3" fill="#292731" />

              {/* === 5. NECK & SILVER CHAIN === */}
              <rect x="26" y="40" width="12" height="5" fill="#dfa57c" />
              {/* Silver Chain */}
              <path d="M 28 44 Q 32 47 36 44" stroke="#cbd5e1" strokeWidth="1" fill="none" />
              <rect x="31.5" y="46" width="1" height="1" fill="#ffffff" />

              {/* === 6. MAROON CHITKARA UNIVERSITY POLO T-SHIRT === */}
              {/* Collar (Maroon/Burgundy ribbed collar) */}
              <polygon points="22,46 32,49 26,44" fill="#78111e" />
              <polygon points="42,46 32,49 38,44" fill="#78111e" />
              {/* Red polo button placket */}
              <rect x="30.5" y="48" width="3" height="8" fill="#8f1524" />
              <rect x="31.5" y="50" width="1" height="1" fill="#dc2626" />
              <rect x="31.5" y="53" width="1" height="1" fill="#dc2626" />

              {/* Main Polo Shirt Body (Maroon #8c1825) */}
              <rect x="10" y="46" width="44" height="18" fill="#8c1825" />
              <rect x="6" y="49" width="8" height="15" fill="#7a1420" />
              <rect x="50" y="49" width="8" height="15" fill="#7a1420" />

              {/* Chitkara University Logo on left chest (White text + icon) */}
              <rect x="40" y="51" width="3" height="3" fill="#ef4444" />
              <rect x="44" y="51" width="6" height="1" fill="#ffffff" />
              <rect x="44" y="53" width="5" height="1" fill="#ffffff" />
            </svg>
          )}
        </div>

        {/* Online Status LED Indicator */}
        <span className="absolute bottom-1 right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-black"></span>
        </span>
      </div>

      {/* Interactive Toggle Switch Button */}
      <button
        onClick={togglePhoto}
        className="mt-2.5 flex items-center gap-1 px-2 py-1 bg-[#101726] border border-[#00e5ff]/50 hover:bg-[#1a233a] text-[#00e5ff] font-pixel text-[8px] tracking-wider shadow-[2px_2px_0px_#000] cursor-pointer"
        title="Toggle Real Face Photo / Pixel Avatar"
      >
        {showRealPhoto ? (
          <>
            <Sparkles className="w-2.5 h-2.5 text-[#ffb703]" />
            <span>[ VIEW 2D PIXEL ]</span>
          </>
        ) : (
          <>
            <Camera className="w-2.5 h-2.5 text-[#39ff14]" />
            <span>[ VIEW REAL PHOTO ]</span>
          </>
        )}
      </button>
    </div>
  );
}
