import React, { Component } from 'react'
import '../Style/Prices.css'
import { Container, Row, Col ,Button} from 'reactstrap';


export class Prices extends Component {
render() {
return (
    <div className="Prices text-center">
        <Container>
            <h1>SERVICE & OPTIMAL PRICE</h1>
            <p className="para text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
            <Row>
                <Col>
                    <div className="son son1 text-center">
                       <div className="colo">
                            <div className="circl">
                                <h2>$99</h2>
                                <p>1 hour</p>
                            </div>
                            
                                <h3>BASIC</h3>
                        </div>
                        <hr/>
                        <div className="detai text-muted">
                            <p>up to 30 photos</p>
                            <p>no retouched photos</p>
                            <p>no make-up</p>
                            <p>no stylist assistance</p>
                        </div>
                        <Button color="secondary" size="lg" block>Block level button</Button>

                    </div>
                </Col>
                <Col>
                    <div className="son son2 text-center">
                       <div className="colo">
                            <div className="circl">
                                <h2>$99</h2>
                                <p>1 hour</p>
                            </div>
                            
                                <h3>BASIC</h3>
                        </div>
                        <hr/>
                        <div className="detai text-muted">
                            <p>up to 30 photos</p>
                            <p>no retouched photos</p>
                            <p>no make-up</p>
                            <p>no stylist assistance</p>
                        </div>
                        <Button color="secondary" size="lg" block>Block level button</Button>

                    </div>
                </Col>
                <Col>
                    <div className="son son3 text-center">
                       <div className="colo">
                            <div className="circl">
                                <h2>$99</h2>
                                <p>1 hour</p>
                            </div>
                            
                                <h3>BASIC</h3>
                        </div>
                        <hr/>
                        <div className="detai text-muted">
                            <p>up to 30 photos</p>
                            <p>no retouched photos</p>
                            <p>no make-up</p>
                            <p>no stylist assistance</p>
                        </div>
                        <Button color="secondary" size="lg" block>Block level button</Button>

                    </div>
                </Col>
            </Row>
        </Container>
    </div>
)
}
}

export default Prices
