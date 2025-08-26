"use client";

import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-50 bg-black md:bg-transparent">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-white">
          <h1 className="text-2xl font-bold">Unwind</h1>
          <p className="text-xs tracking-widest font-light">HOTEL BOOKING</p>
        </div>

        {/* Desktop Navigation */}
        <nav>
          <ul className="hidden md:flex space-x-8 text-white font-semibold text-sm tracking-wide">
            <li>
              <a href="#home" className="hover:text-yellow-400 transition">
                HOME
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-yellow-400 transition">
                ABOUT
              </a>
            </li>
            <li>
              <a href="#rooms" className="hover:text-yellow-400 transition">
                ROOMS
              </a>
            </li>
            <li>
              <a href="#resto" className="hover:text-yellow-400 transition">
                RESTO & BAR
              </a>
            </li>
            <li>
              <a href="#blog" className="hover:text-yellow-400 transition">
                BLOG
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-yellow-400 transition">
                CONTACT
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden text-white flex items-center space-x-1 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="text-2xl">☰</span>
          <span className="uppercase text-xs font-light tracking-wider">Menu</span>
        </div>
      </div>

      {/* Mobile Dropdown with smooth toggle */}
      <div
        className={`md:hidden bg-black text-white overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-4 space-y-3">
          <a href="#home" className="block text-sm font-light tracking-wide hover:text-yellow-400">
            HOME
          </a>
          <a href="#about" className="block text-sm font-light tracking-wide hover:text-yellow-400">
            ABOUT
          </a>
          <a href="#rooms" className="block text-sm font-light tracking-wide hover:text-yellow-400">
            ROOMS
          </a>
          <a href="#resto" className="block text-sm font-light tracking-wide hover:text-yellow-400">
            RESTO & BAR
          </a>
          <a href="#blog" className="block text-sm font-light tracking-wide hover:text-yellow-400">
            BLOG
          </a>
          <a href="#contact" className="block text-sm font-light tracking-wide hover:text-yellow-400">
            CONTACT
          </a>
        </div>
      </div>
    </header>
  );
}
