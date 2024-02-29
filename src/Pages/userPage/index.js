import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import Layout from "../../Components/Layout";
import Search from '../../Components/Search';
import { green } from '@mui/material/colors';
import axios from 'axios';
import { GrLinkPrevious } from "react-icons/gr";

const UserPage = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(8); 
  const [users, setUsers] = useState([]);
  const [isMoreUsersAvailable, setIsMoreUsersAvailable] = useState(true);
  
  
  // const user=[{
  //   id:1 ,
  //   firstName: "Ali",
  //   lastName:"Raza",
  //   email:"ali@gmail.com",
  //   status:"active",
  //   contact:"03212454190"
  // },
  // {
  //   id:1 ,
  //   firstName: "Ali",
  //   lastName:"Raza",
  //   email:"ali@gmail.com",
  //   status:"active",
  //   contact:"03212454190"
  // },
  // {
  //   id:1 ,
  //   firstName: "Ali",
  //   lastName:"Raza",
  //   email:"ali@gmail.com",
  //   status:"Not-active",
  //   contact:"03212454190"
  // },
  // {
  //   id:1 ,
  //   firstName: "Ali",
  //   lastName:"Raza",
  //   email:"ali@gmail.com",
  //   status:"active",
  //   contact:"03212454190"
  // },]

  const fetchUsers = (pageNumber) => {
    axios.post(
      "https://star-bike-backend.vercel.app/scooter/usertable",
      { pagenumber: pageNumber, pagesize: pageSize }
    )
    .then((res) => {
      // Update the users state with the new data
      if(res.data.length > 0 )
      {
        
      setUsers(res.data);
      setIsMoreUsersAvailable(true);
      console.log(res.data, "usertable"); // Access the response data using res.data
      }
      else{
        setIsMoreUsersAvailable(false);
      }
    })
    .catch((error) => {
      console.log("Something went wrong:", error.message);
    });
  };
 
  useEffect(() => {
    // Fetch users initially
    fetchUsers(currentPage);

    // Set interval to fetch users every minute
    const interval = setInterval(() => {
      fetchUsers(currentPage);
    }, 30000); // 60000 milliseconds = 1 minute

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, [currentPage]);





  const handleReadMore = () => {
    fetchUsers(currentPage + 1);
    setCurrentPage(currentPage + 1);
    console.log("read more");
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      
      fetchUsers(currentPage - 1);
      setCurrentPage(currentPage - 1);

    }
  };
    



  return (
  
    
       <motion.div initial={{scaleY:0}} animate={{scaleY:1}} exit={{scaleY:0}} className="relative md:w-full h-screen overflow-x-hidden bg-gray-100 px-2">
      <Search/>
     
      <div className=" bg-white px-2 pt-4 justify-center items-center mt-10 w-full  h-auto">
        <div class="relative overflow-x-auto  justify-center items-center  px-4  sm:rounded-lg">
              
                <table class="text-md  text-left  text-gray-500 dark:text-gray-400 m-auto   lg:w-full md:w-[40%] h-full">
                  <thead class="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" class="lg:px-6 md:px-4 px-4 py-3">
                       ID
                      </th>
                       <th scope="col" class="lg:px-6 md:px-4 px-4 py-3">
                        IMAGE
                      </th>
                      <th scope="col" class="lg:px-6 md:px-4 px-4 py-3">
                       FIRST NAME
                      </th>
                      <th scope="col" class="lg:px-6 md:px-4 px-4 py-3">
                        LAST NAME
                      </th>
                     
                      <th scope="col" class="lg:px-6 md:px-4 px-4 py-3">
                        EMAIL
                      </th>
                      <th scope="col" class="lg:px-6 md:px-4 px-4 py-3">
                        STATUS
                      </th>
                      <th scope="col" class="lg:px-6 md:px-4 px-4 py-3">
                        SCOOTER
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((item) => (
                      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th
                          scope="row"
                          class="lg:px-2 md:px-4 px-2 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {item?.id}
                        </th>
                        <td class="lg:px-2 md:px-4 px-2 py-2  whitespace-nowrap ">
                          <img className='rounded-full h-10' src ={item?.image}
                  />
          
                        </td>
                        <td class="lg:px-2 md:px-4 px-2 py-2 text-sm ">
                          {item.firstName}
                        </td>
                        <td class="lg:px-2 md:px-4 px-2 text-sm ">
                          {item.lastName}
                        </td>
                        <td class="lg:px-2 md:px-4 px-2 text-sm">{item.email}</td>
                        <td class={`lg:px-2 md:px-4 px-2  text-sm ${item.status==true? "text-green-500" : "text-sidebarheadinghoveringcolor"}`}>
                         {item?.status == true ? "Active" : "Not Active"}
                        </td>
                        <td class="lg:px-2 md:px-2 px-4 ">
                          {item.scooter}
                        </td>
                        
                       
                      </tr>
                     
                    ))}
                    
                    <tr colSpan={7} className=''>
                      <td colSpan={7} className='flex flex-row gap-2'>{currentPage > 1 && <GrLinkPrevious  className='mt-1 text-orange-500' onClick={handlePreviousPage}/> }{isMoreUsersAvailable ? <button className='text-center text-orange-500 w-full' onClick={handleReadMore}>Read More</button> : <p className='text-center text-orange-500'>No More Users</p>}</td>
                    </tr>

                  </tbody>
                </table>
              </div> 
              </div>
        

         
      
       </motion.div>
      
      
    
  )
}

export default UserPage