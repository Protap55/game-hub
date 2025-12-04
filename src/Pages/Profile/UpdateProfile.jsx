import React, { useState } from "react";
import { useNavigate } from "react-router";

import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const UpdateProfile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [loading, setLoading] = useState(false);

  const handleUpdate = (e) => {
    e.preventDefault();
    setLoading(true);

    updateUserProfile(name, photoURL)
      .then(() => {
        setLoading(false);
        navigate("/my-profile");
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };

  return (
    <div className="w-11/12 max-w-md mx-auto py-35">
      <h1 className="text-3xl font-bold text-center text-[#7264e2] mb-8">
        Update Profile
      </h1>
      <form
        onSubmit={handleUpdate}
        className="flex flex-col gap-4 bg-white p-6 rounded-xl shadow-lg"
      >
        <label className="flex flex-col">
          Name
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </label>

        <label className="flex flex-col">
          Photo URL
          <input
            type="text"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            placeholder="Enter your photo URL"
            className="mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </label>

        <button
          type="submit"
          className="mt-4 px-6 py-2 bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-lg transition"
          disabled={loading}
        >
          {loading ? "Updating..." : "Update Information"}
        </button>
      </form>
    </div>
  );
};

export default UpdateProfile;
