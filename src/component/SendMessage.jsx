import { useEffect, useState } from "react";
import { FaRegCommentDots, FaEnvelope } from "react-icons/fa";

const SendMessage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      // Điều kiện để hiển thị các nút dựa trên vị trí cuộn
      if (scrollTop > 270 && scrollTop < 1000) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Thêm sự kiện scroll
    window.addEventListener("scroll", handleScroll);

    // Xóa sự kiện scroll khi component bị unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex justify-center space-x-4 mt-12 overflow-hidden">
      {/* Nút Gửi lời chúc */}
      <button
        className={`flex items-center px-4 py-2 bg-[#dcbdc5] text-white rounded-md hover:bg-gray-800 transition-all duration-500 transform ${
          isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
        }`}
      >
        <FaRegCommentDots className="mr-2" /> Gửi lời chúc
      </button>

      {/* Nút Xác nhận tham dự */}
      <button
        className={`flex items-center px-4 py-2 bg-[#dcbdc5] text-white rounded-md hover:bg-gray-800 transition-all duration-500 transform ${
          isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
        }`}
      >
        <FaEnvelope className="mr-2" /> Xác Nhận Tham Dự
      </button>
    </div>
  );
};

export default SendMessage;
