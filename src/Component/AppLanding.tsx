import '../Style/AppLanding.css';
import { Container, Row, Col, Button } from 'reactstrap';

const AppLanding = () => {
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
        <div className="landing-content">
          <h6 className="landing-subtitle">{content.title}</h6>
          <h1 className="landing-title">{content.heading}</h1>
          <p className="landing-description text-muted">{content.description}</p>
          <div className="action-buttons">
            <Button color="primary" className="download-button">{content.buttonText}</Button>
            <div className="play-icon-container">
              <i className="fa fa-play play-icon" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      )
    },
    {
      content: (
        <div className="landing-image-container">
          <img src={content.imageSrc} alt="App showcase" className="landing-image" />
        </div>
      )
    }
  ];

  return (
    <div className="app-landing-section">
      <Container>
        <div className="landing-container">
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

export default AppLanding;