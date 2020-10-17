import React from 'react';
import Navbar from './components/navbar/navbar';
import GithubSearch from './components/githubSearch/githubSearch';

const GithubPage = () => {
  return (
    <>
      <Navbar isMainPage={false} />
      <GithubSearch />
    </>
  );
};

export default GithubPage;
