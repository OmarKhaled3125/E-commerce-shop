import React from 'react'
import ProductCard from '../components/ProductCard'
import LoadingSpinner from '../components/LoadingSpinner'; 

export default function Products({ products, loading, addToCart }) {
  
if (loading) {
    return <LoadingSpinner size="large" />;
  }
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">All Products</h1>
      
      {/* Show ALL products here (no slicing) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart}/>
        ))}
      </div>
    </div>
  )
}