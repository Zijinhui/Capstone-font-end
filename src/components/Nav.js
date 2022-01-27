import React from 'react';
import {Link,Outlet} from 'react-router-dom';
import { Container, FormControl, Navbar, Nav, Dropdown, Badge , Offcanvas, NavDropdown, Form, Button, DropdownButton } from 'react-bootstrap'
import { IoCartOutline } from 'react-icons/io5'
import { GiSushis } from 'react-icons/gi'
import { TiThMenuOutline } from 'react-icons/ti'
import { useLayoutEffect, useState } from 'react';
import { useAuth } from "./Auth/AuthContext"
import { CartState } from './GlobalContext';

export default function NavBar(){


    const {state:{cart}} = CartState()
    console.log(cart)

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
            <Navbar bg="dark" variant="dark" style={{ height: 80}}>
                <Container fluid>
                   
                    <nav className='nav'>
                        <GiSushis color="white" fontSize="33px"/>
                        <h3 className='sushi-heading'>すし</h3>

                        { ShowWindowDimensions() ?
                         <NavDropdown  title={ <TiThMenuOutline color="white" fontSize="25px"/>}id="collasible-nav-dropdown">
                         <NavDropdown.Item href="/home">Home</NavDropdown.Item>
                         <NavDropdown.Item href="/menu">Menu</NavDropdown.Item>
                         <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                         <NavDropdown.Item href="/signup">Signup</NavDropdown.Item>
                         <NavDropdown.Divider />
                         <NavDropdown.Item href="/payment">Payment</NavDropdown.Item>
                         </NavDropdown>
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
                    <Container fluid>
                    <Dropdown className="m-auto" alignRight>
                        <Dropdown.Toggle variant="success" >
                        <IoCartOutline color="white" fontSize="25px"/>
                        <Badge>{cart.length>1? cart.reduce((pre,curr)=>pre.qty+curr.qty) : cart.length===1? cart[0].qty : 0}</Badge>
                        </Dropdown.Toggle>
                        <Dropdown.Menu  style = {{ minWidth: 150}} className="dropdown-menu">
                            {cart.length > 0?
                            <>{
                                cart.map(prod => <span>
                                       <p>{prod.food.name} qty:{prod.qty}</p>
                                </span>)
                            }</>
                            :
                            (<span style={{ padding: 10}} className="nav-item dropleft">Cart is Empty!</span>)
                            }
                        </Dropdown.Menu>
                    </Dropdown>
                    </Container>
                </Nav>
              
               
            </Navbar>
            <Outlet/>
        </>
    );
}