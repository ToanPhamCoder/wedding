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
      if (scrollTop > 2700) {
        setIsVisible2(true);
      } else {
        // Nếu cuộn lên, ẩn button
        setIsVisible2(false);
      }

      // Show the third component at 1900px scroll
      if (scrollTop > 3100) {
        setIsVisible3(true);
      } else {
        // Nếu cuộn lên, ẩn button
        setIsVisible3(false);
      }

      // Show the fourth component at 2000px scroll
      if (scrollTop > 3900) {
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
        date={"02 / 06 / 2020"}
        title="Món đầu tiên em nấu cho ăn "
        content="Mình- Hồng Toàn, lần đầu tiên trong đời được ăn món sương sáo ngon như vậy. Sau đó là những bữa cơm ăn chung với nhau khi còn là sinh viên chung khu trọ. Em thì chăm nấu còn mình rất thích đồ ăn cô ấy nấu."
        type="left"
        image={
          "https://res.cloudinary.com/dpohykmqq/image/upload/h_1080/c_fit/v1730295525/IMG_4673_iadthu.jpg"
        }
      />

      {/* Card 2 */}
      <CardStory
        initial="hiddenRight"
        animate={isVisible2 ? "visible" : "hiddenRight"}
        variants={buttonVariants}
        transition={{ duration: isVisible2 ? 0.8 : 0.2 }}
        date={"01/07/2020"}
        title="Lần đầu tiên nắm tay"
        content="Mình - Hưng Bình thật lòng chưa nhận ra Toàn thích mình cho đến khi anh ấy chủ động nắm tay. Ban đầu anh chỉ dám nắm 1 ngón tay cái thôi làm mình cảm thấy đáng yêu hết sức. Mãi đến sau thấy mình không từ chối mới nắm cả bàn ^^"
        type="right"
        image={
          "https://res.cloudinary.com/dpohykmqq/image/upload/h_1080/c_fit/v1730296300/IMG_5216_fvxzer.jpg"
        }
      />

      {/* Card 3 */}
      <CardStory
        initial="hiddenLeft"
        animate={isVisible3 ? "visible" : "hiddenLeft"}
        variants={buttonVariants}
        transition={{ duration: isVisible3 ? 0.8 : 0.2 }}
        date={"05/07/2020"}
        title="Lời tỏ tình khi ấy"
        content="Tối đó hai đứa đi dạo, mình tỏ tình nhưng cô ấy bảo không cần một người yêu chỉ muốn một người đồng hành cùng thôi. Mình đã tưởng là bị từ chối rồi. Mãi mấy hôm sau mới biết là cô ấy đã đồng ý làm người yêu mình rồi >< và muốn mình quen một cách nghiêm túc thôi hihi"
        type="left-middle"
        image={
          "https://res.cloudinary.com/dpohykmqq/image/upload/h_1080/c_fit/v1730297918/173675212_582366086073342_6809173916347679358_n_hmhidx.jpg"
        }
      />

      {/* Card 4 */}
      <CardStory
        initial="hiddenRight"
        animate={isVisible4 ? "visible" : "hiddenRight"}
        variants={buttonVariants}
        transition={{ duration: isVisible4 ? 0.8 : 0.2 }}
        date={"18:00:00 Ngày 28/04/2024"}
        title="Màn cầu hôn bất ngờ "
        content="Trong chuyến đi chơi Lễ 30/4 ở Đà Lạt anh bảo dẫn ba mẹ mình đi ăn một chỗ xưa giờ ba mẹ chưa được đi. Bàn ăn của gia đình mình kế bên một bàn set up marry me, mình thì nghĩ là của khách nào đó. Đi ngang anh còn trêu mình: Mai mốt em thích được cầu hôn vậy không, hay ngồi vào đi anh chụp hình cho”. “Thôi của người ta mà, kì lắm”. 
        Hihi không nghĩ rằng đó là bàn dành cho mình luôn. Sau khi chụp hình ngắm hoàng hôn và quay lại bàn ăn, bất ngờ anh đã dắt tay mình sang bàn kế bên và cầu hôn mình trước sự chứng kiến của cả gia đình. Giọng anh run mà tay anh cũng run nữa.
        - Em đồng ý làm vợ anh không ?
        Thật sự mình quá bất ngờ và hạnh phúc nên chỉ biết đứng cười tít mắt thôi.
        - Em đồng ý không ?
        - Em đồng ý ^^
        "
        type="right"
        image={
          "https://res.cloudinary.com/dpohykmqq/image/upload/h_1080/c_fit/v1730295517/IMG_5124_ln4trr.jpg"
        }
      />
    </div>
  );
};

export default LoveStory;
