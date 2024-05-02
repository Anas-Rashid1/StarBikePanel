import React from "react";

const Star = ({ color }) => {
  return (
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.1777 1.46533L13.8359 4.87403C14.0631 5.34189 14.6704 5.80687 15.1853 5.89241L18.2485 6.4416C20.21 6.78896 20.6457 8.21678 19.2252 9.61397L16.8058 11.9803C16.4018 12.3769 16.1618 13.1614 16.2867 13.715L16.9354 16.6841C17.4451 19.0282 16.1952 19.9232 14.1464 18.6776L11.2844 16.9372C10.7632 16.6192 9.90895 16.6167 9.38797 16.9158L6.48919 18.5836C4.41416 19.7756 3.18177 18.8547 3.74547 16.5249L4.46549 13.5766C4.59995 13.0255 4.38823 12.2355 3.9916 11.8316L1.61184 9.40779C0.223567 7.98273 0.691345 6.56594 2.65682 6.26032L5.72566 5.78533C6.2438 5.70089 6.86212 5.26239 7.09561 4.7955L8.83205 1.41918C9.77978 -0.399286 11.2826 -0.379389 12.1777 1.46533Z"
        fill={color ? "#F2AC23" : "#9CA3AF"}
      />
    </svg>
  );
};

export default Star;
