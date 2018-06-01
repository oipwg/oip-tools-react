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
import DownloadFileList from './DownloadFileList.js';
import BdcWrapper from './BdcWrapper.js';
import Loader from './Loader.js';

class AppRoutes extends Component {
	render(){
		return(
			<div>
				<Header/>
				<br />
				<Switch>
					<Route path="/artifact" render={props => <Artifact Core={this.props.Core} {...props} />} />
					<Route path="/multipart" render={props => <Multipart Core={this.props.Core} {...props} />} />
					<Route path="/DownloadFileList" render={props => <DownloadFileList Core={this.props.Core}{...props} />} />
					<Route path="/Bulk" render={props => <BdcWrapper Core={this.props.Core}{...props} />} />
					<Route path="/load" render={props => <Loader Core={this.props.Core}{...props} />} />
					<Route render={props => <Lookup Core={this.props.Core} {...props} />} />
					
				</Switch>
			
			</div>
		)
	}
}

export default AppRoutes;
