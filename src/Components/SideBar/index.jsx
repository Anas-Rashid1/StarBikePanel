import React, { useState , useEffect } from "react";
import { Col, Image } from "antd";
import { Link } from "react-router-dom";
import logo from "../../Assets/Logo/Logo.png";
import greyIcon_dashboard from "../../Assets/SideBarIcons/DashBoard.png";
import greyIcon_feedback from "../../Assets/SideBarIcons/FeedBack.png";
import greyIcon_help from "../../Assets/SideBarIcons/Help.png";
import greyIcon_history from "../../Assets/SideBarIcons/History.png";
import greyIcon_location from "../../Assets/SideBarIcons/Location.png";
import greyIcon_reports from "../../Assets/SideBarIcons/Reports.png";
import greyIcon_scooter from "../../Assets/SideBarIcons/Scooter.png";
import greyIcon_users from "../../Assets/SideBarIcons/Users.png";
import greyIcon_settings from "../../Assets/SideBarIcons/Settings.png";

import colorIcon_dashboard from "../../Assets/SideBarColorfulIcons/DashBoard.png";
import colorIcon_feedback from "../../Assets/SideBarColorfulIcons/FeedBack.png";
import colorIcon_help from "../../Assets/SideBarColorfulIcons/Help.png";
import colorIcon_history from "../../Assets/SideBarColorfulIcons/History.png";
import colorIcon_location from "../../Assets/SideBarColorfulIcons/Location.png";
import colorIcon_reports from "../../Assets/SideBarColorfulIcons/Reports.png";
import colorIcon_scooter from "../../Assets/SideBarColorfulIcons/Scooters.png";
import colorIcon_users from "../../Assets/SideBarColorfulIcons/Users.png";
import colorIcon_settings from "../../Assets/SideBarColorfulIcons/Settings.png";




import { BsArrowLeftShort } from "react-icons/bs";
const General = [
  {
    id: 1,
    Name: "Dashboard",
    GreyIcon: greyIcon_dashboard,
    ColorIcon: colorIcon_dashboard,
    path:"/",
  },
  {
    id: 2,
    Name: "Scooter",
    GreyIcon: greyIcon_scooter,
    ColorIcon: colorIcon_scooter,
    path:"/scooter",
  },
  { id: 3, Name: "User", GreyIcon: greyIcon_users, ColorIcon: colorIcon_users , path:"/user" },
  {
    id: 4,
    Name: "Location",
    GreyIcon: greyIcon_location,
    ColorIcon: colorIcon_location,
    path:"/location",
  },
  {
    id: 5,
    Name: "Reports",
    GreyIcon: greyIcon_reports,
    ColorIcon: colorIcon_reports,
    path:"/report",
  },
  {
    id: 6,
    Name: "History",
    GreyIcon: greyIcon_history,
    ColorIcon: colorIcon_history,
  },
  
];

const Account = [
  { id: 8, Name: "Help", GreyIcon: greyIcon_help, ColorIcon: colorIcon_help },

  {
    id: 9,
    Name: "Setting",
    GreyIcon: greyIcon_settings,
    ColorIcon: colorIcon_settings,
   
  },
];

const SideBar = () => {
  const [selectedItem, setSelectedItem] = useState(1);
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 500);

  const reloadOnResize = () => {
    window.location.reload();
  };

  useEffect(() => {
    window.addEventListener("resize", reloadOnResize);

    return () => {
      window.removeEventListener("resize", reloadOnResize);
    };
  }, []);

  useEffect(() => {

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 500);
    };

   
    window.addEventListener("resize", handleResize);

   
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleArrowButtonClick = () => {
  
    if (!isMobile) {
      setOpen(!open);
    }
  };


  return (
    <div className={`${open ? "w-56" : "w-20"}   bg-white h-auto duration-300 sticky overflow-y-auto `}>
        
    
     
      <div className="bg-white flex flex-col justify-center items-center gap-2">

        <Image src={logo} width={67} preview={false} />
        <BsArrowLeftShort className={`bg-ordinary text-sidebarheadinghoveringcolor text-3xl rounded-full   z-50 top-9 border border-sidebarheadinghoveringcolor cursor-pointer ${!open && "rotate-180"}  ${isMobile && "hidden" }` } onClick={handleArrowButtonClick}/>
      </div>
    

      <p className={`text-sidebarheadingcolor font-medium text-2xl pl-4 mb-[1px] ${!open && "scale-0"}`}>
        General{" "}
      </p>
      {General.map((item) => {
        return (
          <Link to={item.path}>
          <div>
            <div
              id={item?.id}
              className=" text-sidebarheadingcolor pt-2  hover:text-sidebarheadinghoveringcolor cursor-pointer" 
              onClick={() => {
                setSelectedItem(item?.id);
              }}
            >
              <div class="box h-4 w-8">
                {item?.id === selectedItem && (
                  <div className="rectangle bg-sidebarheadinghoveringcolor rounded-r-full h-12 w-2 translate-y-1"></div>
                )}
              </div>

              {item?.id === selectedItem ? (
                <div className=" flex flex-row mb-2 ml-10">
                  <div className="">
                  <Image src={item?.ColorIcon} width={20} preview={false} className="" /></div>
                  <p className={` ml-6  text-sidebarheadinghoveringcolor  ${!open && "hidden"}`} >
                    {item.Name}
                  </p>
                </div>
              ) : (
                <div className=" flex flex-row mb-2  ml-10 ">
                  <Image src={item?.GreyIcon} width={20} preview={false} className=" "  />
                  <p className={ `ml-6  text-sidebarheadingcolor ${!open && "hidden"}`  }>
                    {item.Name}
                  </p>
                </div>
              )}
            </div>
          </div>
          </Link>
        );
      })}

      <p className={`text-sidebarheadingcolor font-medium text-2xl pl-4 ${!open && "scale-0"}`}>
        Accounts{" "}
      </p>

      {Account.map((item) => {
        return (
          <div>
            <div
              id={item?.id}
              className=" text-sidebarheadingcolor pt-1  hover:text-sidebarheadinghoveringcolor cursor-pointer"
              onClick={() => {
                setSelectedItem(item?.id);
              }}
            >
              <div class="box h-4 w-8">
                {item?.id === selectedItem && (
                  <div className="rectangle bg-sidebarheadinghoveringcolor rounded-r-full h-12 w-2 translate-y-1"></div>
                )}
              </div>

              {item?.id === selectedItem ? (
                <div className=" flex  ml-10">
                  <Image src={item?.ColorIcon} width={20} preview={false} className="" />
                  <p className={ `ml-6   text-sidebarheadinghoveringcolor  ${!open && "hidden"}`  }>
                    {item.Name}
                  </p>
                </div>
              ) : (
                <div className=" flex flex-row  ml-10 ">
                  <Image src={item?.GreyIcon} width={20} preview={false} className="" />
                  <p className={` ml-6   text-sidebarheadingcolor ${!open && "hidden"}` }>
                    {item.Name}
                  </p>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SideBar;