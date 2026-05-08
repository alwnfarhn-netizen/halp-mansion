'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-background">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10" /> {/* Dark Overlay */}
        <img 
          src="https://images.unsplash.com/photo-1543852786-1cf6624b9987?q=80&w=2000&auto=format&fit=crop" 
          alt="Cinematic Dark Fashion" 
          className="w-full h-full object-cover object-center grayscale opacity-70"
        />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="relative z-20 text-center px-4"
      >
        <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black text-gray-100 uppercase tracking-widest mix-blend-difference">
          HALP <br /> MANSION
        </h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
          className="mt-6 text-sm md:text-base text-gray-400 tracking-widest uppercase font-sans"
        >
          Exclusive Underground Streetwear
        </motion.p>

        <motion.button 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeInOut" }}
          className="mt-12 px-8 py-4 bg-primary text-[#050505] font-bold uppercase tracking-wider text-xs md:text-sm transition-all duration-300 hover:bg-primary-dark hover:text-gray-100"
        >
          Enter the Basement
        </motion.button>
      </motion.div>
    </section>
  );
}
