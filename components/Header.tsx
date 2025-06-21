"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);
    const pathname = usePathname();
    const isHomepage = pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setHasScrolled(window.scrollY > 20);
        };

        if (isHomepage) {
            window.addEventListener('scroll', handleScroll);
            handleScroll(); 
            return () => window.removeEventListener('scroll', handleScroll);
        } else {
            setHasScrolled(true);
        }
    }, [pathname, isHomepage]);

    const isTransparent = isHomepage && !hasScrolled;

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About Us' },
        { href: '/programs', label: 'Programs' },
        { href: '/verify', label: 'Verify Certificate' },
        { href: '/whatspecial', label: 'What\'s Special' },
        { href: '/contact', label: 'Contact Us' },
    ];

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isTransparent ? 'bg-transparent' : 'bg-white/90 shadow-md'}`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <Link href={`/`} className="flex-shrink-0 cursor-none">
                        <Image src={`/assets/logo.png`} alt='logo' width={100000000} height={10000000} className='w-12 h-12'/>
                    </Link>

                    <nav className="hidden lg:flex lg:space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className={`relative cursor-none group hover:text-teal-500 transition-colors duration-300 ${isTransparent ? 'text-white' : 'text-black'}`}
                            >
                                {link.label}
                                <span className={`absolute bottom-[-5px] left-1/2 w-0 h-[2px] bg-teal-800 group-hover:w-full transition-all duration-300 -translate-x-1/2`}></span>
                            </Link>
                        ))}
                    </nav>

                    <div className="hidden lg:block">
                        <SignedOut>
                            <Link href={`/sign-in`} className="bg-yellow-500 cursor-none text-white font-bold py-2 px-3 rounded-lg hover:bg-yellow-400 transition-colors duration-300">
                                 Sign In
                            </Link>
                        </SignedOut>
                        <SignedIn>
                            <UserButton afterSignOutUrl="/"/>
                        </SignedIn>
                    </div>

                    <div className="lg:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className={`focus:outline-none ${isTransparent ? 'text-white' : 'text-gray-500 hover:text-gray-600 focus:text-gray-600'}`}>
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div
                className={`fixed inset-0 bg-black/20 bg-opacity-50 z-40 transition-opacity duration-300 ease-in-out ${
                    isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                } lg:hidden`}
                onClick={() => setIsOpen(false)}
            />

            <div className={`fixed top-0 left-0 h-full bg-white w-64 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-50 lg:hidden`}>
                <div className="p-5">
                    <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600 float-right">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <div className="mt-16">
                        <nav className="flex flex-col space-y-2">
                            {navLinks.map((link, index) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className={`text-gray-700 cursor-none hover:text-teal-500 transition-all duration-300 ease-in-out py-2 px-4 rounded-md ${
                                        isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'
                                    }`}
                                    style={{ transitionDelay: `${isOpen ? index * 100 + 200 : 0}ms` }}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                        <div className="mt-8">
                            <SignedOut>
                                <Link
                                    href={`/sign-in`}
                                    className={`bg-yellow-500 text-white cursor-none font-bold py-3 px-6 rounded-lg w-full hover:bg-yellow-400 transition-all duration-300 ease-in-out ${
                                        isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                                    }`}
                                    style={{ transitionDelay: `${isOpen ? navLinks.length * 100 + 200 : 0}ms` }}
                                >
                                    Sign In
                                </Link>
                            </SignedOut>
                            <SignedIn>
                                <div
                                 className={`w-full flex justify-center transition-all duration-300 ease-in-out ${
                                    isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                                }`}
                                style={{ transitionDelay: `${isOpen ? navLinks.length * 100 + 200 : 0}ms` }}
                                >
                                    <UserButton afterSignOutUrl="/"/>
                                </div>
                            </SignedIn>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;