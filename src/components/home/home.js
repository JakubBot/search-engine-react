import React from 'react';
import homeImage from '../../images/group.png'
import './home.scss';

const Home = () => {
  return (
    <div className="home">
      <div className="home__text">
        <h1>The Best</h1>
        <h1 className="green">Search</h1>
        <h1>Engine</h1>
      </div>
      <div className="home__image">
        <img src={homeImage} />
      </div>
    </div>
  )
}
export default Home