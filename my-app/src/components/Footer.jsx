"use client";
import React from "react";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaMapMarkerAlt, FaPhoneAlt, FaPaperPlane } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-14">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand + About */}
        <div>
          <h2 className="text-white text-2xl font-bold">
            Unwind <span className="block text-sm font-normal">Hotel Booking</span>
          </h2>
          <p className="mt-4 text-sm">
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </p>
          <div className="flex gap-3 mt-5">
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center bg-gray-800 hover:bg-yellow-600 rounded-md transition"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center bg-gray-800 hover:bg-yellow-600 rounded-md transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center bg-gray-800 hover:bg-yellow-600 rounded-md transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>› Free Wifi</li>
            <li>› Easy Booking</li>
            <li>› Restaurant</li>
            <li>› Swimming Pool</li>
            <li>› Beauty & Health</li>
            <li>› 60" Flatscreen TV</li>
            <li>› Cold Aircondition</li>
            <li>› Help & Support</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>› Home</li>
            <li>› About</li>
            <li>› Rooms</li>
            <li>› Resto & Bar</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Have a Questions?</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-yellow-600 mt-1" />
              <span>203 Fake St. Mountain View, San Francisco, California, USA</span>
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-yellow-600" />
              <span>+2 392 3929 210</span>
            </li>
            <li className="flex items-center gap-3">
              <FaPaperPlane className="text-yellow-600" />
              <span>info@yourdomain.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500">
        Copyright ©2025 All rights reserved | This template is made with ❤️ by{" "}
        <span className="text-yellow-600">Colorlib</span>
      </div>
    </footer>
  );
}
