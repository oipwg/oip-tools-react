import React, { Component } from 'react'

class ArtifactViewer extends Component {
	render(){
		return(
		<div className="card" style={{marginTop:"20px"}}>
  			<div className="card-body">
    					<p>Part Number: <code>$partNumber</code></p>
						<p>Total Multipart Length: <code>$multipartArrayLength</code></p>
					<div className="alert alert-secondary" role="alert">
							OIP-MP($partNumber, $multipartArrayLength, $PublisherAddress, $firstPartTXID, $Signature):choppedStringData
  					</div>
			</div>
		</div>
		)
	}
}

export default ArtifactViewer;