import React from 'react';
import {Navbar,Nav , NavDropdown, Container} from 'react-bootstrap';
import {NavLink , Link} from 'react-router-dom';

/**
* @author
* @function AdminDashboard
**/

const AdminDashboard = (props) => {
  return(
    <div >
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            {/* <Navbar.Brand href="#home">Admin-Dashboard</Navbar.Brand> */}
      <Link to="/" className="navbar-brand">Admin Dashboard</Link>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    
    
      <li  className="nav-item">
      <NavLink to="/add-property" className="nav-link">Add Property</NavLink> </li>
      <li  className="nav-item">
      <NavLink to="/view-property"className="nav-link">View Property</NavLink></li>
      <li  className="nav-item">
      <NavLink to = "/new-property" className="nav-link">New Property</NavLink></li>
      <li  className="nav-item">
      <NavLink to = "/add-project" className="nav-link">Add Project</NavLink></li>
      <NavDropdown title="View Enquires" id="collasible-nav-dropdown">
        <NavDropdown.Item to="/contact-enquiry">Contact Us</NavDropdown.Item>
        <NavDropdown.Item to="/project-enquiry">Project Enquiry</NavDropdown.Item>
        <NavDropdown.Item to="/amc-enquiry">Amc Enquiry</NavDropdown.Item>
        <NavDropdown.Divider />
      </NavDropdown> 
    </Nav>
    <Nav>
      <li  className="nav-item">
      <NavLink to="/" className="nav-link" >SignIn</NavLink>
      </li>
      <li  className="nav-item">
      <NavLink to="/"  className="nav-link">SignUp</NavLink>
      </li>
    
      {/* <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link> */}
    </Nav>
  </Navbar.Collapse>
            </Container>

</Navbar>
    </div>
   )

 }

export default AdminDashboard
