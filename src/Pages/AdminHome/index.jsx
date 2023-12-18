import React from "react";
// import { Col, Image, MenuItemProps } from "antd";
import img1 from "../../Assets/boxImages/Shape.png";
import logo from "../../Assets/Logo/Logo.png";
import SideBar from "../../Components/SideBar";

import PanelBox from "../../Components/panelBox";
import MapComponent from "../../Components/Mapbox";
import SearchBar from "../../Components/searchbar";
import CostAnalysisGraph from "../../Components/graph";
import Layout from "../../Components/Layout";
import ScooterHealth from "../../Components/ScooterHealth";
import RecentJobs from "../../Components/RecentJobs";
import Search from "../../Components/Search";

const AdminHome = () => {
  return (
    <Layout>
    <div className="w-[100%] flex flex-col bg-gray-100 ">
      <div>
        <Search/>
      </div>
      
    
     
    <div className="flex lg:flex-row sm:flex-col">
    <div className="flex flex-col w-[70%]  ">
      <PanelBox/>
    
     <MapComponent/>
      <CostAnalysisGraph/> 
    </div>
    <div className="flex flex-col gap-12">
      <ScooterHealth/>
      <RecentJobs/>
    </div>
    </div>  
    

    </div> 
  

    </Layout>
  );
};

export default AdminHome;
