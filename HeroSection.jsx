"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { heroImages } from "./heroImages";

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-white">
      
      {/* Animated Image Background */}
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={heroImages[index]}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.4, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* Content Layer */}
      <div className="relative z-10 text-center px-6">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-6xl md:text-8xl font-black bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-fuchsia-500 to-blue-500"
        >
          SERVICE FLOW
        </motion.h1>

        <p className="mt-4 text-gray-700 text-xl max-w-2xl mx-auto">
          Manage your business with the most vibrant booking tool on the web.
        </p>

        <div className="mt-8 flex gap-4 justify-center">
          <button className="px-8 py-3 bg-gradient-to-r from-orange-500 to-fuchsia-600 text-white rounded-full font-bold hover:shadow-[0_0_20px_rgba(255,0,128,0.5)] transition-all">
            Get Started
          </button>

          <button className="px-8 py-3 border-2 border-cyan-400 text-cyan-600 rounded-full font-bold hover:bg-cyan-50 transition-all">
            View Services
          </button>
        </div>
      </div>
    </section>
  );
}
