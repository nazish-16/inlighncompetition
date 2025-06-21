"use client";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const contactDetails = [
    {
        icon: <FaEnvelope className="w-10 h-10 text-orange-500" />,
        title: 'Email Address',
        info: 'info@inlighntech.com',
    },
    {
        icon: <FaPhone className="w-10 h-10 text-teal-500" />,
        title: 'Call Us',
        info: '+91-8368842663',
    },
    {
        icon: <FaMapMarkerAlt className="w-10 h-10 text-red-500" />,
        title: 'Visit Our Office',
        info: 'Corporate Office: VO-301, WeWork Prestige Central, Ground Floor, 36, Infantry Rd, Tasker Town, Shivaji Nagar, Bengaluru, Karnataka 560001',
    },
    {
        icon: <FaMapMarkerAlt className="w-10 h-10 text-purple-500" />,
        title: 'Registered Office',
        info: 'Opposite swasti hospital anupam nagar badaun road bareilly uttar pradesh 243001',
    },
];

const ContactInfo = () => {
    return (
        <section className="py-20 bg-transparent">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {contactDetails.map((detail, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                            <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-6">
                                {detail.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">{detail.title}</h3>
                            <p className="text-gray-600">{detail.info}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ContactInfo; 