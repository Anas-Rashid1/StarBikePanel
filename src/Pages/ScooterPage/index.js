import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import Layout from "../../Components/Layout";
import Search from "../../Components/Search";
import ScooterBattery from "../../Components/ScooterBattery";
import { useSelector } from "react-redux";
import { geocode } from "react-geocode";

import star from "../../Assets/Review/star.png";
import { json } from "react-router-dom";
import ToggleButton from "../../Components/togglebutton";
import Signalstrength from "../../Components/SignalStrength";

const ScooterPage = ({ setActiveScooter }) => {
  const ScootersData = useSelector((state) => state.Scooters.Scooters);
  console.log(ScootersData , "aaa");

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

  // const ScooterData = [
  //   {
  //     serial: "#1423984567",
  //     battery: 30,
  //     location: "loremipsum",
  //     review: 4.5,
  //     status: "start",
  //   },
  //   {
  //     serial: "#1423984567",
  //     battery: 80,
  //     location: "loremipsum",
  //     review: 4.5,
  //     status: "start",
  //   },
  //   {
  //     serial: "#1423984567",
  //     battery: 50,
  //     location: "loremipsum",
  //     review: 4.5,
  //     status: "start",
  //   },
  //   {
  //     serial: "#1423984567",
  //     battery: 100,
  //     location: "loremipsum",
  //     review: 4.5,
  //     status: "start",
  //   },
  //   {
  //     serial: "#1423984567",
  //     battery: 15,
  //     location: "loremipsum",
  //     review: 4.5,
  //     status: "start",
  //   },
  // ];
  return (
    <motion.div initial={{scaleY:0}} animate={{scaleY:1}} exit={{scaleY:0}} className="relative h-screen overflow-x-hidden w-full bg-gray-100 px-2 md:px-6">
      <Search />

      <div className=" bg-white px-2 pt-4 justify-center items-center mt-10 w-full  h-auto">
        <div class="relative overflow-x-auto  justify-center items-center  px-4  sm:rounded-lg">
          <table class="text-md  text-left bg-white  text-gray-500 dark:text-gray-400 m-auto   lg:w-full md:w-[40%] h-full">
            <thead class="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="lg:px-6 md:px-4 px-4 py-3">
                  SCOOTER SERIAL
                </th>
                <th scope="col" class="lg:px-6 md:px-4 px-4 py-3">
                  BATTERY
                </th>
                <th scope="col" class="lg:px-6 md:px-4 px-4 py-3">
                  LOCATION
                </th>
                <th scope="col" class="lg:px-6 md:px-4 px-4 py-3">
                  IoT BATTERY
                </th>
                <th scope="col" class="lg:px-6 md:px-4 px-4 py-3">
                  SIGNAL STRENGTH
                </th>
                <th scope="col" class="lg:px-6 md:px-4 px-4 py-3 ">
                  IoT LED
                </th>
              </tr>
            </thead>
            <tbody>
              {ScootersData.map((item) => (
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    class="lg:px-6 md:px-4 px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {item.imei}
                  </th>
                  <td class="lg:px-6 md:px-4 px-4 py-4">
                    {console.log("rajja")}
                   
                    <ScooterBattery
                      batteryPercentage={
                        parseInt(item?.scooterbattery)
                        //  === undefined
                        //   ? 5
                        //   : item?.scooterbattery
                      }
                    />
                  </td>
                  <td class="lg:px-6 md:px-4 px-4 py-4">
                    <a href="">
                      {/* {AddressFromLatLong(item?.latitude, item?.longitude)} */}
                    </a>
                  </td>
                  <td class="lg:px-6 md:px-4 px-4 py-4">
                    <a href="">
                      <ScooterBattery batteryPercentage={
                       parseInt(item?.iotbattery)
                        
                      }/>
                  
                    </a>
                  </td>
                  <td class="lg:px-6 md:px-4 px-4 py-4 flex flex-row gap-2">
                    <Signalstrength batteryPercentage={item?.signalstrength} />
                    {item?.signalstrength === undefined
                      ? 0
                      : item?.signalstrength}
                  </td>
                  <td
                    class={`lg:px-6 md:px-4 px-4 py-4 ${
                      item.status == "active"
                        ? "text-green-500"
                        : "text-sidebarheadinghoveringcolor"
                    }`}
                  >
                    <ToggleButton imei={item?.imei} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
};

export default ScooterPage;
