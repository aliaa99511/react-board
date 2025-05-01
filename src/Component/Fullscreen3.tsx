import React, { Component } from 'react'
import '../Style/Fullscreen3.css'
import {Link} from "react-router-dom";

export class Fullscreen3 extends Component {
    render() {
        return (
        
            <div className="fullscreen3">
                <div className="os">
                    <h1>Work</h1>
                    <ul className="list-unstyled list">
                        <li className="list-item"><Link to='/'>Home / </Link></li>
                        <li className="list-item">  Work</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Fullscreen3
