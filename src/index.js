import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import reportWebVitals from './reportWebVitals';
import Nav from './components/Nav';
import Home from './components/Home';
import Payment from './components/Payment/Payment';
import Address from './components/Payment/Address'
import {BrowserRouter as Router, Routes ,Route} from 'react-router-dom';

ReactDOM.render(
  <Router>
      <Routes>
         <Route path='/' element={<Nav />}>
            <Route path='/home' element={<Home />}/>
            <Route path='/menu' element={<Home />}/>
            <Route path='/login' element={<Home />}/>
            <Route path='/signup' element={<Home />}/>
            <Route path='/cart' element={<Home />}/>
            <Route path='/payment' element={<Payment />}/>
            <Route path='address' element={<Address />}/>
          </Route>
      </Routes>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
