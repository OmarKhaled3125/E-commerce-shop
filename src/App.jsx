import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';

export default function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // 1. Initialize Cart State
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => console.error("Error fetching products:", err));
  }, []);

  // 2. Add to Cart Function
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // 3. Remove from Cart Function
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // 4. Update Quantity (Increase/Decrease)
  const updateQuantity = (id, delta) => {
    setCart((prevCart) =>
      prevCart.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: Math.max(1, item.quantity + delta) };
        }
        return item;
      })
    );
  };

  // 5. Clear Cart Function (NEW)
  // This resets the cart to an empty array
  const clearCart = () => {
    setCart([]);
  };

  return (
    <BrowserRouter>
      <Navbar cartCount={cart.length} /> 
      
      <Routes>
        <Route 
          path="/" 
          element={<Home products={products} loading={loading} addToCart={addToCart} />} 
        />
        <Route 
          path="/products" 
          element={<Products products={products} loading={loading} addToCart={addToCart} />} 
        />
        <Route 
          path="/cart" 
          element={
            <Cart 
              cart={cart} 
              removeFromCart={removeFromCart} 
              updateQuantity={updateQuantity}
              clearCart={clearCart} // Pass the new function here
            />
          } 
        />
      </Routes>
    </BrowserRouter>
  );
}