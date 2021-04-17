import React from 'react';
import './services.css'
import { Card, Button, Carousel } from 'react-bootstrap';
import Service1  from "../../assets/img/service-1.jpg"
import Service2  from "../../assets/img/service-2.jpg"
import Service3  from "../../assets/img/service-3.jpg"
import Service4  from "../../assets/img/service-4.jpg"
// import logo from '../../assets/img/logo32.png';

class Services extends React.Component{

    render()
    {
    	const element = [
	    {
	        title:'Home', image:'https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/4.jpg',caption: 'First slide label', detail: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
	    },
		{
	        title:'Home', image:'https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/4.jpg',caption: 'Second slide label', detail: 'vitae elit libero, a pharetra augue mollis interdum.'
	    },
		{
	        title:'Home', image:'https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/4.jpg',caption: 'Third slide label', detail: 'elit libero, a pharetra augue mollis interdum.'
	    },
		{
	        title:'Home', image:'https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/4.jpg',caption: 'Fourth slide label', detail: ' a pharetra augue mollis interdum.'
	    },
		{
	        title:'Home', image:'https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/4.jpg',caption: 'Fifth slide label', detail: ' vitae elit libero, a pharetra augue mollis interdum.'
	    },
		{
	        title:'Home', image:'https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/4.jpg',caption: 'Sixth slide label', detail: 'Nulla  libero, a pharetra augue mollis interdum.'
	    },
		    
	]

        return(
            <div className="mx-auto row">
                <div className="s-title">
				    <h1>Services</h1>
				</div>
                <Card className="col-sm-3 col-md-3 px-2 border-0">
                    <Card.Img  src={ Service1 } />
                    <Card.Body className="pl-0 py-4">
                        <Card.Title className="s-subtitle">BUY</Card.Title>
                    </Card.Body>
                </Card>
                <Card className="col-sm-3 col-md-3 px-2 border-0">
                    <Card.Img src={ Service2 } />
                    <Card.Body className="pl-0 py-4">
                        <Card.Title className="s-subtitle">SELL</Card.Title>
                    </Card.Body>
                </Card>
                <Card className="col-sm-3 col-md-3 px-2 border-0">
                    <Card.Img src={ Service3 } />
                    <Card.Body className="pl-0 py-4">
                        <Card.Title className="s-subtitle">LEASE</Card.Title>
                    </Card.Body>
                </Card>
                <Card className="col-sm-3 col-md-3 px-2 border-0">
                    <Card.Img src={ Service4 } />
                    <Card.Body className="pl-0 py-y">
                        <Card.Title className="s-subtitle">INTERIOR</Card.Title>
                    </Card.Body>
                </Card>
                <div className="s-title">
				    <h3>Your property management</h3>
				</div>
                <Card className="title-font-size title-font-color title-font-weight s-width m-auto border-0">
                    <Card.Body >Successful management of your real estate requires skillful stewardship of the physical space, tenant relationships and your reputation in the marketplace.</Card.Body>
                    <Card.Body className="pt-0 card-body">By partnering with Desire Home Gurgaon, you will have the attention of best-in-class advisors who will manage the ever-changing needs of your property to maximize value and tenant retention, freeing you up to focus on your business.</Card.Body>
                    <div>
                        <a href="#" className="s-link">Download AMC-Details Document</a>
                    </div>
                </Card>
                <div className="s-carousel">					
					<Carousel autoPlay={true}  interval={null}  controls={true} indicators={false}>
						{element.map((value, index) => {
								return(                            
								<Carousel.Item key={index}>	
								{/* <img className="d-block w-100 m-auto" src={value.image} alt="First slide" /> */}
								<span>					
									<img className="d-block w-100 m-auto" src={value.image} alt="First slide" />
										<Carousel.Caption>
											<h6>{value.caption}</h6>
										</Carousel.Caption>
								</span>
								</Carousel.Item>					  
								)
							})}
					</Carousel>
				</div>
            </div>
            )
    }
}
export default Services;