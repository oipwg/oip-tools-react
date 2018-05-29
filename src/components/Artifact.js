import React, { Component } from 'react'

import ArtifactViewer from './ArtifactViewer.js';

class Artifact extends Component {
	constructor(props){
		super(props);
	
			this.state = {
				multiparts: [],
				artifact: undefined
			}
	
			this.updateSearchText = this.updateSearchText.bind(this)
		}
		componentDidMount(){
		}
		updateSearchText(event){
			console.log(event.target.value)
			this.setState({
				searchText: event.target.value
			})
		}
		render(){
			console.log(this.state)
		return(
			<div>
				<h1 className="text-center">Artifact Inspector</h1>
				<textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
				<h3 className="text-center" style={{marginTop:"20px"}}>Artifact Viewer</h3>
				<ArtifactViewer artifactString={this.state.artifactText} />
			</div>
		)
	}
}

export default Artifact;