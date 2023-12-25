import React from 'react'
import Layout from "../../Components/Layout";
import Search from '../../Components/Search';
import { green } from '@mui/material/colors';

const UserPage = () => {
  const user=[{
    id:1 ,
    firstName: "Ali",
    lastName:"Raza",
    email:"ali@gmail.com",
    status:"active",
    contact:"03212454190"
  },
  {
    id:1 ,
    firstName: "Ali",
    lastName:"Raza",
    email:"ali@gmail.com",
    status:"active",
    contact:"03212454190"
  },
  {
    id:1 ,
    firstName: "Ali",
    lastName:"Raza",
    email:"ali@gmail.com",
    status:"Not-active",
    contact:"03212454190"
  },
  {
    id:1 ,
    firstName: "Ali",
    lastName:"Raza",
    email:"ali@gmail.com",
    status:"active",
    contact:"03212454190"
  },]
  return (
    <Layout>
       <div className="relative h-screen overflow-x-hidden bg-gray-100">
      <Search/>
      <div className="relative block bg-white px-2 pt-4 justify-center items-center   mt-10 sm:mx-4 md:mx-6  h-full">
              <div class="relative overflow-x-auto   shadow-md sm:rounded-lg">
                <table class="text-md text-left  text-gray-500 dark:text-gray-400 m-auto lg:w-full md:w-[40%] h-full">
                  <thead class="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" class="lg:px-6 md:px-4 px-4 py-3">
                       ID
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
                        CONTACT
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {user.map((item) => (
                      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th
                          scope="row"
                          class="lg:px-6 md:px-4 px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {item.id}
                        </th>
                        <td class="lg:px-6 md:px-4 px-4 py-4">
                          {item.firstName}
                        </td>
                        <td class="lg:px-6 md:px-4 px-4 py-4">
                          {item.lastName}
                        </td>
                        <td class="lg:px-6 md:px-4 px-4 py-4">{item.email}</td>
                        <td class={`lg:px-6 md:px-4 px-4 py-4 ${item.status=="active"? "text-green-500" : "text-sidebarheadinghoveringcolor"}`}>
                          {item.status}
                        </td>
                        <td class="lg:px-6 md:px-4 px-4 py-4 whitespace-nowrap">
                          {item.contact}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

         
      
       </div>
      
    </Layout>
  )
}

export default UserPage