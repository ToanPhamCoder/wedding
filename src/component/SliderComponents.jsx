// components/SliderComponent.js
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TextContent from "./TextContent";
const SliderComponent = () => {
  return (
    <div className="slider-container">
      <img src="https://res.cloudinary.com/dpohykmqq/image/upload/v1729759646/1DC02498_fft5ga.jpg" className="w-full  object-cover no-caret" />
      <TextContent />
    </div>
  );
};

export default SliderComponent;
