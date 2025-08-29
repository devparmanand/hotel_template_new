import RecentBlog from '@/components/RecentBlog'
import RestaurantBar from '@/components/RestaurantBar'
import Testimonials from '@/components/Testimonials'
import React from 'react'

export default function page() {
  return (
   <>
   <section
  className="relative min-h-screen bg-cover bg-center flex flex-col justify-center"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80')",
  }}
>
  {/* Overlay with gradient */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60"></div>

  {/* Hero Content (centered breadcrumb + heading only) */}
  <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-6 min-h-[80vh]">
    <p className="uppercase tracking-wide text-sm md:text-base font-light mb-4">
      HOME <span className="mx-2">›</span> RESTO & BAR
    </p>
    <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
        Resto & Bar
    </h1>
  </div>

 
</section>
   <RestaurantBar/>
   <Testimonials/>
   <RecentBlog/>
   </>
  )
}


