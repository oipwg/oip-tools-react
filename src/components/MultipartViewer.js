import React, { Component } from 'react';

class MultipartViewer extends Component {
	render(){
		if (!this.props.multipart)
			this.props.multipart = {};

		return(
			<div className="card" style={{marginTop:"20px"}}>
  				<div className="card-body">
				  <p>TXID: <code>{this.props.multipart.getTXID()}</code></p>
  						<div>FloData:
					<div className="alert alert-secondary" style={{wordBreak:"break-all"}} role="alert">
					  {this.props.multipart.toString()}
						</div>
					</div>
    				<p>Part Number: <code>{this.props.multipart.getPartNumber()}</code></p>
					<p>Total Multipart Length: <code>{this.props.multipart.getTotalParts()}</code></p>
					<p>Publisher Address: <code>{this.props.multipart.getPublisherAddress()}</code></p>
					<p>FirstTXIDRef: <code>{this.props.multipart.getFirstPartTXID()}</code></p>
					<p>Signature: <code>{this.props.multipart.getSignature()}</code></p>
					<p>PartData: <code style={{wordBreak:"break-all"}}> {this.props.multipart.getChoppedStringData()}</code></p>
  				</div>
			</div>
		)
	}
}

export default MultipartViewer;