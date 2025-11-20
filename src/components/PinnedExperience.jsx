import { useCallback, useMemo, useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
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

const EASE = [0.16, 1, 0.3, 1] // friction-like cubic-bezier

function AmbientBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute inset-0" style={{
        background:
          `radial-gradient(700px 700px at 18% 12%, rgba(197,247,212,0.22), transparent 60%),`+
          `radial-gradient(640px 640px at 82% 88%, rgba(163,234,197,0.18), transparent 60%)`
      }} />
      <div className="absolute inset-0" style={{
        background:
          `linear-gradient(180deg, rgba(243,245,247,1) 0%, rgba(243,245,247,0.96) 36%, rgba(243,245,247,1) 100%)`
      }} />
    </div>
  )
}

function Orb({ progress }) {
  const reduce = useReducedMotion()
  // Core scale and rotation based on scroll progress
  const scale = useTransform(progress, [0, 0.15, 0.35, 0.55, 1], [1, 1.06, 1.1, 1.06, 1])
  const rotate = useTransform(progress, [0, 1], [0, 8])
  const glow = useTransform(progress, [0, 0.2, 0.5, 1], [0.28, 0.45, 0.4, 0.36])

  return (
    <motion.div style={{ scale, rotate }} className="relative h-[54vmin] w-[54vmin] min-h-[320px] min-w-[320px]">
      {/* Core */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: `radial-gradient(circle at 50% 40%, rgba(216,255,70,0.16), rgba(11,138,101,0.3) 30%, rgba(10,92,74,0.82) 65%, rgba(10,92,74,1) 100%)`,
          boxShadow: `inset 0 0 32px rgba(255,255,255,0.22), 0 16px 64px rgba(11,138,101,0.18)`
        }}
      />
      {/* Reflective shell */}
      <div className="absolute inset-0 rounded-full overflow-hidden">
        <div className="absolute inset-0" style={{
          background: 'conic-gradient(from 180deg at 50% 50%, rgba(255,255,255,0.07), rgba(255,255,255,0.0) 40%, rgba(255,255,255,0.07) 70%, rgba(255,255,255,0.0) 100%)'
        }} />
        <div className="absolute -inset-10 blur-3xl rounded-full" style={{
          background: `radial-gradient(circle at 50% 50%, rgba(197,247,212,${glow.get?.() ?? 0.28}), transparent 60%)`
        }} />
        {/* Specular highlight */}
        <div className="absolute top-[10%] left-[12%] h-28 w-28 rounded-full" style={{
          background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.5), rgba(255,255,255,0.06) 60%, rgba(255,255,255,0) 80%)',
          filter: 'blur(6px)'
        }} />
        {/* Fresnel edge */}
        <div className="absolute inset-0 rounded-full" style={{
          boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.08), inset 0 0 80px rgba(255,255,255,0.06)'
        }} />
      </div>
      {/* Orbiting particles (reduced and calmer) */}
      {!reduce && (
        <>
          {[...Array(10)].map((_, i) => {
            const angle = (i / 10) * Math.PI * 2
            const radius = 0.46 + (i % 2) * 0.06
            return (
              <motion.span
                key={i}
                className="absolute h-1.5 w-1.5 rounded-full"
                style={{
                  left: '50%', top: '50%',
                  background: COLORS.white,
                  boxShadow: `0 0 10px rgba(216,255,70,0.45)`,
                }}
                animate={{
                  x: [Math.cos(angle) * radius * 210, Math.cos(angle + Math.PI * 2) * radius * 210],
                  y: [Math.sin(angle) * radius * 210, Math.sin(angle + Math.PI * 2) * radius * 210],
                  opacity: [0.55, 0.9, 0.55],
                }}
                transition={{ duration: 10 + (i % 4), repeat: Infinity, ease: 'linear' }}
              />
            )
          })}
        </>
      )}
      {/* Data flow lines (slower, subtler) */}
      {!reduce && (
        <div className="absolute inset-0">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute left-1/2 top-1/2 h-px origin-left"
              style={{
                width: `${40 + i * 9}%`,
                background: 'linear-gradient(90deg, rgba(11,138,101,0.0) 0%, rgba(11,138,101,0.45) 40%, rgba(216,255,70,0.65) 100%)',
                transform: `rotate(${i * 14 - 28}deg)`
              }}
              animate={{ opacity: [0.15, 0.45, 0.15] }}
              transition={{ duration: 4 + i * 0.4, repeat: Infinity, ease: 'easeInOut' }}
            />
          ))}
        </div>
      )}
    </motion.div>
  )
}

function ChapterCopy({ progress }) {
  const chapters = useMemo(() => ([
    { key: 'hero', range: [0.00, 0.11], title: 'Data intelligence in motion',
      subtitle: 'Your calls become creative, segments, and revenue signals.',
      support: 'Capture conversations. Extract patterns. Ship ads and insights that convert.',
      ctas: true },
    { key: 'problem', range: [0.11, 0.23], title: 'Fragmented streams → clean patterns',
      bullets: ['Wasted spend from guesswork', 'Messaging drift across teams', 'No line of sight from ad → revenue'] },
    { key: 'transform', range: [0.23, 0.36], title: 'Callix Intelligence',
      bullets: [
        'Buyer-language extraction',
        'ICP + segment clustering',
        'Objection pattern mapping',
        'Creative generation on-brand',
        'Attribution: call → ad → revenue',
      ] },
    { key: 'how', range: [0.36, 0.53], title: 'How it works (3 steps)',
      steps: [
        { k: 'Capture', d: 'Zoom/Meet → transcript → structured events' },
        { k: 'Analyze', d: 'Signals, clusters, objections, language' },
        { k: 'Activate', d: 'Ads, messaging, coaching, dashboards' },
      ] },
    { key: 'features', range: [0.53, 0.70], title: 'Product highlights',
      features: [
        { k: 'Conversation Intelligence', d: 'Clean transcript. Talk-time. Keywords.' },
        { k: 'Customer Profiles', d: 'Clusters → ICP segments.' },
        { k: 'Creative Generation', d: 'Convo → on-brand ad copy.' },
        { k: 'Performance & Coaching', d: 'Benchmarks + objections.' },
        { k: 'AI Search', d: 'Ask anything from calls.' },
        { k: 'Attribution', d: 'UTM → call → revenue.' },
      ] },
    { key: 'compare', range: [0.70, 0.80], title: 'Us vs. Them', compare: true },
    { key: 'personas', range: [0.80, 0.90], title: 'Built for leaders', personas: true },
    { key: 'integrations', range: [0.90, 0.96], title: 'Integrations', integrations: true },
    { key: 'security', range: [0.96, 1.00], title: 'Security & FAQ', security: true },
  ]), [])

  return (
    <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-slate-800">
      {chapters.map((c, idx) => {
        const o = useTransform(progress, c.range, [1, 0])
        const y = useTransform(progress, c.range, ['0%', '8%'])
        return (
          <motion.div key={c.key} style={{ opacity: o, y }} className="absolute left-0 right-0 pointer-events-none">
            <div className="max-w-3xl">
              <h1 className="text-[28px] md:text-[44px] font-semibold tracking-[-0.01em] leading-tight" style={{ color: COLORS.emerald }}>
                {c.title}
              </h1>
              {c.subtitle && (
                <p className="mt-4 text-base md:text-lg text-slate-700">{c.subtitle}</p>
              )}
              {c.support && (
                <p className="mt-3 text-[15px] text-slate-600">{c.support}</p>
              )}
              {c.ctas && (
                <div className="mt-6 flex flex-wrap gap-3 pointer-events-auto">
                  <a href="#" className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-white shadow-sm transition-colors" style={{ background: COLORS.primary }}>
                    <Play size={18} /> Watch demo
                  </a>
                  <a href="#book" className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 border transition-colors" style={{ borderColor: 'rgba(10,92,74,0.25)', color: COLORS.emerald }}>
                    Book a demo <MoveRight size={18} />
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
                  <motion.div className="rounded-2xl border p-5 bg-white/80 shadow-[0_10px_40px_rgba(11,138,101,0.12)]" style={{ borderColor: 'rgba(10,92,74,0.18)' }}
                    animate={{ boxShadow: ['0 10px 40px rgba(11,138,101,0.12)','0 10px 64px rgba(11,138,101,0.2)','0 10px 40px rgba(11,138,101,0.12)'] }}
                    transition={{ duration: 4, repeat: Infinity, ease: EASE }}
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
                      <div className="mt-1 text-sm text-slate-600">Purpose-built views and KPIs powered by real calls.</div>
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
                    <p className="mt-1 text-sm text-slate-600">Attribution paths, data scope, retention. See docs →</p>
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

function ProgressRail({ progress, onJump, chapters }) {
  const markers = chapters.map(c => ({ key: c.key, at: c.range[0], label: c.title }))
  return (
    <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center gap-2">
      <div className="relative h-[60vh] w-1 rounded-full bg-emerald-900/10">
        {markers.map((m, i) => (
          <button
            key={m.key}
            onClick={() => onJump(m.at)}
            className="group absolute -left-2 h-3.5 w-3.5 rounded-full bg-white border border-emerald-900/20 hover:border-emerald-900/40 shadow-sm"
            style={{ top: `${m.at * 100}%` }}
            aria-label={`Jump to ${m.label}`}
          >
            <span className="absolute left-[-180px] top-1/2 -translate-y-1/2 hidden lg:block rounded px-2 py-1 text-[11px] bg-white border border-emerald-900/10 text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity" style={{ pointerEvents: 'none' }}>{m.label}</span>
          </button>
        ))}
        <motion.div className="absolute left-0 w-1 rounded-full bg-emerald-600" style={{ height: useTransform(progress, [0,1], ['0%','100%']) }} />
      </div>
    </div>
  )
}

export default function PinnedExperience() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })

  // Chapters definition must match ChapterCopy
  const chapters = useMemo(() => ([
    { key: 'hero', range: [0.00, 0.11], title: 'Data intelligence in motion' },
    { key: 'problem', range: [0.11, 0.23], title: 'Fragmented streams → clean patterns' },
    { key: 'transform', range: [0.23, 0.36], title: 'Callix Intelligence' },
    { key: 'how', range: [0.36, 0.53], title: 'How it works (3 steps)' },
    { key: 'features', range: [0.53, 0.70], title: 'Product highlights' },
    { key: 'compare', range: [0.70, 0.80], title: 'Us vs. Them' },
    { key: 'personas', range: [0.80, 0.90], title: 'Built for leaders' },
    { key: 'integrations', range: [0.90, 0.96], title: 'Integrations' },
    { key: 'security', range: [0.96, 1.00], title: 'Security & FAQ' },
  ]), [])

  const handleJump = useCallback((at) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const pageY = window.scrollY + rect.top
    const target = pageY + at * el.scrollHeight
    window.scrollTo({ top: target, behavior: 'smooth' })
  }, [])

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
        {/* Progress rail */}
        <ProgressRail progress={scrollYProgress} onJump={handleJump} chapters={chapters} />
      </div>
    </section>
  )
}
