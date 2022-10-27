import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Course = () => {
    const course = useLoaderData();
    const { title, image_url, _id, details } = course;
    return (
        <div>
            <Card >
                <Card.Img style={{ height: '400px' }} variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to={`/CheckOut/${_id}`}>
                        <Button variant="primary">Get premium access</Button></Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Course;
// style={{ width: '20rem' }}