"use client";
import Image from 'next/image';
import {
    FaCertificate,
    FaGift,
    FaProjectDiagram,
    FaQrcode,
    FaWhatsapp,
    FaUsers,
    FaUserCheck,
    FaAward
} from 'react-icons/fa';

const perks = [
    {
        icon: <FaAward className="w-8 h-8 text-yellow-500" />,
        text: 'Top 10 Intern Reward: ₹15,000 stipend + Welcome kit',
    },
    {
        icon: <FaGift className="w-8 h-8 text-pink-500" />,
        text: 'Offer Letter: Within 30 minutes',
    },
    {
        icon: <FaProjectDiagram className="w-8 h-8 text-blue-500" />,
        text: 'Industry-Based Projects',
    },
    {
        icon: <FaQrcode className="w-8 h-8 text-gray-800" />,
        text: 'Experience Letter: With QR Code',
    },
    {
        icon: <FaWhatsapp className="w-8 h-8 text-green-500" />,
        text: 'Exclusive Job Updates: Shared on WhatsApp',
    },
    {
        icon: <FaUserCheck className="w-8 h-8 text-teal-500" />,
        text: 'Certificate Verification',
    },
    {
        icon: <FaUsers className="w-8 h-8 text-purple-500" />,
        text: 'Community Forum: Peer & mentor support',
    },
    {
        icon: <FaCertificate className="w-8 h-8 text-orange-500" />,
        text: 'Virtual Internship: Work from home with flexible schedule',
    },
];

const PerksAndBenefits = () => {
    return (
        <section className="py-20 bg-transparent">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <span className="text-sm font-bold text-pink-500 bg-pink-100 rounded-full px-4 py-1">BENEFITS</span>
                    <h2 className="text-4xl font-bold text-gray-800 mt-4">Perks & Benefits</h2>
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-2 items-center justify-center gap-10 xl:gap-0">
                    <div className="flex justify-center">
                         <Image src="/assets/iso.png" alt="Certificate" width={500} height={700} className="rounded-lg shadow-2xl" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {perks.map((perk, index) => (
                            <div key={index} className="bg-gradient-to-br from-yellow-50 to-pink-100 p-6 rounded-2xl shadow-lg flex items-center space-x-4 hover:shadow-xl transition-shadow duration-300">
                                <div className="flex-shrink-0 bg-white rounded-full p-3 shadow-md">
                                    {perk.icon}
                                </div>
                                <p className="text-gray-700 font-semibold">{perk.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PerksAndBenefits; 