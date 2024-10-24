import React, { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion"; // Import framer-motion

const WeddingGallery = () => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  // Declare both images and thumbnails
  const images = [
    "https://res.cloudinary.com/dpohykmqq/image/upload/v1729759646/1DC02498_fft5ga.jpg",
    "https://res.cloudinary.com/dpohykmqq/image/upload/v1729759646/1DC02498_fft5ga.jpg",
    "https://res.cloudinary.com/dpohykmqq/image/upload/v1729759646/1DC02498_fft5ga.jpg",
    "https://res.cloudinary.com/dpohykmqq/image/upload/v1729759646/1DC02498_fft5ga.jpg",
    "https://res.cloudinary.com/dpohykmqq/image/upload/v1729759646/1DC02498_fft5ga.jpg",
    "https://res.cloudinary.com/dpohykmqq/image/upload/v1729759646/1DC02498_fft5ga.jpg",
    "https://res.cloudinary.com/dpohykmqq/image/upload/v1729759646/1DC02498_fft5ga.jpg",
    "https://res.cloudinary.com/dpohykmqq/image/upload/v1729759646/1DC02498_fft5ga.jpg",
  ];

  const thumbnails = [
    {
      src: images[0],
      cols: "col-span-2",
      rows: "row-span-2",
      position: "left",
    },
    {
      src: images[1],
      cols: "col-span-1",
      rows: "row-span-1",
      position: "right",
    },
    {
      src: images[2],
      cols: "col-span-1",
      rows: "row-span-1",
      position: "right",
    },
    {
      src: images[3],
      cols: "col-span-1",
      rows: "row-span-1",
      position: "right",
    },
    {
      src: images[4],
      cols: "col-span-1",
      rows: "row-span-1",
      position: "right",
    },
    {
      src: images[5],
      cols: "col-span-1",
      rows: "row-span-1",
      position: "left",
    },
    {
      src: images[6],
      cols: "col-span-1",
      rows: "row-span-1",
      position: "left",
    },
    {
      src: images[7],
      cols: "col-span-2",
      rows: "row-span-1",
      position: "right",
    },
  ];

  const nextImage = () => {
    setPhotoIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setPhotoIndex(
      (prevIndex) => (prevIndex + images.length - 1) % images.length
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      console.log("scrollTop=" + scrollTop);

      if (scrollTop > 470 && scrollTop < 1400) {
        // Scrolling down
        setIsVisible(true);
      } else {
        // Scrolling up
        setIsVisible(false);
      }

      setLastScrollTop(scrollTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);

  const buttonVariants = {
    hiddenLeft: { opacity: 0, x: -100 }, // Xuất hiện từ ngoài màn hình
    hiddenRight: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 }, // Hiện ở vị trí bình thường
  };

  return (
    <div className="container mx-auto p-4 overflow-hidden">
      <motion.div className="grid grid-cols-4 gap-4">
        {thumbnails.map((image, index) => (
          <motion.div
            key={index}
            className={`${image.cols} ${image.rows} overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105`}
            onClick={() => {
              setPhotoIndex(index);
              setIsOpen(true);
            }}
            viewport={{ once: true }} // Đảm bảo rằng mỗi ảnh chỉ hiện ra một lần khi cuộn tới
            initial={image.position === "right" ? "hiddenRight" : "hiddenLeft"} // Conditionally set initial animation based on position
            animate={
              isVisible
                ? "visible"
                : image.position === "right"
                ? "hiddenRight"
                : "hiddenLeft"
            } // Conditionally set animate based on visibility
            variants={buttonVariants}
            transition={{ duration: isVisible ? 0.5 : 0.2 }} // Xuất hiện chậm (0.5s), biến mất nhanh (0.2s)
          >
            <img
              src={image.src}
              alt={`Wedding photo ${index + 1}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </motion.div>
        ))}
      </motion.div>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col">
          {/* Main image container */}
          <div className="relative flex-1 flex items-center justify-center">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <X size={32} />
            </button>

            <button
              onClick={prevImage}
              className="absolute left-4 text-white hover:text-gray-300"
            >
              <ChevronLeft size={48} />
            </button>

            <img
              src={images[photoIndex]}
              alt={`Wedding photo ${photoIndex + 1}`}
              className="max-h-[75vh] max-w-[90vw] object-contain"
            />

            <button
              onClick={nextImage}
              className="absolute right-4 text-white hover:text-gray-300"
            >
              <ChevronRight size={48} />
            </button>
          </div>

          {/* Thumbnails strip */}
          <div className="h-24 bg-black bg-opacity-50 p-2">
            <div className="flex gap-2 overflow-x-auto h-full">
              {images.map((image, index) => (
                <div
                  key={index}
                  onClick={() => setPhotoIndex(index)}
                  className={`flex-none h-full cursor-pointer transition-opacity duration-300 hover:opacity-100 ${
                    index === photoIndex
                      ? "opacity-100 ring-2 ring-white"
                      : "opacity-50"
                  }`}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="h-full w-auto object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      <div className="text-center mt-8">
        <button
          className=" px-4 py-2 bg-[#dcbdc5] text-white rounded-md hover:bg-gray-800 transition duration-300"
          onClick={() => setIsOpen(true)}
        >
          Tất cả hình ảnh
        </button>
      </div>
    </div>
  );
};

export default WeddingGallery;
