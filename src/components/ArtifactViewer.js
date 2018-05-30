import React, { Component } from 'react';
import { Artifact } from 'oip-js';

class ArtifactViewer extends Component {
	render(){
		var art;

		if (this.props.artifact){
			art = this.props.artifact;
		} else if (this.props.artifactString) {
			var tmpArt = new Artifact();
			tmpArt.fromJSON(JSON.parse(this.props.artifactString))
			art = tmpArt;


			
		} else {
			art = new Artifact();
		}

		return(
			<div className="card" style={{marginTop:"20px"}}>
  				<div className="card-body" style={{whiteSpace:"pre"}}>
				    <p>TXID: <code>{art.getTXID()}</code></p>
					<div className="alert alert-secondary" role="alert">
						{JSON.stringify(art.toJSON(), undefined, 4)}
  					</div>
				</div>
			</div>
		)
	}
}

export default ArtifactViewer;