import React from 'react';

const LoadingSpinner = ({ size = 'medium' }) => {
  // 1. We map sizes not just for width/height, but for border thickness too
  const sizeClasses = {
    small: 'w-6 h-6 border-2',
    medium: 'w-10 h-10 border-4',
    large: 'w-16 h-16 border-4',
  };

  const currentSize = sizeClasses[size] || sizeClasses.medium;

  return (
    <div className="flex justify-center items-center w-full min-h-[200px]">
      <div className="relative flex justify-center items-center">
        
        {/* Layer 1: The "Ping" Effect (Subtle background pulse) */}
        <div 
          className={`
            absolute 
            animate-ping 
            inline-flex 
            rounded-full 
            bg-blue-400 
            opacity-20
            ${size === 'small' ? 'w-4 h-4' : size === 'medium' ? 'w-8 h-8' : 'w-12 h-12'}
          `}
        ></div>

        {/* Layer 2: The Main Spinner (Gradient-like border) */}
        <div
          className={`
            relative 
            ${currentSize}
            animate-spin 
            rounded-full 
            border-gray-100 
            border-t-blue-600 
            border-r-purple-600 
            shadow-[0_0_10px_rgba(37,99,235,0.3)]
          `}
        ></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;