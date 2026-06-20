"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function CinematicQuote() {
  return (
    <section className="relative h-[700px] overflow-hidden">

      <Image
        src="/images/Cinematic.jpg"
        alt="Wedding"
        fill
        className="object-cover"
      />

      {/* <div className="absolute inset-0 bg-black/50" /> */}
      {/* <div className="absolute inset-0 bg-black/70" /> */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

      {/* <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="absolute inset-0 flex items-center justify-center px-8"
      > */}
      <motion.div
            animate={{ scale: [1, 1.08] }}
            transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse",
            
        }}
        className="absolute inset-0 flex items-center justify-center px-8"
>
        <h2 className="font-heading text-4xl md:text-6xl font-light text-center leading-tight max-w-5xl">
          Crafted with emotion.
          <br />
          Captured for generations.
          .
        </h2>
      </motion.div>

    </section>
  );
}