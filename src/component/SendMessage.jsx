import { useEffect, useState } from "react";
import { FaRegCommentDots, FaEnvelope } from "react-icons/fa";

const Modal = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [attendance, setAttendance] = useState(""); // For attendance selection
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Build the Google Form prefilled URL with the name, attendance, and message
    const formUrl = `https://docs.google.com/forms/d/e/1FAIpQLSf44tHZAXBKdp928_6GngBjpD9p3c4S9dkiM1sYnbKfGzENCA/formResponse?&submit=Submit?usp=pp_url&entry.559352220=${encodeURIComponent(
      name
    )}&entry.877086558=${encodeURIComponent(
      attendance
    )}&entry.1751303409=${encodeURIComponent(message)}`;

    // Redirect the user to the prefilled Google Form URL
    window.open(formUrl, "_blank");

    // Close the modal after redirecting
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-md shadow-lg w-96 relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-2xl font-semibold text-center mb-4">
          Gửi lời chúc
        </h2>
        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Tên của bạn"
            className="p-2 border rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <select
            className="p-2 border rounded"
            value={attendance}
            onChange={(e) => setAttendance(e.target.value)}
          >
            <option value="">Bạn có thể tham dự không?</option>
            <option value="Có, tôi sẽ tới đó">Có, tôi sẽ tới đó</option>
            <option value="Rất tiếc, tôi không thể tham dự">
              Rất tiếc, tôi không thể tham dự
            </option>
          </select>
          <textarea
            placeholder="Lời chúc của bạn"
            className="p-2 border rounded"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            type="submit"
            className="p-2 bg-[#dcbdc5] text-white rounded hover:bg-[#d85878]"
          >
            Gửi
          </button>
        </form>
      </div>
    </div>
  );
};

const SendMessage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsVisible(scrollTop > 270 && scrollTop < 1000);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex justify-center space-x-4 mt-12 overflow-hidden">
      {/* Nút Gửi lời chúc */}
      <button
        onClick={() => setShowModal(true)}
        className={`flex items-center px-4 py-2 bg-[#dcbdc5] text-white rounded-md hover:bg-gray-800 transition-all duration-500 transform ${
          isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
        }`}
      >
        <FaRegCommentDots className="mr-2" /> Gửi lời chúc
      </button>

      {/* Nút Xác nhận tham dự */}
      <button
        className={`flex items-center px-4 py-2 bg-[#dcbdc5] text-white rounded-md hover:bg-gray-800 transition-all duration-500 transform ${
          isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
        }`}
      >
        <FaEnvelope className="mr-2" /> Xác Nhận Tham Dự
      </button>

      {/* Modal */}
      <Modal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default SendMessage;
