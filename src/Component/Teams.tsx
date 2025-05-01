import React, { Component } from 'react'
import '../Style/Teams.css'
import { Container, Row, Col,Button } from 'reactstrap';


export class Teams extends Component {
render() {
    return (
        <div className="Teams text-center">
            <Container>
                <h1>Our Team</h1>
                <p className="text-muted os">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                <Row>
                    <Col>
                        <div className="son">
                          <img src="images/1.png"/>
                          <div className="shadw">
                              <h4>Rala Emaia</h4>
                              <p className="text-muted">Senior Director</p>
                          </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="son">
                          <img src="images/2.png"/>
                          <div className="shadw">
                              <h4>Rala Emaia</h4>
                              <p className="text-muted">Senior Director</p>
                          </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="son">
                          <img src="images/3.png"/>
                          <div className="shadw">
                              <h4>Rala Emaia</h4>
                              <p className="text-muted">Senior Director</p>
                          </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
}

export default Teams
