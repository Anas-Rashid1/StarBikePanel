import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const data = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Nov",
  ],
  datasets: [
    {
      label: "Cost",
      data: [200, 210, 180, 250, 230, 270, 300, 250, 320, 386.5],
      fill: true,
      backgroundColor: "rgba(0, 255, 0, 0.4)",
      borderColor: "#48B16A",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "48B16A",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      tension: 0.4,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: true,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const CostAnalysisGraph = () => {
  const [selectedMonth, setSelectedMonth] = useState(
    months[new Date().getMonth()]
  );

  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
  };
  const reloadOnResize = () => {
    window.location.reload();
  };

  useEffect(() => {
    window.addEventListener("resize", reloadOnResize);

    return () => {
      window.removeEventListener("resize", reloadOnResize);
    };
  }, []);

  return (
    <div className="flex flex-col w-[100%]  justify-center px-2  p-4  mt-12 bg-white ">
      <div className="flex w-full justify-between flex-col sm:flex-row">
        <h2 className="text-xl font-bold mb-4  flex justify-center ">
          Cost Analysis
        </h2>
        <select
          className="form-select appearance-none
          block
          w-full
          sm:w-[35%]
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-gray-100 bg-clip-padding bg-no-repeat
          border border-solid border-[#48B16A]
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          value={selectedMonth}
          onChange={handleMonthChange}
        >
          {months.map((month) => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </select>
      </div>

      <div className=" mt-4 ml-3 flex justify-center ">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default CostAnalysisGraph;
