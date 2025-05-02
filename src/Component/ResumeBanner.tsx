import '../Style/ResumeBanner.css';
import { Container, Button } from 'reactstrap';

const ResumeBanner = () => {
  return (
    <div className="resume-banner">
      <div className="resume-banner__overlay">
        <Container>
          <h6 className="resume-banner__subtitle">FEATURED TOURS PACKAGES</h6>
          <h1 className="resume-banner__title">Make a Difference with Your Online Resume!</h1>
          <Button outline color="info" className="resume-banner__cta">
            UPLOAD YOUR CV
          </Button>{' '}
        </Container>
      </div>
    </div>
  );
};

export default ResumeBanner;