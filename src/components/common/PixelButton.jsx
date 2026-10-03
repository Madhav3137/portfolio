import React from 'react';
import { soundManager } from '../../utils/soundEffects';

export function PixelButton({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  type = 'button',
  icon: Icon = null,
  href = null,
  target = '_self',
  rel = 'noopener noreferrer'
}) {
  const handleMouseEnter = () => {
    if (!disabled) {
      soundManager.playBlip();
    }
  };

  const handleClick = (e) => {
    if (disabled) {
      e.preventDefault();
      return;
    }
    soundManager.playSelect();
    if (onClick) onClick(e);
  };

  // Base styling for 8-bit stepped bevel
  const baseClasses = `
    inline-flex items-center justify-center gap-2 font-pixel tracking-wider select-none
    transition-transform active:translate-y-1 active:translate-x-0.5
    disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
    cursor-pointer
  `;

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-[9px]',
    md: 'px-4 py-2.5 text-[11px]',
    lg: 'px-6 py-3.5 text-[13px]'
  };

  const variantClasses = {
    primary: `
      bg-[#00e5ff] text-[#05070e] font-bold
      border-2 border-black
      shadow-[3px_3px_0px_#000,inset_-2px_-2px_0px_#0099b8,inset_2px_2px_0px_#b3f7ff]
      hover:bg-[#38bdf8]
    `,
    accent: `
      bg-[#ff007f] text-white font-bold
      border-2 border-black
      shadow-[3px_3px_0px_#000,inset_-2px_-2px_0px_#99004c,inset_2px_2px_0px_#ff80bf]
      hover:bg-[#ff1a8c]
    `,
    success: `
      bg-[#39ff14] text-[#05070e] font-bold
      border-2 border-black
      shadow-[3px_3px_0px_#000,inset_-2px_-2px_0px_#22990c,inset_2px_2px_0px_#99ff80]
      hover:bg-[#4dff2b]
    `,
    warning: `
      bg-[#ffb703] text-[#05070e] font-bold
      border-2 border-black
      shadow-[3px_3px_0px_#000,inset_-2px_-2px_0px_#b38000,inset_2px_2px_0px_#ffe080]
      hover:bg-[#ffc124]
    `,
    secondary: `
      bg-[#151a2d] text-[#00e5ff] font-medium
      border-2 border-[#00e5ff]
      shadow-[3px_3px_0px_#000,inset_-2px_-2px_0px_#080a14,inset_2px_2px_0px_#2a355c]
      hover:bg-[#1e2540] hover:text-white
    `,
    dark: `
      bg-[#10131d] text-[#94a3b8] font-medium
      border-2 border-[#252f4a]
      shadow-[3px_3px_0px_#000]
      hover:border-[#00e5ff] hover:text-white
    `
  };

  const combinedClasses = `${baseClasses} ${sizeClasses[size] || sizeClasses.md} ${variantClasses[variant] || variantClasses.primary} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={combinedClasses}
        onMouseEnter={handleMouseEnter}
        onClick={handleClick}
      >
        {Icon && <Icon className="w-3.5 h-3.5" />}
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      className={combinedClasses}
      onMouseEnter={handleMouseEnter}
      onClick={handleClick}
    >
      {Icon && <Icon className="w-3.5 h-3.5" />}
      {children}
    </button>
  );
}
