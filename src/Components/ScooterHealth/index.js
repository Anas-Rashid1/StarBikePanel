import React, { useEffect, useState } from "react";
import Layout from "../Layout";
import Scooter from "../../Assets/ScooterHealth/Scooter.png";
import { DatePicker } from "antd";
import { geocode, setKey, setLanguage, fromAddress } from "react-geocode";

const ScooterHealth = ({ activeScooter }) => {
  const [scooterHealthData, setScooterHealthData] = useState([]);

  const calculateColor = (value) => {
    if (value < 25) {
      return "red";
    } else if (value < 50) {
      return "yellow";
    } else {
      return "green";
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const updatedScooterHealthData = await Promise.all(
        ScooterHealthData.map(async (item) => {
          if (item.name === "Scooter Address") {
            return {
              ...item,
              value: await AddressFromLatLong(activeScooter?.latitude, activeScooter?.longitude),
            };
          } else {
            return item;
          }
        })
      );
      setScooterHealthData(updatedScooterHealthData);
    };
    fetchData();
  }, [activeScooter]);

  const AddressFromLatLong = async (lat, long) => {
    try {
      const response = await geocode("latlng", `${lat},${long}`, {
        key: process.env.REACT_APP_GOOGLE_API_KEY,
        language: "en",
        region: "gr",
      });
      const address = response.results[0]?.formatted_address;
      return address;
    } catch (error) {
      console.error(error);
      return null; // Return null or handle error appropriately
    }
  };

  const ScooterHealthData = [
    {
      name: "Battery",
      value: activeScooter?.scooterbattery,
    },
    {
      name: "Speed Limit",
      value: activeScooter?.speedlimit,
    },
    {
      name: "Iot Battery",
      value: activeScooter?.iotbattery,
    },
    {
      name: "Signal Strength",
      value: activeScooter?.signalstrength,
    },
    {
      name: "Battery Capacity",
      value: activeScooter?.batterycapacity,
    },
    {
      name: "Imei",
      value: activeScooter?.imei,
    },
    {
      name: "flag",
      value: activeScooter?.powerstusflag,
    },
    {
      name: "Scooter Address",
      value: "",
    },
  ];

  return (
    <div className="w-[100%] bg-white px-6 py-4 rounded-lg">
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
        {scooterHealthData.map((item, index) => (
          <div
            key={index}
            className="flex flex-row justify-between items-center"
            style={{ color: calculateColor(item.value) }}
          >
            <div className="flex flex-row gap-4">
              <div
                className="w-2 h-2 rounded-full mt-[10px]"
                style={{ backgroundColor: calculateColor(item.value) }}
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