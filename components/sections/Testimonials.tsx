"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "They didn't just capture our wedding, they captured every emotion we felt that day.",
    couple: "Aarav & Ananya",
  },
  {
    quote:
      "Watching our wedding film felt like reliving the most beautiful day of our lives.",
    couple: "Rohan & Priya",
  },
  {
    quote:
      "Every frame felt cinematic, elegant, and deeply personal.",
    couple: "Karan & Meera",
  },
  
];

export default function Testimonials() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-40">
      {/* <h2 className="font-heading text-5xl md:text-7xl font-light mb-16"> */}
      <h2 className="font-heading text-5xl md:text-7xl font-light text-center mb-20">
        Kind Words
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((item) => (
          <motion.div
            key={item.couple}
            // whileHover={{ y: -10 }}
            whileHover={{
            y: -10,
            scale: 1.03,
}}
            // className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm"
            className="p-8 rounded-3xl bg-gradient-to-b from-white/10 to-white/5 border border-white/10 backdrop-blur-md"
          >
            <p className="text-xl mb-4">★★★★★</p>
            <p className="text-lg leading-relaxed text-zinc-300">
              "{item.quote}"
            </p>

            
            <p className="mt-6 text-white font-medium">
              — {item.couple}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}