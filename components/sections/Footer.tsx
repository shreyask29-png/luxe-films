export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="max-w-7xl mx-auto px-8 py-16">

        <h3 className="font-heading text-5xl font-light">
          LUXE FILMS
        </h3>

        <p className="mt-4 text-zinc-400 max-w-md">
          Capturing timeless wedding stories through
          cinematic films and photography.
        </p>

        <div className="mt-8 flex gap-6 text-zinc-400">
          <a
            href="#stories"
            className="transition duration-300 hover:opacity-60"
        >
            Stories
        </a>
          <a
            href="#gallery"
            className="transition duration-300 hover:opacity-60"
        >
            Gallery
            </a>
          <a
            href="#contact"
            className="transition duration-300 hover:opacity-60"
          >
            Contact
          </a>
        </div>

        <p className="mt-10 text-sm text-zinc-500">
          © 2026 Luxe Films. All rights reserved.
        </p>

      </div>
    </footer>
  );
}