"use client";

import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrolled = window.pageYOffset;
      const winHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolledPercent = (scrolled / winHeight) * 100;
      
      setScrollProgress(Math.min(scrolledPercent, 100));
      setIsVisible(scrolled > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const radius = 15;
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 cursor-none bg-[#fe8378] hover:bg-[#fe8378] text-white rounded-full p-3 shadow-lg transition-all duration-300"
          aria-label="Back to top"
        >
          <div className="relative">
            <svg
              className="absolute inset-0 w-6 h-6 transform -rotate-90"
              viewBox="0 0 24 24"
            >
              <circle
                cx="12"
                cy="12"
                r={radius}
                stroke="rgba(255, 255, 255, 0.3)"
                strokeWidth="2"
                fill="none"
              />
              <circle
                cx="12"
                cy="12"
                r={radius}
                stroke="white"
                strokeWidth="2"
                fill="none"
                strokeDasharray={strokeDasharray}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                className="transition-all duration-300"
              />
            </svg>
            
            <div className="relative z-10 flex items-center justify-center w-6 h-6">
              <FaArrowUp className="text-white text-sm group-hover:animate-pulse" />
            </div>
          </div>
        </button>
      )}
    </>
  );
} 