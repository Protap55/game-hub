import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const PopularGamesDetails = () => {
  const { id } = useParams();
  const [game, setGame] = useState(null);

  useEffect(() => {
    fetch("/popularGames.json")
      .then((res) => res.json())
      .then((data) => {
        const selected = data.find((g) => g.id === id);
        setGame(selected);
      });
  }, [id]);

  if (!game) return <p className="text-center py-20">Loading game...</p>;

  return (
    <div className="w-11/12 mx-auto py-35">
      <h1 className="text-4xl font-bold text-center text-[#7264e2] mb-8">
        {game.title} Details
      </h1>
      <div className="flex flex-col md:flex-row items-start gap-8">
        <img
          src={game.coverPhoto}
          alt={game.title}
          className="w-full md:w-1/3 h-72 object-contain rounded-xl shadow-lg"
        />
        <div className="md:w-2/3">
          <p className="text-gray-700 text-justify mb-4 whitespace-pre-line break-words leading-relaxed">
            {game.description}
          </p>
          <p className="text-gray-500 mb-2">Developer: {game.developer}</p>
          <p className="text-gray-500 mb-2">Rating: ⭐ {game.ratings}</p>
          <a
            href={game.downloadLink}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-block bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-green-400 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-300"
          >
            Download
          </a>
        </div>
      </div>
    </div>
  );
};

export default PopularGamesDetails;
