import React, { useState } from 'react';
import LoadingSpinner from './LoadingSpinner';

export default function CheckoutModal({ isOpen, onClose, total, clearCart }) {
  const [step, setStep] = useState('form'); // 'form' | 'processing' | 'success'

  if (!isOpen) return null;

  const handlePayment = (e) => {
    e.preventDefault();
    
    // 1. Switch to processing state
    setStep('processing');

    // 2. Simulate API delay (2 seconds)
    setTimeout(() => {
      setStep('success');
      clearCart();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop with Blur */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden transform transition-all scale-100 p-6 mx-4">
        
        {/* --- STATE 1: FORM --- */}
        {step === 'form' && (
          <form onSubmit={handlePayment}>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Checkout</h2>
              <button type="button" onClick={onClose} className="text-gray-400 hover:text-gray-600">
                ✕
              </button>
            </div>

            {/* Mock Inputs */}
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input required type="text" className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Card Number (Fake)</label>
                <input required type="text" className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="0000 0000 0000 0000" />
              </div>
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Expiry</label>
                  <input required type="text" className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="MM/YY" />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">CVC</label>
                  <input required type="text" className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="123" />
                </div>
              </div>
            </div>

            {/* Total & Pay Button */}
            <div className="flex items-center justify-between mb-6">
              <span className="text-gray-600">Total to Pay:</span>
              <span className="text-xl font-bold text-blue-600">${total.toFixed(2)}</span>
            </div>

            <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-bold hover:shadow-lg hover:scale-[1.02] transition-all">
              Pay Now
            </button>
          </form>
        )}

        {/* --- STATE 2: PROCESSING --- */}
        {step === 'processing' && (
          <div className="flex flex-col items-center justify-center py-10">
            <LoadingSpinner size="large" />
            <p className="mt-4 text-gray-500 font-medium animate-pulse">Processing Payment...</p>
          </div>
        )}

        {/* --- STATE 3: SUCCESS --- */}
        {step === 'success' && (
          <div className="flex flex-col items-center justify-center py-6 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Payment Successful!</h3>
            <p className="text-gray-500 mb-6">Thank you for your "purchase".</p>
            <button 
              onClick={onClose} 
              className="w-full bg-gray-900 text-white py-3 rounded-xl font-medium hover:bg-gray-800 transition"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}