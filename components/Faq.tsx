"use client";
import { Accordion, AccordionItem } from "./ui/accordion";

const faqs = [
    {
        question: "What makes Inlighn Tech different from other learning platforms?",
        answer: "Inlighn Tech focuses on practical, hands-on learning through real-world projects and mentorship, ensuring you gain skills that are directly applicable in the industry."
    },
    {
        question: "How can I register for an internship?",
        answer: "You can register by visiting our 'Programs' page, choosing an internship that interests you, and clicking the registration link. Follow the on-screen instructions to complete the process."
    },
    {
        question: "After filling out the registration form, whom should I contact?",
        answer: "Once your registration is complete, you will receive a confirmation email with all the necessary details and contact information for your program coordinator."
    },
    {
        question: "What is the project submission deadline?",
        answer: "Project submission deadlines vary by program and are clearly communicated at the beginning of your internship. You can also find them in your internship portal."
    },
    {
        question: "Is it mandatory to submit a project only from the available options on the portal?",
        answer: "While we provide a list of recommended projects, you are encouraged to propose your own ideas. Please discuss with your mentor for approval."
    },
    {
        question: "How can I proceed with signing up at Inlighn Tech?",
        answer: "Simply create an account on our website, browse our internship programs, and enroll in the one that aligns with your career goals. We're excited to have you!"
    },
];


const Faq = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                     <h2 className="text-4xl font-bold text-gray-800">FAQ&apos;s</h2>
                </div>
                <div className="max-w-4xl mx-auto">
                    <Accordion>
                       {faqs.map((faq, index) => (
                           <AccordionItem key={index} title={faq.question}>
                               {faq.answer}
                           </AccordionItem>
                       ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
};

export default Faq; 