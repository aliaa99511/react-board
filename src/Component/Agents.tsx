import '../Style/Agents.css';
import { Container, Row, Col } from 'reactstrap';

const Agents = () => {
  const agentsData = [
    {
      id: 1,
      image: 'images/team1.png',
      name: 'Rala Emaia',
      position: 'Senior Director'
    },
    {
      id: 2,
      image: 'images/team2.png',
      name: 'Rala Emaia',
      position: 'Senior Director'
    },
    {
      id: 3,
      image: 'images/team3.png',
      name: 'Rala Emaia',
      position: 'Senior Director'
    }
  ];

  return (
    <div className="Agents">
      <Container>
        <Row>
          {agentsData.map((agent) => (
            <Col key={agent.id}>
              <div className="soon">
                <img src={agent.image} alt={agent.name} />
                <div className="shadw">
                  <div className="titlee">
                    <h4>{agent.name}</h4>
                    <p className="text-muted">{agent.position}</p>
                  </div>
                  <div className="social">
                    <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id=">
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/">
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/">
                      <i className="fa fa-instagram"></i>
                    </a>
                    <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Agents;