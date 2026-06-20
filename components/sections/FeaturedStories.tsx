"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";


// const stories = [
//   {
//     title: "Aarav & Ananya",
//     location: "Goa",
//   },
//   {
//     title: "Rohan & Priya",
//     location: "Udaipur",
//   },
//   {
//     title: "Karan & Meera",
//     location: "Jaipur",
//   },
// ];
const stories = [
  {
    title: "Aarav & Ananya",
    location: "Goa",
    slug: "aarav-ananya",
  },
  {
    title: "Rohan & Priya",
    location: "Udaipur",
    slug: "rohan-priya",
  },
  {
    title: "Karan & Meera",
    location: "Jaipur",
    slug: "karan-meera",
  },
];

export default function FeaturedStories() {
  return (
    <section 
    id="stories" 
    className="max-w-7xl mx-auto px-8 py-32">

      <motion.h2
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-heading text-5xl md:text-7xl font-light mb-16"
      >
        Featured Stories
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8">

        {stories.map((story, index) => (
    <Link
      key={story.slug}
      href={`/stories/${story.slug}`}
    >
      <motion.div
        whileHover={{ y: -10 }}
        className="group cursor-pointer"
      >
            <div className="relative h-[500px] rounded-3xl overflow-hidden">

                <Image
                    src={`/images/story${index + 1}.jpg`}
                    alt={story.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/30" />

            </div>

            <h3 className="mt-5 text-2xl">
              {story.title}
            </h3>

            <p className="text-zinc-400">
              {story.location}
            </p>
          </motion.div>
          </Link>
        ))}

      </div>

    </section>
  );
}