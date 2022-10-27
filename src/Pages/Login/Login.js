import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import RightSideNav from '../../Shared/RightSideNav/RightSideNav';

const Login = () => {
    const [error, setError] = useState('');
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset();
                setError('');
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })
    }

    return (
        <div>
            <Container>
                <Row className=' mb-5 mt-5'>
                    <Col lg="7">
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control required name='email' type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control required name='password' type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Text >
                                <h5>Don't have an account? Please <Link to='/register'>Register</Link></h5>
                            </Form.Text>

                            <Button variant="primary" type="submit">
                                Login
                            </Button>


                            <Form.Text className="text-danger">
                                {error}
                            </Form.Text>
                        </Form>
                    </Col>
                    <Col lg="5" className='d-none d-lg-block justify-content-center'>
                        <RightSideNav></RightSideNav>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;