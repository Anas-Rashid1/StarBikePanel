import React, { useEffect, useState } from "react";
import Layout from "../Layout";
import Scooter from "../../Assets/ScooterHealth/Scooter.png";
import { DatePicker } from "antd";
import { geocode, setKey, setLanguage, fromAddress } from "react-geocode";
import { useSelector } from "react-redux";
const ScooterHealth = ({ activeScooterImei }) => {
  const [activeScooter, setActiveScooter] = useState();

  const ScooterData = useSelector((state) => state.Scooters.Scooters);

  useEffect(() => {
    const scooter = ScooterData.find(
      (scooter) => scooter.imei === activeScooterImei
    );
    console.log("plzzz", scooter);
    setActiveScooter(scooter);
  }, [activeScooterImei, ScooterData]);

  const AddressFromLatLong = (lat, long) => {
    geocode("latlng", `${lat},${long}`, {
      key: process.env.REACT_APP_GOOGLE_API_KEY,
      language: "en",
      region: "gr",
    })
      .then((response) => {
        const address = response[0].formatted_address;
        return address;
      })
      .catch((error) => {
        console.error(error);
      });
  };
  // const newScooter = {
  //   imei: imei,
  //   iotbattery: null,
  //   scooterbattery: null,
  //   totalRide: null,
  //   batterycycles: null,
  //   powerstusflag: null,
  //   speedlimit: null,
  //   latitude: null,
  //   longitude: null,
  //   signalstrength: null,
  //   riderName: "",
  //   riderContact: null,
  //   totaltrips: null,
  //   totaltime: null,
  //   batterycapacity: null,
  //   ...updateValues,
  // };

  console.log(activeScooter , "scooterr..")
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
        {ScooterHealthData.map((item, index) => (
          <div
            key={index}
            className="flex flex-row justify-between items-center"
            // style={{ color: calculateColor(item.value) }}
          >
            <div className="flex flex-row gap-4">
              <div
                className="w-2 h-2 rounded-full mt-[10px]"
                // style={{ backgroundColor: calculateColor(item.value) }}
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