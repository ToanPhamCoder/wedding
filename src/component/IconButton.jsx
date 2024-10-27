import React from 'react';

function IconButton() {
  return (
    <button className="flex items-center px-4 py-2 border border-red-600 rounded-full bg-gray-100 hover:bg-gray-200">
      <span className="flex items-center justify-center w-8 h-8 bg-red-600 rounded-full text-white mr-3">
        <span role="img" aria-label="mute">🔇</span>
      </span>
      <span className="text-sm text-gray-700">Click vào đây nếu bạn muốn phát nhạc!</span>
    </button>
  );
}

export default IconButton;