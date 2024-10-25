import React, { useState } from "react";
import BrideGroomContent from "./BrideGroomContent";

const BrideGroomSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Full text description
  const fullText = `Giữa lòng thành phố được mệnh danh là đáng sống nhất Việt Nam, có một chàng bộ đội hiền lành, ít nói, nhưng luôn mang trong mình niềm tự hào và trách nhiệm của người lính. Dù cuộc sống bộ đội có nhiều thử thách, anh vẫn luôn trân trọng những giá trị giản dị và thiêng liêng nhất. Đối với anh, tình cảm gia đình là điều quý giá hơn bất kỳ thứ gì khác. Chính vì vậy, dù ở nơi xa, trái tim anh vẫn luôn hướng về gia đình - nơi anh tìm thấy sự bình yên và nguồn động viên to lớn.`;

  // Shortened version of the text
  const shortText = fullText.substring(0, 150) + "...";

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        {/* Title */}
        <h2 className="text-4xl font-semibold mb-6 font-cursive">Cô Dâu & Chú Rể</h2>

        {/* Image */}
        <BrideGroomContent
  content="Giữa lòng thành phố được mệnh danh là đáng sống nhất Việt Nam, có một chàng bộ đội..." 
  name="Hồng Toàn" 
  url="https://res.cloudinary.com/dpohykmqq/image/upload/v1729759646/1DC02498_fft5ga.jpg" 
/>
<BrideGroomContent
  content="Giữa lòng thành phố được mệnh danh là đáng sống nhất Việt Nam, có một chàng bộ đội..." 
  name="Hưng Bình" 
  url="https://res.cloudinary.com/dpohykmqq/image/upload/v1729759646/1DC02498_fft5ga.jpg" 
/>

        {/* Signature */}
      </div>
    </div>
  );
};

export default BrideGroomSection;
