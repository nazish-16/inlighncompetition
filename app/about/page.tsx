import Header from "@/components/Header";
import AboutHonors from "./AboutHonors";
import AnimatedBackground from "@/components/AnimatedBackground";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import Achievements from "@/components/Achievements";
import Roadmap from "@/components/Roadmap";
import Image from "next/image";
import { FaCheck, FaBookOpen, FaChalkboardTeacher, FaKey } from "react-icons/fa";
import { AnimatedWrapper } from "@/components/AnimatedWrapper";

const AboutPage = () => {
  return (
    <div className="relative bg-gray-50">
      <Header />
      <AnimatedBackground/>
      <main className="relative z-10">
        <AnimatedWrapper>
        <Roadmap />
        </AnimatedWrapper>
        <AnimatedWrapper>
        <section className="text-gray-800 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center justify-center">
              <div className="space-y-12">
                <h2 className="text-3xl md:text-5xl font-extrabold leading-tight text-center flex gap-2 flex-col">
                  Save Time and Effort with
                  <span className="text-indigo-600 text-4xl md:text-5xl"> INLIGHN TECH</span>
                </h2>
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-cyan-400 text-white flex items-center justify-center shadow-md">
                        <FaCheck className="w-5 h-5" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-2xl font-bold">Our Vision</h3>
                      <p className="mt-2 text-gray-600">
                        To be a leading EdTech platform that bridges the gap between academic knowledge and industry demands, shaping the next generation of tech innovators and leaders through hands-on, practical learning.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-purple-500 text-white flex items-center justify-center shadow-md">
                        <FaCheck className="w-5 h-5" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-2xl font-bold">Our Mission</h3>
                      <p className="mt-2 text-gray-600">
                        To empower students and young professionals by providing immersive, real-world learning experiences through tailored internship programs. We aim to equip our participants with the practical skills and confidence they need to succeed in the fast-evolving tech industry.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center p-8 bg-gray-100 rounded-2xl shadow-inner">
                <Image src="/assets/aboutimage.jpg" alt="Our Vision and Mission at INLIGHN TECH" width={500} height={450} className="w-full h-auto" />
              </div>
            </div>
          </div>
        </section>
        </AnimatedWrapper>
        <AnimatedWrapper>
        <AboutHonors />
        </AnimatedWrapper>
        <AnimatedWrapper>
        <Achievements />
        </AnimatedWrapper>

        <AnimatedWrapper>
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-block bg-cyan-100 text-cyan-800 text-sm font-semibold px-4 py-2 rounded-full mb-4">
              WHY CHOOSE INLIGHN TECH
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
              The Best Beneficial Side of
            </h2>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-20">
              INLIGHNTECH
            </h2>

            <div className="relative">
              <div className="absolute top-1/4 left-0 w-full h-px -translate-y-1/2 -z-0 hidden md:block">
                <svg width="100%" height="100" viewBox="0 0 1000 100" preserveAspectRatio="none">
                  <path d="M 100 50 C 300 10, 400 90, 600 50 S 800 10, 900 50" stroke="#c7d2fe" strokeWidth="2" fill="none" strokeDasharray="5, 5"/>
                </svg>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
                <div className="flex flex-col items-center z-10">
                  <div className="relative w-32 h-32 flex items-center justify-center mb-4">
                    <div className="absolute inset-0 bg-orange-300 rounded-full opacity-30" style={{ boxShadow: '0 0 2rem 0.5rem #fed7aa' }}></div>
                    <div className="relative w-24 h-24 bg-orange-200 rounded-full flex items-center justify-center">
                      <FaBookOpen className="w-10 h-10 text-orange-700" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mt-6 mb-2">High Quality Resources</h3>
                  <p className="text-gray-600 text-sm leading-relaxed px-4">
                    Our expertly designed resources provide hands-on learning and real-world skills. With up-to-date content and personalized mentorship, you&apos;ll gain the knowledge needed to succeed in today&apos;s tech industry.
                  </p>
                </div>

                <div className="flex flex-col items-center z-10">
                  <div className="relative w-32 h-32 flex items-center justify-center mb-4">
                    <div className="absolute inset-0 bg-purple-300 rounded-full opacity-30" style={{ boxShadow: '0 0 2rem 0.5rem #e9d5ff' }}></div>
                    <div className="relative w-24 h-24 bg-purple-200 rounded-full flex items-center justify-center">
                      <FaChalkboardTeacher className="w-10 h-10 text-purple-700" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mt-6 mb-2">Expert Instructors</h3>
                  <p className="text-gray-600 text-sm leading-relaxed px-4">
                    Learn from seasoned industry professionals who bring real-world experience and insights to every lesson, guiding you with practical knowledge to help you succeed.
                  </p>
                </div>

                <div className="flex flex-col items-center z-10">
                  <div className="relative w-32 h-32 flex items-center justify-center mb-4">
                    <div className="absolute inset-0 bg-cyan-300 rounded-full opacity-30" style={{ boxShadow: '0 0 2rem 0.5rem #a5f3fc' }}></div>
                    <div className="relative w-24 h-24 bg-cyan-200 rounded-full flex items-center justify-center">
                      <FaKey className="w-10 h-10 text-cyan-700" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mt-6 mb-2">Internship Portal Access</h3>
                  <p className="text-gray-600 text-sm leading-relaxed px-4">
                    Get separate portal access to all course materials and updates, allowing you to learn at your own pace and stay up-to-date with industry trends long after you&apos;ve completed the program.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        </AnimatedWrapper>
      </main>
      <BackToTop />
      <Footer />
    </div>
  );
};

export default AboutPage;