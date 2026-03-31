const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="relative bg-white border border-slate-100 rounded-[32px] p-8 hover:border-[#7c3aed]/40 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 group flex flex-col h-full">
      <div className="absolute top-6 right-6">
        <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm ${product.tagType === 'popular' ? 'bg-indigo-100 text-indigo-600' : product.tagType === 'best seller' ? 'bg-orange-100 text-orange-600' : 'bg-green-100 text-green-600'}`}>
          {product.tag}
        </span>
      </div>
      
      <div className="w-16 h-16 rounded-2xl bg-[#7c3aed]/5 flex items-center justify-center mb-10 border border-[#7c3aed]/5 transform group-hover:scale-110 transition-transform">
        <img src={product.icon} alt="icon" className="w-8 h-8 opacity-90" />
      </div>
      
      <h3 className="text-2xl font-black text-slate-900 mb-3">{product.name}</h3>
      <p className="text-slate-500 text-sm mb-8 leading-relaxed font-medium line-clamp-2 h-10">{product.description}</p>
      
      <div className="text-left mb-10">
        <span className="text-2xl font-black text-slate-900">${product.price}</span>
        <span className="text-xs text-slate-400 font-bold uppercase tracking-widest ml-1">/{product.period}</span>
      </div>

      <div className="space-y-4 mb-10 flex-grow">
        {product.features.map((feature, i) => (
          <div key={i} className="flex items-center gap-3 text-sm text-slate-600 font-semibold">
            <svg className="w-4 h-4 text-[#7c3aed]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
            {feature}
          </div>
        ))}
      </div>
      
      <button 
        className="bg-[#7c3aed] text-white w-full h-14 rounded-2xl uppercase tracking-widest text-xs font-bold mt-auto hover:bg-[#6d28d9] transition-all"
        onClick={() => onAddToCart(product)}
      >
        Buy Now
      </button>
    </div>
  );
};

export default ProductCard;
