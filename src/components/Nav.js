import React from 'react';
import {Link,Outlet} from 'react-router-dom';
import { Container, FormControl, Navbar, Nav, Dropdown, Badge } from 'react-bootstrap'
import { IoCartOutline } from 'react-icons/io5'
import { GiSushis } from 'react-icons/gi'
import { useLayoutEffect, useState } from 'react';
import { useAuth } from "./Auth/AuthContext"
import { CartState } from './GlobalContext';

export default function NavBar(){


    const {state:{cart}} = CartState()

    function useWindowSize() {
        const [size, setSize] = useState([0, 0]);
        useLayoutEffect(() => {
          function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
          }
          window.addEventListener('resize', updateSize);
          updateSize();
          return () => window.removeEventListener('resize', updateSize);
        }, []);
        return size;
      }
      
      function ShowWindowDimensions(props) {
        const [width, height] = useWindowSize();
        console.log(width)
        let smallScreen = false
        if (width < 616) {
            smallScreen = true
        }
        return smallScreen
      }
      
    //   const {user:{currentUser}} = CartState()

      const { currentUser } = useAuth()

    return(
        <>
            <Navbar bg="dark" variant="dark"  style={{ height: 80}}>
                <Container>
                   
                    <nav className='nav'>
                        <GiSushis color="white" fontSize="33px"/>
                        <h3 className='sushi-heading'>すし</h3>

                        { ShowWindowDimensions() ?
                        <></>
                        :
                        <>
                            <Link className='nav-link' to="/">Home</Link>
                            <Link className='nav-link' to="/menu">Menu</Link>
                            {currentUser? <Link className='nav-link' to="/user-profile">User Profile</Link> : <Link className='nav-link' to="/login">Login</Link>}
                            <Link className='nav-link' to="/cart">Cart</Link>
                            <Link className="nav-link" to="/payment">Payment</Link>
                        </>   
                        }
                    </nav>  
                    
                </Container>

                {/* delete Signup after login page created */}
                <Nav>
                    <Dropdown className="m-auto">
                        <Dropdown.Toggle variant="success">
                        <IoCartOutline color="white" fontSize="25px"/>
                        <Badge>{cart.length>1? cart.reduce((pre,curr)=>pre.qty+curr.qty) : cart.length===1? cart[0].qty : 0}</Badge>
                        </Dropdown.Toggle>
                        <Dropdown.Menu style={{ minWidth: 370}}>
                            {cart.length > 0?
                            <>{
                                cart.map(prod => <span>
                                       <p>{prod.food.name} qty:{prod.qty}</p>
                                </span>)
                            }</>
                            :
                            (<span style={{ padding: 10}}>Cart is Empty!</span>)
                            }
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
            </Navbar>
            <Outlet/>
        </>
    );
}