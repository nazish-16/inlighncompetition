import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
      <svg
        className="absolute w-full h-full"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 1920 1080"
      >
        <path
          id="motion-path"
          d="M -100 500 C 400 1000, 800 100, 1100 450 S 1600 1000, 2020 600"
          stroke="#00f5c3"
          strokeWidth="1.5"
          fill="none"
          opacity="0.2"
        />
        
        <path
          d="M 0 200 C 300 400, 600 100, 900 300 S 1200 500, 1500 200"
          stroke="#f5a623"
          strokeWidth="1"
          fill="none"
          opacity="0.15"
        />
        
        <path
          d="M 200 800 C 500 600, 800 900, 1100 700 S 1400 500, 1700 800"
          stroke="#10e5a5"
          strokeWidth="1"
          fill="none"
          opacity="0.15"
        />
        
        <path
          d="M 400 100 C 700 300, 1000 50, 1300 250 S 1600 400, 1900 150"
          stroke="#36a2eb"
          strokeWidth="1"
          fill="none"
          opacity="0.15"
        />
        
        <path
          d="M 100 900 C 400 700, 700 950, 1000 750 S 1300 550, 1600 900"
          stroke="#f44336"
          strokeWidth="1"
          fill="none"
          opacity="0.15"
        />

        <circle className="dot-1" r="1" fill="#f5a623" />
        <circle className="dot-2" r="0.8" fill="#10e5a5" />
        <circle className="dot-3" r="1.2" fill="#36a2eb" />
        <circle className="dot-4" r="0.6" fill="#f44336" />
        <circle className="dot-5" r="0.9" fill="#ffc107" />

        <circle cx="200" cy="800" r="80" fill="#00f5c3" opacity="0.02" />
        <circle cx="900" cy="250" r="100" fill="#f5a623" opacity="0.02" />
        <circle cx="1500" cy="850" r="60" fill="#10e5a5" opacity="0.02" />
        <circle cx="400" cy="150" r="70" fill="#36a2eb" opacity="0.02" />
        <circle cx="1200" cy="600" r="90" fill="#f44336" opacity="0.02" />
        <circle cx="600" cy="950" r="50" fill="#ffc107" opacity="0.02" />
        <circle cx="1700" cy="300" r="75" fill="#15a100" opacity="0.02" />
      </svg>
    </div>
  );
};

export default AnimatedBackground; 