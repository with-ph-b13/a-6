const CTA = () => {
  return (
    <section className="bg-[#7c3aed] py-32 px-6 text-center">
      <div className="max-w-4xl mx-auto space-y-10">
        <h2 className="text-5xl md:text-6xl font-black text-white leading-tight">Ready To Transform <br/> Your Workflow?</h2>
        <p className="text-white/80 text-xl font-medium max-w-2xl mx-auto leading-relaxed">
          Join thousands of professionals who are already using Digitools to work smarter. Start your free trial today.
        </p>
        <div className="flex flex-wrap gap-6 justify-center pt-8">
          <button className="bg-white text-[#7c3aed] px-12 py-5 rounded-2xl font-black uppercase tracking-widest transform hover:scale-105 transition-all text-sm shadow-xl">Explore Products</button>
          <button className="border-2 border-white/50 text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-white/10 transition-all text-sm">View Pricing</button>
        </div>
        <p className="text-white/50 text-xs font-bold uppercase tracking-widest">14-day free trial • No credit card required • Cancel anytime</p>
      </div>
    </section>
  );
};

export default CTA;
