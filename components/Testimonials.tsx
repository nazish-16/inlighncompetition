import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "INLIGHN TECH's Full Stack Development internship completely transformed my career. The hands-on projects and expert mentorship helped me land my dream job at a top tech company.",
      name: "Vignesh",
      designation: "Full Stack Developer at TechCorp",
      src: "/assets/testi1.jpeg",
    },
    {
      quote:
        "The Data Science internship at INLIGHN TECH was exactly what I needed. Real-world projects, industry-standard tools, and incredible networking opportunities. Highly recommended!",
      name: "Hariharan Rajendaran",
      designation: "Data Scientist at AnalyticsPro",
      src: "/assets/testi2.jpeg",
    },
    {
      quote:
        "INLIGHN TECH's Cyber Security program exceeded all expectations. The practical training and industry connections helped me secure a position as a Security Analyst within weeks of completion.",
      name: "Joe Berg",
      designation: "Cyber Security Analyst at SecureNet",
      src: "/assets/testi3.jpg",
    },
    {
      quote:
        "The flexible learning approach and expert guidance at INLIGHN TECH made it possible for me to balance my studies while gaining valuable industry experience. Truly life-changing!",
      name: "Mirunalini R",
      designation: "Software Engineer at InnovateTech",
      src: "/assets/testi4.jpeg",
    },
    {
      quote:
        "INLIGHN TECH's internship program bridged the gap between academic learning and industry requirements perfectly. The certification and portfolio I built here opened doors I never thought possible.",
      name: "Suresh Kumar",
      designation: "Data Analyst at DataFlow Solutions",
      src: "/assets/testi5.jpg",
    },
  ];
  
  return (
    <div className="bg-[#13222e] text-white py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Hear from our successful interns who transformed their careers through INLIGHN TECH&apos;s immersive programs
          </p>
        </div>
        <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
      </div>
    </div>
  );
}
