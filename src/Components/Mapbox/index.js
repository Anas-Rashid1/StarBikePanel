import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import SearchBar from '../searchbar';

// Fix for default marker if using Webpack
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const MapComponent = ({className}) => {
  const position = [51.505, -0.09]; 

  return (

    

    <div className={className}>
        
      
      
      <MapContainer center={position} zoom={13} scrollWheelZoom={false} className="h-full w-full ">
      <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          className='w-full'
        />
        <Marker position={position}>
          <Popup>
            this is popup.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
   
  );
};

export default MapComponent;
