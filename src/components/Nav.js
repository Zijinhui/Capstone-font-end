import React from 'react';
import {Link,Outlet} from 'react-router-dom';
import { Container, FormControl, Navbar, Nav, Dropdown, Badge } from 'react-bootstrap'
import { IoCartOutline } from 'react-icons/io5'
import { GiSushis } from 'react-icons/gi'


export default function nav(){

    return(
        <>
            <Navbar bg="dark" variant="dark"  style={{ height: 80}}>
                <Container>
                    <nav className='nav'>
                        <GiSushis color="white" fontSize="33px"/>
                        <div className='sushi-heading'>すし</div>
                        <Link className='nav-link' to="/home">Home</Link>
                        <Link className='nav-link' to="/menu">Menu</Link>
                        {/* <Link className='nav-link' to="/login">Login</Link> */}
                        <Link className='nav-link' to="/signup">Signup</Link> 
                        <Link className='nav-link' to="/cart">Cart</Link>
                        <Link className="nav-link" to="/payment">Payment</Link>
                    </nav>
                </Container>

                {/* delete Signup after login page created */}
                <Nav>
                    <Dropdown alignRight>
                        <Dropdown.Toggle variant="success">
                        <IoCartOutline color="white" fontSize="25px"/>
                        <Badge>{10}</Badge>
                        </Dropdown.Toggle>
                        <Dropdown.Menu style={{ minWidth: 370}}>
                            <span style={{ padding: 10}}>Cart is Empty!</span>
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
            </Navbar>
            <Outlet/>
        </>
    );
}