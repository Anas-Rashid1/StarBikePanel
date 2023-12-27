import React from "react";
// import { Col, Image, MenuItemProps } from "antd";
import img1 from "../../Assets/boxImages/Shape.png";

import SideBar from "../../Components/SideBar";

import Sidebar from "../../Components/sidebar2";

import PanelBox from "../../Components/panelBox";
import MapComponent from "../../Components/Mapbox";
import SearchBar from "../../Components/searchbar";
import CostAnalysisGraph from "../../Components/graph";
import Layout from "../../Components/Layout";
import ScooterHealth from "../../Components/ScooterHealth";
import RecentJobs from "../../Components/RecentJobs";
import Search from "../../Components/Search";
import AdminLogin from "../Login";

const AdminHome = () => {
  return (
    <>
    {/* <AdminLogin/> */}
      
        <div className="relative h-screen overflow-x-hidden bg-gray-100">
          <Search />

          <div className="w-[100%] flex flex-col md:flex-row xl:gap-12  ">
            <div className="flex flex-col  w-full md:w-[55%]  lg:w-[70%] xl:w-[70%]  sm:w-[70%]  ">
              <PanelBox />
              <div className='flex justify-center items-center flex-col w-full px-4 mb-4'>
                <div className=" w-full md:w-full lg:w-full xl:w-full m-2">
                <SearchBar/>
                
                </div>
                
              <MapComponent  className={" h-[300px] w-full md:w-full lg:w-full xl:w-full m-2 "}/>
              </div>
              <CostAnalysisGraph />
            </div>
            <div className="flex flex-col gap-12  mt-4">
              <ScooterHealth />
              <RecentJobs />
            </div>
          </div>
        </div>
     
    </>
  );
};

export default AdminHome;
