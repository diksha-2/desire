import React from 'react';
import './project.css';
import { Carousel } from 'react-bootstrap';
import logo from '../../assets/img/logo32.png';
import {getByResidential, getByCommercial} from '../../../src/actions/propertyAction';
import {Input , Container } from 'reactstrap';
import { Link } from "react-router-dom";


class Project extends React.Component{
constructor(props){
	super(props);
	this.state = {
		projectlist : [] ,
		commerciallist : []
	}
}

getProjectList = () => {
	getByResidential( (response) => {
		if (response || response.status == "OK") {
			this.setState({ projectlist: response.data });
		
		
		}
	})
}
getCommericalList = () => {
	getByCommercial( (response) => {
		if (response || response.status == "OK") {
			this.setState({ commerciallist: response.data });
		
		
		}
	})
}

componentDidMount() {
	this.getProjectList();
	this.getCommericalList();
 }

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
            <div>
            	<div className="container text-center">
				    <div className="b-title">
				    	<h1>Project</h1>
				    </div>				   
				    <div className="b-subtitle">
				    	<h4>Best Developers in Noida to explore select category</h4>
				    	{/* <button className="b-btn btn btn-dark mr-3">RESIDENTIAL</button>
				        <button className="b-btn btn btn-dark" type="reset">COMMERCIAL</button> */}
						<Input className="b-btn btn btn-dark mr-5" type="select" name="projectName" > 
						<option  selected disabled>RESIDENTIAL</option> 
                { this.state.projectlist.map(el => {
					
                    return <option value={el.projectName}>{el.projectName}</option>
                })}
                </Input>
				<Input className="b-btn btn btn-dark mr-5" type="select" name="projectName" > 
						<option  selected disabled>COMMERCIAL</option> 
                { this.state.commerciallist.map(el => {
					
                    return <option value={el.projectName}>{el.projectName} <Link to={"/view-property/" + el.projectName}></Link></option>
                })}
                </Input>
				
				    </div>
				</div>

				<div className="dropdown-menu">
                                    {this.state.commerciallist.map(el => {
                                        return <a className="dropdown-item" href="javascript:void(0);" onClick={() => { this.filterCourse(el._id) }}>{el.projectName}</a>
                                    })}
                                </div>
				<div className="b-carousel">					
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
export default Project;