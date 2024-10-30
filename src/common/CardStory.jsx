import React from "react";
import flowerImage from "../assets/flower.png";
import { motion } from "framer-motion";

const CardStory = ({
  date,
  title,
  content,
  type,
  initial,
  animate,
  variants,
  transition,
  image,
}) => {
  return (
    <motion.div
      className="relative max-w-2xl mx-4 pb-8"
      initial={initial} // Motion prop
      animate={animate} // Motion prop
      variants={variants} // Motion prop
      transition={transition} // Motion prop
    >
      {/* Vertical Line */}
      <div
        className={`absolute ${
          type === "left"
            ? "border-l-2 w-1/2 h-full border-b-2 border-red-200 rounded-bl-3xl"
            : type === "left-middle"
            ? "border-l-2 w-1/2 h-[calc(100%+4px)] top-[-4px] border-b-2 border-t-2 border-red-200 rounded-tl-3xl rounded-bl-3xl"
            : "right-0 top-[-2px] border-r-2 border-b-2 w-1/2 h-full border-t-2 border-red-200 rounded-tr-3xl rounded-br-3xl"
        }`}
      ></div>

      {/* Timeline Item */}
      <div className="relative flex items-start">
        {/* Heart icon */}
        <div
          className={`absolute ${
            type === "left" || type === "left-middle"
              ? " left-0 top-6 transform -translate-x-1/2"
              : " right-0 top-6 transform translate-x-1/2"
          }`}
        >
          <img src={flowerImage} alt="Flower" className="w-10 h-10" />
        </div>
        <div className="w-11/12 pl-6">
          <h4 className="text-gray-600 text-md mb-1 pt-4">{date}</h4>
          <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
          <p className="text-gray-600 text-sm">{content}</p>
          <img src={image} alt="Chat Image" className="rounded-lg mt-4" />
        </div>
      </div>
    </motion.div>
  );
};

// Export the motion-wrapped component
export default CardStory;
