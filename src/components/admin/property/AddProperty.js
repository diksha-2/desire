import React , {Component} from 'react';
import {Input , Container } from 'reactstrap';
import {addProperty , getProject} from '../../../actions/propertyAction';
import { toast } from 'react-toastify';

/**
* @author
* @function AddProperty
**/

class AddProperty extends Component{

  constructor(props){
    super(props);
    this.state = {
      propertyName : "",
      propertyNum : "",
      propertyType : "",
    // projectName : "",
     projectList : [],
      propertyFor : "",
      property : "",
      propertyAddress : "",
      configuration : "",
      furnishing: "",
      availabilty : "",
      propertyAge : "",
      area : "",
      expectedprice : "",
      propertyDesc : "",
      propertyPicture: []
    }
  }

  handleChange = (event) =>{
 this.propertyPicture = event.target.files[0];
    const {name , value} = event.target;
    this.setState({ [name]: value }, () => {
     
  })
  }
  

  handleSubmit = (event) =>{
    event.preventDefault();
    this.submitData();
  }

  submitData = () => {
    // let {propertyName ,propertyNum ,propertyType , propertyFor }= this.state;
    
    let {propertyName ,propertyNum , propertyType ,projectName ,propertyFor , property ,
       propertyAddress ,configuration ,furnishing, availabilty ,propertyAge ,
       area,expectedprice,propertyDesc ,  propertyPicture}  = this.state;
  //   addProperty({propertyName ,propertyNum, propertyType , propertyFor},(response) => {
  //     if (response && response.status == "OK") {
  //       toast.success(response.message, {
  //       position: toast.POSITION.TOP_RIGHT
  //     });
  //     this.props.history.push("/adminHome");
  //   } else { 
  //       window.alert('error');
  //    // this.setAuthError(response.message);
  //   }
  // })
  
       addProperty({propertyName ,propertyNum , propertyType ,projectName ,propertyFor , property ,
        propertyAddress ,configuration ,furnishing, availabilty ,propertyAge ,
        area,expectedprice ,propertyDesc ,  propertyPicture}, (response) => {
          if (response && response.status == "OK") {
            toast.success(response.message, {
            position: toast.POSITION.TOP_RIGHT
          });
          this.props.history.push("/adminHome");
        } else { 
            window.alert('error');
         // this.setAuthError(response.message);
        }

       })


  }

  getProjectList= () => {
    getProject((response) =>{
      if (response || response.status == "OK") {
        this.setState({ projectList: response.data });
       
    } 
    })

  }

  componentDidMount() {
   this.getProjectList();
}

  render(){
    console.log(this.state);
  return(
  <>
   <form>
    <div class="form-row">
      <div class="form-group col-md-4">
        <label for="inputEmail4">Property Name</label>
        <input type="text" class="form-control" id="propertyName" name="propertyName"onChange={this.handleChange} placeholder="Enter Property Name"></input>
      </div>
      <div class="form-group col-md-4">
        <label for="inputPassword4">Property Number</label>
        <input type="text" class="form-control" id="propertyNum" name="propertyNum" onChange={this.handleChange} placeholder="Enter Property Number"></input>
      </div>
    </div>
    <div class="form-row">
    <div class="form-group col-md-4">
    <label for="inputState">Project Type</label>
    <Input className="form-control" type="select"  name="propertyType"  onChange={this.handleChange}>
<option  selected disabled> Select  Property Type </option>
<option>Residential</option>
<option>Commercial</option>
     </Input>
     </div> 

    
    <div class="form-group col-md-4" >
    <label for="inputState">Project Name</label>
    <Input className="form-control" type="select" name="projectName"  onChange={this.handleChange} >
    <option  selected disabled>Select </option>
                { this.state.projectList.map(el => {
                    return <option value={el.projectName}>{el.projectName}</option>
                })}
                </Input>
    
    </div>                                                                
    </div>
    <div class="form-row">
    <div class="form-group col-md-4">
    <label for="inputState">Property For</label>
    <Input className="form-control" type="select"  name="propertyFor"  onChange={this.handleChange} >
<option  selected disabled>Select </option>
<option>Rent</option>
<option>Sell</option>
     </Input>
    </div>
    <div class="form-group col-md-4" >
    <label for="inputState">Property Type</label>
    <Input className="form-control" type="select"  name="property" onChange={this.handleChange} >
<option  selected disabled>Select </option>
<option>Apartment</option>
<option>Builder Floor</option>
<option>House or Villa</option>
<option>Residential Land</option>
<option>Residential Land</option>
<option>Commercial Space</option>
     </Input>
    </div>
    </div>
    <div class="form-row">
    <div class="form-group col-md-4">
      <label for="inputAddress">Property Address</label>
      <input type="text" class="form-control" id="propertyAddress" name="propertyAddress" onChange={this.handleChange} placeholder="Enter Property Address"></input>
    </div>
    <div class="form-group col-md-4" >
    <label for="inputState">Property Configuration</label>
    <Input className="form-control" type="select"  name="configuration" onChange={this.handleChange} >
<option  selected disabled>Select Configuration </option>
<option>2 BHK</option>
<option>3 BHK</option>
<option>4 BHK</option>
<option>5 BHK</option>
     </Input>
    </div>
    </div>
    

    <div class="form-row">
    <div class="form-group col-md-4">
      <label for="inputAddress">Furnishing</label>
      <Input className="form-control" type="select"  name="furnishing" onChange={this.handleChange}>
<option  selected disabled>Select Furnishing </option>
<option>Fully furnished</option>
<option>Semifurnished</option>
<option>Unfurnished</option>
     </Input>
    </div>
    <div class="form-group col-md-4" >
      <label for="inputAddress2">Prperty Availabilty</label>
      <Input className="form-control" type="select"  name="availabilty" onChange={this.handleChange}>
<option  selected disabled>Select </option>
<option>Ready to Move</option>
<option>Under Construction</option>
     </Input>
    </div>
    </div>

    <div class="form-row">
    <div class="form-group col-md-2">
      <label for="inputAddress">Property Age</label>
      <input type="text" class="form-control" id="propertyAge" name="propertyAge" placeholder="Old Property" onChange={this.handleChange}></input>
    </div>
    <div class="form-group col-md-3" >
      <label for="inputAddress2">Property Area</label>
      <input type="text" class="form-control" id="area" name="area"  placeholder="Property Area" onChange={this.handleChange}></input>
    </div>
    <div class="form-group col-md-3" >
      <label for="inputAddress2">Expected Price</label>
    <input type="text" class="form-control" id="expectedprice" name="expectedprice" placeholder="" onChange={this.handleChange}></input>
    </div>
    </div>
    <div class="form-row">
    <div class="form-group col-md-8">
    <label for="inputAddress2">Property Description</label>
      <input type="text" class="form-control" id="propertyDesc" name="propertyDesc"  placeholder="Property Description" onChange={this.handleChange}></input>
    </div>
    </div>
    <div class="form-row">
    <div class="form-group col-md-8">
    <label for="inputAddress2">Property Images</label>
    <input type="file"   name="propertyPicture" onChange={this.handleChange}></input>
    </div>
    </div>
    <div class="form-row">
    <div class="form-group col-md-5">
       {/* { this.state.propertyPicture.map((pic ,i) => {
                    return <div key={i}> {pic}</div>
                })} */}
                 { this.state.propertyPicture.map(el  => {
                    return <div >{el}</div>
                })}
      
      </div></div>
   
    
    <button type="submit" class="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
  </form>
  </>
   
   )

 }
}

export default AddProperty