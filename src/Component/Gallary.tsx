import '../Style/Gallary.css';
import { Container, Row, Col } from 'reactstrap';

const Gallary = () => {
  const galleryItems = [
    {
      className: "photo1",
      images: [
        { src: "images/instagram1.png", className: "img1" },
        { src: "images/instagram6.png", className: "img2" }
      ]
    },
    {
      className: "photo2",
      images: [
        { src: "images/slide_thumb_1.png", className: "img3" }
      ]
    },
    {
      className: "photo3",
      images: [
        { src: "images/gallery3.jpg", className: "img4" },
        { src: "images/cat-post-1.jpg", className: "img5" }
      ]
    },
    {
      className: "photo4",
      images: [
        { src: "images/card-2.png", className: "img6" },
        { src: "images/blog-4.jpg", className: "img7" }
      ]
    },
    {
      className: "photo5",
      images: [
        { src: "images/post-img2.jpg", className: "img8" }
      ]
    },
    {
      className: "photo6",
      images: [
        { src: "images/about2.png", className: "img9" },
        { src: "images/instagram6.png", className: "img10" }
      ]
    }
  ];

  return (
    <div className="Gallary">
      <Container>
        <Row>
          {galleryItems.map((item, index) => (
            <Col key={index}>
              <div className={item.className}>
                {item.images.map((img, imgIndex) => (
                  <img 
                    key={imgIndex} 
                    src={img.src} 
                    className={img.className} 
                    alt={`gallery item ${index}-${imgIndex}`} 
                  />
                ))}
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Gallary;