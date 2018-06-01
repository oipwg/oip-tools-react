import React, { Component } from 'react';
import { Multipart } from 'oip-js';

class MultipartViewer extends Component {
	render(){
		var mp;

		if (!this.props.multipart){
			if (this.props.multipartString) {
				var tmpMp = new Multipart();
				tmpMp.fromString(this.props.multipartString)
				mp = tmpMp;
			} else {
				mp = new Multipart();
			}
		} else {
			mp = this.props.multipart;
		}
		
		return(
			<div className="card" style={{marginTop:"20px"}}>
  				<div className="card-body">
				  <p>TXID: <code>{mp.getTXID()}</code></p>
  						<div>FloData:
					<div className="alert alert-secondary" style={{wordBreak:"break-all"}} role="alert">
					  {mp.toString()}
						</div>
					</div>
    				<p>Part Number: <code>{mp.getPartNumber()}</code></p>
					<p>Total Multipart Length: <code>{mp.getTotalParts()}</code></p>
					<p>Publisher Address: <code>{mp.getPublisherAddress()}</code></p>
					<p>FirstTXIDRef: <code>{mp.getFirstPartTXID()}</code></p>
					<p>Signature: <code>{mp.getSignature()}</code></p>
					<p>PartData: <code style={{wordBreak:"break-all"}}> {mp.getChoppedStringData()}</code></p>
  				</div>
			</div>
		)
	}
}

export default MultipartViewer;