// components/SliderComponent.js
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TextContent from "./TextContent";
import * as images from "../assets/images"; // Import all images as an object
const SliderComponent = () => {
  return (
    <div className="slider-container">
      <img src={images.image18} className="w-full  object-cover no-caret" />
      <TextContent />
    </div>
  );
};

export default SliderComponent;
