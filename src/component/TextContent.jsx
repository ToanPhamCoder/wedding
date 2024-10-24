import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const TextContent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop > 100 && scrollTop < 900) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const textVariants = {
    hidden: { opacity: 0, y: 100 }, // Bắt đầu ẩn và nằm dưới
    visible: { opacity: 1, y: 0 }, // Hiện ra ở vị trí bình thường
  };

  return (
    <div className="relative flex items-center justify-center">
      <motion.div
        id="text-content"
        className="text-container absolute top-[-70px] left-6 text-[110px]  text-[#dcbdc5] font-great"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={textVariants}
        transition={{ duration: 0.5 }}
      >
        Wedding
      </motion.div>
      <motion.p
        className="wedding-names pt-20 "
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={textVariants}
        transition={{ duration: 0.5 }}
      >
        Hồng Toàn & Hưng Bình
      </motion.p>
    </div>
  );
};

export default TextContent;
