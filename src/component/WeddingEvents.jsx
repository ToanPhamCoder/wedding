import React, { useState } from "react";
import { Calendar } from "@nextui-org/calendar";
import "react-calendar/dist/Calendar.css";
import { parseDate } from "@internationalized/date";
import ButtonCommon from "@/common/ButtonCommon";

const WeddingEvent = ({ title, time, location, image, id }) => {
  const [isCalendarOpen, setCalendarOpen] = useState(false);

  // Toggle the calendar modal open/close state
  const toggleCalendarModal = () => setCalendarOpen(!isCalendarOpen);

  // Open location in Google Maps
  const openGoogleMaps = () => {
    const encodedAddress = encodeURIComponent(location);
    if (id === 1) {
      const mapUrl = "https://maps.app.goo.gl/nHEtHEh477Wp7yBe9";
      window.open(mapUrl, "_blank");
    } else {
      const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
      window.open(mapUrl, "_blank");
    }
  };

  const convertToISODate = (dateString) => {
    console.log("match", dateString);

    // Match against "Ngày DD-MM-YYYY" or "Ngày DD/MM/YYYY"
    const match = dateString.match(/(\d{2})[-/](\d{2})[-/](\d{4})/);
    if (match) {
      const [_, day, month, year] = match;
      // Return in "YYYY-MM-DD" format
      console.log("match", year, month, <day></day>);
      const dateString = `${year}-${month}-${day}`;
      return parseDate(dateString);
    }

    return null; // Return null if the format doesn't match
  };

  return (
    <div className="bg-white shadow-lg rounded-md p-4 mb-6 flex items-center space-x-4">
      {/* Event Image */}
      <img src={image} alt={title} className="w-36 object-cover rounded-md" />

      {/* Event Details */}
      <div>
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-gray-600 mb-2">
          {time.morning} <br />
          <span className="font-semibold block">{time.date}</span>
        </p>
        <p className="text-gray-500 mb-4">{location}</p>
        <div className="flex space-x-4">
          <ButtonCommon onClick={toggleCalendarModal}>Xem lịch</ButtonCommon>
          <ButtonCommon onClick={openGoogleMaps}>Xem bản đồ</ButtonCommon>
        </div>
      </div>

      {/* Calendar Modal */}
      {isCalendarOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50 ">
          <div className="bg-white w-[356px] rounded-lg shadow-lg p-4 flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-4">LỊCH {title}</h2>
            <Calendar
              defaultValue={convertToISODate(time.date)}
              calendarWidth={300}
              color="danger"
            />
            <div className="flex justify-end mt-4 w-full">
              <ButtonCommon onClick={toggleCalendarModal}>Đóng</ButtonCommon>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const WeddingEvents = () => {
  const events = [
    {
      id: 1,
      title: "TIỆC CƯỚI NHÀ NỮ",
      time: {
        morning: "Sáng: 10:00 - Chiều 16:00",
        date: "Ngày 30/11/2024",
      },
      location: "Số 07 Đường D4, Khu phố 3, Phường 1, TX Kiến Tường, Long An",
      image:
        "https://res.cloudinary.com/dpohykmqq/image/upload/h_1080/c_fit/v1729759646/1DC02498_fft5ga.jpg",
    },
    {
      id: 2,
      title: "TIỆC CƯỚI NHÀ NAM",
      time: {
        morning: "Chiều 17:30",
        date: "Ngày 01-12-2024",
      },
      location: "793/57/16 Trần Xuân Xoạn,P. Tân Hưng, Q.7, TP.HCM",
      image:
        "https://res.cloudinary.com/dpohykmqq/image/upload/h_1080/c_fit/v1729780038/1DC01685_itetou.jpg",
    },
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Sự Kiện Cưới</h1>
        <div>
          {events.map((event, index) => (
            <WeddingEvent
              key={index}
              title={event.title}
              time={event.time}
              location={event.location}
              image={event.image}
              id={event.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeddingEvents;
