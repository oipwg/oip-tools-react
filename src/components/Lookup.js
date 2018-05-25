import React, { Component } from 'react'

import ArtifactViewer from './ArtifactViewer.js'
import MultipartViewer from './MultipartViewer.js'

class Lookup extends Component {
	render(){
		return(
		<div className="container">
			<h1>Artifact Lookup</h1>
			<div className="input-group mb-3">
  			<input type="text" className="form-control" placeholder="Txid" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
  			<div className="input-group-append">
    			<button className="btn btn-outline-secondary" type="button">Lookup</button>
  			</div>
			  </div>
		
				
				<MultipartViewer />
				<MultipartViewer />
				<MultipartViewer />
				<ArtifactViewer />
			
			
		</div>
		)
	}
}

export default Lookup;