import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import RightSideNav from '../RightSideNav/RightSideNav';
import ReactSwitch from 'react-switch';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { FaUserAlt } from 'react-icons/fa';
import { Button, Image } from 'react-bootstrap';



const Header = () => {
    const [theme, setTheme] = useState('dark');

    const toggleTheme = () => {
        setTheme((curr) => (curr === "light" ? "dark" : "light"));
    };

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

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
                            <Nav.Link as={Link} to='/blog'>Blog</Nav.Link>
                        </Nav>
                        <Nav>
                            <div className='switch'>
                                <label>{theme === "light" ? "Light Mode" : "Dark Mode"}</label>
                                <ReactSwitch onChange={toggleTheme} checked={theme === "dark"}></ReactSwitch>
                            </div>
                            <Nav.Link>
                                {
                                    user?.uid ?
                                        <>
                                            <span>{user?.displayName}</span>
                                            <Button variant='light' onClick={handleLogOut}>Log Put</Button>
                                        </>
                                        :
                                        <>
                                            <Link to='/login'><button>Login</button></Link>
                                            <Link to='/register'><button>Register</button></Link>
                                        </>
                                }

                            </Nav.Link>
                            <Nav.Link eventKey={2} >
                                {user?.photoURL ?
                                    <Image style={{ height: '30px' }}
                                        roundedCircle src={user?.photoURL}> </Image>
                                    :
                                    <FaUserAlt></FaUserAlt>
                                }
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