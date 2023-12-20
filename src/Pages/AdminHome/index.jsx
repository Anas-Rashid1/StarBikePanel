import React from "react";
// import { Col, Image, MenuItemProps } from "antd";
import img1 from "../../Assets/boxImages/Shape.png";
import logo from "../../Assets/Logo/Logo.png";
import SideBar from "../../Components/SideBar";
import PanelBox from "../../Components/panelBox";
import MapComponent from "../../Components/Mapbox";
import SearchBar from "../../Components/searchbar";
import CostAnalysisGraph from "../../Components/graph";
import Sidebar from "../../Components/sidebar2";

const AdminHome = () => {
  return (<>
    <div className=" w-screen  flex bg-gray-100">
      {/* <SideBar /> */}
      {/* <Sidebar/> */}
      
    <div className="flex flex-col w-full  sm:w-[70%] ">
      <PanelBox/>
    
      <MapComponent/>
      <CostAnalysisGraph/>
    </div>

    </div>
  

  </>
  );
};

export default AdminHome;
