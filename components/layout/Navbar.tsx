"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="fixed top-6 left-0 right-0 z-50">
  <div
    className={`mx-auto max-w-5xl flex items-center justify-between px-8 py-5 rounded-full transition-all duration-500
    ${
      scrolled
        ? "bg-white/10 backdrop-blur-xl border border-white/15 shadow-2xl"
        : "bg-transparent"
    }`}
  >

        {/* <h1 className="font-heading text-2xl tracking-[6px] font-light transition duration-300 hover:opacity-70 cursor-pointer">
          LUXE FILMS
        </h1> */}
        <a
          href="#home"
          className="font-heading text-2xl tracking-[6px] font-light transition duration-300 hover:opacity-70"
        >
          LUXE FILMS
        </a>

       <div className="hidden md:flex gap-8 uppercase text-xs tracking-[3px] text-zinc-300">
        <a href="#home" className="transition duration-300 hover:opacity-60">
          Home
        </a>
        <a href="#stories" className="transition duration-300 hover:opacity-60">
          Stories
        </a>
        <a href="#gallery" className="transition duration-300 hover:opacity-60">
          Gallery
        </a>
        <a href="#contact" className="transition duration-300 hover:opacity-60">
          Contact
        </a>
       </div>

      </div>
    </nav>
  );
}