import React from "react";
import {Container} from "reactstrap";
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";


 
const Footer = () =>{
		
	return(
		 <nav class="navbar fixed-bottom navbar-expand-sm navbar-dark bg-dark">
	      <Container>
	      	<Router>
	      		<Link to="https://github.com/heavy-text-converter"> <p style={{color: "white"}}>VIEW SOURCE CODE</p></Link>
	      	</Router>
	      	
	      </Container>
	    </nav>
	)
}

export default Footer;