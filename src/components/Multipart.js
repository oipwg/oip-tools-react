import React, { Component } from 'react'

import MultipartViewer from './MultipartViewer.js'

class Multipart extends Component {
constructor(props){
	super(props);

		this.state = {
			mpText: ""
		}

		this.updateMultipartText = this.updateMultipartText.bind(this)
	}
	updateMultipartText(event){
		console.log(event.target.value)
		this.setState({
			mpText: event.target.value
		})
	}
	render()
	{
		return(
		<div>
			<h1 className="text-center">Multipart Inspector</h1>
    		<textarea onChange={this.updateMultipartText} className="form-control" id="searchtext" type="text" rows="4"></textarea>
			<h3 className="text-center" style={{marginTop:"20px"}}>Multipart Viewer</h3>
			{
				this.state.mpText !== "" ? <MultipartViewer multipartString={this.state.mpText}  /> : ""
			}

		</div>
		)
	}
}

export default Multipart;