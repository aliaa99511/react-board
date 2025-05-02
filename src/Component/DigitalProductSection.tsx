import React from 'react';
import '../Style/DigitalProductSection.css';
import { Button, Container, Col, Row } from 'reactstrap';

const DigitalProductSection = () => {
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
    <div className="digital-product-section py-4">
      <Container>
        <Row>
          {digitalContent.map((item) => (
            <React.Fragment key={item.id}>
              <Col>
                <div className="digital-product-image-container">
                  <img src={item.image} alt="Digital product" className="img-fluid digital-product-image" />
                </div>
              </Col>
              <Col>
                <div className="digital-product-content">
                  <h1 className="digital-product-title">{item.title}</h1>
                  <p className="digital-product-description text-muted">{item.description}</p>
                  <Button color={item.buttonColor} className="digital-product-cta">{item.buttonText}</Button>{' '}
                </div>
              </Col>
            </React.Fragment>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default DigitalProductSection;