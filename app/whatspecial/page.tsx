import Header from '@/components/Header'
import PerksAndBenefits from '@/components/PerksAndBenefits'
import RulesAndSelection from '@/components/RulesAndSelection'
import InternsChallenge from '@/components/InternsChallenge'
import SelectionProcessTimeline from '@/components/SelectionProcessTimeline'
import InternsProjects from '@/components/InternsProjects'
import { Footer } from '@/components/Footer'
import AnimatedBackground from '@/components/AnimatedBackground'
import { BackToTop } from '@/components/BackToTop'
import { AnimatedWrapper } from '@/components/AnimatedWrapper'

const WhatSpecialPage = () => {
  return (
    <div className="bg-gray-50 relative">
        <Header/>
        <AnimatedBackground/>
        <main className='py-16 relative z-10'>
            <AnimatedWrapper delay={0.1}>
            <InternsChallenge />
            </AnimatedWrapper>
            <AnimatedWrapper delay={0.2}>
            <InternsProjects />
            </AnimatedWrapper>
            <AnimatedWrapper delay={0.3}>
            <SelectionProcessTimeline />
            </AnimatedWrapper>
            <AnimatedWrapper delay={0.4}>
            <RulesAndSelection />
            </AnimatedWrapper>
            <AnimatedWrapper delay={0.5}>
            <PerksAndBenefits />
            </AnimatedWrapper>
        </main>
        <Footer/>
        <BackToTop/>
    </div>
  )
}

export default WhatSpecialPage