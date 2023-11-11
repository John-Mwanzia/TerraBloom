import React from 'react'
import HeroSection from './components/HomeLanding/HeroSection'
import AboutSection from './components/HomeLanding/AboutSection'

export default function page() {
  return (
    <div className='bg-light-gray/40  flex justify-center items-center flex-col'>
        <HeroSection />
        <AboutSection />
    </div>
  )
}
