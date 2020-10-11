import React, { createContext, useReducer } from 'react';
import ReactDOM from 'react-dom';
import HomePage from './HomePage';
import { BrowserRouter as Router, Route } from 'react-router-dom';
export const Config = createContext();

const store = {
  logIn: false,
};

const App = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'logIn':
        return { ...state, logIn: action.logIn };
      default:
        return new Error('Unexpected action');
    }
  };
  const [state, dispatch] = useReducer(reducer, store);
  return (
    <Config.Provider value={{ state, dispatch }}>
      <HomePage />
    </Config.Provider>
  );
};

const Cos = () => {
  return <h1>Cos</h1>;
};
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route exact path="/" component={App} />
      <Route path="/cos" component={Cos} />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
