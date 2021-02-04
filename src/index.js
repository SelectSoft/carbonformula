import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const endpoint = "https://bc-carbonbackend.herokuapp.com/";

ReactDOM.render(
  <React.StrictMode>
    <App endpoint={endpoint} />
  </React.StrictMode>,
  document.getElementById('root')
);
