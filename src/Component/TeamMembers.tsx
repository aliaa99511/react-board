import '../Style/TeamMembers.css';
import { Container, Row, Col } from 'reactstrap';

const TeamMembers = () => {
  const teamMembers = [
    {
      id: 1,
      image: 'images/1.png',
      name: 'Rala Emaia',
      position: 'Senior Director'
    },
    {
      id: 2,
      image: 'images/2.png',
      name: 'Rala Emaia',
      position: 'Senior Director'
    },
    {
      id: 3,
      image: 'images/3.png',
      name: 'Rala Emaia',
      position: 'Senior Director'
    }
  ];

  return (
    <div className="team-members-section text-center">
      <Container>
        <h1 className="team-members-title">Our Team</h1>
        <p className="team-members-description text-muted">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
        </p>
        <Row>
          {teamMembers.map(member => (
            <Col key={member.id}>
              <div className="team-member-card">
                <img src={member.image} alt={member.name} className="team-member-image" />
                <div className="team-member-info">
                  <h4>{member.name}</h4>
                  <p className="text-muted">{member.position}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default TeamMembers;