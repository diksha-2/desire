import React, {Component} from 'react';
import { toast } from 'react-toastify';
import './NewProperty.css';
import {getProperty} from '../../../actions/propertyAction';
import { Link } from "react-router-dom";


/**
* @author
* @function NewProperty
**/
class  NewProperty  extends Component {
  constructor(props){
    super(props);
    this.state = {
      properties : []
    }
  }
  getProperties = ()  => {
    getProperty((response) => {
      if (response || response.status == "OK") {
          this.setState({properties : response.data });
          toast.success(response.message, {
              position: toast.POSITION.TOP_RIGHT
          });
      } else {
          toast.error("Something Went Wrong", {
              position: toast.POSITION.TOP_RIGHT
          });
      }
  });

  }

  componentDidMount() {
    this.getProperties();
}


  render(){
  return(
    <div className="service-view">
                <section id="service-list" >
                    <div className="container-fluid">
                        <div className="container-fluid row p-3 m-auto">
                            {this.state.properties && this.state.properties.map((item, index) => {
                                let propertyLink = `/new-property/detail/${item._id}` 
                                 {
                                return (
                                
                                    < Link to={propertyLink} >
                                        <div className="px-2 py-4 m-auto" >
                                            <div className="col-lg-12 p-0 col-md-12 col-sm-12 mb-4 mb-lg-0" >
                                                <div className="b-shadow bg-white b-rounded">

                                                    <div id="main">
                                                        <img style={{ "width": "300px", "height": "200px" }} className="card-img-top" src={item.propertyImages[0]}></img>
                                                    </div>
                                                    <div id="textbois" className="p-3">
                                                        <h6 className="">{item.propertyName}</h6>
                                                        <h6 className="text-info font-weight-normal">{item.propertyDesc}</h6>
                                                        <a class="text-warning"> <del>&#2352;</del>{item.expectedprice} </a>
                                                        {/* <a href="mailto:limecicila@gmail.com">1200$</a> */}
                                                        <ul className="social mb-0 list-inline mt-3">
                                                            <li className="list-inline-item m-0"><a href="#" className="social-link"><i className="fab fa-facebook-f"></i></a></li>
                                                            <li className="list-inline-item m-0"><a href="#" className="social-link"><i className="fab fa-instagram"></i></a></li>
                                                            <li className="list-inline-item m-0"><a href="#" className="social-link"><i className="fab fa-linkedin"></i></a></li>
                                                        </ul>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        </Link>
                                        
                                )} })
                           
                                }
                     
                                       
                      </div>
                      
                    </div >
                </section >
            </div >
   )
  }

 }

export default NewProperty