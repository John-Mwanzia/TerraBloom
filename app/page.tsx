import React from 'react'
import HeroSection from './components/HomeLanding/HeroSection'
import AboutSection from './components/HomeLanding/AboutSection'
import FeaturesSection from './components/HomeLanding/FeaturesSection'

export default function page() {
  return (
    <div className='bg-light-gray/40  flex justify-center items-center flex-col'>
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
    </div>
  )
}
