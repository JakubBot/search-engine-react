import React from 'react';
import Navbar from './components/navbar/navbar';
import GoogleMaps from './components/googleMaps/googleMaps';

const GoogleMapsPage = () => {
  return (
    <>
      <Navbar isMainPage={false} />
      <GoogleMaps />
    </>
  );
};

export default GoogleMapsPage;
