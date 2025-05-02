import '../Style/FeatureCards.css';
import { Container, Row, Col, Button } from 'reactstrap';

const FeatureCards = () => {
  const features = [
    {
      id: 1,
      image: "images/place-4.jpg",
      title: "Map Direction",
      description: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic."
    },
    {
      id: 2,
      image: "images/bg_1.jpg",
      title: "Accomodation Services",
      description: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic."
    },
    {
      id: 3,
      image: "images/tower 3.jpg",
      title: "Great Experience",
      description: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic."
    }
  ];

  return (
    <div className="feature-cards-section">
      <Container>
        <div className="feature-cards-container">
          <Row>
            {features.map((feature) => (
              <Col key={feature.id}>
                <div className="feature-card">
                  <img src={feature.image} alt={feature.title} className="feature-image" />
                  <div className="feature-content">
                    <h4 className="feature-title">{feature.title}</h4>
                    <p className="feature-description text-muted">{feature.description}</p>
                    <Button color="info" className="feature-button">READ MORE</Button>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default FeatureCards;