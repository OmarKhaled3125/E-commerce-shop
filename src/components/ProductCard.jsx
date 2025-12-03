import React from 'react';

export default function ProductCard({ product, addToCart }) {
  return (
    // 'group' allows us to style children (like the image) when hovering the parent container
    <div className="group relative bg-white rounded-2xl shadow-sm border border-gray-100 p-4 flex flex-col hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-in-out">
      
      {/* Image Container with Zoom Effect */}
      <div className="h-48 flex justify-center items-center mb-4 overflow-hidden rounded-xl bg-gray-50 p-4">
        <img 
          src={product.image} 
          alt={product.title} 
          className="h-full w-auto object-contain transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="flex-grow flex flex-col justify-between">
        <div>
          <h2 className="font-bold text-gray-800 text-lg line-clamp-1 mb-1" title={product.title}>
            {product.title}
          </h2>
          <p className="text-sm text-gray-500 capitalize mb-3">{product.category}</p>
        </div>
        
        <div className="flex items-center justify-between mt-2">
          <span className="text-xl font-extrabold text-blue-600">${product.price}</span>
          
          {/* Gradient Button with Interaction */}
          <button 
            onClick={() => addToCart(product)}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-md hover:shadow-lg hover:from-blue-700 hover:to-indigo-700 active:scale-95 transition-all"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}