export default function CTA() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-tr from-violet-500/20 via-fuchsia-500/10 to-amber-400/20 p-8 md:p-12">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(600px_circle_at_10%_10%,rgba(168,85,247,0.15),transparent_40%),radial-gradient(600px_circle_at_90%_90%,rgba(251,191,36,0.12),transparent_40%)]" />
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-white text-2xl md:text-3xl font-semibold">Turn conversations into conversions</h3>
              <p className="mt-3 text-slate-200">Ship more winning creatives powered by the authentic voice of your buyers.</p>
            </div>
            <div className="flex gap-3 md:justify-end">
              <a href="#" className="inline-flex justify-center items-center rounded-lg bg-white text-slate-900 font-semibold px-5 py-3 hover:bg-slate-100 transition">Start free</a>
              <a href="#" className="inline-flex justify-center items-center rounded-lg border border-white/15 text-white font-semibold px-5 py-3 hover:bg-white/10 transition">Book a demo</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
