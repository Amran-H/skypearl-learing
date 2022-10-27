import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import RightSideNav from '../RightSideNav/RightSideNav';
import ReactSwitch from 'react-switch';
import { Link } from 'react-router-dom';


const Header = () => {
    const [theme, setTheme] = useState('dark');

    const toggleTheme = () => {
        setTheme((curr) => (curr === "light" ? "dark" : "light"));
    };
    return (
        <div>
            <Navbar collapseOnSelect className='mb-4' expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand ><Nav.Link as={Link} to='/'>SkyPearl-Learning</Nav.Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to='/course'>Courses</Nav.Link>
                            <Nav.Link >FAQ</Nav.Link>
                            <Nav.Link >Blog</Nav.Link>
                        </Nav>
                        <Nav>
                            <div className='switch'>
                                <label>{theme === "light" ? "Light Mode" : "Dark Mode"}</label>
                                <ReactSwitch onChange={toggleTheme} checked={theme === "dark"}></ReactSwitch>
                            </div>
                            <Nav.Link href="#deets">More deets</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link>
                        </Nav>
                        <div className='d-lg-none'>
                            <RightSideNav></RightSideNav>
                            <LeftSideNav></LeftSideNav>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;