import { FaRegCommentDots, FaEnvelope } from "react-icons/fa"; // Sử dụng react-icons cho các biểu tượng

const TitleComponent = () => {
  return (
    <div className="day_area  relative p-1 text-center">
      <div className="flex pl-[200px] items-center text-center ">
        <p
          className="  text-[#3d3d3d] absolute bottom-[60%] font-roboto text-lg"
          style={{ left: "calc(100% - 290px)" }}
        >
          Chúng tôi
        </p>
        <div className="mx-2 ">
          <p className="text-[80px] font-bold m-0 font-bellota  text-[#dcbdc5] leading-none border-b-[#dcbdc5] border-b-small">
            01
          </p>
          <p className="text-[80px] font-bold m-0 font-bellota  text-[#dcbdc5] leading-none ">
            12
          </p>
        </div>
        <p className=" text-lg  mt-1  0 font-roboto">Sắp kết hôn.</p>
      </div>
    </div>
  );
};

export default TitleComponent;
