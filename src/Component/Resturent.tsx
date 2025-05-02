import '../Style/Resturent.css'
import { Button } from 'reactstrap';

const Resturent = () => {
  const restaurantData = [
    {
      id: 1,
      image: "images/dining-img.png",
      subtitle: "OUR RESTURENT",
      title: "Dining & Drinks",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
      buttonText: "Learn more",
      buttonIcon: "fa fa-angle-right"
    }
    // You can add more restaurant objects here if needed
  ];

  return (
    <div className="Resturent">
      {restaurantData.map((item) => (
        <div className="mleft" key={item.id}>
          <img src={item.image} alt="Dining" />
          <div className="shadw">
            <h6>{item.subtitle}</h6>
            <h5>{item.title}</h5>
            <p className="text-muted">{item.description}</p>
            <Button outline color="warning">
              <span>{item.buttonText}</span>
              <i className={item.buttonIcon} aria-hidden="true"></i>
            </Button>{' '}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Resturent;