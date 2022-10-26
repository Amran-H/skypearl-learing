import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';


const RightSideNav = () => {
    return (
        <div className="d-grid my-3 px-5 " >
            <ButtonGroup vertical>
                <Button variant="outline-primary" className='mb-2'>Button</Button>
                <Button variant="outline-dark">Button</Button>
            </ButtonGroup>
        </div>
    );
};

export default RightSideNav;