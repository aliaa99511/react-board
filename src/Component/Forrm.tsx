import React, { Component } from 'react'
import '../Style/Forrm.css'
import { Container, Row, Col ,Button , Form, FormGroup, Label, Input} from 'reactstrap';


export class Forrm extends Component {
render() {
    return (
        <div className="Forrm">
            <Container>
                <div className="myalll">
                    <Row>
                        <Col xs="6">
                            <div className="first">
                                <h3>Request A Call Back</h3>
                                <p>Posters had been a very beneficial marketing tool because it had paved to deliver an effective message that conveyed customer’s attention.</p>
                                <h6>CONTACT US</h6>
                            </div>
                        </Col>
                        <Col xs="6">
                            <div className="last">
                                <Form>

                                    <Row form>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Input type="text" name="name"  placeholder="Name" />
                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Input type="email" name="email" placeholder="Email" />
                                            </FormGroup>
                                        </Col>
                                    </Row>

                                    <Row form >
                                        <Col md={6}>
                                            <FormGroup>
                                                <Input type="text" name="phone" placeholder="Phone" />
                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Input type="select" className="sele" name="select" placeholder="Choose our services">
                                                    <option>Choose our services</option>
                                                </Input>                           
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Button color="success">SUBMIT</Button>{' '}
                                    </Row>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>    
        </div>
    )
}
}

export default Forrm
