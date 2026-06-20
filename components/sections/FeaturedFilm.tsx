"use client";

// import FilmModal from "@/components/FilmModal";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";


export default function FeaturedFilm() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    // <section className="max-w-7xl mx-auto px-8 py-40">
    <section className="max-w-[1600px] mx-auto px-8 py-40">

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >

        <p className="uppercase tracking-[8px] text-zinc-500 mb-6">
  Featured Wedding Film
</p>

<h2 className="font-heading text-6xl md:text-8xl font-light mb-16 leading-[1.05]">
  Cinema For
  <br />
  Modern Romantics.
</h2>

        <div className="relative h-[850px] rounded-[40px] overflow-hidden group cursor-pointer">
        {/* <div className="relative h-[800px] rounded-[40px] overflow-hidden group cursor-pointer"></div> */}

          <Image
            src="/images/Couple sunset shot.jpg"
            alt="Featured Wedding Film"
            fill
            className="object-cover transition duration-1000 group-hover:scale-105"
          />

          {/* <div className="absolute inset-0 bg-black/30" /> */}
          {/* <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" /> */}

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

<div className="absolute bottom-16 left-16">

  <p className="uppercase tracking-[6px] text-zinc-300 mb-4 text-sm">
    Goa • Wedding Film • 4 Min
  </p>

  <h3 className="font-heading text-5xl md:text-7xl font-light mb-8">
    Aarav & Ananya
  </h3>

  <button
  onClick={() => setIsOpen(true)}
  className="flex items-center gap-4 group"
>

    {/* {/* <div className="w-16 h-16 rounded-full border border-white/30 backdrop-blur-md flex items-center justify-center text-xl group-hover:scale-110 transition"> */}
    <div className="w-16 h-16 rounded-full border border-white/30 backdrop-blur-md flex items-center justify-center text-xl transition duration-500 group-hover:scale-110">
      ▶ 
    </div>

    <span className="uppercase tracking-[8px] text-zinc-400 mb-6 text-xs">
      Watch Film
    </span>

  </button>

</div>

        </div>

    {isOpen && (
  <div
    className="fixed inset-0 z-[999] bg-black/90 flex items-center justify-center p-8"
    onClick={() => setIsOpen(false)}
  >
    <div
      className="relative w-full max-w-6xl aspect-video bg-black rounded-3xl overflow-hidden"
      onClick={(e) => e.stopPropagation()}
    >

      <video
        controls
        autoPlay
        // className="w-full h-full object-cover"
        className="w-full h-full"
      >
        <source src="/videos/demo.mp4" type="video/mp4" />
      </video>

      <button
        onClick={() => setIsOpen(false)}
        // className="absolute top-4 right-4 text-white text-3xl"
        className="absolute top-6 right-6 w-12 h-12 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white text-xl hover:bg-black/60 transition"
      >
        ✕
      </button>

    </div>
  </div>
)}

      </motion.div>

    </section>
  );
}