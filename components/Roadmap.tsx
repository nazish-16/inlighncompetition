"use client";

import React from 'react';
import Image from 'next/image';

const Roadmap = () => {
    return (
        <section className="py-28 md:py-36 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <Image src={`/assets/roadmap.png`} alt='roadmap' width={1000000000} height={10000000000} className='w-full h-full'/>
                        </div>
                    <div className="relative z-10 text-center lg:text-left">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
                            We Provide <br/>
                            Best <span className="text-gray-800 bg-yellow-300 px-2 py-1 rounded-md">Industry</span> Services For You.
                        </h2>
                        <p className="mt-6 text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
                            At INLIGHN TECH, we believe that the future of education lies in bridging the gap between academic learning and industry needs. Founded with a passion for providing meaningful and immersive learning experiences, we offer internship programs that equip students and young professionals with practical skills in Cyber Security, Full Stack Development, Data Science, and Project Management.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Roadmap; 