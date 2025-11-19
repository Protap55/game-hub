import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router";

const AllGames = () => {
  const data = useLoaderData();
  const [games, setGames] = useState([]);
  const navigate = useNavigate();

  const GameDescription = ({ description }) => {
    if (!description) return null;

    const words = description.split(" ");
    const shortText = words.slice(0, 25).join(" ");
    return (
      <p className="text-gray-600 text-justify text-sm">
        {words.length > 25 ? `${shortText}...` : description}
      </p>
    );
  };

  useEffect(() => {
    if (Array.isArray(data)) setGames(data);
  }, [data]);

  if (!games || games.length === 0)
    return <p className="text-center py-20">No games found</p>;

  const handleCardClick = (gameId) => {
    const selectedGame = games.find((g) => g.id === gameId);
    navigate(`/game/${gameId}`, { state: { game: selectedGame } });
  };

  return (
    <div className="w-11/12 mx-auto py-32">
      <h1 className="text-3xl sm:text-4xl font-extrabold mb-12 text-center text-[#7264e2]">
        All Games
      </h1>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {games.map((game) => (
          <div
            key={game.id}
            onClick={() => handleCardClick(game.id)}
            className="cursor-pointer bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-2xl hover:scale-105 transition-transform duration-300 p-6 flex flex-col items-center gap-4"
          >
            <img
              src={game.coverPhoto}
              alt={game.title}
              className="w-full max-w-[400px] h-48 object-contain rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300"
            />
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 text-center">
              {game.title}
            </h2>

            <GameDescription description={game.description} />

            <p className="text-sm text-gray-500 text-center mt-2">
              ⭐ {game.ratings} | {game.developer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllGames;
