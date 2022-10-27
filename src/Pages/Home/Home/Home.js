import React from 'react';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';


import { useLoaderData } from 'react-router-dom';
import CourseSummaryCard from '../../../Shared/CourseSummaryCard/CourseSummaryCard';

const Home = () => {
    const allCourse = useLoaderData();

    return (
        <div>
            <h2>Home: {allCourse.length}</h2>
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