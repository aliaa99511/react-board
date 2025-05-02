import '../Style/Cartoon1.css';
import { Container, Row, Col } from 'reactstrap';

const features = [
  {
    icon: 'fa fa-scissors',
    title: 'Easy to Costomize',
    description: 'Aorem psum olorsit amet ectetur adipiscing elit, sed dov.'
  },
  {
    icon: 'fa fa-scissors',
    title: 'Easy to Costomize',
    description: 'Aorem psum olorsit amet ectetur adipiscing elit, sed dov.'
  },
  {
    icon: 'fa fa-scissors',
    title: 'Easy to Costomize',
    description: 'Aorem psum olorsit amet ectetur adipiscing elit, sed dov.'
  },
  {
    icon: 'fa fa-scissors',
    title: 'Easy to Costomize',
    description: 'Aorem psum olorsit amet ectetur adipiscing elit, sed dov.'
  }
];

const Cartoon1 = () => {
  return (
    <div className="Cartoon1">
      <Container className="themed-container" fluid={true}>
        <Row className="frow">
          <Col>
            <div className="son1">
              <img src="images/best-features.png" alt="Best Features" />
            </div>
          </Col>
          <Col>
            <div className="son2">
              <h2>Some of the best features Of Our App!</h2>
              <div className="medi">
                <Container>
                  <Row>
                    {features.slice(0, 2).map((feature, index) => (
                      <Col key={index}>
                        <div className="med1">
                          <i className={feature.icon} aria-hidden="true"></i>
                          <div className="medbod">
                            <h5>{feature.title}</h5>
                            <p className="text-muted">{feature.description}</p>
                          </div>
                        </div>
                      </Col>
                    ))}
                  </Row>
                  <Row>
                    {features.slice(2, 4).map((feature, index) => (
                      <Col key={index + 2}>
                        <div className="med1">
                          <i className={feature.icon} aria-hidden="true"></i>
                          <div className="medbod">
                            <h5>{feature.title}</h5>
                            <p className="text-muted">{feature.description}</p>
                          </div>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </Container>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Cartoon1;