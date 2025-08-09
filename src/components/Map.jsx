import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Box } from '@mui/material';
import 'leaflet/dist/leaflet.css';

// Fix for default markers in react-leaflet
import L from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import markerRetina from 'leaflet/dist/images/marker-icon-2x.png';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerRetina,
  shadowUrl: markerShadow,
});

const Map = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: { xs: 250, sm: 300, md: 400 },
        borderRadius: 2,
        overflow: 'hidden',
        boxShadow: 3
      }}
    >
      <MapContainer
        center={[48.91870295256378, 24.678106672692188]}
        zoom={15}
        style={{ 
          width: "100%", 
          height: "100%", 
          zIndex: 0 
        }}
        scrollWheelZoom={true}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[48.91870295256378, 24.678106672692188]}>
          <Popup>
            <strong>Toddler School</strong><br />
            вул. В. Стефаника Набережна, 46б
          </Popup>
        </Marker>
      </MapContainer>
    </Box>
  );
};

export default Map;
