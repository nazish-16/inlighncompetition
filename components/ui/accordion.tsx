"use client";
import { useState, ReactNode, FC } from 'react';
import { FaChevronDown } from 'react-icons/fa';

interface AccordionItemProps {
    title: string;
    children: ReactNode;
}

export const AccordionItem: FC<AccordionItemProps> = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center text-left py-4 px-6 text-gray-800"
            >
                <span className="font-semibold">{title}</span>
                <FaChevronDown
                    className={`transform transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                    }`}
                />
            </button>
            <div
                className={`grid transition-all duration-500 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
            >
                <div className="overflow-hidden">
                    <div className="p-6 text-gray-600">{children}</div>
                </div>
            </div>
        </div>
    );
};

interface AccordionProps {
    children: ReactNode;
}

export const Accordion: FC<AccordionProps> = ({ children }) => {
    return <div className="space-y-4">{children}</div>;
}; 