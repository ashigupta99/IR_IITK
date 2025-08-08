'use client';

import React from "react";

export function HoverBorderGradient({ href, text }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative inline-block px-6 py-3 text-white font-medium group transition duration-300"
    >
      {/* Gradient border background */}
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-all duration-300 blur-sm rounded-lg" />
      {/* Actual button text */}
      <span className="relative z-10">{text}</span>
    </a>
  );
}
