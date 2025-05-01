import React, { Component } from 'react'
import '../Style/Cartoon1.css'
import { Container, Row, Col,Button } from 'reactstrap';


export class Cartoon1 extends Component {
render() {
return (
    <div className="Cartoon1">
        <Container className="themed-container"  fluid={true}>
            <Row className="frow">
                <Col>
                    <div className="son1">
                        <img src="images/best-features.png"/>
                    </div>
                </Col>
                <Col>
                   <div className="son2">
                       <h2>Some of the best features Of Our App!</h2>
                       <div className="medi">
                           <Container >
                          <Row>
                              <Col>
                                <div className="med1">
                                  <i class="fa fa-scissors" aria-hidden="true"></i>
                                  <div className="medbod" >
                                      <h5>Easy to Costomize</h5>
                                      <p className="text-muted">Aorem psum olorsit amet ectetur adipiscing elit, sed dov.</p>
                                  </div>
                                </div>
                              </Col>
                              <Col>
                              <div className="med1">
                                  <i class="fa fa-scissors" aria-hidden="true"></i>
                                  <div className="medbod" >
                                      <h5>Easy to Costomize</h5>
                                      <p className="text-muted">Aorem psum olorsit amet ectetur adipiscing elit, sed dov.</p>
                                  </div>
                                </div>
                              </Col>
                          </Row>
                          <Row>
                            <Col>
                            <div className="med1">
                                  <i class="fa fa-scissors" aria-hidden="true"></i>
                                  <div className="medbod" >
                                      <h5>Easy to Costomize</h5>
                                      <p className="text-muted">Aorem psum olorsit amet ectetur adipiscing elit, sed dov.</p>
                                  </div>
                                </div>
                                </Col>
                                <Col>
                                <div className="med1">
                                  <i class="fa fa-scissors" aria-hidden="true"></i>
                                  <div className="medbod" >
                                      <h5>Easy to Costomize</h5>
                                      <p className="text-muted">Aorem psum olorsit amet ectetur adipiscing elit, sed dov.</p>
                                  </div>
                                </div>
                                </Col>
                          </Row>
                          </Container>
                       </div>
                        
                    </div> 

                </Col>
            </Row>
        </Container>
        
    </div>
)
}
}

export default Cartoon1
