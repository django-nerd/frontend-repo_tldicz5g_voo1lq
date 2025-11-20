export default function Logos() {
  const logos = ['Segment', 'HubSpot', 'Salesforce', 'Gong', 'Stripe', 'Zendesk']
  return (
    <section className="py-10 md:py-14 bg-gradient-to-b from-slate-950 to-slate-950/0">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-slate-400 text-sm mb-6">Connect your stack in minutes</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 opacity-80">
          {logos.map(l => (
            <div key={l} className="h-12 rounded-xl bg-white/5 border border-white/10 text-slate-300 flex items-center justify-center text-sm">
              {l}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
