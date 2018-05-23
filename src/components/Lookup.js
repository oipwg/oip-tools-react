import React, { Component } from 'react'

import ArtifactViewer from './ArtifactViewer.js'
import MultipartViewer from './MultipartViewer.js'

class Lookup extends Component {
	render(){
		return(
			<div>
				<MultipartViewer />
				<MultipartViewer />
				<MultipartViewer />
				<ArtifactViewer />
			</div>
		)
	}
}

export default Lookup;