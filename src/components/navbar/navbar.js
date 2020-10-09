import React from 'react';
import logo from '../../images/logo.png';
import '../../fontello/fontello.css';
import './navbar.scss';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__item">
        <img src={logo} alt="logo" />
        <h3 className="navbar__item__companyName">
          <span className="green">L</span>
          eppo
        </h3>
      </div>
      <div className="navbar__item">
        <h4 className="navbar__item__login">Log in</h4>
        <span className="icon-google" />
      </div>
    </div>
  );
};

export default Navbar;
