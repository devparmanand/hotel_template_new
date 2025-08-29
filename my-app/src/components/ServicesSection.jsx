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

   

   
    </>
  );
}
