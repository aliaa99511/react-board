import '../Style/Hotel.css';
import { Card, Container, Badge, CardImg, CardTitle, CardText, CardDeck, CardSubtitle, CardBody, CardImgOverlay } from 'reactstrap';

const Hotel = () => {
  const hotelData = [
    {
      id: 1,
      image: "images/villa-1.jpg",
      feature: "FEATURE",
      sale: "FOR SALE",
      avatar: "images/comment_2.png",
      agent: "jonathan walters",
      title: "French Riviera villa",
      location: "180 york road,london,uk",
      type: "villa",
      price: "$5900/month",
      size: "780 sqft",
      beds: 4,
      baths: 3,
      cars: 2
    },
    {
      id: 2,
      image: "images/villa-2.jpg",
      feature: "FEATURE",
      sale: "FOR SALE",
      avatar: "images/comment_1.png",
      agent: "jonathan walters",
      title: "French Riviera villa",
      location: "180 york road,london,uk",
      type: "villa",
      price: "$5900/month",
      size: "780 sqft",
      beds: 4,
      baths: 3,
      cars: 2
    },
    {
      id: 3,
      image: "images/villa-3.jpg",
      feature: "FEATURE",
      sale: "FOR SALE",
      avatar: "images/comment_3.png",
      agent: "jonathan walters",
      title: "French Riviera villa",
      location: "180 york road,london,uk",
      type: "villa",
      price: "$5900/month",
      size: "780 sqft",
      beds: 4,
      baths: 3,
      cars: 2
    }
  ];

  return (
    <div className="Hotel">
      <Container>
        <CardDeck>
          {hotelData.map((hotel) => (
            <Card key={hotel.id}>
              <CardImg top width="100%" src={hotel.image} className="carimg" />
              <CardImgOverlay>
                <CardText className="flexx1">
                  <h6><Badge color="danger">{hotel.feature}</Badge></h6>
                  <h6><Badge color="info">{hotel.sale}</Badge></h6>
                </CardText>
                <CardText className="fleexx2">
                  <img src={hotel.avatar} className="pho" alt="agent" />
                  <p>{hotel.agent}</p>
                </CardText>
              </CardImgOverlay>
              <CardBody>
                <CardTitle className="text-center heed">{hotel.title}</CardTitle>
                <CardSubtitle className="text-center icon">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                  <span>{hotel.location}</span>
                  <i className="fa fa-tag" aria-hidden="true"></i>
                  <span>{hotel.type}</span>
                </CardSubtitle>
                <CardText className="text-center mon">{hotel.price}</CardText>
                <CardText className="count">
                  <i className="fa fa-arrows" aria-hidden="true"></i>
                  <span className="sta">{hotel.size}</span>
                  <i className="fa fa-bed" aria-hidden="true"></i>
                  <span className="sta1">{hotel.beds}</span>
                  <i className="fa fa-bath" aria-hidden="true"></i>
                  <span className="sta1">{hotel.baths}</span>
                  <i className="fa fa-car" aria-hidden="true"></i>
                  <span>{hotel.cars}</span>
                </CardText>
              </CardBody>
            </Card>
          ))}
        </CardDeck>
      </Container>
    </div>
  );
};

export default Hotel;