import React, { Component } from 'react';

class MultipartViewer extends Component {
	render(){
		return(
			<div className="card" style={{marginTop:"20px"}}>
  				<div className="card-body">
				  <p>TXID: <code>14c76824745fjfjgf553aatjkf5864</code></p>
  					<p>FloData:<div className="alert alert-secondary" role="alert">
						OIP-MP($partNumber, $multipartArrayLength, $PublisherAddress, $firstPartTXID, $Signature):choppedStringData
					</div></p>
    				<p>Part Number: <code>$partNumber</code></p>
					<p>Total Multipart Length: <code>$multipartArrayLength</code></p>
					<p>Publisher Address: <code>$publisherAddress</code></p>
					<p>FirstTXIDRef: <code>$firstPartTXID</code></p>
					<p>Signature: <code>$Signature</code></p>
					<p>PartData: <code>$choppedStringData</code></p>
  				</div>
			</div>
		)
	}
}

export default MultipartViewer;