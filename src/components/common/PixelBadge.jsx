import React from 'react';

export function PixelBadge({
  children,
  variant = 'default',
  size = 'sm',
  className = '',
  icon: Icon = null
}) {
  const sizeClasses = {
    xs: 'text-[7px] px-1.5 py-0.5',
    sm: 'text-[8.5px] px-2 py-0.5',
    md: 'text-[10px] px-2.5 py-1'
  };

  const variantClasses = {
    default: 'bg-[#151c2e] text-[#00e5ff] border border-[#00e5ff]/50',
    cyber: 'bg-[#1c0e1e] text-[#ff007f] border border-[#ff007f]/50',
    legendary: 'bg-[#1e1505] text-[#ffb703] border border-[#ffb703]/60 shadow-[0_0_8px_rgba(255,183,3,0.2)]',
    epic: 'bg-[#190c24] text-[#c084fc] border border-[#c084fc]/50',
    rare: 'bg-[#081829] text-[#38bdf8] border border-[#38bdf8]/50',
    success: 'bg-[#081a10] text-[#39ff14] border border-[#39ff14]/50',
    danger: 'bg-[#21090d] text-[#ff3366] border border-[#ff3366]/50',
    dark: 'bg-[#0a0d14] text-slate-400 border border-[#1e2538]'
  };

  return (
    <span
      className={`
        inline-flex items-center gap-1 font-pixel uppercase select-none
        shadow-[1px_1px_0px_#000]
        ${sizeClasses[size] || sizeClasses.sm}
        ${variantClasses[variant] || variantClasses.default}
        ${className}
      `}
    >
      {Icon && <Icon className="w-2.5 h-2.5" />}
      {children}
    </span>
  );
}
