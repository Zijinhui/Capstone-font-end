import React from 'react';
import Nav from './Nav';
import Home from './Home';
import Login from './Auth/Login';
import Signup from './Auth/Signup';
import ForgotPassword from './Auth/ForgotPassword';
import Dashboard from './Auth/Dashboard';
import UpdateProfile from './Auth/UpdateProfile';
import Menu from './Menu/Menu';
import Cart from './Cart/Cart'
import Food from './Menu/Food';
import  Payment from './Payment/Payment';
import {BrowserRouter as Router, Routes ,Route} from 'react-router-dom';

function App () {

    return(
        <>
        <Router>
                <Routes>
                    <Route path='/' element={<Nav />}>
                        <Route path='/' element={<Home />}/>
                        <Route path='/menu' element={<Menu />} />
                        <Route path='/menu/:type' element={<Food />} />
                        <Route path='/login' element={<Login />}/>
                        <Route path='/signup' element={<Signup />}/>
                        <Route path='cart' element={<Cart/>} />
                        <Route path='payment' element={<Payment />}/>
                        <Route path="/forgot-password" element={<ForgotPassword />} />
                        <Route path="/user-profile" element={<Dashboard />} />
                        <Route path="/update-profile" element={<UpdateProfile />} />
                    </Route>
                </Routes>
        </Router>
        <div id='footer' >
            <div id='footerItems'>
                Zixin Zou   |
                Zijinhui Zhuang  |
                Jiayi Chen   |
                Oleksii Kravtsov
            </div>
            <div id='bottomOfFooter' className='center' className='centerText'>
                Ⓒ Group 9
            </div>
        </div>
        </>
    )
}

export default App;
