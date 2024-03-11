import React, { useEffect, useState , useMemo } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { useSelector } from "react-redux";

const MapComponent = ({ setActiveScooter }) => {
  const ScooterData = useSelector((state) => state.Scooters.Scooters);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  });
  const [map, setMap] = useState(null);
  const [markerIndex, setMarkerIndex] = useState(0);
  const [zoom , setZoom] = useState(10);
  const center = useMemo(() => ({ lat: 35.417416, lng: 24.530005 }), []);

  // Function to get positions of all markers
  const getMarkerPositions = () => {
    return ScooterData.map((scooter) => ({
      lat: scooter?.latitude,
      lng: scooter?.longitude,
    }));
  };


  // Function to move map to next marker
  const moveToNextMarker = () => {
    try {
      if (map && markerIndex < ScooterData.length) {
        const markerPosition = getMarkerPositions()[markerIndex];
        console.log(markerPosition, "position");
        if (markerPosition != null) {
          setZoom(20);
          map.panTo(markerPosition);
          setMarkerIndex(markerIndex + 1);
        }
      } else {
        setZoom(10);
        const markerPosition = getMarkerPositions()[0];
        if (markerPosition != null) {
          map.panTo(markerPosition);
          setMarkerIndex(0);
        }
      }
    } catch (error) {
      console.error("Error in moveToNextMarker:", error);
    }
  };
  

  // Move to the first marker when the map is loaded
  useEffect(() => {
    setTimeout(()=>{
      if (map && ScooterData.length > 0) {
        const firstMarkerPosition = getMarkerPositions()[0];
        console.log(firstMarkerPosition , "first");
        if(firstMarkerPosition != null){
          map.panTo(firstMarkerPosition);
  
        }
        
      }

    } , 5000);
    
  }, [map, ScooterData]);

  return (
    <div className="mx-5">
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <GoogleMap
            mapContainerStyle={{
              width: "50vw",
              height: "350px",
            }}
            center={center}
            options={{ disableDefaultUI: true }}
            zoom={zoom}
            onLoad={(map) => setMap(map)}
          >
            {ScooterData.map((scooter) => (
              <Marker
                key={scooter.imei}
                position={{ lat: scooter?.latitude, lng: scooter?.longitude }}
                onClick={() => setActiveScooter(scooter.imei)}
              />
            ))}
          </GoogleMap>
          <button onClick={moveToNextMarker}>Move to Next</button>
        </div>
      )}
    </div>
  );
};

export default MapComponent;
