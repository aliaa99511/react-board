import React, { Component } from 'react'
import '../Style/Fullscreen6.css'
import {Link} from "react-router-dom";

export class Fullscreen6 extends Component {
    render() {
        return (
        
            <div className="fullscreen6">
                <div className="os">
                    <h1>Contact</h1>
                    <ul className="list-unstyled list">
                        <li className="list-item"><Link to='/'>Home / </Link></li>
                        <li className="list-item">  Contact</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Fullscreen6
