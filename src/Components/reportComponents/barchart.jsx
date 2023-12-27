import React, { useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import img4 from "../../Assets/report/img4.png"
import img5 from "../../Assets/report/img5.png"


const data = [
    { date: '10 Feb', income: 4000, expenses: 2400 },
    { date: '11 Feb', income: 3000, expenses: 1398 },
    { date: '12 Feb', income: 2000, expenses: 9800 },
    { date: '13 Feb', income: 2780, expenses: 3908 },
    { date: '14 Feb', income: 1890, expenses: 4800 },
   
  ];

const CustomBarChart = () => {
    const [startDate, setStartDate] = useState(new Date());
  return (
<>

    <div className="sm:flex-row flex justify-between p-2 w-full  border-gray-400 border-b-[2px] min-[200px]:flex-col ">
    <h1 className="text-2xl font-semibold ">Total Content</h1>
    <div className="flex items-center">
      
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        dateFormat="MMMM d, yyyy"
        className="date-picker"
      />
    </div>
  </div>


    <div className="p-2 sm:flex-col flex lg:flex-row justify-between min-[200px]:flex-col">
      <ResponsiveContainer className="sm:w-full lg:w-[80%]" height={400}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="income" fill="#FFA43D
" /> 
        <Bar dataKey="expenses" fill="#FDB9A8
" /> 
      </BarChart>
      </ResponsiveContainer>

      <div className="sm:w-full lg:w-[20%] sm:flex-row flex lg:flex-col  min-[200px]:flex-col items-center p-[10px]">
        <div className="w-full h-[150px] mb-1 lg:mb-2  border border-gray-400 p-1 flex flex-col sm:mr-1 lg:mr-0">
          
          <div>
            <p className='text-gray-600	'>Income</p>
            <p className='font-semibold'>7.2%</p>
          </div>
          <img src={img4} alt="" className="w-[100%] h-[90%] object-cover mr-3 overflow-hidden" />
        </div>
        <div className="w-full h-[150px] mb-1 lg:mb-2  border border-gray-400 p-1 flex flex-col sm:mr-1 lg:mr-0">
          
          <div>
            <p className='text-gray-600	'>Expenses</p>
            <p className='font-semibold'>7.2%</p>
          </div>
          <img src={img5} alt="" className="w-[100%] h-[90%] object-cover mr-3 overflow-hidden" />
        </div>
       


      </div>
     
    </div>
    </>
  );
};

export default CustomBarChart;
