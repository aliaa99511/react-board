import React, { Component } from 'react'
import '../Style/Mobiles.css'
import { Container, Row, Col,Button } from 'reactstrap';


export class Mobiles extends Component {
render() {
    return (
        <div className="Mobiles">
            <Container>
                <Row>
                    <Col>
                        <div className="iitem iitem1">
                            <img src="images/special.png"/>
                       </div>
                    </Col>
                    <Col>
                        <div className="iitem iitem2">
                            <h1>Our Best Propositions for You!</h1>
                            <p className="text-muted mytex">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                            <div className="bott">
                                <Button outline color="danger">
                                    <div className="flexx">
                                      <i class="fa fa-android" aria-hidden="true"></i>
                                      <div className="vvv">
                                        <p>available on</p>
                                        <p>Google Store</p>
                                      </div>
                                    </div>
                                </Button>
                                <Button outline color="danger">
                                    <div className="flexx">
                                    <i class="fa fa-apple" aria-hidden="true"></i>                                      <div className="vvv">
                                        <p>available on</p>
                                        <p>Play Store</p>
                                      </div>
                                    </div>
                                </Button>

                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
}

export default Mobiles
/*<i class="fa fa-apple" aria-hidden="true"></i>
*/