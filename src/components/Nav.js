import React from 'react';
import {Link,Outlet} from 'react-router-dom';
import { Container, FormControl, Navbar, Nav, Dropdown, Badge } from 'react-bootstrap'
import { IoCartOutline } from 'react-icons/io5'
import { GiSushis } from 'react-icons/gi'
import { useLayoutEffect, useState } from 'react';



export default function NavBar(){
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
                            <Link className='nav-link' to="/home">Home</Link>
                            <Link className='nav-link' to="/menu">Menu</Link>
                            {/* <Link className='nav-link' to="/login">Login</Link> */}
                            <Link className='nav-link' to="/signup">Signup</Link> 
                            <Link className='nav-link' to="/cart">Cart</Link>
                            <Link className="nav-link" to="/payment">Payment</Link>
                        </>   
                        }
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