"use client";
import React from "react";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center flex flex-col justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      {/* Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60"></div>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-6 pt-24 pb-40 md:pt-32 md:pb-0">
        <p className="uppercase tracking-widest text-sm md:text-base font-light mb-2">
          Enjoy Your Wonderful Holidays With a Great Luxury Experience!
        </p>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
          Most Relaxing Place
        </h1>

        <div className="flex flex-col md:flex-row gap-4 justify-center mb-10">
          <button className="bg-yellow-600 hover:bg-yellow-700 px-6 py-3 rounded-md text-white font-semibold transition">
            TAKE A TOUR →
          </button>
          <button className="bg-white hover:bg-yellow-600 hover:text-white px-6 py-3 rounded-md text-black font-semibold transition">
            LEARN MORE →
          </button>
        </div>
      </div>

      {/* Availability Form */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 translate-y-1/2 w-full max-w-5xl px-6 z-20">
        <div className="bg-[#1a1a1a] text-white rounded-lg shadow-xl p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Check-In */}
            <div>
              <label className="text-xs uppercase tracking-wide block mb-2 font-light">
                Check-In
              </label>
              <input
                type="date"
                className="w-full px-3 py-2 rounded-md bg-transparent border border-gray-700 text-gray-200 placeholder-gray-400 focus:outline-none"
                placeholder="Check-In Date"
              />
            </div>

            {/* Check-Out */}
            <div>
              <label className="text-xs uppercase tracking-wide block mb-2 font-light">
                Check-Out
              </label>
              <input
                type="date"
                className="w-full px-3 py-2 rounded-md bg-transparent border border-gray-700 text-gray-200 placeholder-gray-400 focus:outline-none"
                placeholder="Check-Out Date"
              />
            </div>

            {/* Rooms */}
            <div>
              <label className="text-xs uppercase tracking-wide block mb-2 font-light">
                Rooms
              </label>
              <select className="w-full px-3 py-2 rounded-md bg-transparent border border-gray-700 text-gray-200 focus:outline-none">
                <option>Suite</option>
                <option>Deluxe</option>
                <option>Family</option>
              </select>
            </div>

            {/* Guests */}
            <div>
              <label className="text-xs uppercase tracking-wide block mb-2 font-light">
                Guests
              </label>
              <select className="w-full px-3 py-2 rounded-md bg-transparent border border-gray-700 text-gray-200 focus:outline-none">
                <option>1 Person</option>
                <option>2 Persons</option>
                <option>3 Persons</option>
                <option>4+ Persons</option>
              </select>
            </div>
          </div>

          {/* Button inside same background */}
          <div className="flex justify-center mt-6">
            <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold px-8 py-4 rounded-md transition shadow-md text-sm md:text-base">
              CHECK AVAILABILITY
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
