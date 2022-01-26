import React from 'react';
import {Link,Outlet} from 'react-router-dom';

export default function Nav(){

    return(
        <>

            <nav>
                <Link to="/home">Home</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/login">Login</Link>
                <Link to="/cart">Cart</Link>
            </nav>

            {/* delete Signup after login page created */}

            <Outlet/>
        </>
    );
}