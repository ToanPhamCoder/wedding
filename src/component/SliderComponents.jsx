// components/SliderComponent.js
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TextContent from "./TextContent";

const SliderComponent = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <img
          src="https://images.unsplash.com/photo-1726609817060-1dbb2c29d609?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="slide-image"
        />
        <img
          src="https://images.unsplash.com/photo-1605111218521-b18e339a1f94?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="slide-image"
        />
        <img
          src="https://images.unsplash.com/photo-1720048171419-b515a96a73b8?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="slide-image"
        />
      </Slider>

      <TextContent />
    </div>
  );
};

export default SliderComponent;
