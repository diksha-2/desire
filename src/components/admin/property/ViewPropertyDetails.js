import React, {Component} from 'react';
import './NewPropertyDetails.css';
import {singleProperty} from '../../../actions/propertyAction';
import { toast } from 'react-toastify';

/**
* @author
* @function NewPropertyDetails
**/

class ViewPropertyDetails extends Component{
    constructor(props) {
        super(props)
        this.state = {
            propertyDetail: [],
        }
    }
    getCourseDetail = () => {
        let proId = this.props.match.params.proId;
        console.warn(proId);
        if (proId) {
            singleProperty(proId, (response) => {
                if (response || response.status == "OK") {
                    this.setState({ propertyDetail: response.data})
                } else {
                    toast.error("Something Went Wrong", {
                        position: toast.POSITION.TOP_RIGHT
                    });
                }
            })
        }
    }
    componentDidMount() {
        this.getCourseDetail();
    }



    render(){
  return(
    <div className="column">
    <div className="main-container m-auto">
        <div className=" row">
            <div className="column col-sm-9 col-md-9 col-lg-9">
                <hr />
                {/* {this.state.courseDetail && */}
                    
                        <div className="row">
                            <div className="column col-sm-5  position-relative" style={{ overflow: 'hidden' }}>
                                <div id="main" className="">
                                    <img style={{ "width": "380px", "height": "220px" }} className="b-rounded b-shadow card-img-top" src=""></img>
                                </div>
                            </div>
                            <div className="column col-sm-7 position-relative" style={{ overflow: 'hidden' }}>


                                <div class="column relative courseMeta">
                                    <h2 class="title mt-0 mb-0">
                                        <span itemprop="name">{this.state.propertyDetail.propertyName}</span></h2>
                                    <div>
                                     Property Name : <h6>{this.state.propertyDetail.propertyNum}</h6>
                                        <h6>{this.state.propertyDetail.propertyAddress}</h6>
                                        <h6>{this.state.propertyDetail.propertyType}</h6>
                                        <h6>{this.state.propertyDetail.propertyFor}</h6>
                                        
                                       

                                        <p><strong>LIFETIME ACCESS</strong></p>
                                    </div>
                                    <p class="ml-0 mb-0 text-primary"><i class="material-icons icon-text">layers</i> 4 Courses</p>
                                    <p class="ml-0 mb-0 language"><small>Language:  <span class="text-primary">Hindi</span></small></p>


                                    <div class="mt-2">
                                        <div class="productPricing">
                                            <div class="v1-20000-1450 p1 vvpricing">
                                                <span style={{ 'text-decoration': 'line-through' }}> <i class="fab fa-inr" aria-hidden="true"></i> <del> 2000</del></span> &nbsp;
                                                        92% OFF

                                                            <br />
                                                <h2 class="text-warning"> <del>&#2352;</del>this.state.courseDetail.price </h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="columns cartBtns mt-2">
                                        <div class="column col-5 col-md-6">
                                          
                                                <button className="bestseller" >Edit Property</button>
                                                <button className="bestseller" >Delete Property</button>
                                                <button className="bestseller" >Show Case</button>

                                                {/* onClick={() => { this.props.history.push(`/edit-course/${this.state.courseDetail._id}`) }} */}
                                            
                                        </div>
                                    </div>

                                </div>

                            </div>
                           
                        </div>
                    )
                {/* } */}
            </div>
</div></div>
</div>
   )
  }

 }

export default ViewPropertyDetails