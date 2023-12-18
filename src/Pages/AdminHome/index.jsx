import React from "react";
// import { Col, Image, MenuItemProps } from "antd";
import img1 from "../../Assets/boxImages/Shape.png";
import logo from "../../Assets/Logo/Logo.png";
import SideBar from "../../Components/SideBar";
import PanelBox from "../../Components/panelBox";
import MapComponent from "../../Components/Mapbox";
import SearchBar from "../../Components/searchbar";
import CostAnalysisGraph from "../../Components/graph";

const AdminHome = () => {
  return (<>
    <div className=" w-screen  flex bg-gray-100">
      <SideBar />
      
    <div className="flex flex-col ">
      <PanelBox/>
    
      <MapComponent/>
      <CostAnalysisGraph/>
    </div>

    </div>
  

  </>
  );
};

export default AdminHome;
