const Navbar = () => {
  return (
    <nav className="bg-white border-b border-slate-100 px-6 md:px-12 py-5 flex justify-between items-center sticky top-0 z-50">
      <div className="flex items-center gap-2">
        <span className="text-2xl font-black text-[#7c3aed] tracking-tighter">DigiTools</span>
      </div>

      <div className="hidden lg:flex gap-10 text-slate-600 font-semibold text-sm">
        <a href="#" className="hover:text-[#7c3aed] transition-colors">Products</a>
        <a href="#" className="hover:text-[#7c3aed] transition-colors">Features</a>
        <a href="#" className="hover:text-[#7c3aed] transition-colors">Pricing</a>
        <a href="#" className="hover:text-[#7c3aed] transition-colors">Testimonials</a>
        <a href="#" className="hover:text-[#7c3aed] transition-colors">FAQ</a>
      </div>

      <div className="flex items-center gap-6">
        <button
          className="flex items-center gap-1.5 text-slate-600 hover:text-[#7c3aed] transition-colors font-medium"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 0a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span className="hidden sm:inline">Cart</span>
        </button>
        <button className="text-slate-900 font-bold hover:text-[#7c3aed] transition-colors text-sm">Login</button>
        <button className="bg-[#7c3aed] text-white px-6 py-2 rounded-xl font-bold hover:bg-[#6d28d9] transition-all">Get Started</button>
      </div>
    </nav>
  );
};

export default Navbar;
