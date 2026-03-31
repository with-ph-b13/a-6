const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
        <div className="col-span-1 md:col-span-1">
          <h3 className="text-3xl font-black text-white mb-6 tracking-tight">DigiTools</h3>
          <p className="text-slate-400 text-sm font-medium leading-relaxed mb-10 max-w-xs">
            Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
          </p>
        </div>
        <div>
          <h4 className="font-black text-white mb-8 text-sm uppercase tracking-widest">Product</h4>
          <ul className="space-y-4 text-sm font-semibold text-slate-400">
            <li className="hover:text-[#7c3aed] cursor-pointer">Features</li>
            <li className="hover:text-[#7c3aed] cursor-pointer">Pricing</li>
            <li className="hover:text-[#7c3aed] cursor-pointer">Templates</li>
            <li className="hover:text-[#7c3aed] cursor-pointer">Integrations</li>
          </ul>
        </div>
        <div>
          <h4 className="font-black text-white mb-8 text-sm uppercase tracking-widest">Company</h4>
          <ul className="space-y-4 text-sm font-semibold text-slate-400">
            <li className="hover:text-[#7c3aed] cursor-pointer">About</li>
            <li className="hover:text-[#7c3aed] cursor-pointer">Blog</li>
            <li className="hover:text-[#7c3aed] cursor-pointer">Careers</li>
            <li className="hover:text-[#7c3aed] cursor-pointer">Press</li>
          </ul>
        </div>
        <div>
          <h4 className="font-black text-white mb-8 text-sm uppercase tracking-widest">Resources</h4>
          <ul className="space-y-4 text-sm font-semibold text-slate-400">
            <li className="hover:text-[#7c3aed] cursor-pointer">Documentation</li>
            <li className="hover:text-[#7c3aed] cursor-pointer">Help Center</li>
            <li className="hover:text-[#7c3aed] cursor-pointer">Community</li>
            <li className="hover:text-[#7c3aed] cursor-pointer">Contact</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-12 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
        <p className="text-slate-600 text-xs font-bold uppercase tracking-widest">© 2026 Digitools. All rights reserved.</p>
        <div className="flex gap-10 text-[10px] font-black uppercase tracking-widest flex-wrap justify-center">
          <span className="text-slate-600 hover:text-white cursor-pointer">Privacy Policy</span>
          <span className="text-slate-600 hover:text-white cursor-pointer">Terms of Service</span>
          <span className="text-slate-600 hover:text-white cursor-pointer">Cookies</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
