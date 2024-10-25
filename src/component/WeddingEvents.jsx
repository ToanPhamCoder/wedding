import React from "react";


const WeddingEvent = ({ title, time, location, image }) => {
  return (
    <div className="bg-white shadow-lg rounded-md p-4 mb-6 flex items-center space-x-4">
      <img
        src={image}
        alt={title}
        className="w-36  object-cover rounded-md"
      />
      <div>
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-gray-600 mb-2">
          {time.morning} <br />
          <span className="font-semibold block">{time.date}</span>
        </p>
        <p className="text-gray-500 mb-4">{location}</p>
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800">
            Xem lịch
          </button>
          <button className="text-sm px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800">
            Xem bản đồ
          </button>
        </div>
      </div>
    </div>
  );
};

const WeddingEvents = () => {
  const events = [
    {
      title: "TIỆC CƯỚI NHÀ NỮ",
      time: {
        morning: "Sáng: 10:00 - Chiều 16:00",
        date: "Ngày 30/11/2024",
      },
      location: "Tư gia nhà gái - Trung Hậu Đông, Tiền Phong, Mê Linh, Hà Nội",
      image: "https://res.cloudinary.com/dpohykmqq/image/upload/v1729759646/1DC02498_fft5ga.jpg",
    },
    {
      title: "TIỆC CƯỚI NHÀ NAM",
      time: {
        morning: "Chiều 17:30",
        date: "Ngày 08/10/2024",
      },
      location: "793/57/16 Trần Xuân Xoạn,P. Tân Hưng, Q.7, TP.HCM",
      image: "https://res.cloudinary.com/dpohykmqq/image/upload/v1729759646/1DC02498_fft5ga.jpg",
    },
  ];

  return (
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">Sự Kiện Cưới</h1>
          <div>
            {events.map((event, index) => (
              <WeddingEvent
                key={index}
                title={event.title}
                time={event.time}
                location={event.location}
                image={event.image}
              />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeddingEvents;
