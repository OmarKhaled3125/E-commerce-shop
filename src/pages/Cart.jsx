import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CheckoutModal from '../components/CheckoutModal'; // Import the modal

// Added 'clearCart' to props
export default function Cart({ cart, removeFromCart, updateQuantity, clearCart }) {
  
  // Local state to control Modal visibility
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  // 1. Calculate Total Price dynamically
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // 2. Empty State
  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <div className="text-6xl mb-4">🛒</div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Your cart is empty</h2>
        <p className="text-gray-500 mb-6">Looks like you haven't added anything yet.</p>
        <Link to="/products">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition shadow-lg">
            Start Shopping
          </button>
        </Link>
      </div>
    );
  }

  // 3. Populated Cart
  return (
    <div className="container mx-auto px-4 py-10 min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Shopping Cart</h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Left: Cart Items List */}
        <div className="flex-1 space-y-4">
          {cart.map((item) => (
            <div key={item.id} className="flex flex-col sm:flex-row items-center bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
              
              {/* Product Image */}
              <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 p-2">
                <img src={item.image} alt={item.title} className="w-full h-full object-contain" />
              </div>

              {/* Product Details */}
              <div className="flex-1 ml-4 text-center sm:text-left mt-4 sm:mt-0">
                <h3 className="text-lg font-bold text-gray-800 line-clamp-1">{item.title}</h3>
                <p className="text-gray-500 text-sm mb-2">{item.category}</p>
                <div className="text-blue-600 font-bold">${item.price}</div>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center gap-3 mt-4 sm:mt-0">
                <button 
                  onClick={() => updateQuantity(item.id, -1)}
                  className="w-8 h-8 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 flex items-center justify-center transition"
                >
                  -
                </button>
                <span className="w-8 text-center font-medium">{item.quantity}</span>
                <button 
                  onClick={() => updateQuantity(item.id, 1)}
                  className="w-8 h-8 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 flex items-center justify-center transition"
                >
                  +
                </button>
              </div>

              {/* Remove Button */}
              <button 
                onClick={() => removeFromCart(item.id)}
                className="ml-4 text-red-500 hover:text-red-700 p-2 transition mt-4 sm:mt-0"
                title="Remove Item"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          ))}
        </div>

        {/* Right: Order Summary */}
        <div className="w-full lg:w-1/3 h-fit">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-24">
            <h2 className="text-xl font-bold mb-6 text-gray-800">Order Summary</h2>
            
            <div className="space-y-3 text-gray-600">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax (Estimate)</span>
                <span>$0.00</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="text-green-600">Free</span>
              </div>
            </div>
            
            <div className="border-t border-gray-200 my-4"></div>
            
            <div className="flex justify-between text-xl font-bold text-gray-900 mb-6">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            
            {/* BUTTON UPDATE: Opens the Modal */}
            <button 
              onClick={() => setIsCheckoutOpen(true)}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-bold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-200"
            >
              Proceed to Checkout
            </button>
            
            <p className="text-xs text-gray-400 text-center mt-4">
              Secure Checkout • 30-Day Returns
            </p>
          </div>
        </div>
      </div>

      {/* RENDER MODAL: Passed props to control it */}
      <CheckoutModal 
        isOpen={isCheckoutOpen} 
        onClose={() => setIsCheckoutOpen(false)}
        total={total}
        clearCart={clearCart}
      />
    </div>
  );
}