import React from "react";
import Layout from "../../Components/Layout";
import Search from "../../Components/Search";
import ScooterBattery from "../../Components/ScooterBattery";

import star from "../../Assets/Review/star.png"

const ScooterPage = () => {
  const ScooterData = [
    {
      serial: "#1423984567",
      battery: 30,
      location: "loremipsum",
      review: 4.5,
      status: "start",
    },
    {
      serial: "#1423984567",
      battery: 80,
      location: "loremipsum",
      review: 4.5,
      status: "start",
    },
    {
      serial: "#1423984567",
      battery: 50,
      location: "loremipsum",
      review: 4.5,
      status: "start",
    },
    {
      serial: "#1423984567",
      battery: 100,
      location: "loremipsum",
      review: 4.5,
      status: "start",
    },
    {
      serial: "#1423984567",
      battery: 15,
      location: "loremipsum",
      review: 4.5,
      status: "start",
    },
  ];
  return (
    <Layout>
 
      <div className="relative h-screen overflow-x-hidden w-full bg-gray-100 px-2 md:px-6">
        <Search />
     
        
        <div className=" bg-white px-2 pt-4 justify-center items-center mt-10 w-full  h-auto">
        <div class="relative overflow-x-auto  justify-center items-center  px-4  sm:rounded-lg">
              
                <table class="text-md  text-left  text-gray-500 dark:text-gray-400 m-auto   lg:w-full md:w-[40%] h-full">
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
                        REVIEW
                      </th>
                      <th scope="col" class="lg:px-6 md:px-4 px-4 py-3 ">
                        STATUS
                      </th>
                     
                    </tr>
                  </thead>
                  <tbody>
                    {ScooterData.map((item) => (
                      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th
                          scope="row"
                          class="lg:px-6 md:px-4 px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {item.serial}
                        </th>
                        <td class="lg:px-6 md:px-4 px-4 py-4">
                        <ScooterBattery batteryPercentage={item.battery}/>
                        </td>
                        <td class="lg:px-6 md:px-4 px-4 py-4">
                          <a href= "">{item.location}</a>
                         
                        </td>
                        <td class="lg:px-6 md:px-4 px-4 py-4 flex flex-row gap-2"><div className="w-4"><img src={star} className="w-full mt-[4px]"/></div>{item.review}</td>
                        <td class={`lg:px-6 md:px-4 px-4 py-4 ${item.status=="active"? "text-green-500" : "text-sidebarheadinghoveringcolor"}`}>
                          <div className="rounded-lg bg-green-300 text-green-900 lg:w-[70%] w-[100%] text-center py-[2px] px-[2px]">{item.status}</div>
                        </td>
                      
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              </div>
          
          
        
      </div>
      </Layout>
  
  );
};

export default ScooterPage;
