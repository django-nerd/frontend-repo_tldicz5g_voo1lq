import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Logos from './components/Logos'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Pricing from './components/Pricing'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Global decorative background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1000px_circle_at_20%_-10%,rgba(139,92,246,0.15),transparent_40%),radial-gradient(1000px_circle_at_80%_110%,rgba(251,191,36,0.12),transparent_40%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(2,6,23,0.6),rgba(2,6,23,0.9))]" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Logos />
        <Features />
        <HowItWorks />
        <Pricing />
        <CTA />
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-400">
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-full bg-gradient-to-tr from-violet-500 via-fuchsia-500 to-amber-400" />
            <span>© {new Date().getFullYear()} Callix</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-200">Privacy</a>
            <a href="#" className="hover:text-slate-200">Terms</a>
            <a href="#" className="hover:text-slate-200">Security</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
