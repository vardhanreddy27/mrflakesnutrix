import Band from '@/components/Band'
import CategorySlider from '@/components/CategorySlider'
import CertifiedMarquee from '@/components/CertifiedMarquee'
import CustomLayout from '@/components/CustomLayout'
import FAQsSection from '@/components/FAQsSection'
import Footer from '@/components/Footer'
import FunctionalSlider from '@/components/FunctionalSlider'
import LatestLanch from '@/components/LatestLaunch'
import Menu from '@/components/Menu'
import NewsletterHero from '@/components/NewsletterHero'
import ProductCard from '@/components/ProductCard'
import React from 'react'

function index() {
  return (
    <div>
      <Menu />
      <FunctionalSlider />
      <Band />
      <CategorySlider />
      <CertifiedMarquee />
      <CustomLayout />
      <LatestLanch />
      <ProductCard />
      <NewsletterHero />
      <FAQsSection />
      <Footer />
    </div>
  )
}

export default index
