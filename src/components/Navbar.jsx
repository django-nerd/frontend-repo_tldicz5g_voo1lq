import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { name: 'Product', href: '#features' },
    { name: 'How it works', href: '#how-it-works' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Docs', href: '#docs' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 to-slate-900/20 backdrop-blur-xl border-b border-white/5" />
      <nav className="relative mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-violet-500 via-fuchsia-500 to-amber-400 shadow-[0_0_40px_-10px] shadow-fuchsia-500/60" />
            <span className="text-white font-semibold tracking-tight">Callix</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map(l => (
              <a key={l.name} href={l.href} className="text-slate-300/90 hover:text-white transition-colors text-sm">
                {l.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="text-slate-300/90 hover:text-white text-sm">Sign in</a>
            <a href="#" className="inline-flex items-center rounded-lg bg-white text-slate-900 text-sm font-semibold px-4 py-2 hover:bg-slate-100 transition-colors">Get started</a>
          </div>

          <button className="md:hidden text-white" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-6 space-y-4">
            {links.map(l => (
              <a key={l.name} href={l.href} className="block text-slate-200/90 hover:text-white">
                {l.name}
              </a>
            ))}
            <div className="pt-2 flex gap-3">
              <a href="#" className="text-slate-300/90 hover:text-white text-sm">Sign in</a>
              <a href="#" className="inline-flex items-center rounded-lg bg-white text-slate-900 text-sm font-semibold px-4 py-2 hover:bg-slate-100 transition-colors">Get started</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
