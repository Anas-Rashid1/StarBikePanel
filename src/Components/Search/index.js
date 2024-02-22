import React from "react";


const Search = () => {
  const name = localStorage.getItem("username");

 
  return (
    <div className="md:w-full  px-6 py-2 flex">
      <div className="flex-1">
        <input
          className="w-full px-4 py-2 rounded-md shadow-sm focus:outline-none  focus:border-[#FFA43D]-300 border border-gray-200"
          type="text"
          placeholder="Search..."
        />
      </div>
      <div className="flex flex-row gap-2 ml-6  ">
         <div className="w-8 h-8 bg-gray-500 rounded-full"></div> 
        <p className="mt-[5px] font-medium hidden sm:inline-block  ">{name}</p>
      </div>
    </div>
  );
};

export default Search;
