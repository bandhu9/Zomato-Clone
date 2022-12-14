import QuickCard from "./QuickCard";

const QuickCardContainer = () => {
  const quickCardData = [
    {
      id: " 1",
      image: "../../assets/Breakfast.png",
      title: "Breakfast",
      description: "Start your day with exclusive breakfast options",
    },
    {
      id: " 2",
      image: "../../assets/Lunch.png",
      title: "Lunch",
      description: "Start your day with exclusive breakfast options",
    },
    {
      id: " 3",
      image: "../../assets/Snacks.png",
      title: "Snacks",
      description: "Start your day with exclusive breakfast options",
    },
    {
      id: " 4",
      image: "../../assets/Dinner.png",
      title: "Dinner",
      description: "Start your day with exclusive breakfast options",
    },
    {
      id: " 5",
      image: "../../assets/Drinks.png",
      title: "Drinks",
      description: "Start your day with exclusive breakfast options",
    },
    {
      id: " 6",
      image: "../../assets/Nightlife.png",
      title: "NightLife",
      description: "Start your day with exclusive breakfast options",
    },
  ];
  return (
    <div className="quick">
      <h2>Quick Searches</h2>
      <p>Discover restaurants by type of meal</p>
      <div className="quick-card-container">
        {quickCardData.map((quickCard) => (
          <QuickCard key={quickCard.id} image={quickCard.image} title={quickCard.title} description={quickCard.description} />
        ))}
      </div>
    </div>
  );
};

export default QuickCardContainer;
