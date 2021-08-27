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
                            />
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" placeholder="Last Name" />
                            </Form.Group>
                        </Col>
                    </Row>
                 <Form.Group className="mb-3" controlId="formBasicEmail">
                     <Form.Label>Email address</Form.Label>
                     <Form.Control type="email" placeholder="Enter email" />
                     <Form.Text className="text-muted">
                     We'll never share your email with anyone else.
                     </Form.Text>
                 </Form.Group>

                 <Form.Group className="mb-3" controlId="formBasicPassword">
                     <Form.Label>Password</Form.Label>
                     <Form.Control type="password" placeholder="Password" />
                 </Form.Group>
                
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