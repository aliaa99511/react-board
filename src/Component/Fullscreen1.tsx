import React, { Component } from 'react'
import '../Style/Fullscreen1.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import { Button } from 'reactstrap';



export class Fullscreen1 extends Component {
render() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay:true,
        slidesToShow: 1,
        slidesToScroll: 1,
 
        };
        
    return (
        <div className="Fullscreen1">
            <Slider {...settings}>

                <div>
                   <img src="images/banner2.png" className="img-fluid" />
                   <div className="lefft">
                        <h1>Boost up your skills with a new way of learning</h1>
                        <Button color="info">Get start</Button>{' '}
                        <Button outline color="secondary">Take a tour</Button>{' '}
                   </div>
                </div>

                <div>
                <img src="images/banner.png" className="img-fluid" />
                <div className="lefft">
                    <h1>Boost up your skills with a new way of learning</h1>
                    <Button color="info">Get start</Button>{' '}
                    <Button outline color="secondary">Take a tour</Button>{' '}
                   </div>
                </div>
                
            </Slider>
        </div>
    )
}
}

/*class="img-fluid"*/
export default Fullscreen1


/*          <Slider {...settings}>
                <img src="images/banner2.png" />
                <div className="lefft">
                    <h1>Boost up your skills with a new way of learning</h1>
                    <Button color="info">Get start</Button>{' '}
                    <Button outline color="info">Take a tour</Button>{' '}
                </div>
                <img src="images/banner.png" />
                <div className="lefft">
                    <h1>Boost up your skills with a new way of learning</h1>
                    <Button color="info">Get start</Button>{' '}
                    <Button outline color="info">Take a tour</Button>{' '}
                </div>
        </Slider>*/