"use client";

const challengePerks = [
    {
        title: "A Stipend Reward of ₹15,000!",
    },
    {
        title: "An Exclusive Inlighn Tech Welcome Kit & Swag Pack!",
    },
    {
        title: "Special Recognition on Our Platform!",
    },
];

const InternsChallenge = () => {
    return (
        <section className="py-20 bg-transparent relative overflow-hidden">
             <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-red-100 rounded-full" />
             <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-48 h-48 bg-orange-100 rounded-full" />
            <div className="container mx-auto px-4 relative">
                <div className="text-center mb-12">
                    <span className="text-sm font-bold text-orange-500 bg-orange-100 rounded-full px-4 py-1">✨ EPIC OPPORTUNITY ✨</span>
                    <h2 className="text-4xl font-bold text-gray-800 mt-4">Interns of the Month Challenge</h2>
                    <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
                        Inlighn Tech is bringing you an EPIC opportunity with the &quot;Interns of the Month Challenge&quot;! 🎉 <br />
                        Every single month, we&apos;re recognizing 10 OUTSTANDING interns who have shown exceptional dedication, innovation, and top-tier performance! 🏆
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {challengePerks.map((perk, index) => (
                        <div key={index} className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 relative overflow-hidden">
                           <div className="absolute -top-8 -left-8 w-24 h-24 bg-red-200 rounded-full opacity-50" />
                           <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-orange-200 rounded-full opacity-50" />
                            <div className="relative h-48 flex items-center justify-center">
                               <p className="text-xl text-center font-bold text-gray-800">{perk.title}</p>
                            </div>
                           <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-red-300 to-orange-300" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InternsChallenge; 