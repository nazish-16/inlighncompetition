'use client';

import { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);

  const [isHoveringImage, setIsHoveringImage] = useState(false);
  const [isHoveringLink, setIsHoveringLink] = useState(false);

  const endX = useRef(0);
  const endY = useRef(0);
  const currentX = useRef(0);
  const currentY = useRef(0);
  const requestRef = useRef<number | null>(null);

  useEffect(() => {
    const cursorDot = dotRef.current;
    const cursorOutline = outlineRef.current;

    if (!cursorDot || !cursorOutline) return;

    const handleMouseMove = (e: MouseEvent) => {
      endX.current = e.clientX;
      endY.current = e.clientY;

      cursorDot.style.left = `${e.clientX}px`;
      cursorDot.style.top = `${e.clientY}px`;
    };

    const animate = () => {
      currentX.current += (endX.current - currentX.current) * 0.2;
      currentY.current += (endY.current - currentY.current) * 0.2;

      if (cursorOutline) {
        cursorOutline.style.left = `${currentX.current}px`;
        cursorOutline.style.top = `${currentY.current}px`;
      }

      requestRef.current = requestAnimationFrame(animate);
    };

    animate();

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName.toLowerCase() === 'img') {
        setIsHoveringImage(true);
      } else if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button')
      ) {
        setIsHoveringLink(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName.toLowerCase() === 'img') {
        setIsHoveringImage(false);
      } else if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button')
      ) {
        setIsHoveringLink(false);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  const dotClasses = `fixed w-2 h-2 bg-black rounded-full z-[9999] pointer-events-none transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-200 ease-out ${
    isHoveringLink ? 'scale-50' : ''
  } ${isHoveringImage ? 'opacity-0' : ''}`;

  const outlineClasses = `fixed border-2 rounded-full z-[9999] pointer-events-none transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out ${
    isHoveringLink
      ? 'w-16 h-16 bg-black/10 border-white'
      : 'w-10 h-10 border-white'
  } ${
    isHoveringImage
      ? 'w-32 h-32 border-black bg-gray-500/30 mix-blend-difference scale-125'
      : ''
  }`;

  return (
    <>
      <div ref={dotRef} className={dotClasses} />
      <div ref={outlineRef} className={outlineClasses} />
    </>
  );
};

export default CustomCursor;
