import '../Style/Night.css';
import { Container, Row, Col, Media } from 'reactstrap';

const Night = () => {
  const mediaItems = [
    {
      id: 1,
      image: 'images/chooseus-icon-1.png',
      heading: 'Find your future home',
      text: 'We help you find a new home by offering a smart real estate.'
    },
    {
      id: 2,
      image: 'images/chooseus-icon-2.png',
      heading: 'Find your future home',
      text: 'We help you find a new home by offering a smart real estate.'
    },
    {
      id: 3,
      image: 'images/chooseus-icon-3.png',
      heading: 'Find your future home',
      text: 'We help you find a new home by offering a smart real estate.'
    },
    {
      id: 4,
      image: 'images/chooseus-icon-4.png',
      heading: 'Find your future home',
      text: 'We help you find a new home by offering a smart real estate.'
    }
  ];

  return (
    <div className="Night">
      <Container>
        <h3>WHY CHOOSE US</h3>
        <p className="tex">
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
        
        <div className="cont cont1">
          <Row>
            {mediaItems.slice(0, 2).map(item => (
              <Col key={item.id}>
                <div>
                  <Media>
                    <Media left href="#">
                      <Media object src={item.image} className="img" alt="Media object" />
                    </Media>
                    <Media body>
                      <Media heading className="head">{item.heading}</Media>
                      {item.text}
                    </Media>
                  </Media>
                </div>
              </Col>
            ))}
          </Row>
        </div>
        
        <div className="cont cont2">
          <Row>
            {mediaItems.slice(2, 4).map(item => (
              <Col key={item.id}>
                <div>
                  <Media>
                    <Media left href="#">
                      <Media object src={item.image} className="img" alt="Media object" />
                    </Media>
                    <Media body>
                      <Media heading className="head">{item.heading}</Media>
                      {item.text}
                    </Media>
                  </Media>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Night;