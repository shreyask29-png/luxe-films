"use client";

import { useState } from "react";

export default function FilmModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-4xl">
          ▶
        </div>
      </button>

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
              className="w-full h-full object-cover"
            >
              <source src="/videos/demo.mp4" type="video/mp4" />
            </video>

            {/* <iframe
               className="w-full h-full"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1"
              title="Wedding Film"
              allow="autoplay; fullscreen"
              allowFullScreen
              /> */}

            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-white text-3xl"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}