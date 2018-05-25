import React, { Component } from 'react'

import { Artifact } from 'oip-js';

import ArtifactViewer from './ArtifactViewer.js'
import MultipartViewer from './MultipartViewer.js'

class Lookup extends Component {
	constructor(props){
		super(props);

		this.state = {
			multiparts: [],
			artifact: ""
		}

		this.getMultiparts = this.getMultiparts.bind(this)
		this.updateSearchText = this.updateSearchText.bind(this)
	}
	componentDidMount(){
		this.getMultiparts("c6fb83c");
	}
	getMultiparts(searchTXID){
		var self = this;

		this.props.Core.Index.getMultipartsForArtifact(searchTXID, function(mps){
			var art = new Artifact();

			art.fromMultiparts(mps);

			self.setState({
				multiparts: mps,
				artifact: art
			})
		}, function(err){
			console.error(err)
		})
	}
	updateSearchText(event){
		console.log(event.target.value)
		this.setState({
			searchText: event.target.value
		})
	}
	render(){
		console.log(this.state);
		return(
		<div className="container">
			<h1 className="text-center">OIP Artifact Explorer</h1>
			<div className="input-group row">
			<label htmlFor="ArtifactLookup" className="col-form-label" style={{marginRight:"10px"}}>Artifact ID:</label>
  				<input onChange={this.updateSearchText} type="text" className="form-control"/>
  				<div className="input-group-append">
    				<button onClick={ (event) => this.getMultiparts(this.state.searchText)}>
					Lookup
					</button>
					
			
  				</div>
			</div>

			<hr />
		
			<h3 className="text-center">Multiparts</h3>
			{
				this.state.multiparts.map(function(mp, i){
					return <MultipartViewer key={i} multipart={mp} />
				})
			}
			<h3 className="text-center" style={{marginTop:"20px"}}>Artifact</h3>
			{this.state.artifact ? <ArtifactViewer artifact={this.state.artifact} /> : ""}
			

			
		</div>
		)
	}
}

export default Lookup;