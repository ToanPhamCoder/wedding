// components/SliderComponent.js
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TextContent from "./TextContent";
const SliderComponent = () => {
  return (
    <div className="slider-container">
      <img src="https://res.cloudinary.com/dpohykmqq/image/upload/v1729780050/1DC04505_lpal9a.jpg" className="w-full  object-cover no-caret" />
      <TextContent />
    </div>
  );
};

export default SliderComponent;
