import React, { Component } from 'react';
import Folder from '../assets/imgs/folder-open.svg';
import DownloadFileList from './DownloadFileList';
import { Artifact } from 'oip-js';

class BulkDownloadContainer extends Component {
    constructor(props){
        super(props);
    }
    render(){
        console.log(this.props.artifact)
        var art;

        if (this.props.artifact){
            art = this.props.artifact;
        } else {
			art = new Artifact();
		}
    
    
        return(
            <div class="card">
                <div class="card-header">
                        <p className="OpenFolder"><img width="30" height="30" src={Folder} style={{marginRight:"10px"}}/>{art.getTitle()}</p>
                        <p className="ArtDownloadAmount">{art.getFiles().length} files 3.94 GB in Artifact</p>
                        <p className="ArtSelectDownload">Selected: 3.94 GB</p>
                </div>
                <div class="card-body">
                    <h5 class="card-title"></h5>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col" style= {{maxWidth:"10px"}}></th>
                                <th scope="col">Filename</th>
                                <th scope="col">Type</th>
                                <th scope="col">Size</th>
                            </tr>
                        </thead>
                        <tbody> 	
                        {
	                        art.getFiles().map(function(file, i){
		                        return <DownloadFileList key={i} file={file} />
				            })
			            }
                        </tbody>
                    </table>
                </div>
                <div class="card-footer">Download to: 
                    <div class="input-group">
                        <div class="custom-file">
                            <input type="file" class="custom-file-input" id="inputGroupFile04"/>
                            <label class="custom-file-label" for="inputGroupFile04">Choose file</label>
                        </div>
                        <div class="input-group-append">
                            <button class="btn btn-outline-secondary" type="button">Start Download</button>
                        </div>
                    </div>
                </div>
                å</div>
    )
    }
}

export default BulkDownloadContainer;