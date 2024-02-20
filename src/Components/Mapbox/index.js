import React, { useEffect, useState } from "react";

import L from "leaflet";
import SearchBar from "../searchbar";
import { useMemo } from "react";
import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";
import { useSelector } from "react-redux";
import { animated, useSpring } from "react-spring";

// Fix for
const MapComponent = ({ setActiveScooter }) => {
  const ScooterData = useSelector((state) => state.Scooters.Scooters);
  // const ScooterData = useSelector((state) => state.Scooters.Scooters);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  });
  const center = useMemo(() => ({ lat: 35.417416, lng: 24.530005 }), []);

  return (
    <div className="mx-5">
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerStyle={{ width: "50vw", height: "350px" }}
          center={center}
          options={{ disableDefaultUI: true }}
          zoom={10}
        >
          {/* <Marker key={"ssdd"} position={{ lat: 35.365575, lng: 24.502875 }} />
           */}
          {ScooterData.map((scooter) => {
            return (
              <div>
                <MarkerF
                  key={scooter.imei}
                  position={{ lat: scooter?.latitude, lng: scooter?.longitude }}
                  onClick={() => setActiveScooter(scooter.imei)}
                />
              </div>
            );
          })}
        </GoogleMap>
      )}
    </div>
  );
};

export default MapComponent;
