"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const JUMP_TEXT = "INLIGHN TECH";

const Homepage = () => {
  const [jumping, setJumping] = useState(Array(JUMP_TEXT.length).fill(false));

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setJumping((prev) => {
        const newJ = Array(JUMP_TEXT.length).fill(false);
        newJ[index] = true;
        return newJ;
      });

      setTimeout(() => {
        setJumping((prev) => {
          const newJ = [...prev];
          newJ[index] = false;
          return newJ;
        });
      }, 600); // duration of the individual jump

      index = (index + 1) % JUMP_TEXT.length;
    }, 150); // staggered wave delay

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>{`
        .jump {
          display: inline-block;
          transition: transform 0.6s cubic-bezier(.68,-0.55,.27,1.55);
        }
        .jumping {
          transform: translateY(-35%) scale(1.15);
          text-shadow: 0 10px 20px rgba(245, 166, 35, 0.4);
        }
        .jump:hover {
          animation: jump-anim 0.8s cubic-bezier(.68,-0.55,.27,1.55);
        }
        @keyframes jump-anim {
          0% { transform: translateY(0) scale(1); }
          20% { transform: translateY(-35%) scale(1.15); }
          40% { transform: translateY(-25%) scale(1.1); }
          60% { transform: translateY(0) scale(1); }
          100% { transform: translateY(0) scale(1); }
        }
      `}</style>

      <div className="relative h-screen w-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 min-w-full min-h-full w-auto h-auto object-cover z-0"
          src="/assets/homepagevideo.mp4"
        >
          Your browser does not support the video tag.
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#0d1f2e] via-[#0d1f2e]/80 to-transparent z-10"></div>
        <div className="relative z-20 flex flex-col justify-center h-full text-white px-6 sm:px-12 md:px-24">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Transform Your Career with<br />
              <span className="text-[#f5a623]">
                {JUMP_TEXT.split("").map((char, i) => (
                  <span
                    key={i}
                    className={`jump${jumping[i] ? " jumping" : ""}`}
                  >
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </span>
            </h1>
            <p className="mt-6 text-md md:text-lg max-w-xl">
              Gain real-world experience with our immersive internship
              programs in Cyber Security, Full Stack Development, Data
              Science, Data Analyst and in various tech domains. Learn
              today, lead tomorrow.
            </p>
            <button className="mt-8 flex items-center bg-[#10e5a5] text-white font-bold py-3 px-6 rounded-lg text-lg hover:bg-[#0ddaa0] transition-colors duration-300">
              Explore Internships
            </button>
          </div>
        </div>
      </div>

      <section className="py-16 bg-[#13222e] relative">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8 md:gap-x-16 relative z-10">
          <div></div>
          <div className="bg-white p-5 rounded-3xl shadow-lg transition-transform transform hover:translate-y-[-2px]">
            <Image src="/assets/moca.webp" alt="Ministry of Corporate Affairs" width={160} height={160} style={{ objectFit: "contain" }} />
          </div>
          <div className="bg-white p-5 rounded-3xl shadow-lg transition-transform transform hover:translate-y-[-2px]">
            <Image src="/assets/iso.png" alt="ISO Certified" width={160} height={160} style={{ objectFit: "contain" }} />
          </div>
          <div className="transition-transform transform hover:translate-y-[-2px]">
            <Image src="/assets/startupindia.png" alt="Startup India" width={160} height={160} style={{ objectFit: "contain" }} />
          </div>
          <div></div>
        </div>
      </section>
    </>
  );
};

export default Homepage;
