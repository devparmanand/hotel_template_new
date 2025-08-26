"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Roger Scott",
      role: "MARKETING MANAGER",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
      name: "Roger Scott",
      role: "MARKETING MANAGER",
      image: "https://randomuser.me/api/portraits/men/12.jpg",
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
      name: "Roger Scott",
      role: "MARKETING MANAGER",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
      name: "Roger Scott",
      role: "MARKETING MANAGER",
      image: "https://randomuser.me/api/portraits/men/21.jpg",
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
  ];

  const stats = [
    { number: 38900, label: "# of Happy Guests" },
    { number: 320, label: "# of Rooms" },
    { number: 1000, label: "# of Staffs" },
    { number: 587, label: "# of Destinations" },
  ];

  // 👇 Intersection observer for counter animation
  const { ref, inView } = useInView({
    triggerOnce: true, // sirf ek baar trigger hoga
    threshold: 0.2, // 20% section visible hone par trigger hoga
  });

  return (
    <section className="py-20 bg-gray-50">
      {/* Heading */}
      <div className="text-center mb-12">
        <p className="text-sm uppercase text-yellow-600 tracking-widest mb-2">
          Testimonial
        </p>
        <h2 className="text-4xl font-bold text-gray-800">Happy Guests</h2>
      </div>

      {/* Swiper Slider */}
      <div className="max-w-6xl mx-auto px-6 mb-16">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Pagination, Autoplay]}
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white shadow-md rounded-lg p-6 text-center">
                {/* User Info */}
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <h3 className="font-semibold text-lg">{t.name}</h3>
                    <p className="text-yellow-600 text-sm uppercase">
                      {t.role}
                    </p>
                  </div>
                </div>

                {/* Quote */}
                <p className="text-gray-600 text-sm leading-relaxed">{t.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Counter Section */}
      <div ref={ref} className="bg-gray-900 text-center py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((item, i) => (
            <div key={i} className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-yellow-500">
                {inView ? (
                  <CountUp
                    start={0}
                    end={item.number}
                    duration={3}
                    separator=","
                  />
                ) : (
                  "0"
                )}
              </h3>
              <p className="text-gray-300 text-sm mt-2">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
