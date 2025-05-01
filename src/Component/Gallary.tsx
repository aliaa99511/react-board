import React, { Component } from 'react'
import '../Style/Gallary.css'
import { Container, Row, Col ,Button} from 'reactstrap';


export class Gallary extends Component {
render() {
    return (
        <div className="Gallary">
            <Container>
                <Row>
                    <Col>
                        <div className="photo1">
                            <img src="images/instagram1.png" className="img1"/>
                            <img src="images/instagram6.png" className="img2"/>
                        </div>
                    </Col>
                    <Col>
                        <div className="photo2">
                            <img src="images/slide_thumb_1.png" className="img3"/>
                        </div>
                    </Col>
                    <Col>
                        <div className="photo3">
                            <img src="images/gallery3.jpg" className="img4"/>
                            <img src="images/cat-post-1.jpg" className="img5"/>
                        </div>
                    </Col>
                    <Col>
                        <div className="photo4">
                            <img src="images/card-2.png" className="img6"/>
                            <img src="images/blog-4.jpg" className="img7"/>
                        </div>
                    </Col>
                    <Col>
                        <div className="photo5">
                            <img src="images/post-img2.jpg" className="img8"/>
                        </div>
                    </Col>
                    <Col>
                        <div className="photo6">
                            <img src="images/about2.png" className="img9"/>
                            <img src="images/instagram6.png" className="img10"/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
}

export default Gallary
