import React, { Component } from 'react'
import {
  Route,
  Switch
} from 'react-router-dom'
import ReactDOM from 'react-dom';

import Lookup from './Lookup.js';
import Artifact from './Artifact.js';
import Multipart from './Multipart.js';
import Header from './Header';

class AppRoutes extends Component {
	render(){
		return(
			<div>
				<Header/>
				<Switch>
					<Route path="/artifact" render={props => <Artifact Core={this.props.Core} {...props} />} />
					<Route path="/multipart" render={props => <Multipart Core={this.props.Core} {...props} />} />
					<Route render={props => <Lookup Core={this.props.Core} {...props} />} />
				</Switch>
			
			</div>
		)
	}
}

export default AppRoutes;
