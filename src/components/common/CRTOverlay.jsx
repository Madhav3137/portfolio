import React from 'react';

export function CRTOverlay({ enabled = true, theme = 'dark' }) {
  if (!enabled) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-30 select-none overflow-hidden"
    >
      {/* Subtle Horizontal Scanlines */}
      <div
        className={`w-full h-full ${theme === 'light' ? 'opacity-15' : 'opacity-35'}`}
        style={{
          backgroundImage:
            theme === 'light'
              ? 'linear-gradient(rgba(255, 255, 255, 0) 50%, rgba(0, 0, 0, 0.2) 50%)'
              : 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.45) 50%)',
          backgroundSize: '100% 3px'
        }}
      />

      {/* Subtle CRT Vignette / Screen Curvature */}
      <div
        className={`absolute inset-0 ${theme === 'light' ? 'opacity-20' : 'opacity-40'}`}
        style={{
          boxShadow:
            theme === 'light'
              ? 'inset 0 0 80px rgba(0,0,0,0.3)'
              : 'inset 0 0 100px rgba(0,0,0,0.8), inset 0 0 40px rgba(0,229,255,0.05)'
        }}
      />
    </div>
  );
}
