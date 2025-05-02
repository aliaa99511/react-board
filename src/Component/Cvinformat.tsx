import '../Style/Cvinformat.css';
import { Container, Button } from 'reactstrap';

const Cvinformat = () => {
  return (
    <div className="Cvinformat">
      <div className="overla">
        <Container>
          <h6>FEATURED TOURS PACKAGES</h6>
          <h1>Make a Difference with Your Online Resume!</h1>
          <Button outline color="info">
            UPLOAD your cv
          </Button>{' '}
        </Container>
      </div>
    </div>
  );
};

export default Cvinformat;