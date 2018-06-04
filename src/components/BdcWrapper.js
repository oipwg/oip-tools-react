import React, { Component } from 'react';

import BulkDownloadContainer from './BulkDownloadContainer.js'
import Loader from './Loader.js';

class BdcWrapper extends Component {
    constructor(props) {
        super(props);

        this.state = {
            artID: "51ebca",
            artifact: undefined
        }

        this.updateArtifactText = this.updateArtifactText.bind(this);
        this.getArtifactFromID = this.getArtifactFromID.bind(this);
    }
    updateArtifactText(event){
        console.log(event.target.value)
        this.setState({
            artID: event.target.value
        })
    }
    componentDidMount(){
        this.getArtifactFromID("51ebca");
    }
    getArtifactFromID(artID){
        var self = this;

        this.props.Core.Index.getArtifactFromID(artID, function(art){
            self.setState({
                artifact: art
            })
        }, function(err){
            console.error(err)
        })
    }
    render() 
    { 
        return (
            <div>
                <Loader artifact={this.state.artifact} />
                <br/>
                <BulkDownloadContainer artifact={this.state.artifact} />
            </div>
        )
    }
}

 
export default BdcWrapper;