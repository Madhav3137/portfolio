import React, { useEffect } from 'react';
import { soundManager } from '../../utils/soundEffects';

export function PixelModal({
  isOpen,
  onClose,
  title = "MISSION BRIEFING",
  subtitle = null,
  accentColor = "#00e5ff",
  children,
  maxWidth = "max-w-3xl"
}) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        soundManager.playSelect();
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      {/* Modal Container */}
      <div
        className={`
          relative w-full ${maxWidth} max-h-[90vh] flex flex-col
          bg-[#0a0d16] border-2 border-[#1e273f]
          shadow-[8px_8px_0px_#000]
        `}
        style={{ borderColor: accentColor }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Corner Pixel Blocks */}
        <span className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-black border-2" style={{ borderColor: accentColor }} />
        <span className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-black border-2" style={{ borderColor: accentColor }} />
        <span className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-black border-2" style={{ borderColor: accentColor }} />
        <span className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-black border-2" style={{ borderColor: accentColor }} />

        {/* Modal Window Header */}
        <div
          className="flex items-center justify-between px-4 py-2.5 border-b-2 border-[#1e273f] select-none"
          style={{ backgroundColor: '#111627' }}
        >
          <div className="flex items-center gap-2.5 overflow-hidden">
            <span
              className="w-3 h-3 flex-shrink-0 animate-pulse"
              style={{ backgroundColor: accentColor }}
            />
            <div className="truncate">
              <h2 className="font-pixel text-[11px] sm:text-xs text-white tracking-wider truncate uppercase">
                {title}
              </h2>
              {subtitle && (
                <p className="font-mono text-[10px] text-slate-400 truncate">
                  {subtitle}
                </p>
              )}
            </div>
          </div>

          {/* Window Controls */}
          <div className="flex items-center gap-2 flex-shrink-0 ml-2">
            <button
              onClick={() => {
                soundManager.playSelect();
                onClose();
              }}
              aria-label="Close modal"
              className="
                px-2 py-1 font-pixel text-[10px] bg-[#1e273f] text-slate-300
                border border-[#334155] hover:bg-[#ff0055] hover:text-white
                transition-colors cursor-pointer
              "
            >
              [X] ESC
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-4 sm:p-6 overflow-y-auto custom-scrollbar">
          {children}
        </div>
      </div>
    </div>
  );
}
