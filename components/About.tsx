"use client"

/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import Image from 'next/image';
import { FaLaptopCode, FaUserTie, FaCertificate, FaRegBuilding, FaBullseye, FaEye, FaArrowRight, FaBook } from 'react-icons/fa';
import AnimatedBackground from './AnimatedBackground';
import Honors from './Honors';
import { WhoWeAre } from './WhoWeAre';

const About = () => {
  return (
    <section className="py-20 bg-transparent relative">
      <AnimatedBackground />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white">We Provide Best Internship For You</h2>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="relative isolate">
              <div className="absolute -top-12 -left-12 w-80 h-80 bg-[#f5a623]/30 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -bottom-12 -right-12 w-80 h-80 bg-[#36a2eb]/30 rounded-full blur-3xl -z-10"></div>
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <Image src="/assets/more1.jpg" alt="Internship discussion" width={800} height={600} style={{objectFit: "cover"}} />
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <p className="text-gray-300 leading-relaxed mb-8">
              At INLIGHN TECH, we believe that the future of education lies in bridging the gap between academic
              learning and industry needs. Founded with a passion for providing meaningful and immersive learning
              experiences, we offer internship programs that equip students and young professionals with practical skills in
              Full Stack Development, Data Science, and Project Management.
            </p>
            <button className="bg-[#f5a623] text-black font-bold py-3 px-8 rounded-lg text-lg hover:bg-[#e49b20] transition-colors duration-300">
              Know More
            </button>
          </div>
        </div>
      </div>
      <section className="container mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="md:w-1/2">
            <div className="relative isolate">
              <div className="absolute -top-12 -left-12 w-80 h-80 bg-[#10e5a5]/30 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -bottom-12 -right-12 w-80 h-80 bg-[#f44336]/30 rounded-full blur-3xl -z-10"></div>
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <Image src="/assets/more2.jpg" alt="Team working on project" width={800} height={600} style={{objectFit: "cover"}} />
              </div>
            </div>
          </div>
          <div className="md:w-1/2 space-y-8">
            <div className="bg-[#0f2d37] p-6 rounded-2xl flex items-start gap-6">
              <div className="bg-[#f5a623] p-3 rounded-full">
                <FaLaptopCode className="text-black text-2xl" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#f5a623] mb-2">Real-World Projects</h3>
                <p className="text-gray-300">Gain hands-on experience with real industry projects and build a portfolio that stands out.</p>
              </div>
            </div>
            <div className="bg-[#0f2d37] p-6 rounded-2xl flex items-start gap-6">
              <div className="bg-[#10e5a5] p-3 rounded-full">
                <FaUserTie className="text-black text-2xl" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#10e5a5] mb-2">Expert Mentorship</h3>
                <p className="text-gray-300">Learn from seasoned professionals who guide you through every step of your journey.</p>
              </div>
            </div>
            <div className="bg-[#0f2d37] p-6 rounded-2xl flex items-start gap-6">
              <div className="bg-[#f44336] p-3 rounded-full">
                <FaCertificate className="text-black text-2xl" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#f44336] mb-2">Certified Programs</h3>
                <p className="text-gray-300">Complete the programs and get certified in your field to showcase your skills.</p>
              </div>
            </div>
            <div className="bg-[#0f2d37] p-6 rounded-2xl flex items-start gap-6">
              <div className="bg-[#15a100] p-3 rounded-full">
                <FaBook className="text-black text-2xl" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#15a100] mb-2">Flexible Learning</h3>
                <p className="text-gray-300">Do at your own pace with online programs designed to fit your schedule.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-24 text-center">
        <div>
          <WhoWeAre/>
        </div>
      </section>
      <Honors />
    </section>
  );
};

export default About;