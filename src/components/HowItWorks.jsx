export default function HowItWorks() {
  const steps = [
    {
      label: '01',
      title: 'Connect your sources',
      desc: 'Sync call recordings and transcripts from Gong, Zoom, HubSpot, or your dialer in a click.'
    },
    {
      label: '02',
      title: 'Extract what matters',
      desc: 'AI finds pains, objections, phrases, and proof snippets that resonate with each persona.'
    },
    {
      label: '03',
      title: 'Generate ready-to-launch assets',
      desc: 'Instantly create ads, scripts, headlines, and landing copy that reflect the real voice of your buyers.'
    },
    {
      label: '04',
      title: 'Ship and learn',
      desc: 'Export to your ad platforms and iterate as performance feeds back into generation.'
    },
  ]

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-gradient-to-b from-slate-950/0 to-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">From call to campaign in four steps</h2>
          <p className="mt-3 text-slate-300">A simple pipeline that converts conversations into conversions.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map(s => (
            <div key={s.label} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-slate-400 text-xs font-mono">{s.label}</div>
              <h3 className="mt-2 text-white font-medium">{s.title}</h3>
              <p className="mt-2 text-slate-300 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
