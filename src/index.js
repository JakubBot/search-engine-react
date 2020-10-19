import React, { createContext, useReducer } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import GoogleMapsPage from './GoogleMapsPage';
import HomePage from './HomePage';
import GithubPage from './GithubPage';
import WeatherPage from './Weather';
import FacebookPage from './FacebookPage';
import './index.scss';

// eslint-disable-next-line import/prefer-default-export
export const Config = createContext();

const store = {
  logIn: false,
  userName: '',
  isMainPage: true,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'logIn':
      return { ...state, logIn: action.logIn };
    case 'userName':
      return { ...state, userName: action.name };
    default:
      return new Error('Unexpected action');
  }
};

const HomePages = () => {
  const [state, dispatch] = useReducer(reducer, store);
  Object.assign(store, state);

  return (
    <Config.Provider value={{ state, dispatch }}>
      <HomePage />
    </Config.Provider>
  );
};
const GithubPages = () => {
  const [state, dispatch] = useReducer(reducer, store);
  Object.assign(store, state);
  return (
    <Config.Provider value={{ state, dispatch }}>
      <GithubPage />
    </Config.Provider>
  );
};

const GoogleMapsPages = () => {
  const [state, dispatch] = useReducer(reducer, store);
  Object.assign(store, state);
  return (
    <Config.Provider value={{ state, dispatch }}>
      <GoogleMapsPage />
    </Config.Provider>
  );
};

const WeatherPages = () => {
  const [state, dispatch] = useReducer(reducer, store);
  Object.assign(store, state);
  return (
    <Config.Provider value={{ state, dispatch }}>
      <WeatherPage />
    </Config.Provider>
  );
};
const FacebookPages = () => {
  const [state, dispatch] = useReducer(reducer, store);
  Object.assign(store, state);
  return (
    <Config.Provider value={{ state, dispatch }}>
      <FacebookPage />
    </Config.Provider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route exact path="/search-engine-react" component={HomePages} />
      <Route path="/github" component={GithubPages} />
      <Route path="/googleMaps" component={GoogleMapsPages} />
      <Route path="/weather" component={WeatherPages} />
      <Route path="/facebook" component={FacebookPages} />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
