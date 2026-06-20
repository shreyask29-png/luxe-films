"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-8 py-40">
      <div className="grid lg:grid-cols-2 gap-16 items-center">

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="uppercase tracking-[6px] text-zinc-400 mb-4">
            ABOUT LUXE FILMS
          </p>

          <h2 className="font-heading text-5xl md:text-7xl font-light leading-[0.95]">
            We create wedding films that feel timeless,
            emotional and deeply personal
          </h2>

          <p className="mt-8 text-zinc-400 text-lg leading-relaxed max-w-xl">
            Every wedding tells a unique story.
            Our approach blends cinematic filmmaking,
            artistic photography and genuine emotion to
            create timeless memories that can be cherished
            for generations.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative h-[600px] rounded-3xl overflow-hidden"
        >
          <Image
            src="/images/about.jpg"
            alt="Wedding Couple"
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/10" />
        </motion.div>

      </div>
    </section>
  );
}