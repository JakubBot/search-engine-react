import React from 'react';
import GoogleMapReact from 'google-map-react';

const GoogleMap = () => {
  const state = {
    center: {
      lat: 52.193624894629394,
      lng: 20.886180433818502,
    },
    zoom: 9,
  };
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact defaultCenter={state.center} defaultZoom={state.zoom} />
    </div>
  );
};
export default GoogleMap;
