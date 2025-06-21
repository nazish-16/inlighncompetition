import { HoverEffect } from "./ui/card-hover-effect";
import { FaRegBuilding, FaBullseye, FaEye, FaUsers, FaCertificate, FaGraduationCap } from "react-icons/fa";

export function WhoWeAre() {
  return (
    <div className="bg-[#0c1b26] py-20 rounded-lg">
      <div className="max-w-5xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">WHO WE ARE</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover the core values and mission that drive INLIGHN TECH to empower the next generation of tech professionals
          </p>
        </div>
        <HoverEffect items={whoWeAreItems} />
      </div>
    </div>
  );
}

export const whoWeAreItems = [
  {
    title: "About INLIGHN TECH",
    description:
      "We believe that the future of education lies in bridging the gap between academic learning and industry needs. Founded with a passion for providing meaningful and immersive learning experiences.",
    link: "/about",
    icon: FaRegBuilding,
    bgColor: "bg-[#36a2eb]/20",
    borderColor: "border-[#36a2eb]/30",
    iconColor: "text-[#36a2eb]"
  },
  {
    title: "Our Mission",
    description:
      "To empower students and young professionals by providing immersive, real-world learning experiences through tailored internship programs to succeed in the fast-evolving tech industry.",
    link: "/mission",
    icon: FaBullseye,
    bgColor: "bg-[#ffc107]/20",
    borderColor: "border-[#ffc107]/30",
    iconColor: "text-[#ffc107]"
  },
  {
    title: "Our Vision",
    description:
      "To become the leading platform that transforms education by connecting talented individuals with industry opportunities, creating a bridge between learning and real-world application.",
    link: "/vision",
    icon: FaEye,
    bgColor: "bg-[#36a2eb]/20",
    borderColor: "border-[#36a2eb]/30",
    iconColor: "text-[#36a2eb]"
  },
  {
    title: "Expert Mentorship",
    description:
      "Learn from seasoned professionals who guide you through every step of your journey. Our mentors bring years of industry experience to help you succeed.",
    link: "/mentorship",
    icon: FaUsers,
    bgColor: "bg-[#10e5a5]/20",
    borderColor: "border-[#10e5a5]/30",
    iconColor: "text-[#10e5a5]"
  },
  {
    title: "Certified Programs",
    description:
      "Complete our programs and get certified in your field to showcase your skills. Industry-recognized certifications that boost your career prospects.",
    link: "/certifications",
    icon: FaCertificate,
    bgColor: "bg-[#f44336]/20",
    borderColor: "border-[#f44336]/30",
    iconColor: "text-[#f44336]"
  },
  {
    title: "Flexible Learning",
    description:
      "Learn at your own pace with online programs designed to fit your schedule. Balance your studies while gaining valuable industry experience.",
    link: "/learning",
    icon: FaGraduationCap,
    bgColor: "bg-[#15a100]/20",
    borderColor: "border-[#15a100]/30",
    iconColor: "text-[#15a100]"
  }
];
