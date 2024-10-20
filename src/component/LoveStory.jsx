import React, { useEffect, useState } from "react";

import CardStory from "@/common/CardStory";
import MotionCardStory from "@/common/CardStory";
const LoveStory = () => {
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [isVisible4, setIsVisible4] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      console.log("scrollTop1", scrollTop);

      // Nếu cuộn xuống, hiển thị button
      if (scrollTop > 1900) {
        setIsVisible1(true);
      } else {
        // Nếu cuộn lên, ẩn button
        setIsVisible1(false);
      }

      // Show the second component at 1800px scroll
      if (scrollTop > 2300) {
        setIsVisible2(true);
      } else {
        // Nếu cuộn lên, ẩn button
        setIsVisible2(false);
      }

      // Show the third component at 1900px scroll
      if (scrollTop > 2800) {
        setIsVisible3(true);
      } else {
        // Nếu cuộn lên, ẩn button
        setIsVisible3(false);
      }

      // Show the fourth component at 2000px scroll
      if (scrollTop > 3200) {
        setIsVisible4(true);
      } else {
        // Nếu cuộn lên, ẩn button
        setIsVisible4(false);
      }

      // Cập nhật vị trí cuộn trước đó
    };

    // Lắng nghe sự kiện cuộn
    window.addEventListener("scroll", handleScroll);

    // Cleanup sự kiện cuộn khi component bị unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Theo dõi lastScrollTop

  // Cấu hình hiệu ứng cho hai nút
  const buttonVariants = {
    hiddenLeft: { opacity: 0, x: -1000 }, // Xuất hiện từ ngoài màn hình
    hiddenRight: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 }, // Hiện ở vị trí bình thường
  };
  return (
    <div className="container mx-auto py-10 font-sans overflow-hidden">
      <h2 className="text-4xl text-center font-bold mb-6 text-gray-700">
        Love Story
      </h2>
      <p className="text-center text-lg text-gray-500 mb-8">
        Mỗi giây phút bên nhau là một món quà.
      </p>
      <CardStory
        initial="hiddenLeft"
        animate={isVisible1 ? "visible" : "hiddenLeft"}
        variants={buttonVariants}
        transition={{ duration: isVisible1 ? 0.8 : 0.2 }}
        date={12}
        title="Test Title"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et."
        type="left"
      />

      {/* Card 2 */}
      <CardStory
        initial="hiddenRight"
        animate={isVisible2 ? "visible" : "hiddenRight"}
        variants={buttonVariants}
        transition={{ duration: isVisible2 ? 0.8 : 0.2 }}
        date={12}
        title="Test Title"
        content="I love you"
        type="right"
      />

      {/* Card 3 */}
      <CardStory
        initial="hiddenLeft"
        animate={isVisible3 ? "visible" : "hiddenLeft"}
        variants={buttonVariants}
        transition={{ duration: isVisible3 ? 0.8 : 0.2 }}
        date={12}
        title="Test Title"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et."
        type="left-middle"
      />

      {/* Card 4 */}
      <CardStory
        initial="hiddenRight"
        animate={isVisible4 ? "visible" : "hiddenRight"}
        variants={buttonVariants}
        transition={{ duration: isVisible4 ? 0.8 : 0.2 }}
        date={12}
        title="Test Title"
        content="I love you"
        type="right"
      />
    </div>
  );
};

export default LoveStory;
