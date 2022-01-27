import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Context from './components/GlobalContext';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <Context>
    <App/>
  </Context>,
  document.getElementById('root')
);


