import React from "react";
import {
  FaWifi,
  FaConciergeBell,
  FaSwimmer,
  FaSpa,
  FaHeadset,
} from "react-icons/fa";
import { MdRestaurantMenu } from "react-icons/md";

export default function ServicesSection() {
  const services = [
    { icon: FaWifi, title: "Free Wifi" },
    { icon: FaConciergeBell, title: "Easy Booking" },
    { icon: MdRestaurantMenu, title: "Restaurant" },
    { icon: FaSwimmer, title: "Swimming Pool" },
    { icon: FaSpa, title: "Beauty & Health" },
    { icon: FaHeadset, title: "Help & Support" },
  ];

  return (
    <>
      {/* Services Section */}
      <section className="py-20 bg-gray-50 text-center">
        {/* Section Header */}
        <div className="mb-12">
          <p className="text-sm text-yellow-600 uppercase tracking-widest mb-2">
            Unwind Services
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Explore Our Hotel Services
          </h2>
        </div>

        {/* Service Items */}
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 px-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative w-36 h-36 bg-white shadow-md flex flex-col items-center justify-center cursor-pointer 
                           transition hover:bg-yellow-600"
                style={{
                  borderRadius: "70% 70% 70% 0 / 70% 70% 70% 0", // custom bubble shape
                }}
              >
                <Icon className="text-3xl text-yellow-600 transition group-hover:text-white" />
                <h3 className="mt-3 text-sm font-medium text-gray-800 transition group-hover:text-white">
                  {service.title}
                </h3>
              </div>
            );
          })}
        </div>
      </section>

   

      {/* call to section */}

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
    </>
  );
}
