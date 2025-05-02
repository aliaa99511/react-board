import React from 'react';
import '../Style/Digital.css';
import { Button, Container, Col, Row } from 'reactstrap';

const Digital = () => {
  const digitalContent = [
    {
      id: 1,
      image: "images/about_hero.jpg",
      title: "We Create a Steps to Build a Successful Digital Product",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis orem ipsum dolor sit amet, consectetur adipiscing.",
      buttonText: "Contact us",
      buttonColor: "danger"
    }
  ];

  return (
    <div className="Digital">
      <Container>
        <Row>
          {digitalContent.map((item) => (
            <React.Fragment key={item.id}>
              <Col>
                <div className="item1">
                  <img src={item.image} alt="Digital product" className="img-fluid" />
                </div>
              </Col>
              <Col>
                <div className="item2">
                  <h1>{item.title}</h1>
                  <p className="text-muted">{item.description}</p>
                  <Button color={item.buttonColor}>{item.buttonText}</Button>{' '}
                </div>
              </Col>
            </React.Fragment>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Digital;