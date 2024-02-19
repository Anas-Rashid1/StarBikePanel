import React, { useState } from "react";
// import { Col, Image, MenuItemProps } from "antd";
import img1 from "../../Assets/boxImages/Shape.png";

import SideBar from "../../Components/SideBar";

import Sidebar from "../../Components/sidebar2";
import { useSelector, useDispatch } from "react-redux";
import PanelBox from "../../Components/panelBox";
import MapComponent from "../../Components/Mapbox";
import SearchBar from "../../Components/searchbar";
import CostAnalysisGraph from "../../Components/graph";
import Layout from "../../Components/Layout";
import ScooterHealth from "../../Components/ScooterHealth";
import RecentJobs from "../../Components/RecentJobs";
import Search from "../../Components/Search";
import AdminLogin from "../Login";
import { SignInRequest } from "../../Redux/SignInslice";
import StartMqtt from "../../Components/Mqtt";

const AdminHome = () => {
  const [activeScooter, setActiveScooter] = useState();
  const dipatch = useDispatch();

  // const check = useSelector((state) => state.SingnIn.adminData.token);
  // const check2 = useSelector((state) => state.Scooters.Scooters);

  return (
    <>
      <Layout>
        <div className=" h-screen overflow-x-hidden bg-gray-100 relative">
          <Search />
          <button
            onClick={() => {
              dipatch(
                SignInRequest({ email: "admin@gmail.com", pass: "admin123" })
              );
            }}
          ></button>

          <div className="w-[100%] flex flex-col md:flex-row xl:gap-12  ">
            <div className="flex flex-col  w-full md:w-[55%]  lg:w-[70%] xl:w-[70%]  sm:w-[70%]  ">
              <PanelBox />
              <div className="flex justify-center items-center flex-col w-full  mb-4 mx-5">
                <div className=" w-full md:w-full lg:w-full xl:w-full my-2">
                  <SearchBar />
                </div>

                <MapComponent setActiveScooter={setActiveScooter} />
              </div>
              <CostAnalysisGraph />
            </div>
            <div className="flex flex-col gap-12  mt-4">
              <ScooterHealth activeScooter={activeScooter} />
              <RecentJobs />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default AdminHome;
