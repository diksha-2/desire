import './App.css';
import { Container } from 'react-bootstrap';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Contact from './views/contact/contact';
import Login from './views/login/login';
import Services from './views/services/services';
import Home from './views/home/home';
import Project from './views/project/project';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
  		<Header />
  		<Project />
	    <Router>
		    <Switch>
	    		<Router path="/" component={ Home }/>
	    		<Router path="/contact" component={ Contact }/>
	    		<Router path="/login" component={Login}/>
	    		<Router path="/services" component={Services}/>
	    		<Router path="/project" component={Project}/>
		    </Switch>
    	</Router>
    	<Footer />
	</div>


  );
}

export default App;