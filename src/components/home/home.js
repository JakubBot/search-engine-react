import React from 'react';
import { Link } from 'react-router-dom';
import homeImage from '../../images/group.png';
import './home.scss';
import arrow from '../../images/right-arrow.png';

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="home__text">
          <h1>The Best</h1>

          <h1 className="green">Search</h1>
          <h1>Engine</h1>
        </div>
        <div className="home__image">
          <img src={homeImage} alt="blob" />
        </div>
      </div>
      <div className="links">
        <div className="links__item">
          <Link to="/github">
            <img src={arrow} alt="arrow" />
            <h2>Github users</h2>
          </Link>
        </div>
        <div className="links__item">
          <Link to="/googleMaps">
            <img src={arrow} alt="arrow" />
            <h2>Google maps</h2>
          </Link>
        </div>
        <div className="links__item">
          <Link to="/weather">
            <img src={arrow} alt="arrow" />
            <h2>Weather forecast</h2>
          </Link>
        </div>
        <div className="links__item">
          <Link to="facebook">
            <img src={arrow} alt="arrow" />
            <h2>Facebook users</h2>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Home;
