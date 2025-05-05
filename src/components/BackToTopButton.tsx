"use client";
import { useEffect, useState } from "react";

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      aria-label="Revenir en haut"
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 p-0.5 rounded-full shadow-lg bg-cnbd-red text-white transition-all duration-300 hover:bg-red-700 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-cnbd-red/60
        ${visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-8 pointer-events-none'}
      `}
      style={{ boxShadow: "0 8px 32px rgba(227,6,19,0.18)" }}
    >
      <span className="flex items-center justify-center w-14 h-14">
        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
      </span>
    </button>
  );
} 