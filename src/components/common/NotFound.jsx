import React from 'react';
import { Home } from 'lucide-react';
import { PixelButton } from './PixelButton';
import { soundManager } from '../../utils/soundEffects';

export function NotFound({ onReturnHome }) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[#080a12] text-center select-none">
      <div className="max-w-md w-full bg-[#0d1222] border-4 border-[#ff0055] p-8 shadow-[10px_10px_0px_#000] relative">
        <span className="font-pixel text-4xl sm:text-5xl text-[#ff0055] block mb-4 animate-pulse">
          GAME OVER
        </span>

        <div className="inline-block px-3 py-1 bg-[#230913] border border-[#ff0055] text-[#ff0055] font-pixel text-[10px] mb-4">
          ERROR 404: LEVEL NOT FOUND
        </div>

        <p className="font-mono text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
          The requested coordinate does not exist on this server. Your player was teleported into the void!
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <PixelButton
            variant="primary"
            size="md"
            icon={Home}
            onClick={() => {
              soundManager.playSelect();
              if (onReturnHome) onReturnHome();
              else window.location.href = '/';
            }}
          >
            [ RESPAWN AT BASE ]
          </PixelButton>
        </div>
      </div>
    </div>
  );
}
