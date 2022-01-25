import React from 'react';
import {Link} from 'react-router-dom';

export default function Nav(){

    return(
        <nav>
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/login">Login</Link>
            <Link to="/cart">Cart</Link>
        </nav>
    );
}