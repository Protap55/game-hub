import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router";

const AllGames = () => {
  const data = useLoaderData();
  const [games, setGames] = useState([]);
  const [filteredGames, setFilteredGames] = useState([]);
  const [developerFilter, setDeveloperFilter] = useState("All");
  const [sortOption, setSortOption] = useState("title-asc");
  const navigate = useNavigate();

  // Short description component
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

  // Filter & Sort logic
  useEffect(() => {
    let tempGames = [...games];

    // Filter by developer
    if (developerFilter !== "All") {
      tempGames = tempGames.filter(
        (game) => game.developer === developerFilter
      );
    }

    // Sorting
    switch (sortOption) {
      case "title-asc":
        tempGames.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "title-desc":
        tempGames.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "ratings-asc":
        tempGames.sort((a, b) => a.ratings - b.ratings);
        break;
      case "ratings-desc":
        tempGames.sort((a, b) => b.ratings - a.ratings);
        break;
      default:
        break;
    }

    setFilteredGames(tempGames);
  }, [games, developerFilter, sortOption]);

  if (!games || games.length === 0)
    return <p className="text-center py-20">No games found</p>;

  const handleCardClick = (gameId) => {
    const selectedGame = games.find((g) => g.id === gameId);
    navigate(`/game/${gameId}`, { state: { game: selectedGame } });
  };

  // Unique developer list for filtering
  const developers = ["All", ...new Set(games.map((g) => g.developer))];

  return (
    <div className="w-11/12 mx-auto py-32">
      <h1 className="text-3xl sm:text-4xl font-extrabold mb-12 text-center text-[#7264e2]">
        All Games
      </h1>

      {/* Sorting & Filtering */}
      <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4">
        {/* Developer Filter */}
        <div>
          <label className="mr-2 font-medium text-gray-700">Filter by Developer:</label>
          <select
            value={developerFilter}
            onChange={(e) => setDeveloperFilter(e.target.value)}
            className="px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            {developers.map((dev) => (
              <option key={dev} value={dev}>
                {dev}
              </option>
            ))}
          </select>
        </div>

        {/* Sort Options */}
        <div>
          <label className="mr-2 font-medium text-gray-700">Sort by:</label>
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="title-asc">Title (A-Z)</option>
            <option value="title-desc">Title (Z-A)</option>
            <option value="ratings-asc">Ratings (Low → High)</option>
            <option value="ratings-desc">Ratings (High → Low)</option>
          </select>
        </div>
      </div>

      {/* Game Cards */}
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredGames.map((game) => (
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
