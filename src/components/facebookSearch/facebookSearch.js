import React, { useState } from 'react';
// import { FacebookProvider, LoginButton, CustomChat } from 'react-facebook';
import FacebookLogin from 'react-facebook-login';
import './facebookSearch.scss';

const FacebookSearch = () => {
  const [data, setData] = useState();
  const [login, setLogin] = useState(false);
  // const handleResponse = (data) => {
  //   console.log(data);
  // };

  // const handleError = (error) => {
  //   setData(error);
  // };
  const responseFacebook = (response) => {
    setData(response);
    setLogin(true);
    if (response.accessToken) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  };

  return (
    <>
      {login ? (
        <div className="facebook-data">
          <div className="facebook-data__image">
            <img src={data.picture.data.url} alt="user-img" />
          </div>
          <h2>{data.name}</h2>
          <h4>{data.email}</h4>
        </div>
      ) : (
        <div className="facebook-login">
          <FacebookLogin
            appId="375105007233021"
            fields="name,email,picture"
            callback={responseFacebook}
            icon="fa-facebook"
          />
        </div>
      )}
    </>
  );
};

export default FacebookSearch;
