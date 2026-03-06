"use client";

import { useState, useEffect } from "react";

const NAV_ITEMS = ["about", "experience", "projects", "contact"];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.innerWidth >= 640) setOpen(false);
    };
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  // Close on Escape key
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open]);

  return (
    <div className="relative sm:hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Toggle navigation menu"
        aria-expanded={open}
        className="p-2 rounded-lg text-text-secondary hover:text-neon-cyan hover:bg-neon-cyan/5 transition-all"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {open ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-48 glass rounded-2xl py-2 px-2 z-50 glow-cyan">
          {NAV_ITEMS.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setOpen(false)}
              className="block px-4 py-2.5 rounded-xl text-sm font-mono text-text-secondary hover:text-neon-cyan hover:bg-neon-cyan/5 transition-all"
            >
              .{item}()
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
