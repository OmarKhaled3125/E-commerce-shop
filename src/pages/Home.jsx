import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import LoadingSpinner from '../components/LoadingSpinner'; 

export default function Home({ products, loading, addToCart }) {
  const featuredProducts = products.slice(0, 4);

  if (loading) {
    return <LoadingSpinner size="large" />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* 1. Modern Hero Section with Dark Gradient */}
      <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-24 px-6 text-center overflow-hidden">
        {/* Background decorative blob */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500 rounded-full blur-[128px] opacity-20 pointer-events-none"></div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
            Discover the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Future</span> of Shopping
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
            Curated collections of the finest tech and lifestyle products. 
            Elevate your daily routine with our premium selection.
          </p>
          
          <Link to="/products">
            <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-[0_0_20px_rgba(37,99,235,0.5)] hover:shadow-[0_0_30px_rgba(37,99,235,0.7)] transition-all duration-300 transform hover:-translate-y-1">
              Start Shopping Now
            </button>
          </Link>
        </div>
      </div>

      {/* 2. Featured Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Trending Now</h2>
            <p className="text-gray-500 mt-2">Top picks from our diverse catalog.</p>
          </div>
          {/* "View All" Link for Desktop */}
          <Link to="/products" className="hidden md:flex items-center text-blue-600 font-semibold hover:underline">
            View All Collection &rarr;
          </Link>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>

        {/* "View All" Button for Mobile (Bottom) */}
        <div className="md:hidden mt-12 text-center">
          <Link to="/products">
            <button className="w-full border border-gray-300 bg-white text-gray-700 font-semibold py-3 rounded-xl hover:bg-gray-50 transition-colors">
              View All Products
            </button>
          </Link>
        </div>
      </div>

      {/* 3. Optional: Newsletter / Footer Teaser */}
      <div className="bg-white py-16 border-t border-gray-100 mt-10">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold mb-4">Join our Community</h3>
          <p className="text-gray-600 mb-6">Subscribe for exclusive drops and discounts.</p>
          <div className="flex max-w-md mx-auto gap-2">
            <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <button className="bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition">Subscribe</button>
          </div>
        </div>
      </div>

    </div>
  );
}