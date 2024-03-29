import React, { useEffect, useState } from "react";

const ScooterBattery = ({ batteryPercentage }) => {
  console.log(batteryPercentage, "batteryPercentage");

  const numberOfBars = 5; // Change the number of bars as needed
  const [filledBars, setFilledBars] = useState(0);

  useEffect(() => {
    setFilledBars(
      Math.ceil((parseInt(batteryPercentage) / 100) * numberOfBars)
    );
  }, [batteryPercentage]);

  console.log(filledBars, "filled");

  return (
    <div className=" flex flex-row gap-[3px] ">
      <div className="flex flex-row gap-[3px]">
        {filledBars &&
          [...Array(filledBars)].map((_, index) => (
            <div
              key={index}
              className={`h-6 w-2 ${
                filledBars > 3 ? "bg-green-600" : "bg-yellow-600"
              }  mb-1`}
            />
          ))}
      </div>
      <div className="flex flex-row gap-[3px]">
        {filledBars &&
          [...Array(numberOfBars - filledBars)].map((_, index) => (
            <div key={index} className={`h-6 w-2 bg-gray-600 mb-1`} />
          ))}
      </div>
    </div>
  );
};

export default ScooterBattery;
