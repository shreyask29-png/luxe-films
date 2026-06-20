// "use client";

// import { motion, useScroll, useTransform } from "framer-motion";


import Reveal from "@/components/Reveal";
import FilmModal from "@/components/FilmModal";
import Image from "next/image";
import Link from "next/link";


const stories = {
  "aarav-ananya": {
  title: "Aarav & Ananya",
  location: "Goa, India",
  hero: "/images/story1.jpg",
  detailImage: "/images/story1.jpg",

 gallery: [
    "/images/story1.jpg",
    "/images/story1.jpg",
    "/images/story1.jpg",
  ],

   guests: "250 Guests",
  duration: "3 Days",
  venue: "Beach Wedding",
  year: "2025",

  experience:
    "A celebration wrapped in golden sunsets, ocean breeze and timeless emotions.",

  story:
    "Some love stories are written quietly. Others are celebrated beneath golden sunsets, surrounded by family, laughter and unforgettable moments. Aarav and Ananya's wedding in Goa was a beautiful blend of intimacy, emotion and timeless elegance.",

  testimonial:
    "Luxe Films didn't just capture our wedding. They preserved every feeling, every glance and every emotion.",

  filmMeta: "Goa • Wedding Film • 4 Min",
},

  "rohan-priya": {
  title: "Rohan & Priya",
  location: "Udaipur, India",
  hero: "/images/story2.jpg",
  detailImage: "/images/story2.jpg",

   gallery: [
    "/images/story1.jpg",
    "/images/story1.jpg",
    "/images/story1.jpg",
  ],

  guests: "400 Guests",
  duration: "2 Days",
  venue: "Royal Palace",
  year: "2025",

  experience:
    "Royal palaces, candlelit evenings and a celebration filled with elegance.",

  story:
    "Set against the timeless beauty of Udaipur, Rohan and Priya's wedding blended tradition with luxury. Every moment felt cinematic, from the grand entrances to the quiet glances shared beneath the palace lights.",

  testimonial:
    "Every frame felt like a movie scene. We relive our wedding every time we watch it.",

  filmMeta: "Udaipur • Wedding Film • 5 Min",
},

 "karan-meera": {
  title: "Karan & Meera",
  location: "Jaipur, India",
  hero: "/images/story3.jpg",
  detailImage: "/images/story3.jpg",

   gallery: [
    "/images/story1.jpg",
    "/images/story1.jpg",
    "/images/story1.jpg",
  ],

  guests: "300 Guests",
  duration: "3 Days",
  venue: "Heritage Wedding",
  year: "2024",

  experience:
    "A vibrant celebration of culture, color and unforgettable family moments.",

  story:
    "Surrounded by the timeless beauty of Jaipur, Karan and Meera's wedding was a perfect blend of tradition and modern romance. From joyful rituals to grand celebrations beneath the palace lights, every moment reflected their journey together and the love shared by their families.",

  testimonial:
    "The film captured not just our wedding day, but the energy, laughter and emotions of everyone who celebrated with us.",

  filmMeta: "Jaipur • Wedding Film • 4 Min",
},
};

export default async function StoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {

  const { slug } = await params;

  const story = stories[slug as keyof typeof stories];

  if (!story) {
    return <div>Story not found</div>;
  }

  const nextStories = {
  "aarav-ananya": {
    slug: "rohan-priya",
    title: "Rohan & Priya",
  },

  "rohan-priya": {
    slug: "karan-meera",
    title: "Karan & Meera",
  },

  "karan-meera": {
    slug: "aarav-ananya",
    title: "Aarav & Ananya",
  },
};

const nextStory =
  nextStories[slug as keyof typeof nextStories];

  return (
    <main className="bg-black text-white">

      {/* Hero */}
      <section className="relative h-screen">

        <Image
          src={story.hero}
          alt="Wedding Story"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 flex items-center justify-center">

          <div className="text-center">

            <p className="uppercase tracking-[6px] text-zinc-300 mb-4">
              {story.location}
            </p>

            <h1 className="font-heading text-6xl md:text-8xl font-light">
              {story.title}
            </h1>

          </div>

        </div>

      </section>

      {/* Story Statistics */}
<section className="max-w-6xl mx-auto px-8 py-20">

  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

    <div>
      <p className="text-zinc-500 uppercase tracking-[4px] text-sm">
        Guests
      </p>
      <p className="mt-3 text-xl">
        {story.guests}
      </p>
    </div>

    <div>
      <p className="text-zinc-500 uppercase tracking-[4px] text-sm">
        Duration
      </p>
      <p className="mt-3 text-xl">
        {story.duration}
      </p>
    </div>

    <div>
      <p className="text-zinc-500 uppercase tracking-[4px] text-sm">
        Venue
      </p>
      <p className="mt-3 text-xl">
        {story.venue}
      </p>
    </div>

    <div>
      <p className="text-zinc-500 uppercase tracking-[4px] text-sm">
        Year
      </p>
      <p className="mt-3 text-xl">
        {story.year}
      </p>
    </div>

  </div>

</section>

      {/* NEW SECTION */}
    <Reveal>
        <section className="py-40 max-w-5xl mx-auto text-center px-8">

                <p className="uppercase tracking-[8px] text-zinc-500 mb-8 text-sm">
                The Experience
                </p>

           <h2 className="font-heading text-5xl md:text-7xl leading-[1.15] font-light">
             {story.experience}
           </h2>
        </section>
    </Reveal>
    <Reveal>
        <section className="max-w-7xl mx-auto px-8 pb-40">

  <div className="grid md:grid-cols-2 gap-24 items-center">

    <div>
      <h3 className="font-heading text-4xl md:text-5xl mb-8">
        Their Story
      </h3>

      <p className="text-zinc-400 leading-loose text-lg">
            {story.story}
        </p>
    </div>

    <div className="relative h-[700px] rounded-[40px] overflow-hidden">
      <Image
        src={story.detailImage}
        alt=""
        fill
        className="object-cover"
      />
    </div>

  </div>

</section>
</Reveal>

      {/* Story
      <section className="max-w-4xl mx-auto px-8 py-32">

        <h2 className="font-heading text-5xl mb-12">
          Their Story
        </h2>

        <p className="text-zinc-300 text-xl leading-relaxed">
          Some love stories are written quietly.
          Others are celebrated beneath golden sunsets,
          surrounded by family, laughter and unforgettable moments.
          Aarav and Ananya's wedding in Goa was a beautiful blend of
          intimacy, emotion and timeless elegance.
        </p>

      </section> */}
        <section className="px-8 pb-40">

  <div className="relative h-[85vh] rounded-[40px] overflow-hidden">

    <Image
      src={story.detailImage}
      alt="Wedding Moment"
      fill
      className="object-cover"
    />

    <div className="absolute inset-0 bg-black/20" />

  </div>

</section>
<section className="max-w-5xl mx-auto px-8 py-32 text-center">

  <h2 className="font-heading text-5xl md:text-7xl leading-tight font-light">
    {story.experience}
  </h2>

</section>
<section className="max-w-7xl mx-auto px-8 py-40">

  <div className="text-center mb-16">

    <p className="uppercase tracking-[8px] text-zinc-500 mb-4">
      Featured Film
    </p>

    <h2 className="font-heading text-5xl md:text-7xl font-light">
      The Film
    </h2>

  </div>

<div className="absolute top-8 left-8 z-50">
  {/* <Link
    href="/"
    className="font-heading text-xl tracking-[3px] text-white"
  >
    LUXE FILMS
  </Link> */}
  {/* <Link
  href="/"
  className="font-heading text-2xl tracking-[0.25em] text-white uppercase hover:opacity-80 transition duration-500"
>
  LUXE FILMS
</Link> */}
 <Link
  // href="/"
  href="/#stories"
  className="group"
>
  <div className="flex items-center gap-3">

    <div className="w-10 h-px bg-white/60 transition-all duration-500 group-hover:w-16"></div>

    <span className="font-heading text-xl tracking-[0.35em] uppercase transition-all duration-500 group-hover:translate-x-1">
      Luxe Films
    </span>

  </div>
</Link>
</div>

{/* Hero */}
  <div className="relative h-[80vh] rounded-[40px] overflow-hidden group cursor-pointer">

    <Image
      src={story.hero}
      alt={story.title}
      fill
      className="object-cover transition duration-1000 group-hover:scale-105"
    />

    <div className="absolute inset-0 bg-black/40" />

    <div className="absolute inset-0 flex items-center justify-center">

      {/* <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-4xl">
        ▶
      </div> */}
      <FilmModal />

    </div>

  </div>

</section>
      {/* Gallery */}
      <div className="grid md:grid-cols-3 gap-6">

  {story.gallery.map((image, index) => (

    <div
      key={index}
      className="relative h-[500px] rounded-3xl overflow-hidden"
    >

      <Image
        src={image}
        alt=""
        fill
        className="object-cover"
      />

    </div>

  ))}

</div>
    <Reveal>
      <section className="max-w-5xl mx-auto px-8 py-40 text-center">

  <div className="text-4xl mb-8">
    ★★★★★
  </div>

  <blockquote className="font-heading text-4xl md:text-6xl leading-tight font-light">

    {story.testimonial}

  </blockquote>

  <p className="mt-12 uppercase tracking-[6px] text-zinc-500">
    Aarav & Ananya
  </p>

</section>
</Reveal>
<section className="py-32 text-center">

  <p className="uppercase tracking-[8px] text-zinc-500 mb-6">
    Continue Watching
  </p>

  <a
    href={`/stories/${nextStory.slug}`}
    className="group inline-block"
  >
    <h2 className="font-heading text-5xl md:text-7xl font-light transition duration-500 group-hover:translate-x-4">
      Next Story →
    </h2>

    <p className="mt-4 text-zinc-400 uppercase tracking-[4px]">
      {nextStory.title}
    </p>
  </a>

</section>



    </main>
  );
}