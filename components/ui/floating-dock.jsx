'use client';

import React from "react";

export function FloatingDock({ links }) {
  return (
    <div className="fixed bottom-4 right-4 flex flex-col gap-3 z-50">
      {links.map((link, i) => (
        <a
          key={i}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black/80 text-white px-4 py-2 rounded-xl shadow hover:bg-white hover:text-black transition-all"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}
