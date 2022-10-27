import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import CourseSummaryCard from '../../../Shared/CourseSummaryCard/CourseSummaryCard';

const Category = () => {
    const categoryCourse = useLoaderData();
    return (
        <div>
            <h2>This is category {categoryCourse.length}</h2>
            <Container>
                <Row md={1} lg={1}>
                    {
                        categoryCourse.map(course => <CourseSummaryCard
                            key={course._id}
                            course={course}
                        ></CourseSummaryCard>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Category;