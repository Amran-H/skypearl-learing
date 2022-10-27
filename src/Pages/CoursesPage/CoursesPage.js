import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet, useLoaderData } from 'react-router-dom';
import CourseSummaryCard from '../../Shared/CourseSummaryCard/CourseSummaryCard';
import LeftSideNav from '../../Shared/LeftSideNav/LeftSideNav';
import Home from '../Home/Home/Home';

const CoursesPage = () => {
    const allCourse = useLoaderData();
    return (
        <div>
            <Container>
                <Row>
                    <Col lg="2" className='d-none d-lg-block'>
                        <LeftSideNav></LeftSideNav>
                    </Col>
                    <Col lg="10">
                        <Container>
                            <Row xs={1} md={2} lg={3} className="g-2">
                                {
                                    allCourse.map(course => <CourseSummaryCard
                                        key={course._id}
                                        course={course}
                                    ></CourseSummaryCard>)
                                }
                            </Row>
                        </Container>
                    </Col>


                </Row>
            </Container>
        </div>
    );
};

export default CoursesPage;