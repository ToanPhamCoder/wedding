import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaRegCommentDots, FaEnvelope } from "react-icons/fa";

const SendMessage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0); // Lưu vị trí cuộn trước đó

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      console.log("scrollTop", scrollTop);

      // Nếu cuộn xuống, hiển thị button
      if (scrollTop > 270 && scrollTop < 1000) {
        setIsVisible(true);
      } else {
        // Nếu cuộn lên, ẩn button
        setIsVisible(false);
      }

      // Cập nhật vị trí cuộn trước đó
      setLastScrollTop(scrollTop);
    };

    // Lắng nghe sự kiện cuộn
    window.addEventListener("scroll", handleScroll);

    // Cleanup sự kiện cuộn khi component bị unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]); // Theo dõi lastScrollTop

  // Cấu hình hiệu ứng cho hai nút
  const buttonVariants = {
    hiddenLeft: { opacity: 0, x: -100 }, // Xuất hiện từ ngoài màn hình
    hiddenRight: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 }, // Hiện ở vị trí bình thường
  };

  return (
    <div className="flex justify-center space-x-4 mt-12">
      {/* Nút Gửi lời chúc */}
      <motion.button
        initial="hiddenLeft"
        animate={isVisible ? "visible" : "hiddenLeft"}
        variants={buttonVariants}
        transition={{ duration: isVisible ? 0.5 : 0.2 }} // Xuất hiện chậm (0.5s), biến mất nhanh (0.2s)
        className="flex items-center px-4 py-2 bg-[#dcbdc5] text-white rounded-md hover:bg-gray-800 transition duration-300"
      >
        <FaRegCommentDots className="mr-2" /> Gửi lời chúc
      </motion.button>

      {/* Nút Xác nhận tham dự */}
      <motion.button
        initial="hiddenRight"
        animate={isVisible ? "visible" : "hiddenRight"}
        variants={buttonVariants}
        transition={{ duration: isVisible ? 0.5 : 0.2 }} // Xuất hiện chậm (0.5s), biến mất nhanh (0.2s)
        className="flex items-center px-4 py-2 bg-[#dcbdc5] text-white rounded-md hover:bg-gray-800 transition duration-300"
      >
        <FaEnvelope className="mr-2" /> Xác Nhận Tham Dự
      </motion.button>
    </div>
  );
};

export default SendMessage;
