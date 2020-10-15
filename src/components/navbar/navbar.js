/* eslint-disable import/no-cycle */
import React, { useContext } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { withRouter } from 'react-router-dom';
import { Config } from '../../index';
import logo from '../../images/logo.png';
import arrow from '../../images/right-arrow.png';
import './navbar.scss';

const Navbar = (props) => {
  const user = useContext(Config);

  const onSignIn = (googleUser) => {
    user.dispatch({ type: 'logIn', logIn: true });
    user.dispatch({
      type: 'userName',
      name: googleUser.getBasicProfile().getName(),
    });
  };
  const onSignOut = () => {
    user.dispatch({ type: 'logIn', logIn: false });
  };
  const onError = () => {
    // eslint-disable-next-line no-alert
    alert('something went wrong try again');
  };
  const onReturn = () => {
    props.history.push('./search-engine-react');
  };

  return (
    <div className="navbar">
      {props.isMainPage ? (
        <div className="navbar__item">
          <img src={logo} alt="logo" />
          <h3 className="navbar__item__companyName">
            <span className="green">L</span>
            eppo
          </h3>
        </div>
      ) : (
        <div
          className="navbar__item"
          onClick={onReturn}
          role="button"
          tabIndex={0}
        >
          <img src={arrow} alt="arrow" className="left" />
          <h3 className="navbar__item__back">Back</h3>
        </div>
      )}

      <div className="navbar__googleLogin">
        {user.state.logIn ? (
          <div className="navbar__informations">
            <p>Witamy</p>
            <p>{user.state.userName}</p>
          </div>
        ) : null}
        {user.state.logIn ? (
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

export default withRouter(Navbar);
