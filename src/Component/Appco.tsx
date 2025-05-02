import '../Style/Appco.css';
import { Container, Row, Col, Button } from 'reactstrap';

const Appco = () => {
  const content = {
    title: "APP LANDING PAGE",
    heading: "Get things done with appco",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
    buttonText: "download",
    imageSrc: "images/hero_right.png"
  };

  const sections = [
    {
      content: (
        <div className="one1">
          <h6>{content.title}</h6>
          <h1>{content.heading}</h1>
          <p className="text-muted">{content.description}</p>
          <div className="but">
            <Button color="danger">{content.buttonText}</Button>{' '}
            <div className="ico">
              <i className="fa fa-play" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      )
    },
    {
      content: (
        <div className="two2">
          <img src={content.imageSrc} alt="App showcase" />
        </div>
      )
    }
  ];

  return (
    <div className="Appco">
      <Container>
        <div className="contt">
          <Row>
            {sections.map((section, index) => (
              <Col key={index}>
                {section.content}
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Appco;