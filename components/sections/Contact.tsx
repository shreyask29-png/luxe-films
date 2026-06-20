export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-6xl mx-auto px-8 py-40 text-center"
    >
      <p className="uppercase tracking-[6px] text-zinc-500 mb-4">
        Contact
      </p>

      <h2 className="font-heading text-5xl md:text-7xl font-light leading-tight">
        Let's Create
        <br />
        Something Beautiful
      </h2>
      {/* <a
        href="#contact"
        className="inline-block mt-12 px-10 py-5 rounded-full border border-white/20 bg-white text-black font-medium transition duration-300 hover:scale-105"
    >
        Let's Create Something Timeless
    </a> */}

      <div className="mt-12 space-y-6">

  <a
    href="mailto:hello@luxefilms.com"
    className="block text-2xl md:text-2xl font-light hover:text-zinc-300 transition"
  >
    hello@luxefilms.com
  </a>

  <a
    href="tel:+919999999999"
    className="block text-2xl md:text-2xl font-light hover:text-zinc-300 transition"
  >
    +91 XXXXX XXXXX
  </a>

  <a
    href="#"
    className="block text-2xl md:text-2xl font-light hover:text-zinc-300 transition"
  >
    Instagram
  </a>

</div>
    </section>
  );
}