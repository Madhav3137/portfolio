import React from 'react';

export function CRTOverlay({ enabled = true }) {
  if (!enabled) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-40 select-none overflow-hidden"
    >
      {/* Subtle Horizontal Scanlines */}
      <div
        className="w-full h-full opacity-35"
        style={{
          backgroundImage:
            'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.45) 50%)',
          backgroundSize: '100% 3px'
        }}
      />

      {/* Subtle CRT Vignette / Screen Curvature */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          boxShadow: 'inset 0 0 100px rgba(0,0,0,0.8), inset 0 0 40px rgba(0,229,255,0.05)'
        }}
      />
    </div>
  );
}
