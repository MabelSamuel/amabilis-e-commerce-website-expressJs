import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const SetAttributionPrefix = ({ prefix }) => {
    const map = useMap();
  
    useEffect(() => {
      map.attributionControl.setPrefix(prefix);
    }, [map, prefix]);
  
    return null;
};

const MapView = () => {
  const position = [4.8156, 7.0498]; 

  return (
    <div className="h-[500px] w-full rounded-lg overflow-hidden">
      <MapContainer center={position} zoom={13} scrollWheelZoom={true} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='AmabilisMap'
        />
        <SetAttributionPrefix prefix="Amabilis"/>
        <Marker position={position}>
          <Popup>
            Amabilis.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapView;
