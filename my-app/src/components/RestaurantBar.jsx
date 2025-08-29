"use client";
import React from "react";

export default function RestaurantBar() {
  const menu = [
    { title: "Grilled Beef with potatoes", price: "$20.00", image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=80&q=80" },
    { title: "Grilled Beef with potatoes", price: "$20.00", image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=80&q=80" },
    { title: "Grilled Beef with potatoes", price: "$20.00", image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=80&q=80" },
    { title: "Grilled Beef with potatoes", price: "$20.00", image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=80&q=80" },
    { title: "Grilled Beef with potatoes", price: "$29.00", image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=80&q=80" },
    { title: "Grilled Beef with potatoes", price: "$29.00", image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=80&q=80" },
    { title: "Grilled Beef with potatoes", price: "$29.00", image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=80&q=80" },
    { title: "Grilled Beef with potatoes", price: "$29.00", image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=80&q=80" },
    { title: "Grilled Beef with potatoes", price: "$29.00", image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=80&q=80" },
    { title: "Grilled Beef with potatoes", price: "$29.00", image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=80&q=80" },
    { title: "Grilled Beef with potatoes", price: "$29.00", image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=80&q=80" },
    { title: "Grilled Beef with potatoes", price: "$29.00", image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=80&q=80" },
   ];

  return (
    <section className="py-16 bg-gray-50">
      {/* 🔥 Top Center Heading */}
      <div className="text-center mb-12">
        <p className="text-sm uppercase text-yellow-600 tracking-widest mb-2">
          Resto & Bar
        </p>
        <h2 className="text-4xl font-bold">Restaurant & Bar</h2>
      </div>

      {/* Content Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch px-6">
        
        {/* Left Image */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80"
            alt="Restaurant"
            className="rounded-lg shadow-lg w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="bg-yellow-600 p-4 rounded-lg shadow-md">
              <span className="text-white text-xl">🍽️</span>
            </div>
          </div>
        </div>

        {/* Right Menu */}
        <div className="flex flex-col justify-between">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {menu.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 border rounded-lg transition duration-300 group hover:bg-black"
              >
                {/* Left */}
                <div className="flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <h3 className="font-semibold group-hover:text-white">
                    {item.title}
                  </h3>
                </div>
                {/* Right */}
                <span className="text-yellow-600 font-semibold group-hover:text-yellow-400">
                  {item.price}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
