import React, { Component } from 'react'

import MultipartViewer from './MultipartViewer.js'

class Multipart extends Component {
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
			<h1>Multipart Inspector</h1>
			<div className="form-group">
    			<label htmlFor="exampleFormControlTextarea1"></label>
    			<textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>	
  			</div>
			<h3 className="text-center" style={{marginTop:"20px"}}>Multipart</h3>
			<MultipartViewer multipartString={this.state.multipartString} />
		</div>
		)
	}
}

export default Multipart;