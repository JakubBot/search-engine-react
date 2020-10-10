import React, { useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import logo from '../../assets/images/logo.png';
import '../../assets/fontello/fontello.css';
import './navbar.scss';

const Navbar = () => {
  const [logIn, setLogIn] = useState(false);
  const [userName, setUserName] = useState('');
  const onSignIn = (googleUser) => {
    setLogIn(true);
    setUserName(googleUser.getBasicProfile().getName());
  };
  const onSignOut = () => {
    setLogIn(false);
  };
  const onError = () => {
    setUserName('Error');
  };
  return (
    <div className="navbar">
      <div className="navbar__item">
        <img src={logo} alt="logo" />
        <h3 className="navbar__item__companyName">
          <span className="green">L</span>
          eppo
        </h3>
      </div>
      <div className="navbar__googleLogin">
        {logIn ? (
          <div className="navbar__informations">
            <p>Witamy</p>
            <p>{userName}</p>
          </div>
        ) : null}
        {logIn ? (
          <>
            <GoogleLogout
              clientId="741663086321-1eip7aa6cc3i91agpj31b5a0rbhg7otm.apps.googleusercontent.com"
              buttonText="Logout"
              onLogoutSuccess={onSignOut}
            />
          </>
        ) : (
          <GoogleLogin
            clientId="741663086321-1eip7aa6cc3i91agpj31b5a0rbhg7otm.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={onSignIn}
            onFailure={onError}
            cookiePolicy="single_host_origin"
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
