import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import productsData from './data/products.json';

import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Stats from './components/Stats';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';
import Steps from './components/Steps';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  const [activeTab, setActiveTab] = useState('product'); // 'product' or 'cart'
  const [cart, setCart] = useState([]);
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    setAllProducts(productsData);
  }, []);

  const addToCart = (product) => {
    const isExist = cart.find(item => item.id === product.id);
    if (isExist) {
      toast.warning(`${product.name} is already in the cart!`);
      return;
    }
    setCart([...cart, product]);
    toast.success(`${product.name} added to cart!`);
  };

  const removeFromCart = (id) => {
    const remaining = cart.filter(item => item.id !== id);
    setCart(remaining);
    toast.info('Item removed from cart.');
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      toast.error('Cart is empty!');
      return;
    }
    setCart([]);
    setActiveTab('product');
    toast.success('Proceeding to checkout! Cart cleared.');
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    if (tab === 'product' || tab === 'cart') {
      const element = document.getElementById('store');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
      <ToastContainer position="top-right" autoClose={2000} theme="light" />

      <Navbar cartCount={cart.length} onTabChange={handleTabChange} />

      <Banner onTabChange={handleTabChange} />

      <Stats />

      <main id="store" className="max-w-7xl mx-auto px-6 py-24 w-full">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Premium Digital Tools</h2>
          <p className="text-slate-500 max-w-2xl mx-auto font-medium">Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>

          <div className="inline-flex p-1.5 bg-slate-100 rounded-full border border-slate-200 mt-10">
            <button
              className={`px-12 py-3.5 rounded-full font-bold transition-all text-sm ${activeTab === 'product' ? 'bg-[#7c3aed] text-white shadow-lg' : 'text-slate-500 hover:text-slate-900'}`}
              onClick={() => setActiveTab('product')}
            >
              Products
            </button>
            <button
              className={`px-12 py-3.5 rounded-full font-bold transition-all text-sm ${activeTab === 'cart' ? 'bg-[#7c3aed] text-white shadow-lg' : 'text-slate-500 hover:text-slate-900'}`}
              onClick={() => setActiveTab('cart')}
            >
              Cart ({cart.length})
            </button>
          </div>
        </div>

        {activeTab === 'product' ? (
          <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {allProducts.map(product => (
              <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
            ))}
          </section>
        ) : (
          <Cart
            cart={cart}
            onRemoveFromCart={removeFromCart}
            onCheckout={handleCheckout}
            onVisitStore={() => setActiveTab('product')}
          />
        )}
      </main>

      <Steps />

      <Pricing />

      <CTA />

      <Footer />
    </div>
  );
}

export default App;
