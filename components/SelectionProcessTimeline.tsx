"use client";

const timelineSteps = [
    {
        title: "Submit Your Projects",
        description: "Submit your best projects related to your domain!",
        color: "purple",
    },
    {
        title: "Skill Assessment Test",
        description: "Take a skill assessment test to prove your expertise!",
        color: "orange",
    },
    {
        title: "Final Round",
        description: "Ace the interview round (if shortlisted)!",
        color: "teal",
    },
];

const SelectionProcessTimeline = () => {
    
    const colors: { [key: string]: string } = {
        purple: 'bg-purple-500',
        orange: 'bg-orange-500',
        teal: 'bg-teal-500'
    };

    return (
        <section className="py-20 bg-transparent relative">
             <div className="absolute top-1/4 left-20 w-32 h-32 bg-purple-100 rounded-full opacity-50 -z-1" />
             <div className="absolute top-1/2 right-20 w-32 h-32 bg-teal-100 rounded-full opacity-50 -z-1" />
             <div className="absolute bottom-1/4 left-1/2 w-32 h-32 bg-orange-100 rounded-full opacity-50 -z-1" />

            <div className="container mx-auto px-4">
                <div className="relative">
                    {timelineSteps.map((step, index) => (
                        <div key={index} className="flex items-center w-full mb-16">
                            <div className="w-1/2 flex justify-end">
                               {index % 2 === 0 && (
                                 <div className="w-full max-w-sm p-8 text-right">
                                     <h3 className="text-2xl font-bold text-gray-800">{step.title}</h3>
                                     <p className="text-gray-600 mt-2">{step.description}</p>
                                 </div>
                               )}
                            </div>

                            <div className="relative w-16 h-16">
                                <div className={`w-16 h-16 rounded-full ${colors[step.color]} shadow-lg flex items-center justify-center text-white font-bold text-2xl z-10 relative`}>
                                    {index + 1}
                                </div>
                                {index < timelineSteps.length - 1 && (
                                  <div className="absolute top-full left-1/2 w-1 h-16 bg-gray-300 -translate-x-1/2 " />
                                )}
                            </div>

                             <div className="w-1/2 flex justify-start">
                               {index % 2 !== 0 && (
                                 <div className="w-full max-w-sm p-8 text-left">
                                     <h3 className="text-2xl font-bold text-gray-800">{step.title}</h3>
                                     <p className="text-gray-600 mt-2">{step.description}</p>
                                 </div>
                               )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SelectionProcessTimeline; 