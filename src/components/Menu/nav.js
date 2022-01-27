import React from 'react';
import {Link,Outlet} from 'react-router-dom';

export default function Nav(){

    return(
        <>
             <nav className="side-bar">
                 <ul className="categories">
                <li><Link to="/menu">All</Link></li>
                <li><Link to="/menu/salad">Salad</Link></li>
                <li> <Link to="/menu/appetizer">Appetizer</Link></li>
                <li> <Link to="/menu/soup">Soup</Link></li>
                <li><Link to="/menu/rolls">Rolls</Link></li>
                <li><Link to="/menu/bento">Bento</Link></li>
                <li><Link to="/menu/rice">Rice</Link></li>
                <li><Link to="/menu/combo">Combo</Link></li>
                <li><Link to="/menu/sushi">Sushi/Sashimi</Link></li>
                {/* Sushi&Sashimi */}
                </ul>
            </nav>

            <Outlet/>
        </>
    );
}