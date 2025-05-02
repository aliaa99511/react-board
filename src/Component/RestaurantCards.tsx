import '../Style/RestaurantCards.css';
import { Card, Badge, CardImg, CardTitle, CardText, CardDeck, CardImgOverlay, CardSubtitle, CardBody, Container, Row, Col } from 'reactstrap';

const RestaurantCards = () => {
  const restaurants = [
    {
      id: 1,
      image: "images/card-1.png",
      badge: "popular",
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
      badge: "popular",
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
      badge: "popular",
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
    <div className="restaurant-cards-section">
      <Container>
        <Row>
          <CardDeck>
            {restaurants.map((restaurant) => (
              <Col sm="12" md="6" lg="4" key={restaurant.id}>
                <Card className={`restaurant-card restaurant-card-${restaurant.id}`}>
                  <CardImg top width="100%" src={restaurant.image} className="restaurant-image" />
                  <CardImgOverlay>
                    <CardTitle><h5><Badge color="danger">{restaurant.badge}</Badge></h5></CardTitle>
                    <CardText>
                      <img src={restaurant.overlayIcon} className="restaurant-overlay-icon" alt="overlay icon" />
                    </CardText>
                  </CardImgOverlay>
                  <CardBody>
                    <CardTitle>{restaurant.title}</CardTitle>
                    <CardSubtitle>
                      <div className="price-rating-container">
                        <div className="rating-stars">
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star-half-o" aria-hidden="true"></i>
                        </div>
                        <p className="price-range">{restaurant.price}</p>
                      </div>
                    </CardSubtitle>
                    <CardText>
                      <div className="location-container">
                        <i className="fa fa-map-marker" aria-hidden="true"></i>
                        <p className="restaurant-location">{restaurant.location}</p>
                      </div>
                    </CardText>
                    <CardText>
                      <div className="phone-container">
                        <i className="fa fa-phone" aria-hidden="true"></i>
                        <p>{restaurant.phone}</p>
                      </div>
                    </CardText>
                    <hr />
                    <div className="restaurant-footer">
                      <img src={restaurant.categoryIcon} className="category-icon" alt="category icon" />
                      <h6>{restaurant.category}</h6>
                      <p className="status">{restaurant.status}</p>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </CardDeck>
        </Row>
      </Container>
    </div>
  );
};

export default RestaurantCards;