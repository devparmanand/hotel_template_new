import AboutSection from '@/components/AboutSection'
import FeaturedRooms from '@/components/FeaturedRooms'
import HeroSection from '@/components/Hore'
import RecentBlog from '@/components/RecentBlog'
import RestaurantBar from '@/components/RestaurantBar'
import ServicesSection from '@/components/ServicesSection'
import Testimonials from '@/components/Testimonials'
import React from 'react'

export default function page() {
  return (
    <>
    <HeroSection/>
    <AboutSection/>
    <ServicesSection/>
    <FeaturedRooms/>
    <RestaurantBar/>
    <Testimonials/>
    <RecentBlog/>
    </>
  )
}
