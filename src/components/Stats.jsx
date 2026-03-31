const Stats = () => {
  return (
    <section className="bg-[#7c3aed] text-white py-14 px-6 md:px-12 flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24">
      {[
        { v: '50K+', l: 'Active Users' },
        { v: '200+', l: 'Premium Tools' },
        { v: '4.9', l: 'Rating' }
      ].map((s, i) => (
        <div key={i} className="flex gap-12 md:gap-24 items-center">
          <div className="text-center group">
            <div className="text-5xl md:text-6xl font-black mb-2">{s.v}</div>
            <div className="text-white/70 font-semibold uppercase tracking-widest text-sm">{s.l}</div>
          </div>
          {i < 2 && <div className="hidden md:block w-[1px] h-20 bg-white/20"></div>}
        </div>
      ))}
    </section>
  );
};

export default Stats;
