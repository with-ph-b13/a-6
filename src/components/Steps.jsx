const Steps = () => {
  return (
    <section className="bg-slate-50 py-32 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">Get Started In 3 Steps</h2>
        <p className="text-slate-500 mb-20 font-medium text-lg">Start using premium digital tools in minutes, not hours.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { id: '01', title: 'Create Account', desc: 'Sign up for free in seconds. No credit card required to get started.', icon: 'user' },
            { id: '02', title: 'Choose Products', desc: 'Browse our catalog and select the tools that fit your needs.', icon: 'grid' },
            { id: '03', title: 'Start Creating', desc: 'Download and start using your premium tools immediately.', icon: 'rocket' }
          ].map((step, i) => (
            <div key={i} className="bg-white p-10 rounded-[40px] border border-slate-100 shadow-sm text-center relative group hover:translate-y-[-10px] transition-transform duration-500">
              <div className="w-8 h-8 rounded-full bg-[#7c3aed] text-white flex items-center justify-center text-xs font-bold absolute -top-2 -right-2 tracking-widest">{step.id}</div>
              <div className="w-20 h-20 bg-[#7c3aed]/5 rounded-full flex items-center justify-center mx-auto mb-10 group-hover:scale-110 transition-transform">
                {step.icon === 'user' && <svg className="w-10 h-10 text-[#7c3aed]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>}
                {step.icon === 'grid' && <svg className="w-10 h-10 text-[#7c3aed]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>}
                {step.icon === 'rocket' && <svg className="w-10 h-10 text-[#7c3aed]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.585 15.585a1.8 1.8 0 012.828 0l2.828 2.828a1.8 1.8 0 01-2.828 2.828l-2.828-2.828a1.8 1.8 0 010-2.828zM3.315 3.315a1.8 1.8 0 012.828 0L12 9.172l5.857-5.857a1.8 1.8 0 112.828 2.828L14.828 12l5.857 5.857a1.8 1.8 0 11-2.828 2.828L12 14.828l-5.857 5.857a1.8 1.8 0 11-2.828-2.828L9.172 12l-5.857-5.857a1.8 1.8 0 010-2.828z" /></svg>}
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-6">{step.title}</h3>
              <p className="text-slate-500 leading-relaxed font-medium">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
