"use client";

import { motion } from "framer-motion";

export default function Tagline() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-32">

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="font-heading text-5xl md:text-6xl font-light leading-tight text-center"
      >
        We create wedding films
        <br />
        that feel timeless,
        <br />
        emotional and deeply personal.
      </motion.h2>

    </section>
  );
}