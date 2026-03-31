import bannerImg from '../assets/banner.png';

const Banner = ({ onTabChange }) => {
  return (
    <header className="max-w-7xl mx-auto px-6 py-12 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-8 text-left">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#7c3aed]/10 text-xs font-bold text-[#7c3aed]">
          <span className="w-2 h-2 rounded-full bg-[#7c3aed] animate-ping"></span>
          New: AI-Powered Tools Available
        </div>
        <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
          Supercharge Your <br /> Digital Workflow
        </h1>
        <p className="text-slate-400 text-sm md:text-xl max-w-xl leading-relaxed">
          Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.<br />Explore Products.
        </p>
        <div className="flex flex-wrap gap-4 pt-4">
          <button
            className="bg-[#7c3aed] text-white btn-lg rounded-2xl h-14 px-10 shadow-xl shadow-purple-500/20 font-bold"
            onClick={() => onTabChange('product')}
          >
            Explore Products
          </button>
          <button className="border-2 border-[#7c3aed] text-[#7c3aed] hover:bg-[#7c3aed] hover:text-white btn-lg rounded-2xl h-14 px-10 flex items-center gap-2 font-bold transition-all">

            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M7 4V20L20 12L7 4Z" stroke="#7B3FE4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

            Watch Demo
          </button>
        </div>
      </div>
      <div className="relative group">
        <div className="absolute"></div>
        <img src={bannerImg} alt="Hero Banner" className="relative w-full h-auto rounded-[20px]" />
      </div>
    </header>
  );
};

export default Banner;
