import '../Style/PropertyListing.css';
import { Card, Container, Badge, CardImg, CardTitle, CardText, CardDeck, CardSubtitle, CardBody, CardImgOverlay } from 'reactstrap';

const PropertyListing = () => {
  const propertyData = [
    {
      id: 1,
      image: "images/villa-1.jpg",
      feature: "FEATURE",
      sale: "FOR SALE",
      avatar: "images/comment_2.png",
      agent: "Jonathan Walters",
      title: "French Riviera Villa",
      location: "180 York Road, London, UK",
      type: "Villa",
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
      agent: "Jonathan Walters",
      title: "French Riviera Villa",
      location: "180 York Road, London, UK",
      type: "Villa",
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
      agent: "Jonathan Walters",
      title: "French Riviera Villa",
      location: "180 York Road, London, UK",
      type: "Villa",
      price: "$5900/month",
      size: "780 sqft",
      beds: 4,
      baths: 3,
      cars: 2
    }
  ];

  return (
    <div className="property-listing-section">
      <Container>
        <CardDeck className="property-cards">
          {propertyData.map((property) => (
            <Card key={property.id} className="property-card">
              <CardImg top width="100%" src={property.image} className="property-image" />
              <CardImgOverlay className="property-image-overlay">
                <CardText className="property-badges">
                  <h6><Badge color="danger">{property.feature}</Badge></h6>
                  <h6><Badge color="info">{property.sale}</Badge></h6>
                </CardText>
                <CardText className="property-agent">
                  <img src={property.avatar} className="agent-avatar" alt="Agent" />
                  <p>{property.agent}</p>
                </CardText>
              </CardImgOverlay>
              <CardBody className="property-details">
                <CardTitle className="property-title">{property.title}</CardTitle>
                <CardSubtitle className="property-meta">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                  <span>{property.location}</span>
                  <i className="fa fa-tag" aria-hidden="true"></i>
                  <span>{property.type}</span>
                </CardSubtitle>
                <CardText className="property-price">{property.price}</CardText>
                <CardText className="property-features">
                  <i className="fa fa-arrows" aria-hidden="true"></i>
                  <span className="property-size">{property.size}</span>
                  <i className="fa fa-bed" aria-hidden="true"></i>
                  <span className="property-beds">{property.beds}</span>
                  <i className="fa fa-bath" aria-hidden="true"></i>
                  <span className="property-baths">{property.baths}</span>
                  <i className="fa fa-car" aria-hidden="true"></i>
                  <span className="property-parking">{property.cars}</span>
                </CardText>
              </CardBody>
            </Card>
          ))}
        </CardDeck>
      </Container>
    </div>
  );
};

export default PropertyListing;