import React from 'react';
import Navbar from './components/navbar/navbar';
import Search from './components/search/search';

const GithubPage = () => {
  return (
    <>
      <Navbar isMainPage={false} />
      <Search />
    </>
  );
};

export default GithubPage;
