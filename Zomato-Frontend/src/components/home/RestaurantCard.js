const RestaurantCard = ({ image, name, location, address, cuisine, cost }) => {
  return (
    <div className="restaurant-card">
      <img src={image} alt={name} />
      <p className="restaurant-name">{name}</p>
      <p className="restaurant-location">{location}</p>
      <p className="restaurant-address">{address}</p>
      <p className="restaurant-cuisine">{cuisine}</p>
      <p className="restaurant-cost">{cost}</p>
    </div>
  );
};

export default RestaurantCard;
