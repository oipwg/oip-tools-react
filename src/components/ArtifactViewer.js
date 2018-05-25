import React, { Component } from 'react'

class ArtifactViewer extends Component {
	render(){
		var displayJSONString = "", txid;

		if (this.props.artifact){
			displayJSONString = JSON.stringify(this.props.artifact.toJSON(), undefined, 4)
			txid = this.props.artifact.getTXID()
		}

		return(
			<div className="card" style={{marginTop:"20px"}}>
  				<div className="card-body" style={{whiteSpace:"pre"}}>
				    <p>TXID:<code>{txid}</code></p>
					<div className="alert alert-secondary" role="alert">
						{displayJSONString}
  					</div>
				</div>
			</div>
		)
	}
}

export default ArtifactViewer;