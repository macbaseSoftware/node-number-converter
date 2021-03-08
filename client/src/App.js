import React, { Component, useEffect, useState } from 'react';
import Calculations from './components/calculations';
import Header from './components/header';
import Footer from './components/footer';
import logo from './logo.svg';
import {useDropzone} from 'react-dropzone'
import './App.css';
import {Container, Progress, Form, FormGroup, Label, Input, FormText} from "reactstrap";

/*Text converter... Upload a text file with words and the pogram will convert it to binary*/
const UploadSection = () =>{
	const [isCalculating, setIsCalculating] = useState(false);
	return (
		<Form>
			<FormGroup>
				<Label for="exampleFile">Upload your .txt file</Label>
				<Input type="file" name="file" id="exampleFile" />
				
			</FormGroup>

		</Form>
	)
}

const App = () => {

    return (
    	<div>
      		<Container className="App">
	      	<Header></Header>
	      	<UploadSection></UploadSection>

       		
      		</Container>
      		<Footer></Footer>
      	</div>
    );
  }


export default App;
