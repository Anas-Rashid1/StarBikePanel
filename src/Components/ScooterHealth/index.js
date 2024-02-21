import React, { useEffect, useState } from "react";
import Layout from "../Layout";
import Scooter from "../../Assets/ScooterHealth/Scooter.png";
import { DatePicker } from "antd";
import { geocode, setKey, setLanguage, fromAddress } from "react-geocode";
import { useSelector } from "react-redux";
const ScooterHealth = ({ activeScooterImei }) => {
  const [activeScooter, setActiveScooter] = useState();
  const [address, setAddress] = useState();
  const ScooterData = useSelector((state) => state.Scooters.Scooters);

  useEffect(() => {
    const handleAddress = async () => {
      let add = await AddressFromLatLong(scooter?.latitude, scooter?.longitude);
      setAddress(add);
    };
    const scooter = ScooterData.find(
      (scooter) => scooter.imei === activeScooterImei
    );
    console.log("plzzz", scooter);
    setActiveScooter(scooter);
    handleAddress();
  }, [activeScooterImei, ScooterData]);

  async function AddressFromLatLong(lat, long) {
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
  }
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

  console.log(activeScooter, "scooterr..");
  const ScooterHealthData = [
    {
      name: "Battery",
      value: activeScooter?.scooterbattery,
      color: "green",
    },

    {
      name: "Speed Limit",
      value: activeScooter?.speedlimit,
      color: "green",
    },

    {
      name: "Iot Battery",
      value: activeScooter?.iotbattery,
      color: "green",
    },

    {
      name: "Signal Strength",
      value: activeScooter?.signalstrength,
      color: "red",
    },

    {
      name: "Battery Capacity",
      value: activeScooter?.batterycapacity,
      color: "purple",
    },
    {
      name: "Imei",
      value: activeScooter?.imei,
      color: "purple",
    },
    {
      name: "flag",
      value: activeScooter?.powerstusflag,
      color: "purple",
    },
    {
      name: "Scooter Address",
      value: address,
      color: "purple",
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
