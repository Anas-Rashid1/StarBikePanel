import { Image } from "antd";
import React from "react";
import { Navigate } from "react-router-dom";

export default function Dropdown({logoutfun}) {


    return (
        <div className="relative w-full lg:max-w-sm">
           
            <select className="w-8 h-8  rounded-full">
                {/* <option className="px-2"> <Image src="https://www.mobisafar.com/assets/images/user.png" preview={false}/></option>
                {options.map((opt , index)=>(
                    <option><button onClick={opt.fun}>{opt.name}</button></option>
                ))} */}
                <option disabled={true}><Image src="https://www.mobisafar.com/assets/images/user.png" preview={false}/></option>
                <option onSelect={logoutfun}>Log out</option>
            </select>
        </div>
    );
}