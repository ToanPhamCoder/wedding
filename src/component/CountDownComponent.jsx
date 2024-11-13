import React, { useState, useEffect } from "react";
import Calendar from "react-calendar"; // You need to install `react-calendar` for this
import "react-calendar/dist/Calendar.css"; // Include calendar styles

const CountdownComponent = () => {
  const targetDate = new Date("2024-12-01T00:00:00");
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeRemaining({
        days,
        hours,
        minutes,
        seconds,
      });
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="container mx-auto text-center py-10 font-sans">
      {/* Calendar */}
      <h2 className="text-xl font-bold mb-4 text-gray-700">Lễ Tân Hôn</h2>
      <h2 className="text-xl font-bold mb-4 text-gray-700">
        THÁNG 12 / 2024 (Dương Lịch)
      </h2>
      <div className="flex justify-center w-full px-8">
        <Calendar
          value={new Date(2024, 11, 1)} // December 1st, 2024
          locale="vi-VN" // Vietnamese locale
          className="w-full rounded-lg border" // Add border-radius with Tailwind
          tileDisabled={() => true} // Disable interaction with all day tiles
          formatShortWeekday={(locale, date) =>
            ["CN", "T2", "T3", "T4", "T5", "T6", "T7"][date.getDay()]
          }
        />
      </div>

      {/* Countdown */}
      <div className="countdown-container mt-8 ">
        <div className="flex justify-center space-x-12">
          <div className="text-center">
            <p className="text-5xl font-bold text-gray-800">
              {timeRemaining.days}
            </p>
            <p className="text-xl text-gray-500">Ngày</p>
          </div>
          <div className="text-center">
            <p className="text-5xl font-bold text-gray-800">
              {timeRemaining.hours}
            </p>
            <p className="text-xl text-gray-500">Giờ</p>
          </div>
          <div className="text-center">
            <p className="text-5xl font-bold text-gray-800">
              {timeRemaining.minutes}
            </p>
            <p className="text-xl text-gray-500">Phút</p>
          </div>
          <div className="text-center">
            <p className="text-5xl font-bold text-gray-800">
              {timeRemaining.seconds}
            </p>
            <p className="text-xl text-gray-500">Giây</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownComponent;
