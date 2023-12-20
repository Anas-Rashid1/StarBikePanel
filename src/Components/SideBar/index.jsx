

import React, { useState } from "react";
import { Col, Image } from "antd";
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

const General = [
  {
    id: 1,
    Name: "Dashboard",
    GreyIcon: greyIcon_dashboard,
    ColorIcon: colorIcon_dashboard,
  },
  {
    id: 2,
    Name: "Scooter",
    GreyIcon: greyIcon_scooter,
    ColorIcon: colorIcon_scooter,
  },
  { id: 3, Name: "User", GreyIcon: greyIcon_users, ColorIcon: colorIcon_users },
  {
    id: 4,
    Name: "Location",
    GreyIcon: greyIcon_location,
    ColorIcon: colorIcon_location,
  },
  {
    id: 5,
    Name: "Reports",
    GreyIcon: greyIcon_reports,
    ColorIcon: colorIcon_reports,
  },
  {
    id: 6,
    Name: "History",
    GreyIcon: greyIcon_history,
    ColorIcon: colorIcon_history,
  },
  {
    id: 7,
    Name: "Feedback",
    GreyIcon: greyIcon_feedback,
    ColorIcon: colorIcon_feedback,
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

  return (
    <div className="xl:w-2/12 lg:w-3/12 sm:w-4/12  bg-white h-auto">
      <div className="bg-white flex justify-center items-center pb-3">
        <Image src={logo} width={67} preview={false} />
      </div>

      <p className=" underline pt-5 pb-2 pl-8 text-sidebarheadingcolor ">
        General{" "}
      </p>
      {General.map((item) => {
        return (
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
                <div className=" flex-1 inline-block ml-10">
                  <Image src={item?.ColorIcon} width={20} preview={false} />
                  <p className=" ml-10 -translate-y-8   text-sidebarheadinghoveringcolor  ">
                    {item.Name}
                  </p>
                </div>
              ) : (
                <div className=" flex-1 flex-row inline-block ml-10 ">
                  <Image src={item?.GreyIcon} width={20} preview={false} />
                  <p className=" ml-10 -translate-y-8  text-sidebarheadingcolor  ">
                    {item.Name}
                  </p>
                </div>
              )}
            </div>
          </div>
        );
      })}

      <p className=" underline pt-5 pb-2 pl-8 text-sidebarheadingcolor ">
        Accounts{" "}
      </p>

      {Account.map((item) => {
        return (
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
                <div className=" flex-1 inline-block ml-10">
                  <Image src={item?.ColorIcon} width={20} preview={false} />
                  <p className=" ml-10 -translate-y-8   text-sidebarheadinghoveringcolor  ">
                    {item.Name}
                  </p>
                </div>
              ) : (
                <div className=" flex-1 flex-row inline-block ml-10 ">
                  <Image src={item?.GreyIcon} width={20} preview={false} />
                  <p className=" ml-10 -translate-y-8  text-sidebarheadingcolor  ">
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
