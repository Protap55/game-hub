import React from "react";
import Banner from "../../Components/Banner";
import GameCard from "../../Components/GameCard";
import NewsLatter from "../../Components/NewsLatter";
import TopPlayers from "../../Components/TopPlayers";
import FAQSection from "../../Components/FAQSection";

const Home = () => {
  return (
    <div className="space-y-20">
      <Banner></Banner>
      <GameCard></GameCard>
      <NewsLatter></NewsLatter>
      <TopPlayers></TopPlayers>
      <FAQSection></FAQSection>
    </div>
  );
};

export default Home;
