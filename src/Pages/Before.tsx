import '../Style/Before.css'
import { InputGroup, InputGroupText, Input, Row, Col, Container } from 'reactstrap';

const Before = () => {
    return (
        <Container>
            <div className="before">
                <Row>
                    <Col>
                        <div className="social">
                            <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id=">
                                <i className="fa fa-facebook"></i>
                            </a>
                            <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/">
                                <i className="fa fa-twitter"></i>
                            </a>
                            <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/">
                                <i className="fa fa-instagram"></i>
                            </a>
                            <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/">
                                <i className="fa fa-linkedin"></i>
                            </a>
                        </div>
                    </Col>
                    <Col>
                        <div className="logo">
                            <p>
                                <span>Lawn</span>
                                <span>Care</span>
                            </p>
                        </div>
                    </Col>
                    <Col>
                        <div className="form">
                            <InputGroup>
                                <Input placeholder="search" />
                                <InputGroupText>
                                    <i className="fa fa-search" aria-hidden="true"></i>
                                </InputGroupText>
                            </InputGroup>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default Before