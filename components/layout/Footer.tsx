export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-32">
      <div className="max-w-7xl mx-auto px-8 py-16">

        <h2 className="text-3xl font-light">
          LUXE FILMS
        </h2>

        <p className="mt-4 text-zinc-400">
          Wedding Films • Photography • Storytelling
        </p>

        <div className="flex gap-8 mt-8 text-zinc-400">
          <a href="#">Instagram</a>
          <a href="#">YouTube</a>
          <a href="#">Contact</a>
        </div>

        <div className="mt-12 text-sm text-zinc-500">
          © 2026 Luxe Films. All rights reserved.
        </div>

      </div>
    </footer>
  );
}