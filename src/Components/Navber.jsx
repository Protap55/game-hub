import React, { useContext, useState } from "react";
import logo from "../assets/logo.png";
import { NavLink, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logOut, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLogout = () => {
    logOut()
      .then(() => navigate("/"))
      .catch((err) => toast.error(err.message));
  };

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className="px-3 py-2 rounded-md hover:bg-purple-600 hover:text-white transition"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/all-games"
          className="px-3 py-2 rounded-md hover:bg-purple-600 hover:text-white transition"
        >
          Games
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/update-game/:id"
          className="px-3 py-2 rounded-md hover:bg-purple-600 hover:text-white transition"
        >
          Update
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className="px-3 py-2 rounded-md hover:bg-purple-600 hover:text-white transition"
        >
          About
        </NavLink>
      </li>
    </>
  );

  if (loading) {
    return (
      <div className="fixed top-0 w-full h-20 bg-black bg-opacity-30 z-50"></div>
    );
  }

  return (
    <motion.nav
      className="fixed top-0 w-full bg-black bg-opacity-30 z-50 shadow-md backdrop-blur-sm"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -50, opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
        <img
          src={logo}
          alt="Logo"
          className="w-44 h-28 max-h-20 object-contain"
        />

        <div className="hidden lg:flex items-center gap-4 ml-auto">
          <ul className="flex gap-2 text-lg font-medium text-white">{links}</ul>

          {!user && (
            <div className="flex gap-2">
              <NavLink
                to="/login"
                className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition"
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                className="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition"
              >
                Register
              </NavLink>
            </div>
          )}

          {user && (
            <div className="flex items-center gap-2">
              <img
                src={user.photoURL || "/default-avatar.png"}
                alt="Profile"
                className="w-12 h-12 rounded-full cursor-pointer border-2 border-purple-500"
                onClick={() => navigate("/my-profile")}
              />
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition"
              >
                Logout
              </button>
            </div>
          )}
        </div>

        <div className="lg:hidden">
          <button
            className="p-2 text-white rounded-md hover:bg-purple-600 transition"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="lg:hidden bg-black bg-opacity-30 text-white shadow-md backdrop-blur-sm"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <ul className="flex flex-col gap-2 px-4 py-4">{links}</ul>

            {!user && (
              <div className="flex flex-col gap-2 px-4 pb-4">
                <NavLink
                  to="/login"
                  className="px-4 py-2 bg-green-500 rounded-lg hover:bg-green-600 transition"
                  onClick={() => setMobileOpen(false)}
                >
                  Login
                </NavLink>
                <NavLink
                  to="/register"
                  className="px-4 py-2 bg-purple-500 rounded-lg hover:bg-purple-600 transition"
                  onClick={() => setMobileOpen(false)}
                >
                  Register
                </NavLink>
              </div>
            )}

            {user && (
              <div className="flex flex-col gap-2 px-4 pb-4">
                <button
                  onClick={() => {
                    navigate("/my-profile");
                    setMobileOpen(false);
                  }}
                  className="px-4 py-2 hover:bg-purple-600 rounded-lg transition text-left"
                >
                  My Profile
                </button>
                <button
                  onClick={() => {
                    handleLogout();
                    setMobileOpen(false);
                  }}
                  className="px-4 py-2  hover:bg-red-600 rounded-lg transition text-left"
                >
                  Logout
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
