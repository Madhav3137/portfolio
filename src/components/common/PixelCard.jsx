import React from 'react';

export function PixelCard({
  children,
  title = null,
  badge = null,
  variant = 'default',
  className = '',
  accentColor = '#00e5ff',
  headerRight = null,
  onClick = null
}) {
  const borderStyles = {
    default: 'border-2 border-[#1c2438] bg-[#0c0f19]',
    glow: 'border-2 border-[#00e5ff] bg-[#0c1120] shadow-[0_0_15px_rgba(0,229,255,0.15)]',
    cyber: 'border-2 border-[#ff007f] bg-[#110c18] shadow-[0_0_15px_rgba(255,0,127,0.15)]',
    success: 'border-2 border-[#39ff14] bg-[#0a140e] shadow-[0_0_15px_rgba(57,255,20,0.15)]',
    warning: 'border-2 border-[#ffb703] bg-[#141108] shadow-[0_0_15px_rgba(255,183,3,0.15)]'
  };

  return (
    <div
      onClick={onClick}
      className={`
        relative select-none text-slate-200 transition-all duration-200
        shadow-[4px_4px_0px_#000]
        ${borderStyles[variant] || borderStyles.default}
        ${onClick ? 'cursor-pointer hover:-translate-y-1' : ''}
        ${className}
      `}
    >
      {/* Stepped Pixel Notches on Corners */}
      <span className="absolute -top-1 -left-1 w-2 h-2 bg-[#090b14] border-t-2 border-l-2 border-[#00e5ff]" />
      <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#090b14] border-t-2 border-r-2 border-[#00e5ff]" />
      <span className="absolute -bottom-1 -left-1 w-2 h-2 bg-[#090b14] border-b-2 border-l-2 border-[#00e5ff]" />
      <span className="absolute -bottom-1 -right-1 w-2 h-2 bg-[#090b14] border-b-2 border-r-2 border-[#00e5ff]" />

      {/* Header Bar if provided */}
      {title && (
        <div className="flex items-center justify-between border-b-2 border-[#1c2438] px-4 py-2 bg-[#121626]">
          <div className="flex items-center gap-2">
            <span
              className="w-2.5 h-2.5 inline-block"
              style={{ backgroundColor: accentColor }}
            />
            <h3 className="font-pixel text-[11px] tracking-wide text-white uppercase">
              {title}
            </h3>
            {badge && (
              <span className="ml-2 font-pixel text-[8px] px-1.5 py-0.5 bg-[#1a233a] text-[#00e5ff] border border-[#00e5ff]/40">
                {badge}
              </span>
            )}
          </div>
          {headerRight ? (
            headerRight
          ) : (
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 bg-[#ff0055] inline-block" />
              <span className="w-2 h-2 bg-[#ffb703] inline-block" />
              <span className="w-2 h-2 bg-[#39ff14] inline-block" />
            </div>
          )}
        </div>
      )}

      {/* Card Content Area */}
      <div className="p-4 sm:p-5">
        {children}
      </div>
    </div>
  );
}
