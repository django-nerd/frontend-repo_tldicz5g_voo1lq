import Navbar from './components/Navbar'
import PinnedExperience from './components/PinnedExperience'

function App() {
  return (
    <div className="min-h-screen bg-[#F3F5F7] text-slate-900">
      <Navbar />
      <main>
        <PinnedExperience />
      </main>
      <footer className="border-t border-emerald-900/10 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-600">
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-full" style={{background:'linear-gradient(135deg,#C5F7D4,#A3EAC5)'}} />
            <span>© {new Date().getFullYear()} Callix</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-900">Privacy</a>
            <a href="#" className="hover:text-slate-900">Terms</a>
            <a href="#" className="hover:text-slate-900">Security</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
