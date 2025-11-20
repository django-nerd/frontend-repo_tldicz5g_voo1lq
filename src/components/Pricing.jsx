export default function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Pricing made simple</h2>
          <p className="mt-3 text-slate-300">Start free. Scale as your creative engine grows.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[{
            name: 'Starter', price: 'Free', desc: 'For small teams exploring AI-generated ads', features: ['Up to 50 calls/mo', '1 workspace', 'Meta + TikTok export']
          }, {
            name: 'Growth', price: '$299/mo', desc: 'For teams shipping weekly experiments', features: ['Up to 1,000 calls/mo', 'Brand guardrails', 'All channel exports', 'CRM integrations']
          }, {
            name: 'Enterprise', price: 'Custom', desc: 'For orgs with complex workflows', features: ['Unlimited calls', 'SAML SSO', 'VPC + SOC2', 'Dedicated support']
          }].map(t => (
            <div key={t.name} className="rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col">
              <div className="text-slate-300 text-sm">{t.name}</div>
              <div className="mt-2 text-white text-3xl font-semibold">{t.price}</div>
              <p className="mt-2 text-slate-300 text-sm">{t.desc}</p>
              <div className="mt-4 space-y-2 text-slate-200 text-sm">
                {t.features.map(f => (
                  <div key={f} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
              <a href="#" className="mt-6 inline-flex justify-center items-center rounded-lg bg-white text-slate-900 font-semibold px-4 py-2 hover:bg-slate-100 transition">Choose {t.name}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
