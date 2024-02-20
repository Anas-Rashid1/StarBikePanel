import React from "react";
import SideBar from "../SideBar";

const Layout = ({ children }) => {
  return (
    <div className="flex layout overflow-y-hidden">
      <SideBar />

      <main className="w-[80%] md:w-screen h-screen  sticky">{children}</main>
    </div>
  );
};

export default Layout;
