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

const AdminHome = () => {
  return (<>
    <Layout>
      <div className="flex flex-col">
        <div>
          <Search />
        </div>
      <div className="w-[100%] flex flex-col md:flex-row bg-gray-100 ">

        <div className="flex flex-col  w-full  sm:w-[70%] ">
          <PanelBox />

          <MapComponent />
          <CostAnalysisGraph />
        </div>
        <div className="flex flex-col gap-12">
          <ScooterHealth />
          <RecentJobs />
        </div>
      </div>
      </div>





    </Layout>




  </>



  );
};

export default AdminHome;
