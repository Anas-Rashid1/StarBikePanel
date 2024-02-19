import React from "react";

const SearchBar = () => {
  return (
    <div>
      <div className="w-full  py-2 flex">
        <div className="flex-1">
          <input
            className="w-full px-5  py-2 rounded-md shadow-sm focus:outline-none  focus:border-[#FFA43D]-300"
            type="text"
            placeholder="Search..."
          />
        </div>
        <button
          style={{ backgroundColor: "#FFA43D" }}
          className="ml-2 hover:bg-[#FFA43D] text-white font-bold py-2 px-4 rounded"
        >
          + New Job
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
