import { Button } from 'reactstrap';
import '../Style/HomeFullScreen.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const HomeFullScreen = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
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

export default HomeFullScreen
