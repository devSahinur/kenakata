import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import {Link, NavLink} from 'react-router-dom'


const Header = () => {
    return (
        <>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
           {/* rand> <Navbar.B href="#home">KenaKata Admin Dashboard</Navbar.B */}
           <Link to='/' className='navbar-brand'>KenaKata Admin Dashboard</Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav>
                {/* <Nav.Link href="#deets">Sign In</Nav.Link> */}
                <li className="nav-item">
                    <NavLink to='signin' className='nav-link'>Sign In</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='signup' className='nav-link'>Sign Up</NavLink>
                </li>
            </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>  
        </>
    );
};

export default Header;