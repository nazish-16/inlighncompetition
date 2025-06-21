import Header from "@/components/Header";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { FaStar, FaArrowRight } from "react-icons/fa";
import AnimatedBackground from "@/components/AnimatedBackground";
import { BackToTop } from "@/components/BackToTop";
import { AnimatedWrapper } from "@/components/AnimatedWrapper";

interface Program {
    title: string;
    description: string;
    image: string;
    rating: number;
    link: string;
    icon: string;
}

const programs: Program[] = [
    {   
        title: "Business Analyst Internship Program",
        description: "Gain practical business analysis skills by working on...",
        image: "/assets/business.jpg",
        rating: 5,  
        link: "/programs/business-analyst",
        icon: "💼",
    },
    {
        title: "Front-End Development Internship",
        description: "Kickstart your journey into web development by...",
        image: "/assets/frontend.jpg",
        rating: 5,
        link: "/programs/frontend",
        icon: "💻",
    },
    {
        title: "Ethical Hacking with Kali Linux",
        description: "Gain practical skills in...",
        image: "/assets/ethical.jpg",
        rating: 5,
        link: "/programs/ethical-hacking",
        icon: "🛡️",
    },
    {
        title: "Full Stack Development Internship",
        description: "Master web development from the ground up...",
        image: "/assets/fullstack.jpg",
        rating: 5,
        link: "/programs/fullstack",
        icon: "🚀",
    },
    {
        title: "AI & Machine Learning Internship Program",
        description: "Build a strong foundation in...",
        image: "/assets/ai.jpg",
        rating: 5,
        link: "/programs/ai-ml",
        icon: "🤖",
    },
    {
        title: "Data Analyst Internship",
        description: "Learn how to collect, clean, analyze, and...",
        image: "/assets/data.jpg",
        rating: 5,
        link: "/programs/data-analyst",
        icon: "📊",
    },
    {
        title: "Offensive Cyber Security Internship",
        description: "Dive deep into the world of ethical...",
        image: "/assets/cyber.jpg",
        rating: 5,
        link: "/programs/cyber-security",
        icon: "⚔️",
    },
    {
        title: "Data Science Internship",
        description: "Master the fundamentals of data science by...",
        image: "/assets/data.jpg",
        rating: 5,
        link: "/programs/data-science",
        icon: "📈",
    },
    {
        title: "Web Development Internship",
        description: "Learn to build dynamic, responsive websites with...",
        image: "/assets/web.jpg",
        rating: 5,
        link: "/programs/web-dev",
        icon: "🌐",
    },
];

const StarRating = ({ rating }: { rating: number }) => {
    return (
        <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
                <FaStar
                    key={i}
                    className={i < rating ? "text-yellow-400" : "text-gray-300"}
                />
            ))}
        </div>
    );
};


const ProgramCard = ({ program }: { program: Program }) => {
    return (
        <div className="bg-white rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col group max-w-sm mx-auto border border-gray-200">
            <div className="overflow-hidden">
                <Image
                    src={program.image}
                    alt={program.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
            </div>
            <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{program.title}</h3>
                <div className="mb-4">
                    <StarRating rating={program.rating} />
                </div>
                <p className="text-gray-600 text-sm mb-6 flex-grow"><span className="font-semibold">{program.icon} {program.title}</span> {program.description}</p>
                <div className="mt-auto">
                    <Link href={program.link} className="w-full">
                        <span className="flex items-center cursor-none justify-center bg-orange-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors duration-300 group">
                            Learn More
                            <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

const ProgramsPage = () => {
    return (
        <div className="bg-gray-50 relative">
            <Header />
            <AnimatedBackground/>
            <main className="py-28 relative z-10">
                <div className="container mx-auto px-4">
                    <AnimatedWrapper>
                    <h1 className="text-4xl font-bold text-center text-gray-800 mb-16">Our Programs</h1>
                    </AnimatedWrapper>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-4">
                        {programs.map((program, index) => (
                            <AnimatedWrapper key={program.title} delay={index * 0.1}>
                            <ProgramCard program={program} />
                            </AnimatedWrapper>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
            <BackToTop/>
        </div>
    );
};

export default ProgramsPage;