import '../Style/Gallery.css';
import { Container, Row, Col } from 'reactstrap';

const Gallery = () => {
  const galleryItems = [
    {
      containerClass: "gallery-item-container-1",
      images: [
        { src: "images/instagram1.png", imgClass: "gallery-image-1" },
        { src: "images/instagram6.png", imgClass: "gallery-image-2" }
      ]
    },
    {
      containerClass: "gallery-item-container-2",
      images: [
        { src: "images/slide_thumb_1.png", imgClass: "gallery-image-3" }
      ]
    },
    {
      containerClass: "gallery-item-container-3",
      images: [
        { src: "images/gallery3.jpg", imgClass: "gallery-image-4" },
        { src: "images/cat-post-1.jpg", imgClass: "gallery-image-5" }
      ]
    },
    {
      containerClass: "gallery-item-container-4",
      images: [
        { src: "images/card-2.png", imgClass: "gallery-image-6" },
        { src: "images/blog-4.jpg", imgClass: "gallery-image-7" }
      ]
    },
    {
      containerClass: "gallery-item-container-5",
      images: [
        { src: "images/post-img2.jpg", imgClass: "gallery-image-8" }
      ]
    },
    {
      containerClass: "gallery-item-container-6",
      images: [
        { src: "images/about2.png", imgClass: "gallery-image-9" },
        { src: "images/instagram6.png", imgClass: "gallery-image-10" }
      ]
    }
  ];

  return (
    <div className="gallery-section">
      <Container>
        <Row>
          {galleryItems.map((item, index) => (
            <Col key={index}>
              <div className={item.containerClass}>
                {item.images.map((img, imgIndex) => (
                  <img 
                    key={imgIndex} 
                    src={img.src} 
                    className={img.imgClass} 
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

export default Gallery;