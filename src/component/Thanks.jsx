import React from "react";

const Thanks = () => {
  return (
    <div className="flex flex-col justify-center items-center p-8 bg-white">
      {/* Thank you message */}
      <h1 className="text-4xl font-bold text-gray-700 mb-4">Thank you!</h1>
      {/* Divider and names */}
      <p className="text-lg font-light text-gray-500">
        -- Hồng Toàn & Hưng Bình --
      </p>
    </div>
  );
};

export default Thanks;
