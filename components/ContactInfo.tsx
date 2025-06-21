"use client";
import { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const contactDetails = [
    {
        icon: <FaEnvelope className="w-10 h-10 text-orange-500" />,
        title: 'Email Address',
        info: 'info@inlighntech.com',
        type: 'email',
    },
    {
        icon: <FaPhone className="w-10 h-10 text-teal-500" />,
        title: 'Call Us',
        info: '+91-8368842663',
        type: 'phone',
    },
    {
        icon: <FaMapMarkerAlt className="w-10 h-10 text-red-500" />,
        title: 'Visit Our Office',
        info: 'Corporate Office: VO-301, WeWork Prestige Central, Ground Floor, 36, Infantry Rd, Tasker Town, Shivaji Nagar, Bengaluru, Karnataka 560001',
        type: 'location',
        embedUrl: 'https://maps.google.com/maps?q=WeWork%20Prestige%20Central%2C%20Bengaluru&t=&z=15&ie=UTF8&iwloc=&output=embed'
    },
    {
        icon: <FaMapMarkerAlt className="w-10 h-10 text-purple-500" />,
        title: 'Registered Office',
        info: 'Opposite swasti hospital anupam nagar badaun road bareilly uttar pradesh 243001',
        type: 'location',
        embedUrl: 'https://maps.google.com/maps?q=swasti%20hospital%20anupam%20nagar%20badaun%20road%20bareilly%20uttar%20pradesh&t=&z=15&ie=UTF8&iwloc=&output=embed'
    },
];

const ContactInfo = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section className="py-20 bg-transparent">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {contactDetails.map((detail, index) => (
                        <div 
                            key={index} 
                            className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center h-80 overflow-hidden"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <div className={`absolute inset-0 flex flex-col justify-center items-center p-8 transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-0' : 'opacity-100'}`}>
                                <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-6">
                                    {detail.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-2">{detail.title}</h3>
                                <p className="text-gray-600">{detail.info}</p>
                            </div>

                            {detail.type === 'location' && detail.embedUrl && (
                                <div className={`absolute inset-0 transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`} style={{ pointerEvents: hoveredIndex === index ? 'auto' : 'none' }}>
                                    <iframe
                                        src={detail.embedUrl}
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                </div>
                            )}

                            {detail.type === 'email' && (
                                <div className={`absolute inset-0 flex justify-center items-center transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`} style={{ pointerEvents: hoveredIndex === index ? 'auto' : 'none' }}>
                                    <a href={`mailto:${detail.info}`} className="cursor-none bg-orange-500 text-white px-6 py-3 rounded-lg font-bold text-lg hover:bg-orange-600 transition-colors">
                                        Send Email
                                    </a>
                                </div>
                            )}

                            {detail.type === 'phone' && (
                                <div className={`absolute inset-0 flex justify-center items-center transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`} style={{ pointerEvents: hoveredIndex === index ? 'auto' : 'none' }}>
                                    <a href={`tel:${detail.info}`} className="cursor-none bg-teal-500 text-white px-6 py-3 rounded-lg font-bold text-lg hover:bg-teal-600 transition-colors">
                                        Call Now
                                    </a>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ContactInfo; 