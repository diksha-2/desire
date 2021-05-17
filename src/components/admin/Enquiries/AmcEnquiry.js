import React from 'react';
import { Card, Container, Row, Col, ListGroup, Button} from 'react-bootstrap'

/**
* @author
* @function AmcEnquiry
**/

const AmcEnquiry = (props) => {
  return(<>
    <div>AmcEnquiry</div>
    <div class="card" style={{width: '18rem'}}>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>






<div>
    <Container>
        <Row>
            <Col md={3} xs={6}>
                <Card border="primary" style={{widht:'14rem'}}>
                    <Card.Img variant="top" src=""/>
                    <Card.Body>
                        <Card.Title>props.product.name</Card.Title>
                        <Card.Text>Price: $ props.product.price, Quantity: props.product.quantity
                        </Card.Text>
                        <Button variant="primary">Add to Cart</Button>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
    
</div>

</>
   )

 }

export default AmcEnquiry