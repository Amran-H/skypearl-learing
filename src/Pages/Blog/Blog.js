import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Blog = () => {
    return (
        <div>
            <Accordion defaultActiveKey="0" flush>


                <Accordion.Item eventKey="0" className='m-3'>
                    <Accordion.Header>what is cors?</Accordion.Header>
                    <Accordion.Body>
                        Cross-origin resource sharing is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served. A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and videos.
                    </Accordion.Body>
                </Accordion.Item>


                <Accordion.Item eventKey="1" className='m-3'>
                    <Accordion.Header>Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
                    <Accordion.Body>
                        Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.
                    </Accordion.Body>
                </Accordion.Item>


                <Accordion.Item eventKey="2" className='m-3'>
                    <Accordion.Header> How does the private route work?</Accordion.Header>
                    <Accordion.Body>
                        The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).
                    </Accordion.Body>
                </Accordion.Item>


                <Accordion.Item eventKey="3" className='m-3'>
                    <Accordion.Header>What is Node? How does Node work?</Accordion.Header>
                    <Accordion.Body>
                        It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
                    </Accordion.Body>
                </Accordion.Item>


            </Accordion>
        </div>
    );
};

export default Blog;