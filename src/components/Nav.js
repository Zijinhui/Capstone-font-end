import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Nav extends Component{
    render()
    {
        return(
            <ul>
                    <li><Link to="/Home">Home</Link></li>
                    <li><Link to="/Menu">Menu</Link></li>
                    <li><Link to="/Login">Login</Link></li>
                    <li><Link to="/Cart">Cart</Link></li>
            </ul>
        );
    }
}