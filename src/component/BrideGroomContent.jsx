import React, { useState } from "react";

const BrideGroomContent = ({ content, name, url }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const shortText = content.substring(0, 150) + "...";

  return (
    <div className="bg-gray-100 py-4">
      <div className="container mx-auto text-center">
        {/* Image */}
        <div className="flex justify-center mb-6">
          <img
            src={url} // Dynamic image link
            alt="Groom"
            className="w-48 h-48 object-cover rounded-full"
          />
        </div>

        {/* Name */}
        <p className="text-lg italic font-semibold">{name}</p>

        {/* Description */}
        <p className="text-gray-600 max-w-lg mx-auto mb-4">
          {/* Render HTML content with dangerouslySetInnerHTML */}
          <span
            dangerouslySetInnerHTML={{
              __html: isExpanded ? content : shortText,
            }}
          />
          <button
            className="text-blue-500 ml-2 hover:underline"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "Thu gọn" : "Xem thêm"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default BrideGroomContent;
