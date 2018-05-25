import React, { Component } from 'react'

import ArtifactViewer from './ArtifactViewer.js'
import MultipartViewer from './MultipartViewer.js'

class Lookup extends Component {
	render(){
		return(
		<div className="container">
			<h1 className="text-center">OIP Artifact Explorer</h1>
			<div className="input-group row">
			<label for="ArtifactLookup" class="col-form-label" style={{marginRight:"10px"}}>Artifact ID:</label>
  				<input type="text" className="form-control" placeholder="" aria-label="ArtifactLookup" aria-describedby="basic-addon2"/>
  				<div className="input-group-append">
    				<button className="btn btn-outline-secondary" type="button">Lookup</button>
			
  				</div>
			</div>

			<hr />
		
			<h3 className="text-center">Multiparts</h3>
			<MultipartViewer />
			<MultipartViewer />
			<MultipartViewer />
			<h3 className="text-center" style={{marginTop:"20px"}}>Artifact</h3>
			<ArtifactViewer />
			

			
		</div>
		)
	}
}

export default Lookup;