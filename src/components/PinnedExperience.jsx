import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Check, Play, Lock, ShieldCheck, BrainCircuit, Sparkles, MoveRight } from 'lucide-react'

// Brand tokens
const COLORS = {
  primary: '#0B8A65',
  emerald: '#0A5C4A',
  mintStart: '#C5F7D4',
  mintEnd: '#A3EAC5',
  lime: '#D8FF46',
  white: '#F3F5F7',
}

function AmbientBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute inset-0" style={{
        background:
          `radial-gradient(800px 800px at 20% 10%, rgba(197,247,212,0.35), transparent 60%),`+
          `radial-gradient(700px 700px at 80% 90%, rgba(163,234,197,0.25), transparent 60%)`
      }} />
      <div className="absolute inset-0" style={{
        background:
          `linear-gradient(180deg, rgba(243,245,247,1) 0%, rgba(243,245,247,0.92) 30%, rgba(243,245,247,1) 100%)`
      }} />
    </div>
  )
}

function Orb({ progress }) {
  // Core scale and rotation based on scroll progress
  const scale = useTransform(progress, [0, 0.15, 0.35, 0.55, 1], [1, 1.08, 1.15, 1.08, 1])
  const rotate = useTransform(progress, [0, 1], [0, 12])
  const glow = useTransform(progress, [0, 0.2, 0.5, 1], [0.35, 0.55, 0.45, 0.4])

  return (
    <motion.div style={{ scale, rotate }} className="relative h-[60vmin] w-[60vmin] min-h-[340px] min-w-[340px]">
      {/* Core */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: `radial-gradient(circle at 50% 40%, rgba(216,255,70,0.20), rgba(11,138,101,0.35) 30%, rgba(10,92,74,0.85) 65%, rgba(10,92,74,1) 100%)`,
          boxShadow: `inset 0 0 40px rgba(255,255,255,0.25), 0 20px 80px rgba(11,138,101,0.25)`
        }}
      />
      {/* Reflective shell */}
      <div className="absolute inset-0 rounded-full overflow-hidden">
        <div className="absolute inset-0" style={{
          background: 'conic-gradient(from 180deg at 50% 50%, rgba(255,255,255,0.08), rgba(255,255,255,0.0) 40%, rgba(255,255,255,0.08) 70%, rgba(255,255,255,0.0) 100%)'
        }} />
        <div className="absolute -inset-8 blur-2xl rounded-full" style={{
          background: `radial-gradient(circle at 50% 50%, rgba(197,247,212,${glow.get?.() ?? 0.35}), transparent 60%)`
        }} />
      </div>
      {/* Orbiting particles */}
      {[...Array(24)].map((_, i) => {
        const angle = (i / 24) * Math.PI * 2
        const radius = 0.44 + (i % 3) * 0.06
        return (
          <motion.span
            key={i}
            className="absolute h-1.5 w-1.5 rounded-full"
            style={{
              left: '50%', top: '50%',
              background: COLORS.white,
              boxShadow: `0 0 12px rgba(216,255,70,0.55)`,
            }}
            animate={{
              x: [Math.cos(angle) * radius * 220, Math.cos(angle + Math.PI * 2) * radius * 220],
              y: [Math.sin(angle) * radius * 220, Math.sin(angle + Math.PI * 2) * radius * 220],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{ duration: 8 + (i % 5), repeat: Infinity, ease: 'linear' }}
          />
        )
      })}
      {/* Data flow lines */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute left-1/2 top-1/2 h-px origin-left"
            style={{
              width: `${38 + i * 8}%`,
              background: 'linear-gradient(90deg, rgba(11,138,101,0.0) 0%, rgba(11,138,101,0.55) 40%, rgba(216,255,70,0.75) 100%)',
              transform: `rotate(${i * 12 - 30}deg)`
            }}
            animate={{ opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: 3 + i * 0.3, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </div>
    </motion.div>
  )
}

function ChapterCopy({ progress }) {
  // Map progress to chapters
  // ranges are fractions of the full scroll (0..1)
  const chapters = [
    { range: [0.00, 0.12], title: 'The AI Notetaker That Actually Makes You More Money',
      subtitle: 'Turn Your Sales Calls Into Scroll-Stopping Ads That Produce Breakthrough Profit — Instantly.',
      support: 'Callix transforms your sales call data into highly targeted ads and customer insights that drive measurable revenue.',
      ctas: true },
    { range: [0.12, 0.24], title: 'Your revenue team is sitting on a gold mine.',
      subtitle: 'But you’re missing the patterns.',
      bullets: ['Guesswork leads to wasted spend', 'Misaligned messaging', 'Unpredictable results'] },
    { range: [0.24, 0.38], title: 'What If Every Sales Call Became Revenue Intelligence?',
      bullets: [
        'Identify highest-converting customer profiles',
        'Extract buyer language that actually drives conversions',
        'Pinpoint objections and friction',
        'Generate ad creatives trained on real conversations',
        'Connect ad → call → revenue',
      ] },
    { range: [0.38, 0.58], title: 'How It Works — 3 Steps',
      steps: [
        { k: 'Automatic Call Capture', d: 'Zoom/Meet → waveform → transcript → data grid' },
        { k: 'AI-Powered Analysis', d: 'Behavioral signals, profile clusters, objection patterns' },
        { k: 'Insights That Drive Revenue', d: 'ICP segmentation, ad scripts, coaching insights, ROI dashboards' },
      ] },
    { range: [0.58, 0.74], title: 'Product Highlights',
      features: [
        { k: 'Conversation Intelligence', d: 'Messy → clean transcript, keywords rise, talk-time radial' },
        { k: 'Customer Profiles', d: 'Clusters reorganize into ICP segments' },
        { k: 'Ad Creative Generation', d: 'Conversation → on-brand ad copy' },
        { k: 'Performance & Coaching', d: 'Benchmarks + objection patterns' },
        { k: 'AI Search', d: 'Ask anything; answers surface from calls' },
        { k: 'Attribution & Analytics', d: 'UTM → call → revenue path' },
      ] },
    { range: [0.74, 0.84], title: 'Us vs. Them',
      compare: true },
    { range: [0.84, 0.92], title: 'Built for Marketing Directors, Sales Leaders, and Founders', personas: true },
    { range: [0.92, 0.98], title: 'Integrations that snap into your stack', integrations: true },
    { range: [0.98, 1.00], title: 'Security, FAQ, and Next Steps', security: true },
  ]

  return (
    <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-slate-800">
      {chapters.map((c, idx) => {
        const o = useTransform(progress, c.range, [1, 0])
        const y = useTransform(progress, c.range, ['0%', '10%'])
        return (
          <motion.div key={idx} style={{ opacity: o, y }} className="absolute left-0 right-0">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-5xl font-semibold tracking-tight" style={{ color: COLORS.emerald }}>
                {c.title}
              </h1>
              {c.subtitle && (
                <p className="mt-4 text-lg md:text-xl text-slate-700">{c.subtitle}</p>
              )}
              {c.support && (
                <p className="mt-3 text-slate-600">{c.support}</p>
              )}
              {c.ctas && (
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href="#" className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-white" style={{ background: COLORS.primary }}>
                    <Play size={18} /> Watch Demo
                  </a>
                  <a href="#book" className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 border" style={{ borderColor: 'rgba(10,92,74,0.25)', color: COLORS.emerald }}>
                    Book a Demo <MoveRight size={18} />
                  </a>
                </div>
              )}
              {c.bullets && (
                <ul className="mt-6 space-y-2">
                  {c.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-700">
                      <Check className="mt-0.5 text-emerald-700" size={18} />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
              {c.steps && (
                <div className="mt-6 grid sm:grid-cols-3 gap-3">
                  {c.steps.map((s, i) => (
                    <div key={i} className="rounded-xl border bg-white/70 backdrop-blur-sm p-4" style={{ borderColor: 'rgba(10,92,74,0.12)' }}>
                      <div className="text-sm font-medium" style={{ color: COLORS.emerald }}>{s.k}</div>
                      <div className="mt-1 text-sm text-slate-600">{s.d}</div>
                    </div>
                  ))}
                </div>
              )}
              {c.features && (
                <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {c.features.map((f, i) => (
                    <div key={i} className="rounded-xl border bg-white/70 backdrop-blur-sm p-4" style={{ borderColor: 'rgba(10,92,74,0.12)' }}>
                      <div className="flex items-center gap-2 text-sm font-medium" style={{ color: COLORS.emerald }}>
                        <Sparkles size={16} /> {f.k}
                      </div>
                      <div className="mt-1 text-sm text-slate-600">{f.d}</div>
                    </div>
                  ))}
                </div>
              )}
              {c.compare && (
                <div className="mt-6 grid sm:grid-cols-2 gap-4">
                  <div className="rounded-2xl border p-5 bg-white/60" style={{ borderColor: 'rgba(10,92,74,0.12)' }}>
                    <div className="text-slate-400">Competitors</div>
                    <ul className="mt-3 space-y-2 text-slate-400">
                      <li>Static notes</li>
                      <li>Generic insights</li>
                      <li>Black-box scoring</li>
                      <li>Weak attribution</li>
                    </ul>
                  </div>
                  <motion.div className="rounded-2xl border p-5 bg-white/80 shadow-[0_10px_50px_rgba(11,138,101,0.15)]" style={{ borderColor: 'rgba(10,92,74,0.18)' }}
                    animate={{ boxShadow: ['0 10px 50px rgba(11,138,101,0.15)','0 10px 70px rgba(11,138,101,0.25)','0 10px 50px rgba(11,138,101,0.15)'] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <div className="flex items-center gap-2" style={{ color: COLORS.emerald }}>
                      <BrainCircuit size={18} /> Callix
                    </div>
                    <ul className="mt-3 space-y-2 text-slate-700">
                      <li>Live conversation intelligence</li>
                      <li>ICP + buyer-language extraction</li>
                      <li>Ad creative generation</li>
                      <li>Call → ad → revenue attribution</li>
                    </ul>
                  </motion.div>
                </div>
              )}
              {c.personas && (
                <div className="mt-6 grid sm:grid-cols-3 gap-3">
                  {['Marketing Directors', 'Sales Leaders', 'Founders'].map((p, i) => (
                    <div key={i} className="rounded-xl border bg-white/70 p-4" style={{ borderColor: 'rgba(10,92,74,0.12)' }}>
                      <div className="text-sm font-medium" style={{ color: COLORS.emerald }}>{p}</div>
                      <div className="mt-1 text-sm text-slate-600">Purpose-built views and KPIs that light up with real call data.</div>
                    </div>
                  ))}
                </div>
              )}
              {c.integrations && (
                <div className="mt-6 rounded-2xl border p-5 bg-white/70" style={{ borderColor: 'rgba(10,92,74,0.12)' }}>
                  <div className="text-sm font-medium" style={{ color: COLORS.emerald }}>Integrations</div>
                  <div className="mt-3 grid grid-cols-3 sm:grid-cols-6 gap-3 text-slate-600">
                    {['Zoom','Google Meet','HubSpot','Salesforce','Segment','Slack'].map((n) => (
                      <div key={n} className="flex items-center justify-center rounded-lg border bg-white p-2" style={{ borderColor: 'rgba(10,92,74,0.1)' }}>{n}</div>
                    ))}
                  </div>
                </div>
              )}
              {c.security && (
                <div className="mt-6 grid sm:grid-cols-3 gap-3">
                  <div className="rounded-xl border bg-white/70 p-4" style={{ borderColor: 'rgba(10,92,74,0.12)' }}>
                    <div className="flex items-center gap-2 text-sm font-medium" style={{ color: COLORS.emerald }}><ShieldCheck size={16}/> SOC2-ready</div>
                    <p className="mt-1 text-sm text-slate-600">Encryption in transit and at rest. Granular data controls.</p>
                  </div>
                  <div className="rounded-xl border bg-white/70 p-4" style={{ borderColor: 'rgba(10,92,74,0.12)' }}>
                    <div className="flex items-center gap-2 text-sm font-medium" style={{ color: COLORS.emerald }}><Lock size={16}/> Privacy-first</div>
                    <p className="mt-1 text-sm text-slate-600">No PII stored. Regional data processing available.</p>
                  </div>
                  <div className="rounded-xl border bg-white/70 p-4" style={{ borderColor: 'rgba(10,92,74,0.12)' }}>
                    <div className="text-sm font-medium" style={{ color: COLORS.emerald }}>FAQ</div>
                    <p className="mt-1 text-sm text-slate-600">How does attribution work? What data do you ingest? See docs →</p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )
      })}

      {/* Logos strip (hero addendum) */}
      <motion.div className="absolute left-0 right-0 -bottom-24 mx-auto max-w-5xl"
        style={{ opacity: useTransform(progress, [0.02, 0.10], [1, 0]) }}
      >
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 text-xs text-slate-500">
          {['Whop.com','Commission Club','YouTube Portal','Sovereign Man','Momentum.io','More'].map((l) => (
            <div key={l} className="flex items-center justify-center rounded-md border bg-white/70 py-2" style={{ borderColor: 'rgba(10,92,74,0.08)' }}>{l}</div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default function PinnedExperience() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })

  return (
    <section ref={ref} className="relative" style={{ height: '900vh', background: COLORS.white }}>
      <AmbientBackground />
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Center stage */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <Orb progress={scrollYProgress} />
        </div>
        {/* Copy layer */}
        <div className="absolute inset-0 pt-24">
          <ChapterCopy progress={scrollYProgress} />
        </div>
      </div>
    </section>
  )
}
