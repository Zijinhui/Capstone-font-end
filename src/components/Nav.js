import React from 'react';
import {Link,Outlet} from 'react-router-dom';

export default function Nav(){

    return(
        <>

            <div className='sushi-heading'>すし</div>
            <nav className='nav'>
                <Link className='nav-link' to="/home">Home</Link>
                <Link className='nav-link' to="/menu">Menu</Link>
                {/* <Link className='nav-link' to="/login">Login</Link> */}
                <Link className='nav-link' to="/signup">Signup</Link> 
                <Link className='nav-link' to="/cart">Cart</Link>
                <Link className="nav-link" to="/payment">Payment</Link>
            </nav>

            {/* delete Signup after login page created */}

            <Outlet/>
        </>
    );
}