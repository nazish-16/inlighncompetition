import Header from '@/components/Header';
import ContactInfo from '@/components/ContactInfo';
import Faq from '@/components/Faq';
import ContactForm from '@/components/ContactForm';
import { Footer } from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';
import { BackToTop } from '@/components/BackToTop';
import { AnimatedWrapper } from '@/components/AnimatedWrapper';

const ContactPage = () => {
  return (
    <div className="bg-gray-50 relative">
        <Header/>
        <AnimatedBackground/>
        <main className="relative z-10">
            <AnimatedWrapper delay={0.1}>
            <ContactInfo />
            </AnimatedWrapper>
            <AnimatedWrapper delay={0.2}>
            <Faq />
            </AnimatedWrapper>
            <AnimatedWrapper delay={0.3}>
            <ContactForm />
            </AnimatedWrapper>
        </main>
        <AnimatedWrapper>
        <Footer />
        </AnimatedWrapper>
        <BackToTop/>
    </div>
  )
}

export default ContactPage;