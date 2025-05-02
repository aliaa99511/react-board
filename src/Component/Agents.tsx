import '../Style/Agents.css';
import { Container, Row, Col } from 'reactstrap';

const Agents = () => {
  const teamData = [
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
    <div className="team-section">
      <Container>
        <Row>
          {teamData.map((member) => (
            <Col key={member.id}>
              <div className="team-card">
                <img src={member.image} alt={member.name} className="team-member-img" />
                <div className="team-card-content">
                  <div className="team-member-info">
                    <h4>{member.name}</h4>
                    <p className="text-muted">{member.position}</p>
                  </div>
                  <div className="social-links">
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
