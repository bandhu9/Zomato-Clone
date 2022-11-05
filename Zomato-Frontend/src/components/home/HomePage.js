import React from "react";
import Wallpaper from "./Wallpaper";
import QuickCardContainer from "./QuickCardContainer";
//import RestaurantLists from "./RestaurantLists";
//import QuickSearch from "./QuickSearch";

function HomePage() {
  return (
    <>
      <main className="container-fluid">
        <Wallpaper />
        <QuickCardContainer />
      </main>
    </>
  );
}

export default HomePage;
