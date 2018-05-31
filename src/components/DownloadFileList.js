import React, { Component } from 'react';
import File from '../assets/imgs/File.svg';
import Folder from '../assets/imgs/Folder.svg';
import Image from '../assets/imgs/Image.svg';
import Video from '../assets/imgs/Video.svg';


class DownloadFileList extends Component {
    constructor(props){
        super(props);
    }
    render(){
        console.log(this.state)
    return(
    <div className="container">
       <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
    </div>



        )
    }
} 

export default DownloadFileList;