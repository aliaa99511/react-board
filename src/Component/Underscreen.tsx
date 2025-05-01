import React, { Component } from 'react'
import '../Style/Underscreen.css'
import { Container, Row, Col,Button } from 'reactstrap';


export class Underscreen extends Component {
render() {
return (
<div>
    <Container>
        <div className="under">
            <Row>
                <Col>
                    <div className="item">
                        <img src="images/place-4.jpg"/>
                        <div className="bodyy">
                            <h4>Map Direction</h4>
                            <p className="text-muted">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                            <Button color="info">READ MORE</Button>{' '}
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className="item">
                        <img src="images/bg_1.jpg"/>
                        <div className="bodyy">
                            <h4>Accomodation Services</h4>
                            <p className="text-muted">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                            <Button color="info">READ MORE</Button>{' '}
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className="item">
                        <img src="images/tower 3.jpg"/>
                        <div className="bodyy">
                            <h4>Great Experience</h4>
                            <p className="text-muted">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                            <Button color="info">READ MORE</Button>{' '}
                        </div>
                    </div>
                </Col>
            </Row>

        </div>
    </Container>
</div>
)
}
}

export default Underscreen
