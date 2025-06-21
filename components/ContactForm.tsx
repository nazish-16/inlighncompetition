"use client";
import { useState } from "react";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        domain: '',
        state: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
        // Here you would typically handle form submission, e.g., send to an API
        alert("Thank you for your message!");
        setFormData({
            fullName: '',
            email: '',
            domain: '',
            state: '',
            message: ''
        });
    };

    return (
        <section className="py-20 bg-teal-800 text-white relative">
             <svg
                className="absolute top-0 left-0 w-full h-full"
                style={{ zIndex: 0 }}
                preserveAspectRatio="none"
                viewBox="0 0 1440 800"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M0 800L1440 0V800H0Z" fill="rgba(0, 0, 0, 0.1)" />
             </svg>
            <div className="container mx-auto px-4 relative">
                <div className="text-center mb-12">
                     <span className="text-sm font-bold bg-teal-600 rounded-full px-4 py-2">GET IN TOUCH</span>
                    <h2 className="text-4xl font-bold mt-4">Fill the form to contact us</h2>
                </div>
                <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Full Name" required className="w-full p-4 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400" />
                            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required className="w-full p-4 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400" />
                            <input type="text" name="domain" value={formData.domain} onChange={handleChange} placeholder="Domain of Internship" className="w-full p-4 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400" />
                            <input type="text" name="state" value={formData.state} onChange={handleChange} placeholder="State" className="w-full p-4 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400" />
                        </div>
                        <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message" rows={5} required className="w-full p-4 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400" />
                        <div className="text-center">
                            <button type="submit" className="px-8 py-3 bg-yellow-400 text-gray-900 font-bold rounded-lg hover:bg-yellow-500 transition-colors duration-300">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactForm; 