import React from "react";

export default function AboutSection() {
  return (
    <section className="mt-48 sm:mt-16 py-24 md:py-32 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20 items-center">
        
        {/* Left Content (Cards + Images) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="group bg-white p-6 shadow-md rounded-lg flex flex-col justify-center items-center text-center transition hover:bg-black hover:text-white cursor-pointer">
            <div className="text-yellow-600 text-4xl mb-4 transition group-hover:text-white">
              🛏️
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2 transition group-hover:text-white">
              Cozy Room
            </h3>
            <p className="text-gray-600 text-sm sm:text-base transition group-hover:text-white">
              Far far away, behind the word mountains, far from the countries
              Vokalia.
            </p>
          </div>

          {/* Image 1 */}
          <div>
            <img
              src="/images/Delhi-airport-plaza-family-suite-room.webp"
              alt="Family Room"
              className="rounded-lg shadow-md w-full h-48 sm:h-64 md:h-72 object-cover"
            />
          </div>

          {/* Image 2 */}
          <div>
            <img
              src="/images/Delhi-airport-plaza-family-suite-room.webp"
              alt="Couple Room"
              className="rounded-lg shadow-md w-full h-48 sm:h-64 md:h-72 object-cover"
            />
          </div>

          {/* Card 2 */}
          <div className="group bg-white p-6 shadow-md rounded-lg flex flex-col justify-center items-center text-center transition hover:bg-black hover:text-white cursor-pointer">
            <div className="text-yellow-600 text-4xl mb-4 transition group-hover:text-white">
              ⭐
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2 transition group-hover:text-white">
              Special Offers
            </h3>
            <p className="text-gray-600 text-sm sm:text-base transition group-hover:text-white">
              Far far away, behind the word mountains, far from the countries
              Vokalia.
            </p>
          </div>
        </div>

        {/* Right Content */}
        <div className="text-center lg:text-left mt-6 lg:mt-0">
          <h5 className="text-yellow-600 uppercase tracking-widest font-semibold mb-3 text-sm sm:text-base">
            About Us
          </h5>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug mb-6">
            Unwind A Hotel <br className="hidden sm:block" /> Booking Agency
          </h2>
          <p className="text-gray-600 mb-6 text-sm sm:text-base md:text-lg">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
          <button className="bg-yellow-600 text-white px-5 sm:px-6 py-3 rounded-md shadow-lg hover:bg-yellow-700 transition text-sm sm:text-base">
            BOOK YOUR ROOM NOW
          </button>
        </div>
      </div>
    </section>
  );
}
