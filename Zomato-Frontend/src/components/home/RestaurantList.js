import RestaurantCard from "./RestaurantCard";

const RestaurantLists = () => {
  const restaurantData = [
    {
      id: 1,
      name: "Restaurant 1",
      location: "fort",
      address: "some address",
      cuisine: "indian",
      cost: "1000",
      image: "https://unsplash.com/s/photos/restaurant",
    },
    {
      id: 2,
      name: "Restaurant 1",
      location: "fort",
      address: "some address",
      cuisine: "indian",
      cost: "1000",
      image: "https://unsplash.com/s/photos/restaurant",
    },
    {
      id: 3,
      name: "Restaurant 1",
      location: "fort",
      address: "some address",
      cuisine: "indian",
      cost: "1000",
      image: "https://unsplash.com/s/photos/restaurant",
    },
    {
      id: 4,
      name: "Restaurant 1",
      location: "fort",
      address: "some address",
      cuisine: "indian",
      cost: "1000",
      image: "https://unsplash.com/s/photos/restaurant",
    },
    {
      id: 5,
      name: "Restaurant 1",
      location: "fort",
      address: "some address",
      cuisine: "indian",
      cost: "1000",
      image: "https://unsplash.com/s/photos/restaurant",
    },
    {
      id: 6,
      name: "Restaurant 1",
      location: "fort",
      address: "some address",
      cuisine: "indian",
      cost: "1000",
      image: "https://unsplash.com/s/photos/restaurant",
    },
    {
      id: 7,
      name: "Restaurant 1",
      location: "fort",
      address: "some address",
      cuisine: "indian",
      cost: "1000",
      image: "https://unsplash.com/s/photos/restaurant",
    },
    {
      id: 8,
      name: "Restaurant 1",
      location: "fort",
      address: "some address",
      cuisine: "indian",
      cost: "1000",
      image: "https://unsplash.com/s/photos/restaurant",
    },
    {
      id: 9,
      name: "Restaurant 1",
      location: "fort",
      address: "some address",
      cuisine: "indian",
      cost: "1000",
      image: "https://unsplash.com/s/photos/restaurant",
    },
    {
      id: 10,
      name: "Restaurant 1",
      location: "fort",
      address: "some address",
      cuisine: "indian",
      cost: "1000",
      image: "https://unsplash.com/s/photos/restaurant",
    },
  ];
  return (
    <>
      <h1>RestaurantLists</h1>;
      {restaurantData.map(({ image, name, location, address, cost, cuisine }) => {
        <RestaurantCard image={image} name={name} location={location} address={address} cost={cost} cuisine={cuisine} />;
      })}
    </>
  );
};

export default RestaurantLists;
