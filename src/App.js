import './App.css';
import { Container } from 'react-bootstrap';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './Routes';

function App() {
  return (
    <div>
		<Router>
  		<Header />
	   <Routes />
    	<Footer />
		</Router>
	</div>


  );
}

export default App;


