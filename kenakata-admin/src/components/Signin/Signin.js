import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import Input from '../Input/Input';

const Signin = () => {
    return (
        <Container>
           <Row className='mt-5'>
               <Col md={{span:6, offset: 3}}>
                <Form>
                        <Input 
                                label='Email address'
                                placeholder="Enter your email"
                                value=""
                                type="email"
                                onChange={() => {}}
                            />

                        <Input 
                                label='Password'
                                placeholder="Enter your password"
                                value=""
                                type="password"
                                onChange={() => {}}
                            />
                    <Button variant="primary" type="submit">
                        Sign In
                    </Button>
                </Form>
               </Col>
           </Row>
        </Container>
    );
};

export default Signin;