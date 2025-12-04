import React from "react";
import { Link } from "react-router";

const topPlayers = [
  {
    id: 1,
    name: "Rakin Ahmed",
    score: 9820,
    avatar: "https://i.pravatar.cc/100?img=12",
  },
  {
    id: 2,
    name: "Protap Dutta",
    score: 9150,
    avatar:
      "https://images.unsplash.com/photo-1598096969068-7f52cac10c83?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW5kaWFuJTIwYm95fGVufDB8fDB8fHww",
  },
  {
    id: 3,
    name: "Jahid Hasan",
    score: 8910,
    avatar: "https://i.pravatar.cc/100?img=56",
  },
];

const TopPlayers = () => {
  return (
    <div className="max-w-5xl px-4 mx-auto ">
      <h2 className="text-3xl font-bold text-[#7264e2] text-center mb-8">
        🎮 Top Players
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {topPlayers.map((player) => (
          <div
            key={player.id}
            className="card bg-base-200 shadow-xl hover:scale-105 transition"
          >
            <div className="card-body items-center text-center">
              <div className="avatar mb-3">
                <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={player.avatar} alt={player.name} />
                </div>
              </div>

              <h2 className="card-title">{player.name}</h2>
              <p className="text-sm text-gray-400">Score: {player.score}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopPlayers;
