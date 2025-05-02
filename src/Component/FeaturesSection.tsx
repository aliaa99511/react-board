import '../Style/FeaturesSection.css';
import { Container, Row, Col } from 'reactstrap';

const features = [
  {
    icon: 'fa fa-scissors',
    title: 'Easy to Customize',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do.'
  },
  {
    icon: 'fa fa-scissors',
    title: 'Easy to Customize',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do.'
  },
  {
    icon: 'fa fa-scissors',
    title: 'Easy to Customize',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do.'
  },
  {
    icon: 'fa fa-scissors',
    title: 'Easy to Customize',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do.'
  }
];

const FeaturesSection = () => {
  return (
    <div className="features-section">
      <Container className="features-container" fluid={true}>
        <Row className="features-row">
          <Col>  
            <div className="features-image">
              <img src="images/best-features.png" alt="Best Features" />
            </div>
          </Col>
          <Col> 
            <div className="features-content">
              <h2>Some of the best features Of Our App!</h2>
              <div className="features-grid">
                <Container>
                  <Row>
                    {features.slice(0, 2).map((feature, index) => (
                      <Col key={index}>
                        <div className="feature-item">
                          <i className={feature.icon} aria-hidden="true"></i>
                          <div className="feature-body">
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
                        <div className="feature-item">
                          <i className={feature.icon} aria-hidden="true"></i>
                          <div className="feature-body">
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

export default FeaturesSection;