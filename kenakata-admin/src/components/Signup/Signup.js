import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import Input from '../Input/Input';

const Signup = () => {
    return (
        <Container>
        <Row className='mt-5'>
            <Col md={{span:6, offset: 3}}>
             <Form>
                    <Row>
                        <Col md={6}>
                            <Input 
                                label='First Name'
                                placeholder="First Name"
                                value=""
                                type="text"
                                onChange={() => {}}
                            />
                        </Col>
                        <Col md={6}>
                            <Input 
                                label='Last Name'
                                placeholder="Last Name"
                                value=""
                                type="text"
                                onChange={() => {}}
                            />
                        </Col>
                    </Row>
                        <Input 
                                label='Email address'
                                placeholder="Enter Your Email"
                                value=""
                                type="email"
                                onChange={() => {}}
                            />

                        <Input 
                                label='Password'
                                placeholder="Enter Password"
                                value=""
                                type="password"
                                onChange={() => {}}
                            />
                
                 <Button variant="primary" type="submit">
                     Sign Up
                 </Button>
             </Form>
            </Col>
        </Row>
     </Container>
    );
};

export default Signup;