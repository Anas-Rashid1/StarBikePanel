import React, { useLayoutEffect, useState } from "react";
import img1 from "../../Assets/boxImages/Shape.png";
import img2 from "../../Assets/boxImages/Icon.png";
import img3 from "../../Assets/boxImages/Icon2.png";
import img4 from "../../Assets/boxImages/Icon3.png";
import CountUp from "react-countup";
import Euro from "../../Assets/boxImages/euro.png";
import axios from "axios";

const PanelBox = () => {
  const [info, setInfo] = useState();

  useLayoutEffect(() => {
    async function fetchInfo() {
      try {
        const realData = await axios.get(
          "https://star.macworldproperties.com/admin/info"
        );
        setInfo(realData.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchInfo();

    // setInterval(() => {
    //   fetchInfo();
    // }, 20000);

    // Execute the fetchInfo function
  }, []);

  const data = [
    { heading: "Usage", count: "14", imageSrc: img1, text: "54,232" },
    {
      heading: "Customer Rides",
      count: info?.totalRides[0].totalRides,
      imageSrc: img2,
      text: "Total jobs",
    },
    {
      heading: "Reviews",
      count: info?.totalFeedBack,
      imageSrc: img3,
      text: "Progress",
    },
    {
      heading: "Transactions",
      count: info?.totalTransactions[0].totalAmount,
      imageSrc: Euro,
      text: "Total Euros",
    },
  ];
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
              <b>
                {" "}
                <CountUp end={item.count} duration={5} />
              </b>
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
