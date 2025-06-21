import Link from 'next/link';

const GhostIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125" className="w-full h-full">
      <path d="M10 50 Q10 20 50 20 Q90 20 90 50 V80 L75 70 L60 80 L45 70 L30 80 L10 70 Z" fill="#E5E7EB" />
      <circle cx="35" cy="45" r="5" fill="#12212e" />
      <circle cx="65" cy="45" r="5" fill="#12212e" />
      <path d="M40 60 Q50 70 60 60" fill="none" stroke="#12212e" strokeWidth="3" strokeLinecap="round" />
    </svg>
);


export default function NotFound() {
  return (
    <div className="bg-[#12212e] min-h-screen flex flex-col items-center justify-center text-white text-center p-4 overflow-hidden">
        <div className="relative animate-[float_6s_ease-in-out_infinite] w-48 h-48 md:w-64 md:h-64">
            <div className="absolute -inset-4 bg-yellow-400/50 rounded-full blur-2xl opacity-20 animate-pulse"></div>
            <div className="relative">
                <GhostIcon />
            </div>
        </div>

        <h1 className="text-6xl md:text-8xl font-black text-white uppercase tracking-wider drop-shadow-lg mt-8">
            404
        </h1>
        <p className="mt-4 text-xl md:text-2xl font-light text-gray-300">
            Looks like you&apos;ve seen a ghost.
        </p>
        <p className="mt-2 text-md md:text-lg text-gray-400 max-w-lg">
            The page you&apos;re looking for has vanished into thin air. Don&apos;t be scared, we&apos;ll help you find your way back.
        </p>

        <Link
            href="/"
            className="mt-12 px-8 py-4 cursor-none bg-yellow-500 text-white font-bold rounded-lg hover:bg-yellow-400 transition-all duration-300 transform shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50"
        >
            Return to the Living World
        </Link>
    </div>
  );
} 