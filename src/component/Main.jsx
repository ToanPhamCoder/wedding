import { useEffect } from "react";
import SliderComponent from "./SliderComponents";
import SendMessage from "./SendMessage";
import TitleComponent from "./TitleComponent";
import Album from "./Album";
import CountdownComponent from "./CountDownComponent";
import Thanks from "./Thanks";
import LoveStory from "./LoveStory";
const Main = () => {
  const createHeart = () => {
    const heartContainer = document.getElementById("heart-container");
    const heart = document.createElement("div");
    heart.classList.add("heart");

    // Đặt vị trí trái tim ngẫu nhiên theo chiều ngang
    heart.style.left = Math.random() * 80 + 10 + "vw"; // Random value between 10vw and 90vw

    // Kích thước ngẫu nhiên cho trái tim
    heart.style.width = heart.style.height = Math.random() * 20 + 20 + "px";

    // Thời gian rơi ngẫu nhiên cho mỗi trái tim
    heart.style.animationDuration = Math.random() * 3 + 3 + "s";
    heart.style.top = window.scrollY + -50 + "px";

    // Thêm trái tim vào container
    heartContainer.appendChild(heart);

    // Sau 5 giây, xóa trái tim để tránh quá tải bộ nhớ
    setTimeout(() => {
      heart.remove();
    }, 5000);
  };

  // Sử dụng useEffect để tạo trái tim mỗi 500ms
  useEffect(() => {
    const interval = setInterval(createHeart, 800);
    return () => clearInterval(interval); // Cleanup interval khi component bị unmounted
  }, []);

  return (
    <main
      id="heart-container"
      className="min-h-screen flex justify-center bg-[#cccccc] "
    >
      <div className="w-[430px]">
        <div className="bg-white p-2">
          <TitleComponent />
          <SliderComponent />
          <SendMessage />
          <Album />
          <CountdownComponent />
          <Thanks></Thanks>
          <LoveStory />
        </div>
      </div>
    </main>
  );
};

export default Main;
