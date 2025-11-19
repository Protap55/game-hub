import React from "react";
import Banner from "../../Components/Banner";
import GameCard from "../../Components/GameCard";
import NewsLatter from "../../Components/NewsLatter";

const Home = () => {
  return (
    <div className="space-y-3">
      <Banner></Banner>
      <GameCard></GameCard>
      <NewsLatter></NewsLatter>
    </div>
  );
};

export default Home;
