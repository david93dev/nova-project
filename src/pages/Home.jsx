import AboutUs from '@/components/About'
import Faq from '@/components/Faq'
import FeatureSteps from '@/components/FeatureSteps'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import PricingSection from '@/components/PricingSection'
import { TestimonialCard } from '@/components/TestimonialCard'
import React from 'react'

const Home = () => {
  return (
    <>
    <Header />
    <Hero />
    <AboutUs />
    <PricingSection />
    <FeatureSteps />
    <Faq />
    <TestimonialCard />
    </>
  )
}

export default Home