import '../Style/ChooseUsSection.css';
import { Container, Row, Col, Media } from 'reactstrap';

const ChooseUsSection = () => {
  const features = [
    {
      id: 1,
      image: 'images/chooseus-icon-1.png',
      heading: 'Find your future home',
      description: 'We help you find a new home by offering a smart real estate.'
    },
    {
      id: 2,
      image: 'images/chooseus-icon-2.png',
      heading: 'Expert agents',
      description: 'Our professional agents provide the best service in the market.'
    },
    {
      id: 3,
      image: 'images/chooseus-icon-3.png',
      heading: 'Best deals',
      description: 'We negotiate to get you the most competitive prices.'
    },
    {
      id: 4,
      image: 'images/chooseus-icon-4.png',
      heading: '24/7 support',
      description: 'Our team is always available to assist you.'
    }
  ];

  return (
    <section className="choose-us-section">
      <Container>
        <h3 className="section-title">WHY CHOOSE US</h3>
        <p className="section-description">
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
        
        <div className="features-row">
          <Row>
            {features.slice(0, 2).map(feature => (
              <Col key={feature.id}>
                <div className="feature-item">
                  <Media>
                    <Media left href="#">
                      <Media object src={feature.image} className="feature-icon" alt={feature.heading} />
                    </Media>
                    <Media body>
                      <Media heading className="feature-heading">{feature.heading}</Media>
                      {feature.description}
                    </Media>
                  </Media>
                </div>
              </Col>
            ))}
          </Row>
        </div>
        
        <div className="features-row">
          <Row>
            {features.slice(2, 4).map(feature => (
              <Col key={feature.id}>
                <div className="feature-item">
                  <Media>
                    <Media left href="#">
                      <Media object src={feature.image} className="feature-icon" alt={feature.heading} />
                    </Media>
                    <Media body>
                      <Media heading className="feature-heading">{feature.heading}</Media>
                      {feature.description}
                    </Media>
                  </Media>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default ChooseUsSection;