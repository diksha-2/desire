import React from 'react';
import './login.css';
import {Container, Row, Col, Card, CardImg, Form, Button, Alert } from 'react-bootstrap'

class Login extends React.Component{

    render()
    {
        return(
            <div>
                <Container >
                <Row>
                    <Col md="6" className="login-left">
                        <CardImg width="100%" src="https://image.ibb.co/n7oTvU/logo_white.png" alt="Card image cap" />
                        <h3>Welcome</h3>
                        <p>You are 30 seconds away from earning your own money!</p>
                        
                    </Col>
                    <Col md="6" className="login-right">
                        <Form className="form-signin login-form">
                            <h3 className="text-uppercase text-center font-weight-bold mb-4">Login</h3>

                            <Form.Group className="form-label-group">
                                <Form.Label for="userName">Email or Phone</Form.Label>
                                <Form.Control className="form-control" type="text" name="userName" placeholder="Email" />
                              

                            </Form.Group>
                            <Form.Group className="form-label-group">
                                <Form.Label for="examplePassword">Password</Form.Label>
                                <Form.Control className="form-control" type="password" name="password" placeholder="Password" />
                               

                            </Form.Group>
                             <Button className="btnlogin py-2 my-4 btn btn-lg  text-uppercase" color="primary" block>Login</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
            </div>
            )
    }
}
export default Login;