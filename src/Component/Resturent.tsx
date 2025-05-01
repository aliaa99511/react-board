import React, { Component } from 'react'
import '../Style/Resturent.css'
import { Button } from 'reactstrap';


export class Resturent extends Component {
render() {
return (
    <div className="Resturent">
        <div className="mleft">
            <img src="images/dining-img.png"/>
            <div className="shadw">
                <h6>OUR RESTURENT</h6>
                <h5>Dining & Drinks</h5>
                <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
                <Button outline color="warning">
                    <span>Learn more</span>
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                </Button>{' '}
            </div>
        </div>
    </div>
)
}
}

export default Resturent
