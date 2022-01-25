import React from 'react';
import {Link,Outlet} from 'react-router-dom';

export default function Nav(){

    return(
        <>
             <nav>
                <Link to="/menu">All</Link>
                <Link to="/menu/salad">Salad</Link>
                <Link to="/menu/appetizer">Appetizer</Link>
                <Link to="/menu/soup">Soup</Link>
                <Link to="/menu/rolls">Rolls</Link>
                <Link to="/menu/bento">Bento</Link>
                <Link to="/menu/rice">Rice</Link>
                <Link to="/menu/combo">Combo</Link>
                <Link to="/menu/sushi">Sushi/Sashimi</Link> 
                {/* Sushi&Sashimi */}
            </nav>

            <Outlet/>
        </>
    );
}