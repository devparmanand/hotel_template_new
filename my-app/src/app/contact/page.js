import React from "react";

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section
  className="relative min-h-screen bg-cover bg-center flex flex-col justify-center"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80')",
  }}
>
  {/* Overlay with gradient */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60"></div>

  {/* Hero Content (centered breadcrumb + heading only) */}
  <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-6 min-h-[80vh]">
    <p className="uppercase tracking-wide text-sm md:text-base font-light mb-4">
      HOME <span className="mx-2">›</span> CONTACT
    </p>
    <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
        CONTACT US
    </h1>
  </div>

 
</section>
      {/* Contact Section */}
   {/* Contact Section */}
<section className="w-full px-6 md:px-16 py-16 bg-gray-50">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-2xl shadow-xl overflow-hidden">
    {/* Left Side - Contact Info + Form */}
    <div className="p-8 md:p-12 flex flex-col justify-between">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Get in Touch
        </h2>
        <p className="text-gray-600 mb-10 leading-relaxed">
          We’re open for any suggestion or just to have a chat.
        </p>

        {/* Contact Info */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10 text-sm">
          <div>
            <h4 className="font-semibold text-gray-800">ADDRESS:</h4>
            <p className="text-gray-600 mt-1">
              198 West 21th Street,
              <br /> Suite 721 New York NY 10016
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800">EMAIL:</h4>
            <p className="text-gray-600 mt-1">info@yoursite.com</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800">PHONE:</h4>
            <p className="text-gray-600 mt-1">+ 1235 2355 98</p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-gray-800 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-gray-800 focus:outline-none"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="w-full px-4 py-3 border border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-gray-800 focus:outline-none"
          />
          <textarea
            rows="4"
            placeholder="Write your message..."
            className="w-full px-4 py-3 border border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-gray-800 focus:outline-none"
          ></textarea>
          <button
            type="submit"
            className="w-full md:w-auto px-8 py-3 bg-gray-900 text-white rounded-lg font-medium shadow-md hover:bg-gray-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Social Links */}
      <div className="mt-12">
        <h4 className="font-semibold text-gray-800">Follow us</h4>
        <div className="flex flex-wrap gap-6 mt-3 text-gray-600 text-sm">
          <a href="#" className="hover:text-gray-900">
            FACEBOOK
          </a>
          <a href="#" className="hover:text-gray-900">
            TWITTER
          </a>
          <a href="#" className="hover:text-gray-900">
            INSTAGRAM
          </a>
          <a href="#" className="hover:text-gray-900">
            DRIBBBLE
          </a>
        </div>
      </div>
    </div>

    {/* Right Side - Map */}
    <div className="w-full h-[400px] lg:h-auto">
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.9700130702824!2d-73.99802768459327!3d40.742054079328524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259af18d1d7d5%3A0x8f18e7bb02f4d8d1!2s198%20W%2021st%20St%2C%20New%20York%2C%20NY%2010011%2C%20USA!5e0!3m2!1sen!2sin!4v1680523841810!5m2!1sen!2sin"
        width="100%"
        height="100%"
        allowFullScreen=""
        loading="lazy"
        className="border-0 rounded-b-2xl lg:rounded-r-2xl lg:rounded-bl-none"
      ></iframe>
    </div>
  </div>
</section>

    </>
  );
}
