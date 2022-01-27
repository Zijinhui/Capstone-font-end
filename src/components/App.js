import React from 'react';
import Nav from './Nav';
import Home from './Home';
import Login from './auth/Login';
import Signup from './auth/Signup';
import Menu from './Menu/Menu';
import Cart from './Cart/Cart'
import Food from './Menu/Food';
import  Payment from './Payment/Payment';
import Address from './Payment/Address'
import Review from './Payment/Review'
import {BrowserRouter as Router, Routes ,Route} from 'react-router-dom';

function App () {

    return(
        <Router>
            <Routes>
                <Route path='/' element={<Nav />}>

                    <Route path='/home' element={<Home />}/>
                    <Route path='/menu' element={<Menu />} />
                    <Route path='/menu/:type' element={<Food/>} />
                    <Route path='/login' element={<Home />}/>
                    <Route path='/login' element={<Login />}/>
                    <Route path='/signup' element={<Signup />}/>
                    <Route path='cart' element={<Cart />}/>
                    <Route path='/payment' element={<Payment />}/>
                    <Route path='address' element={<Address />}/>
                    <Route path='/review' element={<Review />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default App;
