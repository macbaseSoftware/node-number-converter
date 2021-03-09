import React from 'react';
import { BrowserRouter, Switch, Route, Link} from "react-router-dom";
import Home from './pages/Home';
import WebEditor from './pages/Webeditor';
import FileUpload from './pages/Fileupload';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

    return (
      	 <BrowserRouter>
	        <Switch>
	            <Route path='/'  exact component={Home} />
	            <Route path='/fileupload' exact  component={FileUpload} />
	            <Route path='/webeditor' exact  component={WebEditor} />
	            
	            </Switch>
	      </BrowserRouter>
    );
  }


export default App;
