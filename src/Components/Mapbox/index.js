import React from "react";

import L from "leaflet";
import SearchBar from "../searchbar";
import { useMemo } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { useSelector } from "react-redux";

// Fix for
const MapComponent = () => {
  const ScooterData = useSelector((state) => state.Scooters.Scooters);
  console.log("plzzz", ScooterData);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  });
  const center = useMemo(() => ({ lat: 35.417416, lng: 24.530005 }), []);

  return (
    <div>
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerStyle={{ width: "64vw", height: "350px" }}
          center={center}
          options={{ disableDefaultUI: true }}
          zoom={10}
        >
          {/* <Marker key={"ssdd"} position={{ lat: 35.365575, lng: 24.502875 }} />
           */}
          {ScooterData.map((scooter) => {
            return (
              <Marker
                key={scooter?.imei}
                position={{ lat: scooter?.latitude, lng: scooter?.longitude }}
              />
            );
          })}
        </GoogleMap>
      )}
    </div>
  );
};

export default MapComponent;
