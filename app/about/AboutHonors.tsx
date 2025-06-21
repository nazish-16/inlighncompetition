'use client';
import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

interface StatCardProps {
  end: number;
  suffix: string;
  label: string;
}

const StatCard: React.FC<StatCardProps> = ({ end, suffix, label }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className="bg-[#ffffff] p-8 rounded-2xl text-center transition-all duration-300 hover:-translate-y-1">
      <h3 className="text-5xl font-bold text-[#1f2839]">
        {inView ? <CountUp end={end} duration={3} separator="," /> : '0'}
        {suffix}
      </h3>
      <p className="mt-2 text-gray-800 uppercase tracking-widest text-sm">{label}</p>
    </div>
  );
};

const AboutHonors = () => {
  return (
    <section className="py-20 relative">
        <div 
            className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-[90%] bg-white/5"
            style={{
                maskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)',
                borderLeft: '1px dashed rgba(255,255,255,0.1)',
                borderRight: '1px dashed rgba(255,255,255,0.1)',
            }}
        ></div>
         <div className="container mx-auto relative">
            <div className="bg-[#13222e]/10 backdrop-blur-sm p-12 rounded-[40px] shadow-lg border border-white/10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <StatCard end={5000} suffix="+" label="Interns Enrolled" />
                    <StatCard end={9000} suffix="+" label="Projects Completed" />
                    <StatCard end={93} suffix="%" label="Satisfaction Rate" />
                    <StatCard end={30} suffix="+" label="Top Instructors" />
                </div>
            </div>
        </div>
    </section>
  );
};

export default AboutHonors;