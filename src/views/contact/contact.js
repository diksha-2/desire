import React , {Component} from 'react';
import './contact.css';
import {Card, Form, Container, Row, Col} from 'react-bootstrap'
import {link} from 'react-router-dom';
import { toast } from 'react-toastify';

import {addContactUs} from '../../actions/enquiryAction';


class Contact extends Component{
    constructor(props){
        super(props);
        this.state ={
            email: "",
            name: "",
            message: ""
        }
    }

handleChange = (e) =>{
    
    const {name ,  value} = e.target;
    let userInfo = this.state
      userInfo[name] = value;
    this.setState(userInfo, ()=>{

    });
  }
  submitData = () => {
    let { name, email, message } = this.state;
    addContactUs({ name, email, message }, (response) => {
      if (response && response.status == "OK") {
          
        toast.success(response.message, {
          position: toast.POSITION.TOP_RIGHT
        });
        this.props.history.push("/");
      } else {
          window.alert('error');
        //this.setAuthError(response.message);
      }
    });
  }




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
                            <Form.Group >
                                <Form.Row className="c-form">
                                    <Form.Label column lg={2}>
                                    Name
                                    </Form.Label>
                                   <Form.Control type="text" placeholder="name" name="name" id="name" onChange={this.handleChange} />                                   
                                </Form.Row>
                                <Form.Row className="c-form">
                                    <Form.Label column lg={2}>
                                    Email &nbsp;*
                                    </Form.Label>
                                   <Form.Control type="text" placeholder="email" name="email" id="email" onChange={this.handleChange} />                                   
                                </Form.Row>
                                <Form.Row className="c-form">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control as="textarea" rows={6} placeholder="message" name="message" id="message" onChange={this.handleChange} />                                  
                                </Form.Row>
                                <Form.Row className="c-form">
                                <button type="submit" onClick={this.submitData}>Send Message</button>
                                                                 
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