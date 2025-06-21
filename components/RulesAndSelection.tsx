"use client";
import { FaCalendarAlt, FaMedal, FaLightbulb } from 'react-icons/fa';

const rules = [
    {
        icon: <FaCalendarAlt className="w-12 h-12 text-red-500" />,
        text: 'Each intern can apply only ONCE in their final month.',
    },
    {
        icon: <FaMedal className="w-12 h-12 text-pink-500" />,
        text: 'Winners will be announced on the last day of every month! 🎉',
    },
    {
        icon: <FaLightbulb className="w-12 h-12 text-yellow-500" />,
        text: 'Top 10 interns will be celebrated with amazing rewards & recognition!',
    },
];

const RulesAndSelection = () => {
    return (
        <section className="py-20 bg-transparent">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <span className="text-sm font-bold text-red-500 bg-red-100 rounded-full px-4 py-1">PROCESS</span>
                    <h2 className="text-4xl font-bold text-gray-800 mt-4">Rules & Selection Process</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    {rules.map((rule, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center">
                            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-red-100 to-yellow-100 flex items-center justify-center mb-6 ring-4 ring-white shadow-md">
                                {rule.icon}
                            </div>
                            <p className="text-gray-600 font-semibold">{rule.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RulesAndSelection; 