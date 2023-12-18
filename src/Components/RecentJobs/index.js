import React from 'react'
import locationIcon from "../../Assets/RecentJobs/location.png"

const RecentJobs = () => {
    const DueJobsData = [
        {
            title:"Harrowing Season" , 
            location:"ABY Farm - Bay Land"
        },
        {
            title:"Harrowing Season" , 
            location:"ABY Farm - Bay Land"
        },
    ]
  return (
    <div className=' w-[95%] bg-white p-4 rounded-lg'>
        <h1 className='text-xl font-semibold'>Recent Due Jobs</h1>
        <div>
            {DueJobsData.map((item , index)=>(
                <div className='flex flex-row gap-4 my-4'>
                    <img src={locationIcon}/>
                    <div className='flex flex-col'>
                    <p className='text-md font-medium'>{item.title}</p>
                    <p className='font-light text-sm'>{item.location}</p>
                
                </div>
                </div>
            ))}

           
        </div>
    </div>
  )
}

export default RecentJobs