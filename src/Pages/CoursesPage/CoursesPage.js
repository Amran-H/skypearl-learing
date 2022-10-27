import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import LeftSideNav from '../../Shared/LeftSideNav/LeftSideNav';
import Home from '../Home/Home/Home';

const CoursesPage = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg="2" className='d-none d-lg-block'>
                        <LeftSideNav></LeftSideNav>
                    </Col>
                    <Col lg="10">
                        <Home></Home>
                    </Col>


                </Row>
            </Container>
        </div>
    );
};

export default CoursesPage;