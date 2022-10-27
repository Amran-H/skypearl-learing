import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';




const CourseSummaryCard = ({ course }) => {
    const { title, image_url, _id, details } = course;
    console.log(course);
    return (
        <div>

            <Col >
                <Card className='shadow'>
                    <Card.Img className='p-2 shadow mh-50' variant="top" src={image_url} />
                    <Card.Body>
                        <Card.Title> {title}</Card.Title>
                        <Card.Text>
                            {details.length > 200 ?
                                <p>{details.slice(0, 200) + '...'} <Link to={`/course/${_id}`}>Explore the course</Link></p>
                                :
                                <p>{details}</p>
                            }
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

        </div>
    );
};

export default CourseSummaryCard;