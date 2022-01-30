import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './index.css';
import './App.css'
import App from './components/App';
import Context from './components/GlobalContext';
import {AuthProvider} from './components/Auth/AuthContext'
import 'bootstrap/dist/css/bootstrap.min.css';


//this is purely to awake the back end heroku app. Without this, it takes 5 seconds for the menu items to load when you click on menu, 
//with this, the loading will start whenever the app is started
axios.get('https://sushi-back-end.herokuapp.com/api/food')

ReactDOM.render(
  <AuthProvider>
    <Context>
      <App/>
    </Context>
  </AuthProvider>,
  document.getElementById('root')
);


