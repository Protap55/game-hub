import React from "react";

const demoGames = [
  {
    id: "1",
    title: "Cyber Adventure",
    description: "Explore the futuristic world in this cyberpunk RPG.",
    coverPhoto:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2606270/5d5ff925b81df4016d1926540d37176bd21d346b/capsule_616x353.jpg?t=1757268783",
    developer: "CyberDev",
    ratings: 4.5,
  },
  {
    id: "2",
    title: "Mystic Quest",
    description: "Embark on a magical quest through enchanted lands.",
    coverPhoto:
      "https://preview.redd.it/31-years-ago-final-fantasy-mystic-quest-was-released-in-v0-xnszxmgfrynd1.png?auto=webp&s=f5e61c50bff9e3ca76bba91bf5d0042497b51a34",
    developer: "MysticGames",
    ratings: 4.8,
  },
  {
    id: "3",
    title: "Space Odyssey",
    description: "Travel through galaxies and complete missions.",
    coverPhoto:
      "https://static01.nyt.com/images/2018/05/15/science/15SCI-OUTTHERE1/15SCI-OUTTHERE1-videoSixteenByNineJumbo1600.jpg",
    developer: "GalaxyWorks",
    ratings: 4.2,
  },
];

const UpdateGame = () => {
  return (
    <div className="w-11/12 mx-auto py-35">
      <h1 className="text-3xl font-bold text-center text-[#7264e2] mb-12">
        Update Game
      </h1>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {demoGames.map((game) => (
          <div
            key={game.id}
            className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-2xl hover:scale-105 transition-transform duration-300 p-4 flex flex-col items-center gap-3"
          >
            <img
              src={game.coverPhoto}
              alt={game.title}
              className="w-full h-40 object-cover rounded-lg"
            />
            <h2 className="text-xl font-bold">{game.title}</h2>
            <p className="text-gray-600 text-center">{game.description}</p>
            <p className="text-gray-500">
              ⭐ {game.ratings} | {game.developer}
            </p>
            <button
              onClick={() => alert(`Update ${game.title}`)}
              className="mt-2 px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg font-semibold"
            >
              Update Game
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpdateGame;
