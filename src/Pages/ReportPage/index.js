import React, { useState } from 'react';
import img1 from "../../Assets/report/img1.png"
import img2 from "../../Assets/report/img2.png"
import img3 from "../../Assets/report/img3.png"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import CustomBarChart from '../../Components/reportComponents/barchart';
import Search from '../../Components/Search'
import Layout from '../../Components/Layout';



const data = [
  { time: '10am', newUsers: 30, invoicesOverdue: 20, users: 80 },
  { time: '11am', newUsers: 45, invoicesOverdue: 25, users: 90 },
  { time: '2am', newUsers: 60, invoicesOverdue: 30, users: 25 },
  { time: '3am', newUsers: 50, invoicesOverdue: 10, users: 75 },
  { time: '42am', newUsers: 49, invoicesOverdue: 20, users: 45 },
  { time: '5am', newUsers: 90, invoicesOverdue: 40, users: 95 },

];

const CustomLineChart = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
 
    <div className=" h-screen overflow-x-hidden bg-gray-50 relative">
      <Search/>
      
  <div className="sm:flex-row flex justify-between p-2 w-full   border-gray-400 border-b-[2px] min-[200px]:flex-col ">
    <h1 className="text-2xl font-semibold ">Platform</h1>
    <div className="flex items-center">
      
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        dateFormat="MMMM d, yyyy"
        className="date-picker  px-2 py-[2px]"
      />
    </div>
  </div>
    
    <div className="p-2 sm:flex-col  flex lg:flex-row justify-between min-[200px]:flex-col ">
      <ResponsiveContainer className={"sm:w-full lg:w-[80%]"} height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="newUsers" stroke="#8884d8" />
          <Line type="monotone" dataKey="invoicesOverdue" stroke="#82ca9d" />
          <Line type="monotone" dataKey="users" stroke="#ffc658" />
        </LineChart>
      </ResponsiveContainer>

      <div className="sm:w-full lg:w-[20%] sm:flex-row flex lg:flex-col  min-[200px]:flex-col items-center p-[10px]">
        <div className="w-full h-[70px] mb-1 lg:mb-2  border border-gray-400 p-1 flex sm:mr-1 lg:mr-0">
          <img src={img1} alt="" className="w-[40px] h-[90%] object-cover mr-3" />
          <div>
            <p className='text-gray-600	'>New Users</p>
            <p className='font-semibold'>7.2%</p>
          </div>
        </div>
        <div className="w-full h-[75px] mb-1 lg:mb-2  border border-gray-400 p-1 flex  sm:mr-1 lg:mr-0">
          <img src={img3} alt="" className="w-[40px] h-[90%] object-cover mr-3" />
          <div>
            <p className='text-gray-600	'>Invoice overdue</p>
            <p className='font-semibold'>7.2%</p>
          </div>
        </div>
        <div className="w-full h-[70px] lg
        :mb-2  border border-gray-400 p-1 flex  sm:mr-1 lg:mr-0">
          <img src={img2} alt="" className="w-[40px] h-[90%] object-cover mr-3" />
          <div>
            <p className='text-gray-600	'> Users</p>
            <p className='font-semibold'>7.2%</p>
          </div>
        </div>


      </div>
      
    </div>

    <CustomBarChart/>
    </div>
  
  );
};

export default CustomLineChart;
