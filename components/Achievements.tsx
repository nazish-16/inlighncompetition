import Image from 'next/image';
import React from 'react';

const Achievements = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 text-center">
        <div className="inline-block bg-orange-100 text-orange-800 text-sm font-semibold px-4 py-2 rounded-full mb-4">
          Our Recognitions
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-16">
          Our Achievements
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col items-center justify-center">
            <div className="relative group w-full max-w-sm bg-white p-4 border border-gray-200 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <Image 
                src="/assets/recog1.jpg" 
                alt="Incorporation Certificate" 
                width={400} 
                height={565} 
                className="w-full h-auto rounded-md"
              />
              <div className="absolute inset-0 bg-black/20 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                <div className="absolute bottom-4 left-4 right-4 bg-white bg-opacity-90 p-4 rounded-lg text-left transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                   <h3 className="text-lg font-bold text-gray-900">Incorporation Certificate</h3>
                   <p className="text-sm text-gray-600">Ministry of Corporate Affairs Approved</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="relative group w-full max-w-sm bg-white p-4 border border-gray-200 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <Image 
                src="/assets/recog2.png" 
                alt="Startup India Recognition Certificate" 
                width={400} 
                height={565} 
                className="w-full h-auto rounded-md"
              />
               <div className="absolute inset-0 bg-black/20 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                <div className="absolute bottom-4 left-4 right-4 bg-white bg-opacity-90 p-4 rounded-lg text-left transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                   <h3 className="text-lg font-bold text-gray-900">Startup India Recognitions</h3>
                   <p className="text-sm text-gray-600">Department for Promotion of Industry and Internal Trade Approved</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements; 