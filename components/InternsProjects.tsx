"use client";
import Image from "next/image";
import { Carousel, CarouselItem } from "./Carousel";

const projects = [
    {
        image: "/assets/cyber.jpg",
        title: "Cybersecurity Internship PYTHON PROJECTS (Inlighn Tech)",
        description: "1) SUBDOMAIN ENUMERATION TOOL:-",
    },
    {
        image: "/assets/data.jpg",
        title: "PDF PROTECTOR - PROJECT REPORT",
        description: "NAME: SUDHIR S, ITID: ITID0056",
    },
    {
        image: "/assets/business.jpg",
        title: "Amazon Sales Dashboard 2024",
        description: "Data-driven insights into sales performance.",
    },
];

const InternsProjects = () => {
    return (
        <section className="py-20 bg-transparent">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                     <span className="text-sm font-bold text-orange-500 bg-orange-100 rounded-full px-4 py-1">PROJECTS</span>
                    <h2 className="text-4xl font-bold text-gray-800 mt-4">OUR INTERNS&apos; PROJECTS</h2>
                </div>
                <div className="max-w-4xl mx-auto">
                    <Carousel>
                        {projects.map((project, index) => (
                            <CarouselItem key={index}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white p-8 rounded-2xl shadow-lg">
                                    <div className="text-left">
                                        <h3 className="text-2xl font-bold text-gray-800">{project.title}</h3>
                                        <p className="mt-4 text-gray-600">{project.description}</p>
                                    </div>
                                    <div className="flex justify-center">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            width={500}
                                            height={300}
                                            className="rounded-lg object-cover"
                                        />
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </Carousel>
                </div>
            </div>
        </section>
    );
};

export default InternsProjects; 