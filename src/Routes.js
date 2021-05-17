import Register from '../src/components/auth/Register';
import Contact from './views/contact/contact';
import Login from './views/login/login';
import Services from './views/services/services';
import Home from './views/home/home';
import { Switch, Route, Redirect } from "react-router-dom";
import Project from './views/project/project';
import AdminDashboard from './components/admin/AdminDashboard';
import AddProject from './components/admin/property/AddProject';
import AddProperty from './components/admin/property/AddProperty';
import ViewProperty from './components/admin/property/ViewProperty';
import AmcEnquiry from './components/admin/Enquiries/AmcEnquiry';
import ContactEnquiry from './components/admin/Enquiries/ContactEnquiry';
import ProjectEnquiry from './components/admin/Enquiries/ProjectEnquiry';
import NewProperty from './components/admin/property/NewProperty';
import NewPropertyDetails from './components/admin/property/NewPropertyDetails';
import EditProperty from './components/admin/property/EditProperty';
   

const Routes = ()  => {
    return(<>
        <Switch>
	    		<Route exact path="/" component={ Home }/>
	    		<Route  exact path="/contact" component={ Contact }/>
	    		<Route  exact path="/login" component={Login}/>
	    		<Route  exact path="/services" component={Services}/>
	    		<Route exact path="/project" component={Project}/>
                <Route exact path="/register" component={Register}/>
				<Route exact path="/adminHome" component={AdminDashboard}/>
				<Route exact path="/add-project"  component={AddProject} />
				<Route exact path="/add-property"  component={AddProperty} />
				<Route exact path="/new-property"  component={NewProperty} />
				<Route exact path="/amc-enquiry"  component={AmcEnquiry} />
				<Route exact path="/contact-enquiry"  component={ContactEnquiry} />
				<Route exact path="/project-enquiry"  component={ProjectEnquiry} />
				<Route exact path="/view-property"  component={ViewProperty} />
				<Route exact path="/new-property/detail/:proId" component={NewPropertyDetails}/>
				<Route exact path="/edit-property/:proId" component= {EditProperty} />

				
				
               
		    </Switch>
            </>
    )

}



export default Routes ;
