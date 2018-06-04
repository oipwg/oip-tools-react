import React, { Component } from "react";
import Folder from "../assets/imgs/folder-open.svg";
import Pause from "../assets/imgs/pause-circle.svg";
import Play from "../assets/imgs/play-circle.svg";
import Settings from "../assets/imgs/cog.svg";
import Up from "../assets/imgs/arrow-up.svg";
import Down from "../assets/imgs/arrow-down.svg";
import { Artifact } from "oip-js";

class Loader extends Component {
    constructor(props) {
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
        
  
    
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col" />
                            <th scope="col" />
                            <th scope="col" />
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row" className="OpenFolder">
                                <img
                                    width="50"
                                    height="50"
                                    src={Folder}
                                    style={{ marginRight: "10px" }}/>
                            </th>
                            
                            <td>
                                <div>
                                    {art.getTitle()}
                                </div>
                                <div>
                                    249.6 MB of 3.94 GB (6.19%)
                                    <div class="progress">
                                        <div
                                            class="progress-bar"
                                            role="progressbar"
                                            style={{ width: "6.19%" }}
                                            aria-valuenow="6.19"
                                            aria-valuemin="0"
                                            aria-valuemax="100">
                                            6.19%
                                        </div>
                                    </div>
                                </div>
                                <div className="float-right">
                                    DL from 3 nodes, UL to 0 nodes (Down
                                    1.25MB/s Up 0.00KB/s)
                                </div>
                            </td>
                            <td className="Pause">
                                <img width="30" height="30" src={Pause} />
                                <img
                                    width="30"
                                    height="30"
                                    src={Settings}
                                    style={{ marginLeft: "0px" }}
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br />
                <div className="ActiveNode">
                    <div class="card">
                        <div class="card-body">
                            <h4 style={{ marginLeft: "20px" }}>
                                Connected 8 nodes, DL from 7 nodes
                            </h4>
                            <p className="Pause" style={{}}>
                            <img className="float-right"  style={{ marginRight: "5px" }}width="30"height="30"src={Pause} /></p>

                            <p className="Upload" style={{}}>
                            <img  style={{ marginRight: "5px" }}width="30"height="30"src={Up}/>0.00KB/S</p>


                            <p className="Download" style={{}}>
                            <img style={{ marginRight: "5px" }}width="30"height="30"src={Down}/>2.67MB/S</p>
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Loader;
