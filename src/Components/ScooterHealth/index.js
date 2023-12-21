import React from "react";
import Layout from "../Layout";
import Scooter from "../../Assets/ScooterHealth/Scooter.png";
import { DatePicker } from "antd";
const ScooterHealth = () => {
  const ScooterHealthData = [
    {
      name: "Battery",
      value: "50%",
      color: "green",
    },
    {
      name: "Engine Status",
      value: "ON",
      color: "yellow",
    },
    {
      name: "Distance",
      value: "150km",
      color: "Red",
    },
    {
      name: "Battery Life",
      value: "99%",
      color: "purple",
    },
  ];
  return (
    <div className="w-[95%] bg-white px-6 py-4 rounded-lg ml-2">
      <div className="flex flex-row justify-between">
        <h1 className="text-xl font-semibold">Scooter Health</h1>
        <div className="w-[30%]">
          <DatePicker picker="year" />
        </div>
      </div>
      <div className="items-center justify-center flex h-[200px]">
        <img className=" w-30 object-cover" src={Scooter} />
      </div>

      <hr />
      <div className="w-full flex flex-col gap-4 mt-2">
        {ScooterHealthData.map((item) => (
          <div
            className="flex flex-row justify-between items-center"
            style={{ color: `${item.color}` }}
          >
            <div className="flex flex-row gap-4">
              <div
                className="w-2 h-2 rounded-full mt-[10px]"
                style={{ backgroundColor: `${item.color}` }}
              ></div>
              <div className="text-black">{item.name}</div>
            </div>
            <div>{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScooterHealth;
