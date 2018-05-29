import React, { Component } from 'react'

import ArtifactViewer from './ArtifactViewer.js';

class Artifact extends Component {
	render(){
		return(
		<div>
			<h1>Artifact Inspector</h1>
			<div class="form-group">
    		<label for="exampleFormControlTextarea1"></label>
    		<textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  			</div>
			<button onClick={ (event) => this.getMultiparts(this.state.searchText)}>
			Submit
			</button>
			
				<ArtifactViewer />
				
				<h3 className="text-center" style={{marginTop:"20px"}}>Artifact</h3>
			{this.state.artifact ? <ArtifactViewer artifact={this.state.artifact} /> : ""}
			
		</div>
				)
	}
}

export default Artifact;