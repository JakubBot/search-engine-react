import React from 'react';
import Navbar from './components/navbar/navbar';
import Home from './components/home/home';

const HomePage = () => {
  return (
    <>
      <Navbar isMainPage />
      <Home />
    </>
  );
};
export default HomePage;
