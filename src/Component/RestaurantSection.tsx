import '../Style/RestaurantSection.css';
import { Button } from 'reactstrap';

const RestaurantSection = () => {
  const restaurantCards = [
    {
      id: 1,
      image: "images/dining-img.png",
      subtitle: "OUR RESTAURANT",
      title: "Dining & Drinks",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
      buttonText: "Learn more",
      buttonIcon: "fa fa-angle-right"
    },
  ];

  return (
    <div className="restaurant-section py-4">
      {restaurantCards.map((card) => (
        <div className="restaurant-card" key={card.id}>
          <img src={card.image} alt="Dining" className="restaurant-image" />
          <div className="restaurant-content">
            <h6 className="restaurant-subtitle">{card.subtitle}</h6>
            <h5 className="restaurant-title">{card.title}</h5>
            <p className="restaurant-description">{card.description}</p>
            <Button outline color="warning" className="restaurant-button">
              <span className="button-text">{card.buttonText}</span>
              <i className={card.buttonIcon} aria-hidden="true"></i>
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RestaurantSection;