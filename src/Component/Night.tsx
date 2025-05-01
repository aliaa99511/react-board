import React, { Component } from 'react'
import '../Style/Night.css'
import { Container, Row, Col,Button,Media } from 'reactstrap';


export class Night extends Component {
render() {
    return (
        <div className="Night">
            <Container>
                <h3>WHY CHOOSE US</h3>
                <p className="tex">Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <div className="cont cont1">
                    <Row>
                        <Col>
                            <div>
                                <Media>
                                    <Media left href="#">
                                        <Media object src="images/chooseus-icon-1.png" className="img" />
                                    </Media>
                                    <Media body>
                                        <Media heading className="head">Find your future home</Media>
                                        We help you find a new home by offering a smart real estate.
                                    </Media>
                                </Media>
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <Media>
                                    <Media left href="#">
                                        <Media object src="images/chooseus-icon-2.png" className="img" />
                                    </Media>
                                    <Media body>
                                        <Media heading className="head">Find your future home</Media>
                                        We help you find a new home by offering a smart real estate.
                                    </Media>
                                </Media>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="cont cont2">
                    <Row>
                        <Col>
                            <div>
                                <Media>
                                    <Media left href="#">
                                        <Media object src="images/chooseus-icon-3.png" className="img" />
                                    </Media>
                                    <Media body>
                                        <Media heading className="head">Find your future home</Media>
                                        We help you find a new home by offering a smart real estate.
                                    </Media>
                                </Media>
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <Media>
                                    <Media left href="#">
                                        <Media object src="images/chooseus-icon-4.png" className="img" />
                                    </Media>
                                    <Media body>
                                        <Media heading className="head">Find your future home</Media>
                                        We help you find a new home by offering a smart real estate.
                                    </Media>
                                </Media>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}
}

export default Night

/*
        <div className="Night">
            <Container>
                <h3>WHY CHOOSE US</h3>
                <p className="tex">Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <div className="cont cont1">
                    <div>
                        <Media>
                            <Media left href="#">
                                <Media object src="images/chooseus-icon-1.png" className="img" />
                            </Media>
                            <Media body>
                                <Media heading className="head">Find your future home</Media>
                                We help you find a new home by offering a smart real estate.
                            </Media>
                        </Media>
                    </div>
                    <div>
                        <Media>
                            <Media left href="#">
                                <Media object src="images/chooseus-icon-2.png" className="img" />
                            </Media>
                            <Media body>
                                <Media heading className="head">Find your future home</Media>
                                We help you find a new home by offering a smart real estate.
                            </Media>
                        </Media>
                    </div>
                </div>
                <div className="cont cont2">
                    <div>
                        <Media>
                            <Media left href="#">
                                <Media object src="images/chooseus-icon-3.png" className="img" />
                            </Media>
                            <Media body>
                                <Media heading className="head">Find your future home</Media>
                                We help you find a new home by offering a smart real estate.
                            </Media>
                        </Media>
                    </div>
                    <div>
                        <Media>
                            <Media left href="#">
                                <Media object src="images/chooseus-icon-4.png" className="img" />
                            </Media>
                            <Media body>
                                <Media heading className="head">Find your future home</Media>
                                We help you find a new home by offering a smart real estate.
                            </Media>
                        </Media>
                    </div>
                </div>
            </Container>
        </div>*/