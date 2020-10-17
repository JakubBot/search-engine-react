import React, { useState } from 'react';
import './weatherSearch.scss';

const Search = () => {
  const url = 'http://api.openweathermap.org/data/2.5/weather?q=';
  const apiKey = '6e72cfca1f49bd300ba9ab9c8582c0aa';
  const [userCityInput, setUserCityInput] = useState('');
  const [userData, setUserData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const direction = (stopnie) => {
    if (stopnie > 22 && stopnie <= 67) {
      return 'północno-wschodni';
    }
    if (stopnie > 67 && stopnie <= 112) {
      return 'wschodni';
    }
    if (stopnie > 112 && stopnie <= 157) {
      return 'południowo-wschodni';
    }
    if (stopnie > 157 && stopnie <= 202) {
      return 'południowy';
    }
    if (stopnie > 202 && stopnie <= 247) {
      return 'południowo-zachodni';
    }
    if (stopnie > 247 && stopnie <= 297) {
      return 'zachodni';
    }
    if (stopnie > 297 && stopnie <= 337) {
      return 'północno-zachodni';
    }
    return 'północny';
  };

  function updateForm(response) {
    const degC = Math.floor(response.main.temp - 273.15);
    const degF = Math.floor(degC * 1.8 + 32);
    const temp = `${degC}st C / ${degF}st F`;
    const pogoda = response.weather[0].description;
    const wiatrKmh = Math.round(response.wind.speed * 3.6);
    const wilgotnosc = response.main.humidity;
    const zachmurzenie = response.clouds.all;
    const cisnienie = response.main.pressure;
    const degWiatru = response.wind.deg;
    const kierunekWiatru = direction(degWiatru);

    return {
      pogoda,
      temp,
      wiatrKmh,
      kierunekWiatru,
      wilgotnosc,
      zachmurzenie,
      cisnienie,
    };
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`${url}${userCityInput}&appid=${apiKey}&lang=pl`)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        return response.json();
      })
      .then((response) => {
        setIsLoading(false);
        setUserData(updateForm(response));
        setIsError(false);
      })
      .catch(() => {
        setIsError(true);
      });
  };

  const weather = [
    'Pogoda',
    'Temperatura',
    'Prędkość wiatru',
    'Kierunek wiatru',
    'Wilgotność',
    'Zachmurzenie',
    'Ciśnienie',
  ];

  const getUserWeather = () => {
    const content = [];
    let count = 0;
    for (const key in userData) {
      if ({}.hasOwnProperty.call(userData, key)) {
        content.push(
          <li key={count} className="weatherItem">
            <span>{weather[count]}</span>
            <span>:</span>
            <span>{userData[key]}</span>
          </li>
        );
        count += 1;
      }
    }
    count = 0;
    return content;
  };

  return (
    <div className="cardContainer">
      <div>
        <h1>Search for weather</h1>
        <h3>type city</h3>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          value={userCityInput}
          onChange={(e) => setUserCityInput(e.target.value)}
        />
        <button type="submit">Find</button>
      </form>
      <div style={{ display: isLoading === true ? 'none' : 'block' }}>
        {isError ? (
          <h3>Something went wrong.Try again</h3>
        ) : (
          <div className="weather-container">
            <div className="weather-container__profile">
              <ul className="weatherList">{getUserWeather()}</ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
