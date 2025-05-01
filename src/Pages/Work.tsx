import React, { Component } from 'react'
import Fullscreen3 from '../Workfiles/Fullscreen3'
import Cvinformat from '../Workfiles/Cvinformat'
import Prices from '../Workfiles/Prices'
import Gallary from '../Workfiles/Gallary'
import Agents from '../Workfiles/Agents'
import River from '../Workfiles/River'


export class Work extends Component {
    render() {
        return (
            <div>
               <Fullscreen3/>
               <Cvinformat/>
               <Prices/>
               <Gallary/>
                <Agents />
                <River/>
            </div>
        )
    }
}

export default Work
/*    background-color: rgba(31,43,123,0.8);
*/