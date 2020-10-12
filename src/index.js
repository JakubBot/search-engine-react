import React, { createContext, useEffect, useReducer } from 'react';
import ReactDOM from 'react-dom';
import HomePage from './HomePage';
import GithubPage from './GithubPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.scss';
export const Config = createContext();

const store = {
  logIn: false,
  userName: '',
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

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route exact path="/search-engine-react" component={HomePages} />
      <Route path="/github" component={GithubPages} />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
