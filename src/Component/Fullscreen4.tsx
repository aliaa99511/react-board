import React, { Component } from 'react'
import '../Style/Fullscreen4.css'
import {Link} from "react-router-dom";

export class Fullscreen4 extends Component {
    render() {
        return (
            <div className="fullscreen4">
                <div className="os">
                    <h1>Blog</h1>
                    <ul className="list-unstyled list">
                        <li className="list-item"><Link to='/'>Home / </Link></li>
                        <li className="list-item">  Blog</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Fullscreen4
