import React from 'react';
import './contact.css';
import {Card, Form, Container, Row, Col} from 'react-bootstrap'
class Contact extends React.Component{

    render()
    {
        return(
            <div>
                
                <Container fluid>
                <div className="c-title">
				    <h1>Contact</h1>
				</div>
                    <Row className="py-5 mb-5">
                        <Col sm={6} md={6}>
                        <Card className="c-font-size c-font-color c-font-weight c-width m-auto border-0">                            
                            <Card.Body className="c-body">
                                <Card.Title><h3>How can we help?</h3></Card.Title>
                                    <Card.Text>Have questions? Want to discuss a project? Give us a call! We strive to be in constant communication with our customers until the job is done.
                                    </Card.Text>
                            </Card.Body>
                            <Card.Body className="c-body">
                                <Card.Title><h3>Desire Home</h3></Card.Title>
                                    <Card.Text>F55, 1st Floor, Sushant Lok-II, Gurugram-122011, Haryana Mobile : 8745856555, 9205041868, Landline : 0124-4045304 Mail : <a href="#" className="c-link">office@desirehomegurgaon.com</a>
                                    </Card.Text>
                            </Card.Body>  
                            <Card.Body className="c-body">
                                <Card.Title><h3>Hours</h3></Card.Title>
                                    <Card.Text>Wednesday – Monday: 10am – 6pm Tuesday: Closed
                                    </Card.Text>
                            </Card.Body>                          
                        </Card>
                        </Col>
                        <Col sm={6} md={6} className="">
                            <Form.Group>
                                <Form.Row className="c-form">
                                    <Form.Label column lg={2}>
                                    Name
                                    </Form.Label>
                                   <Form.Control type="text" placeholder="" />                                   
                                </Form.Row>
                                <Form.Row className="c-form">
                                    <Form.Label column lg={2}>
                                    Email &nbsp;*
                                    </Form.Label>
                                   <Form.Control type="text" placeholder="" />                                   
                                </Form.Row>
                                <Form.Row className="c-form">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control as="textarea" rows={6} />                                  
                                </Form.Row>
                               </Form.Group>
                        </Col>
                    </Row>
                    </Container>
            </div>
            )
    }
}
export default Contact;