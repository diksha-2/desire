import Register from '../src/components/auth/Register';
import Contact from './views/contact/contact';
import Login from './views/login/login';
import Services from './views/services/services';
import Home from './views/home/home';
import { Switch, Route, Redirect } from "react-router-dom";
import Project from './views/project/project';


const Routes = ()  => {
    return(<>
        <Switch>
	    		<Route exact path="/" component={ Home }/>
	    		<Route  exact path="/contact" component={ Contact }/>
	    		<Route  exact path="/login" component={Login}/>
	    		<Route  exact path="/services" component={Services}/>
	    		<Route exact path="/project" component={Project}/>
                <Route exact path="/register" component={Register}/>
               
		    </Switch>
            </>
    )

}



export default Routes ;
