import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import reportWebVitals from './reportWebVitals';
import Nav from './components/Nav';
import Home from './components/Home';
import Signup from './components/auth/Signup';
import Menu from './components/Menu/Menu';
import Cart from './components/Cart/Cart'
import Food from './components/Menu/Food';
import {BrowserRouter as Router, Routes ,Route} from 'react-router-dom';

ReactDOM.render(
  <Router>
      <Routes>
         <Route path='/' element={<Nav />}>
            <Route path='/home' element={<Home />}/>
            <Route path='/menu' element={<Menu />} />
            <Route path='/menu/:type' element={<Food />} />
            <Route path='/login' element={<Home />}/>
            <Route path='/signup' element={<Signup />}/>
            <Route path='cart' element={<Cart />}/>
            <Route path='payment' element={<Home />}/>
          </Route>
      </Routes>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
