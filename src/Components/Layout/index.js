import React from 'react';
import SideBar from '../SideBar';


const Layout = ({children}) => {
  return (
    <div className='flex layout'>
        <SideBar/>
     
        <main className='w-screen h-screen'>
            {children}
        </main>
</div>
  )
}

export default Layout;