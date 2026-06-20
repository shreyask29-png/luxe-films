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
    // href="mailto:hello@luxefilms.com"
    href="mailto:shreyaskeshapur89@gmail.com"
    className="block text-2xl md:text-2xl font-light hover:text-zinc-300 transition"
  >
    shreyaskeshapur89@gmail.com
  </a>

  <a
    href="tel:+917338101850"
    className="block text-2xl md:text-2xl font-light hover:text-zinc-300 transition"
  >
    +91 7338 101 850
  </a>
  {/* <a
  href="https://wa.me/917338101850"
  target="_blank"
  className="block text-2xl md:text-2xl font-light hover:text-zinc-300 transition"
>
  WhatsApp: +91 7338 101 850
</a> */}

  <a
    href="https://www.instagram.com/ishrey029/"
    className="block text-2xl md:text-2xl font-light hover:text-zinc-300 transition"
  >
    @ishrey029
  </a>

</div>
    </section>
  );
}