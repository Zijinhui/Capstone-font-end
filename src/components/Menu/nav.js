import React from 'react';
import {Link,Outlet} from 'react-router-dom';
import { Container, FormControl, Navbar, Nav, Dropdown, Badge } from 'react-bootstrap'
import '../../menu.css'

export default function MenuNav(){

    return(
        <div className='MenuNav'>
             <nav className='Menu-Nav-titles'>
                    <div className='Menu-Nav-title'><Link to="/menu" style={{ textDecoration: 'none' }}><p className='navTitle'>All</p></Link></div>
                    <div className='Menu-Nav-title'><Link to="/menu/salad" style={{ textDecoration: 'none' }}><p className='navTitle'>Salad</p></Link></div>
                    <div className='Menu-Nav-title'><Link to="/menu/appetizer" style={{ textDecoration: 'none' }}><p className='navTitle'>Appetizer</p></Link></div>
                    <div className='Menu-Nav-title'><Link to="/menu/soup" style={{ textDecoration: 'none' }}><p className='navTitle'>Soup</p></Link></div>
                    <div className='Menu-Nav-title'><Link to="/menu/rolls" style={{ textDecoration: 'none' }}><p className='navTitle'>Rolls</p></Link></div>
                    <div className='Menu-Nav-title'><Link to="/menu/bento" style={{ textDecoration: 'none' }}><p className='navTitle'>Bento</p></Link></div>
                    <div className='Menu-Nav-title'><Link to="/menu/rice" style={{ textDecoration: 'none' }}><p className='navTitle'>Rice</p></Link></div>
                    <div className='Menu-Nav-title'><Link to="/menu/combo" style={{ textDecoration: 'none' }}><p className='navTitle'>Combo</p></Link></div>
                    <div className='Menu-Nav-title'><Link to="/menu/sushi" style={{ textDecoration: 'none' }}><p className='navTitle'>Sushi&Sashimi</p></Link> </div>    
            </nav>

            <Outlet/>
        </div>
    );
}