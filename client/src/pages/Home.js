import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import {Link} from "react-router-dom";
import {Container, Card, CardTitle, CardBody, CardText, Col, Row} from "reactstrap";
import './Home.css';
// import styles from '../App.scss';

const Home = ()=>{

	return (
		<div className="mainDiv AppLight">
			<Header></Header>

			<Container >
			  <Row >
			   
			    <div class="col-sm text-center">
			      <Card className="" style={{width:'100%'}}>
			      	<CardTitle>File Upload</CardTitle>
			      	<CardBody>
			      		<CardText>Upload a large file and have it converted</CardText>
			      	</CardBody>
			      </Card>
			    </div>

			    <div class="col-sm">
			      <Card className="" style={{width:'100%'}}>
			      	<CardTitle>Text Editor</CardTitle>
			      	<CardBody>
			      		<CardText>Type Binary/Text on this website and have it converted</CardText>
			      	</CardBody>
			      </Card>
			    </div>
			  </Row>
			</Container>
			<Footer></Footer>
		</div>
	)
}

export default Home;