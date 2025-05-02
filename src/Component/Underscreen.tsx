import '../Style/Underscreen.css';
import { Container, Row, Col, Button } from 'reactstrap';

const Underscreen = () => {
  const items = [
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
    <div>
      <Container>
        <div className="under">
          <Row>
            {items.map((item) => (
              <Col key={item.id}>
                <div className="item">
                  <img src={item.image} alt={item.title} />
                  <div className="bodyy">
                    <h4>{item.title}</h4>
                    <p className="text-muted">{item.description}</p>
                    <Button color="info">READ MORE</Button>
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

export default Underscreen;