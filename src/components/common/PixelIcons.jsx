import React from 'react';

// Custom Handcrafted 8-Bit Pixel Art Icons for Brands and Tools

export function GithubPixelIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      viewBox="0 0 16 16"
      className={className}
      shapeRendering="crispEdges"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="5" y="1" width="6" height="2" />
      <rect x="3" y="3" width="10" height="2" />
      <rect x="2" y="5" width="12" height="4" />
      <rect x="1" y="7" width="14" height="2" />
      <rect x="2" y="9" width="12" height="2" />
      <rect x="3" y="11" width="10" height="2" />
      <rect x="4" y="13" width="8" height="2" />
      {/* Octocat ears */}
      <rect x="3" y="1" width="2" height="2" />
      <rect x="11" y="1" width="2" height="2" />
      {/* Cutouts for tentacles & eyes */}
      <rect x="4" y="6" width="2" height="2" fill="#080a12" />
      <rect x="10" y="6" width="2" height="2" fill="#080a12" />
      <rect x="7" y="11" width="2" height="4" fill="#080a12" />
    </svg>
  );
}

export function LinkedinPixelIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      viewBox="0 0 16 16"
      className={className}
      shapeRendering="crispEdges"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer pixel box */}
      <rect x="1" y="1" width="14" height="14" rx="2" />
      {/* 'in' text cutout */}
      {/* Dot of 'i' */}
      <rect x="3.5" y="3.5" width="2" height="2" fill="#080a12" />
      {/* Stem of 'i' */}
      <rect x="3.5" y="6.5" width="2" height="6" fill="#080a12" />
      {/* 'n' letter */}
      <rect x="7" y="6.5" width="2" height="6" fill="#080a12" />
      <rect x="9" y="6.5" width="3" height="2" fill="#080a12" />
      <rect x="11" y="8" width="2" height="4.5" fill="#080a12" />
    </svg>
  );
}

export function InstagramPixelIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      viewBox="0 0 16 16"
      className={className}
      shapeRendering="crispEdges"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="2" y="2" width="12" height="12" rx="3" />
      {/* Inner camera cutout */}
      <rect x="4" y="4" width="8" height="8" fill="#080a12" />
      {/* Lens */}
      <rect x="6" y="6" width="4" height="4" fill="currentColor" />
      <rect x="7" y="7" width="2" height="2" fill="#080a12" />
      {/* Flash point */}
      <rect x="10" y="4" width="2" height="2" fill="currentColor" />
    </svg>
  );
}
