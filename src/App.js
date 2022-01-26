import React from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Menu from './components/Menu/Menu';
import Cart from './components/Cart/Cart'
import Food from './components/Menu/Food';
import {BrowserRouter as Router, Routes ,Route} from 'react-router-dom';

function App () {
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Nav />}>
                    <Route path='/home' element={<Home />}/>
                    <Route path='/menu' element={<Menu />} />
                    <Route path='/menu/:type' element={<Food />} />
                    <Route path='/login' element={<Login />}/>
                    <Route path='/signup' element={<Signup />}/>
                    <Route path='cart' element={<Cart />}/>
                    <Route path='payment' element={<Home />}/>
                </Route>
            </Routes>
        </Router>
    )
}

export default App;
