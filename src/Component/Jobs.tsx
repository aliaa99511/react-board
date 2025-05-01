import React, { Component } from 'react'
import { Container, Row, Col,Button,CustomInput, Form, FormGroup,Media, Label, Input, FormText } from 'reactstrap';
import '../Style/Jobs.css'


export class Jobs extends Component {
render() {
return (
<div className="Jobs">
    <Container>
        <Row>
            <Col xs="3">
                <div className="son son1">
                    <div className="tit">
                        <i class="fa fa-filter" aria-hidden="true"></i>
                        <h4>Filter Jobs</h4>
                    </div>
                    <div className="all">

                        <div className="Category">
                            <h5>Job Category</h5>
                            <Form>
                                <FormGroup>
                                    <Input type="select" name="select">
                                        <option>All Category</option>
                                        <option>Category 1</option>
                                        <option>Category 2</option>
                                        <option>Category 3</option>
                                        <option>Category 4</option>
                                    </Input>
                                </FormGroup>
                            </Form>
                        </div>

                        <div className="Type">
                           <h5>Job Type</h5>
                            <Form>
                                <FormGroup>
                                  <div className="text-muted">
                                        <CustomInput type="checkbox" className="check " id="exampleCustomCheckbox" label="Full time"  />
                                        <CustomInput type="checkbox" className="check" id="exampleCustomCheckbox2" label="Part time" />
                                        <CustomInput type="checkbox" className="check" id="exampleCustomCheckbox3" label="Remote"/>
                                        <CustomInput type="checkbox" className="check" id="exampleCustomCheckbox4" label="Freelance"  htmlFor="exampleCustomCheckbox4_X"  />
                                        
                                    </div>
                                </FormGroup>
                            </Form>
                        </div>

                        <div className="Location">
                            <h5>Job Location</h5>
                            <Form>
                                <FormGroup>
                                    <Input type="select" name="select">
                                        <option>Anywhere</option>
                                        <option>Category 1</option>
                                        <option>Category 2</option>
                                        <option>Category 3</option>
                                        <option>Category 4</option>
                                    </Input>
                                </FormGroup>
                            </Form>
                        </div>

                        <div className="Posted">
                           <h5>Posted Within</h5>
                            <Form>
                                <FormGroup>
                                  <div className="text-muted">
                                        <CustomInput type="checkbox" className="check " id="exampleCustomCheckbox" label="Any"  />
                                        <CustomInput type="checkbox" className="check" id="exampleCustomCheckbox2" label="Today" />
                                        <CustomInput type="checkbox" className="check" id="exampleCustomCheckbox3" label="Last 2 days"/>
                                        <CustomInput type="checkbox" className="check" id="exampleCustomCheckbox3" label="Last 3 days"/>
                                        <CustomInput type="checkbox" className="check" id="exampleCustomCheckbox3" label="Last 5 days"/>
                                        <CustomInput type="checkbox" className="check" id="exampleCustomCheckbox4" label="Last 10 days"  htmlFor="exampleCustomCheckbox4_X"  />
                                        
                                    </div>
                                </FormGroup>
                            </Form>
                        </div>

                        <div className="Experience">
                           <h5>Experience</h5>
                            <Form>
                                <FormGroup>
                                  <div className="text-muted">
                                        <CustomInput type="checkbox" className="check " id="exampleCustomCheckbox" label="1-2 years"  />
                                        <CustomInput type="checkbox" className="check" id="exampleCustomCheckbox2" label="2-3 years" />
                                        <CustomInput type="checkbox" className="check" id="exampleCustomCheckbox3" label="3-6 years"/>
                                        <CustomInput type="checkbox" className="check" id="exampleCustomCheckbox4" label="6-more"  htmlFor="exampleCustomCheckbox4_X"  />
                                        
                                    </div>
                                </FormGroup>
                            </Form>
                        </div>

                        <div className="filter">
                            <h5>Filter jobs</h5>
                            <Form>
                                <FormGroup>
                                    <Input type="range" name="range" id="exampleRange" />
                                </FormGroup>
                            </Form>
                            <div className="spp">
                                <p className="text-muted">Price :</p>
                                <span>0</span>
                                <span>to</span>
                                <span>500</span>
                            </div>
                        </div>

                    </div>
                </div>
            </Col>

            <Col xs="9">
                <div className="son son2">

                    <div className="sss">
                       <h4 className="text-muted title">39, 782 Jobs found</h4>
                       <div className="sort">
                           <p className="text-muted">Sort by</p>
                           <Form>
                                <FormGroup>
                                    <Input type="select" name="select">
                                        <option>None</option>
                                        <option>Job list</option>
                                        <option>Job list</option>
                                        <option>Job list</option>
                                        <option>Job list</option>
                                    </Input>
                                </FormGroup>
                            </Form>
                       </div>
                    </div>

                    <div className="big">
                        <Container>
                            <Row>
                                <Col xs="6">
                                    <div className="left">
                                        <Media>
                                            <Media left href="#">
                                                <Media object src="images/job-list1.png"  />
                                            </Media>
                                            <Media body>
                                                <Media heading>Digital markiting</Media>
                                                <div className="spp text-muted">
                                                    <p >Creative Agency</p>
                                                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                                                    <span>Athens, Greece</span>
                                                    <span>$3500 - $4000</span>
                                                </div>                                           
                                            </Media>
                                        </Media>
 
                                    </div>
                                </Col>
                                <Col xs="3">
                                    <div className="right">
                                       <Button outline color="info">Full time</Button>{' '}
                                       <p className="text-muted">7 hours ago</p>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>

                    <div className="big">
                        <Container>
                            <Row>
                                <Col xs="6">
                                    <div className="left">
                                        <Media>
                                            <Media left href="#">
                                                <Media object src="images/job-list2.png"  />
                                            </Media>
                                            <Media body>
                                                <Media heading>Digital markiting</Media>
                                                <div className="spp text-muted">
                                                    <p >Creative Agency</p>
                                                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                                                    <span>Athens, Greece</span>
                                                    <span>$3500 - $4000</span>
                                                </div>                                           
                                            </Media>
                                        </Media>
 
                                    </div>
                                </Col>
                                <Col xs="3">
                                    <div className="right">
                                       <Button outline color="info">Full time</Button>{' '}
                                       <p className="text-muted">7 hours ago</p>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>

                    <div className="big">
                        <Container>
                            <Row>
                                <Col xs="6">
                                    <div className="left">
                                        <Media>
                                            <Media left href="#">
                                                <Media object src="images/job-list3.png"  />
                                            </Media>
                                            <Media body>
                                                <Media heading>Digital markiting</Media>
                                                <div className="spp text-muted">
                                                    <p >Creative Agency</p>
                                                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                                                    <span>Athens, Greece</span>
                                                    <span>$3500 - $4000</span>
                                                </div>                                           
                                            </Media>
                                        </Media>
 
                                    </div>
                                </Col>
                                <Col xs="3">
                                    <div className="right">
                                       <Button outline color="info">Full time</Button>{' '}
                                       <p className="text-muted">7 hours ago</p>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>

                    <div className="big">
                        <Container>
                            <Row>
                                <Col xs="6">
                                    <div className="left">
                                        <Media>
                                            <Media left href="#">
                                                <Media object src="images/job-list4.png"  />
                                            </Media>
                                            <Media body>
                                                <Media heading>Digital markiting</Media>
                                                <div className="spp text-muted">
                                                    <p >Creative Agency</p>
                                                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                                                    <span>Athens, Greece</span>
                                                    <span>$3500 - $4000</span>
                                                </div>                                           
                                            </Media>
                                        </Media>
 
                                    </div>
                                </Col>
                                <Col xs="3">
                                    <div className="right">
                                       <Button outline color="info">Full time</Button>{' '}
                                       <p className="text-muted">7 hours ago</p>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>

                    <div className="big">
                        <Container>
                            <Row>
                                <Col xs="6">
                                    <div className="left">
                                        <Media>
                                            <Media left href="#">
                                                <Media object src="images/job-list1.png"  />
                                            </Media>
                                            <Media body>
                                                <Media heading>Digital markiting</Media>
                                                <div className="spp text-muted">
                                                    <p >Creative Agency</p>
                                                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                                                    <span>Athens, Greece</span>
                                                    <span>$3500 - $4000</span>
                                                </div>                                           
                                            </Media>
                                        </Media>
 
                                    </div>
                                </Col>
                                <Col xs="3">
                                    <div className="right">
                                       <Button outline color="info">Full time</Button>{' '}
                                       <p className="text-muted">7 hours ago</p>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>

                    <div className="big">
                        <Container>
                            <Row>
                                <Col xs="6">
                                    <div className="left">
                                        <Media>
                                            <Media left href="#">
                                                <Media object src="images/job-list2.png"  />
                                            </Media>
                                            <Media body>
                                                <Media heading>Digital markiting</Media>
                                                <div className="spp text-muted">
                                                    <p >Creative Agency</p>
                                                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                                                    <span>Athens, Greece</span>
                                                    <span>$3500 - $4000</span>
                                                </div>                                           
                                            </Media>
                                        </Media>
 
                                    </div>
                                </Col>
                                <Col xs="3">
                                    <div className="right">
                                       <Button outline color="info">Full time</Button>{' '}
                                       <p className="text-muted">7 hours ago</p>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>

                    <div className="big">
                        <Container>
                            <Row>
                                <Col xs="6">
                                    <div className="left">
                                        <Media>
                                            <Media left href="#">
                                                <Media object src="images/job-list3.png"  />
                                            </Media>
                                            <Media body>
                                                <Media heading>Digital markiting</Media>
                                                <div className="spp text-muted">
                                                    <p >Creative Agency</p>
                                                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                                                    <span>Athens, Greece</span>
                                                    <span>$3500 - $4000</span>
                                                </div>                                           
                                            </Media>
                                        </Media>
 
                                    </div>
                                </Col>
                                <Col xs="3">
                                    <div className="right">
                                       <Button outline color="info">Full time</Button>{' '}
                                       <p className="text-muted">7 hours ago</p>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>

                    
                    <div className="big">
                        <Container>
                            <Row>
                                <Col xs="6">
                                    <div className="left">
                                        <Media>
                                            <Media left href="#">
                                                <Media object src="images/job-list4.png"  />
                                            </Media>
                                            <Media body>
                                                <Media heading>Digital markiting</Media>
                                                <div className="spp text-muted">
                                                    <p >Creative Agency</p>
                                                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                                                    <span>Athens, Greece</span>
                                                    <span>$3500 - $4000</span>
                                                </div>                                           
                                            </Media>
                                        </Media>
 
                                    </div>
                                </Col>
                                <Col xs="3">
                                    <div className="right">
                                       <Button outline color="info">Full time</Button>{' '}
                                       <p className="text-muted">7 hours ago</p>
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

export default Jobs

/*
<i class="fa fa-filter" aria-hidden="true"></i>
*/

