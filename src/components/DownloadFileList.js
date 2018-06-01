import React, { Component } from 'react';
import File from '../assets/imgs/file.svg';
import Zip from '../assets/imgs/file-archive.svg';
import Image from '../assets/imgs/file-image.svg';
import Video from '../assets/imgs/file-video.svg';
import Pdf from '../assets/imgs/file-pdf.svg';
import Code from '../assets/imgs/file-code.svg';
import Audio from '../assets/imgs/file-code.svg';
import Text from '../assets/imgs/file-alt.svg';
import { ArtifactFile } from 'oip-js';


class DownloadFileList extends Component {
    constructor(props){
        super(props);
    }
    render(){
      console.log(this.props)
      var file;

      if (this.props.file){
        file = this.props.file;
      } else {
			  file = new ArtifactFile();
		  }
      return(
        <tr>
          <th scope="row">
            <div className="form-check">
              <input className="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option1" aria-label="..."/>
            </div>
            </th>
            <td><img width="30" height="30" src={Video}/></td>
            <td>{file.getFilename()}</td>
            <td>{file.getType()}</td>
            <td>{file.getFilesize()}</td>
          </tr>
        )
    }
} 

export default DownloadFileList;