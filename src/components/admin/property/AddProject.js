import React , {Component} from 'react'
import {jumbotron ,Button} from 'react-bootstrap';
import {Input , Container } from 'reactstrap';
import {addProject , getProject ,deleteProject} from '../../../actions/propertyAction';
import { toast } from 'react-toastify';


const ProjectGet = props => (
  <tr>
      <td>{props.project.projectName}</td>
      <td>{props.project.projectType}</td>
      <td>
          {/* <Link to={"/delete/"+props.project._id}>Delete</Link> */}
          <button type="button" class="btn btn-dark" onClick={delPro.bind(this, props.project._id)} >Delete</button>
      </td>
      {/* onClick={delPro(props.project._id)} */}
  </tr>
)
const delPro = (pID) => {
  let response = deleteProject(pID);
  if (response || response.status == "OK") {
    toast.success(response.message, {
    position: toast.POSITION.TOP_RIGHT
  })

}
else { 
  window.alert('error');
}
  
}
// return  console.log('id is' +id);




class AddProject extends Component{
        constructor(props) {
        super(props);
        this.state = {
          projectlist : [],
            projectName : "",
            projectType : "",
            errorParam: {
                projectName : false,
                projectType : false,
            },
           
        }
    }
     delPro = (id) => {
      console.warn(id);
    
    };
    
handleChange = (e) => {
    const { name, value } = e.target;
    let errorParam = { ...this.state.errorParam };
    if (value == '') {
        errorParam[name] = true;
    } else {
        errorParam[name] = false;
    }
    this.setState({ [name]: value }, () => {
        this.setState({ errorParam : errorParam })
    })
}
handleSubmit = (event) => {
    event.preventDefault();
    if (!this.validateData()) {
        this.submitData();
    } else {
        this.setAuthError("Please Provide Correct Info.");
    }
}

submitData = () => {
        let { projectName ,projectType} = this.state;
        addProject({ projectName ,projectType }, (response) => {
          if (response && response.status == "OK") {
              toast.success(response.message, {
              position: toast.POSITION.TOP_RIGHT
            });
            this.props.history.push("/adminHome");
          } else { 
              window.alert('error');
            this.setAuthError(response.message);
          }
        });
      }

validateData = (e) =>{
    let errorParam = { ...this.state.errorParam }
    let flag = false;
    let proData = this.state;
    for (const key in proData) {
        if (proData[key] == '') {
            errorParam[key] = true;
            flag = true;
        }
    }
    this.setState({ errorParam: errorParam })
    return flag;

}
setAuthError(message) {
    this.setState({ authError: message })
}





// 
// handleChange = (e) =>{
    
//     // const {name ,  value} = e.target;
//     // let userInfo = this.state
//     //   userInfo[name] = value;
//     // this.setState(userInfo, ()=>{

//     // });
//     const { name, value } = e.target;
//     this.setState({ [name]: value }, () => {
       
//     })
//   }
//   submitData = () => {
//     let { projectName ,projectType} = this.state;
//     addProject({ projectName ,projectType }, (response) => {
//       if (response && response.status == "OK") {
//           toast.success(response.message, {
//           position: toast.POSITION.TOP_RIGHT
//         });
//         this.props.history.push("/add-property");
//       } else { 
//           window.alert('error');
//         //this.setAuthError(response.message);
//       }
//     });
//   } 

getProjectList  = () =>{
  getProject((response)  => {
    if (response || response.status == "OK") {
      //console.warn(response);
      this.setState({ projectlist : response.data });
  } else {
      toast.error("Something Went Wrong", {
          position: toast.POSITION.TOP_RIGHT
      });
  }
  })
}


componentDidMount() {
   this.getProjectList();
   //this.setState({ todos: response.data });
  }

  ProList() {

    return this.state.projectlist.map(function(currentProject, i){
        return <ProjectGet project={currentProject} key={i} />;
   })
}



    render(){
        console.log(this.state);
  return(
    <>
   
    <form className="jumbotron">
     <div className="form-row">
       <div className="form-group col-md-4">
         <label for="inputEmail4">Project Name</label>
         <input type="text" className="form-control" id="projectName" name="projectName" onChange={this.handleChange} placeholder="Project Name"></input>
         <span style={{ "color": "red", "position":"absolute" }} className="errorMsg ml-2">{this.state.errorParam['projectName'] ? "Project Name is required" : ""}</span>
         
       </div>
     </div>
     
    
     <div className="form-row">
      
       <div className="form-group col-md-4">
         <label for="inputState">Project Type</label>
         <Input className="form-control" type="select"  name="projectType"  onChange={this.handleChange} >
<option  selected disabled>Please select your Property Type </option>
<option>Residential</option>
<option>Commercial</option>
     </Input>
     <span style={{ "color": "red", "position":"absolute" }} className="errorMsg ml-2">{this.state.errorParam['projectType'] ? "Project Type  is required" : ""}</span>
     
         {/* <select id="inputState" className="form-control">
           <option selected>Choose...</option>
           <option>Residential</option>
           <option>Commercial</option>
         </select> */}
       </div>
       
     </div>
    
     <button type="submit" className="btn btn-primary"  onClick={this.handleSubmit}>Submit</button>
   </form>
   <br></br>
   <br></br>
   <br></br>

   <Container>
   <h3 style={{ textAlign: 'center'}}>Project List</h3>
                <table className="table table-striped"  >
                    <thead>
                        <tr>
                            <th>Project Type</th>
                            <th>Project Name</th>
                          
                        </tr>
                    </thead>
                    <tbody>
                    { this.ProList() }
                    </tbody>
                </table>
   </Container>
 
   </>
    
   )
  }

 }

export default AddProject