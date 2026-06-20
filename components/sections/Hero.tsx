"use client";

import { motion } from "framer-motion";


export default function Hero() {
  return (
    <section 
     id="home"
    className="relative h-screen bg-black overflow-hidden"
    >
<video
  autoPlay
  muted
  loop
  playsInline
  className="absolute inset-0 h-full w-full object-cover"
>
  <source src="/videos/hero.mp4" type="video/mp4" />
</video>
      <div className="absolute inset-0 bg-black/40" />
      {/* <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black" /> */}

      <div className="relative z-10 flex h-full items-center justify-center">

        <div className="text-center">

          {/* <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            // className="text-5xl md:text-7xl lg:text-[90px] font-light tracking-[-0.03em] text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.25)]"
            // className=" font heading text-5xl md:text-7xl lg:text-[90px] font-extralight tracking-[-0.04em] leading-[0.9] text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            className="font-heading text-5xl md:text-7xl lg:text-[70px] font-extralight tracking-[-0.04em] leading-[0.9] text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            // className="font-heading text-7xl"
          > */}
          
          <motion.h1
  animate={{ y: [0, -10, 0] }}
  transition={{
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
    
  }}
  className="font-heading text-5xl md:text-7xl lg:text-[70px] font-extralight tracking-[-0.04em] leading-[0.9] text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]"
>
            YOUR LOVE STORY
            DESERVES CINEMA
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-6 tracking-[6px] text-sm md:text-base"
          >
           Capturing timeless wedding stories
           through cinematic films and photography.
          </motion.p>

        </div>

      </div>
    {/* Scroll Indicator */}
    <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
    <div className="h-14 w-8 rounded-full border border-white/40 flex justify-center">
    <div className="mt-2 h-3 w-1 bg-white rounded-full animate-bounce"></div>

    </div>

    </div>

    </section>
  );
}