import AboutUs from '@/components/About'
import Faq from '@/components/Faq'
import FeatureSteps from '@/components/FeatureSteps'

import Hero from '@/components/Hero'
import ContactUs1 from '@/components/mvpblocks/contact-us-1'
import Footer4Col from '@/components/mvpblocks/footer-4col'
import Header2 from '@/components/mvpblocks/header-2'
import PricingSection from '@/components/PricingSection'
import { TestimonialCard } from '@/components/TestimonialCard'
import React from 'react'

const Home = () => {
  return (
    <>
    <Header2 />
    <Hero />
    <AboutUs />
    <PricingSection />
    <FeatureSteps />
    <Faq />
    <TestimonialCard />
    <ContactUs1 />
    <Footer4Col />
    </>
  )
}

export default Home