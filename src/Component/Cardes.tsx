import '../Style/Cardes.css';
import { Card, Badge, CardImg, CardTitle, CardText, CardDeck, CardImgOverlay, CardSubtitle, CardBody, Container } from 'reactstrap';

const Cardes = () => {
  const cardData = [
    {
      id: 1,
      image: "images/card-1.png",
      badge: "populer",
      overlayIcon: "images/icon-2.jfif",
      title: "Chinese Sausage Restaurant",
      price: "$40 - $70",
      location: "236 Littleton St. New Philadelphia, Ohio, United States",
      phone: "(+12) 345-678-910",
      categoryIcon: "images/icon-1.png",
      category: "Restaurant",
      status: "Open Now"
    },
    {
      id: 2,
      image: "images/card-2.png",
      badge: "populer",
      overlayIcon: "images/list.png",
      title: "Chinese Sausage Restaurant",
      price: "$40 - $70",
      location: "236 Littleton St. New Philadelphia, Ohio, United States",
      phone: "(+12) 345-678-910",
      categoryIcon: "images/icon-1.png",
      category: "Restaurant",
      status: "Open Now"
    },
    {
      id: 3,
      image: "images/card-3.png",
      badge: "populer",
      overlayIcon: "images/icon-5.png",
      title: "Chinese Sausage Restaurant",
      price: "$40 - $70",
      location: "236 Littleton St. New Philadelphia, Ohio, United States",
      phone: "(+12) 345-678-910",
      categoryIcon: "images/icon-1.png",
      category: "Restaurant",
      status: "Open Now"
    }
  ];

  return (
    <div className="Cardes">
      <Container>
        <CardDeck>
          {cardData.map((card) => (
            <Card key={card.id} className={`card${card.id}`}>
              <CardImg top width="100%" src={card.image} className="immg" />
              <CardImgOverlay>
                <CardTitle><h5><Badge color="danger">{card.badge}</Badge></h5></CardTitle>
                <CardText>
                  <img src={card.overlayIcon} className="os" alt="overlay icon" />
                </CardText>
              </CardImgOverlay>
              <CardBody>
                <CardTitle>{card.title}</CardTitle>
                <CardSubtitle>
                  <div className="prices">
                    <div className="icons">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star-half-o" aria-hidden="true"></i>
                    </div>
                    <p className="pric">{card.price}</p>
                  </div>
                </CardSubtitle>
                <CardText>
                  <div className="locati">
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                    <p className="loc">{card.location}</p>
                  </div>
                </CardText>
                <CardText>
                  <div className="phones">
                    <i className="fa fa-phone" aria-hidden="true"></i>
                    <p>{card.phone}</p>
                  </div>
                </CardText>
                <hr />
                <div className="restu">
                  <img src={card.categoryIcon} className="ccc" alt="category icon" />
                  <h6>{card.category}</h6>
                  <p>{card.status}</p>
                </div>
              </CardBody>
            </Card>
          ))}
        </CardDeck>
      </Container>
    </div>
  );
};

export default Cardes;