import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-10 md:pt-36 md:pb-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[700px] w-[700px] rounded-full bg-[radial-gradient(closest-side,_rgba(139,92,246,0.35),_transparent)] blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200/90 backdrop-blur-sm mb-4">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            New: Auto-generate high-converting ads from call transcripts
          </div>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white leading-tight">
            Turn every sales call into on-brand ads in minutes.
          </h1>
          <p className="mt-5 text-slate-300 text-lg">
            Callix is an AI Revenue Intelligence platform that turns the voice of your customers into performance creative — automatically.
            Ingest, analyze, and transform call data into ready-to-launch ad copy, hooks, and creatives across channels.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#" className="inline-flex justify-center items-center rounded-lg bg-white text-slate-900 font-semibold px-5 py-3 hover:bg-slate-100 transition">Start free trial</a>
            <a href="#how-it-works" className="inline-flex justify-center items-center rounded-lg border border-white/15 text-white font-semibold px-5 py-3 hover:bg-white/10 transition">See how it works</a>
          </div>

          <div className="mt-6 flex items-center gap-6 text-slate-400 text-sm">
            <div className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400"/> SOC2-ready</div>
            <div className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-violet-400"/> No PII stored</div>
            <div className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-amber-400"/> Native CRM integrations</div>
          </div>
        </div>

        <div className="relative h-[420px] md:h-[520px] rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
          <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" />
          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl" />
        </div>
      </div>
    </section>
  )
}
