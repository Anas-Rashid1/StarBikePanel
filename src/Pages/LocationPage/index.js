import React from 'react'
import MapComponent from '../../Components/Mapbox'

import Search from '../../Components/Search'
import Layout from '../../Components/Layout'

const LocationPage = () => {
  return (
    <Layout>
    <div className="relative h-screen overflow-x-hidden bg-gray-100">
      <Search/>
      <MapComponent className={" h-[500px] w-full md:w-full lg:w-full xl:w-full m-2 "}/>
    </div>
    </Layout>
  )
}

export default LocationPage