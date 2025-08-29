"use client";
import React from "react";
import { motion } from "framer-motion";

export default function RecentBlog1() {
  const blogs = [
    {
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      title: "Best Hotel Near Beach in Hawaii",
      date: "Dec. 23, 2020",
      comments: 3,
      desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      title: "Luxury Resorts for Family Trips",
      date: "Jan. 5, 2021",
      comments: 5,
      desc: "Explore luxury resorts where you and your family can relax and enjoy the perfect vacation spot.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
      title: "Top 10 Romantic Getaways",
      date: "Feb. 14, 2021",
      comments: 8,
      desc: "Celebrate love with our curated list of the most romantic destinations around the globe.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      title: "Budget-Friendly Hotel Stays",
      date: "Mar. 10, 2021",
      comments: 2,
      desc: "Discover affordable hotels that don’t compromise on comfort or quality of service.",
    },

    {
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      title: "Best Hotel Near Beach in Hawaii",
      date: "Dec. 23, 2020",
      comments: 3,
      desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      title: "Luxury Resorts for Family Trips",
      date: "Jan. 5, 2021",
      comments: 5,
      desc: "Explore luxury resorts where you and your family can relax and enjoy the perfect vacation spot.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
      title: "Top 10 Romantic Getaways",
      date: "Feb. 14, 2021",
      comments: 8,
      desc: "Celebrate love with our curated list of the most romantic destinations around the globe.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      title: "Budget-Friendly Hotel Stays",
      date: "Mar. 10, 2021",
      comments: 2,
      desc: "Discover affordable hotels that don’t compromise on comfort or quality of service.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      {/* Heading */}
      <div className="text-center mb-12">
        <p className="uppercase text-sm tracking-widest text-yellow-600 mb-2">
          Our Blog
        </p>
        <h2 className="text-4xl font-bold text-gray-800">Recent Blog</h2>
      </div>

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {blogs.map((blog, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow group"
            initial={{ rotateY: -90, opacity: 0 }}
            whileInView={{ rotateY: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Image */}
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-56 object-cover"
            />

            {/* Content */}
            <div className="p-6 text-center group-hover:bg-black group-hover:text-white transition duration-500">
              <p className="text-xs uppercase text-gray-500 group-hover:text-gray-300 mb-2">
                <span className="mr-2">Admin</span> |{" "}
                <span className="mx-2">{blog.date}</span> |{" "}
                <span className="ml-2 text-yellow-600 group-hover:text-yellow-400">
                  {blog.comments} Comments
                </span>
              </p>

              <h3 className="font-semibold text-lg mb-2 group-hover:text-yellow-400 transition">
                {blog.title}
              </h3>
              <p className="text-gray-600 text-sm group-hover:text-gray-300">
                {blog.desc}
              </p>

              <button className="mt-4 bg-black text-white px-4 py-2 font-semibold rounded group-hover:bg-yellow-600 transition">
                READ MORE
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
