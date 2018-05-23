import React, { Component } from 'react'
import {
  Route,
  Switch
} from 'react-router-dom'
import ReactDOM from 'react-dom';

import Lookup from './Lookup.js';
import Artifact from './Artifact.js';
import Multipart from './Multipart.js';

class AppRoutes extends Component {
	render(){
		return(
			<Switch>
				<Route path="/artifact" render={props => <Artifact Core={this.props.Core} {...props} />} />
				<Route path="/multipart" render={props => <Multipart Core={this.props.Core} {...props} />} />
				<Route render={props => <Lookup Core={this.props.Core} {...props} />} />
			</Switch>
		)
	}
}

export default AppRoutes;
