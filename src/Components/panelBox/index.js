import React from "react";
import img1 from "../../Assets/boxImages/Shape.png";
import img2 from "../../Assets/boxImages/Icon.png";
import img3 from "../../Assets/boxImages/Icon2.png";
import img4 from "../../Assets/boxImages/Icon3.png";

const data = [
  { heading: "Usage", count: "14", imageSrc: img1, text: "54,232" },
  {
    heading: "Customer Rides",
    count: "16",
    imageSrc: img2,
    text: "Total jobs",
  },
  { heading: "Reviews", count: "57", imageSrc: img3, text: "Progress" },
  {
    heading: "Customer Transactions",
    count: "32",
    imageSrc: img4,
    text: "54,232",
  },
];

const PanelBox = () => {
  return (
    <div className="flex min-[200px]:flex-col md:flex-row mx-5 xl:mx-0  items-center  ">
      {data.map((item, index) => (
        <div
          key={index}
          className="border  border-gray-200 p-2 lg:h-[150px] md:h-[140px] xl:h-[160px] xl:w-[12rem] xl:mx-6  lg:w-[50%] mr-2 w-[90%] md:w-[25%]"
        >
          <div className="mb-1 xl:text-lg lg:text-md ">
            {" "}
            <p>{item.heading}</p>
          </div>
          <div className="flex justify-between items-center mb-1">
            <div className="xl:text-2xl lg:text-xl">
              <b> {item.count}</b>
            </div>
            <img
              src={item.imageSrc}
              alt="Dynamic Image"
              className="w-12 h-12"
            />
          </div>
          <div>{item.text}</div>
        </div>
      ))}
    </div>
  );
};

export default PanelBox;