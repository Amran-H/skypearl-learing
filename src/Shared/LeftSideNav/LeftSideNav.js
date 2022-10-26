import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';



const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/course-categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div>
            <h3>Total Courses: {categories.length}</h3>
            <div>
                {
                    categories.map(category => <p className="d-grid gap-2 px-5 " >
                        <Button variant="dark" size="lg" key={category.id}><Link>{category.name}</Link></Button>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;