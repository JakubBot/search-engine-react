import React from 'react';
import Navbar from './components/navbar/navbar';
import FacebookSearch from './components/facebookSearch/facebookSearch';

const Facebook = () => {
  return (
    <>
      <Navbar isMainPage={false} />
      <FacebookSearch />
    </>
  );
};

export default Facebook;
