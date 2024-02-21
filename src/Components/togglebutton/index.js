import React, { useState } from "react";

const ToggleButton = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleButton = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="flex items-center">
      <button
        className={`relative w-12 h-6 ${
          isActive ? "bg-green-400" : "bg-gray-400"
        } rounded-full focus:outline-none`}
        onClick={toggleButton}
      >
        <span
          className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-md transform duration-300 ${
            isActive ? "translate-x-full" : ""
          }`}
        ></span>
      </button>
    </div>
  );
};

export default ToggleButton;
