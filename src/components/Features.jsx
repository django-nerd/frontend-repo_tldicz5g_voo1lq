import { Sparkles, Target, Gauge, Rocket, Wand2, FileText } from 'lucide-react'

const features = [
  {
    icon: <Wand2 className="h-5 w-5" />, 
    title: 'Auto-Generate Ads',
    desc: 'Transform call insights into high-performing ads: headlines, hooks, scripts, and creative briefs.'
  },
  {
    icon: <Gauge className="h-5 w-5" />, 
    title: 'Voice-of-Customer Engine',
    desc: 'Mine objections, desires, and phrasing directly from calls to craft messaging that converts.'
  },
  {
    icon: <Target className="h-5 w-5" />, 
    title: 'Audience Segments',
    desc: 'Group by persona and stage to generate tailored variants for every segment and channel.'
  },
  {
    icon: <FileText className="h-5 w-5" />, 
    title: 'Channel-Ready Outputs',
    desc: 'Export clean assets for Meta, TikTok, Google, LinkedIn, and landing pages in one click.'
  },
  {
    icon: <Sparkles className="h-5 w-5" />, 
    title: 'On-Brand by Design',
    desc: 'Guardrails keep tone, claims, and compliance aligned with your brand and industry.'
  },
  {
    icon: <Rocket className="h-5 w-5" />, 
    title: 'Closed-Loop Learning',
    desc: 'Performance data continually tunes generation for higher ROAS over time.'
  },
]

export default function Features() {
  return (
    <section id="features" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Your calls, your copy — automated</h2>
          <p className="mt-3 text-slate-300">Ingest, analyze, generate, and launch without leaving your workflow.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(f => (
            <div key={f.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
              <div className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-gradient-to-tr from-violet-500/20 to-amber-400/20 text-white border border-white/10">
                {f.icon}
              </div>
              <h3 className="mt-4 text-white font-medium">{f.title}</h3>
              <p className="mt-2 text-slate-300 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
