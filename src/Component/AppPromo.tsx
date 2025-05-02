import '../Style/AppPromo.css';
import { Container, Row, Col, Button } from 'reactstrap';

const AppPromo = () => {
  const appButtons = [
    {
      icon: 'fa-android',
      subtitle: 'available on',
      title: 'Google Store'
    },
    {
      icon: 'fa-apple',
      subtitle: 'available on',
      title: 'Play Store'
    }
  ];

  return (
    <div className="app-promo-section py-4">
      <Container>
        <Row>
          <Col>
            <div className="promo-image">
              <img src="images/special.png" alt="Special offer" />
            </div>
          </Col>
          <Col>
            <div className="promo-content">
              <h1 className="promo-title">Our Best Propositions for You!</h1>
              <p className="promo-description text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
              </p>
              <div className="app-buttons">
                {appButtons.map((button, index) => (
                  <Button key={index} outline color="danger" className="app-button">
                    <div className="button-content">
                      <i className={`fa ${button.icon}`} aria-hidden="true"></i>
                      <div className="button-labels">
                        <p className="button-subtitle">{button.subtitle}</p>
                        <p className="button-title">{button.title}</p>
                      </div>
                    </div>
                  </Button>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AppPromo;