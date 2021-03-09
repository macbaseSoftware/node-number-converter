import React, {useState} from 'react';
import Header from './components/header';
import Footer from './components/footer';
import {Container, Progress, Form, FormGroup, Label, Input, FormText} from "reactstrap";


const Fileupload = () =>{
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

export default Fileupload;