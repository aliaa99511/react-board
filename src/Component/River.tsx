import React, { Component } from 'react'
import '../Style/River.css'
import { Container, Row, Col ,Button} from 'reactstrap';


export class River extends Component {
render() {
    return (
        <div className="River">
            <Container>
                <Row>
                    <Col>
                        <div className="mleft">
                            <div className="inner">
                                <img src="images/home-blog1.jpg"/>
                            </div>
                            <div className="shadw">
                                <h6 className="text-muted">| Traveling</h6>
                                <h5>Tips For Taking A Long-Term Trip With Kids.</h5>
                                <p>
                                    <span>Learn more</span>
                                    <i class="fa fa-angle-double-right" aria-hidden="true"></i>
                                </p>
                            </div>
                            <div className="dak">
                                <h5>24</h5>
                                <p>now</p>
                            </div>
                        </div>
                     </Col>
                     <Col>
                        <div className="mleft">
                            <div className="inner">
                                <img src="images/home-blog2.jpg"/>
                            </div>
                            <div className="shadw">
                                <h6 className="text-muted">| Traveling</h6>
                                <h5>Tips For Taking A Long-Term Trip With Kids.</h5>
                                <p>
                                    <span>Learn more</span>
                                    <i class="fa fa-angle-double-right" aria-hidden="true"></i>
                                </p>
                            </div>
                            <div className="dak">
                                <h5>24</h5>
                                <p>now</p>
                            </div>
                        </div>
                     </Col>
                </Row>
            </Container>
        </div>

    )
}
}

export default River
