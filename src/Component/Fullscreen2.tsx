import React, { Component } from 'react'
import '../Style/Fullscreen2.css'
import {Link} from "react-router-dom";


export class Fullscreen2 extends Component {
    render() {
        return (
        
            <div className="fullscreen2">
                <div className="os">
                    <h1>About</h1>
                    <ul className="list-unstyled list">
                        <li className="list-item"><Link to='/'>Home / </Link></li>
                        <li className="list-item">  About</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Fullscreen2
/*
import React, { Component } from 'react'
import '../Style/FullScreen2.css'
import {Link} from "react-router-dom";



export class FullScreen2 extends Component {
    render() {
        return (
        
            <div className="fullscreen2">
                <div className="sson">
                    <div className="os">
                        <h1>About</h1>
                        <ul className="list-unstyled list">
                            <li className="list-item"><Link to='/'>Home / </Link></li>
                            <li className="list-item">  About</li>
                        </ul>
                    </div>
                </div>
            </div>

        )
    }
}

export default FullScreen2
/*<li className="list-item"><Link to='/About'>About</Link></li>*/


/*
.fullscreen2{
    background-image: url("/images/full2.jpg");
    background-size: cover;
    width: 100%;
    height: 300px;
    background-repeat: no-repeat;
}
.sson{
    background-color: rgba(0,0,0,0.7);
    width: 100%;
    height: 503px;  
}
.fullscreen2 .os {
    color: white;
    position: absolute;
    top: 201px;
    left: 673px;
}
.fullscreen2 .list {display: flex;margin-left: 10px;}

.fullscreen2 .list li:first-child a{color: white;}

.fullscreen2 .list li:first-child a:hover{text-decoration: none;}

.fullscreen2 .list li:last-child {color: gainsboro;}*/