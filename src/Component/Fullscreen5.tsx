import React, { Component } from 'react'
import '../Style/Fullscreen5.css'
import {Link} from "react-router-dom";

export class Fullscreen5 extends Component {
    render() {
        return (
            <div className="fullscreen5">
                <div className="os">
                    <h1>Portfolio</h1>
                    <ul className="list-unstyled list">
                        <li className="list-item"><Link to='/'>Home / </Link></li>
                        <li className="list-item">  Portfolio</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Fullscreen5
