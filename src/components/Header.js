import React, { Component } from 'react';
import Artifact from './Artifact';
import ArtifactViewer from './ArtifactViewer';

class Header extends Component {
	render(){
		return(
		<div className="Head"> 
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
  			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    				<span className="navbar-toggler-icon"></span>
  			</button>
  			<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    		<div className="navbar-nav">
      				<a className="nav-item nav-link active" href="/">OIP Artifact Explorer<span className="sr-only">(current)</span></a>
      				<a className="nav-item nav-link" href="/multipart">Multipart Inspector</a>
      				<a className="nav-item nav-link" href="/artifact">Artifact Inspector</a>
    		</div>
  			</div>
			</nav>
		</div>
		)
	}
}

export default Header;