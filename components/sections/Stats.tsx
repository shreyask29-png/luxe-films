export default function Stats() {
  return (
    <section className="py-32 border-y border-white/10">
      <div className="max-w-6xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">

        <div>
          {/* <h3 className="font-heading text-5xl">150+</h3> */}
         <h3 className="font-heading text-6xl md:text-7xl">150+</h3>
          <p className="text-zinc-500 mt-2">Weddings Captured</p>
        </div>

        <div>
          <h3 className="font-heading text-5xl">7+</h3>
          <p className="text-zinc-500 mt-2">Years Experience</p>
        </div>

        <div>
          <h3 className="font-heading text-5xl">10+</h3>
          <p className="text-zinc-500 mt-2">Destination Weddings</p>
        </div>

        <div>
          <h3 className="font-heading text-5xl">98%</h3>
          <p className="text-zinc-500 mt-2">Client Satisfaction</p>
        </div>

      </div>
    </section>
  );
}