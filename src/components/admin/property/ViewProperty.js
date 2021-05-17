import React from 'react'; 
import {getPropertytoShow} from '../../../actions/propertyAction';
import { toast } from 'react-toastify';

import {Button } from 'react-bootstrap';
import { Component } from 'react';

/**
* @author
* @function ViewProperty
**/

class ViewProperty extends Component {
    constructor(props){
      super(props);
      this.state = {
        properties : []
      }
    }
    getProperties = ()  => {
      getPropertytoShow((response) => {
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
                            {/* {this.state.courses.items && this.state.courses.items.map((item, index) => {
                                let courseLink = `/course/detail/${item._id}` */}
                                 {this.state.properties.map((item, i) => {
                                return (
                                
                                    
                                        <div className="px-2 py-4 m-auto" >
                                            <div className="col-lg-12 p-0 col-md-12 col-sm-12 mb-4 mb-lg-0" >
                                                <div className="b-shadow bg-white b-rounded">

                                                    <div id="main">
                                                        <img style={{ "width": "300px", "height": "200px" }} className="card-img-top" src=""></img>
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
                                   
                                )})
                           
                                }
                     
                                       
                      </div>
                      
                    </div >
                </section >
            </div >
   )

 }
}

export default ViewProperty




// import React, { Component } from 'react';
// import {jumbotron} from 'react-bootstrap';
// import {Input , Container } from 'reactstrap';
// import { register } from '../../actions/authAction';
// import {addProject , getProject} from '../../actions/propertyAction';
// import { toast } from 'react-toastify';

// const list = [] ;


// export default class ViewProperty extends Component {
//   constructor(props) {
//     super(props);
 
//     this.state = {
//       list
//     };
//   }



// getProjectList  = () =>{
//   getProject((response)  => {
//     if (response || response.status == "OK") {
      
//       this.setState({ list : response.data });
//       console.warn(list);
//   } else {
//       toast.error("Something Went Wrong", {
//           position: toast.POSITION.TOP_RIGHT
//       });
//   }
//   })
// }


// componentDidMount() {
//    this.getProjectList();
//    //this.setState({ todos: response.data });
//   }

//   ProList() {
  
//    return this.state.list.map((currentProject, i) => {
//         return <ProjectGet project={currentProject} key={i} />;
//   })
// }



//     render(){
//         console.log(this.state);
//   return(
//     <>

//    <Container>
//    <h3 style={{ textAlign: 'center'}}>Project List</h3>
//                 <table className="table table-striped"  >
//                     <thead>
//                         <tr>
//                             <th>Project Type</th>
//                             <th>Project Name</th>
                          
//                         </tr>
//                     </thead>
//                     <tbody>
//                     { this.ProList() }
                        
//                     </tbody>
//                 </table>
//    </Container>
 
//    </>
    
//    )
//   }

  
//  }

//  const ProjectGet = props => (
//   <tr>
//       <td>{props.project.projectName}</td>
//       <td>{props.project.projectType}</td>
//       <td>
//           {/* <Link to={"/delete/"+props.project._id}>Delete</Link> */}
//       </td>
//   </tr>
// )



