import React, { createContext, useReducer } from 'react';
import ReactDOM from 'react-dom';
import HomePage from './HomePage';

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

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
