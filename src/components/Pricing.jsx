const Pricing = () => {
  return (
    <section className="bg-white py-32 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">Simple, Transparent Pricing</h2>
        <p className="text-slate-500 mb-20 font-medium text-lg">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-8xl mx-auto items-stretch">
          <div className="bg-white border border-slate-100 p-10 rounded-[40px] text-left hover:scale-[1.02] transition-transform h-full flex flex-col">
            <h4 className="text-xl font-black text-slate-900 mb-2">Starter</h4>
            <p className="text-slate-500 text-sm mb-10 font-medium">Perfect for getting started</p>
            <div className="text-5xl font-black text-slate-900 mb-12">$0<span className="text-lg text-slate-400 font-bold ml-1">/Month</span></div>
            <ul className="space-y-6 mb-12 flex-grow">
              {['Access to 10 free tools', 'Basic templates', 'Community support', '1 project per month'].map((f, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-semibold text-slate-600">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                  {f}
                </li>
              ))}
            </ul>
            <button className="bg-slate-900 text-white w-full h-14 rounded-2xl font-bold uppercase tracking-widest text-[10px] hover:bg-slate-800 transition-all mt-auto">Get Started Free</button>
          </div>

          <div className="bg-[#7c3aed] text-white p-10 rounded-[40px] text-left shadow-2xl shadow-purple-500/40 relative overflow-hidden h-full flex flex-col">
            <div className="absolute top-4 left-1/2 -translate-x-1/2">
              <span className="bg-orange-400 text-slate-900 text-[8px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full">Most Popular</span>
            </div>
            <h4 className="text-xl font-black mb-2 pt-6">Pro</h4>
            <p className="text-white/70 text-sm mb-10 font-medium">Best for professionals</p>
            <div className="text-5xl font-black mb-12">$29<span className="text-lg text-white/50 font-bold ml-1">/Month</span></div>
            <ul className="space-y-6 mb-12 flex-grow">
              {['Access to all premium tools', 'Unlimited templates', 'Priority support', 'Unlimited projects', 'Cloud sync', 'Advanced analytics'].map((f, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-semibold text-white/90">
                  <svg className="w-5 h-5 text-indigo-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                  {f}
                </li>
              ))}
            </ul>
            <button className="bg-white text-[#7c3aed] w-full h-14 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-slate-50 transition-all mt-auto">Start Pro Trial</button>
          </div>

          <div className="bg-white border border-slate-100 p-10 rounded-[40px] text-left hover:scale-[1.02] transition-transform h-full flex flex-col">
            <h4 className="text-xl font-black text-slate-900 mb-2">Enterprise</h4>
            <p className="text-slate-500 text-sm mb-10 font-medium">For teams and businesses</p>
            <div className="text-5xl font-black text-slate-900 mb-12">$99<span className="text-lg text-slate-400 font-bold ml-1">/Month</span></div>
            <ul className="space-y-6 mb-12 flex-grow">
              {['Everything in Pro', 'Team collaboration', 'Custom integrations', 'Dedicated support', 'SLA guarantee', 'Custom branding'].map((f, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-semibold text-slate-600">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                  {f}
                </li>
              ))}
            </ul>
            <button className="bg-slate-900 text-white w-full h-14 rounded-2xl font-bold uppercase tracking-widest text-[10px] hover:bg-slate-800 transition-all mt-auto">Contact Sales</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
