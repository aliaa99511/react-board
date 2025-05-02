import '../Style/Mobiles.css';
import { Container, Row, Col, Button } from 'reactstrap';

const Mobiles = () => {
  const buttons = [
    {
      icon: 'fa-android',
      label1: 'available on',
      label2: 'Google Store'
    },
    {
      icon: 'fa-apple',
      label1: 'available on',
      label2: 'Play Store'
    }
  ];

  return (
    <div className="Mobiles">
      <Container>
        <Row>
          <Col>
            <div className="iitem iitem1">
              <img src="images/special.png" alt="Special offer" />
            </div>
          </Col>
          <Col>
            <div className="iitem iitem2">
              <h1>Our Best Propositions for You!</h1>
              <p className="text-muted mytex">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
              </p>
              <div className="bott">
                {buttons.map((button, index) => (
                  <Button key={index} outline color="danger" className="mr-2">
                    <div className="flexx">
                      <i className={`fa ${button.icon}`} aria-hidden="true"></i>
                      <div className="vvv">
                        <p>{button.label1}</p>
                        <p>{button.label2}</p>
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

export default Mobiles;