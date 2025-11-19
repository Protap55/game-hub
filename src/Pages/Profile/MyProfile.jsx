import React, { useContext } from "react";

import { AuthContext } from "../../Provider/AuthProvider";
import { useNavigate } from "react-router";

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!user) return <p className="text-center py-50">Loading...</p>;

  return (
    <div className="w-11/12 max-w-3xl mx-auto py-35">
      <h1 className="text-3xl font-bold text-center text-[#7264e2] mb-8">
        My Profile
      </h1>
      <div className="flex flex-col items-center gap-4">
        <img
          src={user?.photoURL || "/default-avatar.png"}
          alt={user?.displayName || "User"}
          className="w-32 h-32 rounded-full border-4 border-purple-500 object-cover"
        />
        <h2 className="text-2xl font-semibold">
          {user?.displayName || "No Name"}
        </h2>
        <p className="text-gray-500">{user?.email}</p>

        <button
          onClick={() => navigate("/update-profile")}
          className="mt-4 px-6 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg font-semibold transition"
        >
          Update Information
        </button>
      </div>
    </div>
  );
};

export default MyProfile;
