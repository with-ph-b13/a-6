const Cart = ({ cart, onRemoveFromCart, onCheckout, onVisitStore }) => {
  const totalPrice = cart.reduce((a, b) => a + b.price, 0);

  return (
    <section className="bg-white border border-slate-100 rounded-[40px] p-8 md:p-12 shadow-sm max-w-4xl mx-auto min-h-[500px] flex flex-col">
      <h3 className="text-3xl font-black text-slate-900 mb-10">Your Cart</h3>
      
      {cart.length === 0 ? (
        <div className="flex-grow flex flex-col items-center justify-center text-center py-20 bg-slate-50 rounded-[32px] border-2 border-dashed border-slate-200">
          <svg className="w-20 h-20 text-slate-200 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 0a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <p className="text-xl font-bold text-slate-400 mb-8">Cart is currently empty</p>
          <button className="bg-[#7c3aed] text-white px-8 py-2 rounded-xl font-bold" onClick={onVisitStore}>Visit Store</button>
        </div>
      ) : (
        <div className="flex flex-col flex-grow">
          <div className="space-y-6 mb-12 flex-grow overflow-y-auto pr-2 max-h-[600px]">
            {cart.map(item => (
              <div key={item.id} className="flex items-center gap-6 p-6 bg-white border border-slate-100 rounded-3xl hover:bg-slate-50 transition-colors">
                <div className="w-16 h-16 rounded-2xl bg-[#7c3aed]/5 flex items-center justify-center border border-[#7c3aed]/5">
                  <img src={item.icon} alt="item" className="w-8 h-8 opacity-80" />
                </div>
                <div className="flex-grow">
                  <h4 className="text-lg font-black text-slate-900 mb-1">{item.name}</h4>
                  <span className="text-[#7c3aed] font-black text-lg">${item.price}</span>
                </div>
                <button 
                  className="text-red-500 font-bold text-xs uppercase tracking-widest hover:underline px-4"
                  onClick={() => onRemoveFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          
          <div className="pt-10 border-t border-slate-100">
            <div className="flex justify-between items-center mb-10">
              <span className="text-slate-400 font-bold uppercase tracking-widest text-sm">Total:</span>
              <span className="text-4xl font-black text-slate-900">${totalPrice.toFixed(2)}</span>
            </div>
            <button 
              className="bg-[#7c3aed] text-white w-full h-16 rounded-2xl text-lg font-bold shadow-2xl shadow-purple-500/30 hover:bg-[#6d28d9] transition-all"
              onClick={onCheckout}
            >
              Proceed To Checkout
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Cart;
