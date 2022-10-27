import React from 'react';
import { Col, Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';


import { useLoaderData } from 'react-router-dom';
import CourseSummaryCard from '../../../Shared/CourseSummaryCard/CourseSummaryCard';
import RightSideNav from '../../../Shared/RightSideNav/RightSideNav';

const Home = () => {
    const allCourse = useLoaderData();

    return (
        <div>
            <h2 className='mb-5'>Welcome to the finest digital learning platform SkyPearl-learning. Here you can find different courses of programming languages.</h2>
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
        </div>
    );
};

export default Home;