import React, { Component } from 'react';
import Folder from '../assets/imgs/folder-open.svg'
import Pause from '../assets/imgs/pause-circle.svg'
import Play from '../assets/imgs/play-circle.svg'
import Settings from '../assets/imgs/cog.svg'


class Loader extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return( 
        <div>
            <table className="table">
            <thead>
                <tr>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row"className="OpenFolder"><img width="max" height="max" src={Folder} style={{margin:"50px"}}/></th>
                <td>
                    <div>
                        <h2>Nitrosopumilus maritimus</h2>
                        </div>
                        <div>
                            249.6 MB of 3.94 GB (6.19%)
                            <div class="progress">
                                    <div class="progress-bar" role="progressbar" style={{width:"6.19%"}} aria-valuenow="6.19" aria-valuemin="0" aria-valuemax="100">6.19%</div>
                            </div>
                                </div>
                            <div className="float-right">
                                DL from 3 nodes, UL to 0 nodes (Down 1.25MB/s Up 0.00KB/s)
                                </div>

                </td>
                <td className="Pause"><img width="30" height="30" src={Pause}/><img width="30" height="30" src={Settings} style={{marginLeft:"10px"}}/></td>
                </tr>
                <tr>
                <th scope="row"className="OpenFolder"><img width="max" height="max" src={Folder} style={{margin:"50px"}}/></th>
                <td> 
                    <div>
                        <h2>FtsZ ring on both sides</h2>
                        </div>
                        <div>
                            504.21 MB of 3.95 GB (12.47%)
                            <div class="progress">
                                    <div class="progress-bar" role="progressbar" style={{width:"12.47%"}} aria-valuenow="12.47" aria-valuemin="0" aria-valuemax="100">12.47%</div>
                            </div>
                                </div>
                            <div className="float-right">
                                DL from 4 nodes, UL to 0 nodes (Down 1.42MB/s Up 0.00KB/s)
                                </div>
                            </td>
                            <td className="Pause"><img width="30" height="30" src={Pause}/><img width="30" height="30" src={Settings} style={{marginLeft:"10px"}}/></td>
                </tr>
                <tr>
                <th scope="row"className="OpenFolder"><img width="max" height="max" src={Folder} style={{margin:"50px"}}/></th>
                <td> 
                    <div>
                        <h2>Methanospirillum hungatei</h2>
                        </div>
                        <div>
                            5.24 GB of 11.19 GB (46.9%) Paused
                            <div class="progress">
                                    <div class="progress-bar" role="progressbar" style={{width:"46.9%"}} aria-valuenow="46.9" aria-valuemin="0" aria-valuemax="100">46.9%%</div>
                            </div>
                                </div>
                            <div className="float-right">
                                DL from 0 nodes, UL to 0 nodes (Down 0.00MB/s Up 0.00KB/s)
                                </div>
                            </td>
                            <td className="Play"><img width="30" height="30" src={Play}/><img width="30" height="30" src={Settings} style={{marginLeft:"10px"}}/></td>
                </tr>
            </tbody>
            </table>
        </div> 
        
        )
    }
}
 
export default Loader;