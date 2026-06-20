"use client";


import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  { src: "/images/Couple sunset shot.jpg", height: "h-[700px]" }, // Couple Sunset
 { src: "/images/Bride portrait.jpg", height: "h-[500px]" }, // Bride Portrait
  { src: "/images/Wedding ceremony.jpg", height: "h-[650px]" }, // Ceremony
  { src: "/images/Close-up details.jpg", height: "h-[400px]" }, // Details
  { src: "/images/Family momentss.jpg", height: "h-[550px]" }, // Family
  { src: "/images/Reception.jpg", height: "h-[450px]" }, // Reception
  { src: "/images/Destination wedding.jpg", height: "h-[700px]" }, // Destination
];

export default function PortfolioGrid() {
        const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="max-w-7xl mx-auto px-8 py-40">
    {/* // <section id="gallery" className="max-w-[1600px] mx-auto px-8 py-40"> */}
    {/* // <section id="gallery" className="w-full px-12 py-40"> */}

      <h2 className="font-heading text-5xl md:text-7xl font-light mb-16 text-center">
          Wedding Gallery
      </h2>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> */}

        {/* {images.map((image, index) => (
          <div
            key={index}
            className={`relative ${image.height} overflow-hidden rounded-3xl group mb-6 break-inside-avoid cursor-pointer`}
          > */}
        {images.map((image, index) => (
      <div
           key={index}
           onClick={() => setSelectedImage(image.src)}
           className={`relative ${image.height} overflow-hidden rounded-3xl group mb-6 break-inside-avoid cursor-pointer`}
    >
        {/* {images.map((image, index) => (
  <div
    key={index}
    className={`
      relative
      ${image.height}
      overflow-hidden
      rounded-3xl
      group
      ${image.src.includes("Family") ? "lg:col-span-2" : ""}
    `}
  > */}
         <Image
            src={image.src}
            alt="Wedding"
            fill
            className="object-cover object-center transition duration-1000 ease-out group-hover:scale-110"
        />

            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition duration-500" />
          </div>
        ))}

      </div>

        <AnimatePresence>
  {selectedImage && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setSelectedImage(null)}
      className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-6"
    >
      <button
        className="absolute top-8 right-8 text-white text-4xl"
        onClick={() => setSelectedImage(null)}
      >
        ×
      </button>

      <div
        className="relative w-full max-w-6xl h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={selectedImage}
          alt="Wedding"
          fill
          className="object-contain"
        />
      </div>
    </motion.div>
  )}
</AnimatePresence>

    </section>
  );
}