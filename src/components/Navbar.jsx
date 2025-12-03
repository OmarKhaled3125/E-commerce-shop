import { Link } from 'react-router-dom';

// 1. Receive 'cartCount' as a prop
const Navbar = ({ cartCount }) => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 transition-all">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo with Gradient Text */}
        <Link 
          to="/" 
          className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
        >
          MyStore.
        </Link>

        {/* Navigation Links */}
        <div className="flex gap-8 font-medium text-gray-600">
          <Link to="/" className="hover:text-blue-600 transition-colors">
            Home
          </Link>
          <Link to="/products" className="hover:text-blue-600 transition-colors">
            Shop
          </Link>
          
          <Link to="/cart" className="relative hover:text-blue-600 transition-colors">
            Cart
            
            {/* 2. Dynamic Badge Logic */}
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 flex items-center justify-center bg-red-500 text-white text-xs font-bold h-5 min-w-[20px] px-1 rounded-full shadow-md animate-pulse">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;