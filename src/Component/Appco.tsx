import React, { Component } from 'react'
import '../Style/Appco.css'
import { Container, Row, Col ,Button} from 'reactstrap';


export class Appco extends Component {
render() {
return (
    <div className="Appco">
        <Container>
            <div className="contt">
                <Row>
                    <Col>
                        <div className="one1">
                            <h6>APP LANDING PAGE</h6>
                            <h1>Get things done with appco</h1>
                            <p className="text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since</p>
                            <div className="but">
                                <Button color="danger">download</Button>{' '}
                                <div className="ico">
                                    <i class="fa fa-play" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="two2">
                            <img src="images/hero_right.png"/>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    </div>
)
}
}



export default Appco
