import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Context from './components/GlobalContext';
import {AuthProvider} from './components/Auth/AuthContext'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <AuthProvider>
    <Context>
      <App/>
    </Context>
  </AuthProvider>,
  document.getElementById('root')
);

