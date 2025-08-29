"use client";
import React from "react";
import { motion } from "framer-motion";

export default function SectionRooms() {
  const rooms = [
    {
      title: "Suite Room",
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      price: "$450 / NIGHT",
      image:
        "https://images.unsplash.com/photo-1590490359683-658d3d23f972?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Family Room",
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      price: "$450 / NIGHT",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Deluxe Room",
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      price: "$450 / NIGHT",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    },
     {
      title: "Suite Room",
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      price: "$450 / NIGHT",
      image:
        "https://images.unsplash.com/photo-1590490359683-658d3d23f972?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Family Room",
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      price: "$450 / NIGHT",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Deluxe Room",
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      price: "$450 / NIGHT",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section className="py-20 mt-48 bg-gray-50">
      {/* Section Header */}
    

      {/* Rooms Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {rooms.map((room, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg rounded-md overflow-hidden"
            initial={{ rotateY: -90, opacity: 0 }}   // ⬅️ rotateX se rotateY me badla
            whileInView={{ rotateY: 0, opacity: 1 }} // ⬅️ ab left-to-right hoga
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Card 1 & 3 = content first, image second */}
            {(index === 0 || index === 2) && (
              <>
                {/* Content */}
                <div className="p-6 text-center group hover:bg-black hover:text-white transition duration-500">
                  <h3 className="text-2xl font-semibold">{room.title}</h3>
                  <p className="mt-2">{room.description}</p>
                  <div className="flex items-center justify-center gap-4 mt-6">
                    <span className="text-yellow-600 font-semibold group-hover:text-yellow-400">
                      {room.price}
                    </span>
                    <button className="bg-black text-white px-4 py-2 font-semibold rounded group-hover:bg-yellow-600 transition">
                      BOOK NOW
                    </button>
                  </div>
                </div>
                {/* Image */}
                <img
                  src={room.image}
                  alt={room.title}
                  className="w-full h-60 object-cover"
                />
              </>
            )}

            {/* Card 2 = image first, content second */}
            {index === 1 && (
              <>
                {/* Image */}
                <img
                  src={room.image}
                  alt={room.title}
                  className="w-full h-60 object-cover"
                />
                {/* Content */}
                <div className="p-6 text-center group hover:bg-black hover:text-white transition duration-500">
                  <h3 className="text-2xl font-semibold">{room.title}</h3>
                  <p className="mt-2">{room.description}</p>
                  <div className="flex items-center justify-center gap-4 mt-6">
                    <span className="text-yellow-600 font-semibold group-hover:text-yellow-400">
                      {room.price}
                    </span>
                    <button className="bg-black text-white px-4 py-2 font-semibold rounded group-hover:bg-yellow-600 transition">
                      BOOK NOW
                    </button>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        ))}
      </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {rooms.map((room, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg rounded-md overflow-hidden"
            initial={{ rotateY: -90, opacity: 0 }}   // ⬅️ rotateX se rotateY me badla
            whileInView={{ rotateY: 0, opacity: 1 }} // ⬅️ ab left-to-right hoga
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Card 1 & 3 = content first, image second */}
            {(index === 0 || index === 2) && (
              <>
                {/* Content */}
                <div className="p-6 text-center group hover:bg-black hover:text-white transition duration-500">
                  <h3 className="text-2xl font-semibold">{room.title}</h3>
                  <p className="mt-2">{room.description}</p>
                  <div className="flex items-center justify-center gap-4 mt-6">
                    <span className="text-yellow-600 font-semibold group-hover:text-yellow-400">
                      {room.price}
                    </span>
                    <button className="bg-black text-white px-4 py-2 font-semibold rounded group-hover:bg-yellow-600 transition">
                      BOOK NOW
                    </button>
                  </div>
                </div>
                {/* Image */}
                <img
                  src={room.image}
                  alt={room.title}
                  className="w-full h-60 object-cover"
                />
              </>
            )}

            {/* Card 2 = image first, content second */}
            {index === 1 && (
              <>
                {/* Image */}
                <img
                  src={room.image}
                  alt={room.title}
                  className="w-full h-60 object-cover"
                />
                {/* Content */}
                <div className="p-6 text-center group hover:bg-black hover:text-white transition duration-500">
                  <h3 className="text-2xl font-semibold">{room.title}</h3>
                  <p className="mt-2">{room.description}</p>
                  <div className="flex items-center justify-center gap-4 mt-6">
                    <span className="text-yellow-600 font-semibold group-hover:text-yellow-400">
                      {room.price}
                    </span>
                    <button className="bg-black text-white px-4 py-2 font-semibold rounded group-hover:bg-yellow-600 transition">
                      BOOK NOW
                    </button>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
