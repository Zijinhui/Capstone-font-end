import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Context from './components/Global';
import './App.css'


ReactDOM.render(
  <Context>
    <App/>
  </Context>,
  document.getElementById('root')
);

