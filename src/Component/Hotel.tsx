import React, { Component } from 'react'
import '../Style/Hotel.css'
import {Card, Button,Container, Badge,CardImg, CardTitle, CardText, CardDeck,CardSubtitle, CardBody,CardImgOverlay} from 'reactstrap';


export class Hotel extends Component {
render() {
return (
    <div className="Hotel">
        <Container>
            <CardDeck>
                
                <Card>
                    <CardImg top width="100%" src="images/villa-1.jpg" className="carimg" />
                    <CardImgOverlay>
                        <CardText className="flexx1">
                            <h6><Badge color="danger">FEATURE</Badge></h6>
                            <h6><Badge color="info">FOR SALE</Badge></h6>
                        </CardText>
                        <CardText className="fleexx2">
                            <img src="images/comment_2.png" className="pho"/>
                            <p>jonathan walters</p>
                        </CardText>
                    </CardImgOverlay>
                    <CardBody >
                        <CardTitle className="text-center heed">French Riviera villa </CardTitle>
                        <CardSubtitle className="text-center icon">
                            <i class="fa fa-map-marker" aria-hidden="true"></i>
                            <span>180 york road,london,uk</span>
                            <i class="fa fa-tag" aria-hidden="true"></i>
                            <span>villa</span>
                        </CardSubtitle>
                        <CardText className="text-center mon">$5900\month</CardText>
                        <CardText className="count">
                            <i class="fa fa-arrows" aria-hidden="true"></i>
                            <span className="sta">780 sqft</span>
                            <i class="fa fa-bed" aria-hidden="true"></i>
                            <span className="sta1">4</span>
                            <i class="fa fa-bath" aria-hidden="true"></i>
                            <span className="sta1">3</span>
                            <i class="fa fa-car" aria-hidden="true"></i>
                            <span>2</span>
                        </CardText>
                    </CardBody>
                </Card>


                <Card>
                    <CardImg top width="100%" src="images/villa-2.jpg" className="carimg" />
                    <CardImgOverlay>
                        <CardText className="flexx1">
                            <h6><Badge color="danger">FEATURE</Badge></h6>
                            <h6><Badge color="info">FOR SALE</Badge></h6>
                        </CardText>
                        <CardText className="fleexx2">
                            <img src="images/comment_1.png" className="pho"/>
                            <p>jonathan walters</p>
                        </CardText>
                    </CardImgOverlay>
                    <CardBody >
                        <CardTitle className="text-center heed">French Riviera villa </CardTitle>
                        <CardSubtitle className="text-center icon">
                            <i class="fa fa-map-marker" aria-hidden="true"></i>
                            <span>180 york road,london,uk</span>
                            <i class="fa fa-tag" aria-hidden="true"></i>
                            <span>villa</span>
                        </CardSubtitle>
                        <CardText className="text-center mon">$5900\month</CardText>
                        <CardText className="count">
                            <i class="fa fa-arrows" aria-hidden="true"></i>
                            <span className="sta">780 sqft</span>
                            <i class="fa fa-bed" aria-hidden="true"></i>
                            <span className="sta1">4</span>
                            <i class="fa fa-bath" aria-hidden="true"></i>
                            <span className="sta1">3</span>
                            <i class="fa fa-car" aria-hidden="true"></i>
                            <span>2</span>
                        </CardText>
                    </CardBody>
                </Card>


                <Card>
                    <CardImg top width="100%" src="images/villa-3.jpg" className="carimg" />
                    <CardImgOverlay>
                        <CardText className="flexx1">
                            <h6><Badge color="danger">FEATURE</Badge></h6>
                            <h6><Badge color="info">FOR SALE</Badge></h6>
                        </CardText>
                        <CardText className="fleexx2">
                            <img src="images/comment_3.png" className="pho"/>
                            <p>jonathan walters</p>
                        </CardText>
                    </CardImgOverlay>
                    <CardBody >
                        <CardTitle className="text-center heed">French Riviera villa </CardTitle>
                        <CardSubtitle className="text-center icon">
                            <i class="fa fa-map-marker" aria-hidden="true"></i>
                            <span>180 york road,london,uk</span>
                            <i class="fa fa-tag" aria-hidden="true"></i>
                            <span>villa</span>
                        </CardSubtitle>
                        <CardText className="text-center mon">$5900\month</CardText>
                        <CardText className="count">
                            <i class="fa fa-arrows" aria-hidden="true"></i>
                            <span className="sta">780 sqft</span>
                            <i class="fa fa-bed" aria-hidden="true"></i>
                            <span className="sta1">4</span>
                            <i class="fa fa-bath" aria-hidden="true"></i>
                            <span className="sta1">3</span>
                            <i class="fa fa-car" aria-hidden="true"></i>
                            <span>2</span>
                        </CardText>
                    </CardBody>
                </Card>
            </CardDeck>  
        </Container>
    </div>
)
}
}

export default Hotel
/*                          <div>
                                <i class="fa fa-arrows" aria-hidden="true"></i>
                                <span>780 sqft</span>
                            </div>
                            <div className="sta">
                                <div>
                                    <i class="fa fa-bed" aria-hidden="true"></i>
                                    <span>4</span>
                                <div>
                                </div>                            
                                    <i class="fa fa-bath" aria-hidden="true"></i>
                                    <span>3</span>
                                <div>
                                </div>                           
                                <i class="fa fa-car" aria-hidden="true"></i>
                                    <span>2</span>
                                </div>
                            </div>*/