import '../Style/Prices.css';
import { Container, Row, Col, Button } from 'reactstrap';

const Prices = () => {
  const pricingData = [
    {
      price: '$99',
      duration: '1 hour',
      title: 'BASIC',
      features: [
        'up to 30 photos',
        'no retouched photos',
        'no make-up',
        'no stylist assistance'
      ],
      className: 'son1'
    },
    {
      price: '$199',
      duration: '2 hours',
      title: 'STANDARD',
      features: [
        'up to 60 photos',
        '10 retouched photos',
        'basic make-up',
        'stylist assistance'
      ],
      className: 'son2'
    },
    {
      price: '$299',
      duration: '3 hours',
      title: 'PREMIUM',
      features: [
        'up to 100 photos',
        '30 retouched photos',
        'professional make-up',
        'stylist assistance'
      ],
      className: 'son3'
    }
  ];

  return (
    <div className="Prices text-center">
      <Container>
        <h1>SERVICE & OPTIMAL PRICE</h1>
        <p className="para text-muted">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
        </p>
        <Row>
          {pricingData.map((item, index) => (
            <Col key={index}>
              <div className={`son ${item.className} text-center`}>
                <div className="colo">
                  <div className="circl">
                    <h2>{item.price}</h2>
                    <p>{item.duration}</p>
                  </div>
                  <h3>{item.title}</h3>
                </div>
                <hr />
                <div className="detai text-muted">
                  {item.features.map((feature, i) => (
                    <p key={i}>{feature}</p>
                  ))}
                </div>
                <Button color="secondary" size="lg" block>
                  Block level button
                </Button>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Prices;