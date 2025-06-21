"use client";

import { Box, Users, Award, Clock, Globe } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export function Chooseus() {
  return (
    <div className="py-16 px-6 bg-[#13222e]">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Why Choose 
            <span> INLIGHN TECH?</span>
            </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover what makes our internship programs the perfect launchpad for your tech career
          </p>
        </div>
        
        <ul className="grid grid-cols-1 grid-rows-none gap-6 md:grid-cols-12 md:grid-rows-3 lg:gap-6 xl:max-h-[40rem] xl:grid-rows-2">
          <GridItem
            area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
            icon={<Users className="h-6 w-6 text-[#f5a623]" />}
            title="Industry Expert Mentorship"
            description="Learn directly from seasoned professionals with 10+ years of experience in top tech companies. Get personalized guidance throughout your internship journey."
          />

          <GridItem
            area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
            icon={<Award className="h-6 w-6 text-[#10e5a5]" />}
            title="Certified Programs & Recognition"
            description="Earn industry-recognized certificates upon completion. Our programs are backed by ISO certification and Startup India recognition."
          />

          <GridItem
            area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
            icon={<Box className="h-6 w-6 text-[#36a2eb]" />}
            title="Real-World Project Experience"
            description="Work on live projects used by actual companies. Build a portfolio that showcases your practical skills to future employers."
          />

          <GridItem
            area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
            icon={<Clock className="h-6 w-6 text-[#ffc107]" />}
            title="Flexible Learning Schedule"
            description="Learn at your own pace with 24/7 access to resources. Perfect for students balancing academics with career development."
          />

          <GridItem
            area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
            icon={<Globe className="h-6 w-6 text-[#f44336]" />}
            title="Global Career Opportunities"
            description="Connect with our network of 500+ partner companies. 85% of our interns secure full-time positions within 6 months."
          />
        </ul>
      </div>
    </div>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={`min-h-[16rem] list-none ${area}`}>
      <div className="relative h-full rounded-2xl border border-gray-700 p-3 md:rounded-3xl md:p-4">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-8 md:p-8 dark:shadow-[0px_0px_27px_0px_#2D2D2D] bg-[#0f2d37]/50">
          <div className="relative flex flex-1 flex-col justify-between gap-4">
            <div className="w-fit rounded-lg border border-gray-600 p-3 bg-[#0c1b26]/50">
              {icon}
            </div>
            <div className="space-y-4">
              <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-white md:text-2xl/[1.875rem]">
                {title}
              </h3>
              <h2 className="font-sans text-sm/[1.125rem] text-gray-300 md:text-base/[1.375rem] [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
