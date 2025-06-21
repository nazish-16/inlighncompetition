import About from "@/components/About";
import { AnimatedWrapper } from "@/components/AnimatedWrapper";
import { Chooseus } from "@/components/Chooseus";
import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import Homepage from "@/components/Homepage";
import { AnimatedTestimonialsDemo } from "@/components/Testimonials";
import { BackToTop } from "@/components/BackToTop";

export default function Home() {
  return (
    <main>
        <Header />
      <AnimatedWrapper>
        <Homepage />
      </AnimatedWrapper>
        <About />
      <AnimatedWrapper>
        <Chooseus />
      </AnimatedWrapper>
      <AnimatedWrapper>
        <AnimatedTestimonialsDemo />
      </AnimatedWrapper>
        <Footer />
      <BackToTop />
    </main>
  );
}
