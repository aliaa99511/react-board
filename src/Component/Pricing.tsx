import '../Style/Pricing.css';
import { Container, Row, Col, Button } from 'reactstrap';

const Pricing = () => {
  const pricingPlans = [
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
      planClass: 'basic-plan'
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
      planClass: 'standard-plan'
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
      planClass: 'premium-plan'
    }
  ];

  return (
    <section className="pricing-section text-center">
      <Container>
        <h1>SERVICE & OPTIMAL PRICE</h1>
        <p className="pricing-description text-muted">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
        </p>
        <Row>
          {pricingPlans.map((plan, index) => (
            <Col key={index}>
              <div className={`pricing-card ${plan.planClass} text-center`}>
                <div className="pricing-header">
                  <div className="price-bubble">
                    <h2>{plan.price}</h2>
                    <p>{plan.duration}</p>
                  </div>
                  <h3>{plan.title}</h3>
                </div>
                <hr />
                <div className="pricing-features text-muted">
                  {plan.features.map((feature, i) => (
                    <p key={i}>{feature}</p>
                  ))}
                </div>
                <Button color="secondary" size="lg" block>
                  Get Started
                </Button>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Pricing;