import React from 'react'
import HeroSection from '../section/HeroSection'
import SecondSection from '../section/SecondSection'
import ThirdSection from '../section/ThirdSection'
import FourthSection from '../section/FourthSection'
import QualityTrustSection from '../section/QualityTrustSection'
import GallerySection from '../section/GallerySection'
import TestimonialsSection from '../section/TestimonialsSection'
import PartnersMarquee from '../section/PartnersMarquee'

const HomePage = () => {
  return (
    <>
    <HeroSection/>
    <SecondSection/>
    <ThirdSection/>
    <FourthSection/>
    {/* <GallerySection/> */}
    <QualityTrustSection/>
    <TestimonialsSection/>
    <PartnersMarquee/>
    </>
  )
}

export default HomePage