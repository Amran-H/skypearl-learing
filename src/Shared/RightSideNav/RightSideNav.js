import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import { FaGithub, FaGoogle, IconName } from "react-icons/fa";

const RightSideNav = () => {
    return (
        <div className="d-grid my-3 px-5 " >
            <h4>Please Login</h4>
            <ButtonGroup vertical>
                <Button variant="outline-primary" className='mb-2'> Email and password Login</Button>
                <Button className='mb-2' variant="outline-dark"><FaGoogle></FaGoogle>  Login with Google</Button>
                <Button variant="outline-success"><FaGithub></FaGithub> Login with Github</Button>
            </ButtonGroup>
        </div>
    );
};

export default RightSideNav;