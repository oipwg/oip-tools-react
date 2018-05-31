import React, { Component } from 'react';
import File from '../assets/imgs/file.svg';
import Zip from '../assets/imgs/file-archive.svg';
import Image from '../assets/imgs/file-image.svg';
import Video from '../assets/imgs/file-video.svg';
import Pdf from '../assets/imgs/file-pdf.svg';
import Code from '../assets/imgs/file-code.svg';
import Audio from '../assets/imgs/file-code.svg';
import Text from '../assets/imgs/file-alt.svg';


class DownloadFileList extends Component {
    constructor(props){
        super(props);
    }
    render(){
        console.log(this.state)
    return(
    <div className="container">
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
    <tr>
      <th scope="row"><div className="form-check">
        <input className="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option1" aria-label="..."/>
        </div>
        </th>
        <td><img width="30" height="30" src={Video}/></td>
      <td>keymov_rr2014-10-17-24.mp4</td>
      <td>Key Movie</td>
      <td>11.68 MB</td>
    </tr>
    <tr>
      <th scope="row"><div className="form-check">
        <input className="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option1" aria-label="..."/>
        </div>
        </th>
        <td><img width="30" height="30" src={File}/></td>
      <td>nmar20024_part121_17.rec</td>
      <td>Reconstruction</td>
      <td>445.44 MB</td>
    </tr>
    <tr>
      <th scope="row"><div className="form-check">
        <input className="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option1" aria-label="..."/>
        </div>
        </th>
        <td><img width="30" height="30" src={File}/></td>
      <td>nmar20024.mrc</td>
      <td>Tilt series</td>
      <td>3.45 GB </td>
    </tr>
  </tbody>
</table>
    </div>



        )
    }
} 

export default DownloadFileList;