import React, { useState , useEffect } from "react";
import { useDispatch , useSelector } from "react-redux";
import axios from "axios";
import { updateOrAddLed } from "../../Redux/ScooterData";
const ToggleButton = ({imei}) => {
  
  const [activeScooter , setActiveScooter] = useState([]);
  const [isActive , setIsActive] = useState(false);
 
  const scooters = useSelector((state)=>state.led.ScootersLed);

  
  
 
  const dispatch = useDispatch();

  const onLed = async (imei) => {
    // if (sc && sc.status === "on") {
    //  setIsActive(true);
    //  localStorage.setItem(`active led${imei}` , isActive);
    //   return; 
    // }
    // else{
    try {
      const {data} = await axios.post(
        "http://localhost:4000/scooter/ledon",
        {topic: imei }
      );
      console.log(data , "led");
      dispatch(updateOrAddLed(data));
    } catch (error) {
      console.log("Something went wrong:", error.message);   
    } 
  // }
  };

  const offLed = async (imei) => {
    // const scooter = scooters.find((scooter) => scooter.imei === imei);
    // if (scooter && scooter.status !== "off") {
    //   setIsActive(false);
    //   localStorage.removeItem(`active led${imei}`);
    //   return; 
    // }
    // else{
    try {
      const {data} = await axios.post(
        "http://localhost:4000/scooter/ledoff",
        {topic: imei }
      );
      console.log(data , "led");
      console.log(isActive , "active");
      dispatch(updateOrAddLed(data));
    } catch (error) {
      console.log("Something went wrong:", error.message);   
    }
  // } 
  };

  useEffect(() => {
     
    console.log("Scooters updated:", scooters);
    setActiveScooter(scooters);
    (activeScooter.find((scooter) => scooter.imei == imei))?.status == "on"? setIsActive(true) : setIsActive(false);


  }, [scooters , activeScooter]);
  console.log(activeScooter , "opop");
 console.log( (activeScooter.find((scooter) => scooter.imei == imei))?.status , "aqaq");

  return (
    <div className="flex items-center">
      <button
        className={`relative w-12 h-6 ${
          isActive ?  "bg-green-400" : "bg-gray-400"
        } rounded-full focus:outline-none`}
        onClick={()=>{

          isActive == false ? onLed(imei): offLed(imei) }}
      >
        <span
          className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-md transform duration-300 ${
            isActive ? "translate-x-full" : ""
          }`}
        ></span>
      </button>
    </div>
  );
};

export default ToggleButton;
