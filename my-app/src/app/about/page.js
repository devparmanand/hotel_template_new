import AboutSection from "@/components/AboutSection";
import Testimonials from "@/components/Testimonials";
import Testimonials1 from "@/components/Testimonials1";
import React from "react";

export default function AboutHero() {
  return (
<>
 <section
      className="relative h-screen flex items-center justify-center bg-center bg-cover"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 md:px-12">
        {/* Breadcrumb */}
        <p className="uppercase tracking-wide text-xs sm:text-sm md:text-base mb-4">
          Home <span className="mx-1">›</span> About Us
        </p>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
          About Us
        </h1>
      </div>
    </section>

    <AboutSection/>

    
       <section
      className="relative bg-cover bg-center h-[250px] flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1501117716987-c8e1ecb2101b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')", // replace with your hotel bg
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 text-center md:text-left max-w-4xl px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Text */}
        <div>
          <p className="text-sm tracking-widest text-yellow-500 uppercase mb-3">
            Find Best Hotel For Living
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-snug">
            Find the Best Hotel in Your <br /> Next Vacation
          </h1>
        </div>

        {/* Button */}
        <div>
          <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold px-6 py-3 transition">
            BOOK NOW
          </button>
        </div>
      </div>
    </section>

    <Testimonials1/>

</>
  );
}
