import { Container, Row, Col, Button, Form, FormGroup, Media, Input, Label } from 'reactstrap';
import '../Style/Jobs.css';

const Jobs = () => {
  // Job listings data
  const jobListings = [
    { id: 1, image: 'images/job-list1.png', title: 'Digital Marketing', company: 'Creative Agency', location: 'Athens, Greece', salary: '$3500 - $4000', type: 'Full time', posted: '7 hours ago' },
    { id: 2, image: 'images/job-list2.png', title: 'Digital Marketing', company: 'Creative Agency', location: 'Athens, Greece', salary: '$3500 - $4000', type: 'Full time', posted: '7 hours ago' },
    { id: 3, image: 'images/job-list3.png', title: 'Digital Marketing', company: 'Creative Agency', location: 'Athens, Greece', salary: '$3500 - $4000', type: 'Full time', posted: '7 hours ago' },
    { id: 4, image: 'images/job-list4.png', title: 'Digital Marketing', company: 'Creative Agency', location: 'Athens, Greece', salary: '$3500 - $4000', type: 'Full time', posted: '7 hours ago' },
    { id: 5, image: 'images/job-list1.png', title: 'Digital Marketing', company: 'Creative Agency', location: 'Athens, Greece', salary: '$3500 - $4000', type: 'Full time', posted: '7 hours ago' },
    { id: 6, image: 'images/job-list2.png', title: 'Digital Marketing', company: 'Creative Agency', location: 'Athens, Greece', salary: '$3500 - $4000', type: 'Full time', posted: '7 hours ago' },
    { id: 7, image: 'images/job-list3.png', title: 'Digital Marketing', company: 'Creative Agency', location: 'Athens, Greece', salary: '$3500 - $4000', type: 'Full time', posted: '7 hours ago' },
    { id: 8, image: 'images/job-list4.png', title: 'Digital Marketing', company: 'Creative Agency', location: 'Athens, Greece', salary: '$3500 - $4000', type: 'Full time', posted: '7 hours ago' }
  ];

  return (
    <div className="Jobs">
      <Container>
        <Row>
          <Col xs="3">
            <div className="son son1">
              <div className="tit">
                <i className="fa fa-filter" aria-hidden="true"></i>
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
                        <FormGroup check>
                          <Input type="checkbox" id="fullTime" />
                          <Label for="fullTime" check>Full time</Label>
                        </FormGroup>
                        <FormGroup check>
                          <Input type="checkbox" id="partTime" />
                          <Label for="partTime" check>Part time</Label>
                        </FormGroup>
                        <FormGroup check>
                          <Input type="checkbox" id="remote" />
                          <Label for="remote" check>Remote</Label>
                        </FormGroup>
                        <FormGroup check>
                          <Input type="checkbox" id="freelance" />
                          <Label for="freelance" check>Freelance</Label>
                        </FormGroup>
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
                        <FormGroup check>
                          <Input type="checkbox" id="anyPosted" />
                          <Label for="anyPosted" check>Any</Label>
                        </FormGroup>
                        <FormGroup check>
                          <Input type="checkbox" id="todayPosted" />
                          <Label for="todayPosted" check>Today</Label>
                        </FormGroup>
                        <FormGroup check>
                          <Input type="checkbox" id="last2Days" />
                          <Label for="last2Days" check>Last 2 days</Label>
                        </FormGroup>
                        <FormGroup check>
                          <Input type="checkbox" id="last3Days" />
                          <Label for="last3Days" check>Last 3 days</Label>
                        </FormGroup>
                        <FormGroup check>
                          <Input type="checkbox" id="last5Days" />
                          <Label for="last5Days" check>Last 5 days</Label>
                        </FormGroup>
                        <FormGroup check>
                          <Input type="checkbox" id="last10Days" />
                          <Label for="last10Days" check>Last 10 days</Label>
                        </FormGroup>
                      </div>
                    </FormGroup>
                  </Form>
                </div>

                <div className="Experience">
                  <h5>Experience</h5>
                  <Form>
                    <FormGroup>
                      <div className="text-muted">
                        <FormGroup check>
                          <Input type="checkbox" id="exp1-2" />
                          <Label for="exp1-2" check>1-2 years</Label>
                        </FormGroup>
                        <FormGroup check>
                          <Input type="checkbox" id="exp2-3" />
                          <Label for="exp2-3" check>2-3 years</Label>
                        </FormGroup>
                        <FormGroup check>
                          <Input type="checkbox" id="exp3-6" />
                          <Label for="exp3-6" check>3-6 years</Label>
                        </FormGroup>
                        <FormGroup check>
                          <Input type="checkbox" id="exp6plus" />
                          <Label for="exp6plus" check>6+ years</Label>
                        </FormGroup>
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

              {jobListings.map(job => (
                <div className="big" key={job.id}>
                  <Container>
                    <Row>
                      <Col xs="6">
                        <div className="left">
                          <Media>
                            <Media left href="#">
                              <Media object src={job.image} alt="Job listing" />
                            </Media>
                            <Media body>
                              <Media heading>{job.title}</Media>
                              <div className="spp text-muted">
                                <p>{job.company}</p>
                                <i className="fa fa-map-marker" aria-hidden="true"></i>
                                <span>{job.location}</span>
                                <span>{job.salary}</span>
                              </div>                                           
                            </Media>
                          </Media>
                        </div>
                      </Col>
                      <Col xs="3">
                        <div className="right">
                          <Button outline color="info">{job.type}</Button>{' '}
                          <p className="text-muted">{job.posted}</p>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Jobs;