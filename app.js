import React, { Component } from 'react'
import {
  BrowserRouter
} from 'react-router-dom'
import ReactDOM from 'react-dom';

import AppRoutes from './src/components/AppRoutes.js';

import './src/assets/css/bootstrap.min.css'

import { OIPJS } from 'oip-js';

var Core = OIPJS();

class App extends Component {
	render(){
		return(
			<BrowserRouter>
				<AppRoutes Core={Core} />
			</BrowserRouter>
		)
	}
}

ReactDOM.render(<App/>, document.getElementById('main'));

export default App;
