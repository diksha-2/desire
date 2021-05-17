
// import React , {Componennt} from 'react';
// import './EditProperty.css';
// import { toast } from 'react-toastify';
// import {singleProperty, getProject , updateProperty } from '../../../actions/propertyAction';
// import { Component } from 'react';




// // /**
// // * @author
// // * @function EditProperty
// // **/

// class EditProperty extends Component {

//     constructor(props){
//         super(props);
//         this.state = {
//             projectList : [],
//             property: [],
//             errors : {}


//         }
//     }
//     getPrpertyDetail = () => {
//         let proId = this.props.match.params.proId;
//         console.warn(proId);
//         if (proId) {
//             singleProperty(proId, (response) => {
//                 if (response || response.status == "OK") {
//                     this.setState({ property: response.data})
//                 } else {
//                     toast.error("Something Went Wrong", {
//                         position: toast.POSITION.TOP_RIGHT
//                     });
//                 }
//             })
//         }
//     }
//     getProjectList= () => {
//         getProject((response) =>{
//           if (response || response.status == "OK") {
//             this.setState({ projectList: response.data });
           
//         } 
//         })
    
//       }


//       handleInputChange = (event)  => {
//         const {name , value} = event.target;
//         this.setState({ [name]: value }, () => {   
//       })
//       }
//       handleSubmit = (event) =>{
//         event.preventDefault();
//         this.submitData();
//       }

//       onSubmit = ()  =>{
//         let proId = this.props.match.params.proId;
//         // let {propertyName ,propertyNum , propertyType ,projectName ,propertyFor , property ,
//         //     propertyAddress ,configuration ,furnishing, availabilty ,propertyAge ,
//         //     area,expectedprice,propertyDesc }  = this.state;
//            this.property = this.state;
//             updateProperty( proId ,this.property, (response) => {
//                   if (response || response.status == "OK") {
//                     toast.success(response.message, {
//                     position: toast.POSITION.TOP_RIGHT
//                   });
//                   this.props.history.push("/adminHome");
//                 } else { 
//                     window.alert('error');
//                  // this.setAuthError(response.message);
//                 }
        
//                })


//       }
//     componentDidMount() {
//         this.getPrpertyDetail();
//        this.getProjectList();
//     }

 
//   render(){
//   return(
//     <div className="changefm-container col-md-6 col-lg-5 mx-auto">
//     <h4 className="h4">Edit Property</h4>
//     <form >
//         <div className="form-group">
//             <label>Property Name</label>
//             <input type="text" name="propertyName" value={this.property.propertyName} className={`form-control ${this.errors.propertyName? 'is-invalid' : ''}`} onChange={this.handleInputChange} />
//             <div className="invalid-feedback">{this.errors.propertyName?.message}</div>
//         </div>
//         <div className="form-group">
//             <label>Property Number</label>
//             <input type="text" name="propertyNum" value={this.property.propertyNum} className={`form-control ${this.errors.propertyNum ? 'is-invalid' : ''}`} onChange={this.handleInputChange} />
//             <div className="invalid-feedback">{this.errors.propertyNum?.message}</div>
//         </div>
//         <div className="form-group">
//             <label>Property Address</label>
//             <input type="text" name="propertyAddress" value={this.property.propertyAddress} className={`form-control ${this.errors.propertyAddress ? 'is-invalid' : ''}`} onChange={this.handleInputChange} />
//             <div className="invalid-feedback">{this.errors.propertyAddress?.message}</div>
//         </div>
//         <div className="form-group">
//             <label>Property Type</label>
//             <input type="text" name="propertyType" value={this.property.propertyType} className={`form-control ${this.errors.propertyType ? 'is-invalid' : ''}`} onChange={this.handleInputChange} />
//             <div className="invalid-feedback">{this.errors.propertyType?.message}</div>
//         </div> 
//         <div className="form-group">
//             <label>property Category</label>
//             <select type="select" multiple="true" name="projectName" className={`form-control ${this.errors.projectName ? 'is-invalid' : ''}`} onChange={this.handleInputChange} >
//                  {this.projectList.map(el => {
//                     return <option value={this.el.projectName}>{el.projectName}</option>
//                 })}

//             </select>
//             <div className="invalid-feedback">{this.errors.projectName?.message}</div>
//         </div>
        
//         <div className="form-group">
//             <label>Property</label>
//             <input type="text" name="property" value={this.property.property} className={`form-control ${this.errors.property ? 'is-invalid' : ''}`} onChange={this.handleInputChange} />
//             <div className="invalid-feedback">{this.errors.property?.message}</div>
//         </div>
//         <div className="form-group">
//             <label>Property For</label>
//             <input type="text" name="propertyFor" value={this.property.propertyFor} className={`form-control ${this.errors.propertyFor ? 'is-invalid' : ''}`} onChange={this.handleInputChange} />
//             <div className="invalid-feedback">{this.errors.propertyFor?.message}</div>
//         </div>
//         <div className="form-group">
//             <label>Property Configuration</label>
//             <input type="text" name="configuration" value={this.property.configuration} className={`form-control ${this.errors.configuration ? 'is-invalid' : ''}`} onChange={this.handleInputChange} />
//             <div className="invalid-feedback">{this.errors.configuration?.message}</div>
//         </div>
//         <div className="form-group">
//             <label>Property Area</label>
//             <input type="text" name="area" value={this.property.area} className={`form-control ${this.errors.area ? 'is-invalid' : ''}`} onChange={this.handleInputChange} />
//             <div className="invalid-feedback">{this.errors.area?.message}</div>
//         </div>
//         <div className="form-group">
//             <label>Property Furnishing</label>
//             <input type="text" name="furnishing" value={this.property.furnishing} className={`form-control ${this.errors.furnishing ? 'is-invalid' : ''}`} onChange={this.handleInputChange} />
//             <div className="invalid-feedback">{this.errors.furnishing?.message}</div>
//         </div>
//         <div className="form-group">
//             <label>Property Availabilty</label>
//             <input type="text" name="availabilty" value={this.property.availabilty} className={`form-control ${this.errors.availabilty ? 'is-invalid' : ''}`} onChange={this.handleInputChange} />
//             <div className="invalid-feedback">{this.errors.availabilty?.message}</div>
//         </div>
//         <div className="form-group">
//             <label>Property Age</label>
//             <input type="text" name="propertyAge" value={this.property.propertyAge} className={`form-control ${this.errors.propertyAge ? 'is-invalid' : ''}`} onChange={this.handleInputChange} />
//             <div className="invalid-feedback">{this.errors.propertyAge?.message}</div>
//         </div>
//         <div className="form-group">
//             <label> Expected Price</label>
//             <input type="text" name="expectedprice" value={this.property.expectedprice} className={`form-control ${this.errors.expectedprice ? 'is-invalid' : ''}`} onChange={this.handleInputChange} />
//             <div className="invalid-feedback">{this.errors.expectedprice?.message}</div>
//         </div>
//         <div className="form-group">
//             <label>Property Description</label>
//             <input type="text" name="propertyDesc" value={this.property.propertyDesc} className={`form-control ${this.errors.propertyDesc ? 'is-invalid' : ''}`} onChange={this.handleInputChange} />
//             <div className="invalid-feedback">{this.errors.propertyDesc?.message}</div>
//         </div>
//         <div className="btn-cont form-group">
//             <input type="submit" value="Update Property" onClick={this.onSubmit} />
//         </div>
//     </form>
// </div>
//    )
//             }
//  }

// export default EditProperty;






























import React , {Componennt} from 'react';
import './EditProperty.css';
import { toast } from 'react-toastify';
import {singleProperty, getProject , updateProperty } from '../../../actions/propertyAction';




/**
* @author
* @function EditProperty
**/

const EditProperty = (props) => {
    const [property, setProperty] = React.useState([]);
    const [projects, setProject] = React.useState([]);
    const errors = {}
    const handleInputChange = e => {
        const { name, value } = e.target;
        setProperty({ ...property, [name]: value })
    }


    const onSubmit = () => {
        let proID = props.match.params.proId;
        updateProperty(proID, property,(response) => {
            if (response || response.status == "OK") {
                toast.success(response.message, {
                    position: toast.POSITION.TOP_RIGHT
                });
                this.props.history.push("/new-property");
            } else {
                toast.error(response.message || response.msg, {
                    position: toast.POSITION.TOP_RIGHT
                });
            }
        })
    };






    React.useEffect(() => {
        singleProperty(props.match.params.proId, (response) => {
            if (response && response.status == "OK") {
                setProperty(response.data)
            }
        })
        getProject((response) => {
            if (response && response.status == "OK") {
                setProject(response.data)
            }
        })
    }, []);
  return(
    <div className="changefm-container col-md-6 col-lg-5 mx-auto">
    <h4 className="h4">Edit Property</h4>
    <form >
        <div className="form-group">
            <label>Property Name</label>
            <input type="text" name="propertyName" value={property.propertyName} className={`form-control ${errors.propertyName? 'is-invalid' : ''}`} onChange={handleInputChange} />
            <div className="invalid-feedback">{errors.propertyName?.message}</div>
        </div>
        <div className="form-group">
            <label>Property Number</label>
            <input type="text" name="propertyNum" value={property.propertyNum} className={`form-control ${errors.propertyNum ? 'is-invalid' : ''}`} onChange={handleInputChange} />
            <div className="invalid-feedback">{errors.propertyNum?.message}</div>
        </div>
        <div className="form-group">
            <label>Property Address</label>
            <input type="text" name="propertyAddress" value={property.propertyAddress} className={`form-control ${errors.propertyAddress ? 'is-invalid' : ''}`} onChange={handleInputChange} />
            <div className="invalid-feedback">{errors.propertyAddress?.message}</div>
        </div>
        <div className="form-group">
            <label>Property Type</label>
            <input type="text" name="propertyType" value={property.propertyType} className={`form-control ${errors.propertyType ? 'is-invalid' : ''}`} onChange={handleInputChange} />
            <div className="invalid-feedback">{errors.propertyType?.message}</div>
        </div> 
        <div className="form-group">
            <label>Project</label>
            <select type="select"  name="projectName" className={`form-control ${errors.projectName ? 'is-invalid' : ''}`} onChange={handleInputChange} >
            <option  selected disabled>Select Project</option>
                {projects.map(el => {
                    return <option value={el.projectName}>{el.projectName}</option>
                })}

            </select>
            <div className="invalid-feedback">{errors.projectName?.message}</div>
        </div>
        
        <div className="form-group">
            <label>Property</label>
            <input type="text" name="property" value={property.property} className={`form-control ${errors.property ? 'is-invalid' : ''}`} onChange={handleInputChange} />
            <div className="invalid-feedback">{errors.property?.message}</div>
        </div>
        <div className="form-group">
            <label>Property For</label>
            <input type="text" name="propertyFor" value={property.propertyFor} className={`form-control ${errors.propertyFor ? 'is-invalid' : ''}`} onChange={handleInputChange} />
            <div className="invalid-feedback">{errors.propertyFor?.message}</div>
        </div>
        <div className="form-group">
            <label>Property Configuration</label>
            <input type="text" name="configuration" value={property.configuration} className={`form-control ${errors.configuration ? 'is-invalid' : ''}`} onChange={handleInputChange} />
            <div className="invalid-feedback">{errors.configuration?.message}</div>
        </div>
        <div className="form-group">
            <label>Property Area</label>
            <input type="text" name="area" value={property.area} className={`form-control ${errors.area ? 'is-invalid' : ''}`} onChange={handleInputChange} />
            <div className="invalid-feedback">{errors.area?.message}</div>
        </div>
        <div className="form-group">
            <label>Property Furnishing</label>
            <input type="text" name="furnishing" value={property.furnishing} className={`form-control ${errors.furnishing ? 'is-invalid' : ''}`} onChange={handleInputChange} />
            <div className="invalid-feedback">{errors.furnishing?.message}</div>
        </div>
        <div className="form-group">
            <label>Property Availabilty</label>
            <input type="text" name="availabilty" value={property.availabilty} className={`form-control ${errors.availabilty ? 'is-invalid' : ''}`} onChange={handleInputChange} />
            <div className="invalid-feedback">{errors.availabilty?.message}</div>
        </div>
        <div className="form-group">
            <label>Property Age</label>
            <input type="text" name="propertyAge" value={property.propertyAge} className={`form-control ${errors.propertyAge ? 'is-invalid' : ''}`} onChange={handleInputChange} />
            <div className="invalid-feedback">{errors.propertyAge?.message}</div>
        </div>
        <div className="form-group">
            <label> Expected Price</label>
            <input type="text" name="expectedprice" value={property.expectedprice} className={`form-control ${errors.expectedprice ? 'is-invalid' : ''}`} onChange={handleInputChange} />
            <div className="invalid-feedback">{errors.expectedprice?.message}</div>
        </div>
        <div className="form-group">
            <label>Property Description</label>
            <input type="text" name="propertyDesc" value={property.propertyDesc} className={`form-control ${errors.propertyDesc ? 'is-invalid' : ''}`} onChange={handleInputChange} />
            <div className="invalid-feedback">{errors.propertyDesc?.message}</div>
        </div>
        <div className="btn-cont form-group">
            <input type="submit" value="Update Property" onClick={onSubmit} />
        </div>
    </form>
</div>
   )

 }

export default EditProperty;