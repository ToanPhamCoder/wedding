// LoadingSpinner.js
import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-12 h-12 border-4 border-t-pink-500 border-pink-200 rounded-full animate-spin"></div>
    </div>
  );
};

export default LoadingSpinner;