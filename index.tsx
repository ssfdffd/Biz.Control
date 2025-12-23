"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// 1. UPDATE THESE WITH YOUR SUPABASE PUBLIC URLS
const heroImages = [
  "https://your-id.supabase.co/storage/v1/object/public/hero-images/1.jpg",
  "https://your-id.supabase.co/storage/v1/object/public/hero-images/2.jpg",
  "https://your-id.supabase.co/storage/v1/object/public/hero-images/3.jpg",
  "https://your-id.supabase.co/storage/v1/object/public/hero-images/4.jpg",
  "https://your-id.supabase.co/storage/v1/object/public/hero-images/5.jpg",
];

export default function HomePage() {
  const [index, setIndex] = useState(0);

  // Auto-rotate hero images
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white font-sans text-slate-900">
      
      {/* --- SECTION 1: DYNAMIC HERO --- */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={heroImages[index]}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.5, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        
        {/* Electric Blue Glow & Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-white" />
        
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black tracking-tighter text-white"
          >
            BOOK THE <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF8C00] via-[#FF0080] to-[#00FFFF]">
              FUTURE
            </span>
          </motion.h1>
          <p className="mt-6 text-white/80 text-lg md:text-xl max-w-xl mx-auto">
            The ultimate platform for service providers. Stunning UI. Seamless Bookings.
          </p>
          <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">
            <button className="px-10 py-4 bg-gradient-to-r from-[#FF8C00] to-[#FF0080] text-white rounded-full font-bold shadow-lg hover:scale-105 transition-transform">
              Join as a Business
            </button>
            <button className="px-10 py-4 border-2 border-[#00FFFF] text-[#00FFFF] rounded-full font-bold backdrop-blur-sm hover:bg-[#00FFFF] hover:text-black transition-all">
              Explore Services
            </button>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: ABOUT US (BENTO GRID) --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold italic">About Our Vision_</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
          <div className="md:col-span-2 md:row-span-2 bg-slate-900 rounded-[2rem] p-10 text-white flex flex-col justify-end relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF0080] blur-[80px]" />
            <h3 className="text-3xl font-bold mb-4">Empowering Growth</h3>
            <p className="opacity-70">We built this for the dreamers who need a professional digital storefront without the headache of coding.</p>
          </div>
          <div className="md:col-span-2 bg-[#FF8C00] rounded-[2rem] p-8 flex flex-col justify-center">
            <h3 className="text-5xl font-black text-white italic">99.9%</h3>
            <p className="text-white/80 font-bold">Uptime for your business bookings.</p>
          </div>
          <div className="bg-[#00FFFF] rounded-[2rem] p-8 flex items-center justify-center">
            <span className="text-black font-black text-xl">FAST PAY</span>
          </div>
          <div className="bg-slate-100 rounded-[2rem] p-8 flex items-center justify-center">
             <p className="text-slate-500 font-medium text-center">Trusted by 2k+ companies</p>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: VIEW SERVICES (PUBLIC ACCESS) --- */}
      <section className="py-24 bg-slate-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <p className="text-[#FF0080] font-bold tracking-widest uppercase text-sm">Marketplace</p>
              <h2 className="text-5xl font-black">Featured Services</h2>
            </div>
            <button className="text-slate-500 underline font-bold">View all</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Example Business Card */}
            {[1, 2, 3].map((i) => (
              <div key={i} className="group bg-white rounded-[2.5rem] p-8 shadow-sm hover:shadow-2xl transition-all border border-slate-100">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FF8C00] to-[#FF0080] rounded-2xl mb-6 group-hover:rotate-12 transition-transform" />
                <h4 className="text-2xl font-bold">Elite Consulting {i}</h4>
                <p className="text-slate-500 mt-2 mb-6">High-performance business strategy and digital scaling.</p>
                <div className="flex justify-between items-center pt-6 border-t border-slate-50">
                  <span className="text-xl font-black">$120/hr</span>
                  <button className="px-6 py-2 bg-black text-white rounded-full text-sm font-bold group-hover:bg-[#00FFFF] group-hover:text-black transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center border-t border-slate-100 text-slate-400 text-sm">
        © 2025 ServiceFlow. Powered by Supabase & Netlify.
      </footer>
    </div>
  );
}
