"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="max-w-6xl mx-auto px-8 py-40 text-center">

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-heading text-5xl md:text-7xl font-light leading-tight"
      >
        Ready To Tell
        <br />
        Your Story?
      </motion.h2>

      <p className="mt-8 text-zinc-400 text-lg max-w-2xl mx-auto">
        Let's create timeless wedding films and photographs
        that you'll treasure for generations.
      </p>

      <a
  href="#contact"
  className="
    inline-block
    mt-12
    px-10
    py-5
    rounded-full
    border border-white/20
    bg-white text-black
    font-medium
    transition duration-300
    hover:scale-105
  "
>
  Let's Create Something Timeless
</a>

    </section>
  );
}