import React from "react";
import bgimg from "../../Assets/Login/loginbg.png";
import logo from "../../Assets/Logo/Logo.png";
import { useState } from "react";
import { useDispatch , useSelector } from "react-redux";
import { SignInRequest } from "../../Redux/SignInslice";
import { setToLocalStorage } from "../../Utils";
import { Navigate, useNavigate } from "react-router-dom";


const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
 
  const dipatch = useDispatch();

  const authToken = useSelector((state) => state.SingnIn.adminData.token);
  const name = useSelector((state) => state.SingnIn.adminData.username);
 
  
 
  return (
    <div
      className="w-screen h-screen flex md:flex-row flex-col-reverse justify-between"
      style={{
        backgroundImage: `url(${bgimg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="lg:w-[50%] md:w-[65%] w-[100%] h-full flex flex-row  items-center justify-center">
        <div className="bg-white  xl:w-[65%] lg:w-[80%] md:w-[80%] w-[80%] rounded-tr-[20px] rounded-bl-[20px] flex flex-col gap-12 items-center justify-center sm:p-12 p-4 shadow-lg shadow-slate-700">
          <h1 className="sm:text-2xl text-xl mt-12 font-bold font-serif text-center">
            Welcome to StarBike Admin Dashboard
          </h1>
          <div className="flex flex-col gap-8 w-full">
            <input
              type="text"
              placeholder="user name"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className=" py-2 px-4 bg-gray-300 text-gray-700 shadow-md shadow-slate-700 w-full rounded-[20px]"
            />
            <input
              type="text"
              placeholder="password"
              value={pass}
              onChange={(e) => {
                setPass(e.target.value);
              }}
              className=" py-2 px-4 bg-gray-300 text-gray-700 shadow-md shadow-slate-700 w-full rounded-[20px]"
            />
          </div>
          <button className="w-[70%] bg-sidebarheadinghoveringcolor text-black rounded-[20px] px-4 py-2 mb-12"
          onClick={() => {
            dipatch(
              SignInRequest({ email: email, pass: pass })
            );
         
           localStorage.setItem('token' , authToken);
           localStorage.setItem('username' , name);
           {localStorage.getItem("token")?navigate("/"):<></>};
           
          }}>
           
            
            Sign In
          </button>
        </div>
      </div>
      <div className="md:flex justify-center items-center md:w-[60%] hidden  ">
        <img src={logo} className="w-[25%] h-[30%]" />
      </div>
    </div>
  );
};

export default AdminLogin;
