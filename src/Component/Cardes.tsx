import React, { Component } from 'react'
import '../Style/Cardes.css'
import {Card, Button, CardImg, CardTitle,Badge, CardText, CardDeck,CardImgOverlay,CardSubtitle, CardBody,Container} from 'reactstrap';

export class Cardes extends Component {
render() {
return (
    <div className="Cardes">
        <Container>
            <CardDeck>

                <Card className="card1">
                    <CardImg top width="100%" src="images/card-1.png" className="immg" />
                    <CardImgOverlay>
                        <CardTitle><h5><Badge color="danger">populer</Badge></h5></CardTitle>
                        <CardText>
                            <img src="images/icon-2.jfif" className="os"/>
                        </CardText>
                    </CardImgOverlay>
                    <CardBody>
                        <CardTitle>Chinese Sausage Restaurant</CardTitle>
                        <CardSubtitle>
                            <div className="prices">
                                <div className="icons">
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star-half-o" aria-hidden="true"></i>
                                </div>
                                <p className="pric">$40 - $70</p>
                            </div>
                        </CardSubtitle>
                        <CardText>
                            <div className="locati">
                              <i class="fa fa-map-marker" aria-hidden="true"></i>
                              <p className="loc">236 Littleton St. New Philadelphia, Ohio, United States</p>
                            </div>
                        </CardText>
                        <CardText>
                            <div className="phones">
                              <i class="fa fa-phone" aria-hidden="true"></i>
                              <p>(+12) 345-678-910</p>
                            </div>
                        </CardText>
                        <hr />
                        <div className="restu">
                            <img src="images/icon-1.png" className="ccc"/>
                            <h6>Restaurant</h6>
                            <p>Open Now</p>
                        </div>
                    </CardBody>
                </Card>
                <Card className="card2">
                    <CardImg top width="100%" src="images/card-2.png" className="immg" />
                    <CardImgOverlay>
                        <CardTitle><h5><Badge color="danger">populer</Badge></h5></CardTitle>
                        <CardText>
                            <img src="images/list.png" className="os"/>
                        </CardText>
                    </CardImgOverlay>
                    <CardBody>
                        <CardTitle>Chinese Sausage Restaurant</CardTitle>
                        <CardSubtitle>
                            <div className="prices">
                                <div className="icons">
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star-half-o" aria-hidden="true"></i>
                                </div>
                                <p className="pric">$40 - $70</p>
                            </div>
                        </CardSubtitle>
                        <CardText>
                            <div className="locati">
                              <i class="fa fa-map-marker" aria-hidden="true"></i>
                              <p className="loc">236 Littleton St. New Philadelphia, Ohio, United States</p>
                            </div>
                        </CardText>
                        <CardText>
                            <div className="phones">
                              <i class="fa fa-phone" aria-hidden="true"></i>
                              <p>(+12) 345-678-910</p>
                            </div>
                        </CardText>
                        <hr />
                        <div className="restu">
                            <img src="images/icon-1.png" className="ccc"/>
                            <h6>Restaurant</h6>
                            <p>Open Now</p>
                        </div>
                    </CardBody>
                </Card>

                <Card className="card3">
                    <CardImg top width="100%" src="images/card-3.png" className="immg" />
                    <CardImgOverlay>
                        <CardTitle><h5><Badge color="danger">populer</Badge></h5></CardTitle>
                        <CardText>
                            <img src="images/icon-5.png" className="os"/>
                        </CardText>
                    </CardImgOverlay>
                    <CardBody>
                        <CardTitle>Chinese Sausage Restaurant</CardTitle>
                        <CardSubtitle>
                            <div className="prices">
                                <div className="icons">
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star-half-o" aria-hidden="true"></i>
                                </div>
                                <p className="pric">$40 - $70</p>
                            </div>
                        </CardSubtitle>
                        <CardText>
                            <div className="locati">
                              <i class="fa fa-map-marker" aria-hidden="true"></i>
                              <p className="loc">236 Littleton St. New Philadelphia, Ohio, United States</p>
                            </div>
                        </CardText>
                        <CardText>
                            <div className="phones">
                              <i class="fa fa-phone" aria-hidden="true"></i>
                              <p>(+12) 345-678-910</p>
                            </div>
                        </CardText>
                        <hr />
                        <div className="restu">
                            <img src="images/icon-1.png" className="ccc"/>
                            <h6>Restaurant</h6>
                            <p>Open Now</p>
                        </div>
                    </CardBody>
                </Card>

        </CardDeck>
        </Container>
    </div>
)
}
}

export default Cardes
