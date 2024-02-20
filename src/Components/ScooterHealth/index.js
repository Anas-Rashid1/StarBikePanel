import React from "react";
import Layout from "../Layout";
import Scooter from "../../Assets/ScooterHealth/Scooter.png";
import { DatePicker } from "antd";
import { geocode, setKey, setLanguage, fromAddress } from "react-geocode";
const ScooterHealth = ({ activeScooter }) => {
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
      value: AddressFromLatLong(
        activeScooter?.latitude,
        activeScooter?.longitude
      ),
      color: "purple",
    },
  ];
  return (
    <>
      <div className="w-[95%] h-[40%] bg-white px-6 py-4 rounded-lg ml-2">
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
    </>
  );
};

export default ScooterHealth;
