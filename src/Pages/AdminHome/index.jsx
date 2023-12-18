import React from "react";
import { Col, Image, MenuItemProps } from "antd";
import logo from "../../Assets/Logo/Logo.png";
import SideBar from "../../Components/SideBar";
import ScooterHealth from "../../Components/ScooterHealth";

const AdminHome = () => {
  return (
    <div className="h-screen w-screen bg-gray-100">

      <ScooterHealth/>
    </div>
  );
};

export default AdminHome;
