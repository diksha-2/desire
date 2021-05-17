import React, {Component} from 'react';
import './NewPropertyDetails.css';
import {singleProperty ,deleteProperty, changeStatus} from '../../../actions/propertyAction';
import { toast } from 'react-toastify';
import {Input , Container } from 'reactstrap';

/**
* @author
* @function NewPropertyDetails
**/

class NewPropertyDetails extends Component{
    constructor(props) {
        super(props)
        this.state = {
            propertyDetail: [],
        }
    }
    getPrpertyDetail = () => {
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
        this.getPrpertyDetail();
    }

    deleteProperty = () =>{
        let proId = this.props.match.params.proId;
        if(proId){
             deleteProperty(proId ,(response) =>{
            if (response || response.status == "OK") {
              toast.success(response.message, {
              position: toast.POSITION.TOP_RIGHT
            } )  
            this.props.history.push("/adminHome");
        }
            
        else {
            toast.error("Something Went Wrong", {
                position: toast.POSITION.TOP_RIGHT})
            }
        });
        
    }
}
propertyToShow = () =>{
    let proId = this.props.match.params.proId;
    if(proId){
        changeStatus(proId ,(response) =>{
        if (response || response.status == "OK") {
          toast.success(response.message, {
          position: toast.POSITION.TOP_RIGHT
        } )  
        this.props.history.push("/new-property");
    }    
    else {
        toast.error("Something Went Wrong", {
            position: toast.POSITION.TOP_RIGHT})
        }
    });
    
}

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
                                   
                                    <div>
                                  
                                      
                                        <Container>
                <table className="table table-striped" style= {{ borderColor : 'black'}} >
                    
                    <tbody>
                    <tr>
                            <td>Property Name :</td>
                            <td>{this.state.propertyDetail.propertyName}</td>
                          
                        </tr>
                        <tr>
                            <td>Property Number :</td>
                            <td>{this.state.propertyDetail.propertyNum}</td>
                          
                        </tr>
                        <tr>
                            <td>Property Address :</td>
                            <td>{this.state.propertyDetail.propertyAddress}</td>
                          
                        </tr>
                        <tr>
                            <td>Property Type :</td>
                            <td>{this.state.propertyDetail.propertyType}</td>
                        </tr>
                        <tr>
                            <td>Project Name:</td>
                            <td>{this.state.propertyDetail.projectName}</td>
                        </tr>
                        <tr>
                            <td>Property For :</td>
                            <td>{this.state.propertyDetail.propertyFor}</td>
                        </tr>
                        <tr>
                            <td>Property :</td>
                            <td>{this.state.propertyDetail.property}</td>
                        </tr>
                        <tr>
                            <td>Property Configuration :</td>
                            <td>{this.state.propertyDetail.configuration}</td>
                        </tr>
                        <tr>
                            <td>Property Area:</td>
                            <td>{this.state.propertyDetail.area}</td>
                        </tr>
                        <tr>
                            <td>Property Furnishing:</td>
                            <td>{this.state.propertyDetail.furnishing}</td>
                        </tr>
                        <tr>
                            <td>Property Availabilty:</td>
                            <td>{this.state.propertyDetail.availabilty}</td>
                        </tr>
                        <tr>
                            <td>Property Age:</td>
                            <td>{this.state.propertyDetail.propertyAge}</td>
                        </tr>
                        <tr>
                            <td> Expected Price:</td>
                            <td className="text-warning"><del>&#2352;</del>{this.state.propertyDetail.expectedprice}</td>
                        </tr>
                        <tr>
                            <td>Property Description:</td>
                            <td>{this.state.propertyDetail.propertyDesc}</td>
                        </tr>
                  
                    </tbody>
                </table>
   </Container>
          </div>
                                    <div class="columns cartBtns mt-2">
                                        <div class="column col-5 col-md-6">
                                          
                                                <button className="bestseller" onClick={() => { this.props.history.push(`/edit-property/${this.state.propertyDetail._id}`) }}>Edit Property</button>
                                                <button className="bestseller" onClick={this.deleteProperty}>Delete Property</button>
                                                <button className="bestseller" onClick={this.propertyToShow} >Show Case</button>

                                                {/* onClick={() => { this.props.history.push(`/edit-course/${this.state.courseDetail._id}`) }} */}
                                            
                                        </div>
                                    </div>

                                </div>

                            </div>
                           
                        </div>
                    {/* ) */}
                {/* } */}
            </div>
</div></div>
</div>
   )
  }

 }

export default NewPropertyDetails