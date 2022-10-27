import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import CourseSummaryCard from '../../../Shared/CourseSummaryCard/CourseSummaryCard';
import LeftSideNav from '../../../Shared/LeftSideNav/LeftSideNav';

const Category = () => {
    const categoryCourse = useLoaderData();
    return (
        <div>

            <Container>
                <Row lg={1}>
                    <Col lg="4" className='d-none d-lg-block'>
                        <LeftSideNav></LeftSideNav>
                    </Col>
                    <Col lg="8">
                        {
                            categoryCourse.map(course => <CourseSummaryCard
                                key={course._id}
                                course={course}
                            ></CourseSummaryCard>)
                        }
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Category;