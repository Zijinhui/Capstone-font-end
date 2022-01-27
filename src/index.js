import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import reportWebVitals from './reportWebVitals';
import App from './components/App';
import Context from './components/Global';


ReactDOM.render(
  <Context>
    <App/>
  </Context>,
  document.getElementById('root')
);

