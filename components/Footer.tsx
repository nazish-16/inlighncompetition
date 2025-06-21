"use client"

import Link from "next/link";
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaEnvelope, FaPhone, FaMapMarkerAlt, FaArrowRight, FaLaptopCode, FaUserGraduate, FaCertificate, FaUsers } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-[#13222e] border-t border-gray-500 text-white relative z-40">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Link href={`/`} className="text-3xl font-bold text-[#f5a623] mb-2">INLIGHN TECH</Link>
              <p className="text-gray-300 text-sm leading-relaxed mt-4">
                Empowering students and young professionals with immersive internship programs in Full Stack Development, Data Science, Cyber Security, and more.
              </p>
            </div>
            <div className="flex space-x-4">
              <a href="https://facebook.com/inlighntech" target="_blank" rel="noopener noreferrer" className="bg-[#f5a623] p-3 rounded-full hover:bg-[#e49b20] transition-colors duration-300 cursor-pointer">
                <FaFacebook className="text-black text-lg" />
              </a>
              <a href="https://twitter.com/inlighntech" target="_blank" rel="noopener noreferrer" className="bg-[#10e5a5] p-3 rounded-full hover:bg-[#0ddaa0] transition-colors duration-300 cursor-pointer">
                <FaTwitter className="text-black text-lg" />
              </a>
              <a href="https://instagram.com/inlighntech" target="_blank" rel="noopener noreferrer" className="bg-[#36a2eb] p-3 rounded-full hover:bg-[#2d8fd8] transition-colors duration-300 cursor-pointer">
                <FaInstagram className="text-black text-lg" />
              </a>
              <a href="https://linkedin.com/company/inlighntech" target="_blank" rel="noopener noreferrer" className="bg-[#f44336] p-3 rounded-full hover:bg-[#e53935] transition-colors duration-300 cursor-pointer">
                <FaLinkedin className="text-black text-lg" />
              </a>
              <a href="https://youtube.com/@inlighntech" target="_blank" rel="noopener noreferrer" className="bg-[#ffc107] p-3 rounded-full hover:bg-[#ffb300] transition-colors duration-300 cursor-pointer">
                <FaYoutube className="text-black text-lg" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 text-[#10e5a5]">Our Programs</h4>
            <ul className="space-y-3">
              <li>
                <a href="/programs/full-stack-development" className="flex items-center text-gray-300 hover:text-[#f5a623] transition-colors duration-300">
                  <FaLaptopCode className="mr-3 text-[#f5a623]" />
                  Full Stack Development
                </a>
              </li>
              <li>
                <a href="/programs/data-science" className="flex items-center text-gray-300 hover:text-[#10e5a5] transition-colors duration-300">
                  <FaUserGraduate className="mr-3 text-[#10e5a5]" />
                  Data Science
                </a>
              </li>
              <li>
                <a href="/programs/cyber-security" className="flex items-center text-gray-300 hover:text-[#36a2eb] transition-colors duration-300">
                  <FaCertificate className="mr-3 text-[#36a2eb]" />
                  Cyber Security
                </a>
              </li>
              <li>
                <a href="/programs/data-analysis" className="flex items-center text-gray-300 hover:text-[#f44336] transition-colors duration-300">
                  <FaUsers className="mr-3 text-[#f44336]" />
                  Data Analysis
                </a>
              </li>
              <li>
                <a href="/programs/project-management" className="flex items-center text-gray-300 hover:text-[#ffc107] transition-colors duration-300">
                  <FaCertificate className="mr-3 text-[#ffc107]" />
                  Project Management
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-[#36a2eb]">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="/about" className="flex items-center text-gray-300 hover:text-[#f5a623] transition-colors duration-300 group">
                  <span>About Us</span>
                  <FaArrowRight className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </li>
              <li>
                <a href="/programs" className="flex items-center text-gray-300 hover:text-[#10e5a5] transition-colors duration-300 group">
                  <span>Internship Programs</span>
                  <FaArrowRight className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </li>
              <li>
                <a href="/testimonials" className="flex items-center text-gray-300 hover:text-[#36a2eb] transition-colors duration-300 group">
                  <span>Success Stories</span>
                  <FaArrowRight className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </li>
              <li>
                <a href="/contact" className="flex items-center text-gray-300 hover:text-[#f44336] transition-colors duration-300 group">
                  <span>Contact Us</span>
                  <FaArrowRight className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </li>
              <li>
                <a href="/privacy-policy" className="flex items-center text-gray-300 hover:text-[#ffc107] transition-colors duration-300 group">
                  <span>Privacy Policy</span>
                  <FaArrowRight className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-[#f44336]">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-[#f5a623] mt-1 mr-3 flex-shrink-0" />
                <a href="https://maps.google.com/?q=123+Tech+Park+Innovation+Street+Bangalore" target="_blank" rel="noopener noreferrer" className="text-gray-300 text-sm hover:text-[#f5a623] transition-colors duration-300">
                  123 Tech Park, Innovation Street<br />
                  Bangalore, Karnataka 560001
                </a>
              </div>
              <div className="flex items-center">
                <FaPhone className="text-[#10e5a5] mr-3 flex-shrink-0" />
                <a href="tel:+919876543210" className="text-gray-300 text-sm hover:text-[#10e5a5] transition-colors duration-300">+91 98765 43210</a>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-[#36a2eb] mr-3 flex-shrink-0" />
                <a href="mailto:info@inlighntech.com" className="text-gray-300 text-sm hover:text-[#36a2eb] transition-colors duration-300">info@inlighntech.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 text-sm">
              <a href="/terms-of-service" className="text-gray-400 hover:text-[#f5a623] transition-colors duration-300">
                Terms of Service
              </a>
              <a href="/privacy-policy" className="text-gray-400 hover:text-[#10e5a5] transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="/cookie-policy" className="text-gray-400 hover:text-[#36a2eb] transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#132737] py-4">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex items-center text-gray-400 text-sm uppercase gap-1">
              Built with 💙 by <Link href={`/https://www.linkedin.com/in/realnazish/`} className="underline underline-offset-1 hover:text-blue-500 cursor-none"> Nazish Ahmed </Link>  © {new Date().getFullYear()} Inlighn
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
