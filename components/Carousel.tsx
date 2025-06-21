"use client";
import { useState, ReactNode, FC } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface CarouselProps {
    children: ReactNode[];
}

export const Carousel: FC<CarouselProps> = ({ children }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prev = () => {
        setCurrentIndex((curr) => (curr === 0 ? children.length - 1 : curr - 1));
    };

    const next = () => {
        setCurrentIndex((curr) => (curr === children.length - 1 ? 0 : curr + 1));
    };

    return (
        <div className="overflow-hidden relative">
            <div
                className="flex transition-transform ease-out duration-500"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {children}
            </div>
            <div className="absolute inset-0 flex items-center justify-between p-4">
                <button
                    onClick={prev}
                    className="p-2 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
                >
                    <FaChevronLeft size={24} />
                </button>
                <button
                    onClick={next}
                    className="p-2 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
                >
                    <FaChevronRight size={24} />
                </button>
            </div>
        </div>
    );
};

interface CarouselItemProps {
    children: ReactNode;
}

export const CarouselItem: FC<CarouselItemProps> = ({ children }) => {
    return (
        <div className="w-full flex-shrink-0">
            {children}
        </div>
    );
}; 