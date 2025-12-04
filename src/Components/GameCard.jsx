import React, { useEffect, useState, useContext } from "react";
import { useLoaderData, useNavigate, Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const GameDescription = ({ description, id }) => {
  const words = description.split(" ");
  const shortText = words.slice(0, 30).join(" ");

  return (
    <p className="text-gray-600 text-justify">
      {words.length > 30 ? (
        <>
          {shortText}...
          <Link
            to={`/game-details/${id}`}
            className="text-blue-500 ml-1 font-semibold hover:underline"
          >
            Read More
          </Link>
        </>
      ) : (
        description
      )}
    </p>
  );
};

const GameCard = () => {
  const data = useLoaderData();
  const [games, setGames] = useState([]);
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (Array.isArray(data)) {
      const sortedGames = data
        .sort((a, b) => parseFloat(b.ratings) - parseFloat(a.ratings))
        .slice(0, 6);
      setGames(sortedGames);
    }
  }, [data]);

  const handleCardClick = (game) => {
    if (!user) {
      navigate("/login");
    } else {
      navigate(`/game-details/${game.id}`);
    }
  };

  return (
    <div className="w-11/12 mx-auto">
      <h1 className="text-3xl sm:text-4xl font-extrabold mb-12 text-[#7264e2] text-center">
        Popular Games
      </h1>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {games.map((game) => (
          <div
            key={game.id}
            onClick={() => handleCardClick(game)}
            className="cursor-pointer bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-2xl hover:scale-105 transition-transform duration-300 p-6 flex flex-col items-center gap-4"
          >
            <img
              src={game.coverPhoto}
              alt={game.title}
              className="w-full max-w-[400px] h-auto object-contain rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300"
            />
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 text-center">
              {game.title}
            </h2>
            <GameDescription description={game.description} id={game.id} />
            <p className="text-sm text-gray-500 text-center mt-2">
              ⭐ {game.ratings} | {game.developer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameCard;
