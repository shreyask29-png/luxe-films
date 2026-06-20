import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import FeaturedStories from "@/components/sections/FeaturedStories";
import About from "@/components/sections/About";
import PortfolioGrid from "@/components/sections/PortfolioGrid";
import Testimonials from "@/components/sections/Testimonials";
import Footer from "@/components/layout/Footer";
import BookingCTA from "@/components/sections/BookingCTA";
import Contact from "@/components/sections/Contact";
import WhatsAppButton from "@/components/WhatsAppButton";
import FeaturedFilm from "@/components/sections/FeaturedFilm";
import Tagline from "@/components/sections/Tagline";
import CinematicQuote from "@/components/sections/CinematicQuote";



export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedFilm />                 {/* Featured Film Section */}
      <Tagline />                      {/* Tagline Section */}
      <Stats />
      <FeaturedStories />
      <PortfolioGrid />              {/* Gallery */}
      <CinematicQuote />             {/* Cinematic Quote Section */}
      <About />                     {/* About Luxe Films */}
      <Testimonials />
      <BookingCTA />                       {/* Call to Action */}
      <Contact />                     {/* Contact Form */}
      <Footer />
      <WhatsAppButton />               {/* WhatsApp Contact Button */}
      

    </>
  );
}