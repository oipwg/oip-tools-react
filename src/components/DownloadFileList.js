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
import filesize from 'filesize';


class DownloadFileList extends Component {
    constructor(props){
        super(props);

        this.getExtension = this.getExtension.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }
    getExtension(filename){
      let splitFilename = filename.split(".");
      let indexToGrab = splitFilename.length - 1;
  
      return splitFilename[indexToGrab];
    }
    onInputChange(event){
      // Connect me to the Input
      // value is stored most likely at e.target.value
      var selected = event.target.checked;

      console.log("Checked: " + selected);

      var ind = this.props.fileIndex;

      this.props.onFileSelectChange(selected, ind)
    }
    render(){
      // console.log(this.props)
      var file;

      if (this.props.file){
        file = this.props.file;
      } else {
			  file = new ArtifactFile();
      }
      
      var extension = this.getExtension(file.getFilename());
      // console.log(extension)

      var fileImage;

      if (extension === "mp4" || extension === "flv")
        fileImage = Video;
      else 
        fileImage = File;

        if (extension === "jpg" || extension === "png")
          fileImage = Image;
        else
          fileImage = File;
      

      return(
        <tr>
          <th scope="row">
            <div className="form-check">
              <input onClick={this.onInputChange} className="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option1" aria-label="..."/>
            </div>
            </th>
            <td><img width="30" height="30" src={fileImage}/></td>
            <td>{file.getFilename()}</td>
            <td>{file.getType()}</td>
            <td>{filesize(file.getFilesize())} </td>
          </tr>
        )
    }
} 

export default DownloadFileList;